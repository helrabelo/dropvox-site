-- DropVox Licensing Schema
-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Licenses table
create table public.licenses (
  id uuid primary key default uuid_generate_v4(),
  license_key text unique not null,
  email text not null,
  major_version int not null default 1,
  stripe_payment_intent_id text unique,
  stripe_customer_id text,
  created_at timestamptz default now(),
  is_active boolean default true
);

-- Machine activations (max 3 per license)
create table public.license_activations (
  id uuid primary key default uuid_generate_v4(),
  license_id uuid references public.licenses(id) on delete cascade,
  machine_id text not null,
  machine_name text,
  os_version text,
  activated_at timestamptz default now(),
  last_validated_at timestamptz default now(),
  unique(license_id, machine_id)
);

-- Daily usage tracking for free tier
create table public.usage_tracking (
  id uuid primary key default uuid_generate_v4(),
  machine_id text not null,
  usage_date date not null default current_date,
  transcription_count int default 0,
  unique(machine_id, usage_date)
);

-- Indexes
create index idx_licenses_key on public.licenses(license_key);
create index idx_licenses_email on public.licenses(email);
create index idx_activations_license on public.license_activations(license_id);
create index idx_activations_machine on public.license_activations(machine_id);
create index idx_usage_machine_date on public.usage_tracking(machine_id, usage_date);

-- Function to enforce 3-machine limit
create or replace function check_activation_limit()
returns trigger as $$
begin
  if (select count(*) from public.license_activations where license_id = NEW.license_id) >= 3 then
    raise exception 'ACTIVATION_LIMIT_REACHED';
  end if;
  return NEW;
end;
$$ language plpgsql;

create trigger enforce_activation_limit
  before insert on public.license_activations
  for each row execute function check_activation_limit();

-- RLS policies
alter table public.licenses enable row level security;
alter table public.license_activations enable row level security;
alter table public.usage_tracking enable row level security;

-- Service role can do everything (for API)
create policy "Service role full access licenses" on public.licenses
  for all using (auth.role() = 'service_role');
create policy "Service role full access activations" on public.license_activations
  for all using (auth.role() = 'service_role');
create policy "Service role full access usage" on public.usage_tracking
  for all using (auth.role() = 'service_role');

-- Cleanup old usage tracking (optional, run periodically)
-- delete from public.usage_tracking where usage_date < current_date - interval '30 days';

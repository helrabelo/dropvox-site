export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readingTime: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-transcribe-whatsapp-audio-mac",
    title: "How to Transcribe WhatsApp Audio Messages on Mac",
    description:
      "Learn how to easily transcribe WhatsApp voice messages on your Mac using DropVox. A step-by-step guide to converting audio to text locally and privately.",
    date: "2025-01-15",
    author: "Hel Rabelo",
    readingTime: "5 min read",
    tags: ["whatsapp", "transcription", "mac", "tutorial"],
    content: `
## Why Transcribe WhatsApp Audio Messages?

WhatsApp voice messages are incredibly popular - they're quick to send and feel more personal than text. But sometimes you need the text version:

- **In meetings or quiet spaces** where you can't listen
- **For accessibility** when you prefer reading
- **To search and reference** important information later
- **For documentation** of important conversations

## The Problem with Cloud-Based Solutions

Most transcription services require uploading your audio to their servers. This raises privacy concerns:

- Your voice messages are processed on someone else's computer
- Data could be stored, analyzed, or shared
- Internet connection is required
- Sensitive conversations become exposed

## The DropVox Solution

DropVox transcribes everything **locally on your Mac** using the Whisper AI model. Here's what that means:

1. **100% Private**: Your audio never leaves your computer
2. **No Internet Required**: Works completely offline
3. **No Account Needed**: No sign-ups, no tracking
4. **Free Forever**: Open source and community-driven

## Step-by-Step Guide

### 1. Download DropVox

Download the latest version from our website or GitHub releases. It's a simple DMG file that installs like any Mac app.

### 2. Launch the App

DropVox lives in your menu bar - you'll see a small icon that gives you quick access to all features.

### 3. Get Your WhatsApp Audio

In WhatsApp Desktop or Web:
- Right-click on any voice message
- Select "Forward" and save it to your computer
- Or use the share feature to save the audio file

### 4. Transcribe

You have two options in DropVox:
- **Select Audio File**: Navigate to the saved audio file
- **Paste from Clipboard**: If you copied the audio file

The transcription starts immediately and typically completes in seconds.

### 5. Use Your Transcription

The text is automatically copied to your clipboard. You can also:
- View it in the app's history
- Copy it again anytime
- See all your recent transcriptions

## Tips for Best Results

- **Clear audio works best**: Background noise can affect accuracy
- **Multiple languages**: DropVox supports 15+ languages automatically
- **Long messages**: Even lengthy voice messages transcribe quickly

## Conclusion

With DropVox, transcribing WhatsApp audio messages is fast, private, and free. No more struggling to listen in quiet environments or missing important information buried in voice messages.

Download DropVox today and take control of your audio transcriptions.
    `,
  },
  {
    slug: "best-whisper-transcription-apps-mac",
    title: "Best Whisper Transcription Apps for Mac in 2025",
    description:
      "Compare the top Whisper-based transcription apps for macOS. Find out which local AI transcription tool is right for your needs.",
    date: "2025-01-10",
    author: "Hel Rabelo",
    readingTime: "7 min read",
    tags: ["whisper", "mac", "comparison", "ai"],
    content: `
## What is Whisper?

Whisper is OpenAI's revolutionary speech recognition model. Unlike traditional transcription services, Whisper:

- Handles multiple languages (100+)
- Works with various accents and audio quality
- Can run locally on your computer
- Is completely open source

## Why Local Whisper Apps Matter

Running Whisper locally offers significant advantages:

### Privacy
Your audio stays on your device. No cloud uploads, no data retention policies to worry about, no third-party access.

### Speed
No upload/download time. Processing starts immediately and results appear in seconds.

### Cost
Most cloud transcription services charge per minute. Local apps are typically free or one-time purchase.

### Offline Access
Internet outages don't affect your ability to transcribe.

## Top Whisper Apps for Mac

### DropVox

**Best for**: WhatsApp audio messages and quick transcriptions

DropVox is a lightweight menu bar app designed for quick, everyday transcription needs.

**Pros:**
- Lives in menu bar for instant access
- Clipboard integration
- Transcription history
- Completely free and open source
- Minimal resource usage

**Cons:**
- Focused on simplicity (fewer advanced features)
- macOS only

### MacWhisper

**Best for**: Professional transcription work

MacWhisper offers a full-featured transcription environment.

**Pros:**
- Multiple model sizes
- Timestamp support
- Export formats
- Batch processing

**Cons:**
- Paid app
- Higher system requirements

### Whisper Transcription

**Best for**: Developers and power users

A more technical option with command-line roots.

**Pros:**
- Maximum flexibility
- API access
- Custom configurations

**Cons:**
- Steeper learning curve
- Less polished UI

## How to Choose

Consider these factors:

1. **Use case**: Quick daily transcriptions? Professional work?
2. **Technical comfort**: Do you want simplicity or customization?
3. **Budget**: Free vs paid options
4. **System resources**: Some models need significant RAM/CPU

## Why We Built DropVox

We created DropVox because we needed a tool that:

- **Just works**: Click and transcribe
- **Stays private**: No cloud, no accounts
- **Feels native**: Lives in the menu bar
- **Costs nothing**: Free for everyone

For users who receive lots of voice messages and want quick, private transcription, DropVox fills a gap that other apps don't address.

## Conclusion

The best Whisper app depends on your needs. For everyday users who want quick, private transcription of voice messages, DropVox is an excellent choice. For professional transcription work with advanced features, consider MacWhisper.

Try DropVox free today and see how local AI transcription can fit into your workflow.
    `,
  },
  {
    slug: "private-offline-transcription-guide",
    title: "The Complete Guide to Private, Offline Transcription",
    description:
      "Why privacy matters for audio transcription and how to keep your voice data secure with local AI tools like DropVox.",
    date: "2025-01-05",
    author: "Hel Rabelo",
    readingTime: "6 min read",
    tags: ["privacy", "security", "offline", "guide"],
    content: `
## The Privacy Problem with Cloud Transcription

When you use a cloud-based transcription service, here's what typically happens:

1. Your audio file is uploaded to remote servers
2. It's processed by third-party systems
3. Results may be stored for "quality improvement"
4. Your data is subject to their privacy policy

For personal conversations, medical discussions, business meetings, or legal matters, this creates real risks.

## What Data Is at Risk?

Voice messages often contain:

- **Personal information**: Names, addresses, phone numbers
- **Financial details**: Account numbers, transaction discussions
- **Medical information**: Health discussions, doctor's notes
- **Business secrets**: Strategy discussions, client information
- **Emotional content**: Private conversations, family matters

## Why "Delete After Processing" Isn't Enough

Even services that promise to delete your data face challenges:

- Backups may retain copies
- Logs might include metadata
- Transit encryption doesn't prevent server-side access
- Company policies can change
- Data breaches happen

## The Local Processing Solution

Local transcription eliminates these concerns entirely:

### Your Audio Never Leaves Your Device

When you use DropVox or similar local tools:
- Audio files stay on your Mac
- Processing happens using your CPU
- No internet connection is needed
- No third-party ever touches your data

### No Account Required

Cloud services need accounts for:
- Billing
- Usage tracking
- Data association
- Marketing

Local apps like DropVox need none of this. Download, install, use. That's it.

### Open Source Transparency

DropVox is open source. This means:
- Anyone can verify what the code does
- No hidden data collection
- Community oversight
- Trust through transparency

## Setting Up Private Transcription

### Step 1: Choose a Local Tool

DropVox is designed for privacy-first transcription:
- No network requests during transcription
- No analytics or tracking
- No account creation
- Open source code

### Step 2: Understand the Process

When you transcribe with DropVox:
1. You select or paste an audio file
2. The Whisper AI model processes it locally
3. Text appears in the app
4. Result is copied to clipboard
5. History stays on your device

### Step 3: Manage Your Data

DropVox stores transcription history locally. You control:
- What to keep
- What to delete
- Where files are stored

## Best Practices for Audio Privacy

### Before Transcription
- Download audio files rather than streaming
- Use secure, local storage
- Be aware of what you're transcribing

### During Use
- Keep your system secure
- Use disk encryption (FileVault on Mac)
- Regular backups of important transcriptions

### After Transcription
- Delete source files if no longer needed
- Clear history of sensitive transcriptions
- Secure any exported text

## When Cloud Services Make Sense

Local transcription isn't always necessary. Cloud services may be appropriate for:

- Public content (podcasts, lectures)
- Non-sensitive material
- When you need advanced features
- Team collaboration features

But for private, personal, or sensitive audio, local processing is the safer choice.

## The Future of Private AI

As AI becomes more powerful, the ability to run it locally becomes more important:

- Models are getting smaller and more efficient
- Consumer hardware is getting more powerful
- Privacy awareness is increasing

Tools like DropVox represent a future where powerful AI respects user privacy by design.

## Conclusion

Private transcription isn't paranoid - it's prudent. With tools like DropVox, you get the benefits of AI transcription without sacrificing your privacy.

Your voice messages are personal. Keep them that way.

Download DropVox and start transcribing privately today.
    `,
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

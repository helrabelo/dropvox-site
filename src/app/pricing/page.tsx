import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { CheckoutButton } from "@/components/ui/CheckoutButton";

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-green-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="w-5 h-5 text-slate-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default function PricingPage() {
  const freeFeatures = [
    { text: "3 transcriptions per day", included: true },
    { text: "60 second max audio", included: true },
    { text: "Large Whisper model", included: true },
    { text: "100+ languages", included: true },
    { text: "Longer audio files", included: false },
    { text: "Unlimited transcriptions", included: false },
  ];

  const proFeatures = [
    { text: "Unlimited transcriptions", included: true },
    { text: "No audio length limit", included: true },
    { text: "All Whisper models", included: true },
    { text: "100+ languages", included: true },
    { text: "Priority support", included: true },
    { text: "Use on 3 machines", included: true },
  ];

  const faqs = [
    {
      question: "How does the license work?",
      answer:
        "Your license is a one-time purchase valid for DropVox v1.x. You can use it on up to 3 machines. When v2 releases with major new features, you'll have the option to upgrade.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards through Stripe. Your payment information is never stored on our servers.",
    },
    {
      question: "Can I get a refund?",
      answer:
        "Yes, we offer a 14-day money-back guarantee. If you're not satisfied, contact us for a full refund.",
    },
    {
      question: "What happens to my transcriptions?",
      answer:
        "All transcriptions happen locally on your Mac using Whisper AI. Your audio never leaves your computer - we have no access to your data.",
    },
    {
      question: "Do I need an internet connection?",
      answer:
        "Internet is only needed to validate your license occasionally. Transcription itself works completely offline after the Whisper model is downloaded.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="DropVox"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-semibold text-lg">DropVox</span>
            </Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Simple,{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                transparent
              </span>{" "}
              pricing
            </h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Start free with 3 transcriptions per day. Upgrade to Pro for
              unlimited transcriptions and longer audio files.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Tier */}
            <FadeIn delay={200}>
              <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Free
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Perfect for trying out DropVox
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    $0
                  </span>
                  <span className="text-slate-500 ml-2">forever</span>
                </div>
                <Link
                  href="/"
                  className="block w-full text-center py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 font-medium transition-colors mb-8"
                >
                  Download Free
                </Link>
                <ul className="space-y-4">
                  {freeFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      {feature.included ? <CheckIcon /> : <XIcon />}
                      <span
                        className={
                          feature.included
                            ? "text-slate-700 dark:text-slate-300"
                            : "text-slate-400"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Pro Tier */}
            <FadeIn delay={300}>
              <div className="relative rounded-2xl border-2 border-indigo-500 bg-white dark:bg-slate-800 p-8">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Pro
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  For power users who need more
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    $12.99
                  </span>
                  <span className="text-slate-500 ml-2">one-time</span>
                </div>
                <CheckoutButton />
                <ul className="space-y-4">
                  {proFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckIcon />
                      <span className="text-slate-700 dark:text-slate-300">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {faq.answer}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/icon.png"
              alt="DropVox"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Built by{" "}
              <a
                href="https://github.com/helrabelo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Hel Rabelo
              </a>
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link
              href="/"
              className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              Home
            </Link>
            <a
              href="https://github.com/helsky-labs/dropvox"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

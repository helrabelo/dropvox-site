import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { PostHogProvider } from "@/components/providers/PostHogProvider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const BASE_URL = "https://dropvox.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "DropVox - Transcribe WhatsApp Audio Messages on Mac",
    template: "%s | DropVox",
  },
  description:
    "DropVox is a free macOS menu bar app that transcribes WhatsApp voice messages and audio files using AI. 100% local, private, and offline.",
  keywords: [
    "whatsapp voice message transcription",
    "mac audio transcription",
    "whisper transcription",
    "voice to text mac",
    "audio transcription app",
    "menu bar app",
    "macos transcription",
    "offline transcription",
    "private transcription",
    "local ai transcription",
    "whatsapp audio to text",
    "mac voice to text",
    "free transcription app",
  ],
  authors: [{ name: "Hel Rabelo", url: "https://github.com/helrabelo" }],
  creator: "Hel Rabelo",
  publisher: "Hel Rabelo",
  applicationName: "DropVox",
  category: "Utilities",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "pt-BR": "/",
    },
  },
  openGraph: {
    title: "DropVox - Transcribe WhatsApp Audio Messages",
    description:
      "Free macOS menu bar app for transcribing audio files using AI. 100% local and private.",
    type: "website",
    locale: "en_US",
    alternateLocale: "pt_BR",
    url: BASE_URL,
    siteName: "DropVox",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DropVox - WhatsApp Audio Transcription for Mac",
      },
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "DropVox Icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DropVox - Audio Transcription for Mac",
    description:
      "Free macOS menu bar app for transcribing audio files using AI. 100% local and private.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual code when available
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100`}
      >
        <PostHogProvider>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider>{children}</ThemeProvider>
          </NextIntlClientProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}

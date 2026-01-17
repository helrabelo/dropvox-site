import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { PostHogProvider } from "@/components/providers/PostHogProvider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DropVox - Transcribe WhatsApp Audio Messages on Mac",
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
  ],
  authors: [{ name: "Hel Rabelo" }],
  openGraph: {
    title: "DropVox - Transcribe WhatsApp Audio Messages",
    description:
      "Free macOS menu bar app for transcribing audio files using AI. 100% local and private.",
    type: "website",
    locale: "en_US",
    images: ["/icon.png"],
  },
  twitter: {
    card: "summary",
    title: "DropVox - Audio Transcription for Mac",
    description:
      "Free macOS menu bar app for transcribing audio files using AI. 100% local and private.",
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

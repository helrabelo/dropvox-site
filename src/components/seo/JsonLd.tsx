export function JsonLd() {
  const baseUrl = "https://dropvox.app";

  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DropVox",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "macOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Free macOS menu bar app for transcribing WhatsApp voice messages and audio files using local AI. 100% private and offline.",
    softwareVersion: "0.7.2",
    downloadUrl: `${baseUrl}`,
    screenshot: `${baseUrl}/icon.png`,
    author: {
      "@type": "Person",
      name: "Hel Rabelo",
      url: "https://github.com/helrabelo",
    },
    publisher: {
      "@type": "Person",
      name: "Hel Rabelo",
    },
    featureList: [
      "Local AI transcription using Whisper",
      "15+ language support",
      "Menu bar integration",
      "Clipboard support",
      "Transcription history",
      "100% offline and private",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DropVox",
    url: baseUrl,
    description:
      "DropVox is a free macOS menu bar app that transcribes WhatsApp voice messages and audio files using AI.",
    publisher: {
      "@type": "Person",
      name: "Hel Rabelo",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DropVox",
    url: baseUrl,
    logo: `${baseUrl}/icon.png`,
    sameAs: ["https://github.com/helsky-labs/dropvox"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
    </>
  );
}

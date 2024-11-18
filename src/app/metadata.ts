export const defaultMetadata = {
  metadataBase: new URL('https://innovatr.io'), // Replace with your actual domain
  title: {
    default: "Innovatr - Revolutionizing Ownership",
    template: "%s | Innovatr"
  },
  description: "Innovatr is a platform for fractional ownership of high-value assets and intellectual property.",
  keywords: ["blockchain", "ownership", "tokenization", "assets", "intellectual property", "decentralized"],
  authors: [{ name: "Innovatr" }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Innovatr',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@innovatr', // Replace with your Twitter handle
  },
};

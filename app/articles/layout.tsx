import type { Metadata, Viewport } from "next";
import JsonLdArticles from "@/components/json-ld-articles";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.psychoz.fr'),
  title: "Psychoz - Votre Blog Psychologie - Articles",
  description: "Psychoz est un blog sur la psychologie, visant à vous aider à comprendre le fonctionnement de votre cerveau et à vivre une vie meilleure.",
  keywords: ["psychologie", "cerveau", "psychologie cognitive", "psychologie du travail", "psychologie du développement", "psychologie du stress", "psychologie du bien-être", "psychologie du travail", "psychologie du développement", "psychologie du comportement", "psychologie du stress", "psychologie du bien-être"],
  authors: [{ name: "Psychoz", url: "https://www.psychoz.fr" }],
  creator: "Psychoz",
  publisher: "Psychoz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.psychoz.fr",
    title: "Psychoz - Votre Blog Psychologie - Articles",
    description: "Psychoz est un blog sur la psychologie, visant à vous aider à comprendre le fonctionnement de votre cerveau et à vivre une vie meilleure.",
    siteName: "Psychoz",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Psychoz - Votre Blog Psychologie - Articles",
      },
    ],
  },
  icons: {
    icon: "Logo.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychoz - Votre Blog Psychologie - Articles",
    description: "Psychoz est un blog sur la psychologie, visant à vous aider à comprendre le fonctionnement de votre cerveau et à vivre une vie meilleure.",
    images: ["/Logo.png"],
  },
  alternates: {
    canonical: "https://www.psychoz.fr",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function ArticlesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLdArticles />
    <main className="bg-white py-24">{children}</main>
    </>
  );
}

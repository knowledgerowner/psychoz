import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.psychoz.fr'),
  title: "Psychoz - Contact",
  description: "Contactez-nous pour toute question ou demande de service. Nous sommes à votre écoute pour vous aider.",
  keywords: ["contactez-nous", "a propos de psychoz", "solutions psychoz", "probleme linux", "psychologie", "probleme mac", "probleme psy", "probleme psychique", "probleme web", "probleme mobile", "probleme desktop", "probleme server", "probleme network", "probleme securite", "probleme performance", "probleme maintenance", "probleme support", "probleme formation", "probleme conseil", "probleme audit", "probleme conception", "probleme programmation", "probleme conseil en psychologie"],
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
    url: "https://www.psychoz.fr/contact",
    title: "Psychoz - Contact",
    description: "Psychoz est un blog sur la psychologie, visant à vous aider à comprendre le fonctionnement de votre cerveau et à vivre une vie meilleure.",
    siteName: "Psychoz",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Psychoz - Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychoz - Contact",
    description: "Psychoz est un blog sur la psychologie, visant à vous aider à comprendre le fonctionnement de votre cerveau et à vivre une vie meilleure.",
    images: ["/Logo.png"],
  },
  alternates: {
    canonical: "https://www.psychoz.fr/contact",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (  
    <main className="pt-24">{children}</main>
  );
}

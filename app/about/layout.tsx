import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.psychoz.fr'),
  title: "Psychoz - À propos",
  description: "Découvrez Psychoz, notre mission et notre équipe ainsi que nos partenaires qui travaillent en étroite collaboration avec nous.",
  keywords: ["a propos de psychoz", "solutions psychoz", "problemes santé mentale", "psychologie", "probleme mac", "probleme psy", "probleme psychique", "probleme web", "probleme mobile", "probleme desktop", "probleme server", "probleme network", "probleme securite", "probleme performance", "probleme maintenance", "probleme support", "probleme formation", "probleme conseil", "probleme audit", "probleme conception", "probleme programmation", "probleme conseil en psychologie"],
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
    url: "https://www.psychoz.fr/about",
    title: "Psychoz - À propos",
    description: "Psychoz est un site de questions et réponses pour trouver les réponses à vos questions. Nous offrons des articles techniques, des tutoriels, des conseils et des astuces pour aider vous à devenir un expert en technologie.",
    siteName: "Psychoz",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Psychoz - À propos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychoz - À propos",
    description: "Psychoz est un site de questions et réponses pour trouver les réponses à vos questions. Nous offrons des articles techniques, des tutoriels, des conseils et des astuces pour aider vous à devenir un expert en technologie.",
    images: ["/Logo.png"],
  },
  alternates: {
    canonical: "https://www.psychoz.fr/about",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (  
    <main className="pt-24">{children}</main>
  );
}

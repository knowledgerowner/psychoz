import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { AnalyticsTracker } from "@/components/analytics-tracker";
import PaymentStatusWrapper from "@/components/payment-status-wrapper";
import { NotificationProvider } from "@/lib/contexts/NotificationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.psychoz.fr'),
  title: "Psychoz - Votre Blog Psychologie",
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
    title: "Psychoz - Votre Blog Psychologie",
    description: "Psychoz est un site de questions et réponses pour trouver les réponses à vos questions. Nous offrons des articles techniques, des tutoriels, des conseils et des astuces pour aider vous à devenir un expert en technologie.",
    siteName: "Psychoz",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Psychoz - Votre Blog Psychologie",
      },
    ],
  },
  icons: {
    icon: "Logo.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychoz - Votre Blog Psychologie",
    description: "Psychoz est un site de questions et réponses pour trouver les réponses à vos questions. Nous offrons des articles techniques, des tutoriels, des conseils et des astuces pour aider vous à devenir un expert en technologie.",
    images: ["/Logo.png"],
  },
  alternates: {
    canonical: "https://www.psychoz.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Psychoz",
                "url": "https://www.psychoz.fr",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.psychoz.fr/Logo.png",
                  "width": 512,
                  "height": 512
                },
                "image": "https://www.psychoz.fr/Logo.png",
                "description": "Psychoz est un site de questions et réponses pour trouver les réponses à vos questions. Nous offrons des articles techniques, des tutoriels, des conseils et des astuces pour aider vous à devenir un expert en technologie.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bordeaux",
                  "addressRegion": "Nouvelle-Aquitaine",
                  "addressCountry": "FR"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+33-6-43-32-34-12",
                  "contactType": "customer service",
                  "availableLanguage": "French"
                },
                "sameAs": [
                  "https://www.psychoz.fr"
                ],
                "areaServed": {
                  "@type": "Place",
                  "name": "Bordeaux, Arcachon, Pessac, Mérignac, Marcheprime, Biganos, Gironde, France, La Teste-de-Buch, Gujan-Mestras, Le Teich, Cestas"
                },
                "foundingDate": "2024",
                "founder": {
                  "@type": "Person",
                  "name": "Psychoz Team"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Services Psychoz",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Articles",
                        "description": "Trouvez les réponses à vos questions sur Psychoz",
                        "url": "https://www.psychoz.fr/articles",
                        "category": "Articles"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "À propos",
                        "description": "Découvrez Psychoz, notre mission et notre équipe",
                        "url": "https://www.psychoz.fr/about",
                        "category": "À propos"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Contact",
                        "description": "Contactez-nous pour toute question ou demande de service",
                        "url": "https://www.psychoz.fr/contact",
                        "category": "Contact"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Partenaires",
                        "description": "Découvrez nos partenaires et collaborateurs",
                        "url": "https://www.psychoz.fr/partners",
                        "category": "Partenaires"
                      }
                    }
                  ]
                }
              })
            }}
          />

          {/* JSON-LD pour le site web */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Psychoz",
                "url": "https://www.psychoz.fr",
                "description": "Psychoz est un blog sur la psychologie, visant à vous aider à comprendre le fonctionnement de votre cerveau et à vivre une vie meilleure.",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.psychoz.fr/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Psychoz"
                }
              })
            }}
          />

          {/* JSON-LD pour les liens de navigation */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "Services Psychoz",
                "description": "Liste des services proposés par Psychoz",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@type": "WebPage",
                      "name": "Articles",
                      "url": "https://www.psychoz.fr/articles",
                      "description": "Trouvez les réponses à vos questions sur Psychoz"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@type": "WebPage",
                      "name": "A propos",
                      "url": "https://www.psychoz.fr/about",
                      "description": "Découvrez Psychoz, notre mission et notre équipe"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                      "@type": "WebPage",
                      "name": "Contact",
                      "url": "https://www.psychoz.fr/contact",
                      "description": "Contactez-nous pour toute question ou demande de service"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                      "@type": "WebPage",
                      "name": "Partenaires",
                      "url": "https://www.psychoz.fr/partners",
                      "description": "Découvrez nos partenaires et collaborateurs"
                    }
                  }
                ]
              })
            }}
          />
        </head>
      <body className={inter.className + " bg-white"}>
        <NotificationProvider>
          <AnalyticsTracker />
            <Navigation />
              <main className="bg-white py-24">{children}</main>
            <Footer />
          <PaymentStatusWrapper />
        </NotificationProvider>
      </body>
    </html>
  );
}

'use client';

import { Card, CardContent } from "@/components/ui/card";

const faqCategories = [
  {
    question: "Qu'est-ce que la psychologie cognitive et pourquoi est-ce important ?",
    answer: "La psychologie cognitive étudie les processus mentaux comme la mémoire, l'attention, la perception et la résolution de problèmes. Elle est cruciale car elle nous aide à comprendre comment notre cerveau traite l'information et comment optimiser nos capacités mentales au quotidien."
  },
  {
    question: "Comment la psychologie sociale influence-t-elle nos comportements ?",
    answer: "La psychologie sociale montre comment le contexte social, les normes de groupe et l'influence des autres affectent nos comportements. Nous sommes plus influençables que nous le pensons, notamment par l'effet de conformité, l'obéissance à l'autorité et la diffusion de responsabilité."
  },
  {
    question: "Quelles sont les techniques de gestion du stress les plus efficaces ?",
    answer: "Les techniques les plus efficaces incluent la respiration profonde, la relaxation musculaire progressive, la méditation de pleine conscience, l'exercice physique régulier, et la restructuration cognitive. Identifiez vos déclencheurs de stress et développez un réseau de soutien social."
  },
  {
    question: "Comment développer son intelligence émotionnelle ?",
    answer: "Développez votre intelligence émotionnelle en pratiquant la pleine conscience, en identifiant vos émotions, en gérant le stress, en améliorant votre communication interpersonnelle et en cultivant l'empathie. La pratique régulière de ces compétences renforce votre quotient émotionnel."
  },
  {
    question: "Qu'est-ce que la psychologie positive et comment l'appliquer ?",
    answer: "La psychologie positive se concentre sur les forces, les vertus et les facteurs qui contribuent au bonheur et au bien-être. Appliquez-la en pratiquant la gratitude quotidienne, en développant vos forces personnelles, en cultivant l'optimisme réaliste, et en renforçant vos relations sociales."
  },
  {
    question: "Comment fonctionnent les biais cognitifs et comment les éviter ?",
    answer: "Les biais cognitifs sont des erreurs systématiques de pensée qui affectent nos jugements. Pour les éviter, prenez conscience de vos préjugés, recherchez des informations contradictoires, utilisez des techniques de délibération lente et pratiquez la pensée critique en questionnant vos premières impressions."
  },
  {
    question: "Quelles sont les applications de la psychologie dans le marketing ?",
    answer: "La psychologie du marketing utilise la compréhension des motivations humaines, des biais cognitifs et des processus de décision pour créer des campagnes plus efficaces. Cela inclut l'utilisation de la preuve sociale, de la rareté, de la psychologie des couleurs et de la théorie de l'engagement."
  },
  {
    question: "Comment la psychologie peut-elle améliorer la performance au travail ?",
    answer: "Appliquez la psychologie positive pour augmenter la motivation, utilisez la théorie de l'auto-détermination pour favoriser l'engagement, implémentez des techniques de gestion du stress et créez un environnement de travail qui soutient le bien-être psychologique et la productivité."
  },
  {
    question: "Qu'est-ce que la psychologie des foules et comment l'analyser ?",
    answer: "La psychologie des foules étudie comment les individus se comportent différemment en groupe. Les foules peuvent être plus impulsives, suggestibles et émotionnelles. Analysez ces phénomènes en observant les dynamiques de groupe et en comprenant les mécanismes de contagion émotionnelle."
  },
  {
    question: "Comment développer une résilience psychologique face aux difficultés ?",
    answer: "Développez la résilience en cultivant un état d'esprit de croissance, en pratiquant l'auto-compassion, en maintenant des relations sociales solides, en développant des stratégies d'adaptation saines et en apprenant à voir les difficultés comme des opportunités d'apprentissage."
  },
  {
    question: "Quelles sont les techniques de persuasion et d'influence éthiques ?",
    answer: "Les techniques éthiques incluent l'établissement de la crédibilité, l'utilisation d'arguments logiques et émotionnels, la création de liens affectifs et l'emploi de preuves sociales. L'éthique est cruciale : utilisez ces techniques pour informer et éduquer, pas pour manipuler."
  },
  {
    question: "Comment la psychologie peut-elle améliorer les relations interpersonnelles ?",
    answer: "Améliorez vos relations en développant l'empathie, en pratiquant une communication non-violente, en gérant vos émotions, en résolvant les conflits de manière constructive et en comprenant les différences de personnalité et de style de communication."
  }
];

export default function FAQCategories() {
  // Générer le JSON-LD pour Schema.org
  const generateJsonLd = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqCategories.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    return jsonLd;
  };

  return (
    <>
      {/* JSON-LD Schema.org pour Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd()) }}
      />

      {/* Section FAQ visible */}
      <section className="mt-16 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4 text-gray-900">
            FAQ - Questions sur la Psychologie
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les réponses aux questions les plus fréquentes sur la psychologie et nos catégories d&apos;articles.
          </p>
        </div>
        
        {/* FAQ avec balises details/summary pour Google */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {faqCategories.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <details className="group">
                  <summary className="font-medium mb-2 text-gray-900 cursor-pointer list-none hover:text-blue-700 transition-colors">
                    <span className="flex items-center justify-between">
                      {item.question}
                      <span className="text-blue-500 group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </span>
                  </summary>
                  <p className="text-sm text-gray-600 mt-2 group-open:animate-fadeIn">
                    {item.answer}
                  </p>
                </details>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
} 
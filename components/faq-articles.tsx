'use client';

import { Card, CardContent } from "@/components/ui/card";

const faqArticles = [
  {
    question: "Comment choisir un article de psychologie adapté à mes besoins ?",
    answer: "Commencez par identifier votre domaine d'intérêt (cognitive, sociale, développement, etc.), vérifiez le niveau de complexité de l'article, lisez l'extrait pour évaluer la pertinence, et privilégiez les articles récents qui reflètent les dernières avancées en psychologie."
  },
  {
    question: "Qu'est-ce que la psychologie cognitive et comment l'appliquer ?",
    answer: "La psychologie cognitive étudie les processus mentaux comme la mémoire, l'attention, la perception et la résolution de problèmes. Appliquez-la en utilisant des techniques de mémorisation comme la répétition espacée, en améliorant votre concentration avec la méthode Pomodoro, et en développant votre pensée critique."
  },
  {
    question: "Comment la psychologie sociale influence-t-elle nos décisions ?",
    answer: "La psychologie sociale montre comment le contexte social, les normes de groupe et l'influence des autres affectent nos comportements et décisions. Nous sommes influencés par l'effet de conformité, l'obéissance à l'autorité, la preuve sociale et la diffusion de responsabilité."
  },
  {
    question: "Quelles sont les meilleures techniques de gestion du stress ?",
    answer: "Les techniques les plus efficaces incluent la respiration profonde, la relaxation musculaire progressive, la méditation de pleine conscience, l'exercice physique régulier, et la restructuration cognitive. Identifiez vos déclencheurs de stress et développez un réseau de soutien social."
  },
  {
    question: "Comment développer son intelligence émotionnelle au quotidien ?",
    answer: "Développez votre intelligence émotionnelle en pratiquant la pleine conscience, en identifiant et nommant vos émotions, en gérant le stress, en améliorant votre communication interpersonnelle et en cultivant l'empathie. La pratique régulière renforce ces compétences."
  },
  {
    question: "Qu'est-ce que la psychologie positive et comment l'intégrer ?",
    answer: "La psychologie positive se concentre sur les forces, les vertus et les facteurs qui contribuent au bonheur et au bien-être. Intégrez-la en pratiquant la gratitude quotidienne, en développant vos forces personnelles, en cultivant l'optimisme réaliste et en renforçant vos relations."
  },
  {
    question: "Comment éviter les biais cognitifs dans nos jugements ?",
    answer: "Pour éviter les biais cognitifs, prenez conscience de vos préjugés, recherchez activement des informations contradictoires, utilisez des techniques de délibération lente, pratiquez la pensée critique en questionnant vos premières impressions, et diversifiez vos sources d'information."
  },
  {
    question: "Quelles sont les applications de la psychologie dans le marketing ?",
    answer: "La psychologie du marketing utilise la compréhension des motivations humaines, des biais cognitifs et des processus de décision pour créer des campagnes plus efficaces. Cela inclut l'utilisation de la preuve sociale, de la rareté, de la psychologie des couleurs et de la théorie de l'engagement."
  },
  {
    question: "Comment la psychologie améliore-t-elle la performance au travail ?",
    answer: "La psychologie améliore la performance au travail en augmentant la motivation via la psychologie positive, en favorisant l'engagement avec la théorie de l'auto-détermination, en implémentant des techniques de gestion du stress et en créant un environnement qui soutient le bien-être psychologique."
  },
  {
    question: "Qu'est-ce que la psychologie des foules et comment l'analyser ?",
    answer: "La psychologie des foules étudie comment les individus se comportent différemment en groupe. Les foules peuvent être plus impulsives, suggestibles et émotionnelles. Analysez ces phénomènes en observant les dynamiques de groupe et en comprenant les mécanismes de contagion émotionnelle."
  },
  {
    question: "Comment développer une résilience psychologique durable ?",
    answer: "Développez la résilience en cultivant un état d'esprit de croissance, en pratiquant l'auto-compassion, en maintenant des relations sociales solides, en développant des stratégies d'adaptation saines et en apprenant à voir les difficultés comme des opportunités d'apprentissage et de croissance."
  },
  {
    question: "Comment améliorer ses relations grâce à la psychologie ?",
    answer: "Améliorez vos relations en développant l'empathie, en pratiquant une communication non-violente, en gérant vos émotions, en résolvant les conflits de manière constructive et en comprenant les différences de personnalité et de style de communication."
  }
];

export default function FAQArticles() {
  // Générer le JSON-LD pour Schema.org
  const generateJsonLd = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqArticles.map((item) => ({
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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trouvez des réponses à vos questions sur la psychologie et découvrez comment nos articles peuvent vous aider.
          </p>
        </div>
        
        {/* FAQ avec balises details/summary pour Google */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {faqArticles.map((item, index) => (
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
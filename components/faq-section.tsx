'use client';

import { Card, CardContent } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faq: FAQItem[];
}

export default function FAQSection({ faq }: FAQSectionProps) {
  // Générer le JSON-LD pour Schema.org
  const generateJsonLd = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faq.map((item) => ({
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
            FAQ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Voici les questions les plus fréquentes sur notre blog.
          </p>
        </div>
        
        {/* FAQ avec balises details/summary pour Google */}
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {faq.map((item, index) => (
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
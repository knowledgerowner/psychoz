"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent">
          Partenariats Psychoz
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Découvrez nos opportunités de partenariat et nos services de collaboration 
          pour développer votre expertise psychologique et votre visibilité dans le domaine.
        </p>
      </div>

      {/* Nos Services de Partenariat */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-sky-700">Nos Services Partenaires</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 border-sky-200 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-sky-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✍️</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-sky-800">Rédaction d&apos;Articles Psychologiques</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Rédigez du contenu de qualité pour notre blog et recevez des revenus.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Articles psychologiques approfondis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Optimisation SEO intégrée (Viser les mots clés)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Rémunération au nombre d&apos;articles</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Rémunération selon traffic généré</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-sky-200 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-sky-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-sky-800">Backlinks DoFollow</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Backlinks de qualité sur Psychoz exclusivement.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Article avec une ancre sur Psychoz : 30€ (500 mots) </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Article avec une ancre : 40€ (800 mots)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Article avec une ancre : 50€ (1400 mots)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Article en première page : +15€</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Multi Article ou Multi Ancres : <Link href="/contact" className="text-sky-600 hover:text-sky-700 font-medium">Sur Demande</Link></span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-sky-200 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-sky-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-sky-800">Emplacement Publicitaire</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Mise en avant de vos produits/services dans des pages ciblées de Psychoz.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Mention naturelle de votre marque</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Liens contextuels intégrés</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Bannière publicitaire en sidebar : Prix selon taille de l&apos;annonce</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-sky-200 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-sky-300 col-span-3">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-sky-800">Réseau PBN</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Accès à notre réseau de blogs partenaires pour une visibilité maximale.
              </p>
              <div className="space-y-2 text-sm flex justify-center gap-4 text-left">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Réseau de 50+ blogs partenaires</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Thématiques variées et qualifiées</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Backlinks de qualité garantis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Gestion complète des placements</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pourquoi les Backlinks sont Importants */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-sky-700">Pourquoi les Backlinks sont Cruciaux pour votre Visibilité Psychologique ?</h2>
        
        <Card className="border-2 border-sky-200 bg-gradient-to-br from-sky-50 to-white">
          <CardContent className="p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Les backlinks sont considérés comme des <strong>&quot;votes de confiance&quot;</strong> par Google et constituent l&apos;un des facteurs de classement les plus importants pour votre référencement. Dans l&apos;écosystème SEO moderne, ils jouent un rôle central dans la détermination de l&apos;autorité et de la crédibilité de votre site web.
              </p>

              <h3 className="text-xl font-bold mb-4 text-sky-600">🎯 Autorité et Crédibilité</h3>
              <p className="mb-4">
                Chaque backlink de qualité que votre site reçoit est perçu par Google comme un signal de confiance. Plus votre site accumule de backlinks provenant de sites fiables et pertinents, plus il gagne en autorité dans son domaine. Cette autorité se traduit directement par une amélioration de votre <strong>Domain Authority (DA)</strong> et un positionnement plus élevé dans les pages de résultats de recherche (SERP).
              </p>

              <h3 className="text-xl font-bold mb-4 text-sky-600">📈 Trafic Organique et Visibilité</h3>
              <p className="mb-4">
                Au-delà de l&apos;impact SEO pur, les backlinks génèrent un <strong>trafic organique ciblé</strong> vers votre site. Chaque lien placé sur un site pertinent peut amener des visiteurs qualifiés qui sont naturellement intéressés par vos produits ou services. Ce trafic de référence présente généralement un taux de conversion plus élevé que le trafic direct, car les visiteurs arrivent déjà avec un contexte et une intention d&apos;achat.
              </p>

              <h3 className="text-xl font-bold mb-4 text-sky-600">⚡ Indexation et Découverte</h3>
              <p className="mb-4">
                Les backlinks servent également de <strong>&quot;routes&quot; pour les crawlers</strong> de Google, facilitant la découverte et l&apos;indexation de vos nouvelles pages. Ils aident les moteurs de recherche à comprendre le contexte et la pertinence de votre contenu, améliorant ainsi la compréhension de vos mots-clés ciblés et de votre thématique globale.
              </p>

              <h3 className="text-xl font-bold mb-4 text-sky-600">🏆 Avantage Concurrentiel</h3>
              <p className="mb-6">
                Dans un environnement digital ultra-concurrentiel, les backlinks de qualité vous donnent un <strong>avantage décisif</strong> sur vos concurrents. Ils constituent un investissement à long terme qui génère des résultats durables et pérennes, offrant un ROI élevé sur le long terme. Contrairement à d&apos;autres stratégies marketing qui peuvent perdre leur efficacité, les backlinks de qualité continuent de produire des bénéfices SEO pendant des années.
              </p>

              <div className="bg-sky-100 p-6 rounded-lg border-l-4 border-sky-500">
                <h4 className="font-bold mb-2 text-sky-800">💡 Pourquoi Choisir Psychoz pour vos Backlinks ?</h4>
                <p className="mb-3 text-sky-700">
                  Psychoz se distingue par son <strong>Domain Authority de 85+</strong>, ce qui signifie que nos backlinks ont un impact maximal sur votre visibilité. Notre audience de psychologues et professionnels de la santé mentale génère un trafic hautement qualifié, et tous nos backlinks sont <strong>DoFollow</strong>, transmettant pleinement le &quot;jus de lien&quot;.
                </p>
                <p className="text-sky-700">
                  Nous offrons également des <strong>rapports détaillés</strong> pour suivre l&apos;impact de vos backlinks, des délais de livraison optimisés (3-5 jours), et une garantie de qualité sur chaque placement. Chaque backlink est vérifié et validé pour garantir sa pertinence et son impact positif sur votre référencement.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Avantages de Partenariat */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-sky-700">Pourquoi Choisir Psychoz ?</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="h-82 border-2 border-sky-200 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-sky-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-sky-800">
                  <span className="text-2xl">📊</span>
                  Statistiques Impressionnantes
                </h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-sky-600">50K+</div>
                    <div className="text-sm text-muted-foreground">Visiteurs/mois</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-sky-600">85+</div>
                    <div className="text-sm text-muted-foreground">Domain Authority</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-sky-600">200+</div>
                    <div className="text-sm text-muted-foreground">Articles publiés</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-sky-600">15K+</div>
                    <div className="text-sm text-muted-foreground">Abonnés newsletter</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-82 border-2 border-sky-200 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-sky-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-sky-800">
                  <span className="text-2xl">🎯</span>
                  Audience Qualifiée
                </h3>
                <p className="text-muted-foreground mb-4">
                  Notre audience est composée de psychologues, thérapeutes, 
                  coachs et professionnels de la santé mentale. Un public hautement qualifié pour vos 
                  services et produits psychologiques.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    <span>75% de psychologues professionnels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    <span>60% de thérapeutes et coachs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    <span>Pouvoir d&apos;achat élevé</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="h-82 border-2 border-sky-200 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-sky-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-sky-800">
                  <span className="text-2xl">🌐</span>
                  Réseau PBN Puissant
                </h3>
                <p className="text-muted-foreground mb-4">
                  Accédez à notre réseau de plus de 50 blogs partenaires couvrant 
                  diverses thématiques psychologiques et de bien-être.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    <span>50+ blogs partenaires</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    <span>Domain Authority 40-85</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    <span>Trafic organique qualifié</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    <span>Backlinks naturels et durables</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-82 border-2 border-sky-200 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-sky-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-sky-800">
                  <span className="text-2xl">⚡</span>
                  Expertise Technique
                </h3>
                <p className="text-muted-foreground mb-4">
                  Notre équipe d&apos;experts psychologiques garantit des articles de qualité 
                  avec des informations précises et à jour.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    <span>8+ ans d&apos;expérience psychologique</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    <span>Expertise en psychologie clinique</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    <span>Certifications professionnelles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    <span>Veille psychologique constante</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processus de Collaboration */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-sky-700">Notre Processus de Collaboration</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-sky-600">1</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-sky-800">Consultation</h3>
            <p className="text-sm text-muted-foreground">
              Analyse de vos besoins et définition de la stratégie de partenariat
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-sky-600">2</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-sky-800">Proposition</h3>
            <p className="text-sm text-muted-foreground">
              Élaboration d&apos;une proposition personnalisée avec planning et tarifs
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-sky-600">3</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-sky-800">Exécution</h3>
            <p className="text-sm text-muted-foreground">
              Création du contenu et mise en place des backlinks selon le planning
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-sky-600">4</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-sky-800">Suivi</h3>
            <p className="text-sm text-muted-foreground">
              Monitoring des performances et optimisation continue
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16">
        <Card className="border-2 border-sky-200 bg-gradient-to-br from-sky-400 to-sky-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Prêt à devenir un partenaire Psychoz ?</h2>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en partenariat 
              et découvrir comment Psychoz peut booster votre visibilité dans le domaine psychologique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-white text-sky-600 hover:bg-sky-50 border-0">
                  C&apos;est parti
                </Button>
              </Link>
              <Link href="tel:+33643323412">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-sky-200 text-white hover:bg-sky-300/20 hover:border-sky-100">
                  Nous appeler
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section SEO */}
      <section className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-6 text-sky-700">Partenariats Psychoz - Votre Partenaire Psychologique de Confiance</h2>
        <p className="mb-4">
          Psychoz propose des services de partenariat premium pour les psychologues et professionnels 
          souhaitant améliorer leur visibilité en ligne et leur autorité dans le domaine psychologique. 
          Notre expertise en rédaction psychologique, notre réseau de backlinks de qualité et notre audience 
          hautement qualifiée font de nous le partenaire idéal pour vos objectifs de marketing digital.
        </p>
        <p className="mb-4">
          Que vous soyez un psychologue libéral cherchant à établir sa crédibilité, un cabinet de thérapie 
          souhaitant attirer de nouveaux clients, ou une organisation établie désireuse de renforcer sa 
          présence en ligne, nos services de partenariat s&apos;adaptent à vos besoins spécifiques. 
          Notre approche personnalisée garantit des résultats mesurables et un retour sur investissement optimal.
        </p>
        <p>
          Rejoignez notre réseau de partenaires satisfaits et bénéficiez de notre expertise psychologique, 
          de notre audience qualifiée et de notre réseau PBN puissant pour atteindre vos objectifs 
          de visibilité et de croissance dans le domaine psychologique.
        </p>
      </section>
    </div>
  );
} 
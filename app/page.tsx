import Link from "next/link";
import Sun from "@/components/sun";

import NoScriptFallback from "@/components/noscript-fallback";

import { prisma } from "@/lib/prisma";
import HomeArticlesWrapper from "@/components/home-articles-wrapper";
import FAQSection from "@/components/faq-section";
import FloatingParticles from "@/components/floating-particles";
import AnimatedStats from "@/components/animated-stats";
import HeroCTA from "@/components/hero-cta";
import TrustBadges from "@/components/trust-badges";
import PartnershipsCategoriesSection from "@/components/partnerships-categories-section";
import { BookOpen, Users, Brain, TrendingUp } from "lucide-react";


export default async function Home() {
  // Récupération des articles côté serveur
  const [featuredArticlesRaw, recentArticlesRaw] = await Promise.all([
    prisma.article.findMany({
      where: { 
        isPublished: true,
        isMarketing: true 
      },
      include: {
        user: {
          select: { username: true }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: 6
    }),
    prisma.article.findMany({
      where: { isPublished: true },
      include: {
        user: {
          select: { username: true }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: 12
    })
  ]);

  const featuredArticles = featuredArticlesRaw;
  const recentArticles = recentArticlesRaw;

  const faq = [
    {
      question: "Qu'est-ce que la psychologie cognitive et comment l'appliquer au quotidien ?",
      answer: "La psychologie cognitive étudie les processus mentaux comme la mémoire, l'attention, la perception et la résolution de problèmes. Pour l'appliquer au quotidien, utilisez des techniques de mémorisation comme la répétition espacée, améliorez votre concentration avec la méthode Pomodoro, et développez votre pensée critique en questionnant vos automatismes mentaux."
    },
    {
      question: "Comment fonctionnent les biais cognitifs et comment les éviter ?",
      answer: "Les biais cognitifs sont des erreurs systématiques de pensée qui affectent nos jugements. Pour les éviter, prenez conscience de vos préjugés, recherchez des informations contradictoires, utilisez des techniques de délibération lente, et pratiquez la pensée critique en questionnant vos premières impressions."
    },
    {
      question: "Quelles sont les techniques de manipulation psychologique et comment s'en protéger ?",
      answer: "Les techniques incluent l'ancrage, la réciprocité, la preuve sociale et la rareté. Pour vous protéger, apprenez à reconnaître ces techniques, prenez du temps avant de décider, questionnez les motivations, et développez votre esprit critique. La connaissance est votre meilleure défense."
    },
    {
      question: "Comment la psychologie sociale influence-t-elle nos comportements ?",
      answer: "La psychologie sociale montre comment le contexte social, les normes de groupe et l'influence des autres affectent nos comportements. Nous sommes plus influençables que nous le pensons, notamment par l'effet de conformité, l'obéissance à l'autorité et la diffusion de responsabilité."
    },
    {
      question: "Qu'est-ce que l'intelligence émotionnelle et comment la développer ?",
      answer: "L'intelligence émotionnelle comprend la conscience de soi, l'autorégulation, la motivation, l'empathie et les compétences sociales. Développez-la en pratiquant la pleine conscience, en identifiant vos émotions, en gérant le stress et en améliorant votre communication interpersonnelle."
    },
    {
      question: "Comment fonctionne la programmation neurolinguistique (PNL) ?",
      answer: "La PNL étudie comment le langage et la communication influencent notre cerveau et nos comportements. Elle utilise des techniques comme le recadrage, l'ancrage et la synchronisation pour modifier les schémas de pensée et améliorer la communication et le développement personnel."
    },
    {
      question: "Quelles sont les techniques de persuasion et d'influence ?",
      answer: "Les techniques incluent l'établissement de la crédibilité, l'utilisation d'arguments logiques et émotionnels, la création de liens affectifs, et l'emploi de preuves sociales. L'éthique est cruciale : utilisez ces techniques pour informer, pas pour manipuler."
    },
    {
      question: "Comment la psychologie peut-elle améliorer la performance au travail ?",
      answer: "Appliquez la psychologie positive pour augmenter la motivation, utilisez la théorie de l'auto-détermination pour favoriser l'engagement, implémentez des techniques de gestion du stress, et créez un environnement de travail qui soutient le bien-être psychologique."
    },
    {
      question: "Qu'est-ce que la psychologie des foules et comment l'analyser ?",
      answer: "La psychologie des foules étudie comment les individus se comportent différemment en groupe. Les foules peuvent être plus impulsives, suggestibles et émotionnelles. Analysez ces phénomènes en observant les dynamiques de groupe et en comprenant les mécanismes de contagion émotionnelle."
    },
    {
      question: "Comment développer une résilience psychologique face aux difficultés ?",
      answer: "Développez la résilience en cultivant un état d'esprit de croissance, en pratiquant l'auto-compassion, en maintenant des relations sociales solides, en développant des stratégies d'adaptation saines, et en apprenant à voir les difficultés comme des opportunités d'apprentissage."
    },
    {
      question: "Quelles sont les applications de la psychologie dans le marketing ?",
      answer: "La psychologie du marketing utilise la compréhension des motivations humaines, des biais cognitifs et des processus de décision pour créer des campagnes plus efficaces. Cela inclut l'utilisation de la preuve sociale, de la rareté, et de la psychologie des couleurs."
    },
    {
      question: "Comment la psychologie peut-elle améliorer les relations interpersonnelles ?",
      answer: "Améliorez vos relations en développant l'empathie, en pratiquant une communication non-violente, en gérant vos émotions, en résolvant les conflits de manière constructive, et en comprenant les différences de personnalité et de style de communication."
    },
    {
      question: "Qu'est-ce que la psychologie positive et comment l'appliquer ?",
      answer: "La psychologie positive se concentre sur les forces, les vertus et les facteurs qui contribuent au bonheur et au bien-être. Appliquez-la en pratiquant la gratitude quotidienne, en développant vos forces personnelles, en cultivant l'optimisme réaliste, en renforçant vos relations sociales, et en trouvant un sens à vos actions."
    },
    {
      question: "Comment fonctionne la mémoire et comment l'optimiser ?",
      answer: "La mémoire fonctionne en trois étapes : l'encodage, le stockage et la récupération. Pour l'optimiser, utilisez des techniques de répétition espacée, créez des associations mentales, pratiquez la récupération active, dormez suffisamment, et maintenez une activité physique régulière. La consolidation mémorielle se fait principalement pendant le sommeil."
    },
    {
      question: "Quelles sont les techniques de gestion du stress et de l'anxiété ?",
      answer: "Utilisez des techniques de respiration profonde, la relaxation musculaire progressive, la méditation de pleine conscience, l'exercice physique régulier, et la restructuration cognitive. Identifiez vos déclencheurs de stress, pratiquez la gestion du temps, et développez un réseau de soutien social. La thérapie cognitivo-comportementale peut aussi être très efficace."
    }
  ];

  return (
    <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 bg-white">
      {/* Hero Section Améliorée */}
      <section className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 min-h-[700px] shadow-2xl">
        {/* Particules flottantes en arrière-plan */}
        <FloatingParticles />
        
        {/* Contenu principal */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-12 gap-8 min-h-[700px]">
          {/* Titre et description */}
          <div className="relative flex items-center justify-center mb-8">
            <div className="hidden md:block">
              <Sun />
            </div>
            <div className="md:absolute md:inset-0 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-wider mb-6 drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] drop-shadow-[0_0_40px_rgba(0,0,0,0.6)] animate-fade-in">
                  Psychoz
                </h1>
                <p className="text-xl md:text-2xl text-white font-semibold max-w-4xl mx-auto drop-shadow-[0_0_15px_rgba(0,0,0,0.9)] drop-shadow-[0_0_30px_rgba(0,0,0,0.7)] animate-fade-in-delay">
                  Explorez les mystères de l&apos;esprit humain
                </p>
              </div>
            </div>
          </div>

          {/* Boutons CTA */}
          <HeroCTA />

          {/* Statistiques animées */}
          <div className="w-full mt-12 hidden md:block">
            <AnimatedStats 
              stats={[
                {
                  icon: <BookOpen className="h-5 w-5 text-sky-100" />,
                  value: 150,
                  label: "Articles",
                  suffix: "+"
                },
                {
                  icon: <Users className="h-5 w-5 text-sky-100" />,
                  value: 200,
                  label: "Lecteurs",
                  suffix: "+"
                },
                {
                  icon: <Brain className="h-5 w-5 text-sky-100" />,
                  value: 10,
                  label: "Catégories"
                },
                {
                  icon: <TrendingUp className="h-5 w-5 text-sky-100" />,
                  value: 98,
                  label: "Satisfaction",
                  suffix: "%"
                }
              ]} 
            />
          </div>

          {/* Badges de confiance */}
          <TrustBadges />
        </div>

        {/* Formes géométriques décoratives */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-sky-300/20 rounded-full blur-2xl"></div>
      </section>

      {/* Featured Articles - Articles à la une */}
      <section id="articles" className="mt-16 max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Articles à la une</h2>
            <p className="text-gray-600 mt-2">
              Nos meilleurs articles sur la psychologie et les opérations psychologiques
            </p>
          </div>
          <Link href="/articles" className="text-sm text-gray-600 hover:text-gray-900">
            Voir tous →
          </Link>
        </div>
        <HomeArticlesWrapper
          articles={featuredArticles}
          title=""
          description=""
        />
      </section>

      {/* Recent Articles - Derniers articles */}
      <HomeArticlesWrapper
        articles={recentArticles}
        title="Derniers Articles"
        description="Découvrez nos 15 derniers articles sur la psychologie et les opérations psychologiques"
        maxItems={15}
      />

      {/* Section Partenariats et Catégories */}
      <PartnershipsCategoriesSection />
      
      {/* FAQ Section optimisée pour Google */}
      <FAQSection faq={faq} />

      {/* SEO Content */}
      <section className="mt-16 mb-8 text-center">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Psychoz - Votre source d&apos;informations sur la psychologie</h2>
          <p className="text-gray-600 mb-4">
            Bienvenue sur Psychoz, votre destination privilégiée pour les dernières actualités, 
            tutoriels et analyses approfondies du monde de la psychologie. Notre équipe d&apos;experts 
            passionnés partage quotidiennement des contenus de qualité sur la psychologie, 
            les opérations psychologiques et les techniques d&apos;influence.
          </p>
          <p className="text-gray-600 mb-4">
            Que vous soyez étudiant en psychologie cherchant à comprendre les mécanismes de l&apos;esprit, 
            ou professionnel explorant les dernières avancées en psychologie sociale et 
            en manipulation mentale, nos articles vous fourniront les connaissances 
            et compétences nécessaires pour exceller dans votre domaine.
          </p>
          <p className="text-gray-600">
            Découvrez nos guides pratiques sur la psychologie cognitive, la psychologie sociale, 
            et explorez les nouvelles frontières de la psychologie avec nos articles sur 
            les opérations psychologiques et les techniques d&apos;influence.
          </p>
        </div>
      </section>

      {/* Fallback NoScript pour les bots et navigateurs sans JavaScript */}
      <NoScriptFallback 
        articles={[...featuredArticles, ...recentArticles].map(article => ({
          ...article,
          createdAt: article.createdAt.toISOString()
        }))}
        title="Psychoz - Blog sur la psychologie et les opérations psychologiques"
        description="Découvrez nos articles à la une et derniers articles sur la psychologie, les opérations psychologiques et les techniques d'influence. Contenu de qualité par des experts en psychologie."
        showPagination={false}
      />
    </div>
  );
}

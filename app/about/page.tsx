"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          À propos de Psychoz
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Découvrez l&apos;histoire, la mission et l&apos;équipe derrière Psychoz, 
          votre ressource de référence pour la psychologie moderne et les opérations psychologiques.
        </p>
      </div>

      {/* Notre Histoire */}
      <section className="mb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center md:text-left">
          <div>
            <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="mb-6">
                Psychoz est né en 2024 de la vision d&apos;Oxelya, une entreprise spécialisée dans les services numériques, 
                de créer une plateforme éducative de référence dans l&apos;écosystème psychologique français. 
                Face à la complexité croissante de la psychologie moderne et à la multiplication des techniques 
                et approches, nous avons identifié un besoin crucial : une ressource centralisée, fiable et accessible 
                pour les psychologues et passionnés de tous niveaux.
              </p>
              <p className="mb-6">
                L&apos;idée est née d&apos;un constat simple : trop de personnes passent des heures à chercher des solutions 
                à des problèmes psychologiques, naviguant entre des documentations parfois obsolètes, des tutoriels 
                incomplets et des forums aux réponses contradictoires. Psychoz s&apos;est donné pour mission de 
                combler ce fossé en proposant des articles psychologiques approfondis, des tutoriels pratiques et 
                des guides étape par étape.
              </p>
              <p>
                Aujourd&apos;hui, Psychoz est devenu une communauté dynamique de psychologues, de chercheurs 
                et de passionnés de psychologie, partageant leurs connaissances et expériences pour faire avancer 
                l&apos;ensemble de l&apos;écosystème psychologique français.
              </p>
            </div>
          </div>
          <div className="relative">
            <Card className="border-2 border-primary/20 p-8">
              <CardContent className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6">
                  O
                </div>
                <h3 className="text-2xl font-bold mb-2">Créé par Oxelya</h3>
                <p className="text-muted-foreground mb-4">
                  Entreprise de Services Numériques
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <Badge variant="outline">Développement Web</Badge>
                  <Badge variant="outline">Cybersécurité</Badge>
                  <Badge variant="outline">SEO</Badge>
                </div>
                <Link href="https://www.oxelya.com" target="_blank">
                  <Button variant="outline" size="sm">
                    Visiter Oxelya
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="mb-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rendre la psychologie moderne accessible, compréhensible et maîtrisable pour tous
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-2 border-blue-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Éducation</h3>
              <p className="text-muted-foreground">
                Fournir des ressources éducatives de qualité, des tutoriels pratiques et des guides 
                détaillés pour tous les niveaux de compétence.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Communauté</h3>
              <p className="text-muted-foreground">
                Créer un espace d&apos;échange et de partage où les développeurs peuvent apprendre, 
                collaborer et grandir ensemble.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Nous explorons constamment les nouvelles découvertes en psychologie et partageons nos trouvailles.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ce que nous faisons */}
      <section className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Ce que nous faisons</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center place-content-center">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 h-full">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">📝</span>
                  Articles Psychologiques
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nous publions régulièrement des articles approfondis sur la psychologie moderne, 
                  couvrant la psychologie cognitive, sociale, les opérations psychologiques, et bien d&apos;autres sujets. 
                  Chaque article est soigneusement rédigé par notre équipe d&apos;experts, avec des exemples 
                  pratiques et des explications détaillées.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Tutoriels</Badge>
                  <Badge variant="outline">Best Practices</Badge>
                  <Badge variant="outline">Études de cas</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 h-full">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  Solutions Pratiques
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nous proposons des solutions concrètes aux problèmes psychologiques courants que rencontrent 
                  les professionnels et étudiants au quotidien. De la gestion du stress à l&apos;amélioration 
                  des relations interpersonnelles, nous couvrons tous les aspects de la psychologie moderne.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Gestion du stress</Badge>
                  <Badge variant="outline">Relations</Badge>
                  <Badge variant="outline">Développement personnel</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 h-full">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🔍</span>
                  Veille Psychologique
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nous suivons de près l&apos;évolution de la psychologie moderne et partageons nos découvertes 
                  avec notre communauté. Nouvelles recherches, mises à jour importantes, tendances émergentes : 
                  nous analysons et expliquons tout ce qui compte pour les psychologues modernes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Recherches</Badge>
                  <Badge variant="outline">Découvertes</Badge>
                  <Badge variant="outline">Analyse</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 h-full">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">💡</span>
                  Conseils d&apos;Experts
                </h3>
                <p className="text-muted-foreground mb-4">
                  Notre équipe d&apos;experts partage ses années d&apos;expérience à travers des conseils pratiques, 
                  des bonnes pratiques et des retours d&apos;expérience. Psychologie clinique, sociale, 
                  et opérations psychologiques, nous couvrons tous les domaines.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Psychologie clinique</Badge>
                  <Badge variant="outline">Psychologie sociale</Badge>
                  <Badge variant="outline">Opérations psychologiques</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-2 border-blue-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">⭐</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Qualité</h3>
              <p className="text-sm text-muted-foreground">
                Chaque contenu est soigneusement vérifié et testé pour garantir sa précision et sa pertinence.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🌱</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Accessibilité</h3>
              <p className="text-sm text-muted-foreground">
                Nos contenus sont conçus pour être compréhensibles par tous, quel que soit le niveau d&apos;expertise.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🔄</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Nous explorons constamment les nouvelles découvertes en psychologie et partageons nos trouvailles.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Communauté</h3>
              <p className="text-sm text-muted-foreground">
                Nous encourageons les échanges et le partage de connaissances entre psychologues et passionnés.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

             {/* Domaines psychologiques couverts */}
       <section className="mb-16 max-w-full">
         <h2 className="text-3xl font-bold text-center mb-12">Domaines psychologiques que nous couvrons</h2>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-80/100 mx-auto">
           <Card className="col-span-1 lg:col-span-2">
             <CardContent className="p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <span className="text-xl">🧠</span>
                 Psychologie Cognitive
               </h3>
               <div className="flex flex-wrap gap-2">
                 {[
                   "Mémoire", "Attention", "Perception", "Langage", "Raisonnement", "Résolution de problèmes", 
                   "Apprentissage", "Décision", "Créativité", "Intelligence", "Conscience", "Métacognition",
                   "Biais cognitifs", "Heuristiques", "Théorie de l'esprit", "Développement cognitif",
                   "Neuropsychologie", "Psycholinguistique", "Psychologie expérimentale", "Cognition sociale"
                 ].map((tech) => (
                   <Badge key={tech} variant="outline" className="text-xs">
                     {tech}
                   </Badge>
                 ))}
               </div>
             </CardContent>
           </Card>

           <Card>
             <CardContent className="p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <span className="text-xl">🤝</span>
                 Psychologie Sociale
               </h3>
               <div className="flex flex-wrap gap-2">
                 {[
                   "Relations interpersonnelles", "Communication", "Influence", "Groupes", "Équipe", "Leadership",
                   "Confiance", "Conflit", "Résolution de conflit", "Gestion des émotions", "Empathie", "Interactions sociales",
                   "Socialisation", "Identité", "Ségrégation", "Inclusion", "Développement personnel", "Bien-être"
                 ].map((tech) => (
                   <Badge key={tech} variant="outline" className="text-xs">
                     {tech}
                   </Badge>
                 ))}
               </div>
             </CardContent>
           </Card>

           <Card>
             <CardContent className="p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <span className="text-xl">💡</span>
                 Opérations Psychologiques
               </h3>
               <div className="flex flex-wrap gap-2">
                 {[
                   "Thérapie", "Coaching", "Formation", "Évaluation", "Diagnostic", "Intervention",
                   "Prévention", "Gestion du stress", "Amélioration des performances", "Développement personnel",
                   "Bien-être", "Résilience", "Récupération", "Adaptation", "Réadaptation"
                 ].map((tech) => (
                   <Badge key={tech} variant="outline" className="text-xs">
                     {tech}
                   </Badge>
                 ))}
               </div>
             </CardContent>
           </Card>

           <Card className="col-span-1 lg:col-span-2">
             <CardContent className="p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <span className="text-xl">🔒</span>
                 Psychologie de la Sécurité
               </h3>
               <div className="flex flex-wrap gap-2">
                 {[
                   "Manipulation", "Persuasion", "Influence", "Propagande", "Désinformation", "Fake news",
                   "Biais de confirmation", "Echo chamber", "Polarisation", "Radicalisation", "Extrémisme",
                   "Théories du complot", "Manipulation mentale", "Contrôle psychologique", "Lavage de cerveau",
                   "Marketing émotionnel", "Nudge", "Architecture de choix", "Décision"
                 ].map((tech) => (
                   <Badge key={tech} variant="outline" className="text-xs">
                     {tech}
                   </Badge>
                 ))}
               </div>
             </CardContent>
           </Card>

           <Card className="col-span-1 lg:col-span-2">
             <CardContent className="p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <span className="text-xl">💝</span>
                 Intelligence Émotionnelle
               </h3>
               <div className="flex flex-wrap gap-2">
                 {[
                   "Conscience de soi", "Autorégulation", "Motivation", "Empathie", "Compétences sociales", "Gestion du stress",
                   "Reconnaissance des émotions", "Expression émotionnelle", "Contrôle des impulsions", "Adaptabilité", "Optimisme",
                   "Résilience", "Communication", "Résolution de conflits", "Leadership émotionnel", "Équilibre vie-travail",
                   "Bien-être", "Pleine conscience", "Méditation", "Thérapie", "Développement personnel"
                 ].map((tech) => (
                   <Badge key={tech} variant="outline" className="text-xs">
                     {tech}
                   </Badge>
                 ))}
               </div>
             </CardContent>
           </Card>

           <Card>
             <CardContent className="p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <span className="text-xl">🧘</span>
                 Psychologie de la Santé
               </h3>
               <div className="flex flex-wrap gap-2">
                 {[
                   "Bien-être", "Santé mentale", "Médecine comportementale", "Psychoneuroimmunologie", "Stress", "Anxiété",
                   "Dépression", "Troubles du sommeil", "Addictions", "Alimentation", "Exercice physique", "Méditation",
                   "Pleine conscience", "Yoga", "Thérapie", "Prévention", "Résilience", "Adaptation",
                   "Qualité de vie", "Équilibre", "Harmonie", "Sérénité", "Épanouissement"
                 ].map((tech) => (
                   <Badge key={tech} variant="outline" className="text-xs">
                     {tech}
                   </Badge>
                 ))}
               </div>
             </CardContent>
           </Card>

           <Card>
             <CardContent className="p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <span className="text-xl">⚡</span>
                 Psychologie de la Performance
               </h3>
               <div className="flex flex-wrap gap-2">
                 {[
                   "Optimisation", "Efficacité", "Productivité", "Gestion du temps", "Priorisation", "Objectifs",
                   "Motivation", "Persévérance", "Grit", "Flow", "Peak performance", "Excellence",
                   "Compétence", "Maîtrise", "Expertise", "Apprentissage", "Développement", "Progression",
                   "Feedback", "Évaluation", "Mesure", "Amélioration continue", "Excellence opérationnelle"
                 ].map((tech) => (
                   <Badge key={tech} variant="outline" className="text-xs">
                     {tech}
                   </Badge>
                 ))}
               </div>
             </CardContent>
           </Card>

           <Card>
             <CardContent className="p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <span className="text-xl">🔧</span>
                 Outils Psychologiques
               </h3>
               <div className="flex flex-wrap gap-2">
                 {[
                   "Tests psychométriques", "Questionnaires", "Entretiens", "Observation", "Évaluation", "Diagnostic",
                   "Thérapie", "Coaching", "Formation", "Méditation", "Pleine conscience", "Biofeedback",
                   "Neurofeedback", "Réalité virtuelle", "Applications mobiles", "Plateformes en ligne", "Livres",
                   "Podcasts", "Vidéos", "Ateliers", "Groupes de parole", "Communautés"
                 ].map((tech) => (
                   <Badge key={tech} variant="outline" className="text-xs">
                     {tech}
                   </Badge>
                 ))}
               </div>
             </CardContent>
           </Card>

           <Card>
             <CardContent className="p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <span className="text-xl">🎭</span>
                 Psychologie du Comportement
               </h3>
               <div className="flex flex-wrap gap-2">
                 {[
                   "Comportement humain", "Motivation", "Habitudes", "Conditionnement", "Apprentissage", "Renforcement",
                   "Punition", "Extinction", "Généralisation", "Discrimination", "Modélisation", "Imitation",
                   "Observateur", "Bandura", "Skinner", "Pavlov", "Watson", "Thorndike",
                   "Behaviorisme", "Cognitivisme", "Constructivisme", "Humanisme", "Psychanalyse"
                 ].map((tech) => (
                   <Badge key={tech} variant="outline" className="text-xs">
                     {tech}
                   </Badge>
                 ))}
               </div>
             </CardContent>
           </Card>

           <Card>
             <CardContent className="p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <span className="text-xl">🧬</span>
                 Psychologie du Développement
               </h3>
               <div className="flex flex-wrap gap-2">
                 {[
                   "Enfance", "Adolescence", "Âge adulte", "Vieillissement", "Développement cognitif", "Développement social",
                   "Développement émotionnel", "Développement moral", "Piaget", "Vygotsky", "Erikson", "Kohlberg",
                   "Attachement", "Séparation", "Individuation", "Crise d'identité", "Maturité", "Sagesse",
                   "Transitions", "Crises", "Résilience", "Adaptation", "Évolution"
                 ].map((tech) => (
                   <Badge key={tech} variant="outline" className="text-xs">
                     {tech}
                   </Badge>
                 ))}
               </div>
             </CardContent>
           </Card>

           <Card>
             <CardContent className="p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <span className="text-xl">🏥</span>
                 Psychologie Clinique
               </h3>
               <div className="flex flex-wrap gap-2">
                 {[
                   "Thérapie", "Diagnostic", "Évaluation", "Intervention", "Prévention", "Réhabilitation",
                   "Troubles anxieux", "Dépression", "Troubles bipolaires", "Schizophrénie", "Troubles de la personnalité",
                   "Troubles alimentaires", "Addictions", "Troubles du sommeil", "Trauma", "PTSD", "Deuil",
                   "CBT", "DBT", "ACT", "Psychanalyse", "Thérapie systémique"
                 ].map((tech) => (
                   <Badge key={tech} variant="outline" className="text-xs">
                     {tech}
                   </Badge>
                 ))}
               </div>
             </CardContent>
           </Card>

           <Card className="col-span-1 lg:col-span-2">
             <CardContent className="p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <span className="text-xl">💼</span>
                 Psychologie du Travail
               </h3>
               <div className="flex flex-wrap gap-2">
                 {[
                   "Motivation au travail", "Satisfaction professionnelle", "Engagement", "Burnout", "Stress professionnel",
                   "Leadership", "Gestion d'équipe", "Communication", "Conflits", "Négociation", "Prise de décision",
                   "Sélection", "Formation", "Évaluation", "Développement", "Carrière", "Équilibre vie-travail",
                   "Organisation", "Culture d'entreprise", "Changement", "Innovation", "Performance"
                 ].map((tech) => (
                   <Badge key={tech} variant="outline" className="text-xs">
                     {tech}
                   </Badge>
                 ))}
               </div>
             </CardContent>
           </Card>

           <Card>
             <CardContent className="p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <span className="text-xl">🎓</span>
                 Psychologie de l&apos;éducation
               </h3>
               <div className="flex flex-wrap gap-2">
                 {[
                   "Apprentissage", "Enseignement", "Motivation scolaire", "Intelligence", "Créativité", "Mémoire",
                   "Attention", "Concentration", "Métacognition", "Stratégies", "Styles d'apprentissage", "Difficultés",
                   "Haut potentiel", "Dyslexie", "TDAH", "Autisme", "Inclusion", "Différenciation",
                   "Évaluation", "Feedback", "Remédiation", "Accompagnement", "Orientation"
                 ].map((tech) => (
                   <Badge key={tech} variant="outline" className="text-xs">
                     {tech}
                   </Badge>
                 ))}
               </div>
             </CardContent>
           </Card>

           <Card className="col-span-1 lg:col-span-3">
             <CardContent className="p-6">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                 <span className="text-xl">🌍</span>
                 Psychologie Interculturelle
               </h3>
               <div className="flex flex-wrap gap-2">
                 {[
                   "Culture", "Identité culturelle", "Acculturation", "Choc culturel", "Stéréotypes", "Préjugés",
                   "Discrimination", "Racisme", "Xénophobie", "Tolérance", "Empathie", "Communication interculturelle",
                   "Valeurs", "Croyances", "Normes", "Traditions", "Modernité", "Globalisation",
                   "Migration", "Réfugiés", "Intégration", "Diversité", "Inclusion"
                 ].map((tech) => (
                   <Badge key={tech} variant="outline" className="text-xs">
                     {tech}
                   </Badge>
                 ))}
               </div>
             </CardContent>
           </Card>
         </div>
       </section>

      {/* CTA Section */}
      <section className="mb-16">
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Rejoignez notre communauté</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Que vous soyez étudiant en psychologie ou professionnel confirmé, Psychoz est là pour vous accompagner 
              dans votre parcours psychologique. Découvrez nos articles, partagez vos expériences et grandissez avec nous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/articles">
                <Button size="lg" className="w-full sm:w-auto">
                  Explorer nos articles
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section SEO */}
      <section className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-6">Psychoz - Votre partenaire pour la psychologie moderne</h2>
        <p className="mb-4">
          Psychoz est une plateforme éducative française dédiée à la psychologie moderne et aux opérations psychologiques. 
          Créée par l&apos;entreprise Oxelya, spécialisée dans les services numériques, notre mission est de démocratiser 
          l&apos;accès aux connaissances psychologiques de pointe et de former la prochaine génération de psychologues.
        </p>
        <p className="mb-4">
          Notre équipe d&apos;experts combine des années d&apos;expérience dans la psychologie clinique, sociale, 
          les opérations psychologiques et l&apos;intelligence émotionnelle. Cette expertise diversifiée nous permet d&apos;aborder 
          tous les aspects de la psychologie moderne, de la théorie à la pratique, en passant 
          par la recherche et l&apos;application clinique.
        </p>
        <p className="mb-4">
          Nous couvrons un large éventail de domaines, de la psychologie cognitive et sociale 
          aux techniques de manipulation et d&apos;influence, en passant par la psychologie du développement 
          et les approches thérapeutiques modernes. Notre approche pédagogique s&apos;adapte à tous les niveaux, 
          des débutants cherchant à comprendre les fondamentaux aux experts explorant les dernières découvertes.
        </p>
        <p>
          Rejoignez notre communauté grandissante de psychologues passionnés et accédez à des ressources 
          éducatives de qualité, des tutoriels pratiques et des insights psychologiques qui vous aideront 
          à exceller dans votre carrière de psychologue.
        </p>
      </section>
    </div>
  );
} 
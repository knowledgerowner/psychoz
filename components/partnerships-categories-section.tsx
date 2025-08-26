'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Handshake, BookOpen, TrendingUp, Users, Award } from 'lucide-react';
import Link from 'next/link';

export default function PartnershipsCategoriesSection() {
  return (
    <section className="mt-16 mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 text-white">
      <div className="p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Découvrez Psychoz
          </h2>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto">
            Explorez nos catégories d&apos;articles et découvrez les opportunités de partenariat
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Zone Partenariats */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-sky-300/30 rounded-full">
                  <Handshake className="h-8 w-8 text-sky-100" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-white">
                Partenariats avec Psychoz
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-sky-100 text-lg">
                Rejoignez notre réseau de partenaires et bénéficiez de notre expertise en psychologie
              </p>
              
              <div className="grid gap-3 text-sm text-sky-100">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-sky-200" />
                  <span>Visibilité sur notre blog de référence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-sky-200" />
                  <span>Accès à notre communauté de lecteurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-sky-200" />
                  <span>Contenu de qualité et expertise reconnue</span>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/partners">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-sky-200 text-white hover:bg-sky-300/20 hover:border-sky-100 transition-all duration-300 group"
                  >
                    Découvrir nos partenaires
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Zone Catégories */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-sky-300/30 rounded-full">
                  <BookOpen className="h-8 w-8 text-sky-100" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-white">
                Nos Catégories d&apos;Articles
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-sky-100 text-lg">
                Explorez nos catégories spécialisées en psychologie et opérations psychologiques
              </p>
              
              <div className="grid gap-3 text-sm text-sky-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-sky-200 rounded-full"></div>
                  <span>Psychologie cognitive et comportementale</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-sky-200 rounded-full"></div>
                  <span>Opérations psychologiques et influence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-sky-200 rounded-full"></div>
                  <span>Gestion du stress et bien-être mental</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-sky-200 rounded-full"></div>
                  <span>Psychologie sociale et relations</span>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/categories">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-sky-200 text-white hover:bg-sky-300/20 hover:border-sky-100 transition-all duration-300 group"
                  >
                    Explorer nos catégories
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section bonus avec liens internes */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-white">
              En savoir plus sur Psychoz
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link 
                href="/about" 
                className="text-sky-100 hover:text-white transition-colors duration-300 hover:underline"
              >
                À propos de nous
              </Link>
              <span className="text-sky-200">•</span>
              <Link 
                href="/contact" 
                className="text-sky-100 hover:text-white transition-colors duration-300 hover:underline"
              >
                Nous contacter
              </Link>
              <span className="text-sky-200">•</span>
              <Link 
                href="/articles" 
                className="text-sky-100 hover:text-white transition-colors duration-300 hover:underline"
              >
                Tous nos articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
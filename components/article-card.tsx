'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User, ArrowRight, Clock, Eye, BookOpen } from 'lucide-react';

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    excerpt: string | null;
    slug: string;
    imageUrl: string | null;
    createdAt: string;
    user: {
      username: string;
    };
  };
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.slug}`} className="block group">
      <Card className="h-[520px] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-sky-300/30 hover:scale-[1.02] border border-sky-200/50 dark:border-sky-700/50 bg-white dark:bg-slate-800 relative">
        {/* Container image avec bordure arrondie et ombre */}
        <div className="relative h-72 overflow-hidden bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900 dark:to-sky-800 mx-4 mt-4 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500">
          {article.imageUrl ? (
            <Image 
              src={article.imageUrl} 
              alt={article.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110 rounded-xl" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300 dark:from-sky-800 dark:via-sky-700 dark:to-sky-600">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-sky-500 to-sky-700 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white/40 dark:border-sky-300/30">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                <p className="text-lg text-sky-800 dark:text-sky-100 font-bold">Article technique</p>
                <p className="text-sm text-sky-600 dark:text-sky-300 mt-1">Contenu gratuit</p>
              </div>
            </div>
          )}
          
          {/* Overlay subtil pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
          
          {/* Badge Article Gratuit - repositionné */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-gradient-to-r from-sky-500 to-sky-700 text-white border-2 border-white/30 shadow-lg backdrop-blur-sm font-bold px-3 py-1.5 rounded-full text-xs">
              <BookOpen className="w-3 h-3 mr-1.5" />
              GRATUIT
            </Badge>
          </div>

          {/* Icône de lecture avec animation améliorée */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0 rotate-12 group-hover:rotate-0">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-700 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm border-3 border-white/40 hover:scale-110 transition-transform duration-300">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Effet de brillance sur hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl" />
        </div>

        {/* Contenu de la carte avec espacement amélioré */}
        <CardContent className="p-6 flex flex-col h-[232px] bg-gradient-to-b from-sky-50/30 to-white dark:from-slate-800 dark:to-slate-700">
          {/* Métadonnées avec design plus moderne */}
          <div className="flex items-center gap-2 mb-4 text-xs">
            <div className="flex items-center gap-1.5 bg-sky-100 dark:bg-sky-900/50 px-3 py-1.5 rounded-full border border-sky-200 dark:border-sky-700">
              <User className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span className="font-semibold text-sky-700 dark:text-sky-300">{article.user.username}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-sky-100 dark:bg-sky-900/50 px-3 py-1.5 rounded-full border border-sky-200 dark:border-sky-700">
              <Calendar className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span className="font-medium text-sky-700 dark:text-sky-300">{new Date(article.createdAt).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}</span>
            </div>
          </div>
          
          {/* Titre avec meilleure hiérarchie */}
          <h3 className="text-xl font-bold leading-tight mb-3 text-slate-800 dark:text-slate-100 group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>
          
          {/* Extrait avec meilleur contraste */}
          <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-1 leading-relaxed text-sm flex-1">
            {article.excerpt || "Découvrez ce contenu technique gratuit et enrichissez vos connaissances avec des exemples pratiques et des explications détaillées."}
          </p>
          
          {/* Footer redesigné */}
          <div className="flex items-center justify-between pt-4 border-t border-sky-200/50 dark:border-sky-700/50 mt-auto">
            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5 bg-sky-50 dark:bg-sky-900/30 px-2.5 py-1 rounded-full">
                <Clock className="w-3 h-3 text-sky-500" />
                <span className="font-medium">5 min</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Eye className="w-3 h-3 text-sky-500" />
                <span className="font-medium">Accès libre</span>
              </div>
            </div>
            
            {/* Bouton de lecture amélioré */}
            <div className="opacity-70 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <div className="w-9 h-9 bg-gradient-to-br from-sky-500 to-sky-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl border-2 border-sky-300/30 hover:scale-110 transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </CardContent>

        {/* Effet de bordure animée */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-400/10 via-sky-500/10 to-sky-600/10" />
        </div>

        {/* Accent décoratif en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-lg" />
      </Card>
    </Link>
  );
}
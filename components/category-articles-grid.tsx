'use client';

import { usePurchasedArticles } from '@/lib/hooks/usePurchasedArticles';
import PremiumArticleCard from '@/components/premium-article-card';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Calendar, ArrowLeft, ArrowRight, BookOpen, Clock, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Article {
  id: string;
  title: string;
  excerpt: string | null;
  slug: string;
  imageUrl?: string | null;
  premiumPrice: number | null;
  isPremium: boolean;
  isMarketing: boolean;
  createdAt: Date;
  user: {
    username: string;
  };
}

interface CategoryArticlesGridProps {
  articles: Article[];
  totalPages: number;
  currentPage: number;
  categorySlug: string;
}

export default function CategoryArticlesGrid({ articles, totalPages, currentPage, categorySlug }: CategoryArticlesGridProps) {
  const { hasPurchased } = usePurchasedArticles();

  return (
    <>
      <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-2 lg:grid-cols-3 auto-rows-fr mb-12">
        {articles.map((article) => (
          <div key={article.id} className="flex flex-col h-full">
            {article.isPremium ? (
              <PremiumArticleCard
                article={{
                  id: article.id,
                  title: article.title,
                  excerpt: article.excerpt || undefined,
                  slug: article.slug,
                  imageUrl: article.imageUrl || undefined,
                  premiumPrice: article.premiumPrice || 0,
                  isPremium: article.isPremium,
                }}
                hasPurchased={hasPurchased(article.id)}
              />
            ) : (
              <div className="h-full">
                <Link href={`/articles/${article.slug}`} className="block h-full">
                  <Card className="h-full group overflow-hidden transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-800 dark:to-gray-900 relative">
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      {article.imageUrl ? (
                        <Image 
                          src={article.imageUrl} 
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                              <BookOpen className="w-8 h-8 text-white" />
                            </div>
                            <p className="text-sm text-muted-foreground">Article technique</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Badge Gratuit */}
                      <div className="absolute top-4 left-4 hidden sm:block">
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-none shadow-lg">
                          <BookOpen className="w-3 h-3 mr-1" />
                          Gratuit
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                      {/* Métadonnées */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-4 text-xs">
                        <div className="flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900/50 px-2 sm:px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-700 w-full sm:w-auto justify-center">
                          <User className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                          <span className="font-semibold text-blue-700 dark:text-blue-300 truncate">{article.user.username}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900/50 px-2 sm:px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-700 w-full sm:w-auto justify-center">
                          <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 hidden sm:block" />
                          <span className="font-medium text-blue-700 dark:text-blue-300">{new Date(article.createdAt).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}</span>
                        </div>
                      </div>
                      
                                             {/* Titre */}
                       <h3 className="text-lg sm:text-xl font-bold leading-tight mb-3 text-slate-800 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300 flex-1 line-clamp-3 sm:line-clamp-2">
                         {article.title}
                       </h3>
                      
                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-blue-200/50 dark:border-blue-700/50 mt-auto">
                        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                          <div className="flex items-center gap-1.5 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-full">
                            <Clock className="w-3 h-3 text-blue-500" />
                            <span className="font-medium">5 min</span>
                          </div>
                          <div className="hidden sm:flex items-center gap-1.5">
                            <Eye className="w-3 h-3 text-blue-500" />
                            <span className="font-medium">Accès libre</span>
                          </div>
                        </div>
                        
                        <div className="opacity-70 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl border-2 border-blue-300/30 hover:scale-110 transition-all duration-300">
                            <ArrowRight className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mb-12">
          {currentPage > 1 && (
            <Link href={`/categories/${categorySlug}?page=${currentPage - 1}`}>
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Précédent
              </Button>
            </Link>
          )}
          
          <div className="flex gap-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              return (
                <Link key={pageNum} href={`/categories/${categorySlug}?page=${pageNum}`}>
                  <Button
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    className="w-10 h-10"
                  >
                    {pageNum}
                  </Button>
                </Link>
              );
            })}
          </div>
          
          {currentPage < totalPages && (
            <Link href={`/categories/${categorySlug}?page=${currentPage + 1}`}>
              <Button variant="outline" size="sm">
                Suivant
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          )}
        </div>
      )}

      {/* Navigation d'articles suggérés */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-6 text-center">Découvrez d&apos;autres articles</h3>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {articles.slice(0, 3).map((article) => (
            <Link 
              key={article.id} 
              href={`/articles/${article.slug}`}
              className="block group h-full"
            >
              <Card className="h-full min-h-[120px] group-hover:shadow-lg transition-all duration-300">
                <CardContent className="p-3 sm:p-4 h-full flex flex-col">
                  <div className="flex items-start space-x-3 h-full">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                      {article.imageUrl ? (
                        <Image
                          src={article.imageUrl}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-lg">📄</span>
                        </div>
                      )}
                      {article.isPremium && (
                        <div className="absolute top-0 right-0 w-3 h-3 bg-purple-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-medium text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors line-clamp-3 sm:line-clamp-2">
                        {article.title}
                      </h4>
                      {article.excerpt && (
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {article.excerpt}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
} 
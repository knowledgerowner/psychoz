'use client';

import { usePurchasedArticles } from '@/lib/hooks/usePurchasedArticles';
import PremiumArticleCard from '@/components/premium-article-card';
import ArticleCard from '@/components/article-card';

interface Article {
  id: string;
  title: string;
  excerpt: string | null;
  slug: string;
  imageUrl: string | null;
  isMarketing: boolean;
  isPremium: boolean;
  premiumPrice: number | null;
  createdAt: Date; // Changé de string à Date
  user: {
    username: string;
  };
}

interface HomeArticlesWrapperProps {
  articles: Article[];
  title: string;
  description: string;
  maxItems?: number;
}

export default function HomeArticlesWrapper({ articles, title, description, maxItems }: HomeArticlesWrapperProps) {
  const { hasPurchased } = usePurchasedArticles();

  const displayArticles = maxItems ? articles.slice(0, maxItems) : articles;

  return (
    <section className="mt-16 w-full w-full md:max-w-80/100 mx-auto">
      <div className="text-center mb-8 h-fit">
        <h2 className="text-2xl font-semibold tracking-tight mb-4 text-black">
          {title}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto truncate line-clamp-1">
          {description}
        </p>
      </div>
      
      {displayArticles.length > 0 ? (
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {displayArticles.map((article) => (
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
                  <ArticleCard article={{
                  id: article.id,
                  title: article.title,
                  excerpt: article.excerpt,
                  slug: article.slug,
                  imageUrl: article.imageUrl,
                  createdAt: article.createdAt.toISOString(),
                  user: article.user,
                }} />
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Aucun article à afficher</p>
        </div>
      )}
    </section>
  );
} 
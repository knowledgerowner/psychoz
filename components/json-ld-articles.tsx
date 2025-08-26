'use client';

import { useEffect, useState } from 'react';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  imageUrl?: string;
  createdAt: string;
  isPublished: boolean;
  user: {
    username: string;
  };
}

export default function JsonLdArticles() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles/recent');
        if (response.ok) {
          const data = await response.json();
          // L'API retourne directement un tableau d'articles
          // Prendre les 5 premiers (déjà triés par date de création décroissante)
          const recentArticles = data.slice(0, 5);
          setArticles(recentArticles);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des articles:', error);
      }
    };

    fetchArticles();
  }, []);

  if (articles.length === 0) {
    return null;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Articles de psychologie récents",
    "description": "Découvrez nos derniers articles sur la psychologie, le cerveau et le bien-être mental",
    "url": "https://www.psychoz.fr/articles",
    "numberOfItems": articles.length,
    "itemListElement": articles.map((article, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "headline": article.title,
        "description": article.excerpt || `Article sur ${article.title}`,
        "image": article.imageUrl ? {
          "@type": "ImageObject",
          "url": article.imageUrl,
          "width": 1200,
          "height": 630
        } : undefined,
        "author": {
          "@type": "Person",
          "name": article.user.username
        },
        "publisher": {
          "@type": "Organization",
          "name": "Psychoz",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.psychoz.fr/Logo.png"
          }
        },
        "datePublished": article.createdAt,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://www.psychoz.fr/articles/${article.slug}`
        },
        "url": `https://www.psychoz.fr/articles/${article.slug}`
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 
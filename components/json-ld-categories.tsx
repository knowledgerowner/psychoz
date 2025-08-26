'use client';

import { useEffect, useState } from 'react';

interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  _count?: {
    articles: number;
  };
}

export default function JsonLdCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories/with-count');
        if (response.ok) {
          const data = await response.json();
          // L'API retourne directement un tableau de catégories
          // Prendre les 5 premières catégories (déjà triées par nom)
          const topCategories = Array.isArray(data) ? data.slice(0, 5) : [];
          setCategories(topCategories);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des catégories:', error);
        // En cas d'erreur, utiliser des catégories par défaut
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  if (categories.length === 0) {
    return null;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Catégories de psychologie",
    "description": "Découvrez nos catégories d'articles sur la psychologie, le cerveau et le bien-être mental",
    "url": "https://www.psychoz.fr/categories",
    "numberOfItems": categories.length,
    "itemListElement": categories.map((category, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Thing",
        "name": category.name,
        "description": category.description || `Articles sur ${category.name}`,
        "url": `https://www.psychoz.fr/categories/${category.slug}`,
        ...(category._count && {
          "numberOfItems": category._count.articles
        })
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
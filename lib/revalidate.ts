import { revalidatePath } from 'next/cache';

/**
 * Revalide toutes les pages liées aux articles et catégories
 * Cette fonction doit être appelée depuis une API route
 */
export async function revalidateAllContent() {
  try {
    // Revalider la page principale des articles
    revalidatePath('/articles');
    
    // Revalider la page principale des catégories
    revalidatePath('/categories');
    
    // Revalider toutes les pages de catégories individuelles
    // Note: Next.js revalidera automatiquement les pages dynamiques [slug]
    revalidatePath('/categories/[slug]');
    
    // Revalider la page d'accueil qui peut afficher des articles récents
    revalidatePath('/');
    
    return {
      success: true,
      message: 'Toutes les pages de contenu ont été revalidées avec succès',
      revalidatedPaths: [
        '/articles',
        '/categories', 
        '/categories/[slug]',
        '/'
      ]
    };
  } catch (error) {
    console.error('Erreur lors de la revalidation:', error);
    return {
      success: false,
      message: 'Erreur lors de la revalidation des pages',
      error: error instanceof Error ? error.message : 'Erreur inconnue'
    };
  }
}

/**
 * Revalide uniquement les pages d'articles
 */
export async function revalidateArticles() {
  try {
    revalidatePath('/articles');
    revalidatePath('/');
    
    return {
      success: true,
      message: 'Pages des articles revalidées avec succès',
      revalidatedPaths: ['/articles', '/']
    };
  } catch (error) {
    console.error('Erreur lors de la revalidation des articles:', error);
    return {
      success: false,
      message: 'Erreur lors de la revalidation des articles',
      error: error instanceof Error ? error.message : 'Erreur inconnue'
    };
  }
}

/**
 * Revalide uniquement les pages de catégories
 */
export async function revalidateCategories() {
  try {
    revalidatePath('/categories');
    revalidatePath('/categories/[slug]');
    
    return {
      success: true,
      message: 'Pages des catégories revalidées avec succès',
      revalidatedPaths: ['/categories', '/categories/[slug]']
    };
  } catch (error) {
    console.error('Erreur lors de la revalidation des catégories:', error);
    return {
      success: false,
      message: 'Erreur lors de la revalidation des catégories',
      error: error instanceof Error ? error.message : 'Erreur inconnue'
    };
  }
}

/**
 * Revalide une page spécifique
 */
export async function revalidateSpecificPath(path: string) {
  try {
    revalidatePath(path);
    
    return {
      success: true,
      message: `Page ${path} revalidée avec succès`,
      revalidatedPaths: [path]
    };
  } catch (error) {
    console.error(`Erreur lors de la revalidation de ${path}:`, error);
    return {
      success: false,
      message: `Erreur lors de la revalidation de ${path}`,
      error: error instanceof Error ? error.message : 'Erreur inconnue'
    };
  }
} 
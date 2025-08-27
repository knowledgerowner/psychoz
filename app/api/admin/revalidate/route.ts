import { NextRequest, NextResponse } from 'next/server';
import { revalidateAllContent, revalidateArticles, revalidateCategories, revalidateSpecificPath } from '@/lib/revalidate';
import { requireAdminAsync } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Vérifier l'authentification admin
    const user = await requireAdminAsync(request);
    if (!user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const body = await request.json();
    const { type, path } = body;

    let result;

    switch (type) {
      case 'all':
        result = await revalidateAllContent();
        break;
      case 'articles':
        result = await revalidateArticles();
        break;
      case 'categories':
        result = await revalidateCategories();
        break;
      case 'specific':
        if (!path) {
          return NextResponse.json({ error: 'Chemin spécifique requis' }, { status: 400 });
        }
        result = await revalidateSpecificPath(path);
        break;
      default:
        return NextResponse.json({ error: 'Type de revalidation invalide' }, { status: 400 });
    }

    if (result.success) {
      // Log de la revalidation pour audit
      console.log(`[REVALIDATION] ${type} - ${new Date().toISOString()} - ${result.message}`);
      
      return NextResponse.json({
        success: true,
        message: result.message,
        revalidatedPaths: result.revalidatedPaths,
        timestamp: new Date().toISOString()
      });
    } else {
      return NextResponse.json({
        success: false,
        error: result.message
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Erreur lors de la revalidation:', error);
    return NextResponse.json({
      success: false,
      error: 'Erreur interne du serveur'
    }, { status: 500 });
  }
}

// Méthode GET pour vérifier le statut (optionnel)
export async function GET() {
  return NextResponse.json({
    message: 'API de revalidation active',
    availableTypes: ['all', 'articles', 'categories', 'specific'],
    timestamp: new Date().toISOString()
  });
} 
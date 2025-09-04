import { NextRequest, NextResponse } from 'next/server';
import { migrateExistingUsers } from '@/lib/notifications-setup';
import { verifyToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Vérifier que l'utilisateur est super admin
    const user = verifyToken(request);
    if (!user?.isSuperAdmin) {
      return NextResponse.json(
        { error: 'Accès refusé - Super Admin requis' },
        { status: 403 }
      );
    }

    // Lancer la migration
    console.log('Début de la migration des notifications...');
    await migrateExistingUsers();
    
    return NextResponse.json({
      message: 'Migration des notifications terminée avec succès',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Erreur lors de la migration des notifications:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la migration', details: error instanceof Error ? error.message : 'Erreur inconnue' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Vérifier que l'utilisateur est admin
    const user = verifyToken(request);
    if (!user?.isAdmin && !user?.isSuperAdmin) {
      return NextResponse.json(
        { error: 'Accès refusé - Admin requis' },
        { status: 403 }
      );
    }

    // Retourner des statistiques sur l'état des notifications
    const { prisma } = await import('@/lib/prisma');
    
    const [
      totalUsers,
      usersWithNotificationSettings,
      usersWithCategorySubscriptions,
      totalCategories
    ] = await Promise.all([
      prisma.user.count(),
      prisma.user.count({
        where: {
          notificationSettings: {
            isNot: null
          }
        }
      }),
      prisma.user.count({
        where: {
          categorySubscriptions: {
            some: {}
          }
        }
      }),
      prisma.category.count()
    ]);

    return NextResponse.json({
      statistics: {
        totalUsers,
        usersWithNotificationSettings,
        usersWithCategorySubscriptions,
        totalCategories,
        migrationNeeded: totalUsers - usersWithNotificationSettings,
      },
      migrationStatus: {
        isCompleted: totalUsers === usersWithNotificationSettings,
        percentage: Math.round((usersWithNotificationSettings / totalUsers) * 100),
      }
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des statistiques' },
      { status: 500 }
    );
  }
} 
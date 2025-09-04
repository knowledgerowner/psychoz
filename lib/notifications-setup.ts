import { prisma } from '@/lib/prisma';

/**
 * Initialise les paramètres de notification pour un utilisateur
 * Utilisé lors de l'inscription ou pour migrer les utilisateurs existants
 */
export async function initializeUserNotifications(userId: string, enableNotifications: boolean = true) {
  try {
    return await prisma.$transaction(async (prisma) => {
      // Vérifier si l'utilisateur a déjà des paramètres de notification
      const existingSettings = await prisma.notificationSettings.findUnique({
        where: { userId }
      });

      if (existingSettings) {
        console.log(`L'utilisateur ${userId} a déjà des paramètres de notification`);
        return existingSettings;
      }

      // Créer les paramètres de notification si l'utilisateur les accepte
      if (enableNotifications) {
        // Créer les paramètres de notification
        const notificationSettings = await prisma.notificationSettings.create({
          data: {
            userId,
            emailNotifications: {
              create: {
                welcome: true,
                articlePublished: true,
                commentReply: true,
                securityAlert: true,
                newsletter: true,
                custom: false,
                htmlEmails: true,
                plainTextEmails: false,
              }
            },
            pushNotifications: false,
            inAppNotifications: true,
            newArticles: true,
            commentReplies: true,
            securityAlerts: true,
            newsletter: true,
            marketing: false,
            frequency: 'IMMEDIATE',
          }
        });

        // Récupérer toutes les catégories pour créer les abonnements
        const categories = await prisma.category.findMany({
          select: { id: true, name: true }
        });

                 // Créer les abonnements à toutes les catégories
        if (categories.length > 0) {
          for (const category of categories) {
            try {
              await prisma.categorySubscription.create({
                data: {
                  userId,
                  categoryId: category.id,
                  type: 'ALL_ARTICLES',
                  notifyOnPublish: true,
                  notifyOnUpdate: false,
                  notifyOnComment: false,
                  frequency: 'IMMEDIATE',
                }
              });
            } catch (error) {
              // Ignorer les erreurs de doublons (contrainte unique userId + categoryId)

              console.log(`Abonnement déjà existant pour ${category.name}`, error);
            }
          }

          console.log(`Abonnements créés pour l'utilisateur ${userId} : ${categories.length} catégories`);
        }

        // Créer les préférences utilisateur par défaut si elles n'existent pas
        const existingPreferences = await prisma.userPreferences.findUnique({
          where: { userId }
        });

        if (!existingPreferences) {
          await prisma.userPreferences.create({
            data: {
              userId,
              theme: 'dark',
              language: 'fr',
              timezone: 'Europe/Paris',
              showPremiumContent: true,
              autoPlayVideos: false,
              showComments: true,
              showRatings: true,
              compactMode: false,
              showSidebar: true,
              showBreadcrumbs: true,
              searchHistory: true,
              searchSuggestions: true,
            }
          });
        }

        console.log(`Paramètres de notification initialisés pour l'utilisateur ${userId}`);
        return notificationSettings;
      }

      console.log(`L'utilisateur ${userId} a refusé les notifications`);
      return null;
    });
  } catch (error) {
    console.error('Erreur lors de l\'initialisation des notifications:', error);
    throw error;
  }
}

/**
 * Active les notifications pour un utilisateur existant
 * Peut être utilisé si l'utilisateur change d'avis plus tard
 */
export async function enableUserNotifications(userId: string) {
  return await initializeUserNotifications(userId, true);
}

/**
 * Désactive toutes les notifications pour un utilisateur
 */
export async function disableUserNotifications(userId: string) {
  try {
    return await prisma.$transaction(async (prisma) => {
      // Supprimer tous les abonnements aux catégories
      await prisma.categorySubscription.deleteMany({
        where: { userId }
      });

      // Désactiver toutes les notifications dans les paramètres
      await prisma.notificationSettings.updateMany({
        where: { userId },
        data: {
          newArticles: false,
          commentReplies: false,
          newsletter: false,
          marketing: false,
          frequency: 'NEVER',
        }
      });

      console.log(`Notifications désactivées pour l'utilisateur ${userId}`);
    });
  } catch (error) {
    console.error('Erreur lors de la désactivation des notifications:', error);
    throw error;
  }
}

/**
 * Migre les utilisateurs existants vers le nouveau système de notifications
 * À utiliser pour mettre à jour la base de données existante
 */
export async function migrateExistingUsers() {
  try {
    // Récupérer tous les utilisateurs qui n'ont pas de paramètres de notification
    const usersWithoutSettings = await prisma.user.findMany({
      where: {
        notificationSettings: null
      },
      select: {
        id: true,
        username: true,
        email: true,
      }
    });

    console.log(`Migration de ${usersWithoutSettings.length} utilisateurs`);

    for (const user of usersWithoutSettings) {
      try {
        // Par défaut, on active les notifications pour les utilisateurs existants
        // mais on peut ajuster selon les besoins
        await initializeUserNotifications(user.id, true);
        console.log(`Migration réussie pour ${user.username} (${user.email})`);
      } catch (error) {
        console.error(`Erreur lors de la migration de ${user.username}:`, error);
      }
    }

    console.log('Migration terminée');
  } catch (error) {
    console.error('Erreur lors de la migration:', error);
    throw error;
  }
} 
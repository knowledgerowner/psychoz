import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, email, password, acceptNotifications = false } = body;

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Le mot de passe doit contenir au moins 6 caractères' },
        { status: 400 }
      );
    }

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username }
        ]
      }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Un utilisateur avec cet email ou nom d\'utilisateur existe déjà' },
        { status: 409 }
      );
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 12);

    // Créer l'utilisateur et ses paramètres de notification dans une transaction
    const result = await prisma.$transaction(async (prisma) => {
      // Créer l'utilisateur
      const user = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
          isAdmin: false, // Par défaut, les nouveaux utilisateurs ne sont pas admin
        },
        select: {
          id: true,
          username: true,
          email: true,
          isAdmin: true,
          createdAt: true,
        },
      });

      // Si l'utilisateur accepte les notifications, créer ses paramètres
      if (acceptNotifications) {
        // Créer les paramètres de notification
        await prisma.notificationSettings.create({
          data: {
            userId: user.id,
            emailNotifications: {
              create: {
                welcome: true,
                articlePublished: true,
                commentReply: true,
                securityAlert: true,
                newsletter: true,
                custom: false,
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
          select: { id: true }
        });

        // Créer les abonnements à toutes les catégories
        if (categories.length > 0) {
          await prisma.categorySubscription.createMany({
            data: categories.map(category => ({
              userId: user.id,
              categoryId: category.id,
              type: 'ALL_ARTICLES',
              notifyOnPublish: true,
              notifyOnUpdate: false,
              notifyOnComment: false,
              frequency: 'IMMEDIATE',
            }))
          });
        }

        // Créer les préférences utilisateur par défaut
        await prisma.userPreferences.create({
          data: {
            userId: user.id,
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

      return user;
    });

    return NextResponse.json({
      message: 'Inscription réussie',
      user: {
        id: result.id,
        username: result.username,
        email: result.email,
        isAdmin: result.isAdmin,
      },
      notificationsEnabled: acceptNotifications,
    }, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
} 
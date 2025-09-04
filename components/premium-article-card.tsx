'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lock, CreditCard, Check, Star } from 'lucide-react';
import { useAuth } from '@/lib/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import HolographicCard from './premium-card';
import Image from 'next/image';

interface PremiumArticleCardProps {
  article: {
    id: string;
    title: string;
    excerpt?: string;
    slug: string;
    imageUrl?: string;
    premiumPrice: number;
    isPremium: boolean;
  };
  hasPurchased?: boolean;
}

export default function PremiumArticleCard({ article, hasPurchased = false }: PremiumArticleCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [stripe, setStripe] = useState<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const { user } = useAuth();
  const router = useRouter();

  // Debug: afficher les valeurs reçues
  console.log('🔍 PremiumArticleCard - Article:', article.id, 'hasPurchased:', hasPurchased, 'user:', user?.username);

  // Vérifier si l'utilisateur est admin ou super admin
  const isAdmin = user?.isAdmin || user?.isSuperAdmin;
  const showAsFree = isAdmin || hasPurchased;

  console.log('🔍 PremiumArticleCard - showAsFree:', showAsFree, 'isAdmin:', isAdmin);

  useEffect(() => {
    // Charger Stripe côté client
    const initStripe = async () => {
      const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
      if (!publishableKey) {
        console.error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined');
        return;
      }
      const stripeInstance = await loadStripe(publishableKey);
      setStripe(stripeInstance);
    };
    initStripe();
  }, []);

  const handlePurchase = async () => {
    if (!user) {
      router.push('/login');
      return;
    }

    if (!stripe) {
      alert('Stripe n\'est pas encore initialisé. Veuillez réessayer.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ articleId: article.id }),
      });

      const data = await response.json();

      if (response.ok) {
        // Rediriger vers Stripe Checkout avec le SDK
        const { error } = await stripe.redirectToCheckout({
          sessionId: data.sessionId,
        });

        if (error) {
          alert(error.message || 'Erreur lors de la redirection vers Stripe');
        }
      } else {
        alert(data.error || 'Erreur lors de la création de la session de paiement');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la création de la session de paiement');
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewArticle = () => {
    router.push(`/articles/${article.slug}`);
  };

  return (
    <HolographicCard className="h-full min-h-[400px] w-full">
      <div 
        className="relative h-full w-full flex flex-col cursor-pointer"
        onClick={showAsFree ? handleViewArticle : handlePurchase}
      >
        {/* Image avec overlay premium */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-sky-800 via-sky-700 to-sky-900">
          {article.imageUrl ? (
            <div className="relative w-full h-full">
              <Image 
                src={article.imageUrl} 
                alt={article.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110" 
              />
              {/* Overlay premium avec effet holographique bleu ciel */}
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 via-transparent to-transparent" />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sky-800 to-sky-900">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-sky-300/30">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <p className="text-sm text-sky-200 font-medium">Contenu Premium</p>
              </div>
            </div>
          )}
          
          {/* Badge Premium ou Admin */}
          <div className="absolute top-4 left-4">
            {isAdmin ? (
              <Badge className="bg-gradient-to-r from-sky-500 to-sky-600 text-white border-none shadow-lg px-3 py-1 rounded-full">
                <Star className="w-3 h-3 mr-1" />
                Accès Admin
              </Badge>
            ) : (
              <Badge className="bg-gradient-to-r from-sky-400 to-sky-600 text-white border-none shadow-lg px-3 py-1 rounded-full">
                <Lock className="w-3 h-3 mr-1" />
                Premium
              </Badge>
            )}
          </div>

          {/* Badge d'achat si déjà acheté */}
          {hasPurchased && !isAdmin && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-sky-500 to-sky-600 text-white border-none shadow-lg px-3 py-1 rounded-full">
                <Check className="w-3 h-3 mr-1" />
                Acheté
              </Badge>
            </div>
          )}

          {/* Effet holographique sur l'image */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-400/0 via-sky-300/20 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Contenu de la carte */}
        <div className="p-4 sm:p-6 flex flex-col flex-1 bg-gradient-to-b from-sky-800/90 to-sky-900">
          {/* Titre avec limitation de lignes */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 group-hover:text-sky-200 transition-colors duration-300 flex-1 line-clamp-3 sm:line-clamp-2">
            {article.title}
          </h3>

          {/* Prix et statut */}
          <div className="mt-auto">
            {!showAsFree && (
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-sky-300" />
                  <span className="text-2xl font-bold text-white">
                    {article.premiumPrice.toFixed(2)} €
                  </span>
                </div>
              </div>
            )}

            {showAsFree && (
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {isAdmin ? (
                    <>
                      <Star className="w-5 h-5 text-sky-300" />
                      <span className="text-2xl font-bold text-white">
                        Accès Gratuit
                      </span>
                    </>
                  ) : (
                    <>
                      <Check className="w-5 h-5 text-sky-300" />
                      <span className="text-2xl font-bold text-white">
                        Déjà Acheté
                      </span>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Bouton d'action */}
            {showAsFree ? (
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewArticle();
                }}
                className={`w-full text-white border-none shadow-lg ${
                  isAdmin 
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                }`}
              >
                {isAdmin ? (
                  <>
                    <Star className="w-4 h-4 mr-2" />
                    Lire l&apos;article
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Lire l&apos;article
                  </>
                )}
              </Button>
            ) : (
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  handlePurchase();
                }}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Traitement...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4 mr-2" />
                    Acheter l&apos;article
                  </>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Effets de bordure holographique subtils */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-60" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-500/15 rounded-full blur-2xl" />
        </div>

        {/* Particules holographiques */}
        <div className="holographic-particles" />
      </div>
    </HolographicCard>
  );
} 
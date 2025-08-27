"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RefreshCw, FileText, FolderOpen, Globe, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '@/lib/hooks/useAuth';

interface RevalidationResult {
  success: boolean;
  message: string;
  revalidatedPaths: string[];
  timestamp: string;
  error?: string;
}

export default function AdminRevalidationButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [lastRevalidation, setLastRevalidation] = useState<RevalidationResult | null>(null);
  const { user } = useAuth();

  const triggerRevalidation = async (type: 'all' | 'articles' | 'categories', path?: string) => {
    setIsLoading(true);
    
    try {
      // Vérifier que l'utilisateur est admin
      if (!user || (!user.isAdmin && !user.isSuperAdmin)) {
        toast.error('Droits administrateur requis');
        return;
      }

      const response = await fetch('/api/admin/revalidate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Inclure les cookies d'authentification
        body: JSON.stringify({ type, path })
      });

      const result: RevalidationResult = await response.json();

      if (result.success) {
        setLastRevalidation(result);
        toast.success(result.message);
      } else {
        toast.error(result.error || 'Erreur lors de la revalidation');
      }
    } catch (error) {
      console.error('Erreur lors de la revalidation:', error);
      toast.error('Erreur de connexion lors de la revalidation');
    } finally {
      setIsLoading(false);
    }
  };

  const getButtonIcon = (type: string) => {
    switch (type) {
      case 'all':
        return <Globe className="w-4 h-4" />;
      case 'articles':
        return <FileText className="w-4 h-4" />;
      case 'categories':
        return <FolderOpen className="w-4 h-4" />;
      default:
        return <RefreshCw className="w-4 h-4" />;
    }
  };

  const getButtonText = (type: string) => {
    switch (type) {
      case 'all':
        return 'Tout revalider';
      case 'articles':
        return 'Revalider articles';
      case 'categories':
        return 'Revalider catégories';
      default:
        return 'Revalider';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <RefreshCw className="w-5 h-5" />
          Revalidation des pages
        </CardTitle>
        <CardDescription>
          Force la mise à jour du cache des pages d&apos;articles et de catégories
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Boutons de revalidation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Button
            onClick={() => triggerRevalidation('all')}
            disabled={isLoading}
            variant="default"
            className="w-full"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              getButtonIcon('all')
            )}
            {getButtonText('all')}
          </Button>

          <Button
            onClick={() => triggerRevalidation('articles')}
            disabled={isLoading}
            variant="outline"
            className="w-full"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              getButtonIcon('articles')
            )}
            {getButtonText('articles')}
          </Button>

          <Button
            onClick={() => triggerRevalidation('categories')}
            disabled={isLoading}
            variant="outline"
            className="w-full"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              getButtonIcon('categories')
            )}
            {getButtonText('categories')}
          </Button>
        </div>

        {/* Statut de la dernière revalidation */}
        {lastRevalidation && (
          <div className="mt-4 p-3 rounded-lg border bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              {lastRevalidation.success ? (
                <CheckCircle className="w-4 h-4 text-green-600" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-600" />
              )}
              <span className="text-sm font-medium">
                Dernière revalidation - {new Date(lastRevalidation.timestamp).toLocaleString('fr-FR')}
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-2">
              {lastRevalidation.message}
            </p>
            
            {lastRevalidation.revalidatedPaths.length > 0 && (
              <div className="text-xs text-muted-foreground">
                <span className="font-medium">Pages revalidées :</span>
                <div className="mt-1 space-y-1">
                  {lastRevalidation.revalidatedPaths.map((path, index) => (
                    <div key={index} className="bg-background px-2 py-1 rounded text-xs font-mono">
                      {path}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Informations utiles */}
        <div className="text-xs text-muted-foreground space-y-1">
          <p>💡 <strong>Conseil :</strong> Utilisez &quot;Tout revalider&quot; après avoir publié de nouveaux articles ou modifié des catégories</p>
          <p>⚡ <strong>Performance :</strong> La revalidation met à jour le cache sans redéployer l&apos;application</p>
          <p>🕒 <strong>Délai :</strong> Les changements sont visibles immédiatement après la revalidation</p>
        </div>
      </CardContent>
    </Card>
  );
} 
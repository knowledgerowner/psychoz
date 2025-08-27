# Système de Revalidation des Pages

## Vue d'ensemble

Ce système permet de forcer la mise à jour du cache des pages d'articles et de catégories sans avoir à redéployer l'application. Il est accessible depuis le panel d'administration.

## Fonctionnalités

### Types de revalidation disponibles

1. **Tout revalider** (`/api/admin/revalidate` avec `type: 'all'`)
   - Revalide `/articles`
   - Revalide `/categories`
   - Revalide `/categories/[slug]`
   - Revalide `/` (page d'accueil)

2. **Revalider articles** (`/api/admin/revalidate` avec `type: 'articles'`)
   - Revalide `/articles`
   - Revalide `/` (page d'accueil)

3. **Revalider catégories** (`/api/admin/revalidate` avec `type: 'categories'`)
   - Revalide `/categories`
   - Revalide `/categories/[slug]`

4. **Revalider une page spécifique** (`/api/admin/revalidate` avec `type: 'specific'` et `path: '/chemin'`)

## Utilisation

### Depuis le panel admin

1. Connectez-vous au panel d'administration (`/admin/dashboard`)
2. Utilisez les boutons de revalidation dans la section "Revalidation des pages"
3. Choisissez le type de revalidation souhaité
4. Attendez la confirmation de succès

### Via l'API directement

```bash
# Revalider toutes les pages
curl -X POST /api/admin/revalidate \
  -H "Content-Type: application/json" \
  -d '{"type": "all"}' \
  --cookie "token=votre_token"

# Revalider uniquement les articles
curl -X POST /api/admin/revalidate \
  -H "Content-Type: application/json" \
  -d '{"type": "articles"}' \
  --cookie "token=votre_token"
```

## Sécurité

- Seuls les utilisateurs avec des droits d'administration (`isAdmin: true` ou `isSuperAdmin: true`) peuvent déclencher la revalidation
- L'authentification se fait via les cookies de session
- Chaque revalidation est loggée pour audit

## Avantages

- ✅ **Rapidité** : Mise à jour immédiate sans redéploiement
- ✅ **Performance** : Cache mis à jour de manière ciblée
- ✅ **Sécurité** : Accès restreint aux administrateurs
- ✅ **Flexibilité** : Choix du type de revalidation selon les besoins
- ✅ **Audit** : Logs de toutes les revalidations effectuées

## Cas d'usage recommandés

- Après publication d'un nouvel article
- Après modification d'une catégorie
- Après suppression d'articles ou catégories
- Quand les changements ne sont pas visibles immédiatement
- Pour forcer la mise à jour du cache en cas de problème

## Dépannage

### Erreur "Droits administrateur requis"
- Vérifiez que vous êtes connecté en tant qu'admin
- Vérifiez que votre session n'a pas expiré

### Erreur "Non autorisé"
- Vérifiez que l'API route est accessible
- Vérifiez les logs du serveur

### Revalidation qui ne fonctionne pas
- Vérifiez que les chemins sont corrects
- Vérifiez que Next.js ISR est activé
- Vérifiez les logs de revalidation

## Architecture technique

```
Dashboard Admin → Composant Revalidation → API Route → Fonctions de revalidation → Next.js Cache
```

### Composants

- `AdminRevalidationButton` : Interface utilisateur dans le dashboard
- `lib/revalidate.ts` : Fonctions de revalidation
- `app/api/admin/revalidate/route.ts` : API route sécurisée

### Dépendances

- Next.js 13+ avec App Router
- Système d'authentification par cookies
- Hook `useAuth` pour la gestion des utilisateurs
- Composants UI de votre design system 
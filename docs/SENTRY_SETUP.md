# Configuration Sentry pour le Monitoring d'Erreurs

Ce guide explique comment activer Sentry pour le suivi des erreurs en production.

## Installation

```bash
# Installation via le wizard Sentry (recommandé)
npx @sentry/wizard@latest -i nextjs

# Ou installation manuelle
npm install @sentry/nextjs
```

## Configuration

### 1. Créer les fichiers de configuration

Après l'installation, créez les fichiers suivants :

**`sentry.client.config.ts`**

```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  release: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || "development",
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});

Sentry.setTag("app_name", "az-construction");
```

**`sentry.server.config.ts`**

```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,
});

Sentry.setTag("app_name", "az-construction");
```

**`sentry.edge.config.ts`**

```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.05,
});
```

### 2. Variables d'environnement

Ajoutez ces variables dans Vercel :

```env
NEXT_PUBLIC_SENTRY_DSN="https://xxx@o123.ingest.sentry.io/123"
SENTRY_AUTH_TOKEN="sntrys_xxx"
SENTRY_ORG="votre-org"
SENTRY_PROJECT="az-construction"
```

### 3. Configuration next.config.ts

Le wizard Sentry modifiera automatiquement votre `next.config.ts` pour ajouter le plugin Sentry.

## Utilisation

Le fichier `src/lib/sentry.ts` fournit des fonctions utilitaires :

```typescript
import { captureError, captureMessage, addBreadcrumb } from "@/lib/sentry";

// Capturer une erreur
try {
  // code qui peut échouer
} catch (error) {
  captureError(error as Error, {
    tags: { feature: "quote-form" },
    extra: { userId: "123" },
  });
}

// Capturer un message
captureMessage("Utilisateur a complété le formulaire", "info");

// Ajouter un breadcrumb
addBreadcrumb({
  category: "navigation",
  message: "Utilisateur a cliqué sur Devis",
  level: "info",
});
```

## Filtrage des erreurs

Les erreurs suivantes sont automatiquement ignorées :

- `ResizeObserver loop` - Erreurs bénignes de layout
- `Network request failed` - Erreurs réseau temporaires
- `ChunkLoadError` - Erreurs de chargement de chunks (souvent liées au cache)
- `ECONNRESET`, `ENOTFOUND` - Erreurs réseau côté serveur

## Dashboard Sentry

Après configuration, accédez à votre dashboard Sentry pour :

1. Voir les erreurs en temps réel
2. Analyser les traces de performance
3. Configurer les alertes email
4. Visualiser les replays de session (si activé)

## Bonnes pratiques RGPD

- `maskAllText: true` - Masque tout le texte dans les replays
- `blockAllMedia: true` - Bloque les images dans les replays
- Les données utilisateur sensibles sont automatiquement filtrées

## Coût estimé

- Plan gratuit : 5K erreurs/mois, 50 replays/mois
- Plan Team : $26/mois pour plus de volume

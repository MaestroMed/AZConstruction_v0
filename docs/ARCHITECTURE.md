# Architecture du Projet AZ Construction

## Vue d'Ensemble

Le site AZ Construction est une application Next.js 16 déployée sur Vercel, connectée à plusieurs services externes.

```
┌─────────────────────────────────────────────────────────────────┐
│                         VERCEL (CDG1)                           │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    Next.js 16 App                        │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │   │
│  │  │   Public    │  │    Admin    │  │       API       │   │   │
│  │  │   Pages     │  │  Dashboard  │  │     Routes      │   │   │
│  │  └─────────────┘  └─────────────┘  └─────────────────┘   │   │
│  │         │                │                  │             │   │
│  │         └────────────────┴──────────────────┘             │   │
│  │                          │                                │   │
│  │                    ┌─────▼─────┐                          │   │
│  │                    │ Middleware │                         │   │
│  │                    │  (Auth)   │                          │   │
│  │                    └───────────┘                          │   │
│  └──────────────────────────────────────────────────────────┘   │
│                              │                                   │
│  ┌───────────────────────────┼───────────────────────────────┐   │
│  │              SERVICES EXTERNES                            │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │   │
│  │  │ Supabase │  │ Resend   │  │Cloudinary│  │  Stripe  │   │   │
│  │  │ (Prisma) │  │ (Email)  │  │ (Images) │  │(Payments)│   │   │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │   │
│  └───────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

## Structure des Dossiers

```
az-construction/
├── prisma/                 # Schéma DB et seeds
│   ├── schema.prisma       # 20 modèles
│   ├── seed.ts             # Seed principal
│   └── seeds/              # Seeds modulaires
├── public/
│   ├── images/             # Images statiques
│   ├── uploads/            # Fichiers uploadés (local)
│   ├── models/             # Modèles 3D GLB
│   └── manifest.json       # PWA
├── src/
│   ├── app/                # App Router
│   │   ├── (public)/       # 43 pages publiques
│   │   ├── admin/          # 29 pages admin
│   │   └── api/            # 22 routes API
│   ├── components/         # ~60 composants
│   ├── lib/                # Utilitaires
│   ├── stores/             # Zustand (2 stores)
│   └── types/              # Types TypeScript
├── tests/                  # 7 fichiers Playwright
└── docs/                   # Documentation
```

## Schéma Base de Données

### Modèles Principaux (Prisma)

```
┌──────────────────────────────────────────────────────────────┐
│                    UTILISATEURS & AUTH                        │
├──────────────────────────────────────────────────────────────┤
│  User (clients B2C/B2B + admin)                              │
│  └── Address (adresses de livraison/facturation)             │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                        CATALOGUE                              │
├──────────────────────────────────────────────────────────────┤
│  ProductFamily (10 familles: garde-corps, escaliers...)      │
│  ├── ProductFamilyImage (images hero par famille)            │
│  └── Product (produits individuels)                          │
│      └── ProductOptionConfig (options configurées)           │
│                                                              │
│  ProductOption (options globales: dimensions, couleurs...)   │
│  RALColor (palette couleurs RAL)                             │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                    COMMANDES & DEVIS                          │
├──────────────────────────────────────────────────────────────┤
│  Cart → CartItem (panier temporaire)                         │
│  Quote → QuoteItem (demandes de devis)                       │
│  Order → OrderItem (commandes confirmées)                    │
│  Message (échanges client/admin)                             │
│  ContactMessage (formulaire contact)                         │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                          CMS                                  │
├──────────────────────────────────────────────────────────────┤
│  SiteSettings (paramètres globaux, feature flags)            │
│  Page (pages CMS éditables)                                  │
│  SiteSection (sections de page éditables)                    │
│  SiteImage (images du site avec fallback)                    │
│  Media (médiathèque uploadée)                                │
│  Realization → RealizationImage (portfolio)                  │
│  RALModel → RALModelImage (sélecteur couleur interactif)     │
└──────────────────────────────────────────────────────────────┘
```

### Enums

| Enum | Valeurs |
|------|---------|
| `UserType` | client_particulier, client_pro, admin |
| `OptionType` | number, text, boolean, choice, color |
| `OrderStatus` | en_attente_paiement, payee, en_preparation, en_fabrication, expediee, livree, annulee |
| `PaymentStatus` | en_attente, paye, rembourse, echec |
| `QuoteStatus` | en_attente, envoye, accepte, refuse, expire |
| `MessageSender` | client, admin |

## Flux d'Authentification

```
┌─────────────────────────────────────────────────────────────┐
│                    FLUX AUTHENTIFICATION                     │
└─────────────────────────────────────────────────────────────┘

                     ┌──────────────┐
                     │   Request    │
                     └──────┬───────┘
                            │
                     ┌──────▼───────┐
                     │  Middleware  │
                     │ (middleware.ts)
                     └──────┬───────┘
                            │
           ┌────────────────┼────────────────┐
           │                │                │
    ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼──────┐
    │   /admin/*  │  │  /compte/*  │  │   /api/*    │
    │             │  │             │  │             │
    └──────┬──────┘  └──────┬──────┘  └──────┬──────┘
           │                │                │
    ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼──────┐
    │  AuthGuard  │  │ NextAuth   │  │  API Key    │
    │  + Cookie   │  │   JWT      │  │  ou JWT     │
    └──────┬──────┘  └──────┬──────┘  └──────┬──────┘
           │                │                │
           └────────────────┴────────────────┘
                            │
                     ┌──────▼───────┐
                     │   Accès OK   │
                     └──────────────┘
```

### Protection des Routes

| Route Pattern | Protection | Mécanisme |
|---------------|------------|-----------|
| `/admin/*` | Admin requis | Cookie `az_admin_verified` ou JWT admin |
| `/compte/*` | Client connecté | JWT NextAuth |
| `/api/admin/*` | Admin requis | JWT admin ou API Key |
| `/api/auth/*` | Rate limited | Headers sécurité |
| `/api/contact/*` | Rate limited | Headers sécurité |

## Feature Flags

Les fonctionnalités peuvent être activées/désactivées via la table `SiteSettings` :

| Flag | Champ DB | Effet |
|------|----------|-------|
| Configurateur 3D | `showConfigurator` | Affiche/masque le bouton configurateur dans le hero |
| Espace Client | `showEspaceClient` | Affiche/masque le bouton connexion dans le header |

**État actuel** : Les deux sont désactivés (`false`).

## Routes API

### Publiques

| Route | Méthode | Description |
|-------|---------|-------------|
| `/api/settings` | GET | Paramètres site publics |
| `/api/product-families` | GET | Liste des familles produits |
| `/api/realizations` | GET | Portfolio réalisations |
| `/api/quotes` | POST | Créer demande de devis |
| `/api/contact` | POST | Envoyer message contact |
| `/api/ral-models` | GET | Modèles sélecteur couleur |

### Admin (protégées)

| Route | Méthode | Description |
|-------|---------|-------------|
| `/api/admin/login` | POST | Authentification admin |
| `/api/admin/verify-session` | GET | Vérifier session |
| `/api/admin/stats` | GET | Statistiques dashboard |
| `/api/admin/products` | CRUD | Gestion produits |
| `/api/admin/orders` | CRUD | Gestion commandes |
| `/api/admin/quotes` | CRUD | Gestion devis |
| `/api/admin/users` | CRUD | Gestion clients |

### Webhooks

| Route | Description |
|-------|-------------|
| `/api/webhooks/stripe` | Événements Stripe (paiements) |

## Environnements

| Environnement | URL | Database | Usage |
|---------------|-----|----------|-------|
| Development | localhost:3000 | Supabase Dev | Développement local |
| Preview | *.vercel.app | Supabase Dev | PR reviews |
| Production | azconstruction.fr | Supabase Prod | Site live |

## Performances

### Optimisations Actives

- **Images** : Next.js Image + Cloudinary CDN
- **Fonts** : Google Fonts avec `display: swap`
- **CSS** : Tailwind CSS purge
- **Région** : Vercel CDG1 (Paris)
- **Headers** : Cache-Control, HSTS, compression

### Métriques Cibles

| Métrique | Objectif |
|----------|----------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| TTI | < 3.5s |

## Sécurité

### Headers (vercel.json)

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security: max-age=31536000`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

### Bonnes Pratiques

- Variables sensibles côté serveur uniquement
- Validation Zod sur toutes les entrées
- Rate limiting sur les API sensibles
- Webhook signature verification (Stripe)

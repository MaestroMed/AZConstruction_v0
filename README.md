# AZ Construction - Site E-commerce Métallerie

Site web e-commerce complet pour AZ Construction, spécialiste en métallerie sur mesure.

## 🚀 Fonctionnalités

### Front-end Public
- ✅ Page d'accueil avec hero animé et carrousel glassmorphism
- ✅ Configurateur 3D interactif (Three.js) pour 7 familles de produits
- ✅ Pages produits avec fiches détaillées
- ✅ Portfolio réalisations avec galerie
- ✅ Système de devis multi-étapes
- ✅ Pages solutions Pro et Habitat
- ✅ Page Thermolaquage avec SEO local
- ✅ FAQ, Contact, À propos
- ✅ Responsive (Mobile, Tablet, Desktop)

### Back-office Admin
- ✅ Dashboard avec KPIs et graphiques
- ✅ Gestion produits, familles, options
- ✅ Gestion commandes et devis
- ✅ Gestion clients (B2C/B2B)
- ✅ CMS pages personnalisables
- ✅ Médiathèque (upload local + Cloudinary)
- ✅ Paramètres site (logo, SEO, emails)
- ✅ Configuration Stripe

### Technique
- ✅ Next.js 16 (App Router)
- ✅ TypeScript strict
- ✅ Tailwind CSS 4
- ✅ Prisma ORM + PostgreSQL (Supabase)
- ✅ NextAuth.js (authentification)
- ✅ Stripe (paiements)
- ✅ Resend (emails transactionnels)
- ✅ Cloudinary (images optimisées)
- ✅ Tests E2E Playwright

## 📦 Installation

```bash
# Cloner le repo
git clone https://github.com/votre-repo/az-construction.git
cd az-construction

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Éditer .env avec vos clés (voir docs/ENV_SETUP.md)

# Générer le client Prisma
npm run db:generate

# Pousser le schéma vers la DB
npm run db:push

# Seed des données initiales
npm run db:seed

# Lancer en développement
npm run dev
```

## 🔧 Configuration

### Variables d'environnement requises

```env
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="votre-secret"
NEXTAUTH_URL="http://localhost:3000"
```

### Variables optionnelles

```env
# Paiement
STRIPE_SECRET_KEY="sk_..."
STRIPE_PUBLISHABLE_KEY="pk_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Emails
RESEND_API_KEY="re_..."
EMAIL_FROM="AZ Construction <contact@azconstruction.fr>"

# Images (optionnel - fallback local)
CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."

# Analytics (optionnel)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN="azconstruction.fr"
NEXT_PUBLIC_GA_ID="G-..."
```

Voir `docs/ENV_SETUP.md` pour les instructions détaillées.

## 🚀 Déploiement Vercel

### 1. Connecter le repo GitHub

```bash
# Initialiser git si nécessaire
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/votre-repo/az-construction.git
git push -u origin main
```

### 2. Importer sur Vercel

1. Aller sur [vercel.com](https://vercel.com)
2. "New Project" → Importer depuis GitHub
3. Sélectionner le repo `az-construction`
4. Configurer les variables d'environnement
5. Deploy !

### 3. Base de données Supabase

1. Créer un projet sur [supabase.com](https://supabase.com)
2. Copier l'URL de connexion
3. L'ajouter dans les variables Vercel

### 4. Webhook Stripe

Après déploiement, configurer le webhook Stripe :
- URL: `https://votre-domaine.vercel.app/api/webhooks/stripe`
- Events: `checkout.session.completed`, `payment_intent.succeeded`, `payment_intent.payment_failed`

## 🧪 Tests

```bash
# Lancer tous les tests
npm test

# Mode UI interactif
npm run test:ui

# Avec navigateur visible
npm run test:headed

# Voir le rapport
npm run test:report
```

## 📁 Structure du projet

```
az-construction/
├── prisma/
│   ├── schema.prisma      # Schéma base de données
│   └── seed.ts            # Données initiales
├── public/
│   ├── uploads/           # Fichiers uploadés (local)
│   ├── icons/             # Icônes PWA
│   └── manifest.json      # PWA manifest
├── src/
│   ├── app/               # Pages Next.js
│   │   ├── (public)/      # Pages publiques
│   │   ├── admin/         # Back-office
│   │   └── api/           # Routes API
│   ├── components/        # Composants React
│   │   ├── configurator/  # 3D configurateur
│   │   ├── homepage/      # Sections accueil
│   │   ├── layout/        # Header, Footer
│   │   └── ui/            # Composants UI
│   └── lib/               # Utilitaires
│       ├── auth/          # NextAuth config
│       ├── email/         # Templates emails
│       ├── pdf/           # Génération PDF
│       └── prisma.ts      # Client Prisma
├── tests/                 # Tests Playwright
└── docs/                  # Documentation
```

## 🔐 Sécurité

- Authentification JWT avec NextAuth.js
- Middleware de protection routes admin
- Rate limiting sur les API
- Validation Zod sur les formulaires
- Webhook Stripe signature verification
- Variables sensibles côté serveur uniquement

## 📄 Licence

Propriétaire - AZ Construction © 2025

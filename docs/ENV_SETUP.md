# Configuration des Variables d'Environnement

Ce document décrit toutes les variables d'environnement nécessaires au fonctionnement du site AZ Construction.

## Variables Requises

### 🗄️ Base de données (Supabase/PostgreSQL)

1. Créez un compte sur [Supabase](https://supabase.com)
2. Créez un nouveau projet
3. Allez dans **Settings > Database > Connection string**
4. Copiez l'URI et ajoutez-la dans `.env`:

```env
DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
DIRECT_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
```

### 🔐 Authentification (NextAuth)

Générez une clé secrète:
```bash
openssl rand -base64 32
```

```env
NEXTAUTH_SECRET="votre-secret-genere-32-caracteres-minimum"
NEXTAUTH_URL="http://localhost:3000"  # En prod: https://azconstruction.fr
```

### 🛡️ Administration

```env
# Mot de passe admin pour le back-office (stocké côté serveur uniquement)
ADMIN_PASSWORD="VotreMotDePasseSecurise123!"

# Clé API optionnelle pour les appels API admin
ADMIN_API_KEY="cle-api-admin-optionnelle"

# Email admin pour recevoir les notifications
ADMIN_EMAIL="contact@azconstruction.fr"
```

**IMPORTANT**: Ne jamais utiliser `NEXT_PUBLIC_ADMIN_PASSWORD` - le mot de passe doit rester côté serveur.

---

## Variables Optionnelles

### 💳 Stripe (Paiement)

1. Créez un compte sur [Stripe](https://stripe.com)
2. **Dashboard > Developers > API keys**

```env
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

Configuration du webhook Stripe :
- URL: `https://azconstruction.fr/api/webhooks/stripe`
- Events: `checkout.session.completed`, `payment_intent.succeeded`, `payment_intent.payment_failed`

### 📧 Emails (Resend)

1. Créez un compte sur [Resend](https://resend.com)
2. **API Keys > Create API Key**
3. Vérifiez votre domaine dans **Domains**

```env
RESEND_API_KEY="re_..."
EMAIL_FROM="AZ Construction <contact@azconstruction.fr>"
```

### 🖼️ Upload Images (Cloudinary)

1. Créez un compte sur [Cloudinary](https://cloudinary.com)
2. **Dashboard > Account Details**

```env
CLOUDINARY_CLOUD_NAME="votre-cloud-name"
CLOUDINARY_API_KEY="123456789"
CLOUDINARY_API_SECRET="abc123..."
```

Si non configuré, les images seront stockées localement dans `/public/uploads/`.

### 📊 Analytics

#### Plausible (Recommandé - Privacy-friendly)
```env
NEXT_PUBLIC_PLAUSIBLE_DOMAIN="azconstruction.fr"
```

#### Google Analytics
```env
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

---

## Fichier .env.example

Copiez ce fichier en `.env` et remplissez les valeurs :

```env
# ===============================
# VARIABLES REQUISES
# ===============================

# Base de données Supabase
DATABASE_URL="postgresql://postgres:PASSWORD@db.PROJECT.supabase.co:5432/postgres"
DIRECT_URL="postgresql://postgres:PASSWORD@db.PROJECT.supabase.co:5432/postgres"

# Authentification
NEXTAUTH_SECRET="generez-avec-openssl-rand-base64-32"
NEXTAUTH_URL="http://localhost:3000"

# Administration
ADMIN_PASSWORD="VotreMotDePasseSecurise123!"
ADMIN_EMAIL="contact@azconstruction.fr"

# ===============================
# VARIABLES OPTIONNELLES
# ===============================

# Stripe (Paiements)
# STRIPE_SECRET_KEY="sk_test_..."
# STRIPE_PUBLISHABLE_KEY="pk_test_..."
# STRIPE_WEBHOOK_SECRET="whsec_..."

# Resend (Emails)
# RESEND_API_KEY="re_..."
# EMAIL_FROM="AZ Construction <contact@azconstruction.fr>"# Cloudinary (Images)
# CLOUDINARY_CLOUD_NAME=""
# CLOUDINARY_API_KEY=""
# CLOUDINARY_API_SECRET=""

# Analytics
# NEXT_PUBLIC_PLAUSIBLE_DOMAIN="azconstruction.fr"
# NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

---

## Vérification

Pour vérifier que toutes les variables sont configurées, exécutez :

```bash
npm run dev
```

Le serveur affichera des avertissements pour les variables manquantes.

## Déploiement Vercel

1. Allez dans **Settings > Environment Variables** de votre projet Vercel
2. Ajoutez chaque variable avec sa valeur
3. Sélectionnez les environnements appropriés (Production, Preview, Development)
4. Redéployez le projet

**Note**: Les variables `NEXT_PUBLIC_*` sont exposées côté client. Ne jamais y stocker de secrets.
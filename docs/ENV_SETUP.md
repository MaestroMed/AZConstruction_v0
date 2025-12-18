# Configuration des Variables d'Environnement

## 🗄️ Base de données (Supabase)

1. Créez un compte sur [Supabase](https://supabase.com)
2. Créez un nouveau projet
3. Allez dans **Settings > Database > Connection string**
4. Copiez l'URI et ajoutez-la dans `.env`:

```env
DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
DIRECT_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
```

## 🔐 Authentification

Générez une clé secrète:
```bash
openssl rand -base64 32
```

```env
NEXTAUTH_SECRET="votre-secret-genere"
NEXTAUTH_URL="http://localhost:3000"  # En prod: https://votre-domaine.com
```

## 💳 Stripe (Paiement)

1. Créez un compte sur [Stripe](https://stripe.com)
2. **Dashboard > Developers > API keys**

```env
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

## 📧 Emails (Resend)

1. Créez un compte sur [Resend](https://resend.com)
2. **API Keys > Create API Key**

```env
RESEND_API_KEY="re_..."
EMAIL_FROM="AZ Construction <contact@azconstruction.fr>"
```

## 🖼️ Upload Images (Cloudinary)

1. Créez un compte sur [Cloudinary](https://cloudinary.com)
2. **Dashboard > Account Details**

```env
CLOUDINARY_CLOUD_NAME="votre-cloud-name"
CLOUDINARY_API_KEY="123456789"
CLOUDINARY_API_SECRET="abc123..."
```

## 📊 Analytics (Optionnel)

```env
NEXT_PUBLIC_PLAUSIBLE_DOMAIN="azconstruction.fr"
# Ou Google Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```






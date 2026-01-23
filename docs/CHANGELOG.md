# Changelog

Toutes les modifications notables du projet AZ Construction sont documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [Non publié]

### Ajouté

- Pages SEO locales thermolaquage pour l'Île-de-France (7 départements)
  - Paris (75)
  - Hauts-de-Seine (92)
  - Seine-Saint-Denis (93)
  - Val-de-Marne (94)
  - Yvelines (78)
  - Essonne (91)
  - Seine-et-Marne (77)
- Tracking Google Analytics 4 (GA4) pour les événements de conversion
  - `phone_clicked` : Clic sur le numéro de téléphone
  - `contact_form_submitted` : Soumission formulaire contact
  - `quote_submitted` : Demande de devis envoyée
- Documentation projet complète
  - Fichier `.cursorrules` pour l'assistant IA
  - `docs/ARCHITECTURE.md` : Architecture technique
  - `docs/CONTRIBUTING.md` : Guide de contribution
  - `docs/CHANGELOG.md` : Historique des versions
  - `docs/CONTENT_CHECKLIST.md` : Inventaire contenu images

### Modifié

- **Header** : Fond solide `bg-navy-dark` sur toutes les pages
  - Correction du problème de lisibilité sur fonds blancs
  - Suppression du glassmorphisme transparent problématique
- **Coordonnées** mises à jour sur l'ensemble du site
  - Téléphone : `09 71 35 74 96`
  - Email : `contact@azconstruction.fr`
  - Adresse : `23 Chemin du Bac des Aubins, 95820 Bruyères-sur-Oise`
- **SEO** : Domain canonical mis à jour vers `https://azconstruction.fr`
- **Sitemap** : Ajout des nouvelles pages thermolaquage locales

### Corrigé

- Visibilité du menu header sur les pages à fond blanc
- Cohérence des informations de contact sur tout le site
- URLs canoniques pointant vers le bon domaine

---

## [0.1.0] - 2025-01-XX

Version initiale du site AZ Construction.

### Ajouté

#### Frontend Public

- **Page d'accueil**
  - Hero section avec carrousel d'images
  - Section avantages avec compteurs animés
  - Section thermolaquage avec CTA
  - Carrousel témoignages clients
  - Carrousel logos partenaires
  - Section réalisations avec aperçu portfolio
  - Section CTA finale
- **Pages produits** (8 familles)
  - Garde-corps
  - Escaliers
  - Portes
  - Fenêtres
  - Portails
  - Clôtures
  - Verrières
  - Pergolas
- **Autres pages publiques**
  - Réalisations (portfolio)
  - Contact avec formulaire
  - À propos
  - FAQ avec accordéon
  - Particuliers
  - Professionnels
  - Solutions Pro
  - Habitat
  - Thermolaquage (page principale + sous-pages)
  - Couleurs RAL
  - Mentions légales
  - CGV
  - Politique de confidentialité
- **Système de devis** multi-étapes
  - Étape 1 : Sélection projet
  - Étape 2 : Informations contact
  - Étape 3 : Confirmation
- **Configurateur 3D** (désactivé)
  - React Three Fiber intégré
  - Modèles procéduraux
  - Sélection couleurs RAL
  - Export actions préparées

#### Backend Admin

- **Dashboard**
  - KPIs principaux (devis, commandes, CA)
  - Graphiques Recharts
  - Activité récente
- **Gestion produits**
  - CRUD familles de produits
  - CRUD produits
  - CRUD options
  - Upload images
- **Gestion commerciale**
  - Liste commandes avec statuts
  - Liste devis avec statuts
  - Génération PDF devis
- **Gestion clients**
  - Liste clients B2C/B2B
  - Fiche client détaillée
- **CMS**
  - Éditeur de pages (TipTap)
  - Médiathèque
  - Images du site
  - Sections éditables
- **Paramètres**
  - Logo et branding
  - SEO global
  - Emails (SMTP/Resend)
  - Feature flags

#### Infrastructure

- **Base de données**
  - Prisma ORM avec 20 modèles
  - PostgreSQL via Supabase
  - Seeds de données de test
- **Authentification**
  - NextAuth.js v4
  - JWT pour les sessions
  - Middleware de protection routes
  - AuthGuard pour l'admin
- **API REST**
  - 22 routes API
  - Validation Zod
  - Rate limiting
  - CORS configuré
- **Emails**
  - Templates React pour Resend
  - Confirmation devis
  - Notification admin
- **Images**
  - Upload Cloudinary
  - Fallback local
  - Optimisation Next/Image
- **Paiements** (préparé, non activé)
  - Intégration Stripe
  - Webhook configuré
- **Tests**
  - 7 fichiers de tests Playwright
  - Navigation, formulaires, SEO, responsive
- **Déploiement**
  - Vercel avec région CDG1 (Paris)
  - Headers de sécurité
  - PWA manifest

#### Design

- **Design System**
  - Palette navy/cyan corporate
  - Glassmorphism cards
  - Animations Framer Motion
  - Responsive mobile-first
- **Composants UI**
  - Button avec variantes
  - Cards (elevated, glass)
  - Formulaires stylisés
  - Sliders personnalisés
  - Timeline animée
  - Compteurs animés

---

## Types de Changements

- **Ajouté** : Nouvelles fonctionnalités
- **Modifié** : Changements dans les fonctionnalités existantes
- **Déprécié** : Fonctionnalités qui seront supprimées
- **Supprimé** : Fonctionnalités supprimées
- **Corrigé** : Corrections de bugs
- **Sécurité** : Corrections de vulnérabilités

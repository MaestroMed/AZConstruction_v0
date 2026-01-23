# Guide de Contribution

Ce document décrit les conventions et processus pour contribuer au projet AZ Construction.

## Prérequis

- Node.js 20+
- npm 10+
- Git
- Compte Supabase (ou PostgreSQL local)
- Éditeur : VS Code ou Cursor recommandé

## Installation Locale

```bash
# 1. Cloner le repo
git clone https://github.com/MaestroMed/AZConstruction_v0.git
cd AZConstruction_v0

# 2. Installer les dépendances
npm install

# 3. Configurer l'environnement
cp .env.example .env
# Éditer .env avec vos clés (voir docs/ENV_SETUP.md)

# 4. Générer le client Prisma
npm run db:generate

# 5. Pousser le schéma vers la DB
npm run db:push

# 6. (Optionnel) Seed les données de test
npm run db:seed

# 7. Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur http://localhost:3000

## Scripts npm

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Démarrer le build |
| `npm run lint` | Vérification ESLint |
| `npm test` | Lancer les tests Playwright |
| `npm run test:ui` | Tests en mode UI interactif |
| `npm run test:headed` | Tests avec navigateur visible |
| `npm run db:generate` | Générer client Prisma |
| `npm run db:push` | Synchroniser schéma DB |
| `npm run db:migrate` | Créer une migration |
| `npm run db:seed` | Peupler la base de données |
| `npm run db:studio` | Ouvrir Prisma Studio |

## Workflow Git

### Branches

```
main              # Production (protégée)
├── develop       # Intégration
├── feature/*     # Nouvelles fonctionnalités
├── fix/*         # Corrections de bugs
└── hotfix/*      # Corrections urgentes production
```

### Convention de Commits

Format : `type(scope): description`

**Types :**

| Type | Usage |
|------|-------|
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction de bug |
| `docs` | Documentation |
| `style` | Formatage (sans changement de logique) |
| `refactor` | Refactoring de code |
| `test` | Ajout/modification de tests |
| `chore` | Maintenance (deps, config) |
| `perf` | Amélioration performance |

**Exemples :**

```bash
feat(homepage): add partners carousel section
fix(header): resolve menu visibility on white backgrounds
docs(readme): update installation instructions
refactor(api): simplify quotes route handler
test(forms): add contact form validation tests
chore(deps): update next.js to 16.0.10
```

### Processus de Pull Request

1. Créer une branche depuis `develop`
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/ma-feature
   ```

2. Développer et commiter régulièrement
   ```bash
   git add .
   git commit -m "feat(scope): description"
   ```

3. Vérifier avant push
   ```bash
   npm run lint
   npm run build
   npm test  # si modifs front
   ```

4. Push et créer la PR
   ```bash
   git push origin feature/ma-feature
   ```

5. Créer la PR sur GitHub vers `develop`

6. Attendre la review et le merge

## Structure de Code

### Créer un Composant UI

```tsx
// src/components/ui/MyButton.tsx
"use client"; // Seulement si hooks/events nécessaires

import * as React from "react";
import { cn } from "@/lib/utils";

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export function MyButton({ 
  variant = "primary", 
  size = "md", 
  className,
  children,
  ...props 
}: MyButtonProps) {
  return (
    <button
      className={cn(
        "rounded-lg font-medium transition-all",
        variant === "primary" && "bg-blue-corporate text-white",
        variant === "secondary" && "bg-gray-100 text-navy-dark",
        size === "sm" && "px-3 py-1.5 text-sm",
        size === "md" && "px-4 py-2",
        size === "lg" && "px-6 py-3 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Créer une Route API

```ts
// src/app/api/example/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Schéma de validation
const createSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
});

export async function GET(request: NextRequest) {
  try {
    const data = await prisma.example.findMany({
      orderBy: { createdAt: "desc" },
    });
    
    return NextResponse.json({ data });
  } catch (error) {
    console.error("[API /example] GET error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation
    const validated = createSchema.parse(body);
    
    const created = await prisma.example.create({
      data: validated,
    });
    
    return NextResponse.json({ data: created }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", details: error.errors },
        { status: 400 }
      );
    }
    
    console.error("[API /example] POST error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}
```

### Créer une Page

```tsx
// src/app/(public)/example/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exemple",
  description: "Page d'exemple pour AZ Construction",
};

export default function ExamplePage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-navy-dark">
          Titre de la page
        </h1>
        <p className="mt-4 text-gray-600">
          Contenu de la page...
        </p>
      </section>
    </main>
  );
}
```

## Tests

### Lancer les Tests

```bash
# Tous les tests
npm test

# Mode interactif (recommandé pour debug)
npm run test:ui

# Un fichier spécifique
npx playwright test tests/navigation.spec.ts

# Avec navigateur visible
npm run test:headed

# Générer le rapport
npm run test:report
```

### Structure d'un Test

```ts
// tests/example.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Exemple de test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("devrait afficher le titre", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("AZ Construction");
  });

  test("devrait naviguer vers contact", async ({ page }) => {
    await page.click('a[href="/contact"]');
    await expect(page).toHaveURL("/contact");
  });
});
```

## Déploiement

### Preview (automatique)

Chaque Pull Request génère automatiquement un déploiement preview sur Vercel.

### Production

Le merge sur `main` déclenche automatiquement un déploiement en production.

```bash
# Depuis develop, après validation
git checkout main
git merge develop
git push origin main
```

### Variables d'Environnement

Les variables doivent être configurées dans Vercel :
- Settings > Environment Variables
- Sélectionner les environnements (Production, Preview, Development)

## Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Prisma](https://www.prisma.io/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation Playwright](https://playwright.dev/docs)

## Contact

- **Email** : contact@azconstruction.fr
- **Téléphone** : 09 71 35 74 96
- **GitHub** : [MaestroMed/AZConstruction_v0](https://github.com/MaestroMed/AZConstruction_v0)

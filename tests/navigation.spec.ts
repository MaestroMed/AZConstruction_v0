import { test, expect } from '@playwright/test';

test.describe('Navigation publique', () => {
  test('Page d\'accueil se charge correctement', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/AZ Construction/);
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('Navigation vers toutes les pages principales', async ({ page }) => {
    const pages = [
      { path: '/produits', title: 'Produits' },
      { path: '/realisations', title: 'Réalisations' },
      { path: '/solutions-pro', title: 'Solutions Pro' },
      { path: '/habitat', title: 'Habitat' },
      { path: '/services/thermolaquage', title: 'Thermolaquage' },
      { path: '/a-propos', title: 'À propos' },
      { path: '/contact', title: 'Contact' },
      { path: '/faq', title: 'FAQ' },
      { path: '/login', title: 'Connexion' },
      { path: '/register', title: 'Inscription' },
    ];

    for (const p of pages) {
      await page.goto(p.path);
      await expect(page.locator('header')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();
    }
  });

  test('Liens du header fonctionnent', async ({ page }) => {
    await page.goto('/');
    
    // Clic sur Produits
    await page.click('a[href="/produits"]');
    await expect(page).toHaveURL('/produits');
    
    // Clic sur Réalisations
    await page.click('a[href="/realisations"]');
    await expect(page).toHaveURL('/realisations');
    
    // Retour accueil via logo
    await page.click('header a[href="/"]');
    await expect(page).toHaveURL('/');
  });

  test('Bouton Espace client redirige vers login', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Espace client');
    await expect(page).toHaveURL('/login');
  });

  test('Pages légales accessibles', async ({ page }) => {
    const legalPages = [
      '/mentions-legales',
      '/cgv',
      '/confidentialite',
    ];

    for (const path of legalPages) {
      await page.goto(path);
      await expect(page.locator('main')).toBeVisible();
    }
  });
});

test.describe('Navigation mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('Menu hamburger fonctionne', async ({ page }) => {
    await page.goto('/');
    
    // Le menu desktop est caché
    await expect(page.locator('nav >> text=Produits').first()).not.toBeVisible();
    
    // Ouvrir le menu mobile
    await page.click('button[aria-label="Toggle menu"]');
    
    // Les liens sont maintenant visibles
    await expect(page.locator('text=Produits').first()).toBeVisible();
  });
});





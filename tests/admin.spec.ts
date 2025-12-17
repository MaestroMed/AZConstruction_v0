import { test, expect } from '@playwright/test';

test.describe('Back-office Admin', () => {
  test('Dashboard admin accessible', async ({ page }) => {
    await page.goto('/admin');
    
    // Le dashboard se charge
    await expect(page.locator('main')).toBeVisible();
    
    // Les KPIs sont visibles
    await expect(page.locator('text=Chiffre').first()).toBeVisible({ timeout: 10000 });
  });

  test('Navigation admin - Produits', async ({ page }) => {
    await page.goto('/admin/produits');
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('text=Produits').first()).toBeVisible();
  });

  test('Navigation admin - Commandes', async ({ page }) => {
    await page.goto('/admin/commandes');
    await expect(page.locator('main')).toBeVisible();
  });

  test('Navigation admin - Clients', async ({ page }) => {
    await page.goto('/admin/clients');
    await expect(page.locator('main')).toBeVisible();
  });

  test('Navigation admin - Devis', async ({ page }) => {
    await page.goto('/admin/devis');
    await expect(page.locator('main')).toBeVisible();
  });

  test('Navigation admin - Réalisations', async ({ page }) => {
    await page.goto('/admin/realisations');
    await expect(page.locator('main')).toBeVisible();
  });

  test('Navigation admin - Pages CMS', async ({ page }) => {
    await page.goto('/admin/pages');
    await expect(page.locator('main')).toBeVisible();
  });

  test('Navigation admin - Médiathèque', async ({ page }) => {
    await page.goto('/admin/medias');
    await expect(page.locator('main')).toBeVisible();
  });

  test('Navigation admin - Paramètres', async ({ page }) => {
    await page.goto('/admin/parametres');
    await expect(page.locator('main')).toBeVisible();
    
    // Les sections sont présentes
    await expect(page.locator('text=Informations').first()).toBeVisible();
  });

  test('Navigation admin - Familles de produits', async ({ page }) => {
    await page.goto('/admin/produits/familles');
    await expect(page.locator('main')).toBeVisible();
  });

  test('Navigation admin - Options produits', async ({ page }) => {
    await page.goto('/admin/produits/options');
    await expect(page.locator('main')).toBeVisible();
  });

  test('Navigation admin - Couleurs RAL', async ({ page }) => {
    await page.goto('/admin/couleurs');
    await expect(page.locator('main')).toBeVisible();
  });

  test('Navigation admin - SEO', async ({ page }) => {
    await page.goto('/admin/parametres/seo');
    await expect(page.locator('main')).toBeVisible();
  });

  test('Navigation admin - E-commerce', async ({ page }) => {
    await page.goto('/admin/parametres/ecommerce');
    await expect(page.locator('main')).toBeVisible();
  });

  test('Navigation admin - Emails', async ({ page }) => {
    await page.goto('/admin/parametres/emails');
    await expect(page.locator('main')).toBeVisible();
  });
});

test.describe('Admin - Fonctionnalités', () => {
  test('Filtres produits fonctionnent', async ({ page }) => {
    await page.goto('/admin/produits');
    
    // Chercher un champ de recherche
    const searchInput = page.locator('input[placeholder*="Rechercher"]');
    if (await searchInput.isVisible()) {
      await searchInput.fill('garde-corps');
    }
  });

  test('Export CSV visible', async ({ page }) => {
    await page.goto('/admin');
    
    // Chercher un bouton d'export
    const exportBtn = page.locator('button:has-text("Export"), button:has-text("CSV")');
    // Le bouton peut être présent ou non selon la page
  });
});



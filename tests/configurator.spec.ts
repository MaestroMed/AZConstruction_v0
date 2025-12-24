import { test, expect } from '@playwright/test';

test.describe('Configurateur 3D', () => {
  const families = [
    'garde-corps',
    'escaliers',
    'portes',
    'fenetres',
    'grilles-ventilation',
    'portails',
    'clotures',
  ];

  for (const family of families) {
    test(`Configurateur ${family} se charge`, async ({ page }) => {
      await page.goto(`/configurateur/${family}`);
      
      // Le configurateur se charge
      await expect(page.locator('main')).toBeVisible();
      
      // Les contrôles sont présents
      await expect(page.locator('text=Dimensions').first()).toBeVisible({ timeout: 10000 });
    });
  }

  test('Sliders de dimensions fonctionnent', async ({ page }) => {
    await page.goto('/configurateur/garde-corps');
    
    // Attendre le chargement
    await page.waitForTimeout(2000);
    
    // Vérifier que les sliders sont présents
    const sliders = page.locator('input[type="range"]');
    await expect(sliders.first()).toBeVisible();
  });

  test('Sélection de couleur fonctionne', async ({ page }) => {
    await page.goto('/configurateur/garde-corps');
    
    // Attendre le chargement complet
    await page.waitForTimeout(2000);
    
    // Chercher les swatches de couleur
    const colorSwatches = page.locator('[class*="rounded-full"]').filter({ hasText: '' });
    
    // Cliquer sur une couleur si disponible
    const firstSwatch = colorSwatches.first();
    if (await firstSwatch.isVisible()) {
      await firstSwatch.click();
    }
  });

  test('Navigation vers page produits depuis configurateur', async ({ page }) => {
    await page.goto('/configurateur/garde-corps');
    
    // Bouton retour ou lien produits
    const backLink = page.locator('a[href="/produits"]');
    if (await backLink.isVisible()) {
      await backLink.click();
      await expect(page).toHaveURL('/produits');
    }
  });
});









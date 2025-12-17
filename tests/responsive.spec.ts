import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  const viewports = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1440, height: 900 },
  ];

  for (const vp of viewports) {
    test.describe(`${vp.name} (${vp.width}x${vp.height})`, () => {
      test.use({ viewport: { width: vp.width, height: vp.height } });

      test('Homepage s\'affiche correctement', async ({ page }) => {
        await page.goto('/');
        
        // Header visible
        await expect(page.locator('header')).toBeVisible();
        
        // Footer visible (scroll si nécessaire)
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await expect(page.locator('footer')).toBeVisible();
      });

      test('Page produits s\'affiche correctement', async ({ page }) => {
        await page.goto('/produits');
        await expect(page.locator('main')).toBeVisible();
      });

      test('Configurateur s\'affiche', async ({ page }) => {
        await page.goto('/configurateur/garde-corps');
        await expect(page.locator('main')).toBeVisible();
      });
    });
  }
});

test.describe('Interactions tactiles (mobile)', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('Menu mobile s\'ouvre et se ferme', async ({ page }) => {
    await page.goto('/');
    
    // Ouvrir
    const menuBtn = page.locator('button[aria-label="Toggle menu"]');
    await menuBtn.click();
    await page.waitForTimeout(300);
    
    // Fermer
    await menuBtn.click();
  });

  test('Scroll fonctionne sur toutes les pages', async ({ page }) => {
    const pages = ['/', '/produits', '/realisations', '/contact'];
    
    for (const path of pages) {
      await page.goto(path);
      await page.evaluate(() => window.scrollTo(0, 500));
      await page.evaluate(() => window.scrollTo(0, 0));
    }
  });
});


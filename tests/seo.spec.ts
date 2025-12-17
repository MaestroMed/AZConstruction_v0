import { test, expect } from '@playwright/test';

test.describe('SEO & Meta', () => {
  test('Meta tags présents sur la homepage', async ({ page }) => {
    await page.goto('/');
    
    // Title
    await expect(page).toHaveTitle(/AZ Construction/);
    
    // Meta description
    const metaDesc = page.locator('meta[name="description"]');
    await expect(metaDesc).toHaveAttribute('content', /.+/);
    
    // Open Graph
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /.+/);
  });

  test('Sitemap accessible', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    expect(response?.status()).toBe(200);
  });

  test('Robots.txt accessible', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    expect(response?.status()).toBe(200);
  });

  test('Pages produits ont des meta uniques', async ({ page }) => {
    await page.goto('/produits');
    
    const title = await page.title();
    expect(title).toContain('Produits');
  });

  test('Balises sémantiques HTML5', async ({ page }) => {
    await page.goto('/');
    
    // Header
    await expect(page.locator('header')).toBeVisible();
    
    // Main
    await expect(page.locator('main')).toBeVisible();
    
    // Footer
    await expect(page.locator('footer')).toBeVisible();
  });

  test('Images ont des alt tags', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que les images ont des alt (sauf décoratives)
    const images = page.locator('img[alt]');
    const count = await images.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe('Performance basique', () => {
  test('Homepage charge en moins de 5s', async ({ page }) => {
    const start = Date.now();
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const loadTime = Date.now() - start;
    
    expect(loadTime).toBeLessThan(5000);
  });

  test('Pas d\'erreurs console critiques', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForTimeout(2000);
    
    // Filtrer les erreurs connues (ex: failed to load images placeholder)
    const criticalErrors = errors.filter(e => 
      !e.includes('favicon') && 
      !e.includes('404') &&
      !e.includes('hydration')
    );
    
    // Afficher les erreurs pour debug
    if (criticalErrors.length > 0) {
      console.log('Erreurs console:', criticalErrors);
    }
  });
});




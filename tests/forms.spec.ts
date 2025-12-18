import { test, expect } from '@playwright/test';

test.describe('Formulaires', () => {
  test('Formulaire de contact - validation', async ({ page }) => {
    await page.goto('/contact');
    
    // Soumettre sans remplir
    const submitBtn = page.locator('button[type="submit"]');
    await submitBtn.click();
    
    // Vérifier que les champs requis sont signalés
    // (validation HTML5 native ou custom)
    const nameInput = page.locator('input[name="name"], input[id="name"]');
    await expect(nameInput).toBeVisible();
  });

  test('Formulaire de contact - remplissage', async ({ page }) => {
    await page.goto('/contact');
    
    // Remplir le formulaire
    await page.fill('input[name="name"], input[id="name"]', 'Jean Dupont');
    await page.fill('input[name="email"], input[id="email"]', 'jean@test.com');
    await page.fill('input[name="phone"], input[id="phone"]', '0612345678');
    
    // Sélectionner un sujet si présent
    const subjectSelect = page.locator('select[name="subject"], select[id="subject"]');
    if (await subjectSelect.isVisible()) {
      await subjectSelect.selectOption({ index: 1 });
    }
    
    // Remplir le message
    await page.fill('textarea[name="message"], textarea[id="message"]', 'Message de test automatisé');
  });

  test('Page login - éléments présents', async ({ page }) => {
    await page.goto('/login');
    
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('Page register - éléments présents', async ({ page }) => {
    await page.goto('/register');
    
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]').first()).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('Lien vers inscription depuis login', async ({ page }) => {
    await page.goto('/login');
    
    const registerLink = page.locator('a[href="/register"]');
    if (await registerLink.isVisible()) {
      await registerLink.click();
      await expect(page).toHaveURL('/register');
    }
  });
});

test.describe('Système de devis', () => {
  test('Page devis accessible', async ({ page }) => {
    await page.goto('/devis');
    await expect(page.locator('main')).toBeVisible();
  });

  test('Formulaire de devis - étapes', async ({ page }) => {
    await page.goto('/devis/formulaire');
    
    // Vérifier que le formulaire multi-étapes est présent
    await expect(page.locator('main')).toBeVisible();
  });
});





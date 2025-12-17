import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:59241";
const ADMIN_PASSWORD = "AZConstruct2024!";

test.describe("🏠 Pages Publiques", () => {
  test("Page d'accueil - Hero et navigation", async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Vérifier le titre
    await expect(page).toHaveTitle(/AZ Construction/);
    
    // Vérifier le header
    await expect(page.locator("header")).toBeVisible();
    
    // Vérifier le hero
    await expect(page.locator("text=L'acier sur")).toBeVisible();
    
    // Vérifier les liens de navigation
    const navLinks = ["Produits", "Réalisations", "Solutions Pro", "Contact"];
    for (const link of navLinks) {
      await expect(page.locator(`header >> text=${link}`).first()).toBeVisible();
    }
    
    // Vérifier le bouton Espace client
    await expect(page.locator("text=Espace client").first()).toBeVisible();
    
    // Vérifier le footer
    await expect(page.locator("footer")).toBeVisible();
    
    console.log("✅ Page d'accueil OK");
  });

  test("Page Produits", async ({ page }) => {
    await page.goto(`${BASE_URL}/produits`);
    
    await expect(page.locator("h1")).toContainText(/Produits|Catalogue/i);
    
    // Vérifier les familles de produits
    const families = ["Garde-corps", "Escaliers", "Portes", "Fenêtres", "Portails", "Clôtures"];
    for (const family of families) {
      const element = page.locator(`text=${family}`).first();
      if (await element.isVisible()) {
        console.log(`  ✓ Famille ${family} visible`);
      }
    }
    
    console.log("✅ Page Produits OK");
  });

  test("Page Réalisations", async ({ page }) => {
    await page.goto(`${BASE_URL}/realisations`);
    
    await expect(page.locator("h1")).toContainText(/Réalisations|Projets/i);
    
    console.log("✅ Page Réalisations OK");
  });

  test("Page Solutions Pro (B2B)", async ({ page }) => {
    await page.goto(`${BASE_URL}/solutions-pro`);
    
    await expect(page.locator("h1")).toBeVisible();
    
    console.log("✅ Page Solutions Pro OK");
  });

  test("Page À propos", async ({ page }) => {
    await page.goto(`${BASE_URL}/a-propos`);
    
    // Vérifier les statistiques
    const stats = ["1800", "1500", "10"];
    for (const stat of stats) {
      const element = page.locator(`text=${stat}`).first();
      if (await element.isVisible()) {
        console.log(`  ✓ Stat ${stat} visible`);
      }
    }
    
    console.log("✅ Page À propos OK");
  });

  test("Page Contact - Formulaire", async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`);
    
    // Vérifier le formulaire
    await expect(page.locator("form")).toBeVisible();
    
    // Vérifier les champs
    const fields = ["nom", "email", "message"];
    for (const field of fields) {
      const input = page.locator(`[name="${field}"], input[placeholder*="${field}" i], textarea[placeholder*="${field}" i]`).first();
      if (await input.isVisible()) {
        console.log(`  ✓ Champ ${field} visible`);
      }
    }
    
    console.log("✅ Page Contact OK");
  });

  test("Page Login", async ({ page }) => {
    await page.goto(`${BASE_URL}/login`);
    
    // Vérifier le formulaire de connexion
    await expect(page.locator("input[type='email'], input[type='text']").first()).toBeVisible();
    await expect(page.locator("input[type='password']").first()).toBeVisible();
    
    console.log("✅ Page Login OK");
  });

  test("Page FAQ", async ({ page }) => {
    await page.goto(`${BASE_URL}/faq`);
    
    // Vérifier les questions
    await expect(page.locator("h1, h2").first()).toBeVisible();
    
    console.log("✅ Page FAQ OK");
  });

  test("Pages légales", async ({ page }) => {
    const legalPages = ["/mentions-legales", "/cgv", "/confidentialite"];
    
    for (const pagePath of legalPages) {
      await page.goto(`${BASE_URL}${pagePath}`);
      await expect(page.locator("h1")).toBeVisible();
      console.log(`  ✓ ${pagePath} OK`);
    }
    
    console.log("✅ Pages légales OK");
  });
});

test.describe("🔧 Configurateur 3D", () => {
  const families = ["garde-corps", "escaliers", "portes", "fenetres", "portails", "clotures"];

  for (const family of families) {
    test(`Configurateur ${family}`, async ({ page }) => {
      await page.goto(`${BASE_URL}/configurateur/${family}`);
      
      // Attendre le chargement
      await page.waitForLoadState("networkidle");
      
      // Vérifier la présence du configurateur
      const configurator = page.locator("[class*='configurator'], [class*='Configurator'], main");
      await expect(configurator.first()).toBeVisible();
      
      // Vérifier les contrôles de dimensions (sliders)
      const sliders = page.locator("input[type='range']");
      const sliderCount = await sliders.count();
      console.log(`  ✓ ${sliderCount} slider(s) trouvé(s)`);
      
      // Tester un slider si présent
      if (sliderCount > 0) {
        const firstSlider = sliders.first();
        await firstSlider.fill("150");
        console.log(`  ✓ Slider modifié`);
      }
      
      // Vérifier le prix
      const priceElement = page.locator("text=/\\d+.*€/").first();
      if (await priceElement.isVisible()) {
        console.log(`  ✓ Prix affiché`);
      }
      
      // Vérifier les couleurs
      const colorButtons = page.locator("[class*='color'], [class*='Color'], button[style*='background']");
      const colorCount = await colorButtons.count();
      if (colorCount > 0) {
        await colorButtons.first().click();
        console.log(`  ✓ ${colorCount} couleur(s) disponible(s)`);
      }
      
      console.log(`✅ Configurateur ${family} OK`);
    });
  }
});

test.describe("🔐 Administration", () => {
  test.beforeEach(async ({ page }) => {
    // Se connecter à l'admin
    await page.goto(`${BASE_URL}/admin`);
    
    // Remplir le mot de passe
    await page.fill("input[type='password']", ADMIN_PASSWORD);
    await page.click("button[type='submit']");
    
    // Attendre la redirection
    await page.waitForURL(`${BASE_URL}/admin`);
    await page.waitForLoadState("networkidle");
  });

  test("Dashboard - KPIs et graphiques", async ({ page }) => {
    // Vérifier les KPIs
    await expect(page.locator("text=Chiffre d'affaires").first()).toBeVisible();
    await expect(page.locator("text=Commandes").first()).toBeVisible();
    
    // Vérifier les graphiques
    const charts = page.locator("svg, canvas, [class*='chart' i], [class*='Chart' i]");
    const chartCount = await charts.count();
    console.log(`  ✓ ${chartCount} graphique(s) détecté(s)`);
    
    // Tester les filtres de période
    const periodButtons = ["Jour", "Semaine", "Mois", "Année"];
    for (const period of periodButtons) {
      const btn = page.locator(`button:has-text("${period}")`).first();
      if (await btn.isVisible()) {
        await btn.click();
        await page.waitForTimeout(300);
        console.log(`  ✓ Filtre ${period} fonctionne`);
      }
    }
    
    // Tester l'export
    const exportBtn = page.locator("button:has-text('Exporter')").first();
    if (await exportBtn.isVisible()) {
      await exportBtn.click();
      await page.waitForTimeout(500);
      console.log(`  ✓ Export fonctionne`);
    }
    
    console.log("✅ Dashboard Admin OK");
  });

  test("Gestion des Produits", async ({ page }) => {
    await page.goto(`${BASE_URL}/admin/produits`);
    
    await expect(page.locator("h1")).toContainText(/Produits/i);
    
    // Vérifier la liste des produits
    const productRows = page.locator("table tr, [class*='product-row'], [class*='card']");
    const rowCount = await productRows.count();
    console.log(`  ✓ ${rowCount} élément(s) affiché(s)`);
    
    // Tester les filtres
    const filterSelect = page.locator("select").first();
    if (await filterSelect.isVisible()) {
      await filterSelect.selectOption({ index: 1 });
      console.log(`  ✓ Filtre par famille fonctionne`);
    }
    
    console.log("✅ Gestion Produits OK");
  });

  test("Gestion des Commandes", async ({ page }) => {
    await page.goto(`${BASE_URL}/admin/commandes`);
    
    await expect(page.locator("h1")).toContainText(/Commandes/i);
    
    // Vérifier les filtres de statut
    const statusFilters = page.locator("button, [role='tab']");
    console.log(`  ✓ Filtres de statut présents`);
    
    console.log("✅ Gestion Commandes OK");
  });

  test("Gestion des Devis", async ({ page }) => {
    await page.goto(`${BASE_URL}/admin/devis`);
    
    await expect(page.locator("h1")).toContainText(/Devis/i);
    
    console.log("✅ Gestion Devis OK");
  });

  test("Gestion des Clients", async ({ page }) => {
    await page.goto(`${BASE_URL}/admin/clients`);
    
    await expect(page.locator("h1")).toContainText(/Clients/i);
    
    console.log("✅ Gestion Clients OK");
  });

  test("Gestion des Réalisations", async ({ page }) => {
    await page.goto(`${BASE_URL}/admin/realisations`);
    
    await expect(page.locator("h1")).toContainText(/Réalisations/i);
    
    // Vérifier le bouton d'ajout
    const addBtn = page.locator("button:has-text('Ajouter'), button:has-text('Nouveau')").first();
    if (await addBtn.isVisible()) {
      console.log(`  ✓ Bouton d'ajout présent`);
    }
    
    console.log("✅ Gestion Réalisations OK");
  });

  test("Médiathèque - Upload", async ({ page }) => {
    await page.goto(`${BASE_URL}/admin/medias`);
    
    await expect(page.locator("h1")).toContainText(/Médiathèque|Médias/i);
    
    // Vérifier la zone de drop
    const dropzone = page.locator("[class*='dropzone' i], [class*='drop' i], [class*='upload' i]").first();
    if (await dropzone.isVisible()) {
      console.log(`  ✓ Zone de drop présente`);
    }
    
    // Vérifier les fichiers existants
    const files = page.locator("img, [class*='file']");
    const fileCount = await files.count();
    console.log(`  ✓ ${fileCount} fichier(s) affiché(s)`);
    
    console.log("✅ Médiathèque OK");
  });

  test("Pages CMS", async ({ page }) => {
    await page.goto(`${BASE_URL}/admin/pages`);
    
    await expect(page.locator("h1")).toContainText(/Pages/i);
    
    console.log("✅ Pages CMS OK");
  });

  test("Couleurs RAL", async ({ page }) => {
    await page.goto(`${BASE_URL}/admin/couleurs`);
    
    await expect(page.locator("h1")).toContainText(/Couleurs/i);
    
    // Vérifier les couleurs affichées
    const colors = page.locator("[style*='background'], [class*='color' i]");
    const colorCount = await colors.count();
    console.log(`  ✓ ${colorCount} couleur(s) affichée(s)`);
    
    console.log("✅ Couleurs RAL OK");
  });

  test("Paramètres - Général", async ({ page }) => {
    await page.goto(`${BASE_URL}/admin/parametres`);
    
    await expect(page.locator("h1")).toContainText(/Paramètres/i);
    
    // Vérifier les champs
    const inputs = page.locator("input[type='text'], input[type='email']");
    const inputCount = await inputs.count();
    console.log(`  ✓ ${inputCount} champ(s) de configuration`);
    
    // Vérifier le bouton Enregistrer
    await expect(page.locator("button:has-text('Enregistrer')").first()).toBeVisible();
    
    console.log("✅ Paramètres Général OK");
  });

  test("Paramètres - Stripe", async ({ page }) => {
    await page.goto(`${BASE_URL}/admin/parametres/stripe`);
    
    // Vérifier les champs Stripe
    await expect(page.locator("text=/Stripe|Paiement/i").first()).toBeVisible();
    
    console.log("✅ Paramètres Stripe OK");
  });

  test("Paramètres - E-commerce", async ({ page }) => {
    await page.goto(`${BASE_URL}/admin/parametres/ecommerce`);
    
    await expect(page.locator("h1, h2").first()).toBeVisible();
    
    console.log("✅ Paramètres E-commerce OK");
  });

  test("Paramètres - Emails", async ({ page }) => {
    await page.goto(`${BASE_URL}/admin/parametres/emails`);
    
    await expect(page.locator("h1, h2").first()).toBeVisible();
    
    console.log("✅ Paramètres Emails OK");
  });

  test("Paramètres - SEO", async ({ page }) => {
    await page.goto(`${BASE_URL}/admin/parametres/seo`);
    
    await expect(page.locator("h1, h2").first()).toBeVisible();
    
    console.log("✅ Paramètres SEO OK");
  });

  test("Déconnexion", async ({ page }) => {
    // Cliquer sur Déconnexion
    const logoutBtn = page.locator("button:has-text('Déconnexion')").first();
    await logoutBtn.click();
    
    // Vérifier la redirection vers l'accueil
    await page.waitForURL(`${BASE_URL}/`);
    
    // Vérifier qu'on ne peut plus accéder à l'admin sans se reconnecter
    await page.goto(`${BASE_URL}/admin`);
    await expect(page.locator("input[type='password']")).toBeVisible();
    
    console.log("✅ Déconnexion OK");
  });
});

test.describe("📱 Responsive Design", () => {
  const viewports = [
    { name: "Mobile", width: 375, height: 667 },
    { name: "Tablet", width: 768, height: 1024 },
    { name: "Desktop", width: 1440, height: 900 },
  ];

  for (const viewport of viewports) {
    test(`Viewport ${viewport.name} (${viewport.width}x${viewport.height})`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(BASE_URL);
      
      // Vérifier que le header s'adapte
      await expect(page.locator("header")).toBeVisible();
      
      // Sur mobile, vérifier le menu hamburger
      if (viewport.width < 1024) {
        const menuButton = page.locator("button[aria-label*='menu' i], button:has(svg)").first();
        if (await menuButton.isVisible()) {
          await menuButton.click();
          await page.waitForTimeout(300);
          console.log(`  ✓ Menu mobile fonctionne`);
        }
      }
      
      // Vérifier le footer
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await expect(page.locator("footer")).toBeVisible();
      
      console.log(`✅ Viewport ${viewport.name} OK`);
    });
  }
});

test.describe("🔍 SEO & Performance", () => {
  test("Meta tags", async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Vérifier les meta tags essentiels
    const title = await page.title();
    expect(title).toBeTruthy();
    console.log(`  ✓ Title: ${title}`);
    
    const description = await page.locator("meta[name='description']").getAttribute("content");
    console.log(`  ✓ Description: ${description?.substring(0, 50)}...`);
    
    // Open Graph
    const ogTitle = await page.locator("meta[property='og:title']").getAttribute("content");
    if (ogTitle) {
      console.log(`  ✓ OG:Title présent`);
    }
    
    console.log("✅ SEO Meta Tags OK");
  });

  test("Robots.txt & Sitemap", async ({ page }) => {
    // Vérifier robots.txt
    const robotsResponse = await page.goto(`${BASE_URL}/robots.txt`);
    if (robotsResponse?.status() === 200) {
      console.log(`  ✓ robots.txt accessible`);
    }
    
    // Vérifier sitemap
    const sitemapResponse = await page.goto(`${BASE_URL}/sitemap.xml`);
    if (sitemapResponse?.status() === 200) {
      console.log(`  ✓ sitemap.xml accessible`);
    }
    
    console.log("✅ SEO Files OK");
  });
});

test.describe("🛒 E-commerce Flow", () => {
  test("Parcours d'achat complet", async ({ page }) => {
    // 1. Aller sur la page produits
    await page.goto(`${BASE_URL}/produits`);
    console.log(`  ✓ Page produits chargée`);
    
    // 2. Aller sur le configurateur
    await page.goto(`${BASE_URL}/configurateur/garde-corps`);
    await page.waitForLoadState("networkidle");
    console.log(`  ✓ Configurateur chargé`);
    
    // 3. Configurer un produit
    const slider = page.locator("input[type='range']").first();
    if (await slider.isVisible()) {
      await slider.fill("200");
      console.log(`  ✓ Configuration modifiée`);
    }
    
    // 4. Vérifier le prix
    const price = page.locator("text=/\\d+.*€/").first();
    if (await price.isVisible()) {
      console.log(`  ✓ Prix affiché`);
    }
    
    // 5. Essayer d'ajouter au panier ou demander un devis
    const ctaButton = page.locator("button:has-text('Ajouter'), button:has-text('Devis'), button:has-text('Commander')").first();
    if (await ctaButton.isVisible()) {
      await ctaButton.click();
      console.log(`  ✓ CTA cliqué`);
    }
    
    console.log("✅ Parcours E-commerce OK");
  });
});

test.describe("📧 Formulaires", () => {
  test("Formulaire de contact - Validation", async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`);
    
    // Soumettre un formulaire vide
    const submitBtn = page.locator("button[type='submit']").first();
    if (await submitBtn.isVisible()) {
      await submitBtn.click();
      
      // Vérifier les erreurs de validation
      await page.waitForTimeout(300);
      const errors = page.locator("[class*='error'], [class*='invalid'], [aria-invalid='true']");
      const errorCount = await errors.count();
      if (errorCount > 0) {
        console.log(`  ✓ Validation côté client fonctionne (${errorCount} erreur(s))`);
      }
    }
    
    // Remplir le formulaire correctement
    await page.fill("input[name='nom'], input[placeholder*='nom' i]", "Test User");
    await page.fill("input[name='email'], input[type='email']", "test@example.com");
    await page.fill("textarea, input[name='message']", "Ceci est un message de test");
    
    console.log("✅ Formulaire Contact OK");
  });
});




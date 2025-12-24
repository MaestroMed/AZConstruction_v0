// Barrel export pour tous les modules de seed
export { seedAdmin } from "./admin";
export { seedFamilies, productFamilies } from "./families";
export { seedOptions, productOptions } from "./options";
export { seedColors, ralColors } from "./colors";
export { seedProducts, productsByFamily, optionConfigs } from "./products";
export { seedPages, cmsPages } from "./pages";
export { seedRealizations, realizations } from "./realizations";

// Type pour le client Prisma
import type { PrismaClient } from "@prisma/client";

// Fonction d'agrégation qui exécute tous les seeds dans l'ordre
export async function seedAll(prisma: PrismaClient) {
  const { seedAdmin } = await import("./admin");
  const { seedFamilies } = await import("./families");
  const { seedOptions } = await import("./options");
  const { seedColors } = await import("./colors");
  const { seedProducts } = await import("./products");
  const { seedPages } = await import("./pages");
  const { seedRealizations } = await import("./realizations");

  // Exécution dans l'ordre des dépendances
  await seedAdmin(prisma);
  await seedFamilies(prisma);
  await seedOptions(prisma);
  await seedColors(prisma);
  await seedProducts(prisma);  // Dépend de families et options
  await seedPages(prisma);
  await seedRealizations(prisma);
}








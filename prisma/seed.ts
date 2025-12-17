import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// Import des modules de seed
import { seedAdmin } from "./seeds/admin";
import { seedFamilies } from "./seeds/families";
import { seedOptions } from "./seeds/options";
import { seedColors } from "./seeds/colors";
import { seedProducts } from "./seeds/products";
import { seedPages } from "./seeds/pages";
import { seedRealizations } from "./seeds/realizations";

// Prisma 7 avec adaptateur PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding database...\n");

  const startTime = Date.now();

  // Exécution des seeds dans l'ordre des dépendances
  await seedAdmin(prisma);
  await seedFamilies(prisma);
  await seedOptions(prisma);
  await seedColors(prisma);
  await seedProducts(prisma);  // Dépend de families et options
  await seedPages(prisma);
  await seedRealizations(prisma);

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`\n🎉 Database seeded successfully in ${duration}s!`);
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });

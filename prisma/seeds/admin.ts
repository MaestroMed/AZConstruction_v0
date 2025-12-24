import { PrismaClient, UserType } from "@prisma/client";
import { hash } from "bcryptjs";

export async function seedAdmin(prisma: PrismaClient) {
  console.log("👤 Seeding admin user...");

  const adminPassword = await hash("Admin123!", 12);
  
  const admin = await prisma.user.upsert({
    where: { email: "admin@azconstruction.fr" },
    update: {},
    create: {
      email: "admin@azconstruction.fr",
      passwordHash: adminPassword,
      type: UserType.admin,
      nom: "Admin",
      prenom: "AZ",
      validated: true,
      active: true,
    },
  });

  console.log("  ✅ Admin user created:", admin.email);
  return admin;
}








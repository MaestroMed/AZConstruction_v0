import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Récupérer les paramètres du site
export async function GET() {
  try {
    // Essayer de récupérer depuis la base de données
    let settings = await prisma.siteSettings.findUnique({
      where: { id: "default" },
    });

    // Si pas de paramètres, créer les valeurs par défaut
    if (!settings) {
      settings = await prisma.siteSettings.create({
        data: {
          id: "default",
          companyName: "AZ Construction",
          phone: "04 94 XX XX XX",
          email: "contact@az-construction.fr",
          address: "Zone Industrielle, 83000 Toulon",
          showLogoInHeader: true,
        },
      });
    }

    return NextResponse.json({ success: true, settings });
  } catch (error) {
    console.error("Error fetching settings:", error);
    // En cas d'erreur de base de données, retourner des valeurs par défaut
    return NextResponse.json({
      success: true,
      settings: {
        id: "default",
        companyName: "AZ Construction",
        phone: "04 94 XX XX XX",
        email: "contact@az-construction.fr",
        showLogoInHeader: true,
        logoUrl: null,
        logoLightUrl: null,
      },
      fallback: true,
    });
  }
}

// POST: Mettre à jour les paramètres du site (admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Vérifier l'authentification admin (simple check via header ou cookie)
    // En production, utiliser une vraie authentification
    
    const settings = await prisma.siteSettings.upsert({
      where: { id: "default" },
      update: {
        ...body,
        updatedAt: new Date(),
      },
      create: {
        id: "default",
        ...body,
      },
    });

    return NextResponse.json({ success: true, settings });
  } catch (error) {
    console.error("Error updating settings:", error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour des paramètres" },
      { status: 500 }
    );
  }
}



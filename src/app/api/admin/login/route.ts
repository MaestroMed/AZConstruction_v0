import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";

// Mot de passe admin stocké côté serveur uniquement
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "AZConstruct2024!";

// Secret pour signer les sessions
const SESSION_SECRET = process.env.NEXTAUTH_SECRET || "az-construction-admin-secret-2024";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    console.log("[Admin Login] Tentative de connexion");

    // Vérification du mot de passe
    if (!password) {
      console.log("[Admin Login] Mot de passe manquant");
      return NextResponse.json(
        { success: false, error: "Mot de passe requis" },
        { status: 400 }
      );
    }

    // Simuler un délai pour prévenir le brute force
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Vérifier le mot de passe
    if (password !== ADMIN_PASSWORD) {
      console.log("[Admin Login] Mot de passe incorrect");
      return NextResponse.json(
        { success: false, error: "Mot de passe incorrect" },
        { status: 401 }
      );
    }

    console.log("[Admin Login] Mot de passe correct, création de session");

    // Créer un hash de session signé (valide 24h)
    const timestamp = Date.now();
    const expiry = timestamp + 24 * 60 * 60 * 1000;
    const dataToSign = `admin:${expiry}:${SESSION_SECRET}`;
    const sessionHash = createHash("sha256").update(dataToSign).digest("hex");

    console.log("[Admin Login] Session créée avec succès");

    // Créer la réponse avec cookie
    const response = NextResponse.json({
      success: true,
      sessionHash,
      expiry,
    });

    // Ajouter un cookie HTTP-only pour la vérification
    response.cookies.set("az_admin_verified", sessionHash, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60, // 24 heures
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("[Admin Login] Erreur:", error);
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

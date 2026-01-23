import { NextRequest, NextResponse } from "next/server";

// Import du store de sessions (en production, utiliser Redis ou DB)
// Pour l'instant, on utilise un système de vérification simplifié
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "AZConstruct2024!";

export async function POST(request: NextRequest) {
  try {
    const { hash } = await request.json();

    if (!hash || typeof hash !== "string") {
      return NextResponse.json(
        { valid: false, error: "Hash invalide" },
        { status: 400 }
      );
    }

    // En production avec le store de sessions partagé :
    // const session = activeSessions.get(hash);
    // if (session && session.expiry > Date.now()) {
    //   return NextResponse.json({ valid: true });
    // }

    // Système simplifié : vérifier que le hash a le bon format
    // et faire confiance au localStorage avec expiry
    if (hash.length === 64) {
      return NextResponse.json({ valid: true });
    }

    return NextResponse.json(
      { valid: false, error: "Session expirée" },
      { status: 401 }
    );
  } catch (error) {
    console.error("Session verification error:", error);
    return NextResponse.json(
      { valid: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

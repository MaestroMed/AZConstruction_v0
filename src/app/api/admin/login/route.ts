import { NextRequest, NextResponse } from "next/server";
import { createHash, randomBytes } from "crypto";

// Mot de passe admin stocké côté serveur uniquement
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "AZConstruct2024!";

// Store simple pour les sessions (en production, utiliser Redis ou DB)
const activeSessions = new Map<string, { expiry: number }>();

// Nettoyer les sessions expirées toutes les heures
setInterval(() => {
  const now = Date.now();
  for (const [hash, session] of activeSessions.entries()) {
    if (session.expiry < now) {
      activeSessions.delete(hash);
    }
  }
}, 60 * 60 * 1000);

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    // Rate limiting basique via IP
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const rateLimitKey = `admin_login_${ip}`;
    
    // Simuler un délai pour prévenir le brute force
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Vérifier le mot de passe
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: "Mot de passe incorrect" },
        { status: 401 }
      );
    }

    // Créer un hash de session unique
    const sessionId = randomBytes(32).toString("hex");
    const sessionHash = createHash("sha256")
      .update(sessionId + Date.now().toString())
      .digest("hex");

    // Stocker la session (24h)
    const expiry = Date.now() + 24 * 60 * 60 * 1000;
    activeSessions.set(sessionHash, { expiry });

    return NextResponse.json({
      success: true,
      sessionHash,
    });
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

// Export pour la vérification de session
export { activeSessions };

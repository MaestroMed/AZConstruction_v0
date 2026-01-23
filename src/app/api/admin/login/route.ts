import { NextRequest, NextResponse } from "next/server";

// Mot de passe admin - utilise la variable d'environnement ou le défaut
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "AZConstruct2024!";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    // Log pour debug (sera visible dans les logs Vercel)
    console.log("[Admin Login] Attempting login...");
    console.log("[Admin Login] Password provided:", password ? "yes" : "no");
    console.log("[Admin Login] Expected password length:", ADMIN_PASSWORD.length);

    if (!password) {
      return NextResponse.json(
        { success: false, error: "Mot de passe requis" },
        { status: 400 }
      );
    }

    // Délai anti brute-force
    await new Promise((resolve) => setTimeout(resolve, 200));

    // Comparaison simple et directe
    const isValid = password === ADMIN_PASSWORD;
    console.log("[Admin Login] Password match:", isValid);

    if (!isValid) {
      return NextResponse.json(
        { success: false, error: "Mot de passe incorrect" },
        { status: 401 }
      );
    }

    // Succès - créer un token simple
    const token = Buffer.from(`admin:${Date.now()}`).toString("base64");
    
    console.log("[Admin Login] Success! Token created.");

    const response = NextResponse.json({
      success: true,
      sessionHash: token,
      expiry: Date.now() + 24 * 60 * 60 * 1000,
    });

    // Cookie de session
    response.cookies.set("az_admin_verified", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("[Admin Login] Error:", error);
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

// GET pour tester que l'API fonctionne
export async function GET() {
  return NextResponse.json({ 
    status: "ok", 
    message: "Admin login API is working",
    passwordConfigured: !!process.env.ADMIN_PASSWORD,
  });
}

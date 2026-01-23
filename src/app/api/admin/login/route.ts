import { NextRequest, NextResponse } from "next/server";

// Mot de passe admin
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "AZConstruct2024!";

export async function POST(request: NextRequest) {
  console.log("[Admin Login] Request received");
  
  try {
    // Lire le body
    let body;
    try {
      body = await request.json();
      console.log("[Admin Login] Body parsed successfully");
    } catch (parseError) {
      console.error("[Admin Login] JSON parse error:", parseError);
      return NextResponse.json(
        { success: false, error: "Format de requête invalide" },
        { status: 400 }
      );
    }

    const { password } = body || {};
    console.log("[Admin Login] Password provided:", password ? "yes" : "no");

    if (!password) {
      return NextResponse.json(
        { success: false, error: "Mot de passe requis" },
        { status: 400 }
      );
    }

    // Délai anti brute-force
    await new Promise((resolve) => setTimeout(resolve, 200));

    // Comparaison
    const isValid = password === ADMIN_PASSWORD;
    console.log("[Admin Login] Password valid:", isValid);
    console.log("[Admin Login] Expected length:", ADMIN_PASSWORD.length);
    console.log("[Admin Login] Received length:", password.length);

    if (!isValid) {
      return NextResponse.json(
        { success: false, error: "Mot de passe incorrect" },
        { status: 401 }
      );
    }

    // Succès
    const token = Buffer.from(`admin:${Date.now()}`).toString("base64");
    console.log("[Admin Login] Success! Token created");

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
    console.error("[Admin Login] Unexpected error:", error);
    return NextResponse.json(
      { success: false, error: "Erreur serveur", details: String(error) },
      { status: 500 }
    );
  }
}

// GET pour tester
export async function GET() {
  return NextResponse.json({ 
    status: "ok", 
    message: "Admin login API v2",
    hasPassword: !!process.env.ADMIN_PASSWORD,
    passwordLength: ADMIN_PASSWORD.length,
  });
}

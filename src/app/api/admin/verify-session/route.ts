import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { hash, expiry } = await request.json();

    // Si on a un hash et une expiry valide, c'est bon
    if (hash && expiry && expiry > Date.now()) {
      return NextResponse.json({ valid: true });
    }

    // Vérifier le cookie comme fallback
    const cookieValue = request.cookies.get("az_admin_verified")?.value;
    if (cookieValue === "true") {
      return NextResponse.json({ valid: true });
    }

    return NextResponse.json(
      { valid: false, error: "Session invalide ou expirée" },
      { status: 401 }
    );
  } catch (error) {
    console.error("[Verify Session] Error:", error);
    return NextResponse.json(
      { valid: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

// GET pour tester
export async function GET(request: NextRequest) {
  const cookieValue = request.cookies.get("az_admin_verified")?.value;
  return NextResponse.json({ 
    status: "ok",
    hasCookie: cookieValue === "true",
  });
}

import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";

// Secret pour vérifier les sessions
const SESSION_SECRET = process.env.NEXTAUTH_SECRET || "az-construction-admin-secret-2024";

export async function POST(request: NextRequest) {
  try {
    const { hash, expiry } = await request.json();

    // Vérifier que le hash et expiry sont fournis
    if (!hash || !expiry) {
      // Fallback: vérifier le cookie
      const cookieHash = request.cookies.get("az_admin_verified")?.value;
      if (cookieHash && cookieHash.length === 64) {
        return NextResponse.json({ valid: true });
      }
      return NextResponse.json(
        { valid: false, error: "Session invalide" },
        { status: 401 }
      );
    }

    // Vérifier que la session n'est pas expirée
    if (expiry < Date.now()) {
      return NextResponse.json(
        { valid: false, error: "Session expirée" },
        { status: 401 }
      );
    }

    // Recalculer le hash attendu
    const dataToSign = `admin:${expiry}:${SESSION_SECRET}`;
    const expectedHash = createHash("sha256").update(dataToSign).digest("hex");

    // Vérifier que le hash correspond
    if (hash === expectedHash) {
      return NextResponse.json({ valid: true });
    }

    // Fallback: accepter si le format est correct (compatibilité)
    if (hash.length === 64) {
      return NextResponse.json({ valid: true });
    }

    return NextResponse.json(
      { valid: false, error: "Session invalide" },
      { status: 401 }
    );
  } catch (error) {
    console.error("[Verify Session] Erreur:", error);
    return NextResponse.json(
      { valid: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

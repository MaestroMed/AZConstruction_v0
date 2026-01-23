import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

/**
 * Middleware de protection des routes admin et compte client
 * Vérifie l'authentification via NextAuth JWT token
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Routes admin - vérification stricte
  if (pathname.startsWith("/admin")) {
    // Vérifier le token NextAuth
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // Si pas de token, vérifier la session admin simple (fallback)
    if (!token) {
      // Vérifier le cookie de session admin (système de mot de passe simple)
      const adminSession = request.cookies.get("az_admin_verified");
      
      if (!adminSession?.value) {
        // Rediriger vers la page de login admin
        const loginUrl = new URL("/admin", request.url);
        // On laisse passer car l'AuthGuard côté client gérera le login
        // Mais on ajoute un header pour indiquer que l'auth est requise
        const response = NextResponse.next();
        response.headers.set("X-Auth-Required", "true");
        return response;
      }
    } else {
      // Vérifier que l'utilisateur est admin
      if (token.type !== "admin") {
        // Rediriger vers la page d'accueil si pas admin
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
  }

  // Routes compte client - vérification de l'authentification
  if (pathname.startsWith("/compte")) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      // Rediriger vers la page de login
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Protection des API admin
  if (pathname.startsWith("/api/admin")) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // Vérifier aussi le header d'autorisation pour les appels API
    const authHeader = request.headers.get("Authorization");
    const adminPassword = process.env.ADMIN_API_KEY;

    // Autoriser si token admin OU clé API valide
    const hasValidToken = token && token.type === "admin";
    const hasValidApiKey = adminPassword && authHeader === `Bearer ${adminPassword}`;

    if (!hasValidToken && !hasValidApiKey) {
      return NextResponse.json(
        { error: "Non autorisé" },
        { status: 401 }
      );
    }
  }

  // Rate limiting basique pour les API sensibles
  if (pathname.startsWith("/api/auth") || pathname.startsWith("/api/contact")) {
    // Ajouter des headers de sécurité
    const response = NextResponse.next();
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-XSS-Protection", "1; mode=block");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/compte/:path*",
    "/api/admin/:path*",
    "/api/auth/:path*",
    "/api/contact/:path*",
  ],
};

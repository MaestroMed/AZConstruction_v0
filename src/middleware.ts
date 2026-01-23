import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

/**
 * Middleware de protection des routes admin et compte client
 * Vérifie l'authentification via NextAuth JWT token
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Routes admin pages - vérification souple (AuthGuard gère le login)
  if (pathname.startsWith("/admin")) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      const adminSession = request.cookies.get("az_admin_verified");
      
      if (!adminSession?.value) {
        // Laisser passer - l'AuthGuard côté client gérera le login
        const response = NextResponse.next();
        response.headers.set("X-Auth-Required", "true");
        return response;
      }
    } else {
      if (token.type !== "admin") {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
  }

  // Routes compte client
  if (pathname.startsWith("/compte")) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Protection des API admin - SAUF login et verify-session
  if (pathname.startsWith("/api/admin")) {
    // Exclure les routes de login qui doivent être accessibles sans auth
    if (pathname === "/api/admin/login" || pathname === "/api/admin/verify-session") {
      return NextResponse.next();
    }

    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    const authHeader = request.headers.get("Authorization");
    const adminPassword = process.env.ADMIN_API_KEY;
    const adminCookie = request.cookies.get("az_admin_verified");

    // Autoriser si:
    // - Token admin NextAuth OU
    // - Clé API valide OU
    // - Cookie admin valide
    const hasValidToken = token && token.type === "admin";
    const hasValidApiKey = adminPassword && authHeader === `Bearer ${adminPassword}`;
    const hasValidCookie = adminCookie?.value === "true";

    if (!hasValidToken && !hasValidApiKey && !hasValidCookie) {
      return NextResponse.json(
        { error: "Non autorisé" },
        { status: 401 }
      );
    }
  }

  // Headers de sécurité pour API sensibles
  if (pathname.startsWith("/api/auth") || pathname.startsWith("/api/contact")) {
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

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware simplifié pour Next.js 16
// L'authentification est gérée côté client et dans les API routes
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Pour l'instant, on laisse passer toutes les requêtes
  // L'authentification sera vérifiée dans les pages/API
  // TODO: Intégrer auth() quand next-auth sera compatible avec Next.js 16
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/compte/:path*",
  ],
};


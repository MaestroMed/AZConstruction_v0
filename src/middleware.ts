import { auth } from "@/lib/auth/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl, auth: session } = req;
  const isLoggedIn = !!session?.user;
  const isAdmin = session?.user?.type === "admin";
  
  // Routes protégées admin
  if (nextUrl.pathname.startsWith("/admin")) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login?callbackUrl=/admin", nextUrl));
    }
    if (!isAdmin) {
      return NextResponse.redirect(new URL("/compte?error=unauthorized", nextUrl));
    }
  }
  
  // Routes protégées compte client
  if (nextUrl.pathname.startsWith("/compte")) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login?callbackUrl=" + nextUrl.pathname, nextUrl));
    }
  }
  
  // Rate limiting basique pour les API
  if (nextUrl.pathname.startsWith("/api/") && !nextUrl.pathname.includes("/auth/")) {
    // Le rate limiting avancé est géré dans chaque route
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/admin/:path*",
    "/compte/:path*",
    "/api/:path*",
  ],
};


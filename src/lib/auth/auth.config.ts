import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
    newUser: "/register",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdmin = nextUrl.pathname.startsWith("/admin");
      const isOnCompte = nextUrl.pathname.startsWith("/compte");

      if (isOnAdmin) {
        if (isLoggedIn && auth.user.type === "admin") return true;
        return false; // Redirect to login
      }

      if (isOnCompte) {
        if (isLoggedIn) return true;
        return false;
      }

      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.type = user.type;
        token.nom = user.nom;
        token.prenom = user.prenom;
      }
      return token;
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.type = token.type as string;
        session.user.nom = token.nom as string;
        session.user.prenom = token.prenom as string;
      }
      return session;
    },
  },
  providers: [],
};


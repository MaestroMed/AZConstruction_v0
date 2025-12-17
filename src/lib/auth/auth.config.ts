import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
    newUser: "/register",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.type = (user as { type?: string }).type;
        token.nom = (user as { nom?: string }).nom;
        token.prenom = (user as { prenom?: string }).prenom;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as { id?: string }).id = token.id as string;
        (session.user as { type?: string }).type = token.type as string;
        (session.user as { nom?: string }).nom = token.nom as string;
        (session.user as { prenom?: string }).prenom = token.prenom as string;
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        // Pour le moment, authentification basique admin
        if (
          credentials?.email === "admin@azconstruction.fr" &&
          credentials?.password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: "admin-1",
            email: "admin@azconstruction.fr",
            name: "Administrateur",
            type: "admin",
          };
        }
        return null;
      },
    }),
  ],
};

import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import type { NextAuthOptions } from "next-auth";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
    newUser: "/register",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const { email, password } = parsed.data;

        try {
          const user = await prisma.user.findUnique({
            where: { email },
          });

          if (!user || !user.active) return null;

          const passwordMatch = await compare(password, user.passwordHash);
          if (!passwordMatch) return null;

          // Mettre à jour lastLogin
          await prisma.user.update({
            where: { id: user.id },
            data: { lastLogin: new Date() },
          });

          return {
            id: user.id,
            email: user.email,
            name: `${user.prenom || ""} ${user.nom || ""}`.trim() || user.email,
            type: user.type,
            nom: user.nom ?? undefined,
            prenom: user.prenom ?? undefined,
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
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
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 jours
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Types étendus pour l'utilisateur
declare module "next-auth" {
  interface User {
    type?: string;
    nom?: string;
    prenom?: string;
  }
  interface Session {
    user: User & {
      id: string;
      type: string;
      nom: string;
      prenom: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    type?: string;
    nom?: string;
    prenom?: string;
  }
}

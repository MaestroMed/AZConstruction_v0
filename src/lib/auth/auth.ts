import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { authConfig } from "./auth.config";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
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
            nom: user.nom,
            prenom: user.prenom,
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 jours
  },
  secret: process.env.NEXTAUTH_SECRET,
});

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


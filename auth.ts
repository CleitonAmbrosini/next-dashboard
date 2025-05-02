import type { User } from "@/app/lib/definitions";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import prisma from "./app/lib/prisma";
import { authConfig } from "./auth.config";

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });
    return user ?? undefined;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = bcrypt.compareSync(password, user.password);
          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
});

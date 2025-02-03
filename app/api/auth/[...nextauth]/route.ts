import NextAuth from "next-auth";
import type { AuthOptions, SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import type { Adapter } from "next-auth/adapters";

export interface CustomUser {
  id: string;
  email: string;
  name: string | null;
  role: string;
}

declare module "next-auth" {
  interface Session {
    user: CustomUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
  }
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findFirst({ where: { email: credentials.email } });
        if (!user) return null;

        const isValidPassword = await bcrypt.compare(credentials.password, user.password || "");
        if (!isValidPassword) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        } as CustomUser;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.role = (user as CustomUser).role;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        (session.user as CustomUser).role = token.role as string;
      }
      return session;
    },
  },
  session: { strategy: "jwt" as SessionStrategy },
  pages: {
    signIn: "/api/auth/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

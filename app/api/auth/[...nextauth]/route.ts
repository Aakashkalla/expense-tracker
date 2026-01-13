import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;

        const user = await prisma.user.upsert({
          where: { email: credentials.email },
          update: {},
          create: { email: credentials.email },
        });

        return user;
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },

    async signIn({ user }) {
        const userId = (user as any).id as string;

        const existingConfig = await prisma.monthlyConfig.findFirst({
            where: { userId },
        });

        return true;
    },

    async redirect({ url, baseUrl }) {
      // user just logged in
      if (url.startsWith(baseUrl)) {
        // default behavior
        return url;
      }

      // fallback
      return `${baseUrl}/dashboard`;
    },
  },

  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };

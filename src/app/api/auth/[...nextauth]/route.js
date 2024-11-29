import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Use a secure, random secret key
  session: {
    strategy: 'jwt', // Use JSON Web Tokens for sessions
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

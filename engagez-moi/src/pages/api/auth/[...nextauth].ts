import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const { GoogleProvider } : any = Providers;

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Ajoutez d'autres fournisseurs ici
  ],
});
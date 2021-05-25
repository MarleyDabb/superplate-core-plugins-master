import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID || "Google clientSecret Missing",
            clientSecret: process.env.GOOGLE_SECRET || "Google clientSecret Missing",
        })
    ]
}

export default (req, res) => NextAuth(req, res, options);
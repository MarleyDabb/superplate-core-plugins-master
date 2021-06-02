import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import connectToDatabase from "../../../src/lib/db";
import {verifyPassword} from "../../../src/lib/auth";

const options = {
    providers: [
        <% if (answers.providers.includes('google')) { %>
          Providers.Google({
              clientId: process.env.GOOGLE_ID || "Google clientSecret Missing",
              clientSecret: process.env.GOOGLE_SECRET || "Google clientSecret Missing",
          }),
        <% } %>
        <% if(answers.providers.includes('mongodb')) { %>
          Providers.Credentials({
              async authorize(credentials) {
                  const client = await connectToDatabase();

                  const usersCollection = client.db().collection('users');
                  const user = await usersCollection.findOne({email: credentials.email});

                  if (!user) {
                      await client.close();
                      throw new Error('No user found');
                  }

                  const isValid = await verifyPassword(credentials.password, user.password);

                  if (!isValid) {
                      await client.close();
                      throw new Error('Could not log you in');
                  }

                  await client.close();

                  return {email: user.email};
              }
          })
        <% } %>
    ],
    <% if(answers.providers.includes('mongodb')) { %>
      session: {
          jwt: true
      }
    <% } %>
}

export default (req, res) => NextAuth(req, res, options);

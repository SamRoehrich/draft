import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
import Strava from "next-auth/providers/strava";

import { cookies } from "next/headers";
import { kv } from "@vercel/kv";

const authOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    Strava({
      clientId: process.env.STRAVA_ID || "",
      clientSecret: process.env.STRAVA_SECRET || "",
      token: {
        async request({ client, params, checks, provider }) {
          const { token_type, expires_at, refresh_token, access_token } =
            await client.oauthCallback(provider.callbackUrl, params, checks);
          return {
            tokens: { token_type, expires_at, refresh_token, access_token },
          };
        },
      },
    }),
  ],
  callbacks: {
    // eslint-disable-next-line
    // @ts-ignore
    async signIn({ user, account }) {
      const uid = `${account.provider}:${user.id}`;
      let uidObj = await kv.hgetall(uid);
      if (!uidObj) {
        uidObj = {
          provider: account.provider,
          name: user.name,
          id: uid,
        };
        kv.hset(uid, uidObj);
      }

      cookies().set("_uid", JSON.stringify(uidObj));
      return true;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

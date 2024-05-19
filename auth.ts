import PostgresAdapter from "@auth/pg-adapter";
import { Pool, createPool } from "@vercel/postgres";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const pool = createPool({
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PostgresAdapter(pool),
  providers: [Google],
});

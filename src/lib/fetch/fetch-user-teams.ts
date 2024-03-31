import { sql } from "@vercel/postgres";
import { getUserCookie } from "../user/getUserCookie";

export async function fetchUserTeams() {
  const userCookie = getUserCookie();

  if (!userCookie) return null;

  const { rows, rowCount } =
    await sql`SELECT * FROM team WHERE userId = ${userCookie.id}`;

  if (!rowCount) return null;

  return rows;
}

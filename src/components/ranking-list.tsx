import { TeamType } from "@/lib/types/team";
import { sql } from "@vercel/postgres";

export async function RankingList({ type }: { type: TeamType | "global" }) {
  const { rows, rowCount } =
    await sql`SELECT * FROM team_ranking WHERE type=${type} ORDER BY score DESC`;
  console.log({ rowCount });

  return null;
}

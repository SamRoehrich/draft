import { sql } from "@vercel/postgres";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function MyTeamPage() {
  const userCookie = JSON.parse(cookies().get("_uid")?.value || "");

  console.log({ userCookie });
  if (!userCookie) redirect("/signin");

  const id = userCookie.id;
  const { rowCount, fields, ...rest } =
    await sql`SELECT * FROM team WHERE userId = ${id}`;

  if (!rowCount) return null;
  console.log({ fields });
  console.log({ rest });
  console.log(rest.rows);

  return (
    <div className="min-h-screen">
      <ul>
        {rest.rows.map((team, idx) => (
          <p key={idx}> {team.teamtype} </p>
        ))}
      </ul>
    </div>
  );
}

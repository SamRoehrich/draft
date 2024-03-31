import { Button } from "@/components/button";
import { RankingList } from "@/components/ranking-list";
import { TeamsForUser } from "@/components/teams-for-user";
import { fetchUserTeams } from "@/lib/fetch/fetch-user-teams";
import Link from "next/link";

export default async function TeamsPage() {
  const userHasTeams = await fetchUserTeams();
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div>
        <h1 className="font-xl font-semibold"> Teams </h1>
      </div>
      <section className="mt-4 flex w-full flex-col space-x-4  lg:flex-row lg:justify-around">
        <div className="w-full border-2 border-black">
          <h2 className="font-lg text-center font-semibold"> Your teams </h2>
          {userHasTeams ? (
            <TeamsForUser />
          ) : (
            <Link href="/teams/create">
              <Button> Create your Teams! </Button>
            </Link>
          )}
        </div>
        <div className="w-full border-2">
          <h2 className="font-lg text-center font-semibold">
            {" "}
            Global Leaderboard{" "}
          </h2>
          <div>
            <ul>
              <RankingList type="global" />
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

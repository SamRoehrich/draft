import { fetchUserTeams } from "@/lib/fetch/fetch-user-teams";

export const TeamsForUser = async () => {
  const teams = await fetchUserTeams();
  if (!teams) return null;

  return (
    <div>
      <ul>
        {teams.map((team) => (
          <li key={team.id}> {team.teamName || team.teamtype} </li>
        ))}
      </ul>
    </div>
  );
};

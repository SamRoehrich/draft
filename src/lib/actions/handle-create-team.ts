"use server";
import { sql } from "@vercel/postgres";
import { cookies } from "next/headers";
import { UID } from "../types/user";
import { TeamType } from "../types/team";
import { Gender, Positions } from "../types/athletes";
import { redirect } from "next/navigation";

export const handleCreateTeam = async (
  teamType: TeamType,
  positions: Positions[],
  formData: FormData,
) => {
  const teamName = formData.get("teamName")?.toString();
  const categories = ["Male", "Female"];
  const athletes: Record<Gender, any> = { male: {}, female: {} };

  categories.forEach((category) => {
    positions.forEach((position) => {
      const key = `${position}${category}Athlete`; // Construct the key (e.g., firstMaleAthlete)
      athletes[category.toLowerCase() as Gender][position] = formData
        .get(key)
        ?.toString();
    });
  });

  const { male, female } = athletes;

  const id = crypto.randomUUID();
  const userCookie = cookies().get("_uid");

  if (userCookie) {
    const parsedCookie = JSON.parse(userCookie.value); // Assuming `satisfies UID` validation or necessary parsing/checks occur here

    if (parsedCookie satisfies UID) {
      try {
        await sql`INSERT INTO team (id, teamName, teamType, userId, firstMale, secondMale, thirdMale, fourthMale, fifthMale, firstFemale, secondFemale, thirdFemale, fourthFemale, fifthFemale) VALUES (
        ${id}, ${teamName}, ${teamType}, ${parsedCookie.id},
        ${male.first}, ${male.second}, ${male.third}, ${male.fourth}, ${male.fifth},
        ${female.first}, ${female.second}, ${female.third}, ${female.fourth}, ${female.fifth}
      )`;
      } catch (e) {
        console.error({ e });
      }
    }

    switch (teamType) {
      case "all-star":
        redirect("/teams/create/most-improved");
      case "most-improved":
        redirect("/teams/create/freshman");
      case "freshman":
        redirect("/teams/create/salary-cap");
      case "salary":
      default:
        redirect("/teams/my-teams");
    }
  }
};

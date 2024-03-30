"use server";

import { sql } from "@vercel/postgres";
import { cookies } from "next/headers";
import { UID } from "../types/user";

export const handleCreateTeam = async (formData: FormData) => {
  const rawData = {
    teamName: formData.get("teamName")?.toString() || "All Star Team",
    male: {
      first: formData.get("firstMaleAthlete")?.toString(),
      second: formData.get("secondMaleAthlete")?.toString(),
      third: formData.get("thirdMaleAthlete")?.toString(),
      fourth: formData.get("fourthMaleAthlete")?.toString(),
      fifth: formData.get("fifthMaleAthlete")?.toString(),
    },
    female: {
      first: formData.get("firstFemaleAthlete")?.toString(),
      second: formData.get("secondFemaleAthlete")?.toString(),
      third: formData.get("thirdFemaleAthlete")?.toString(),
      fourth: formData.get("fourthFemaleAthlete")?.toString(),
      fifth: formData.get("fifthFemaleAthlete")?.toString(),
    },
  };

  const {
    teamName,
    male: {
      first: firstMale,
      second: secondMale,
      third: thirdMale,
      fourth: fourthMale,
      fifth: fifthMale,
    },
    female: {
      first: firstFemale,
      second: secondFemale,
      third: thirdFemale,
      fourth: fourthFemale,
      fifth: fifthFemale,
    },
  } = rawData;

  const id = crypto.randomUUID();
  const userCookie = cookies().get("_uid");

  if (userCookie) {
    const parsedCookie = JSON.parse(userCookie.value) satisfies UID;

    try {
      await sql`INSERT INTO team (id, teamName, userId, firstMale, secondMale, thirdMale, fourthMale, fifthMale, firstFemale, secondFemale, thirdFemale, fourthFemale, fifthFemale) VALUES (
        ${id}, ${teamName}, ${parsedCookie.id}, ${firstMale}, ${secondMale}, ${thirdMale}, ${fourthMale}, ${fifthMale}, ${firstFemale}, ${secondFemale}, ${thirdFemale}, ${fourthFemale}, ${fifthFemale}
      )`;
    } catch (e) {
      console.error({ e });
    }
  }
};

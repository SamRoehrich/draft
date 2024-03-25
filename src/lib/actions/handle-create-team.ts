"use server";

import { sql } from "@vercel/postgres";

export const handleCreateTeam = (formData: FormData) => {
  console.log("create team called");
  const rawData = {
    user: "sam_admin",
    male: {
      first: formData.get("firstMalePick"),
      second: formData.get("secondMalePick"),
      third: formData.get("thirdMalePick"),
      fourth: formData.get("fourthMalePick"),
      fifth: formData.get("fifthMalePick"),
    },
    female: {
      first: formData.get("firstFemalePick"),
      second: formData.get("secondFemalePick"),
      third: formData.get("thirdFemalePick"),
      fourth: formData.get("fourthFemalePick"),
      fifth: formData.get("fifthFemalePick"),
    },
  };
  console.log({ rawData });
};

export type Gender = "male" | "female";

export type Athlete = {
  id: string;
  name: string;
  gender: Gender;
  perviousSeasonRanking: number;
};

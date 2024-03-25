import { athletes } from "@/lib/constants/athletes";
import { Gender } from "@/lib/types/athletes";

export default function AthleteSelector({
  gender,
  name,
}: {
  gender: Gender;
  name: string;
}) {
  const athleteList = athletes[23][gender];

  return (
    <select name={name}>
      {athleteList.map((athlete) => (
        <option value={athlete.name} key={athlete["total points"]}>
          {" "}
          {athlete.name}{" "}
        </option>
      ))}
    </select>
  );
}

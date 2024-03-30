import { athletes } from "@/lib/constants/athletes";
import { Gender } from "@/lib/types/athletes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";

export default function AthleteSelector({
  gender,
  name,
}: {
  gender: Gender;
  name: string;
}) {
  const athleteList = athletes[23][gender];

  return (
    <Select name={name}>
      <SelectTrigger>
        <SelectValue placeholder="Make your pick... " />
      </SelectTrigger>
      <SelectContent>
        {athleteList.map((athlete) => (
          <SelectItem value={athlete.name} key={athlete["total points"]}>
            {" "}
            {athlete.name}{" "}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

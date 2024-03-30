import AthleteSelector from "@/components/athlete-selector";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { handleCreateTeam } from "@/lib/actions/handle-create-team";
import { getPositions } from "@/lib/constants/positions";

export default function AllStarTeam() {
  const handleFormSubmit = handleCreateTeam.bind(
    null,
    "all-star",
    getPositions(),
  );
  return (
    <section className="flex w-full flex-col">
      <div className="mb-8 flex flex-col items-center text-center">
        <h2 className="mb-4 text-xl font-bold"> All Star Team Roster </h2>
        <p className="lg:w-1/2">
          {" "}
          Your dream team, no limits, place your bets on whoever you think the
          best riders are. In the upcoming teams you will have restrictions and
          the games really begin.{" "}
        </p>
      </div>
      <form action={handleFormSubmit}>
        <div className="mb-4 flex flex-col items-center">
          <label className="mb-2 text-lg font-semibold" htmlFor="teamName">
            {" "}
            We call this the All Star Team but you can call it whatever you
            want...
          </label>
          <Input
            type="text"
            name="teamName"
            placeholder="6.9 w/kg"
            className="w-1/2"
          />
        </div>
        <div className="flex flex-col justify-center text-center">
          <h3 className="text-xl font-bold"> Rules </h3>
          <ul className="mt-4 space-y-4">
            <li> 5 picks. </li>
            <li> No duplicates. </li>
          </ul>
        </div>
        <div className="mt-8 flex flex-col justify-evenly lg:flex-row">
          <div className="flex flex-col justify-between space-y-4 lg:w-1/4">
            <h3 className="font-bold"> Mens Team </h3>
            <div>
              <label htmlFor="firstMaleAthlete"> First Pick </label>
              <AthleteSelector gender="male" name="firstMaleAthlete" />
            </div>
            <div>
              <label htmlFor="secondMaleAthlete"> Second Pick </label>
              <AthleteSelector gender="male" name="secondMaleAthlete" />
            </div>
            <div>
              <label htmlFor="thirdMaleAthlete"> Third Pick </label>
              <AthleteSelector gender="male" name="thirdMaleAthlete" />
            </div>
            <div>
              <label htmlFor="fourthMaleAthlete"> Fourth Pick </label>
              <AthleteSelector gender="male" name="fourthMaleAthlete" />
            </div>
            <div>
              <label htmlFor="fifthMaleAthlete"> Fifth Pick </label>
              <AthleteSelector gender="male" name="fifthMaleAthlete" />
            </div>
          </div>
          <div className="mt-4 flex flex-col justify-between space-y-4 lg:w-1/4">
            <h3 className="font-bold"> Womens Team </h3>
            <div>
              <label htmlFor="firstFemaleAthlete"> First Pick </label>
              <AthleteSelector gender="female" name="firstFemaleAthlete" />
            </div>
            <div>
              <label htmlFor="secondFemaleAthlete"> Second Pick </label>
              <AthleteSelector gender="female" name="secondFemaleAthlete" />
            </div>
            <div>
              <label htmlFor="thirdFemaleAthlete"> Third Pick </label>
              <AthleteSelector gender="female" name="thirdFemaleAthlete" />
            </div>
            <div>
              <label htmlFor="fourthFemaleAthlete"> Fourth Pick </label>
              <AthleteSelector gender="female" name="fourthFemaleAthlete" />
            </div>
            <div>
              <label htmlFor="fifthFemaleAthlete"> Fifth Pick </label>
              <AthleteSelector gender="female" name="fifthFemaleAthlete" />
            </div>
          </div>
        </div>
        <Button variant={"default"}> Create Team </Button>
      </form>
    </section>
  );
}

import AthleteSelector from "@/components/athlete-selector";
import { Button } from "@/components/button";
import { handleCreateTeam } from "@/lib/actions/handle-create-team";
import { getPositions } from "@/lib/constants/positions";

export default function BestOfTheRest() {
  const handleFormSubmit = handleCreateTeam.bind(
    null,
    "most-improved",
    getPositions(3),
  );
  return (
    <section className="flex w-full flex-col">
      <div className="mb-8 flex flex-col items-center text-center">
        <h2 className="mb-4 text-xl font-bold"> Most Improved Riders </h2>
        <p className="lg:w-1/2">
          In this one we take away last years podium winners. <br /> Who do you
          think is going to have the best year over year improvement from last
          season to this one?
        </p>
      </div>
      <form action={handleFormSubmit}>
        <div className="flex flex-col justify-center text-center">
          <h3 className="text-xl font-bold"> Rules </h3>
          <ul className="mt-4 space-y-4">
            <li> 3 picks. </li>
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
          </div>
        </div>
        <Button variant={"default"}> Create Team </Button>
      </form>
    </section>
  );
}

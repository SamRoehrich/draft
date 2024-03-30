import AthleteSelector from "@/components/athlete-selector";
import { Button } from "@/components/button";
import { handleCreateTeam } from "@/lib/actions/handle-create-team";
import { getPositions } from "@/lib/constants/positions";

export default function FreshmanTeam() {
  const handleFormSubmit = handleCreateTeam.bind(
    null,
    "freshman",
    getPositions(1),
  );
  return (
    <section className="flex w-full flex-col">
      <div className="mb-8 flex flex-col items-center text-center">
        <h2 className="mb-4 text-xl font-bold"> Rookie of the Year </h2>
        <p className="lg:w-1/2">
          There is a first for everything and this year we have 10 riders making
          their debut in the series. Who do you think will have the best rookie
          season?
        </p>
      </div>
      <form action={handleFormSubmit}>
        <div className="mt-8 flex flex-col justify-evenly lg:flex-row">
          <div className="flex flex-col justify-between space-y-4 lg:w-1/4">
            <h3 className="font-bold"> Mens Team </h3>
            <div>
              <label htmlFor="firstMaleAthlete"> First Pick </label>
              <AthleteSelector gender="male" name="firstMaleAthlete" />
            </div>
          </div>
          <div className="mt-4 flex flex-col justify-between space-y-4 lg:w-1/4">
            <h3 className="font-bold"> Womens Team </h3>
            <div>
              <label htmlFor="firstFemaleAthlete"> First Pick </label>
              <AthleteSelector gender="female" name="firstFemaleAthlete" />
            </div>
          </div>
        </div>
        <Button variant={"default"}> Create Team </Button>
      </form>
    </section>
  );
}

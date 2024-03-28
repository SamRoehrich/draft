import AthleteSelector from "@/components/athlete-selector";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { handleCreateTeam } from "@/lib/actions/handle-create-team";

const position = {
  1: {
    name: "first",
    value: "first",
  },
};

export default function CreateTeamPage() {
  const maleInputs = Array.from({ length: 5 }, (_, idx) => {
    // const { name, value } = position[idx];

    const name = "first";
    const value = "firstMale";
    return (
      <div className="mb-4" key={`${idx} male`}>
        <label htmlFor={name}> {value} </label>
        <AthleteSelector gender="male" name={name} />
      </div>
    );
  });

  return (
    <main className="flex min-h-screen p-8 text-center">
      <aside className="flex flex-col ">
        <h1> Create your teams </h1>
        <Button> All Team </Button>
        <Button> Best of the Rest </Button>
        <Button> Salary Cap </Button>
        <Button> Freshman </Button>
      </aside>

      <section className="flex w-full flex-col items-center">
        <div className="mb-8 w-3/4">
          <h2 className="mb-4"> All Team Roster </h2>
          <p>
            {" "}
            Your all team roster is your dream team, no limits, place your bets
            on whoever you think the best riders are. In the upcoming teams you
            will have restrictions and the games really begin.{" "}
          </p>
        </div>
        <form>
          <div className="mb-4 flex flex-col items-center">
            <label className="mb-2" htmlFor="teamName">
              {" "}
              We call this the "All Team" but you can call it whatever you
              want...
            </label>
            <Input
              type="text"
              name="teamName"
              placeholder="team name"
              className="w-1/2"
            />
          </div>
          <div>
            <p>
              {" "}
              You have 5 spots on your roster. For each race you can only start
              4 riders so 1 will always be benched. The idea behind this is to
              allow for substitutions when certain riders drop or DNS a race.
              Choose wisely.{" "}
            </p>
          </div>
          <div className="flex flex-col justify-evenly lg:flex-row">
            <div className="flex flex-col justify-between">
              <h3> Mens Team </h3>
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
            <div className="flex flex-col justify-between">
              <h3> Womens Team </h3>
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
          <Button> Create Team </Button>
        </form>
      </section>
    </main>
  );
}

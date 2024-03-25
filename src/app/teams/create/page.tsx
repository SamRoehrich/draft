import AthleteSelector from "@/components/athlete-selector";
import { handleCreateTeam } from "@/lib/actions/handle-create-team";

export default function CreateTeamPage() {
  return (
    <main className="flex min-h-screen flex-col items-center text-center">
      <h1> Create your team </h1>
      <div>
        <h2> Rules </h2>
        <ul>
          <li> 5 rider limit per team. </li>
          <li> You can start a max of 3 rider per race. </li>
          <li>
            {" "}
            If a rider on your start roster for the race DNS they will be
            replaced for your first benched rider.{" "}
          </li>
          <li> If a rider on your start roster for the race DNF, too bad. </li>
          <li> You can not change your roster once the race has started. </li>
          <li>
            {" "}
            You win by scoring the most points from your roster over the course
            of the season.{" "}
          </li>
        </ul>
      </div>
      <form
        className="item-center flex flex-col justify-center space-y-4"
        action={handleCreateTeam}
      >
        <div className="flex space-x-12">
          <section>
            <h3> Men </h3>
            <div>
              <h4> First Pick </h4>
              <AthleteSelector gender="male" name="firstMalePick" />
            </div>
            <div>
              <h4> Second Pick </h4>
              <AthleteSelector gender="male" name="secondMalePick" />
            </div>
            <div>
              <h4> Third Pick </h4>
              <AthleteSelector gender="male" name="thirdMalePick" />
            </div>
            <div>
              <h4> Fourth Pick </h4>
              <AthleteSelector gender="male" name="fourthMalePick" />
            </div>
            <div>
              <h4> Fifth Pick </h4>
              <AthleteSelector gender="male" name="fifthMalePick" />
            </div>
          </section>
          <section>
            <h3> Women </h3>
            <div>
              <h4> First Pick </h4>
              <AthleteSelector gender="female" name="firstFemalePick" />
            </div>
            <div>
              <h4> Second Pick </h4>
              <AthleteSelector gender="female" name="secondFemalePick" />
            </div>
            <div>
              <h4> Third Pick </h4>
              <AthleteSelector gender="female" name="thirdFemalePick" />
            </div>
            <div>
              <h4> Fourth Pick </h4>
              <AthleteSelector gender="female" name="fourthFemalePick" />
            </div>
            <div>
              <h4> Fifth Pick </h4>
              <AthleteSelector gender="female" name="fifthFemalePick" />
            </div>
          </section>
        </div>
        <button> Create Team </button>
      </form>
    </main>
  );
}

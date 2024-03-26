import NameRotator from "@/components/name-rotator";
import { getRandomAthlete } from "@/lib/actions/get-random-athlete";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-center">
          And the first pick in the 2024 Lifetime Grand Prix Draft is...
          <br />
          <NameRotator action={getRandomAthlete} />
        </h1>
      </div>
    </main>
  );
}

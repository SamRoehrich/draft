import Link from "next/link";

export default function TeamsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <nav className="flex justify-center">
        <Link href="/teams/create"> Create a new team </Link>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Teams</h1>
      </main>
    </main>
  );
}

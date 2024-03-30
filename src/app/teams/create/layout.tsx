import { Button } from "@/components/button";
import Link from "next/link";
import { ReactNode } from "react";

export default function CreateTeamLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="flex min-h-screen p-8 text-center">
      <aside className="flex flex-col ">
        <h1 className="text-xl font-semibold"> Create your teams </h1>
        <Link href="/teams/create/all-star">
          <Button> All Star Team </Button>
        </Link>
        <Link href="/teams/create/most-improved">
          <Button> Best of the Rest </Button>
        </Link>
        <Link href="/teams/create/salary-cap">
          <Button> Salary Cap </Button>
        </Link>
        <Link href="/teams/create/freshman">
          <Button> Freshman </Button>
        </Link>
      </aside>
      {children}
    </main>
  );
}

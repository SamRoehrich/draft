import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignOutButton from "@/components/sign-out-button";
import { TeamsForUser } from "@/components/teams-for-user";

export default async function ProfilePage() {
  const session = await getServerSession();

  if (!session?.user?.name) {
    redirect("/api/auth/signin");
  }
  return (
    <main className="flex min-h-screen flex-col">
      <h1> Profile Page </h1>
      <TeamsForUser />
      <SignOutButton />
    </main>
  );
}

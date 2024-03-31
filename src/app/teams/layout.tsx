import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teams",
  description: "Draft teams for the 2024 season",
};

export default function TeamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <> {children} </>;
}

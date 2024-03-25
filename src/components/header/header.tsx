import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-8 items-center justify-center space-x-10 p-4">
      <Link href="/"> Home </Link>
      <Link href="/teams"> Teams </Link>
      <Link href="/leagues"> Leagues </Link>
      <Link href="/profile"> My Profile </Link>
    </header>
  );
}

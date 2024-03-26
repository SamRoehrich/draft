"use client";

import { clearAuthCokies } from "@/lib/actions/clear-auth-cookies";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={async () => {
        await clearAuthCokies();
        signOut();
      }}
    >
      {" "}
      Sign out{" "}
    </button>
  );
}

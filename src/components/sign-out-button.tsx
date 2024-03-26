"use client";

import { signOutAndClearCookie } from "@/lib/actions/sign-out";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={async () => {
        await signOutAndClearCookie();
        signOut();
      }}
    >
      {" "}
      Sign out{" "}
    </button>
  );
}

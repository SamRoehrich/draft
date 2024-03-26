"use server";

import { cookies } from "next/headers";

export async function signOutAndClearCookie() {
  cookies().delete("_uid");
}

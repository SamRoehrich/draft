"use server";

import { cookies } from "next/headers";

export async function clearAuthCokies() {
  cookies().delete("_uid");
}

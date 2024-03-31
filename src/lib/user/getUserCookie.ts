import { cookies } from "next/headers";
import { UID } from "../types/user";

export function getUserCookie(): UID {
  return JSON.parse(cookies().get("_uid")?.value || "");
}

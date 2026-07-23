import { redirect } from "next/navigation";

/** Legacy path — Home now lives at `/`. */
export default function LegacyHomeRedirect() {
  redirect("/");
}

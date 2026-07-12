import { redirect } from "next/navigation";

// Halaman ini telah digabung ke /info
export default function TentangGkpiRedirect() {
  redirect("/info");
}

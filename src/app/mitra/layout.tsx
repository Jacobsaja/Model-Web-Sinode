import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Judul",
  description:
    "Deskripsi",
};

export default function MitraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

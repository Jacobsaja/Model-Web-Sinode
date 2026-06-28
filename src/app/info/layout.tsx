import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Judul",
  description:
    "Deskripsi",
  openGraph: {
    title: "Judul",
    description:
      "Deskripsi",
    url: "url",
    siteName: "Judul",
    images: [
      {
        url: "url",
        width: 972,
        height: 413,
        alt: "Judul",
      },
    ],
    locale: "id_ID",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Judul",
    description:
      "Deskripsi",
  },
};

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

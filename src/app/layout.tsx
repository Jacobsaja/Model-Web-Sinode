import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nama | Beranda",
  description: "Deskripsi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col selection:bg-primary/20 selection:text-primary-dark font-sans">
        {children}
      </body>
    </html>
  );
}

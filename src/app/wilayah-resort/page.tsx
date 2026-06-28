import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import ResortHero from "@/components/ResortHero";
import Footer from "@/components/Footer";
import MapExplorer from "@/components/wilayah/MapExplorer";
import { jemaatData } from "@/data/jemaat";

export const metadata: Metadata = {
  title: "judul",
  description:
    "deskripsi",
  openGraph: {
    title: "judul",
    description:
      "deskripsi",
  },
};

export default function WilayahResortPage() {
  const total = jemaatData.length;

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero */}
      <ResortHero />

      {/* Stats bar */}
      <div className="bg-surface/80 border-b border-border backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center gap-8 overflow-x-auto">
          <StatChip value={total} label="Label" />
          <div className="w-px h-6 bg-border shrink-0" />
          <StatChip value="N+" label="Label" />
          <div className="w-px h-6 bg-border shrink-0" />
          <StatChip value="N" label="Label" />
          <div className="w-px h-6 bg-border shrink-0" />
          <p className="text-xs text-text-secondary/60 shrink-0 italic">
            Keterangan
          </p>
        </div>
      </div>

      {/* Map Explorer — full viewport height */}
      <Suspense fallback={<MapExplorerFallback />}>
        <MapExplorer />
      </Suspense>

      <Footer />
    </main>
  );
}

function MapExplorerFallback() {
  return (
    <section
      id="cari-jemaat"
      className="flex items-center justify-center bg-background/80"
      style={{ height: "calc(100vh - 72px)", minHeight: 600 }}
    >
      <div className="text-center space-y-3">
        <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm text-text-secondary">Memuat peta...</p>
      </div>
    </section>
  );
}

function StatChip({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="shrink-0 flex items-baseline gap-2">
      <span className="text-xl font-bold text-accent">{value}</span>
      <span className="text-xs text-text-secondary">{label}</span>
    </div>
  );
}

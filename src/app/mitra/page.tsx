"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/assets";
import { ArrowRight, Globe, HandHeart, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { mitraDetails } from "@/data/mitraDetails";

// ─── Data ────────────────────────────────────────────────────────────────────

const mitraInternasional = [
  { name: "Mitra 1", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
  { name: "Mitra 2", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
  { name: "Mitra 3", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
  { name: "Mitra 4", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
  { name: "Mitra 5", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
  { name: "Mitra 6", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
  { name: "Mitra 7", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
  { name: "Mitra 8", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
  { name: "Mitra 9", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
  { name: "Mitra 10", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
  { name: "Mitra 11", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
  { name: "Mitra 12", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
];

const mitraNasional = [
  { name: "Mitra 13", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
  { name: "Mitra 14", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
  { name: "Mitra 15", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
  { name: "Mitra 16", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
  { name: "Mitra 17", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
  { name: "Mitra 18", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
  { name: "Mitra 19", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
  { name: "Mitra 20", logo: "/mitra/placeholder.png", region: "Lokasi", description: "Deskripsi", url: "url" },
];

// ─── Official Websites ────────────────────────────────────────────────────────

const officialWebsites: Record<string, string> = {
  "Nama": "url",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MitraPage() {
  const [selectedMitra, setSelectedMitra] = useState<typeof mitraInternasional[number] | null>(null);

  useEffect(() => {
    if (selectedMitra) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedMitra]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMitra(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 md:pb-24 md:pt-40">
        <div className="absolute inset-0">
          <Image src={assets.heroBg} alt="Judul" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/35" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="max-w-3xl space-y-7">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Mitra</p>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                Judul <span className="text-accent">Judul.</span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                Deskripsi
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-2">
                {[
                  { value: "Informasi", label: "Deskripsi" },
                  { value: "Informasi", label: "Deskripsi" },
                  { value: "Informasi", label: "Deskripsi" },
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-3xl font-bold text-accent">{stat.value}</span>
                    <span className="text-sm text-text-secondary">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Mitra Internasional ── */}
      <Section id="internasional" className="!py-14 md:!py-20">
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <Globe size={20} className="text-accent" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Mitra Internasional</p>
              </div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Judul</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-text-secondary">Deskripsi</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mitraInternasional.map((mitra, i) => (
            <ScrollReveal key={i}>
              <MitraCard mitra={mitra} index={i} onOpenDetails={() => setSelectedMitra(mitra)} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ── Mitra Nasional ── */}
      <section className="border-y border-border/60 bg-surface/20 px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <HandHeart size={20} className="text-accent" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Mitra Nasional</p>
                </div>
                <h2 className="text-3xl font-bold text-white md:text-4xl">Judul</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-text-secondary">Deskripsi</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mitraNasional.map((mitra, i) => (
              <ScrollReveal key={i}>
                <MitraCard mitra={mitra} index={i} onOpenDetails={() => setSelectedMitra(mitra)} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <div className="rounded-[2rem] border border-border/70 bg-surface/55 p-10 shadow-2xl shadow-black/15 md:p-14">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Ingin bermitra dengan Kami?</p>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Judul</h2>
              <p className="mx-auto mt-5 max-w-xl text-text-secondary leading-relaxed">Deskripsi</p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#kontak"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-colors hover:bg-primary-dark"
                >
                  Hubungi
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium text-text-secondary transition-all hover:border-accent/30 hover:text-white"
                >
                  Beranda
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedMitra && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMitra(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 25 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative z-10 flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-surface/95 shadow-2xl backdrop-blur-xl"
            >
              {/* Modal Header */}
              <div className="relative flex items-center justify-between border-b border-border/40 px-6 py-5 md:px-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <Globe size={20} className="text-accent" />
                  </div>
                  <div>
                    <span className="inline-block rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent">
                      {selectedMitra.region}
                    </span>
                    <h2 className="mt-0.5 text-lg font-bold text-white md:text-xl">Nama</h2>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedMitra(null)}
                  className="rounded-full p-2 text-text-secondary hover:bg-white/5 hover:text-white transition-colors duration-200"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-border/40">
                  <div className="flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl border border-border/50 bg-background/60 p-4">
                    <div className="relative h-16 w-full">
                      <Image src={selectedMitra.logo} alt={selectedMitra.name} fill sizes="160px" className="object-contain object-center" />
                    </div>
                  </div>
                  <div className="text-center sm:text-left space-y-2">
                    <h3 className="text-xl font-bold text-white leading-tight">{selectedMitra.name}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{selectedMitra.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-accent">Detail</h4>
                  {mitraDetails[selectedMitra.name] ? (
                    <div
                      className="space-y-4 text-text-secondary text-sm leading-relaxed
                        [&>p]:leading-relaxed [&>p]:text-text-secondary/90
                        [&>h1]:text-white [&>h1]:text-xl [&>h1]:font-bold [&>h1]:mt-6 [&>h1]:mb-2
                        [&>h2]:text-white [&>h2]:text-lg [&>h2]:font-bold [&>h2]:mt-6 [&>h2]:mb-2
                        [&>h3]:text-white [&>h3]:text-md [&>h3]:font-semibold [&>h3]:mt-4 [&>h3]:mb-2
                        [&_a]:text-accent [&_a]:underline [&_a]:font-medium [&_a]:hover:text-accent/80 [&_a]:transition-colors
                        [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1
                        [&_li]:text-text-secondary
                        [&_strong]:text-white [&_strong]:font-semibold
                        [&_span]:inline"
                      dangerouslySetInnerHTML={{ __html: mitraDetails[selectedMitra.name] || "" }}
                    />
                  ) : (
                    <div className="rounded-2xl bg-white/5 border border-white/5 p-5 text-sm text-text-secondary/80 leading-relaxed italic">
                      Deskripsi
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/40 px-6 py-5 md:px-8 bg-surface-light/30">
                {officialWebsites[selectedMitra.name] ? (
                  <a
                    href={officialWebsites[selectedMitra.name]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-accent px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-accent/15 hover:bg-accent/90 transition-all duration-200"
                  >
                    <Globe size={14} />
                    Judul
                  </a>
                ) : (
                  <span className="text-xs text-text-secondary/60 italic">Kunjungi</span>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedMitra(null)}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-border px-6 py-2.5 text-xs font-semibold text-text-secondary hover:border-white/20 hover:text-white transition-all duration-200"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

// ─── MitraCard Component ──────────────────────────────────────────────────────

function MitraCard({
  mitra,
  index,
  onOpenDetails,
}: {
  mitra: { name: string; logo: string; region: string; description: string; url: string };
  index: number;
  onOpenDetails: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpenDetails}
      id={`mitra-card-${index}`}
      className="group flex h-full w-full flex-col text-left rounded-3xl border border-border/70 bg-surface/55 p-6 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-accent/5 focus:outline-none focus:ring-2 focus:ring-accent/50"
    >
      {/* Logo */}
      <div className="mb-5 flex h-20 w-full items-center justify-center rounded-2xl border border-border/50 bg-background/60 p-4">
        <div className="relative h-12 w-full">
          <Image src={mitra.logo} alt={mitra.name} fill sizes="160px" className="object-contain object-center" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3">
        <span className="inline-block w-fit rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent">
          {mitra.region}
        </span>
        <h3 className="text-base font-bold leading-snug text-white group-hover:text-accent transition-colors duration-200">
          {mitra.name}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-text-secondary line-clamp-3">
          {mitra.description}
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Judul
          <ArrowRight size={12} />
        </div>
      </div>
    </button>
  );
}

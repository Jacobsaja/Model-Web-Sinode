"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/assets";

const slides = [
  {
    id: 1,
    type: "identity",
    title: "Nama",
    subtitle: "Teks",
    // We use the successfully generated Identity image
    image: assets.slide1,
  },
  {
    id: 2,
    type: "verse",
    verse: "Isi",
    reference: "ayat",
    cta: "Fitur",
    href: "#jadwal",
    image: assets.slide2, // Falls back to hero-bg if missing in public/
  },
  {
    id: 3,
    type: "verse",
    verse: "Isi",
    reference: "ayat",
    cta: "Fitur",
    href: "#renungan",
    image: assets.slide3,
  },
  {
    id: 4,
    type: "verse",
    verse: "Isi",
    reference: "ayat",
    cta: "Fitur",
    href: "#kontak",
    image: assets.slide4,
  },
  {
    id: 5,
    type: "verse",
    verse: "Isi",
    reference: "ayat",
    cta: "Fitur",
    href: "#publikasi",
    image: assets.slide3, // Reusing Bible image
  },
  {
    id: 6,
    type: "verse",
    verse: "Isi",
    reference: "ayat",
    cta: "Fitur",
    href: "#kidung-pujian",
    image: assets.slide2, // Reusing Worship/Singing image
  },
  {
    id: 7,
    type: "verse",
    verse: "Isi",
    reference: "ayat",
    cta: "Fitur",
    href: "#alkitab-online",
    image: assets.slide3, // Menggunakan gambar Alkitab
  },
  {
    id: 8,
    type: "verse",
    verse: "Isi",
    reference: "ayat",
    cta: "Fitur",
    href: "/login",
    image: assets.slide4, // Reusing Community image
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Slow auto-play (10 seconds) for calm pacing
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-[#0a111a]">
      {/* ── Slides ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
            >
              {/* Background Image with slight scale animation when active */}
              <div className="absolute inset-0 w-full h-full">
                <div
                  className={`w-full h-full transition-transform duration-[12000ms] ease-out ${isActive ? "scale-105" : "scale-100"
                    }`}
                >
                  <Image
                    // Use slide image if exists, fallback to heroBg for missing placeholders
                    src={slide.image || assets.heroBg}
                    alt="nama Background"
                    fill
                    className="object-cover opacity-80"
                    priority={index === 0}
                    onError={(e) => {
                      // Fallback if the image isn't generated yet
                      (e.target as HTMLImageElement).srcset = assets.heroBg;
                    }}
                  />
                </div>

                {/* Soft dark blue overlay for contrast and spiritual calmness */}
                <div className="absolute inset-0 bg-[#0F1E2E]/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F1E2E]/50 via-transparent to-[#0F1E2E]" />
              </div>

              {/* Content Container */}
              <div className={`relative max-w-4xl mx-auto flex flex-col items-center px-6 text-center transition-all duration-1000 delay-300 transform ${isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                {slide.type === "identity" ? (
                  <>
                    <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8 opacity-90">
                      <Image
                        src={assets.logo}
                        alt="Logo nama"
                        fill
                        sizes="(max-width: 768px) 96px, 128px"
                        className="object-contain drop-shadow-2xl"
                        priority
                        loading="eager"
                      />
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-wide mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-sm md:text-lg text-accent/80 tracking-[0.2em] uppercase">
                      {slide.subtitle}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-2xl md:text-4xl lg:text-5xl font-serif italic text-white leading-relaxed mb-8 drop-shadow-lg">
                      &quot;{slide.verse}&quot;
                    </p>
                    <p className="text-sm md:text-base text-accent font-medium tracking-[0.15em] uppercase mb-12">
                      — {slide.reference}
                    </p>
                    <Link
                      href={slide.href!}
                      className="px-10 py-4 bg-transparent border border-white/30 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-[#0F1E2E] transition-all duration-500 rounded-sm"
                    >
                      {slide.cta}
                    </Link>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Minimal Indicators ── */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="group relative flex items-center justify-center p-2"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-0.5 transition-all duration-500 ${current === index
                ? "w-8 bg-accent"
                : "w-4 bg-white/20 group-hover:bg-white/50"
                }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

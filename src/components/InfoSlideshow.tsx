"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dummy data for slideshow
const slides = [
  {
    id: 1,
    title: "Persiapan Perayaan Pentakosta 2026",
    description: "Mari bergabung dalam rangkaian kegiatan menyambut hari Pentakosta di lingkungan GKPI dengan tema 'Kuasa Roh Kudus dalam Pelayanan'.",
    image: "/hero-bg.png", // Using existing placeholder
  },
  {
    id: 2,
    title: "Pelatihan Kepemimpinan Pemuda GKPI",
    description: "Pendaftaran untuk pelatihan kepemimpinan tingkat wilayah bagi pemuda-pemudi GKPI kini telah resmi dibuka secara daring.",
    image: "/hero-bg.png",
  },
  {
    id: 3,
    title: "Update Renovasi Kantor Sinode",
    description: "Progres renovasi tahap kedua kantor Sinode yang berlokasi di Pematang Siantar telah mencapai 70% penyelesaian.",
    image: "/hero-bg.png",
  },
];

export default function InfoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden bg-surface/50 border border-border shadow-2xl">
      {/* Container for aspect ratio & alignment */}
      <div className="relative flex flex-col md:flex-row min-h-[400px] md:min-h-[450px]">
        
        {/* All slides rendered but visually toggled via opacity */}
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          
          return (
            <div 
              key={slide.id}
              className={`absolute inset-0 flex flex-col md:flex-row transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Image Section - Takes 50% width on desktop */}
              <div className="relative w-full md:w-1/2 h-[250px] md:h-full shrink-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Subtle dark gradient overlay to blend edge on desktop if needed */}
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/80 via-transparent to-transparent md:from-transparent md:via-background/10 md:to-background/80" />
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-background md:bg-transparent">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-sans font-bold text-text-primary leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-text-secondary text-base md:text-lg line-clamp-2 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="pt-4">
                    <Link
                      href="#"
                      className="inline-block px-6 py-3 rounded-full bg-primary text-white text-sm font-bold shadow-lg hover:bg-primary-dark transition-all duration-300"
                    >
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation Controls (Arrows) */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/30 hover:bg-background/80 backdrop-blur border border-white/10 flex items-center justify-center text-white transition-all hidden md:flex"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/30 hover:bg-background/80 backdrop-blur border border-white/10 flex items-center justify-center text-white transition-all hidden md:flex"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Navigation Controls (Dots) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? "w-8 h-2 bg-accent" 
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import { User } from "lucide-react";
import Image from "next/image";
import { assets } from "@/lib/assets";

// ─── Data ────────────────────────────────────────────────────────────────────

const pimpinanSinode = {
  leaders: [
    { name: "Pdt. Dr Humala Lumbantobing M.Th", role: "Bishop" },
    { name: "Pdt. Parsaoran Sinaga M.Min, M.Th", role: "Sekjen" },
  ],
  departments: [
    { name: "Pdt. Dr. Jhon P.E Simorangkir M.Th", role: "Departemen Apostolat" },
    { name: "Pdt. Dr Irvan Hutasoit M.Th", role: "Departemen Pastorat" },
    { name: "Pdt. Lucia Lumbantobing M.Th", role: "Departemen Diakonat" },
    { name: "Pdt. Jontra M Purba M.Th", role: "Departemen Umum/ Organisasi" },
    { name: "Pdt. Martin Pangihutan Hutabarat S.Th, M.M", role: "Departemen Administrasi dan Informasi Komunikasi" },
    { name: "Lasro Nainggolan S.E M.Si", role: "Departemen Keuangan" },
  ]
};

const majelisSinode = [
  {
    komisi: "Komisi 1",
    ketua: { name: "Pdt. Baha Pasaribu, M.Th", role: "Ketua" },
    sekretaris: { name: "dr. Irwan Supriadi Hutapea", role: "Sekretaris" },
    anggota: [
      { name: "Pnt. Jekson Lumbantobing, S.Th" },
      { name: "Rosmery R. Sihombing" },
      { name: "Josua Tambun, S.Si, S.Pd" },
      { name: "Pdt. Noverik G.L. Tambunan , M.Th" },
      { name: "Pdt. Samuel Aritonang, S.Si" },
      { name: "Pdt. Paulus Silitonga, S.Th, M.A" }
    ]
  },
  {
    komisi: "Komisi 2",
    ketua: { name: "John Posma Lumbantobing", role: "Ketua" },
    sekretaris: { name: "Giftcan Andaredvan Sirait, S.H", role: "Sekretaris" },
    anggota: [
      { name: "Marnix Sahata Hutabarat, BBA" },
      { name: "Harris Silalahi, S.Si" },
      { name: "Ir. Sutan G. Manalu" },
      { name: "Prof. Dr. Marihot Manullang" },
      { name: "Pnt. Dr. Jonner Lumban Gaol, SE, M.Si." },
      { name: "Pdt. Anthony M.H. Lumbantobing, S.Th" },
      { name: "Pnt. David SIanipar" }
    ]
  },
  {
    komisi: "Komisi 3",
    ketua: { name: "Pnt. Jansen Sitohang, S.E", role: "Ketua" },
    sekretaris: { name: "Pnt. Evi Sartika Situmeang, SE. Ak.", role: "Sekretaris" },
    anggota: [
      { name: "Riris Rohita Simamora, S.Pd. MAP" },
      { name: "Legayanti Situmorang, SE" },
      { name: "Ir. Donald P. Lumban Tobing" },
      { name: "Pnt. Miduk Situmorang" },
      { name: "Pnt. Lasron Atas Situmorang" },
      { name: "Daniel C. Manik" },
      { name: "Pdt. Radot Leopard Gultom, S.Th, M.A" }
    ]
  }
];

const bprp = {
  ketua: { name: "Pdt. Polin Sihombing, S.Th, MM", role: "Ketua" },
  sekretaris: { name: "Pdt. Wilfried Ernanda Hutapea, S.Th", role: "Sekretaris" },
  anggota: [
    { name: "Pdt. Samuel Parulian Reinhard Aritonang, S.Si" },
    { name: "Pdt. Simon A.K. Manurung, S.Th., M.Psi." },
    { name: "Pdt. Linti Dongoran, M.Th" }
  ]
};

const phbk = {
  ketua: { name: "Pnt. Hasudungan Turnip, SE.Ak, MM", role: "Ketua" },
  sekretaris: { name: "Henny Noverita Tamba, SE, MM", role: "Sekretaris" },
  anggota: [
    { name: "Dr. Dominggo Pasaribu, ST, MM, MT" },
    { name: "Pnt. Asran Iskandar Pane, SE.Ak" },
    { name: "Fritz Benawan Hutauruk, SE" }
  ]
};

const koordinatorWilayah = [
  { name: "Pdt. Waldemar S. Simanjuntak, M.Th", role: "Wilayah 1", desc: "Medan I - Langkat" },
  { name: "Pdt. Pardi M Silalahi, M.Th", role: "Wilayah 2", desc: "Medan II - Deli Serdang" },
  { name: "Pdt. Ebed Nainggolan, S.Th., MM", role: "Wilayah 3", desc: "Siantar - Simalungun - Tebing - Sergai" },
  { name: "Pdt. Bonarmanjaya Sihotang, S.Th", role: "Wilayah 4", desc: "Dairi - Tanah Karo - Alas - Pakpak" },
  { name: "Pdt. Blesful A. Hutasoit, S.Th", role: "Wilayah 5", desc: "Asahan - Labuhan Batu" },
  { name: "Pdt. Andar M. Lumbantobing, M.Th", role: "Wilayah 6", desc: "Silindung - Pahae - Tapteng - Tapsel" },
  { name: "Pdt. Edy Leonard Hutahaean, S.Th", role: "Wilayah 7", desc: "Humbang - Samosir - Toba" },
  { name: "Pdt. Gibson Sibuea, S.Th", role: "Wilayah 8", desc: "Sumatera Bagian Selatan" },
  { name: "Pdt. Ratna Dewi Lubis, S.Th", role: "Wilayah 9", desc: "Riau" },
  { name: "Pdt. Aprida Marito Hutapea, S.Th, MM", role: "Wilayah 10", desc: "Kepulauan Riau" },
  { name: "Pdt. Hasintongan Gurning, S.Th., M.Min", role: "Wilayah 11", desc: "Jabodetabek - Jawa - Kalimantan" }
];

const tabs = [
  { id: "pimpinan", label: "Pimpinan Sinode" },
  { id: "majelis", label: "Majelis Sinode" },
  { id: "bprp", label: "BPRP" },
  { id: "phbk", label: "PHBK" },
  { id: "wilayah", label: "Koor. Wilayah" },
];

// ─── Components ─────────────────────────────────────────────────────────────

function ProfileCard({ 
  name, 
  role, 
  desc, 
  variant = "standard" 
}: { 
  name: string; 
  role?: string; 
  desc?: string; 
  variant?: "leader" | "standard" | "compact" 
}) {
  const isLeader = variant === "leader";
  const isCompact = variant === "compact";

  return (
    <div className={`flex flex-col items-center text-center group transition-all duration-300 hover:scale-105 ${isCompact ? 'opacity-85 hover:opacity-100' : ''}`}>
      <div 
        className={`relative w-full aspect-square bg-surface/50 border border-border rounded-3xl overflow-hidden shadow-lg transition-colors duration-300 group-hover:border-accent/40 flex items-center justify-center
        ${isLeader ? 'max-w-[280px] md:max-w-[320px]' : (isCompact ? 'max-w-[140px]' : 'max-w-[200px]')}`}
      >
        <User size={isLeader ? 80 : (isCompact ? 32 : 48)} className="text-text-secondary/20" strokeWidth={1.5} />
      </div>
      
      <div className={`mt-5 space-y-1 ${isLeader ? 'max-w-[280px] md:max-w-[320px]' : (isCompact ? 'max-w-[140px]' : 'max-w-[200px]')}`}>
        {role && (
          <p className={`font-bold text-accent uppercase tracking-wider ${isLeader ? 'text-sm' : 'text-[10px]'}`}>
            {role}
          </p>
        )}
        <h3 className={`font-bold text-white leading-tight ${isLeader ? 'text-2xl md:text-3xl' : (isCompact ? 'text-sm' : 'text-lg')}`}>
          {name}
        </h3>
        {desc && (
          <p className="text-xs text-text-secondary mt-2 leading-relaxed">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PengurusPage() {
  const [activeTab, setActiveTab] = useState("pimpinan");
  const navRef = useRef<HTMLUListElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  // ScrollSpy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for sticky header

      for (const tab of [...tabs].reverse()) {
        const element = document.getElementById(tab.id);
        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          if (elementTop <= scrollPosition) {
            setActiveTab(tab.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const activeButton = buttonRefs.current[activeTab];
      const nav = navRef.current;

      if (!activeButton || !nav) return;

      setIndicatorStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTab]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // sticky header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={assets.heroBg}
            alt="GKPI Background"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 text-center space-y-4">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
              Struktur Organisasi
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight mt-3">
              Kepengurusan GKPI
            </h1>
            <p className="text-base md:text-lg text-text-secondary mt-5 max-w-2xl mx-auto leading-relaxed">
              Daftar susunan pimpinan, majelis, komisi, dan badan pengurus yang melayani di Gereja Kristen Protestan Indonesia.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sticky Section Navigation */}
      <div className="sticky top-[60px] z-40 bg-background/90 backdrop-blur-md border-y border-border/50 shadow-lg py-1">
        <div className="max-w-7xl mx-auto px-2 sm:px-8 overflow-x-auto no-scrollbar">
          <ul
            ref={navRef}
            className="relative flex items-center w-max mx-auto sm:w-full sm:justify-center px-4"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <li key={tab.id}>
                  <button
                    ref={(element) => {
                      buttonRefs.current[tab.id] = element;
                    }}
                    onClick={() => scrollToSection(tab.id)}
                    className={`relative px-5 py-4 text-sm font-bold whitespace-nowrap transition-colors duration-300 ${
                      isActive ? "text-accent" : "text-text-secondary hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                </li>
              );
            })}
            <span
              className="absolute bottom-0 h-0.5 rounded-t-full bg-accent transition-all duration-500 ease-out"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
            />
          </ul>
        </div>
      </div>

      <div className="pb-24">
        {/* ── 1. Pimpinan Sinode ── */}
        <Section id="pimpinan" className="!py-16 md:!py-24">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white">Pimpinan Sinode</h2>
            <div className="w-16 h-1 mx-auto mt-6 rounded-full bg-primary/40" />
          </div>
          
          <ScrollReveal>
            {/* Top Leaders */}
            <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-20 mb-20 md:mb-28">
              {pimpinanSinode.leaders.map((leader, i) => (
                <ProfileCard key={i} name={leader.name} role={leader.role} variant="leader" />
              ))}
            </div>

            {/* Departments */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 max-w-5xl mx-auto">
              {pimpinanSinode.departments.map((dept, i) => (
                <ProfileCard key={i} name={dept.name} role={dept.role} />
              ))}
            </div>
          </ScrollReveal>
        </Section>

        {/* ── 2. Majelis Sinode ── */}
        <section id="majelis" className="py-16 md:py-24 bg-surface/30 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-white">Majelis Sinode</h2>
              <div className="w-16 h-1 mx-auto mt-6 rounded-full bg-primary/40" />
            </div>

            <div className="space-y-20 md:space-y-28">
              {majelisSinode.map((komisi, i) => (
                <ScrollReveal key={i}>
                  <div className="bg-background/50 border border-border/60 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
                    <h3 className="text-2xl font-bold text-center text-white mb-12">{komisi.komisi}</h3>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 mb-12">
                      <ProfileCard name={komisi.ketua.name} role={komisi.ketua.role} />
                      <ProfileCard name={komisi.sekretaris.name} role={komisi.sekretaris.role} />
                    </div>

                    <div className="pt-10 border-t border-border/50">
                      <p className="text-center text-xs font-bold uppercase tracking-widest text-text-secondary mb-8">Anggota</p>
                      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                        {komisi.anggota.map((anggota, j) => (
                          <ProfileCard key={j} name={anggota.name} variant="compact" />
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. BPRP ── */}
        <Section id="bprp" className="!py-16 md:!py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <ScrollReveal>
              <div className="text-center mb-16 md:mb-20">
                <h2 className="text-3xl md:text-4xl font-sans font-bold text-white">Badan Pekerja Rapat Pendeta</h2>
                <div className="w-16 h-1 mx-auto mt-6 rounded-full bg-primary/40" />
              </div>
              
              <div className="bg-background/50 border border-border/60 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
                <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 mb-12">
                  <ProfileCard name={bprp.ketua.name} role={bprp.ketua.role} />
                  <ProfileCard name={bprp.sekretaris.name} role={bprp.sekretaris.role} />
                </div>
                
                <div className="pt-10 border-t border-border/50">
                  <p className="text-center text-xs font-bold uppercase tracking-widest text-text-secondary mb-8">Anggota</p>
                  <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                    {bprp.anggota.map((anggota, i) => (
                      <ProfileCard key={i} name={anggota.name} variant="compact" />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Section>

        {/* ── 4. PHBK ── */}
        <section id="phbk" className="py-16 md:py-24 bg-surface/30 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <ScrollReveal>
              <div className="text-center mb-16 md:mb-20">
                <h2 className="text-3xl md:text-4xl font-sans font-bold text-white">PHBK</h2>
                <div className="w-16 h-1 mx-auto mt-6 rounded-full bg-primary/40" />
              </div>
              
              <div className="bg-background/50 border border-border/60 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
                <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 mb-12">
                  <ProfileCard name={phbk.ketua.name} role={phbk.ketua.role} />
                  <ProfileCard name={phbk.sekretaris.name} role={phbk.sekretaris.role} />
                </div>
                
                <div className="pt-10 border-t border-border/50">
                  <p className="text-center text-xs font-bold uppercase tracking-widest text-text-secondary mb-8">Anggota</p>
                  <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                    {phbk.anggota.map((anggota, i) => (
                      <ProfileCard key={i} name={anggota.name} variant="compact" />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── 5. Koordinator Wilayah ── */}
        <section id="wilayah" className="py-16 md:py-24 bg-surface/30 border-t border-border/50">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-white">Koordinator Wilayah</h2>
              <div className="w-16 h-1 mx-auto mt-6 rounded-full bg-primary/40" />
            </div>

            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                {koordinatorWilayah.map((koor, i) => (
                  <ProfileCard key={i} name={koor.name} role={koor.role} desc={koor.desc} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import {
  ChevronDown,
  BookOpen,
  Eye,
  Heart,
  Users,
  Megaphone,
  HandHeart,
  Church,
  Landmark,
  Star,
  ArrowLeft,
  FileText,
  Music,
  Scale,
  Home,
  ChevronRight,
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Download,
  Building2,
  CalendarDays,
  MapPin,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const quickFacts = [
  {
    label: "Berdiri",
    value: "Judul",
    icon: CalendarDays,
  },
  {
    label: "Pusat",
    value: "Judul",
    icon: MapPin,
  },
  {
    label: "Wilayah",
    value: "Judul",
    icon: Landmark,
  },
];

const faithPoints = [
  "Pokok 1",
  "Pokok 2",
  "Pokok 3",
  "Pokok 4",
];

const institutions = [
  "Lembaga 1",
  "Lembaga 2",
  "Lembaga 3",
  "Lembaga 4",
  "Lembaga 5",
  "Lembaga 6",
  "Lembaga 7",
  "Lembaga 8",
];

const regions = [
  "Wilayah 1",
  "Wilayah 2",
  "Wilayah 3",
  "Wilayah 4",
  "Wilayah 5",
  "Wilayah 6",
  "Wilayah 7",
  "Wilayah 8",
  "Wilayah 9",
  "Wilayah 10",
  "Wilayah 11",
  "Wilayah 12",
];

const sejarahTimeline = [
  {
    tahun: "Tahun",
    judul: "Judul",
    isi: "Isi",
  },
  {
    tahun: "Tahun",
    judul: "Judul",
    isi: "Isi",
  },
  {
    tahun: "Tahun",
    judul: "Judul",
    isi: "Isi",
  },
  {
    tahun: "Tahun",
    judul: "Judul",
    isi: "Isi",
  },
  {
    tahun: "Tahun",
    judul: "Judul",
    isi: "Isi",
  },
  {
    tahun: "Tahun",
    judul: "Judul",
    isi: "Isi",
  },
];

const misiCards = [
  {
    icon: Users,
    nama: "Visi Misi 1",
    label: "Judul",
    deskripsi:
      "deskripsi",
    warna: "from-blue-500/20 to-cyan-500/20",
    aksen: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  {
    icon: Megaphone,
    nama: "Visi Misi 2",
    label: "Judul",
    deskripsi:
      "deskripsi",
    warna: "from-amber-500/20 to-yellow-500/20",
    aksen: "text-amber-400",
    border: "border-amber-500/20",
  },
  {
    icon: HandHeart,
    nama: "Visi Misi 3",
    label: "Judul",
    deskripsi:
      "deskripsi",
    warna: "from-rose-500/20 to-pink-500/20",
    aksen: "text-rose-400",
    border: "border-rose-500/20",
  },
  {
    icon: Church,
    nama: "Visi Misi 4",
    label: "Judul",
    deskripsi:
      "deskripsi",
    warna: "from-purple-500/20 to-violet-500/20",
    aksen: "text-purple-400",
    border: "border-purple-500/20",
  },
  {
    icon: Landmark,
    nama: "Visi Misi 5",
    label: "Judul",
    deskripsi:
      "deskripsi",
    warna: "from-emerald-500/20 to-green-500/20",
    aksen: "text-emerald-400",
    border: "border-emerald-500/20",
  },
];

const dokumenProfile = [
  {
    icon: BookOpen,
    judul: "Dokumen 1",
    deskripsi: "deskripsi",
    tag: "Jenis",
  },
  {
    icon: Eye,
    judul: "Dokumen 2",
    deskripsi: "deskripsi",
    tag: "Jenis",
  },
  {
    icon: Music,
    judul: "Dokumen 3",
    deskripsi: "deskripsi",
    tag: "Jenis",
  },
  {
    icon: FileText,
    judul: "Dokumen 4",
    deskripsi: "deskripsi",
    tag: "Jenis",
  },
  {
    icon: Scale,
    judul: "Dokumen 5",
    deskripsi: "deskripsi",
    tag: "Jenis",
  },
  {
    icon: Home,
    judul: "Dokumen 6",
    deskripsi: "deskripsi",
    tag: "Jenis",
  },
];

const dokumenDetail = [
  {
    id: "sejarah",
    judul: "Judul",
    tag: "tag",
    sections: [
      {
        title: "Judul",
        content: `deskripsi`
      },
      {
        title: "Judul",
        content: `deskripsi`
      },
      {
        title: "Judul",
        content: `deskripsi`
      }
    ]
  },
  {
    id: "visi-misi",
    judul: "Judul",
    tag: "tag",
    sections: [
      {
        title: "Judul",
        content: `deskripsi`
      },
      {
        title: "Judul",
        content: `deskripsi`
      },
      {
        title: "Judul",
        content: `deskripsi`
      },
      {
        title: "Judul",
        content: `deskripsi`
      }
    ]
  },
  {
    id: "mars-nama",
    judul: "Judul",
    tag: "tag",
    isMars: true,
    lyrics: `deskripsi`
  },
  {
    id: "tata-gereja",
    judul: "Judul",
    tag: "tag",
    isArticles: true,
    mukadimah: `deskripsi`,
    articles: [
      {
        pasal: "Judul",
        judul: "Judul",
        isi: "deskripsi"
      },
      {
        pasal: "Judul",
        judul: "Judul",
        isi: "deskripsi"
      },
      {
        pasal: "Judul",
        judul: "Judul",
        isi: "deskripsi"
      },
      {
        pasal: "Judul",
        judul: "Judul",
        isi: "deskripsi"
      },
      {
        pasal: "Judul",
        judul: "Judul",
        isi: "deskripsi"
      },
      {
        pasal: "Judul",
        judul: "Judul",
        isi: "deskripsi"
      },
      {
        pasal: "Judul",
        judul: "Judul",
        isi: "deskripsi"
      },
      {
        pasal: "Judul",
        judul: "Judul",
        isi: "deskripsi"
      },
      {
        pasal: "Judul",
        judul: "Judul",
        isi: "deskripsi"
      },
      {
        pasal: "Judul",
        judul: "Judul",
        isi: "deskripsi"
      },
      {
        pasal: "Judul",
        judul: "Judul",
        isi: "deskripsi"
      },
      {
        pasal: "Judul",
        judul: "Judul",
        isi: "deskripsi"
      },
      {
        pasal: "Judul",
        judul: "Judul",
        isi: "deskripsi"
      },
      {
        pasal: "Judul",
        judul: "Judul",
        isi: "deskripsi"
      },
      {
        pasal: "Judul",
        judul: "Judul",
        isi: "deskripsi"
      },
      {
        pasal: "Judul",
        judul: "Judul",
        isi: "deskripsi"
      }
    ]
  },
  {
    id: "prt",
    judul: "Peraturan Rumah Tangga",
    tag: "Dokumen",
    isPRT: true,
    chapters: [
      {
        bab: "Judul",
        judul: "Judul",
        isi: "deskripsi"
      },
      {
        bab: "Judul",
        judul: "Judul",
        isi: "deskripsi"
      },
      {
        bab: "Judul",
        judul: "Judul",
        isi: "Deskripsi"
      },
      {
        bab: "Judul",
        judul: "Judul",
        isi: "Deskripsi"
      },
      {
        bab: "BAB XIV",
        judul: "Judul",
        isi: "Deskripsi"
      }
    ]
  },
  {
    id: "pengakuan-iman",
    judul: "Judul",
    tag: "Judul",
    isConfession: true,
    pengantar: `Deskripsi`,
    isiConfession: `Deskripsi`,
    points: [
      {
        title: "Judul",
        detail: "Deskripsi"
      },
      {
        title: "Judul",
        detail: "Deskripsi"
      },
      {
        title: "Judul",
        detail: "Deskripsi"
      },
      {
        title: "Judul",
        detail: "Deskripsi"
      },
      {
        title: "Judul",
        detail: "Deskripsi"
      },
      {
        title: "Judul",
        detail: "Deskripsi"
      }
    ]
  }
];

// ─── Accordion Component ──────────────────────────────────────────────────────

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof sejarahTimeline)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative flex gap-6 md:gap-10 group">
      {/* Timeline line */}
      <div className="flex flex-col items-center shrink-0">
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-300 shrink-0
            ${isOpen
              ? "bg-accent border-accent shadow-[0_0_20px_rgba(111,168,220,0.4)]"
              : "bg-surface border-border group-hover:border-accent/50"
            }`}
        >
          <span
            className={`font-serif font-bold text-xs md:text-sm ${isOpen ? "text-background" : "text-accent"
              }`}
          >
            {item.tahun.slice(-2)}
          </span>
        </button>
        {index < sejarahTimeline.length - 1 && (
          <div
            className={`w-0.5 flex-1 mt-2 transition-colors duration-500 ${isOpen ? "bg-accent/30" : "bg-border/50"
              }`}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8 md:pb-10">
        <button
          onClick={onToggle}
          className="w-full text-left"
          aria-expanded={isOpen}
        >
          <div
            className={`flex items-center justify-between p-5 md:p-6 rounded-2xl border transition-all duration-300 cursor-pointer
              ${isOpen
                ? "bg-surface/80 border-accent/30 shadow-lg shadow-accent/5"
                : "bg-surface/40 border-border/60 hover:border-accent/20 hover:bg-surface/60"
              }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full transition-colors duration-300
                  ${isOpen
                    ? "bg-accent/20 text-accent"
                    : "bg-primary/10 text-text-secondary"
                  }`}
              >
                {item.tahun}
              </span>
              <h3
                className={`font-serif text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? "text-text-primary" : "text-text-secondary"
                  }`}
              >
                {item.judul}
              </h3>
            </div>
            <ChevronDown
              size={20}
              className={`shrink-0 text-accent transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                }`}
            />
          </div>
        </button>

        {/* Expandable body */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-5 md:px-6 pt-3 pb-2">
            <p className="text-text-secondary leading-relaxed text-base md:text-lg">
              {item.isi}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InfoPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedDocIndex, setSelectedDocIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  // Scroll lock when modal opens
  useEffect(() => {
    if (selectedDocIndex !== null) {
      document.body.style.overflow = "hidden";
      setActiveTab(0); // reset tab to first section/article
    } else {
      document.body.style.overflow = "";
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedDocIndex]);

  // Audio player state tracking
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => console.log("Audio play error: ", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration || 0;
      setAudioProgress(current);
      setAudioDuration(duration);
    }
  };

  const handleAudioLoaded = () => {
    if (audioRef.current) {
      setAudioDuration(audioRef.current.duration || 0);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setAudioProgress(0);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setAudioProgress(val);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[86vh] items-end overflow-hidden bg-background pb-10 pt-32 md:min-h-[90vh] md:pb-14">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_slide_3.png"
            alt="Alkitab dan dasar iman"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            quality={90}
          />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-primary/45 to-background/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/25 to-background/70" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm text-text-primary/75 transition-colors hover:text-accent"
            >
              <ArrowLeft size={14} />
              Beranda
            </Link>
            <ChevronRight size={14} className="text-text-primary/30" />
            <span className="text-sm font-medium text-accent">
              Profil GKPI
            </span>
          </nav>

          <ScrollReveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-accent drop-shadow-lg">
              Nama
            </p>
            <h1
              className="mb-6 max-w-4xl text-5xl font-bold leading-[1.02] text-white drop-shadow-2xl sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Judul
            </h1>
            <p className="max-w-2xl text-base leading-8 text-text-primary/90 drop-shadow-lg md:text-xl">
              Deskripsi
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-9 flex flex-wrap gap-3">
              {[
                { label: "Sejarah", href: "#sejarah" },
                { label: "Visi & Misi", href: "#visi-misi" },
                { label: "Pokok Iman", href: "#pokok-iman" },
                { label: "Kepemimpinan", href: "#kepemimpinan" },
                { label: "Dokumen", href: "#dokumen" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-primary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </ScrollReveal>

          {/* Quick Facts Row */}
          <ScrollReveal>
            <div className="mt-8 flex flex-wrap gap-4">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-background/35 px-5 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-md"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/30">
                    <fact.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-text-primary/60">
                      {fact.label}
                    </p>
                    <p className="text-sm font-bold text-white">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Stats row */}
          <ScrollReveal>
            <div className="mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { angka: "Informasi", label: "Deskripsi" },
                { angka: "Informasi", label: "Deskripsi" },
                { angka: "Informasi", label: "Deskripsi" },
                { angka: "Informasi", label: "Deskripsi" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-background/35 px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-md"
                >
                  <span
                    className="block text-3xl font-bold text-accent md:text-4xl"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.angka}
                  </span>
                  <span className="mt-1 block text-sm text-text-primary/75">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Sejarah GKPI ─────────────────────────────────────────────────── */}
      <section
        id="sejarah"
        className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28"
      >
        <ScrollReveal>
          <div className="max-w-xl mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
              Sejarah
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Judul
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Deskripsi
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl">
            {sejarahTimeline.map((item, idx) => (
              <AccordionItem
                key={idx}
                item={item}
                index={idx}
                isOpen={openIndex === idx}
                onToggle={() => handleToggle(idx)}
              />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Divider ──────────────────────────────────────────────────────── */}
      <div className="relative h-px max-w-7xl mx-auto px-4">
        <div
          className="h-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #2A3F57 30%, #6FA8DC50 50%, #2A3F57 70%, transparent)",
          }}
        />
      </div>

      {/* ── Visi & Misi ──────────────────────────────────────────────────── */}
      <section
        id="visi-misi"
        className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28"
      >
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
              Visi Misi
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Judul
            </h2>

            {/* Visi Card */}
            <div
              className="relative rounded-3xl p-8 md:p-10 mb-4 overflow-hidden border border-amber-500/20"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(26,58,95,0.6) 100%)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 blur-2xl pointer-events-none"
                style={{ background: "radial-gradient(circle, #D4AF37, transparent)" }}
              />
              <Star
                size={32}
                className="mx-auto mb-4 text-amber-400 opacity-80"
              />
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
                Judul
              </p>
              <blockquote
                className="text-2xl md:text-3xl font-bold text-white leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                &ldquo;Judul&rdquo;
              </blockquote>
            </div>

            <p className="text-text-secondary text-lg leading-relaxed mt-8">
              Deskripsi{" "}
              <strong className="text-text-primary">Judul</strong>:
            </p>
          </div>
        </ScrollReveal>

        {/* Misi Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {misiCards.map((item, idx) => (
            <ScrollReveal key={idx}>
              <article
                className={`relative group rounded-3xl p-7 md:p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden ${item.border}`}
                style={{
                  background: `linear-gradient(135deg, ${item.warna
                    .replace("from-", "")
                    .replace(" to-", ", ")
                    .replace("/20", "33")}, rgba(22,42,64,0.8))`,
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(111,168,220,0.06), transparent 70%)" }} />

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-white/5 border ${item.border}`}
                >
                  <item.icon size={26} className={item.aksen} />
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <h3
                    className="text-xl font-bold text-text-primary"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.nama}
                  </h3>
                  <span className={`text-sm font-medium ${item.aksen}`}>
                    ({item.label})
                  </span>
                </div>
                <p className="text-text-secondary leading-relaxed text-base">
                  {item.deskripsi}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Motto Pelayanan ───────────────────────────────────────────────── */}
      <section
        className="py-16 px-4 md:px-8"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(26,58,95,0.15) 50%, transparent 100%)",
        }}
      >
        <ScrollReveal>
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-accent mb-10">
              Motto
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  num: "01",
                  teks: "Motto 1",
                  icon: Heart,
                },
                {
                  num: "02",
                  teks: "Motto 2",
                  icon: HandHeart,
                },
                {
                  num: "03",
                  teks: "Motto 3",
                  icon: Church,
                },
                {
                  num: "04",
                  teks: "Motto 4",
                  icon: Megaphone,
                },
              ].map((m) => (
                <div
                  key={m.num}
                  className="group flex items-center gap-4 p-6 rounded-2xl border border-border/60 bg-surface/40 hover:border-accent/30 hover:bg-surface/70 transition-all duration-300 min-h-[72px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <m.icon size={18} className="text-accent" />
                  </div>
                  <p className="text-text-primary font-medium leading-tight text-base">
                    {m.teks}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Dokumen & Profil Lengkap ──────────────────────────────────────── */}
      <section
        id="dokumen"
        className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28"
      >
        <ScrollReveal>
          <div className="max-w-xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
              Dokumen
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Judul
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Deskripsi
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dokumenProfile.map((dok, idx) => (
            <ScrollReveal key={idx}>
              <button
                type="button"
                onClick={() => setSelectedDocIndex(idx)}
                className="w-full text-left group flex flex-col gap-5 p-7 rounded-3xl border border-border/60 bg-surface/50 hover:border-accent/30 hover:bg-surface/80 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 min-h-[200px] cursor-pointer"
                style={{ backdropFilter: "blur(12px)" }}
              >
                <div className="flex items-start justify-between w-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-border/60 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-colors">
                    <dok.icon size={22} className="text-accent" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                    {dok.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {dok.judul}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {dok.deskripsi}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-accent text-sm font-semibold mt-auto opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <span>Judul</span>
                  <ChevronRight size={16} />
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Document Details Modal ───────────────────────────────────────── */}
      {selectedDocIndex !== null && (() => {
        const doc = dokumenDetail[selectedDocIndex];
        return (
          <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4 md:p-6 animate-fade-in">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/85 backdrop-blur-lg cursor-pointer"
              onClick={() => setSelectedDocIndex(null)}
            />

            {/* Modal Body */}
            <div
              className="relative flex h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-accent/20 shadow-2xl animate-slide-up md:h-[80vh]"
              style={{
                background: "linear-gradient(160deg, rgba(22,42,64,0.98) 0%, rgba(8,17,30,0.98) 100%)",
                boxShadow: "0 28px 90px rgba(0,0,0,0.45), 0 0 50px rgba(111,168,220,0.12)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-border/40 shrink-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 border border-accent/20 flex items-center justify-center">
                    {selectedDocIndex === 0 && <BookOpen className="text-accent" size={22} />}
                    {selectedDocIndex === 1 && <Eye className="text-accent" size={22} />}
                    {selectedDocIndex === 2 && <Music className="text-accent" size={22} />}
                    {selectedDocIndex === 3 && <FileText className="text-accent" size={22} />}
                    {selectedDocIndex === 4 && <Scale className="text-accent" size={22} />}
                    {selectedDocIndex === 5 && <Home className="text-accent" size={22} />}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/25">
                      {doc.tag}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {doc.judul}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedDocIndex(null)}
                  className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-text-secondary hover:text-white hover:border-white transition-all bg-surface/30 cursor-pointer"
                  aria-label="Tutup"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Scroll Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 no-scrollbar">
                {/* 1. SEJARAH / VISI-MISI (Multi Section Tabbed Layout) */}
                {doc.sections && (
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                    {/* Sidebar Tabs */}
                    <div className="md:col-span-1 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 border-b md:border-b-0 md:border-r border-border/20 shrink-0">
                      {doc.sections.map((sec, sidx) => (
                        <button
                          key={sidx}
                          onClick={() => setActiveTab(sidx)}
                          className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap md:whitespace-normal cursor-pointer
                            ${activeTab === sidx
                              ? "bg-accent/15 text-accent border-l-2 border-accent"
                              : "text-text-secondary hover:text-text-primary hover:bg-surface/30"}`}
                        >
                          {sec.title}
                        </button>
                      ))}
                    </div>

                    {/* Section Content */}
                    <div className="md:col-span-3 space-y-4">
                      <h4 className="text-lg font-bold text-white mb-2 pb-1 border-b border-border/20" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {doc.sections[activeTab].title}
                      </h4>
                      <div className="text-text-secondary leading-relaxed space-y-4 text-base md:text-lg">
                        {doc.sections[activeTab].content.split("\n\n").map((para, pidx) => {
                          if (para.startsWith("- ") || para.startsWith("1. ")) {
                            return (
                              <div key={pidx} className="pl-4 space-y-2">
                                {para.split("\n").map((li, lidx) => (
                                  <p key={lidx} className="relative pl-5">
                                    <span className="absolute left-0 text-accent">•</span>
                                    {li.replace(/^[-\d\.\s]+/, "")}
                                  </p>
                                ))}
                              </div>
                            );
                          }
                          return (
                            <p key={pidx}>
                              {para.split("**").map((chunk, cidx) =>
                                cidx % 2 === 1 ? <strong key={cidx} className="text-text-primary font-semibold">{chunk}</strong> : chunk
                              )}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. MARS GKPI PLAYER & LYRICS */}
                {doc.isMars && (
                  <div className="max-w-2xl mx-auto space-y-8 pb-8">
                    {/* Beautiful Audio Player Card */}
                    <div className="p-6 rounded-3xl border border-accent/20 bg-surface/40 flex flex-col md:flex-row items-center gap-6"
                      style={{ background: "linear-gradient(135deg, rgba(111,168,220,0.08) 0%, rgba(22,42,64,0.4) 100%)" }}>
                      <audio
                        ref={audioRef}
                        src="uhuk"
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleAudioLoaded}
                        onEnded={handleAudioEnded}
                      />

                      <button
                        onClick={togglePlay}
                        className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-background hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20 shrink-0 cursor-pointer"
                      >
                        {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} className="translate-x-0.5" fill="currentColor" />}
                      </button>

                      <div className="flex-1 w-full space-y-2">
                        <div className="flex items-center justify-between text-xs text-text-secondary">
                          <span>{formatTime(audioProgress)}</span>
                          <span>{formatTime(audioDuration)}</span>
                        </div>
                        <input
                          type="range"
                          min={0}
                          max={audioDuration || 100}
                          value={audioProgress}
                          onChange={handleProgressChange}
                          className="w-full h-1.5 rounded-lg bg-border/40 accent-accent cursor-pointer"
                        />
                        <div className="flex items-center justify-between pt-2">
                          <p className="text-sm font-semibold text-white">Judul</p>
                          <div className="flex items-center gap-3">
                            <button onClick={() => setIsMuted(!isMuted)} className="text-text-secondary hover:text-white cursor-pointer">
                              {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
                            </button>
                            <input
                              type="range"
                              min={0}
                              max={1}
                              step={0.05}
                              value={isMuted ? 0 : volume}
                              onChange={(e) => {
                                setVolume(parseFloat(e.target.value));
                                setIsMuted(false);
                              }}
                              className="w-16 h-1 accent-accent cursor-pointer"
                            />
                            <a
                              href="url"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-accent hover:underline font-semibold pl-2 cursor-pointer"
                            >
                              <Download size={14} />
                              PDF
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Lyrics Display */}
                    <div className="text-center space-y-6">
                      <h4 className="text-lg font-bold text-white uppercase tracking-wider" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                        Judul
                      </h4>
                      <div className="text-text-secondary leading-loose text-base md:text-lg italic space-y-6 bg-surface/20 p-6 md:p-8 rounded-2xl border border-border/40">
                        {doc.lyrics.split("\n\n").map((stanza, idx) => (
                          <p key={idx} className="whitespace-pre-line">
                            {stanza.replace(/\*\*/g, "")}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. TATA GEREJA (Mukadimah & Interactive Accordion Articles) */}
                {doc.isArticles && (
                  <div className="space-y-6">
                    {/* Mukadimah Card */}
                    <div className="p-6 md:p-8 rounded-2xl border border-border/40 bg-surface/20">
                      <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-widest text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Judul
                      </h4>
                      <div className="text-text-secondary leading-relaxed text-sm md:text-base space-y-4">
                        {doc.mukadimah.split("\n\n").map((para, idx) => (
                          <p key={idx}>{para}</p>
                        ))}
                      </div>
                    </div>

                    {/* Articles List */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Judul
                      </h4>
                      {doc.articles.map((art, idx) => {
                        const isArtOpen = activeTab === idx;
                        return (
                          <div
                            key={idx}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden
                              ${isArtOpen ? "border-accent/30 bg-surface/60" : "border-border/40 bg-surface/25 hover:border-border/80"}`}
                          >
                            <button
                              onClick={() => setActiveTab(isArtOpen ? -1 : idx)}
                              className="w-full text-left p-5 flex items-center justify-between cursor-pointer"
                            >
                              <div className="flex items-center gap-4">
                                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-accent/15 text-accent">
                                  {art.pasal}
                                </span>
                                <h5 className="font-serif font-bold text-white text-base md:text-lg">
                                  {art.judul}
                                </h5>
                              </div>
                              <ChevronDown
                                size={18}
                                className={`text-text-secondary transition-transform duration-300 ${isArtOpen ? "rotate-180 text-accent" : ""}`}
                              />
                            </button>
                            {isArtOpen && (
                              <div className="px-5 pb-5 pt-1 border-t border-border/10">
                                <p className="text-text-secondary leading-relaxed whitespace-pre-line text-sm md:text-base">
                                  {art.isi}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 4. PERATURAN RUMAH TANGGA (Interactive Accordion Chapters) */}
                {doc.isPRT && (
                  <div className="space-y-6">
                    <p className="text-text-secondary leading-relaxed text-base">
                      Judul
                    </p>
                    <div className="space-y-3">
                      {doc.chapters.map((chap, idx) => {
                        const isChapOpen = activeTab === idx;
                        return (
                          <div
                            key={idx}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden
                              ${isChapOpen ? "border-accent/30 bg-surface/60" : "border-border/40 bg-surface/25 hover:border-border/80"}`}
                          >
                            <button
                              onClick={() => setActiveTab(isChapOpen ? -1 : idx)}
                              className="w-full text-left p-5 flex items-center justify-between cursor-pointer"
                            >
                              <div className="flex items-center gap-4">
                                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-accent/15 text-accent">
                                  {chap.bab}
                                </span>
                                <h5 className="font-serif font-bold text-white text-base md:text-lg">
                                  {chap.judul}
                                </h5>
                              </div>
                              <ChevronDown
                                size={18}
                                className={`text-text-secondary transition-transform duration-300 ${isChapOpen ? "rotate-180 text-accent" : ""}`}
                              />
                            </button>
                            {isChapOpen && (
                              <div className="px-5 pb-5 pt-1 border-t border-border/10">
                                <p className="text-text-secondary leading-relaxed whitespace-pre-line text-sm md:text-base">
                                  {chap.isi.split("\n\n").map((para, pidx) => (
                                    <span key={pidx} className="block mb-3 last:mb-0">
                                      {para.startsWith("**") ? (
                                        <strong className="text-text-primary block font-semibold mb-1">
                                          {para.replace(/\*\*/g, "")}
                                        </strong>
                                      ) : para}
                                    </span>
                                  ))}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 5. PENGAKUAN IMAN */}
                {doc.isConfession && (
                  <div className="space-y-8">
                    {/* Intro & Declaration */}
                    <div className="p-6 md:p-8 rounded-2xl border border-border/40 bg-surface/20 space-y-4">
                      <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                        {doc.pengantar}
                      </p>
                      <blockquote className="border-l-4 border-accent pl-4 py-1.5 italic text-white font-medium text-base md:text-lg leading-relaxed bg-accent/5 pr-4 rounded-r-lg">
                        {doc.isiConfession}
                      </blockquote>
                    </div>

                    {/* Points Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {doc.points.map((pt, idx) => (
                        <div key={idx} className="p-6 rounded-2xl border border-border/60 bg-surface/20 space-y-2">
                          <h5 className="text-white font-bold font-serif text-lg">
                            {pt.title}
                          </h5>
                          <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                            {pt.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      {/* ── Pokok Iman ───────────────────────────────────────────────────── */}
      <section
        id="pokok-iman"
        className="border-y border-border/60 bg-surface/30 px-5 py-16 sm:px-8 md:py-20"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <div className="rounded-3xl border border-border/70 bg-background/75 p-8 shadow-2xl shadow-black/15 md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15">
                <ShieldCheck size={28} className="text-accent" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                Pokok Iman
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Judul
              </h2>
              <p className="mt-5 leading-relaxed text-text-secondary">
                Deskripsi
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 gap-4">
              {faithPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background/50 p-5"
                >
                  <BookOpen size={21} className="mt-0.5 shrink-0 text-accent" />
                  <p className="text-text-secondary">{point}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Kepemimpinan & Lembaga ──────────────────────────────────────────── */}
      <section
        id="kepemimpinan"
        className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20"
      >
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-border/70 bg-surface/55 p-8 shadow-xl shadow-black/10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
                <Church size={24} className="text-accent" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Pimpinan 2025–2030
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Kepemimpinan
              </h2>
              <div className="mt-6 space-y-4 text-sm text-text-secondary">
                <p>
                  <span className="font-bold text-white">Ketua:</span> Nama
                </p>
                <p>
                  <span className="font-bold text-white">Wakil Ketua:</span> Nama
                </p>
              </div>
            </article>

            <article className="rounded-3xl border border-border/70 bg-surface/55 p-8 shadow-xl shadow-black/10 lg:col-span-2">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
                <HandHeart size={24} className="text-accent" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Lembaga
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Judul
              </h2>
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {institutions.map((institution) => (
                  <div
                    key={institution}
                    className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/45 px-4 py-3"
                  >
                    <Building2 size={17} className="shrink-0 text-accent" />
                    <span className="text-sm text-text-secondary">
                      {institution}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Wilayah ──────────────────────────────────────────────────────── */}
      <section className="px-5 pb-16 sm:px-8 md:pb-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-border/70 bg-surface/55 p-7 shadow-2xl shadow-black/15 md:p-10">
          <ScrollReveal>
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                  Wilayah
                </p>
                <h2 className="mt-3 text-3xl font-bold text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Judul
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-text-secondary">
                Deskripsi
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {regions.map((region, index) => (
                <div
                  key={region}
                  className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/45 px-4 py-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-xs font-bold text-accent">
                    {index + 1}
                  </div>
                  <span className="text-sm text-text-secondary">{region}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-border/60 bg-background/55 p-6 md:flex-row md:items-center">
              <div className="flex items-start gap-4">
                <Users size={24} className="mt-1 shrink-0 text-accent" />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Ingin mengenal pelayanan lebih lanjut?
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    Hubungi kami atau lihat informasi pelayanan terbaru.
                  </p>
                </div>
              </div>
              <Link
                href="/#kontak"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
              >
                Hubungi Kami
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto mb-16">
        <ScrollReveal>
          <div
            className="relative rounded-[2rem] p-10 md:p-14 overflow-hidden border border-border/40"
            style={{
              background:
                "linear-gradient(135deg, rgba(26,58,95,0.8) 0%, rgba(15,32,39,0.95) 100%)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Decorative glow */}
            <div
              className="absolute top-[-30%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, #6FA8DC, transparent)" }}
            />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                  Bergabung Bersama Kami
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Judul
                </h2>
                <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
                  Deskripsi
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href="/wilayah-resort"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-background text-sm font-bold rounded-2xl hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all duration-300 whitespace-nowrap"
                  style={{ backgroundColor: "#6FA8DC" }}
                >
                  <span>Cari Jemaat</span>
                  <ChevronRight size={18} />
                </Link>
                <Link
                  href="/pengurus"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface/80 text-text-primary text-sm font-bold rounded-2xl border border-border hover:border-accent/30 hover:bg-surface transition-all duration-300 whitespace-nowrap"
                >
                  <span>Struktur Pengurus</span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}

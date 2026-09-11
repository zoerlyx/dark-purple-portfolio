import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PortalButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string;
}

export default function PortalButton({ onClick, text = "GET IN TOUCH" }: PortalButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative inline-flex items-center justify-center p-14 sm:p-20 rounded-full cursor-pointer focus:outline-none select-none"
    >
      {/* 1. Ambient Background Glow */}
      <div className="absolute inset-0 m-auto w-40 h-40 md:w-52 md:h-52 bg-purple-600/30 rounded-full blur-3xl group-hover:bg-purple-500/60 group-hover:scale-150 transition-all duration-700 ease-out" />

      {/* 2. LAYER 1: Lingkaran Luar Utama (Berputar + Membesar saat Hover) */}
      <div className="absolute inset-0 m-auto w-52 h-52 md:w-64 md:h-64 rounded-full border border-purple-500/40 border-t-purple-300 border-r-purple-600 border-b-purple-950 animate-[spin_10s_linear_infinite] group-hover:animate-[spin_2.5s_linear_infinite] group-hover:scale-110 group-hover:border-purple-200 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all duration-500 ease-out pointer-events-none" />

      {/* 3. LAYER 2: Orbit Ring Kedua (Aksen Titik / Dashed, Berputar Berlawanan) */}
      <div className="absolute inset-0 m-auto w-44 h-44 md:w-56 md:h-56 rounded-full border-2 border-dashed border-purple-400/30 border-t-purple-300 animate-[spin_8s_linear_infinite_reverse] group-hover:animate-[spin_2s_linear_infinite_reverse] group-hover:scale-110 transition-all duration-500 ease-out pointer-events-none" />

      {/* 4. LAYER 3: Lingkaran Tengah Padat (Glow Ring) */}
      <div className="absolute inset-0 m-auto w-36 h-36 md:w-48 md:h-48 rounded-full border border-purple-400/50 border-l-purple-300 animate-[spin_6s_linear_infinite] group-hover:animate-[spin_1.5s_linear_infinite] group-hover:scale-105 group-hover:border-purple-300 transition-all duration-500 ease-out pointer-events-none" />

      {/* 5. LAYER 4: Lingkaran Dalam Bertingkat (Dotted Inner Grid) */}
      <div className="absolute inset-0 m-auto w-30 h-30 md:w-40 md:h-40 rounded-full border border-dotted border-purple-300/40 animate-[spin_12s_linear_infinite_reverse] group-hover:animate-[spin_3s_linear_infinite_reverse] group-hover:scale-110 transition-all duration-500 ease-out pointer-events-none" />

      {/* 6. LAYER 5: Deep Core Ring (Cincin Terdalam Sebelum Pusat Vortex) */}
      <div className="absolute inset-0 m-auto w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-purple-500/60 border-t-white animate-[spin_4s_linear_infinite] group-hover:animate-[spin_1s_linear_infinite] group-hover:scale-115 transition-all duration-500 ease-out pointer-events-none" />

      {/* 7. Vortex Core & Energy Pulse (Pusat Menyedot) */}
      <div className="absolute inset-0 m-auto w-20 h-20 md:w-28 md:h-28 rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.4)_0%,rgba(168,85,247,0.2)_40%,rgba(4,4,5,0.95)_80%)] animate-pulse group-hover:scale-125 transition-transform duration-500 ease-out pointer-events-none" />

      {/* 8. Text & Icon di Tengah Portal */}
      <div className="relative z-10 flex items-center gap-2 font-mono text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-white group-hover:text-purple-100 transition-colors duration-300 drop-shadow-[0_0_16px_rgba(255,255,255,0.9)]">
        <span>{text}</span>
        <ArrowRight className="w-4 h-4 text-purple-300 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
      </div>
    </button>
  );
}
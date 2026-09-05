"use client";

import React from "react";

export const PersonalBrandVisual: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[460px] aspect-square rounded-card border border-border-light bg-white shadow-[0_12px_40px_rgba(11,24,48,0.04)] overflow-hidden flex flex-col justify-between p-8 select-none mx-auto group"
      aria-hidden="true"
    >
      {/* Subtle Micro Grid */}
      <div className="absolute inset-0 engineering-grid opacity-75 pointer-events-none" />

      {/* Top Protocol Metadata */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-bold text-muted border-b border-border-light pb-3 tracking-[0.14em]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
          <span className="uppercase text-navy">KİŞİSEL İMZA</span>
        </div>
        <span className="uppercase text-[#7A8799]">SAKARYA · TR</span>
      </div>

      {/* Centerpiece: Bold Editorial ANE Monogram with Architectural Accents */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-2">
        {/* Subtle Architectural Accent Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-[1px] bg-border-light/70" />
          <div className="h-full w-[1px] bg-border-light/70 absolute" />
          <div className="w-56 h-56 rounded-full border border-border-light/70 absolute" />
          <div className="w-28 h-28 rounded-full border border-border-light/50 absolute" />
        </div>

        {/* The Monogram */}
        <div className="relative z-10 text-center">
          <div className="font-display text-[110px] sm:text-[128px] font-extrabold text-navy tracking-[-0.05em] leading-none select-none transition-transform duration-slow group-hover:scale-[1.03]">
            ANE
          </div>
          <div className="mt-3 text-[12px] uppercase tracking-[0.2em] text-navy font-bold">
            AHMET NURULLAH ERKAN
          </div>
          <div className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-secondary font-medium">
            BİLGİSAYAR MÜHENDİSLİĞİ · AR-GE
          </div>
        </div>
      </div>

      {/* Bottom Personal Mark Signature */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-semibold text-muted border-t border-border-light pt-3 tracking-[0.14em]">
        <span className="uppercase text-navy">ÖĞRENCİ &amp; BUILDER</span>
        <span className="uppercase text-electric font-semibold">2026 ARŞİVİ</span>
      </div>
    </div>
  );
};

"use client";

import React, { useState } from "react";

export const JourneyBar: React.FC = () => {
  const [activeHover, setActiveHover] = useState<number | null>(null);

  const steps = [
    {
      year: "2024",
      label: "BAŞLANGIÇ",
      detail: "Mühendislik temelleri & gömülü kodlama",
    },
    {
      year: "2025",
      label: "SİSTEMLER",
      detail: "Sunucu altyapısı, sanallaştırma & laboratuvar",
    },
    {
      year: "2026",
      label: "ÜRÜNLER",
      detail: "Patent başvurusu & 5K+ indirmeli ürünler",
    },
    {
      year: "ŞİMDİ",
      label: "İNŞA EDİYORUM",
      detail: "Uygulamalı Ar-Ge & derin teknoloji",
    },
  ];

  return (
    <section className="w-full bg-navy-surface text-white border-y border-white/10 min-h-[84px] flex items-center py-4 select-none">
      <div className="max-w-container mx-auto px-6 w-full">
        <div className="relative flex items-center justify-between overflow-x-auto no-scrollbar py-2">
          {/* Continuous Connecting Line */}
          <div className="absolute top-[17px] left-4 right-4 h-[1px] bg-white/15 z-0" />

          {steps.map((step, index) => {
            const isActive = step.year === "ŞİMDİ";
            const isHovered = activeHover === index;

            return (
              <div
                key={step.year}
                onMouseEnter={() => setActiveHover(index)}
                onMouseLeave={() => setActiveHover(null)}
                className="relative z-10 flex flex-col items-center cursor-pointer min-w-[130px] px-2 text-center group"
              >
                {/* Node Dot */}
                <div className="flex items-center justify-center w-9 h-9 mb-1">
                  <div
                    className={`rounded-full transition-all duration-fast ${
                      isActive
                        ? "w-3.5 h-3.5 bg-electric ring-4 ring-electric/30 animate-pulse"
                        : "w-2.5 h-2.5 bg-white/40 group-hover:bg-white group-hover:scale-125"
                    }`}
                  />
                </div>

                {/* Year & Label */}
                <div className="text-[11px] uppercase tracking-[0.14em]">
                  <span className={`font-bold ${isActive ? "text-electric" : "text-white/90"}`}>
                    {step.year}
                  </span>{" "}
                  <span className={`${isActive ? "text-white font-semibold" : "text-white/70"}`}>
                    {step.label}
                  </span>
                </div>

                {/* Subtitle / Detail */}
                <div
                  className={`text-[11px] text-white/60 mt-1 font-normal whitespace-nowrap transition-opacity duration-fast ${
                    isHovered || isActive ? "opacity-100" : "opacity-0 md:opacity-80"
                  }`}
                >
                  {step.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

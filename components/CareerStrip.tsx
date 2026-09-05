"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const CareerStrip: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Kural 10 & 11: Yalnızca Yıl, Başlık, 1 Kısa Açıklama (Aşırı CV tablosu hissi yok)
  const steps = [
    {
      year: "2020",
      title: "LİSE",
      desc: "Necmettin Erbakan Fen Lisesi",
    },
    {
      year: "2024",
      title: "SUBÜ BİLGİSAYAR MÜHENDİSLİĞİ",
      desc: "Lisans Eğitimi Başlangıcı",
    },
    {
      year: "2025",
      title: "SUNUCU & SİSTEMLER",
      desc: "Dell PowerEdge & Sanallaştırma",
    },
    {
      year: "2025",
      title: "DONANIM & TEKNİK DESTEK",
      desc: "Üniversite Laboratuvar Altyapısı",
    },
    {
      year: "2026",
      title: "ÜRÜNLER · AR-GE · PATENT",
      desc: "RescueRadar & Afet İletişim Ağı",
    },
  ];

  const easeNatural = [0.22, 1, 0.36, 1];

  return (
    <section className="bg-[#FBFAF7] border-b border-[#DED8CC] py-14 md:py-20 select-none overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Başlık & Amaç */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-6% 0px" }}
          transition={{ duration: 0.5, ease: easeNatural }}
          className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 pb-4 border-b border-[#DED8CC]/60 gap-2"
        >
          <div className="text-[11px] font-semibold text-[#9A8763] uppercase tracking-[0.14em]">
            GELİŞİM ÇİZGİSİ
          </div>
          <div className="text-[12px] text-[#625D55]">
            Lise → Üniversite → Sistemler → Teknik Deneyim → Ürünler &amp; Patent
          </div>
        </motion.div>

        {/* Akış Çizgisi ve Noktalar */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
          
          {/* Bağlantı Çizgisi (Desktop): scaleX(0) -> scaleX(1) with transform-origin: left */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.75, ease: easeNatural }}
            style={{ transformOrigin: "left" }}
            className="hidden md:block absolute top-[13px] left-6 right-6 h-[1px] bg-[#DED8CC] z-0 pointer-events-none"
          />

          {steps.map((step, index) => {
            const isHovered = hoveredIndex === index;
            const isLatest = index === steps.length - 1;

            return (
              <div
                key={step.year + step.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative z-10 flex flex-row md:flex-col items-start md:items-center text-left md:text-center group cursor-pointer"
              >
                {/* Node Noktası: opacity 0 -> 1, scale(0.75) -> 1 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.75 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-6% 0px" }}
                  transition={{
                    duration: 0.45,
                    delay: 0.12 + index * 0.09,
                    ease: easeNatural,
                  }}
                  className="flex items-center justify-center w-7 h-7 mr-4 md:mr-0 md:mb-3 bg-[#FBFAF7] shrink-0"
                >
                  <div
                    className={`rounded-full transition-all duration-280 ${
                      isLatest
                        ? "w-3 h-3 bg-[#20201D]/90 ring-4 ring-[#9A8763]/25"
                        : "w-2.5 h-2.5 bg-[#DED8CC] group-hover:bg-[#20201D]/90"
                    }`}
                  />
                </motion.div>

                {/* Yıl & Başlık & İçerik: opacity 0 -> 1, translateY(8px) -> 0 */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-6% 0px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.20 + index * 0.09,
                    ease: easeNatural,
                  }}
                  className="flex flex-col items-start md:items-center"
                >
                  {/* Yıl */}
                  <span className="text-[11px] font-bold text-[#9A8763] uppercase tracking-[0.12em] mb-1">
                    {step.year}
                  </span>

                  {/* Başlık */}
                  <h3
                    className={`font-heading font-semibold text-[13px] text-[#171717] tracking-tight mb-1 transition-colors duration-200 ${
                      isHovered ? "text-[#20201D]" : ""
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* 1 Kısa Açıklama */}
                  <p className="text-[12px] text-[#625D55] leading-snug max-w-[200px]">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

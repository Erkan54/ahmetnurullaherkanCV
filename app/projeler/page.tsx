"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import { motion } from "framer-motion";

export default function ProjelerPage() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const easeNatural = [0.22, 1, 0.36, 1];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#171717] select-none">
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: easeNatural }}
        className="flex-1 pt-28 pb-36"
      >
        <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-14">
          
          {/* Header */}
          <header className="pb-12 border-b border-[#DED8CC] mb-14">
            <div className="text-[11px] font-semibold text-[#9A8763] uppercase tracking-[0.14em] mb-2">
              ÇALIŞMALAR ARŞİVİ
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight mb-3">
              PROJELER
            </h1>
            <p className="text-[18px] sm:text-[20px] text-[#625D55] font-normal">
              Fikirden çalışan sisteme.
            </p>
          </header>

          {/* Büyük Editoryal Proje Satırları (Editorial Project Rows - Sıfır Görsel) */}
          <div
            onMouseLeave={() => setHoveredSlug(null)}
            className="divide-y divide-[#DED8CC] border-y border-[#DED8CC]"
          >
            {projectsData.map((project) => {
              const isHovered = hoveredSlug === project.slug;
              const isAnyHovered = hoveredSlug !== null;
              const isDimmed = isAnyHovered && !isHovered;

              return (
                <article
                  key={project.slug}
                  onMouseEnter={() => setHoveredSlug(project.slug)}
                  className={`group py-10 sm:py-14 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-[8px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isHovered
                      ? "bg-[#FBFAF7]/70 border-y border-[#B8B0A0]/60 opacity-100"
                      : isDimmed
                      ? "opacity-65"
                      : "opacity-100"
                  }`}
                  id={project.slug}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-baseline">
                    
                    {/* Numara & Kategori & Yıl (3 Kolon) */}
                    <div className="lg:col-span-3 flex flex-row lg:flex-col justify-between items-start gap-2">
                      <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#9A8763] tracking-tight">
                        {project.number}
                      </span>
                      <div className="text-right lg:text-left">
                        <div className="text-[11px] font-semibold text-[#171717] uppercase tracking-[0.08em]">
                          {project.badge}
                        </div>
                        <div className="text-[11px] text-[#625D55] mt-0.5">
                          {project.year}
                        </div>
                      </div>
                    </div>

                    {/* Proje Başlığı & Açıklama & Patent (6 Kolon) */}
                    <div className="lg:col-span-6 space-y-3">
                      {/* Patent Rozeti (Varsa) */}
                      {project.patentInfo && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] border border-[#9A8763]/40 bg-white text-[#9A8763] text-[11px] font-semibold uppercase tracking-wider mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#9A8763]" />
                          <span>{project.patentInfo.status}: {project.patentInfo.number}</span>
                        </div>
                      )}

                      {/* Başlık (Hover translateX 4px) */}
                      <h2
                        className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171717] tracking-tight leading-tight transition-transform duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                      >
                        <Link href={`/projeler/${project.slug}`} className="hover:underline decoration-[#9A8763] underline-offset-8">
                          {project.title}
                        </Link>
                      </h2>

                      <p className="text-[15px] sm:text-[16px] text-[#625D55] leading-relaxed font-normal mobile-justify text-justify md:text-left [text-justify:inter-word] hyphens-auto">
                        {project.shortDesc}
                      </p>

                      {/* Metadata (Hover opacity .65 -> 1) */}
                      <div className="text-[12px] font-medium text-[#9A8763] uppercase tracking-[0.08em] pt-2 opacity-75 group-hover:opacity-100 transition-opacity duration-250">
                        {project.metadata}
                      </div>
                    </div>

                    {/* Eylemler / Linkler (3 Kolon) */}
                    <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-3 pt-4 lg:pt-0">
                      <Link
                        href={`/projeler/${project.slug}`}
                        className="inline-flex items-center text-[12px] font-bold text-[#171717] uppercase tracking-wide group/btn hover:text-[#9A8763] transition-colors"
                      >
                        <span className="link-underline-reveal">VAKA ANALİZİ</span>
                        {/* Arrow translateX 6px on hover */}
                        <ArrowRight size={14} className="ml-1.5 text-[#9A8763] transition-transform duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1.5" />
                      </Link>

                      {project.links.googlePlay && (
                        <a
                          href={project.links.googlePlay}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[11px] text-[#625D55] hover:text-[#171717] transition-colors"
                        >
                          <span>Google Play (5K+)</span>
                          <ArrowUpRight size={12} className="ml-0.5" />
                        </a>
                      )}

                      {project.links.press && (
                        <a
                          href={project.links.press}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[11px] text-[#625D55] hover:text-[#171717] transition-colors"
                        >
                          <span>Medyabar Haberi</span>
                          <ArrowUpRight size={12} className="ml-0.5" />
                        </a>
                      )}
                    </div>

                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </motion.main>

      <Footer />
    </div>
  );
}

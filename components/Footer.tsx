"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#20201D]/90 text-[#F5F1E8] border-t border-white/10 py-12 md:py-16 select-none">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-14">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Sol İsim & Meslek */}
          <div>
            <div className="font-heading font-bold text-lg text-white tracking-tight">
              AHMET NURULLAH ERKAN
            </div>
            <div className="text-[13px] text-white/60 mt-1">
              Bilgisayar Mühendisliği · Sakarya / Türkiye
            </div>
          </div>

          {/* Orta / Hızlı Linkler */}
          <div className="flex flex-wrap items-center gap-6 text-[12px] font-medium text-white/70">
            <Link href="/" className="hover:text-white transition-colors">
              ANA SAYFA
            </Link>
            <Link href="/cv" className="hover:text-white transition-colors">
              CV &amp; HAKKIMDA
            </Link>
            <Link href="/projeler" className="hover:text-white transition-colors">
              PROJELER
            </Link>
            <a href="mailto:ahmetnurullaherkan@gmail.com" className="hover:text-white transition-colors">
              E-POSTA
            </a>
          </div>

          {/* Sağ Sosyal Linkler */}
          <div className="flex items-center space-x-6 text-[12px] font-medium text-[#B6A27C]">
            <a
              href="https://www.linkedin.com/in/ahmet-nurullah-erkan-aa5395392"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:text-white transition-colors duration-200"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={12} className="ml-0.5" />
            </a>
            <a
              href="https://github.com/Erkan54"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:text-white transition-colors duration-200"
            >
              <span>GitHub</span>
              <ArrowUpRight size={12} className="ml-0.5" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.afetiletisim.deprem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:text-white transition-colors duration-200"
            >
              <span>Google Play</span>
              <ArrowUpRight size={12} className="ml-0.5" />
            </a>
          </div>
        </div>

        {/* En Alt Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-white/40 tracking-wider">
          <div>
            © 2026 Ahmet Nurullah Erkan. Tüm hakları saklıdır.
          </div>
          <div className="mt-2 sm:mt-0 uppercase">
            SADE · PROFESYONEL · EDİTORYAL MİMARİ
          </div>
        </div>

      </div>
    </footer>
  );
};

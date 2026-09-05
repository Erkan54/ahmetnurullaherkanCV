"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const SecondIdentity: React.FC = () => {
  return (
    <section className="py-28 md:py-36 bg-offwhite border-b border-border-light relative">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-12 gap-8 lg:gap-14 items-start mb-16">
          {/* Left Column: 5 cols */}
          <div className="col-span-12 lg:col-span-5">
            <div className="text-[11px] font-bold text-muted uppercase tracking-[0.16em] mb-4">
              02 · YAKLAŞIM
            </div>
            <h2 className="font-display text-4xl sm:text-[50px] lg:text-[58px] font-extrabold text-navy tracking-[-0.035em] leading-[0.98]">
              Hala başlangıçtayım.<br />
              <span className="font-semibold text-navy/90">Ama çoktan inşa ediyorum.</span>
            </h2>
          </div>

          {/* Right Column: 7 cols (3 Concise Paragraphs) */}
          <div className="col-span-12 lg:col-span-7 space-y-6 text-[18px] text-secondary leading-[1.7]">
            <p>
              Sakarya Uygulamalı Bilimler Üniversitesi&apos;nde Bilgisayar Mühendisliği eğitimi alıyorum.
            </p>
            <p>
              Çalışmalarım yazılım, gömülü sistemler, kablosuz haberleşme teknolojileri ve uygulamalı Ar-Ge kesişiminde yer alıyor.
            </p>
            <p>
              Fikirleri ekranda bırakmayıp sahada, enkaz altında veya fiziksel dünyada gerçek kullanıcıların faydalanabileceği çalışan sistemlere dönüştürmeyi önemsiyorum.
            </p>

            {/* Small Typographic Credentials (Pure Typography, No Pills, No Logos) */}
            <div className="pt-8 border-t border-border-light text-[11px] font-semibold text-muted uppercase tracking-[0.16em] leading-relaxed">
              BİLGİSAYAR MÜHENDİSLİĞİ · 2024 — 2028 · GÖMÜLÜ SİSTEMLER · AR-GE · YAZILIM · ÜRÜN GELİŞTİRME
            </div>

            {/* Project Entry Point Link */}
            <div className="pt-6 flex items-center justify-between">
              <Link
                href="/projeler"
                className="group inline-flex items-center text-xs font-bold text-navy uppercase tracking-wider hover:text-electric transition-colors"
                id="second-identity-explore-link"
              >
                <span>ÇALIŞMALARIMI GÖR</span>
                <ArrowRight size={14} className="ml-2 text-electric transition-transform duration-fast group-hover:translate-x-1" />
              </Link>
              <span className="text-[11px] font-bold text-muted tracking-[0.14em]">04 SEÇİLMİŞ ÇALIŞMA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

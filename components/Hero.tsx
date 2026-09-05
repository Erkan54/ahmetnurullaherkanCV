"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  // Micro parallax: 0px -> 8px maximum subtle depth
  const photoParallaxY = useTransform(scrollY, [0, 600], [0, 8]);

  const easeNatural = [0.22, 1, 0.36, 1];

  const headlineLines = [
    { text: "FİKİRLERİ", className: "font-bold block" },
    { text: "ÇALIŞAN", className: "font-extrabold block" },
    { text: "sistemlere", className: "font-normal italic text-[#625D55] block" },
    { text: "DÖNÜŞTÜRÜYORUM.", className: "font-extrabold block text-[#171717]" },
  ];

  return (
    <section
      ref={heroRef}
      style={{
        background: "linear-gradient(155deg, #F5F1E8 0%, #F7F3EB 48%, #FBFAF7 100%)",
      }}
      className="relative min-h-[100vh] min-h-[100svh] pt-[66px] md:pt-[77px] pb-4 sm:pb-6 border-b border-[#DED8CC] flex flex-col justify-between overflow-hidden"
    >
      {/* Hero Arka Plan Görseli (%10 Opaklık - Üste Sabitlenmiş) */}
      <div
        style={{
          backgroundImage: "url('/assets/hero-bg.jpg')",
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 opacity-[0.10] pointer-events-none select-none z-0"
      />

      <div className="relative z-10 max-w-container mx-auto px-6 sm:px-10 lg:px-14 w-full flex-1 flex items-center py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Sol Kolon: Tipografi & Hiyerarşi (Mobilde tam genişlik & ortalı / Masaüstünde 7-8 kolon & sola yaslı) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-center text-center lg:items-start lg:text-left overflow-visible w-full">
            
            {/* 3. Hero Headline: Satır Satır Reveal + Mobilde Ortalı + Masaüstünde Sola Yaslı (Türkçe karakter noktaları ve çıkıntıları için genişletilmiş satır yüksekliği ve overflow-visible) */}
            <h1 className="font-heading text-[30px] sm:text-[40px] md:text-[48px] lg:text-[50px] xl:text-[56px] text-[#171717] tracking-[-0.02em] leading-[1.18] mb-6 sm:mb-8 select-none w-full text-center lg:text-left">
              {headlineLines.map((line, idx) => (
                <span key={line.text} className="block overflow-visible py-0.5">
                  <motion.span
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.20 + idx * 0.08,
                      ease: easeNatural,
                    }}
                    className={`${line.className} inline-block`}
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* 4. Hero Description (0.52s - Mobilde %10 daha büyük) */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.52, ease: easeNatural }}
              className="text-[18px] sm:text-[20px] md:text-[21px] lg:text-[19px] text-[#625D55] leading-[1.65] max-w-[580px] mb-8 sm:mb-10 font-normal text-center lg:text-left mx-auto lg:mx-0"
            >
              Bilgisayar mühendisliği öğrencisi olarak yazılım, gömülü sistemler ve Ar-Ge alanlarında gerçek problemlere çalışan çözümler geliştiriyorum.
            </motion.p>

            {/* 5. CTA Buttons (PROJELERİ GÖR orijinal genişliğinde, CV'Mİ İNCELE büyütülüp tam eşitlendi) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.60, ease: easeNatural }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="/projeler"
                className="group inline-flex items-center justify-center w-[215px] sm:w-[225px] lg:w-[215px] h-[52px] sm:h-[54px] lg:h-[50px] px-6 sm:px-8 rounded-[6px] bg-[#20201D]/90 text-[#F5F1E8] text-[14px] sm:text-[15px] lg:text-[13px] font-medium tracking-[0.08em] whitespace-nowrap transition-all duration-200 hover:bg-[#20201D] hover:-translate-y-[1px]"
                id="hero-projects-cta"
              >
                <span>PROJELERİ GÖR</span>
                <ArrowRight size={14} className="ml-2 text-[#B6A27C] shrink-0 transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
              </Link>

              <Link
                href="/cv"
                className="group inline-flex items-center justify-center w-[215px] sm:w-[225px] lg:w-[215px] h-[52px] sm:h-[54px] lg:h-[50px] px-6 sm:px-8 rounded-[6px] border border-[#20201D]/25 bg-transparent text-[#171717] text-[14px] sm:text-[15px] lg:text-[13px] font-medium tracking-[0.08em] whitespace-nowrap transition-all duration-200 hover:bg-white hover:border-[#20201D]/90 hover:-translate-y-[1px]"
                id="hero-cv-cta"
              >
                <span>CV&apos;Mİ İNCELE</span>
                <ArrowRight size={14} className="ml-2 text-[#625D55] shrink-0 transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* 6. Sağ Kolon: Ahmet'in Fotoğrafı (Mobilde gizli / Masaüstünde görünür) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.985, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.50, ease: easeNatural }}
            style={{ y: photoParallaxY }}
            className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col items-end select-none w-full"
          >
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[8px] border border-[#DED8CC] overflow-hidden bg-[#FBFAF7] shadow-[0_4px_24px_rgba(32,32,29,0.03)] flex flex-col justify-between p-6">
              
              {/* Fotoğraf Alanı with Soft Hover Scale */}
              <div className="relative w-full flex-1 rounded-[4px] overflow-hidden flex items-center justify-center bg-[#F5F1E8]/70 border border-dashed border-[#DED8CC] group">
                {!imgError ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src="/assets/ahmet-hero.jpg"
                    alt="Ahmet Nurullah Erkan"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top transition-transform duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]"
                  />
                ) : (
                  <div className="text-center p-6 select-none">
                    <div className="w-12 h-12 rounded-full border border-[#DED8CC] mx-auto mb-3 flex items-center justify-center text-[#9A8763] text-lg font-serif">
                      AN
                    </div>
                    <div className="text-[12px] font-semibold text-[#171717] uppercase tracking-[0.08em] mb-1">
                      [Görsel Alanı: ahmet-hero.jpg]
                    </div>
                    <p className="text-[11px] text-[#625D55] max-w-[240px] leading-relaxed">
                      Lütfen fotoğrafınızı <code className="text-[#171717] font-semibold">assets/ahmet-hero.jpg</code> olarak kaydediniz.
                    </p>
                  </div>
                )}
              </div>

              {/* Fotoğraf Altı Küçük Editoryal Metadata */}
              <div className="pt-4 mt-3 border-t border-[#DED8CC]/70 flex flex-col gap-1 text-[11px] font-medium text-[#625D55] tracking-[0.08em] uppercase">
                <div className="flex items-center justify-between text-[#171717] font-semibold">
                  <span>SAKARYA / TÜRKİYE</span>
                  <span className="text-[#9A8763]">2026</span>
                </div>
                <div className="text-[10px] text-[#625D55]">
                  BİLGİSAYAR MÜHENDİSLİĞİ · AR-GE · GÖMÜLÜ SİSTEMLER · YAZILIM
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* 7. Alt Scroll Göstergesi (Aşağı Kaydır ↓) */}
      <div className="w-full flex flex-col items-center justify-center pb-2 select-none pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: easeNatural }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[11px] sm:text-[12px] font-semibold text-[#9A8763] tracking-[0.2em] uppercase">
            AŞAĞI KAYDIR
          </span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#9A8763] text-[14px] leading-none"
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

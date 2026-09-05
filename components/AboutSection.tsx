"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection: React.FC = () => {
  const easeNatural = [0.22, 1, 0.36, 1];

  const titleLines = [
    { text: "ÖĞRENİYORUM.", className: "font-extrabold block text-[#171717]" },
    { text: "ÜRETİYORUM.", className: "font-extrabold block text-[#171717]" },
    { text: "İNŞA EDİYORUM.", className: "font-semibold block text-[#625D55]" },
  ];

  return (
    <section className="bg-[#F6F2EA] border-b border-[#DED8CC] py-20 md:py-28 overflow-hidden select-none">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Sol Kolon: Başlık (5 Kolon) - Line by Line Reveal */}
          <div className="lg:col-span-5">
            {/* Section label (opacity 0 -> 1, translateY 10px -> 0) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, ease: easeNatural }}
              className="text-[11px] font-semibold text-[#9A8763] uppercase tracking-[0.14em] mb-4"
            >
              KİMLİK &amp; YAKLAŞIM
            </motion.div>

            {/* Line-by-Line Headline Stagger (~80ms) */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05]">
              {titleLines.map((line, idx) => (
                <span key={line.text} className="block overflow-hidden">
                  <motion.span
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{
                      duration: 0.55,
                      delay: 0.08 + idx * 0.08,
                      ease: easeNatural,
                    }}
                    className={line.className}
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h2>
          </div>

          {/* Sağ Kolon: 2 Dengeli Paragraf & CV Linki (7 Kolon) - Heading bittikten ~120ms sonra */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: 0.28, ease: easeNatural }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 text-[17px] sm:text-[19px] text-[#625D55] leading-[1.7]"
          >
            <p className="mobile-justify text-justify md:text-left [text-justify:inter-word] hyphens-auto">
              Sakarya Uygulamalı Bilimler Üniversitesi&apos;nde Bilgisayar Mühendisliği eğitimi alıyorum. Teorik bilgiyi yalnızca sınav kağıtlarında bırakmayıp; gömülü sistemler, kablosuz haberleşme ve yazılım mimarilerini fiziksel dünyanın acil ihtiyaçlarına yanıt veren çalışan sistemlere dönüştürüyorum.
            </p>
            <p className="mobile-justify text-justify md:text-left [text-justify:inter-word] hyphens-auto">
              GSM şebekelerinin çöktüğü afet senaryolarında telefonları telsiz ağına dönüştüren P2P mesh protokollerinden, enkaz altındaki canların sinyallerini Kalman filtresiyle tespit eden patent başvurusu yapılmış konumlandırma donanımlarına kadar her çalışmamı sahada gerçek bir katma değer üretme disipliniyle geliştiriyorum.
            </p>

            {/* CV Aç Linki with Underline Reveal Pattern */}
            <div className="pt-6 border-t border-[#DED8CC] w-full flex items-center justify-between">
              <Link
                href="/cv"
                className="group inline-flex items-center text-[13px] font-semibold text-[#171717] tracking-wide uppercase hover:text-[#9A8763] transition-colors duration-200"
                id="about-cv-link"
              >
                <span className="link-underline-reveal">CV&apos;Yİ AÇ</span>
                <ArrowRight size={14} className="ml-2 text-[#9A8763] transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
              </Link>
              <span className="text-[12px] text-[#625D55] tracking-wide">
                Eğitim · Deneyim · Yetkinlikler · Patent
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

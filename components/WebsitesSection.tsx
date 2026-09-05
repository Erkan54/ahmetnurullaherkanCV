"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface WebsiteItem {
  id: string;
  number: string;
  name: string;
  domain: string;
  url: string;
  description: string;
  role: string;
  imageSrc: string;
}

export const WebsitesSection: React.FC = () => {
  const [imgErrors, setImgErrors] = useState<{ [key: string]: boolean }>({});
  const easeNatural = [0.22, 1, 0.36, 1];

  const handleImgError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const websites: WebsiteItem[] = [
    {
      id: "web-huzur",
      number: "01",
      name: "Huzur Atölyem",
      domain: "huzuratolyem.com",
      url: "https://huzuratolyem.com",
      description: "Özel tasarım el yapımı ürünler ve atölye koleksiyonları için tasarlanıp geliştirilen modern e-ticaret ve tanıtım platformu.",
      role: "Arayüz Tasarımı · Web Geliştirme · Altyapı",
      imageSrc: "/assets/web-huzuratolyem.jpg",
    },
    {
      id: "web-cizgimekanik",
      number: "02",
      name: "Teknoser Çizgi Mekanik",
      domain: "cizgimekanik.com",
      url: "https://cizgimekanik.com",
      description: "1954'ten bu yana Sakarya'da endüstriyel ısıtma, soğutma, yangın tesisatı ve chiller sistemleri kurulumu yapan firmanın 70 yıllık tecrübesini yansıtan premium kurumsal web mimarisi.",
      role: "Endüstriyel Web · Kurumsal Mimari · SEO",
      imageSrc: "/assets/web-cizgimekanik.jpg",
    },
  ];

  return (
    <section className="bg-[#F5F1E8] border-b border-[#DED8CC] py-20 md:py-28 overflow-hidden select-none">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Bölüm Başlığı */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 pb-4 border-b border-[#DED8CC] gap-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.5, ease: easeNatural }}
              className="text-[11px] font-semibold text-[#9A8763] uppercase tracking-[0.14em] mb-2"
            >
              CANLI PROJELER
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.65, delay: 0.08, ease: easeNatural }}
              className="font-heading text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight leading-tight py-1"
            >
              WEB SİTELERİM
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: easeNatural }}
            className="text-[12px] text-[#625D55]"
          >
            Müşteriler ve işletmeler için hayata geçirilen çalışan web platformları
          </motion.div>
        </div>

        {/* 2 Büyük Editoryal Kart (Kademeli Staggered Giriş, -4px Hover Lift) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {websites.map((site, index) => {
            const hasError = imgErrors[site.id];

            return (
              <motion.article
                key={site.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6% 0px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.10,
                  ease: easeNatural,
                }}
                className="group flex flex-col justify-between bg-white border-2 border-[#DED8CC] hover:border-[#B8B0A0] rounded-[10px] overflow-hidden transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 shadow-[0_2px_12px_rgba(32,32,29,0.02)] hover:shadow-[0_8px_24px_rgba(32,32,29,0.05)]"
              >
                {/* Temiz Editoryal Website Preview (scale 1 -> 1.02, overflow: hidden, Mockup Yok) */}
                <div className="relative w-full aspect-[16/10] bg-[#FBFAF7] border-b-2 border-[#DED8CC] overflow-hidden flex items-center justify-center">
                  {!hasError ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={site.imageSrc}
                      alt={site.name}
                      onError={() => handleImgError(site.id)}
                      className="w-full h-full object-cover object-top transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="p-6 text-center select-none">
                      <div className="text-[11px] font-semibold text-[#171717] tracking-wide uppercase mb-1">
                        [Görsel Alanı: {site.imageSrc.replace("/assets/", "")}]
                      </div>
                      <p className="text-[11px] text-[#625D55]">
                        Site ekran görüntüsünü <code className="font-semibold text-[#171717]">{site.imageSrc.replace("/", "")}</code> olarak ekleyiniz.
                      </p>
                    </div>
                  )}
                </div>

                {/* İçerik */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Numara & Rol */}
                    <div className="flex items-center justify-between gap-4 text-[11px] font-medium tracking-[0.08em] uppercase mb-3.5 pb-2.5 border-b border-[#DED8CC]/60">
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-[4px] bg-[#9A8763]/12 border border-[#9A8763]/25 text-[#9A8763] font-heading font-extrabold text-[12px] tracking-wider">
                          {site.number}
                        </span>
                      </div>
                      <span className="text-right text-[10.5px] sm:text-[11px] text-[#625D55] font-medium leading-snug">
                        {site.role}
                      </span>
                    </div>

                    {/* Site Adı */}
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#171717] tracking-tight leading-snug mb-1 group-hover:text-[#20201D] transition-colors py-0.5">
                      {site.name}
                    </h3>

                    {/* Domain (Hover opacity .7 -> 1) */}
                    <div className="text-[13px] text-[#9A8763] font-medium mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-250">
                      {site.domain}
                    </div>

                    {/* Kısa Açıklama */}
                    <p className="text-[14px] sm:text-[15px] text-[#625D55] leading-relaxed mb-6 font-normal mobile-justify text-justify md:text-left [text-justify:inter-word] hyphens-auto">
                      {site.description}
                    </p>
                  </div>

                  {/* Siteyi Ziyaret Et Linki (Arrow translateX 4px on hover) */}
                  <div className="pt-4 border-t border-[#DED8CC]/60 flex items-center justify-between">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[12px] font-semibold text-[#171717] tracking-wide uppercase hover:text-[#9A8763] transition-colors duration-200 group/link"
                    >
                      <span className="link-underline-reveal">SİTEYİ ZİYARET ET</span>
                      <ArrowUpRight size={13} className="ml-1 text-[#9A8763] transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5" />
                    </a>
                    <span className="text-[11px] text-[#625D55]">{site.domain}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

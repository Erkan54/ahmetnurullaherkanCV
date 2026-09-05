"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface NewsItem {
  id: string;
  source: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  url: string;
  imageSrc: string;
  imageAlt: string;
}

export const NewsSection: React.FC = () => {
  const [imgErrors, setImgErrors] = useState<{ [key: string]: boolean }>({});
  const easeNatural = [0.22, 1, 0.36, 1];

  const handleImgError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const news: NewsItem[] = [
    {
      id: "haber-1",
      source: "Medyabar",
      date: "25 Temmuz 2026",
      category: "AR-GE & İNOVASYON",
      title: "Genç mühendis adayından bir yenilik daha! Depremzedenin konumu 3 boyutlu olarak tespit edilecek!",
      summary:
        "Ahmet Nurullah Erkan'ın geliştirdiği afet iletişim uygulamasına eklediği donanım sistemiyle enkaz altındaki kişilerin konumunun 3 boyutlu olarak tespit edilmesini hedefleyen çalışma.",
      url: "https://medyabar.com/haber/28394669/genc-muhendis-adayindan-bir-yenilik-daha-depremzedenin-konumu-3-boyutlu-olarak-tespit-edilecek",
      imageSrc: "/assets/haber-1.jpg",
      imageAlt: "Enkaz Konumlandırma Sistemi Haberi",
    },
    {
      id: "haber-2",
      source: "Medyabar",
      date: "6 Mart 2026",
      category: "AFET TEKNOLOJİLERİ",
      title: "Sakaryalı genç mühendis adayı geliştirdiği deprem uygulamasıyla korku dolu anları engellemek istiyor",
      summary:
        "İnternet ve GSM altyapısı çöktüğünde Bluetooth ve Wi-Fi Direct ile telefonları birbirine bağlayan P2P Afet İletişim Ağı mobil uygulamasının ulusal basındaki yankısı.",
      url: "https://medyabar.com/haber/27871604/sakaryali-genc-muhendis-adayi-gelistirdigi-deprem-uygulamasiyla-korku-dolu-anlari-engellemek-istiyor",
      imageSrc: "/assets/haber-2.jpg",
      imageAlt: "Afet İletişim Ağı Haberi",
    },
  ];

  return (
    <section className="bg-[#FBFAF7] border-b border-[#DED8CC] py-20 md:py-28 overflow-hidden select-none">
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
              BASIN YANSIMALARI
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.65, delay: 0.08, ease: easeNatural }}
              className="font-heading text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight"
            >
              YER ALDIĞIM HABERLER
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: easeNatural }}
            className="text-[12px] text-[#625D55]"
          >
            Geliştirilen Ar-Ge sistemlerinin basındaki ulusal haberleri
          </motion.div>
        </div>

        {/* 2 Editoryal Haber Kartı (1. kart -> 100ms -> 2. kart reveal, -4px hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {news.map((item, index) => {
            const hasError = imgErrors[item.id];

            return (
              <motion.article
                key={item.id}
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
                {/* Görsel Alanı: scale(1) -> scale(1.025), transition: 400ms */}
                <div className="relative w-full aspect-[16/9] bg-[#F5F1E8] border-b-2 border-[#DED8CC] overflow-hidden flex items-center justify-center">
                  {!hasError ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      onError={() => handleImgError(item.id)}
                      className="w-full h-full object-cover transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                    />
                  ) : (
                    <div className="p-6 text-center select-none">
                      <div className="text-[11px] font-semibold text-[#171717] tracking-wide uppercase mb-1">
                        [Görsel Alanı: {item.imageSrc.replace("/assets/", "")}]
                      </div>
                      <p className="text-[11px] text-[#625D55]">
                        Haber görselini <code className="font-semibold text-[#171717]">{item.imageSrc.replace("/", "")}</code> konumuna ekleyiniz.
                      </p>
                    </div>
                  )}
                </div>

                {/* Kart İçeriği (Görsel üstüne bindirilmemiş) */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Kaynak & Tarih & Kategori */}
                    <div className="flex items-center justify-between text-[11px] font-medium text-[#625D55] tracking-[0.08em] uppercase mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#171717]">{item.source}</span>
                        <span>·</span>
                        <span>{item.date}</span>
                      </div>
                      <span className="text-[#9A8763] font-semibold">{item.category}</span>
                    </div>

                    {/* Başlık */}
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#171717] tracking-tight leading-snug mb-3 group-hover:text-[#20201D] transition-colors duration-200">
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    </h3>

                    {/* Kısa Özet */}
                    <p className="text-[14px] sm:text-[15px] text-[#625D55] leading-relaxed mb-6 font-normal">
                      {item.summary}
                    </p>
                  </div>

                  {/* Haberi Oku Linki */}
                  <div className="pt-4 border-t border-[#DED8CC]/60 flex items-center justify-between">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[12px] font-semibold text-[#171717] tracking-wide uppercase hover:text-[#9A8763] transition-colors duration-200 group/link"
                    >
                      <span className="link-underline-reveal">HABERİ OKU</span>
                      <ArrowUpRight size={13} className="ml-1 text-[#9A8763] transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                    <span className="text-[11px] text-[#625D55]">medyabar.com</span>
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

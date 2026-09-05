"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Radio, Star } from "lucide-react";
import { motion } from "framer-motion";

export const AfetBadge: React.FC = () => {
  const [logoSrc, setLogoSrc] = useState<string>("/assets/afet-logo.png");
  const [logoFailed, setLogoFailed] = useState<boolean>(false);

  const easeNatural = [0.22, 1, 0.36, 1];

  const handleLogoError = () => {
    if (logoSrc === "/assets/afet-logo.png") {
      setLogoSrc("/assets/afet-logo.jpg");
    } else if (logoSrc === "/assets/afet-logo.jpg") {
      setLogoSrc("/assets/afet-logo.webp");
    } else if (logoSrc === "/assets/afet-logo.webp") {
      setLogoSrc("/assets/afet-logo.svg");
    } else {
      setLogoFailed(true);
    }
  };

  return (
    <section className="bg-[#FBFAF7] border-b border-[#DED8CC] py-12 sm:py-16 lg:py-24 overflow-hidden select-none">
      <div className="max-w-container mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* ========================================================================= */}
        {/* 1. RESPONSIVE / MOBİL VE TABLET ÖZEL KART TASARIMI (lg:hidden)            */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: easeNatural }}
          className="lg:hidden relative bg-[#20201D]/95 backdrop-blur-md text-[#F5F1E8] rounded-[16px] sm:rounded-[20px] p-5 sm:p-7 border border-white/10 shadow-[0_16px_40px_rgba(32,32,29,0.12)] overflow-hidden flex flex-col gap-5"
        >
          {/* Arka Plan Hafif Radyal Altın İşıması */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#9A8763]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-52 h-52 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

          {/* 1. Başlık ve Uygulama Logosu */}
          <div className="relative z-10 flex items-center gap-3.5 sm:gap-4">
            {/* Uygulama Logosu (%10 dengeli iç boşluk) */}
            <div className="w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] rounded-[15px] p-[1px] bg-gradient-to-br from-[#B6A27C]/80 via-white/10 to-[#453c29] shadow-lg shrink-0 overflow-hidden flex items-center justify-center bg-[#191917]">
              {!logoFailed ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={logoSrc}
                  alt="Afet İletişim Ağı Logosu"
                  onError={handleLogoError}
                  className="w-full h-full object-contain rounded-[14px]"
                />
              ) : (
                <div className="w-full h-full rounded-[14px] bg-[#20201D] flex items-center justify-center text-[#B6A27C]">
                  <Radio size={26} className="text-[#B6A27C]" />
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <h3 className="font-heading text-[22px] sm:text-[26px] font-extrabold text-white tracking-tight leading-tight">
                AFET İLETİŞİM AĞI
              </h3>
              <p className="text-[12px] sm:text-[13px] font-semibold text-[#B6A27C] tracking-wide uppercase mt-0.5">
                İnternetsiz &amp; GSM Bağımsız P2P Haberleşme
              </p>
            </div>
          </div>

          {/* 2. İki Sütunlu Sayısal Metrik Kartları (5.000+ & 4.8★) */}
          <div className="relative z-10 grid grid-cols-2 gap-2.5">
            <div className="p-3.5 sm:p-4 rounded-[10px] bg-white/[0.04] border border-white/10 flex flex-col justify-center transition-colors">
              <span className="font-heading text-[26px] sm:text-[28px] font-extrabold text-white leading-none">
                5.000+
              </span>
              <div className="mt-2 flex flex-col">
                <span className="text-[11px] font-semibold text-[#B6A27C]">İndirme Sayısı</span>
                <span className="text-[10px] text-white/45 mt-0.5">Google Play Store</span>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-[10px] bg-white/[0.04] border border-white/10 flex flex-col justify-center transition-colors">
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-[26px] sm:text-[28px] font-extrabold text-white leading-none">
                  4.8
                </span>
                <Star size={16} className="fill-[#B6A27C] text-[#B6A27C]" />
              </div>
              <div className="mt-2 flex flex-col">
                <span className="text-[11px] font-semibold text-[#B6A27C]">Kullanıcı Puanı</span>
                <span className="text-[10px] text-white/45 mt-0.5">47 doğrulanmış oy</span>
              </div>
            </div>
          </div>

          {/* 3. Açıklama Paragrafı */}
          <p className="relative z-10 text-[14px] sm:text-[15px] text-white/80 leading-relaxed font-normal mobile-justify text-justify md:text-left [text-justify:inter-word] hyphens-auto">
            Deprem anında baz istasyonları çöktüğünde; akıllı telefonların Bluetooth ve Wi-Fi Direct ile birbirini aktarıcı olarak kullandığı, enkaz altından ses ve konum ileten P2P afet ağı çözümü.
          </p>

          {/* 4. Teknik Özellik Rozetleri (Chips) */}
          <div className="relative z-10 flex flex-wrap gap-1.5">
            <span className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/90">
              Wi-Fi Direct
            </span>
            <span className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/90">
              Bluetooth LE Mesh
            </span>
            <span className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/90">
              Enkaz Acil Beacon
            </span>
            <span className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#B6A27C]/15 border border-[#B6A27C]/30 text-[#B6A27C]">
              GSM Gerektirmez
            </span>
          </div>

          {/* 5. Ergonomik Thumb-Zone Butonları */}
          <div className="relative z-10 flex flex-col gap-2.5 pt-2 border-t border-white/10">
            <a
              href="https://play.google.com/store/apps/details?id=com.afetiletisim.deprem"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center h-[48px] px-6 rounded-[8px] bg-[#9A8763] hover:bg-[#a99570] text-[#20201D] font-heading text-[13px] font-bold tracking-wider transition-all duration-200 active:scale-[0.99] shadow-sm"
              id="afet-google-play-cta-mobile"
            >
              <span>GOOGLE PLAY&apos;DE İNCELE</span>
              <ArrowUpRight size={16} className="ml-1.5 text-[#20201D]" />
            </a>

            <Link
              href="/projeler/afet-iletisim-agi"
              className="w-full inline-flex items-center justify-center h-[44px] px-6 rounded-[8px] border border-white/15 bg-white/[0.04] text-[#F5F1E8] text-[13px] font-medium tracking-wide hover:bg-white/[0.08] transition-all"
            >
              <span>Proje Mimarisini İncele</span>
              <ArrowRight size={14} className="ml-1.5 text-[#B6A27C]" />
            </Link>
          </div>
        </motion.div>


        {/* ========================================================================= */}
        {/* 2. MASAÜSTÜ KART TASARIMI (hidden lg:block)                                */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: easeNatural }}
          className="hidden lg:block bg-[#20201D]/90 backdrop-blur-sm text-[#F5F1E8] rounded-[16px] p-12 xl:p-16 border border-white/10 shadow-[0_16px_40px_rgba(32,32,29,0.08)] relative overflow-hidden"
        >
          {/* Masaüstü Arka Plan İşıması */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#9A8763]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Sol: Başlık & Amaç & CTA (7 Kolon) */}
            <div className="col-span-7 flex flex-col items-start">
              {/* 1. Küçük Üst Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: easeNatural }}
                className="inline-flex items-center gap-2 mb-4 text-[11px] font-semibold text-[#B6A27C] uppercase tracking-[0.14em]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B6A27C]" />
                <span>ÖNE ÇIKAN SAHA BAŞARISI</span>
                <span className="text-white/30">·</span>
                <span className="text-white/70">MÜHENDİSLİK ÜRÜNÜ</span>
              </motion.div>

              {/* 2. Uygulama Logosu & AFET İLETİŞİM AĞI Başlığı */}
              <div className="flex items-center gap-5 mb-3">
                <div className="w-[80px] h-[80px] xl:w-[90px] xl:h-[90px] rounded-[18px] p-[1.5px] bg-gradient-to-br from-[#B6A27C]/80 via-white/10 to-[#453c29] shadow-lg shrink-0 overflow-hidden flex items-center justify-center bg-[#191917]">
                  {!logoFailed ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={logoSrc}
                      alt="Afet İletişim Ağı Logosu"
                      onError={handleLogoError}
                      className="w-full h-full object-contain rounded-[16.5px]"
                    />
                  ) : (
                    <div className="w-full h-full rounded-[16.5px] bg-[#20201D] flex items-center justify-center text-[#B6A27C]">
                      <Radio size={30} className="text-[#B6A27C]" />
                    </div>
                  )}
                </div>

                <div className="flex flex-col">
                  <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.18, ease: easeNatural }}
                    className="font-heading text-[38px] xl:text-[42px] font-extrabold text-white tracking-tight leading-tight"
                  >
                    AFET İLETİŞİM AĞI
                  </motion.h2>

                  <div className="text-[13px] font-semibold text-[#B6A27C] tracking-[0.08em] uppercase mt-1">
                    İNTERNET VE GSM&apos;DEN BAĞIMSIZ AFET HABERLEŞME UYGULAMASI
                  </div>
                </div>
              </div>

              {/* 3. Açıklama */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.30, ease: easeNatural }}
                className="text-[16px] text-white/80 leading-relaxed max-w-[560px] mb-8 font-normal mt-2"
              >
                Deprem gibi kriz anlarında baz istasyonları devre dışı kaldığında; akıllı telefonların Bluetooth ve Wi-Fi Direct kanallarıyla birbirini aktarıcı olarak kullandığı, enkaz altından ses ve konum ileten P2P afet ağı çözümü.
              </motion.p>

              {/* 6. CTA Butonları */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.54, ease: easeNatural }}
                className="flex items-center gap-4"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.afetiletisim.deprem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center h-[48px] px-7 rounded-[6px] bg-[#9A8763] hover:bg-[#a99570] text-[#20201D] font-heading text-[13px] font-bold tracking-wide transition-all duration-200 hover:-translate-y-[1px]"
                  id="afet-google-play-cta"
                >
                  <span>UYGULAMAYI İNCELE</span>
                  <ArrowUpRight size={15} className="ml-1.5 transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </a>

                <Link
                  href="/projeler/afet-iletisim-agi"
                  className="group inline-flex items-center justify-center h-[48px] px-6 rounded-[6px] border border-white/20 hover:border-white/40 bg-transparent text-white/90 hover:text-white text-[13px] font-medium tracking-wide transition-all duration-200"
                >
                  <span>MİMARİYİ İNCELE</span>
                  <ArrowRight size={14} className="ml-1.5 text-[#B6A27C] transition-transform duration-250 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Sağ: Sayısal Doğrulanmış Metrikler (5 Kolon) */}
            <div className="col-span-5 grid grid-cols-2 gap-4 border-l border-white/10 pl-10">
              
              {/* 4. 5.000+ Stat Box */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.38, ease: easeNatural }}
                className="p-5 rounded-[8px] bg-white/[0.04] border border-white/10 transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px]"
              >
                <div className="font-heading text-4xl font-extrabold text-white mb-1">
                  5.000+
                </div>
                <div className="text-[11px] font-semibold text-[#B6A27C] uppercase tracking-[0.08em]">
                  Canlı İndirme
                </div>
                <div className="text-[11px] text-white/50 mt-1">
                  Google Play Store
                </div>
              </motion.div>

              {/* 5. 4.8★ Stat Box */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.46, ease: easeNatural }}
                className="p-5 rounded-[8px] bg-white/[0.04] border border-white/10 transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px]"
              >
                <div className="font-heading text-4xl font-extrabold text-white mb-1">
                  4.8 ★
                </div>
                <div className="text-[11px] font-semibold text-[#B6A27C] uppercase tracking-[0.08em]">
                  Kullanıcı Puanı
                </div>
                <div className="text-[11px] text-white/50 mt-1">
                  47 doğrulanmış inceleme
                </div>
              </motion.div>

              {/* Alt Mesh Protokolü Bloğu */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.52, ease: easeNatural }}
                className="p-5 rounded-[8px] bg-white/[0.04] border border-white/10 col-span-2 transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[12px] font-bold text-white tracking-wide uppercase">
                      P2P MESH PROTOKOLÜ
                    </div>
                    <div className="text-[11px] text-white/60 mt-0.5">
                      Wi-Fi Direct &amp; BLE Soket Mimarisi
                    </div>
                  </div>
                  <span className="text-[11px] text-[#B6A27C] font-semibold uppercase tracking-wider">
                    GSM GEREKTİRMEZ
                  </span>
                </div>
              </motion.div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

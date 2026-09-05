"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Download, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CvPage() {
  const easeNatural = [0.22, 1, 0.36, 1];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#171717] select-none">
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: easeNatural }}
        className="flex-1 pt-28 pb-32"
      >
        <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-14">
          
          {/* Sayfa Üst Başlığı & PDF İndirme Butonu */}
          <div className="pb-12 border-b border-[#DED8CC] mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="text-[11px] font-semibold text-[#9A8763] uppercase tracking-[0.14em] mb-2">
                PROFESYONEL ÖZGEÇMİŞ
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight py-1">
                CV &amp; HAKKIMDA
              </h1>
              <div className="text-[15px] sm:text-[16px] text-[#625D55] font-medium mt-2">
                Bilgisayar Mühendisliği Öğrencisi · Gömülü Sistemler · Ar-Ge · Yazılım · Sistemler
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] text-[#625D55] mt-3">
                <a href="mailto:ahmetnurullaherkan@gmail.com" className="hover:text-[#171717] transition-colors">
                  ahmetnurullaherkan@gmail.com
                </a>
                <span>·</span>
                <span>0551 050 96 80</span>
                <span>·</span>
                <span>Sakarya, Türkiye</span>
                <span>·</span>
                <a
                  href="https://github.com/Erkan54"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#171717] hover:text-[#9A8763] inline-flex items-center gap-1 transition-colors"
                >
                  <span>GitHub (@Erkan54)</span>
                  <ArrowUpRight size={13} className="text-[#9A8763]" />
                </a>
              </div>
            </div>

            <a
              href="/Ahmet_Nurullah_Erkan_CV.pdf"
              download="Ahmet_Nurullah_Erkan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center h-[46px] px-6 rounded-[6px] bg-[#20201D]/90 text-[#F5F1E8] text-[13px] font-medium tracking-wide hover:bg-[#20201D] transition-all duration-200 hover:-translate-y-[1px] shadow-sm shrink-0"
              id="download-cv-btn"
            >
              <Download size={15} className="mr-2 text-[#B6A27C]" />
              <span>CV İNDİR (PDF)</span>
            </a>
          </div>

          <div className="max-w-4xl space-y-16">
            
            {/* 1. HAKKIMDA */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeNatural }}
              className="space-y-4"
            >
              <div className="text-[11px] font-bold text-[#9A8763] uppercase tracking-[0.14em]">
                01 · HAKKIMDA
              </div>
              <h2 className="font-heading text-2xl font-bold text-[#171717] tracking-tight">
                Mühendislik Profili
              </h2>
              <div className="space-y-4 text-[16px] sm:text-[17px] text-[#625D55] leading-[1.7] font-normal">
                <p className="mobile-justify text-justify md:text-left [text-justify:inter-word] hyphens-auto">
                  Sakarya Uygulamalı Bilimler Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Yazılım ve gömülü sistemler arasındaki fiziksel köprüleri kurarak gerçek dünyada çalışan teknolojiler geliştiriyorum.
                </p>
                <p className="mobile-justify text-justify md:text-left [text-justify:inter-word] hyphens-auto">
                  Üniversite bünyesinde kurumsal Dell PowerEdge R720 sunucularının yönetimi, donanım laboratuvarlarının bakımı ve işletim sistemi dağıtımı görevlerinde bizzat yer aldım. Teorik temellerimi radyo frekansları, P2P kablosuz mesh ağları ve sinyal işleme tabanlı patentli arama-kurtarma cihazlarına dönüştürerek ürün geliştirme odaklı çalışıyorum.
                </p>
              </div>
            </motion.section>

            {/* 2. EĞİTİM */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeNatural }}
              className="space-y-6 pt-12 border-t border-[#DED8CC]"
            >
              <div className="text-[11px] font-bold text-[#9A8763] uppercase tracking-[0.14em]">
                02 · EĞİTİM
              </div>
              <h2 className="font-heading text-2xl font-bold text-[#171717] tracking-tight">
                Akademik Geçmiş
              </h2>

              <div className="space-y-8">
                {/* Üniversite */}
                <div className="p-6 bg-white border border-[#DED8CC] rounded-[8px]">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#9A8763] uppercase tracking-[0.08em] mb-1.5">
                    <span>2024 — 2028 (DEVAM EDİYOR)</span>
                    <span>LİSANS DERECESİ</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#171717] tracking-tight">
                    Sakarya Uygulamalı Bilimler Üniversitesi (SUBÜ)
                  </h3>
                  <div className="text-[15px] font-medium text-[#625D55] mt-0.5">
                    Bilgisayar Mühendisliği Bölümü
                  </div>
                  <p className="text-[14px] text-[#625D55] mt-3 leading-relaxed mobile-justify text-justify md:text-left [text-justify:inter-word] hyphens-auto">
                    Gömülü sistemler, algoritma analizi, mikroişlemciler, ağ mimarileri ve yazılım mühendisliği temelleri.
                  </p>
                </div>

                {/* Lise */}
                <div className="p-6 bg-white border border-[#DED8CC] rounded-[8px]">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#9A8763] uppercase tracking-[0.08em] mb-1.5">
                    <span>2020 — 2024</span>
                    <span>ORTAÖĞRETİM</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#171717] tracking-tight">
                    Necmettin Erbakan Fen Lisesi
                  </h3>
                  <div className="text-[15px] font-medium text-[#625D55] mt-0.5">
                    Fen Bilimleri &amp; İleri Matematik
                  </div>
                  <p className="text-[14px] text-[#625D55] mt-3 leading-relaxed mobile-justify text-justify md:text-left [text-justify:inter-word] hyphens-auto">
                    İleri matematik, fizik ve temel algoritma mantığı üzerine yoğunlaşmış fen lisesi eğitimi.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* 3. DENEYİM */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeNatural }}
              className="space-y-6 pt-12 border-t border-[#DED8CC]"
            >
              <div className="text-[11px] font-bold text-[#9A8763] uppercase tracking-[0.14em]">
                03 · TEKNİK DENEYİM
              </div>
              <h2 className="font-heading text-2xl font-bold text-[#171717] tracking-tight">
                Uygulamalı Sunucu &amp; Donanım Görevleri
              </h2>

              <div className="space-y-8">
                {/* Görev 1 */}
                <div className="p-6 bg-white border border-[#DED8CC] rounded-[8px]">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#9A8763] uppercase tracking-[0.08em] mb-1.5">
                    <span>MART 2025 — HAZİRAN 2025</span>
                    <span>SİSTEM &amp; SUNUCU</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#171717] tracking-tight">
                    Sunucu &amp; Sistem Destek Uzmanı
                  </h3>
                  <div className="text-[14px] font-semibold text-[#9A8763] mt-0.5">
                    Sakarya Uygulamalı Bilimler Üniversitesi
                  </div>
                  <ul className="mt-4 space-y-2 text-[14px] text-[#625D55]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#9A8763] font-bold">·</span>
                      <span>Dell PowerEdge R720 kurumsal sunucu donanımlarının montajı, bakımı ve fiziksel altyapı yönetimi.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9A8763] font-bold">·</span>
                      <span>VMware ESXi, Proxmox VE ve VirtualBox platformlarında sanallaştırma mimarilerinin kurulumu ve yönetimi.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9A8763] font-bold">·</span>
                      <span>Windows Server ve Linux ortamlarında Active Directory, ağ servisleri ve TrueNAS / Samba depolama yapılandırmaları.</span>
                    </li>
                  </ul>
                </div>

                {/* Görev 2 */}
                <div className="p-6 bg-white border border-[#DED8CC] rounded-[8px]">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#9A8763] uppercase tracking-[0.08em] mb-1.5">
                    <span>KASIM 2025 — MAYIS 2026</span>
                    <span>DONANIM &amp; ALTYAPI</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#171717] tracking-tight">
                    Donanım &amp; Teknik Destek Uzmanı
                  </h3>
                  <div className="text-[14px] font-semibold text-[#9A8763] mt-0.5">
                    Sakarya Uygulamalı Bilimler Üniversitesi
                  </div>
                  <ul className="mt-4 space-y-2 text-[14px] text-[#625D55]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#9A8763] font-bold">·</span>
                      <span>Üniversite laboratuvarlarındaki iş istasyonlarının donanım arıza tespiti, parça değişimi ve periyodik bakımı.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#9A8763] font-bold">·</span>
                      <span>Ağ üzerinden toplu işletim sistemi kurulumu (image deployment), lisanslama ve laboratuvar yazılım altyapısının sürdürülmesi.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* 4. TEKNİK YETKİNLİKLER (Kategorize, Sade Tipografi) */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeNatural }}
              className="space-y-6 pt-12 border-t border-[#DED8CC]"
            >
              <div className="text-[11px] font-bold text-[#9A8763] uppercase tracking-[0.14em]">
                04 · TEKNİK YETKİNLİKLER
              </div>
              <h2 className="font-heading text-2xl font-bold text-[#171717] tracking-tight">
                Mühendislik Araçları &amp; Bilgi Alanları
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="p-5 bg-white border border-[#DED8CC] rounded-[8px]">
                  <div className="text-[11px] font-bold text-[#9A8763] uppercase tracking-[0.08em] mb-2">
                    YAZILIM DİLLERİ &amp; ÇATILAR
                  </div>
                  <div className="text-[14px] font-medium text-[#171717] leading-relaxed">
                    C++, Python, JavaScript, Node.js, SQL, HTML, CSS, Kotlin
                  </div>
                </div>

                <div className="p-5 bg-white border border-[#DED8CC] rounded-[8px]">
                  <div className="text-[11px] font-bold text-[#9A8763] uppercase tracking-[0.08em] mb-2">
                    GÖMÜLÜ SİSTEMLER
                  </div>
                  <div className="text-[14px] font-medium text-[#171717] leading-relaxed">
                    ESP32, Embedded C++, Microcontrollers, IoT, Sensör Entegrasyonu
                  </div>
                </div>

                <div className="p-5 bg-white border border-[#DED8CC] rounded-[8px]">
                  <div className="text-[11px] font-bold text-[#9A8763] uppercase tracking-[0.08em] mb-2">
                    AĞ &amp; KABLOSUZ İLETİŞİM
                  </div>
                  <div className="text-[14px] font-medium text-[#171717] leading-relaxed">
                    P2P, BLE (Bluetooth Low Energy), Wi-Fi Direct, RF Mesh Mimarileri
                  </div>
                </div>

                <div className="p-5 bg-white border border-[#DED8CC] rounded-[8px]">
                  <div className="text-[11px] font-bold text-[#9A8763] uppercase tracking-[0.08em] mb-2">
                    SUNUCU &amp; SİSTEM YÖNETİMİ
                  </div>
                  <div className="text-[14px] font-medium text-[#171717] leading-relaxed">
                    Windows Server, Linux, VMware ESXi, Proxmox VE, TrueNAS, Samba
                  </div>
                </div>

                <div className="p-5 bg-white border border-[#DED8CC] rounded-[8px] sm:col-span-2">
                  <div className="text-[11px] font-bold text-[#9A8763] uppercase tracking-[0.08em] mb-2">
                    AR-GE &amp; SİNYAL İŞLEME
                  </div>
                  <div className="text-[14px] font-medium text-[#171717] leading-relaxed">
                    Signal Processing, Kalman Filtering, Outlier Gating, 3D Konumlandırma Hesaplamaları
                  </div>
                </div>

              </div>
            </motion.section>

            {/* 5. PATENT BAŞVURUSU (Özel Vurgulu Alan) */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeNatural }}
              className="pt-12 border-t border-[#DED8CC]"
            >
              <div className="p-8 bg-white border-2 border-[#9A8763]/50 rounded-[10px] shadow-[0_8px_30px_rgba(32,32,29,0.03)]">
                <div className="flex items-center justify-between text-[11px] font-semibold text-[#9A8763] uppercase tracking-[0.14em] mb-3">
                  <span>TÜRK PATENT VE MARKA KURUMU</span>
                  <span className="font-bold">BAŞVURU NO: 2026/010920</span>
                </div>

                <div className="text-[12px] font-bold text-[#625D55] uppercase tracking-wide mb-2">
                  RESMİ BULUŞ BAŞLIĞI
                </div>

                <h3 className="font-heading text-base sm:text-lg font-bold text-[#171717] tracking-tight leading-snug mb-4 py-0.5">
                  &ldquo;Doğal Afetler Sonrasında Enkaz Altında Kalan Canlıların Yerini Elektromanyetik Dalgalar Aracılığıyla Tespit Eden Kablosuz Arama Kurtarma Konumlandırma Sistemi ve Yöntemi&rdquo;
                </h3>

                <p className="text-[14px] text-[#625D55] leading-relaxed mobile-justify text-justify md:text-left [text-justify:inter-word] hyphens-auto">
                  Enkaz altına girmeden dışarıdan yerleştirilen yönlü alıcı modüller ve kazazedenin telefonundan yayılan elektromanyetik sinyaller üzerinden 3 eksenli (X, Y, Z derinlik) konumu Kalman filtreleme ile tespit eden patentli arama-kurtarma sistemi.
                </p>
              </div>
            </motion.section>

            {/* 6. BASIN & MEDYA */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeNatural }}
              className="space-y-4 pt-12 border-t border-[#DED8CC]"
            >
              <div className="text-[11px] font-bold text-[#9A8763] uppercase tracking-[0.14em]">
                06 · BASIN &amp; MEDYA
              </div>
              <h2 className="font-heading text-2xl font-bold text-[#171717] tracking-tight">
                Ulusal Basında Yer Alan Çalışmalar
              </h2>

              <div className="space-y-3">
                <a
                  href="https://medyabar.com/haber/28394669/genc-muhendis-adayindan-bir-yenilik-daha-depremzedenin-konumu-3-boyutlu-olarak-tespit-edilecek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white border border-[#DED8CC] rounded-[8px] flex items-center justify-between group hover:border-[#9A8763] transition-colors"
                >
                  <div>
                    <div className="text-[11px] text-[#9A8763] font-semibold uppercase">Medyabar · 25 Temmuz 2026</div>
                    <div className="text-[15px] font-bold text-[#171717] group-hover:text-[#9A8763] transition-colors mt-0.5">
                      Genç mühendis adayından bir yenilik daha! Depremzedenin konumu 3 boyutlu olarak tespit edilecek!
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-[#9A8763] shrink-0 ml-4" />
                </a>

                <a
                  href="https://medyabar.com/haber/27871604/sakaryali-genc-muhendis-adayi-gelistirdigi-deprem-uygulamasiyla-korku-dolu-anlari-engellemek-istiyor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white border border-[#DED8CC] rounded-[8px] flex items-center justify-between group hover:border-[#9A8763] transition-colors"
                >
                  <div>
                    <div className="text-[11px] text-[#9A8763] font-semibold uppercase">Medyabar · 6 Mart 2026</div>
                    <div className="text-[15px] font-bold text-[#171717] group-hover:text-[#9A8763] transition-colors mt-0.5">
                      Sakaryalı genç mühendis adayı geliştirdiği deprem uygulamasıyla korku dolu anları engellemek istiyor
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-[#9A8763] shrink-0 ml-4" />
                </a>
              </div>
            </motion.section>

          </div>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
}

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CareerStrip } from "@/components/CareerStrip";
import { AboutSection } from "@/components/AboutSection";
import { NewsSection } from "@/components/NewsSection";
import { WebsitesSection } from "@/components/WebsitesSection";
import { AfetBadge } from "@/components/AfetBadge";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#171717]">
      {/* 1. Opaque Dark Charcoal Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Kariyer Şeridi (2020 Lise -> 2026 Patent) */}
        <CareerStrip />

        {/* 4. Kısa Hakkımda ("Öğreniyorum. Üretiyorum. İnşa ediyorum.") */}
        <AboutSection />

        {/* 5. Haberler (2 Medyabar Basın Kartı) */}
        <NewsSection />

        {/* 6. Web Sitelerim (Huzur Atölyem & Sakarya Matalp Gül Hukuk) */}
        <WebsitesSection />

        {/* 7. Afet İletişim Ağı (Ayrı Başarı Badge'i / Bölümü) */}
        <AfetBadge />

        {/* 8. İletişim (Ana Sayfanın Altında) */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#171717]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-32 px-6">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="text-[11px] font-bold text-[#8C7A5A] uppercase tracking-[0.16em]">
            HATA 404 · SAYFA BULUNAMADI
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#171717] tracking-tight">
            Sayfa Mevcut Değil
          </h1>

          <p className="text-[#5F5A52] text-[15px] sm:text-[16px] leading-relaxed">
            Aradığınız sayfa taşınmış, silinmiş veya bağlantı adresi değişmiş olabilir. Ana sayfaya veya projeler listesine dönebilirsiniz.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center h-[46px] px-6 rounded-[6px] bg-[#20201D]/90 text-[#F5F1E8] text-[13px] font-medium tracking-wide hover:bg-[#20201D] transition-all w-full sm:w-auto"
            >
              <ArrowLeft size={14} className="mr-2 text-[#8C7A5A]" />
              <span>Ana Sayfaya Dön</span>
            </Link>

            <Link
              href="/projeler"
              className="inline-flex items-center justify-center h-[46px] px-6 rounded-[6px] border border-[#DED8CC] bg-white text-[#171717] text-[13px] font-medium tracking-wide hover:border-[#8C7A5A] transition-all w-full sm:w-auto"
            >
              <span>Projeleri İncele</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

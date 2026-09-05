"use client";

import React from "react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const ContactSection: React.FC = () => {
  const easeNatural = [0.22, 1, 0.36, 1];

  return (
    <section id="iletisim" className="bg-[#F5F1E8] border-b border-[#DED8CC] py-20 md:py-28 scroll-mt-20 overflow-hidden select-none">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Üst Başlık with Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: easeNatural }}
          className="mb-12 pb-4 border-b border-[#DED8CC]"
        >
          <div className="text-[11px] font-semibold text-[#9A8763] uppercase tracking-[0.14em] mb-2">
            DOĞRUDAN İLETİŞİM
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight">
            İLETİŞİM
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Sol Kolon: Tanıtım & Mesaj (6 Kolon) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: easeNatural }}
            className="lg:col-span-6 space-y-4"
          >
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#171717] tracking-tight">
              Birlikte bir teknoloji inşa edelim.
            </h3>
            <p className="text-[16px] sm:text-[17px] text-[#625D55] leading-relaxed font-normal max-w-lg">
              Ar-Ge projeleri, donanım/yazılım sistemleri, staj veya mühendislik iş birlikleri için bana doğrudan telefon veya e-posta yoluyla ulaşabilirsiniz.
            </p>
            <div className="pt-4 text-[12px] text-[#9A8763] font-semibold uppercase tracking-wider">
              KONUM: SAKARYA / TÜRKİYE · YANIT SÜRESİ: GENELLİKLE 24 SAAT
            </div>
          </motion.div>

          {/* Sağ Kolon: Doğrudan İletişim Kanalları (6 Kolon) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* E-posta */}
            <motion.a
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease: easeNatural }}
              href="mailto:ahmetnurullaherkan@gmail.com"
              className="group p-5 bg-white border border-[#DED8CC] hover:border-[#B8B0A0] rounded-[8px] flex items-center justify-between transition-all duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] shadow-[0_2px_8px_rgba(32,32,29,0.02)]"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-[6px] bg-[#FBFAF7] border border-[#DED8CC] flex items-center justify-center text-[#9A8763] group-hover:bg-[#9A8763]/10 transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-[#625D55] uppercase tracking-wide">E-POSTA</div>
                  <div className="text-[15px] sm:text-[16px] font-bold text-[#171717] tracking-tight group-hover:text-[#9A8763] transition-colors">
                    ahmetnurullaherkan@gmail.com
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[#9A8763] transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </motion.a>

            {/* Telefon */}
            <motion.a
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease: easeNatural }}
              href="tel:+905510509680"
              className="group p-5 bg-white border border-[#DED8CC] hover:border-[#B8B0A0] rounded-[8px] flex items-center justify-between transition-all duration-280 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] shadow-[0_2px_8px_rgba(32,32,29,0.02)]"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-[6px] bg-[#FBFAF7] border border-[#DED8CC] flex items-center justify-center text-[#9A8763] group-hover:bg-[#9A8763]/10 transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-[#625D55] uppercase tracking-wide">TELEFON</div>
                  <div className="text-[15px] sm:text-[16px] font-bold text-[#171717] tracking-tight group-hover:text-[#9A8763] transition-colors">
                    +90 551 050 96 80
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[#9A8763] transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </motion.a>

            {/* Dijital Kanallar (LinkedIn, GitHub, Play Store) with 2x Enlarged Official Logos */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease: easeNatural }}
              className="grid grid-cols-3 gap-3 pt-2"
            >
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ahmet-nurullah-erkan-aa5395392"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 bg-white border border-[#DED8CC] hover:border-[#0A66C2]/40 rounded-[10px] flex flex-col items-center justify-center text-center hover:-translate-y-[3px] transition-all duration-200 group shadow-[0_2px_8px_rgba(32,32,29,0.02)] hover:shadow-[0_8px_20px_rgba(10,102,194,0.08)]"
              >
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center mb-2.5 text-[#0A66C2] group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
                <div className="text-[13px] sm:text-[14px] font-bold text-[#171717] group-hover:text-[#0A66C2] transition-colors leading-tight">LinkedIn</div>
                <div className="text-[11px] sm:text-[12px] text-[#625D55] mt-0.5">Profil</div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Erkan54"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 bg-white border border-[#DED8CC] hover:border-[#181717]/40 rounded-[10px] flex flex-col items-center justify-center text-center hover:-translate-y-[3px] transition-all duration-200 group shadow-[0_2px_8px_rgba(32,32,29,0.02)] hover:shadow-[0_8px_20px_rgba(24,23,23,0.08)]"
              >
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-[#181717]/8 flex items-center justify-center mb-2.5 text-[#181717] group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#181717]" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </div>
                <div className="text-[13px] sm:text-[14px] font-bold text-[#171717] group-hover:text-[#181717] transition-colors leading-tight">GitHub</div>
                <div className="text-[11px] sm:text-[12px] text-[#625D55] mt-0.5">Projeler</div>
              </a>

              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.afetiletisim.deprem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 bg-white border border-[#DED8CC] hover:border-[#00D7FF]/40 rounded-[10px] flex flex-col items-center justify-center text-center hover:-translate-y-[3px] transition-all duration-200 group shadow-[0_2px_8px_rgba(32,32,29,0.02)] hover:shadow-[0_8px_20px_rgba(66,133,244,0.08)]"
              >
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-[#4285F4]/10 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186c-.368-.387-.61-.98-.61-1.743V3.557c0-.763.242-1.356.61-1.743z" fill="#00D7FF"/>
                    <path d="M17.18 8.613L13.793 12l3.387 3.387 3.793-2.187c.762-.44.762-1.16 0-1.6l-3.793-2.187z" fill="#FFC400"/>
                    <path d="M3.609 1.814L13.793 12l3.387-3.387L6.442 2.443c-.88-.507-1.92-.375-2.833-.629z" fill="#00F076"/>
                    <path d="M13.793 12l-10.184 10.186c.913-.254 1.953-.122 2.833-.63l10.738-6.17-3.387-3.386z" fill="#FF3A44"/>
                  </svg>
                </div>
                <div className="text-[13px] sm:text-[14px] font-bold text-[#171717] group-hover:text-[#4285F4] transition-colors leading-tight">Google Play</div>
                <div className="text-[11px] sm:text-[12px] text-[#625D55] mt-0.5">5K+ İndirme</div>
              </a>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-[650px] py-24 md:py-32 bg-[#111111] text-white relative flex flex-col justify-between overflow-hidden border-b border-[#292929]">
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 engineering-grid-dark opacity-15 pointer-events-none" />

      <div className="max-w-container mx-auto px-6 relative z-10 my-auto w-full">
        {/* Section Label: 05 / CONTACT */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs font-semibold tracking-label text-[#777777]">05 /</span>
          <span className="text-xs font-semibold tracking-label text-white uppercase">CONTACT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Main Call to Action (Left 8 cols) */}
          <div className="lg:col-span-8">
            <h2 className="text-5xl md:text-7xl lg:text-[80px] font-semibold text-white tracking-display leading-[0.95] mb-8">
              Let&apos;s build<br />
              something useful.
            </h2>

            <p className="text-lg md:text-xl text-[#999999] max-w-xl mb-10 leading-relaxed">
              Have a technical problem, engineering project, research inquiry, or opportunity to collaborate?
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:ahmetnurullaherkan@gmail.com"
                className="group inline-flex items-center justify-center h-[52px] px-8 rounded-[12px] bg-white text-primary text-[15px] font-semibold transition-all duration-fast hover:bg-[#E5E5E2] hover:-translate-y-[2px] active:translate-y-0"
                id="contact-email-btn"
              >
                <Mail size={16} className="mr-2.5 text-primary" />
                <span>Let&apos;s talk</span>
                <ArrowRight size={16} className="ml-2 transition-transform duration-fast group-hover:translate-x-1" />
              </a>

              <a
                href="https://www.linkedin.com/in/ahmet-nurullah-erkan-aa5395392"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-[12px] border border-[#333333] bg-transparent text-white text-[14px] font-medium transition-all duration-fast hover:bg-[#1A1A1A] hover:border-[#555555]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={15} className="ml-1 text-[#888888]" />
              </a>

              <a
                href="https://github.com/Erkan54"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-[12px] border border-[#333333] bg-transparent text-white text-[14px] font-medium transition-all duration-fast hover:bg-[#1A1A1A] hover:border-[#555555]"
              >
                <span>GitHub</span>
                <ArrowUpRight size={15} className="ml-1 text-[#888888]" />
              </a>
            </div>
          </div>

          {/* Micro Telemetry / Easter Egg (Right 4 cols) */}
          <div className="lg:col-span-4 text-[11px] text-[#777777] space-y-4 pt-8 lg:pt-0 lg:border-l lg:border-[#222222] lg:pl-8">
            <div>
              <div className="text-[10px] text-[#555555] uppercase tracking-wider mb-1">CURRENT_STATUS</div>
              <div className="flex items-center gap-2 text-[#CCCCCC]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>AVAILABLE FOR SELECTED OPPORTUNITIES</span>
              </div>
            </div>

            <div>
              <div className="text-[10px] text-[#555555] uppercase tracking-wider mb-1">LOCATION</div>
              <div className="text-[#CCCCCC]">SAKARYA, TÜRKIYE [UTC+3]</div>
            </div>

            <div>
              <div className="text-[10px] text-[#555555] uppercase tracking-wider mb-1">DIRECT_EMAIL</div>
              <div className="text-[#CCCCCC] select-all">ahmetnurullaherkan@gmail.com</div>
            </div>

            <div>
              <div className="text-[10px] text-[#555555] uppercase tracking-wider mb-1">SYSTEM_TELEMETRY</div>
              <div className="text-[#888888]">VERSION: 2026.09 · ENGR_SPEC: ACTIVE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

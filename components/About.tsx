"use client";

import React from "react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-border-light relative bg-background">
      <div className="max-w-container mx-auto px-6">
        {/* Section Label: 01 / ABOUT */}
        <div className="flex items-center gap-2 mb-12">
          <span className="text-xs font-semibold tracking-label text-[#999999]">01 /</span>
          <span className="text-xs font-semibold tracking-label text-primary uppercase">ABOUT</span>
        </div>

        {/* 12-Column Grid: Left 1-4, Right 5-12 */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start mb-20">
          {/* Left Title Column (1 to 4) */}
          <div className="col-span-12 lg:col-span-5">
            <h2 className="text-3xl md:text-h2 font-semibold text-primary tracking-heading leading-[1.05] max-w-[500px]">
              Not just another<br />
              engineering student.
            </h2>
          </div>

          {/* Right Narrative Paragraphs (5 to 12) */}
          <div className="col-span-12 lg:col-span-7 space-y-6 text-body text-secondary">
            <p className="leading-[1.7]">
              I&apos;m a Computer Engineering student at Sakarya University of Applied Sciences (SUBÜ) who enjoys transforming concepts into resilient, working systems. My focus centers on communication protocols, embedded systems, and software where code directly intersects with physical hardware.
            </p>
            <p className="leading-[1.7]">
              Rather than confining engineering to theoretical homework, I actively build for degraded and unpredictable field conditions. When cellular infrastructure fails during catastrophic disasters, or when concrete blocks standard wireless propagation, standard textbooks are not enough—you have to write the protocols and design the circuit nodes yourself.
            </p>
            <p className="leading-[1.7]">
              From publishing a decentralized P2P disaster communication mobile app with 5,000+ downloads to filing an official patent application for 3D electromagnetic search and rescue positioning, I treat every project as an end-to-end engineering discipline.
            </p>
          </div>
        </div>

        {/* About Stats: 3 Verified Metrics with 1px Vertical Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border-y border-border-light py-10 divide-y sm:divide-y-0 sm:divide-x divide-border-light">
          {/* Stat 1: 5K+ */}
          <div className="px-4 sm:px-8 py-4 sm:py-0 first:pl-0">
            <div className="text-4xl md:text-[56px] font-semibold text-primary tracking-display leading-none mb-2">
              5K+
            </div>
            <div className="text-[13px] font-medium text-[#777777] uppercase tracking-wider">
              Google Play Downloads
            </div>
            <div className="text-xs text-muted mt-1">
              Afet İletişim Ağı (P2P Mesh)
            </div>
          </div>

          {/* Stat 2: 3+ */}
          <div className="px-4 sm:px-8 py-4 sm:py-0">
            <div className="text-4xl md:text-[56px] font-semibold text-primary tracking-display leading-none mb-2">
              3+
            </div>
            <div className="text-[13px] font-medium text-[#777777] uppercase tracking-wider">
              Major Projects Deployed
            </div>
            <div className="text-xs text-muted mt-1">
              Hardware · Mobile · SaaS Web
            </div>
          </div>

          {/* Stat 3: 1 */}
          <div className="px-4 sm:px-8 py-4 sm:py-0 last:pr-0">
            <div className="text-4xl md:text-[56px] font-semibold text-primary tracking-display leading-none mb-2">
              1
            </div>
            <div className="text-[13px] font-medium text-[#777777] uppercase tracking-wider">
              Patent Application Filed
            </div>
            <div className="text-xs text-muted mt-1">
              TR 2026/010920 (RescueRadar)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

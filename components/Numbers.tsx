"use client";

import React from "react";

export const Numbers: React.FC = () => {
  const metrics = [
    {
      value: "5K+",
      label: "STORE DOWNLOADS",
      detail: "Active P2P mesh users in disaster communication",
    },
    {
      value: "3+",
      label: "ENGINEERING PROJECTS",
      detail: "Hardware systems, mobile networks, and SaaS",
    },
    {
      value: "1",
      label: "PATENT APPLICATION",
      detail: "TR 2026/010920 official submission filed",
    },
    {
      value: "∞",
      label: "UNSOLVED PROBLEMS",
      detail: "Driven by continuous curiosity and building",
    },
  ];

  return (
    <section className="py-20 bg-[#141414] text-white border-b border-[#222222]">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#262626]">
          {metrics.map((metric, idx) => (
            <div key={metric.label} className={`pt-6 sm:pt-0 ${idx > 0 ? "sm:pl-8" : ""}`}>
              <div className="text-4xl md:text-5xl font-semibold text-white tracking-display mb-2">
                {metric.value}
              </div>
              <div className="text-xs text-[#AAAAAA] tracking-label uppercase font-medium mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-[#666666] leading-relaxed">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

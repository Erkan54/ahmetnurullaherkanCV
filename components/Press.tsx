"use client";

import React from "react";
import { pressItems } from "@/data/press";
import { ArrowUpRight } from "lucide-react";

export const Press: React.FC = () => {
  return (
    <section className="py-24 md:py-32 border-b border-border-light bg-background relative">
      <div className="max-w-container mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-h2 font-semibold text-primary tracking-heading leading-tight">
            Outside the screen.
          </h2>
          <p className="text-secondary text-base md:text-body mt-3 max-w-xl">
            Independent media coverage highlighting applied earthquake technologies and patents.
          </p>
        </div>

        {/* Press Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pressItems.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface border border-border-light rounded-card-sm p-6 md:p-8 flex flex-col justify-between transition-all duration-normal hover:-translate-y-1 hover:border-border-hover shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-muted tracking-label uppercase mb-4">
                  <span className="font-semibold text-primary">{item.source}</span>
                  <span>{item.date}</span>
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-primary tracking-tight leading-snug mb-3 group-hover:text-black">
                  {item.title}
                </h3>

                <p className="text-sm text-secondary leading-relaxed mb-6">
                  {item.excerpt}
                </p>
              </div>

              <div className="inline-flex items-center text-xs font-medium text-primary pt-4 border-t border-border-light/70">
                <span>Read Original Report</span>
                <ArrowUpRight size={14} className="ml-1 transition-transform duration-fast group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

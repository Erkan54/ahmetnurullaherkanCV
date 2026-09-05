"use client";

import React from "react";
import { timelineEvents } from "@/data/experience";
import { ArrowUpRight } from "lucide-react";

export const Timeline: React.FC = () => {
  return (
    <section id="journey" className="py-24 md:py-32 border-b border-border-light bg-background relative">
      <div className="max-w-container mx-auto px-6">
        {/* Section Label: 04 / JOURNEY */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs font-semibold tracking-label text-[#999999]">04 /</span>
          <span className="text-xs font-semibold tracking-label text-primary uppercase">JOURNEY</span>
        </div>

        {/* Heading */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-h2 font-semibold text-primary tracking-heading leading-tight">
            Milestones &amp; Path.
          </h2>
          <p className="text-secondary text-base md:text-body mt-3 max-w-xl">
            A chronological track of software releases, patent filings, and engineering exploration.
          </p>
        </div>

        {/* Horizontal Timeline on Desktop / Vertical on Mobile */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[9px] left-0 right-0 h-[1px] bg-[#DCDCD8] z-0" />

          {/* Grid of Milestones */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {timelineEvents.map((event) => (
              <div key={event.title} className="relative pl-6 lg:pl-0 border-l border-[#DCDCD8] lg:border-l-0 pt-0 lg:pt-8">
                {/* Desktop Dot */}
                <div className="hidden lg:flex absolute top-0 left-0 w-5 h-5 items-center justify-center -translate-y-1/2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-[#F7F7F5]" />
                </div>

                {/* Mobile Dot */}
                <div className="lg:hidden absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />

                {/* Tag & Year */}
                <div className="flex items-center gap-2 text-xs mb-2">
                  <span className="font-bold text-primary">{event.year}</span>
                  {event.tag && (
                    <span className="text-[10px] text-muted tracking-wider uppercase">
                      [{event.tag}]
                    </span>
                  )}
                </div>

                {/* Milestone Title */}
                <h3 className="text-base font-semibold text-primary tracking-tight mb-2">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-secondary leading-relaxed mb-3">
                  {event.description}
                </p>

                {/* Verified Link if available */}
                {event.verifiedLink && (
                  <a
                    href={event.verifiedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-primary font-medium hover:underline"
                  >
                    <span>Verify Record</span>
                    <ArrowUpRight size={12} className="ml-0.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

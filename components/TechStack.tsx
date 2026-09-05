"use client";

import React from "react";
import { skillCategories } from "@/data/skills";

export const TechStack: React.FC = () => {
  return (
    <section className="py-24 md:py-32 border-b border-border-light bg-background relative">
      <div className="max-w-container mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-h2 font-semibold text-primary tracking-heading leading-tight">
            Tools I use.
          </h2>
          <p className="text-secondary text-base md:text-body mt-3 max-w-xl">
            Technologies and core principles applied across production software and embedded hardware systems.
          </p>
        </div>

        {/* 4 Categorized Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="pt-6 border-t border-[#DCDCD8]">
              <span className="text-xs font-semibold text-muted tracking-label block mb-6 uppercase">
                {category.title}
              </span>
              <ul className="space-y-3.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-[17px] md:text-[18px] font-medium text-primary tracking-tight"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-28 md:py-36 bg-[#111111] text-white relative border-b border-[#242424]">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 engineering-grid-dark opacity-15 pointer-events-none" />

      <div className="max-w-container mx-auto px-6 relative z-10">
        {/* Section Label: 02 / SELECTED WORK */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs font-semibold tracking-label text-[#888888]">02 /</span>
          <span className="text-xs font-semibold tracking-label text-white uppercase">SELECTED WORK</span>
        </div>

        {/* Section Heading */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-h1 font-semibold text-white tracking-heading leading-[1.05] max-w-[680px]">
            Things I&apos;ve<br />
            actually built.
          </h2>
          <p className="text-[#8A8A8A] text-base md:text-body mt-4 max-w-xl">
            Real products and engineering architectures developed, tested, and shipped beyond the classroom.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-12 md:space-y-16">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              reversed={index === 1} // RescueRadar gets the alternating layout per Rule 23
            />
          ))}
        </div>
      </div>
    </section>
  );
};

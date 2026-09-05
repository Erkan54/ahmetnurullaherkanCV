"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { SystemDiagram } from "./SystemDiagram";

interface ProjectCardProps {
  project: Project;
  reversed?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, reversed = false }) => {
  return (
    <article
      className="group relative bg-[#181818] border border-[#292929] rounded-card p-4 md:p-6 transition-all duration-normal hover:-translate-y-1 hover:border-[#3A3A3A]"
      id={`project-${project.slug}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Visual Column (16:10 aspect ratio) */}
        <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
          <div className="overflow-hidden rounded-[18px]">
            <SystemDiagram type={project.visualType} />
          </div>
        </div>

        {/* Content Column */}
        <div className={`lg:col-span-5 flex flex-col justify-between py-2 lg:py-4 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
          <div>
            {/* Top Category & Number Header */}
            <div className="flex items-center justify-between text-xs text-[#888888] tracking-[0.14em] uppercase mb-4 border-b border-[#2A2A2A] pb-3">
              <span className="font-semibold text-[#CCCCCC]">{project.number}</span>
              <span className="text-[#888888]">{project.badge}</span>
            </div>

            {/* Patent Badge if applicable (RescueRadar) */}
            {project.patentInfo && (
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] border border-[#3A3A3A] bg-[#202020] text-[#A0A0A0] text-[10px] font-semibold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>{project.patentInfo.status}: {project.patentInfo.number}</span>
              </div>
            )}

            {/* Project Title */}
            <h3 className="font-display text-2xl md:text-[32px] font-bold text-white tracking-[-0.02em] leading-tight mb-3">
              {project.title}
            </h3>

            {/* Short Description */}
            <p className="text-[15px] md:text-[16px] text-[#A0A0A0] leading-relaxed mb-6 font-normal">
              {project.shortDesc}
            </p>

            {/* Tech Tags */}
            <div className="text-xs text-[#777777] uppercase tracking-[0.12em] font-medium mb-6">
              {project.metadata}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#262626]">
            <Link
              href={`/projeler/${project.slug}`}
              className="inline-flex items-center text-sm font-medium text-white transition-all duration-fast hover:text-[#D4D4D4] group/link"
            >
              <span>Vaka Analizini Gör</span>
              <ArrowRight size={15} className="ml-1.5 transition-transform duration-fast group-hover/link:translate-x-1" />
            </Link>

            {/* External Links if available */}
            {project.links.googlePlay && (
              <a
                href={project.links.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-[#888888] transition-colors hover:text-white"
              >
                <span>Google Play</span>
                <ArrowUpRight size={13} className="ml-0.5" />
              </a>
            )}

            {project.links.press && (
              <a
                href={project.links.press}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-[#888888] transition-colors hover:text-white"
              >
                <span>Basın Haberi</span>
                <ArrowUpRight size={13} className="ml-0.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

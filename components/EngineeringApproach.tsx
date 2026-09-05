"use client";

import React from "react";

export const EngineeringApproach: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "FIND THE PROBLEM",
      description:
        "Identify physical bottlenecks and real breakdown points where conventional infrastructure fails people.",
    },
    {
      number: "02",
      title: "BUILD THE SMALLEST SOLUTION",
      description:
        "Eliminate decorative layers. Architect the minimal, deterministic circuit and protocol that solves the core physics.",
    },
    {
      number: "03",
      title: "TEST IN THE REAL WORLD",
      description:
        "Simulations lie. Deploy in chaotic rubble debris fields, congested Wi-Fi bands, or live commercial venues.",
    },
    {
      number: "04",
      title: "ITERATE",
      description:
        "Measure empirical failures, tune mathematical Kalman state filters, harden edge cases, and deploy again.",
    },
  ];

  return (
    <section id="engineering" className="py-24 md:py-32 border-b border-border-light bg-background relative">
      <div className="max-w-container mx-auto px-6">
        {/* Section Label: 03 / ENGINEERING */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs font-semibold tracking-label text-[#999999]">03 /</span>
          <span className="text-xs font-semibold tracking-label text-primary uppercase">ENGINEERING</span>
        </div>

        {/* Heading */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-h2 font-semibold text-primary tracking-heading leading-tight">
            How I think.
          </h2>
        </div>

        {/* 4-Column Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="pt-6 border-t border-[#DCDCD8] flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-muted tracking-label block mb-4">
                  {step.number}
                </span>
                <h3 className="text-[17px] font-semibold text-primary tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-[15px] text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Quote */}
        <div className="mt-16 pt-10 border-t border-border-light">
          <blockquote className="text-xl md:text-2xl font-medium text-primary tracking-tight max-w-3xl">
            &ldquo;I care less about building something that looks impressive and more about building something that actually works.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
};

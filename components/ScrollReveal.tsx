"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  y = 22,
  duration = 0.65,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

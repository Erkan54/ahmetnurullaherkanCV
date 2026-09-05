"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrolled(latest > 30);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navLinks = [
    { label: "ANA SAYFA", href: "/" },
    { label: "CV & HAKKIMDA", href: "/cv" },
    { label: "PROJELER", href: "/projeler" },
  ];

  const easeNatural = [0.22, 1, 0.36, 1];

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: easeNatural }}
      className={`fixed top-0 left-0 right-0 z-50 bg-[#20201D]/90 backdrop-blur-md border-b border-white/10 select-none h-[66px] transition-[box-shadow,background-color] md:transition-all duration-300 ${scrolled ? "md:h-[66px] shadow-[0_12px_36px_-6px_rgba(32,32,29,0.22)]" : "md:h-[77px] shadow-[0_4px_20px_-4px_rgba(32,32,29,0.12)]"
        }`}
    >
      {/* Hairline Editorial Scroll Progress Indicator (Muted Gold #A39170) */}
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A39170] pointer-events-none z-10"
      />

      {/* Topbar Altı Shader (Kaydırırken Topbar İle Birlikte Gelen Derinlik Gradyanı) */}
      <div
        className={`absolute top-full left-0 right-0 pointer-events-none transition-all duration-300 ${scrolled ? "h-6 opacity-100" : "h-3.5 opacity-60"
          } bg-gradient-to-b from-black/25 via-black/8 to-transparent`}
      />

      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-14 h-full flex items-center justify-between">
        {/* Left: Brand & Title with High Contrast + Responsive White-Framed Photo */}
        <Link href="/" className="flex items-center gap-3 group transition-opacity duration-200 hover:opacity-90">
          {/* Circular Photo Logo (Both Mobile & Web / Desktop) */}
          <div className="relative w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] md:w-[44px] md:h-[44px] rounded-full p-[2px] bg-white shadow-sm shrink-0 overflow-hidden transition-transform duration-250 group-hover:scale-105">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/ahmet-hero.jpg"
              alt="Ahmet Nurullah Erkan"
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-heading font-semibold text-[15px] sm:text-[16px] tracking-tight !text-[#F7F4EC] transition-colors duration-200">
              AHMET NURULLAH ERKAN
            </span>
            <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.14em] !text-[#B6A27C] uppercase -mt-0.5">
              AR-GE &amp; GÖMÜLÜ SİSTEMLER
            </span>
          </div>
        </Link>

        {/* Center / Desktop Links with Underline Animation */}
        <nav className="hidden md:flex items-center space-x-9 text-[13px] tracking-[0.08em]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 ${isActive
                  ? "text-[#F7F4EC] font-semibold"
                  : "text-white/70 hover:text-[#F7F4EC] font-medium"
                  }`}
              >
                <span>{link.label}</span>
                {/* Micro Underline Animation */}
                <span
                  className={`absolute bottom-0 left-0 h-[1px] bg-[#B6A27C] transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100 origin-left hover:scale-x-100"
                    }`}
                  style={{
                    transformOrigin: "left",
                    transform: isActive ? "scaleX(1)" : undefined,
                  }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Far Right CTA with arrow transition */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#iletisim"
            className="group inline-flex items-center text-[13px] font-medium tracking-wide text-white/80 hover:text-[#F7F4EC] transition-all duration-200 hover:-translate-y-[1px]"
          >
            <span>İLETİŞİME GEÇ</span>
            <span className="ml-1.5 transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 text-[#B6A27C]">→</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F7F4EC] hover:text-white focus:outline-none"
          aria-label="Menüyü Aç/Kapat"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#20201D]/90 backdrop-blur-md border-b border-white/10 px-6 py-6 transition-all shadow-xl">
          <nav className="flex flex-col space-y-4 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 transition-colors ${pathname === link.href ? "text-[#F7F4EC] font-semibold" : "text-white/70 hover:text-[#F7F4EC]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10">
              <Link
                href="/#iletisim"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-between w-full py-2 text-[#F7F4EC] text-sm font-medium"
              >
                <span>İLETİŞİME GEÇ</span>
                <span className="text-[#B6A27C]">→</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </motion.header>
  );
};

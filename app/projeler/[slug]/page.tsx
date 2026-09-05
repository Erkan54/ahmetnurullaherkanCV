import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

const slugAliases: Record<string, string> = {
  "qr-order-system": "qr-siparis-sistemi",
  "afet-iletisim": "afet-iletisim-agi",
};

const getProjectBySlug = (rawSlug: string) => {
  const resolvedSlug = slugAliases[rawSlug] || rawSlug;
  return projectsData.find((p) => p.slug === resolvedSlug);
};

export async function generateStaticParams() {
  return [
    ...projectsData.map((p) => ({ slug: p.slug })),
    { slug: "qr-order-system" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: `${project.title} — Vaka Analizi | Ahmet Nurullah Erkan`,
    description: project.shortDesc,
  };
}

export default function ProjeDetayPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  // Next Project Navigator
  const currentIndex = projectsData.findIndex((p) => p.slug === project.slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#171717] select-none">
      <Navbar />

      <main className="animate-page-enter flex-1 pt-28 pb-36">
        <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-14">
          
          {/* Geri Dönüş & Marka Satırı */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-[#DED8CC] gap-4">
            <Link
              href="/projeler"
              className="inline-flex items-center text-[12px] font-semibold text-[#625D55] hover:text-[#171717] transition-colors group"
            >
              <ArrowLeft size={13} className="mr-2 transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-1 text-[#9A8763]" />
              <span className="link-underline-reveal">TÜM PROJELERE DÖN</span>
            </Link>

            <div className="text-[11px] font-bold text-[#9A8763] tracking-[0.14em] uppercase">
              AHMET NURULLAH ERKAN · PROJE {project.number}
            </div>
          </div>

          {/* Proje Başlığı & Metadata */}
          <header className="pb-12 border-b border-[#DED8CC] mb-12">
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold text-[#9A8763] mb-4 uppercase tracking-[0.14em]">
              <span className="font-extrabold text-[#171717]">{project.number}</span>
              <span>·</span>
              <span>{project.category}</span>
              <span>·</span>
              <span>{project.year}</span>
              {project.patentInfo && (
                <>
                  <span>·</span>
                  <span className="text-[#9A8763] bg-white px-2.5 py-0.5 rounded border border-[#9A8763]/40 font-semibold">
                    {project.patentInfo.status}: {project.patentInfo.number}
                  </span>
                </>
              )}
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight mb-6 py-1">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-[#625D55] max-w-3xl leading-relaxed mb-8 font-normal mobile-justify text-justify md:text-left [text-justify:inter-word] hyphens-auto">
              {project.shortDesc}
            </p>

            {/* Dış Bağlantılar */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#DED8CC]">
              {project.links.googlePlay && (
                <a
                  href={project.links.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-4 py-2 rounded-[6px] bg-[#20201D]/90 text-[#F5F1E8] text-[12px] font-medium tracking-wide hover:bg-[#20201D] transition-all duration-200 hover:-translate-y-[1px] shadow-sm"
                >
                  <span>Google Play (5K+ İndirme)</span>
                  <ArrowUpRight size={13} className="ml-1 text-[#B6A27C] transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              {project.links.press && (
                <a
                  href={project.links.press}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-4 py-2 rounded-[6px] border border-[#DED8CC] hover:border-[#B8B0A0] bg-white text-[#171717] text-[12px] font-medium tracking-wide transition-all duration-200 hover:-translate-y-[1px]"
                >
                  <span>Medyabar Basın Haberi</span>
                  <ArrowUpRight size={13} className="ml-1 text-[#9A8763] transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-4 py-2 rounded-[6px] border border-[#DED8CC] hover:border-[#B8B0A0] bg-white text-[#171717] text-[12px] font-medium tracking-wide transition-all duration-200 hover:-translate-y-[1px]"
                >
                  <span>GitHub (@Erkan54)</span>
                  <ArrowUpRight size={13} className="ml-1 text-[#9A8763] transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              <div className="text-[12px] font-medium text-[#9A8763] uppercase tracking-[0.08em] ml-auto">
                TEKNOLOJİLER: {project.tech.join(" · ")}
              </div>
            </div>
          </header>

          {/* Vaka Analizi Detaylı Editoryal Gövde (Görsel Yok, Saf Tipografi & Mimari) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* İçindekiler Navigasyonu (3 Kolon) */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28 space-y-2 text-xs">
                <div className="text-[#9A8763] tracking-[0.14em] uppercase font-bold mb-3 text-[11px]">
                  İÇİNDEKİLER
                </div>
                <a href="#overview" className="block text-[#625D55] hover:text-[#171717] py-1 font-medium">01 — Genel Bakış</a>
                <a href="#problem" className="block text-[#625D55] hover:text-[#171717] py-1 font-medium">02 — Gerçek Problem</a>
                <a href="#idea" className="block text-[#625D55] hover:text-[#171717] py-1 font-medium">03 — Çözüm &amp; Fikir</a>
                <a href="#what-i-built" className="block text-[#625D55] hover:text-[#171717] py-1 font-medium">04 — Ne İnşa Ettim?</a>
                <a href="#technology" className="block text-[#625D55] hover:text-[#171717] py-1 font-medium">05 — Teknolojiler</a>
                <a href="#what-i-learned" className="block text-[#625D55] hover:text-[#171717] py-1 font-medium">06 — Neler Öğrendim?</a>
                <a href="#results" className="block text-[#625D55] hover:text-[#171717] py-1 font-medium">07 — Sonuçlar</a>
              </div>
            </aside>

            {/* Ana Vaka Analizi Metni (9 Kolon) */}
            <div className="lg:col-span-9 space-y-16">
              
              {/* 01 Genel Bakış */}
              <section id="overview" className="scroll-mt-28">
                <div className="text-[11px] font-bold text-[#9A8763] tracking-[0.16em] uppercase mb-2">
                  01 · MİMARİ
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#171717] tracking-tight mb-4">
                  Genel Bakış
                </h2>
                <p className="text-lg text-[#625D55] leading-relaxed font-normal mobile-justify text-justify md:text-left [text-justify:inter-word] hyphens-auto">
                  {caseStudy.overview}
                </p>
              </section>

              {/* 02 Problem */}
              <section id="problem" className="scroll-mt-28 border-t border-[#DED8CC] pt-12">
                <div className="text-[11px] font-bold text-[#9A8763] tracking-[0.16em] uppercase mb-2">
                  02 · TIKANIKLIK
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#171717] tracking-tight mb-4">
                  Gerçek Problem
                </h2>
                <p className="text-lg text-[#625D55] leading-relaxed font-normal mobile-justify text-justify md:text-left [text-justify:inter-word] hyphens-auto">
                  {caseStudy.problem}
                </p>
              </section>

              {/* 03 Fikir */}
              <section id="idea" className="scroll-mt-28 border-t border-[#DED8CC] pt-12">
                <div className="text-[11px] font-bold text-[#9A8763] tracking-[0.16em] uppercase mb-2">
                  03 · ÇÖZÜM KONSEPTİ
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#171717] tracking-tight mb-4">
                  Mühendislik Yaklaşımı
                </h2>
                <p className="text-lg text-[#625D55] leading-relaxed font-normal mobile-justify text-justify md:text-left [text-justify:inter-word] hyphens-auto">
                  {caseStudy.idea}
                </p>
              </section>

              {/* 04 Ne İnşa Ettim */}
              <section id="what-i-built" className="scroll-mt-28 border-t border-[#DED8CC] pt-12">
                <div className="text-[11px] font-bold text-[#9A8763] tracking-[0.16em] uppercase mb-2">
                  04 · GELİŞTİRME SÜRECİ
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#171717] tracking-tight mb-4">
                  Ne İnşa Ettim?
                </h2>
                <p className="text-lg text-[#625D55] leading-relaxed mb-8 font-normal mobile-justify text-justify md:text-left [text-justify:inter-word] hyphens-auto">
                  {caseStudy.whatIBuilt}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.howItWorks.steps.map((step, idx) => (
                    <div key={step.title} className="p-5 rounded-[8px] border border-[#DED8CC] bg-white">
                      <div className="text-[11px] font-bold text-[#9A8763] mb-1.5 uppercase tracking-[0.14em]">
                        AŞAMA 0{idx + 1}
                      </div>
                      <h3 className="font-heading text-base font-bold text-[#171717] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[14px] text-[#625D55] leading-relaxed font-normal mobile-justify text-justify md:text-left [text-justify:inter-word] hyphens-auto">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 05 Teknolojiler */}
              <section id="technology" className="scroll-mt-28 border-t border-[#DED8CC] pt-12">
                <div className="text-[11px] font-bold text-[#9A8763] tracking-[0.16em] uppercase mb-2">
                  05 · TEKNOLOJİ TERCİHLERİ
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#171717] tracking-tight mb-6">
                  Seçilen Teknolojiler
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.technology.map((tech) => (
                    <div key={tech.name} className="p-4 rounded-[8px] border border-[#DED8CC] bg-white">
                      <div className="font-heading font-bold text-[#171717] text-base mb-1">
                        {tech.name}
                      </div>
                      <div className="text-[13px] text-[#625D55] leading-relaxed font-normal">
                        {tech.role}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 06 Neler Öğrendim */}
              <section id="what-i-learned" className="scroll-mt-28 border-t border-[#DED8CC] pt-12">
                <div className="p-8 rounded-[10px] border border-[#9A8763]/50 bg-white">
                  <div className="text-[11px] font-bold text-[#9A8763] tracking-[0.16em] uppercase mb-2">
                    06 · MÜHENDİSLİK KAZANIMI &amp; VİZYON
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#171717] tracking-tight mb-4">
                    Mühendis Olarak Neler Öğrendim?
                  </h2>
                  <p className="text-base md:text-lg text-[#625D55] leading-relaxed italic font-normal mobile-justify text-justify md:text-left [text-justify:inter-word] hyphens-auto">
                    &ldquo;{caseStudy.whatILearned}&rdquo;
                  </p>
                </div>
              </section>

              {/* 07 Doğrulanmış Çıktılar */}
              <section id="results" className="scroll-mt-28 border-t border-[#DED8CC] pt-12">
                <div className="text-[11px] font-bold text-[#9A8763] tracking-[0.16em] uppercase mb-2">
                  07 · SONUÇLAR
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#171717] tracking-tight mb-6">
                  Doğrulanmış Çıktılar
                </h2>
                <div className="space-y-3">
                  {caseStudy.results.map((res) => (
                    <div key={res} className="flex items-start gap-3 p-4 rounded-[8px] border border-[#DED8CC] bg-white">
                      <CheckCircle2 size={18} className="text-[#9A8763] mt-0.5 shrink-0" />
                      <span className="text-[15px] text-[#171717] font-medium">{res}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sonraki Proje Navigatörü */}
              <div className="pt-16 border-t border-[#DED8CC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Link
                  href="/projeler"
                  className="inline-flex items-center text-[13px] font-semibold text-[#625D55] hover:text-[#171717]"
                >
                  <ArrowLeft size={15} className="mr-2 text-[#9A8763]" />
                  <span className="link-underline-reveal">Tüm Projelere Dön</span>
                </Link>

                <Link
                  href={`/projeler/${nextProject.slug}`}
                  className="inline-flex items-center text-[13px] font-bold text-[#171717] hover:text-[#9A8763] transition-colors group"
                >
                  <span className="link-underline-reveal">SONRAKİ PROJE: {nextProject.title}</span>
                  <ArrowUpRight size={15} className="ml-1 text-[#9A8763] transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

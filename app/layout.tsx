import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Ahmet Nurullah Erkan — Kişisel Marka & Mühendislik Vitrini",
  description:
    "SUBÜ Bilgisayar Mühendisliği öğrencisi. Gömülü sistemler, kablosuz haberleşme ve Ar-Ge alanlarında çalışan sistemler inşa eden builder.",
  keywords: [
    "Ahmet Nurullah Erkan",
    "Bilgisayar Mühendisliği",
    "SUBÜ",
    "RescueRadar",
    "Afet İletişim Ağı",
    "Gömülü Sistemler",
    "Ar-Ge",
    "Sakarya",
  ],
  authors: [{ name: "Ahmet Nurullah Erkan" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://ahmeterkan.dev",
    title: "Ahmet Nurullah Erkan — Kişisel Marka & Mühendislik Vitrini",
    description:
      "Fikirleri çalışan sistemlere dönüştürüyorum. Bilgisayar mühendisliği öğrencisi, donanım ve yazılım projeleri.",
    siteName: "Ahmet Nurullah Erkan",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-cream text-text-main antialiased selection:bg-charcoal selection:text-cream">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}


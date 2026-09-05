export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  tag?: string;
  verifiedLink?: string;
}

export interface ExperienceRole {
  period: string;
  role: string;
  organization: string;
  location: string;
  responsibilities: string[];
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2024",
    title: "Started Building & Computer Engineering",
    description: "Began Computer Engineering at Sakarya University of Applied Sciences (SUBÜ), moving theory directly into hands-on hardware and software development.",
    tag: "FOUNDATION",
  },
  {
    year: "2025",
    title: "Enterprise Systems & Applied Networking",
    description: "Managed enterprise server infrastructures (Dell PowerEdge, VMware, TrueNAS) and built localized networks during intensive university laboratory roles.",
    tag: "INFRASTRUCTURE",
  },
  {
    year: "2026",
    title: "Afet İletişim Ağı (5K+ Downloads)",
    description: "Engineered and shipped a decentralized P2P disaster communication Android app with 5,000+ verified active downloads.",
    tag: "MOBILE · MESH",
    verifiedLink: "https://play.google.com/store/apps/details?id=com.afetiletisim.deprem",
  },
  {
    year: "2026",
    title: "RescueRadar Patent Application Filed",
    description: "Official Turkish Patent application filed (TR 2026/010920) for 3D wireless search and rescue positioning under debris. Featured in regional media.",
    tag: "PATENT · RF",
    verifiedLink: "https://medyabar.com/haber/28394669/genc-muhendis-adayindan-bir-yenilik-daha-depremzedenin-konumu-3-boyutlu-olarak-tespit-edilecek",
  },
  {
    year: "2026",
    title: "Computer Engineering (3rd Year)",
    description: "Continuing active engineering education while architecting next-generation embedded, RF, and software products.",
    tag: "PRESENT",
  },
];

export const experienceRoles: ExperienceRole[] = [
  {
    period: "Nov 2025 – May 2026",
    role: "Hardware & Technical Support Specialist",
    organization: "Sakarya University of Applied Sciences (SUBÜ)",
    location: "Sakarya, Türkiye",
    responsibilities: [
      "Conducted physical hardware diagnostics, OS image deployments, and component maintenance across campus computer laboratories.",
      "Managed software license infrastructure and routine compliance checks for academic lab workstations.",
      "Utilized lab resources during downtime to experiment and build custom embedded hardware prototypes.",
    ],
  },
  {
    period: "Mar 2025 – Jun 2025",
    role: "Server & System Support Specialist",
    organization: "Sakarya University of Applied Sciences (SUBÜ)",
    location: "Sakarya, Türkiye",
    responsibilities: [
      "Configured and managed enterprise server hardware on a dedicated Dell PowerEdge R720 system.",
      "Deployed and tested virtual machines across Type-1 and Type-2 hypervisors (VMware ESXi, Proxmox VE).",
      "Configured virtual switches (vSwitch) and vNICs to isolate Windows Server testing environments and TrueNAS storage servers.",
    ],
  },
];

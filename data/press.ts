export interface PressItem {
  source: string;
  title: string;
  excerpt: string;
  url: string;
  date: string;
}

export const pressItems: PressItem[] = [
  {
    source: "MEDYABAR",
    title: "Genç mühendis adayından bir yenilik daha! Depremzedenin konumu 3 boyutlu olarak tespit edilecek!",
    excerpt: "Afet sonrası enkaz altındaki kazazedelerin sinyallerini Kalman filtresi ve mikrodenetleyici tabanlı algoritmalarla işleyerek derinlik dahil 3B konum belirleyen donanım projesi.",
    url: "https://medyabar.com/haber/28394669/genc-muhendis-adayindan-bir-yenilik-daha-depremzedenin-konumu-3-boyutlu-olarak-tespit-edilecek",
    date: "2026",
  },
  {
    source: "MEDYABAR",
    title: "Sakaryalı genç mühendis adayı geliştirdiği deprem uygulamasıyla korku dolu anları engellemek istiyor",
    excerpt: "İnternetsiz ve baz istasyonsuz çalışan P2P haberleşme mimarisiyle afet anlarında kesintisiz iletişim sağlayan mobil uygulama 5.000+ kullanıcıya ulaştı.",
    url: "https://medyabar.com/haber/27871604/sakaryali-genc-muhendis-adayi-gelistirdigi-deprem-uygulamasiyla-korku-dolu-anlari-engellemek-istiyor",
    date: "2026",
  },
];

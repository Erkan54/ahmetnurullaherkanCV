export interface Project {
  slug: string;
  number: string;
  title: string;
  badge: string;
  category: string;
  shortDesc: string;
  year: string;
  highlights: string[];
  metadata: string;
  tech: string[];
  patentInfo?: {
    status: string;
    number: string;
    title: string;
  };
  links: {
    live?: string;
    googlePlay?: string;
    press?: string;
    github?: string;
  };
  visualType: "network-mockup" | "3d-coordinate" | "browser-mockup" | "academic-mockup";
  caseStudy: {
    overview: string;
    problem: string;
    idea: string;
    whatIBuilt: string;
    howItWorks: {
      steps: { title: string; desc: string }[];
    };
    technology: { name: string; role: string }[];
    challenges: string[];
    whatILearned: string;
    results: string[];
  };
}

export const projectsData: Project[] = [
  {
    slug: "rescueradar",
    number: "01",
    title: "RescueRadar",
    badge: "DONANIM · RF · BLE · AR-GE",
    category: "Gömülü Sistemler & RF Konumlandırma",
    year: "2026",
    shortDesc:
      "Deprem sonrası enkaz altında kalan kazazedelerin yaydığı kablosuz sinyalleri yakalayıp 3 boyutlu konum ve derinlik hesaplayan donanım destekli arama-kurtarma sistemi.",
    highlights: ["BLE Sinyal Analizi", "RF Mesh Ağı", "ESP32 Mikrodenetleyici", "3B Konumlandırma"],
    metadata: "PATENT BAŞVURUSU TR 2026/010920 · GÖMÜLÜ C++ · BLE · RF MESH",
    patentInfo: {
      status: "Türk Patent Başvurusu Yapıldı",
      number: "TR 2026/010920",
      title: "Doğal Afetler Sonrasında Enkaz Altında Kalan Canlıların Yerini Elektromanyetik Dalgalar Aracılığıyla Tespit Eden Kablosuz Arama Kurtarma Konumlandırma Sistemi ve Yöntemi",
    },
    tech: ["Gömülü C++", "ESP32", "BLE Sinyal Analizi", "Kalman Filtresi", "Outlier Gating", "3B Trilaterasyon"],
    links: {
      press: "https://medyabar.com/haber/28394669/genc-muhendis-adayindan-bir-yenilik-daha-depremzedenin-konumu-3-boyutlu-olarak-tespit-edilecek",
    },
    visualType: "3d-coordinate",
    caseStudy: {
      overview:
        "RescueRadar, yıkılmış betonarme moloz altında kalan kazazedelerin üzerindeki elektronik cihazlardan (telefon, giyilebilir teknoloji vb.) yayılan elektromanyetik sinyalleri yakalayıp matematiksel filtrelerle temizleyerek tam koordinat çıkaran hibrit bir donanım/yazılım projesidir.",
      problem:
        "Büyük depremlerde GPS sinyalleri beton enkazı delememekte, klasik akustik dinleme cihazları ise ağır iş makineleri ve siren gürültüleri nedeniyle yetersiz kalmaktadır. Enkaz altındaki kazazedeyi bulmak, 72 saatlik kritik yaşam penceresinde saatler sürebilmektedir.",
      idea:
        "Enkaz çevresine yerleştirilen portatif ve senkronize kablosuz sensör düğümleri (nodes) vasıtasıyla boşluklardan sızan BLE ve RF sinyalleri dinlenir. Yansımalardan kaynaklanan gürültü Kalman filtresiyle temizlenerek kazazedenin X, Y ve derinlik (Z) koordinatları canlı arama-kurtarma tabletine yansıtılır.",
      whatIBuilt:
        "ESP32 mikrodenetleyicileri üzerinde bare-metal C++ firmware'i yazdım, sinyal gürültülerini filtreleyen özgün Kalman filtresi ve Outlier Gating algoritmalarını kurguladım ve saha ekipleri için gerçek zamanlı 3B haritalama arayüzü geliştirdim.",
      howItWorks: {
        steps: [
          { title: "Kazazede Cihazı", desc: "Enkaz altından zayıf BLE/RF acil durum beacon sinyalleri yayar." },
          { title: "Çevre Sensör Düğümleri", desc: "Enkaz etrafına kurulan düğüm ağı sinyal gücü (RSSI) ve zaman damgalarını toplar." },
          { title: "Gürültü Filtreleme", desc: "Kalman filtresi ve Outlier Gating algoritmaları çoklu yol (multipath) yankılarını eler." },
          { title: "3B Koordinat Çözümü", desc: "Trilaterasyon motoru enkaz altındaki derinlik dahil kesin konumu sahadaki operatöre iletir." },
        ],
      },
      technology: [
        { name: "ESP32 Mikrodenetleyiciler", role: "Yüksek frekanslı RF sinyal yakalama ve düğümler arası mesh ağı" },
        { name: "Gömülü C++", role: "Düşük gecikmeli, donanım seviyesinde çalışan sinyal işleme algoritmaları" },
        { name: "Kalman Filtresi", role: "Beton ve demir donatılardan yansıyan hatalı sinyal dalgalarını temizleme" },
        { name: "Web Telemetri Paneli", role: "Saha kurtarma ekipleri için gerçek zamanlı 3B nokta bulutu görselleştirme" },
      ],
      challenges: [
        "Demir donatılı betonarme molozların sinyalleri düzensiz yansıtması (Faraday kafesi etkisi).",
        "Farklı enkaz materyallerinde (tuğla, beton, ahşap) sinyal sönümlenme modellerinin değişkenliği.",
        "Merkezi bir uydu saati olmadan bağımsız sensör düğümleri arasında mikrosaniye hassasiyetinde zaman senkronizasyonu.",
      ],
      whatILearned:
        "Fiziksel donanım ile yazılımın kesiştiği noktada teori yetersiz kalır. Gerçek saha şartları matematiksel filtrelerin en ince ayrıntısına kadar optimize edilmesini gerektirir. Gürültülü fiziksel ortamdan deterministik bir mühendislik verisi elde etmeyi öğrendim.",
      results: [
        "Türk Patent ve Marka Kurumu'na resmi patent başvurusu tamamlandı (Başvuru No: TR 2026/010920).",
        "Simüle enkaz ortamında hedef cihazın derinlik dahil koordinatları başarıyla hesaplandı.",
        "Medyabar ve bölgesel basında geniş yankı bularak haberleştirildi.",
      ],
    },
  },
  {
    slug: "afet-iletisim-agi",
    number: "02",
    title: "Afet İletişim Ağı",
    badge: "MOBİL · HABERLEŞME · P2P",
    category: "Mobil Ağlar & P2P Haberleşme",
    year: "2026",
    shortDesc:
      "İnternet, baz istasyonu veya elektrik altyapısı çöktüğünde cihazların Bluetooth ve Wi-Fi Direct ile kurduğu internetsiz acil durum haberleşme sistemi.",
    highlights: ["5K+ İndirme", "Android Native", "P2P Haberleşme", "Wi-Fi Direct"],
    metadata: "5K+ İNDİRME · ANDROID · P2P · BLUETOOTH",
    tech: ["Kotlin", "Android SDK", "Wi-Fi Direct", "Bluetooth LE", "P2P Mesh Protokolü"],
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.afetiletisim.deprem",
      press: "https://medyabar.com/haber/27871604/sakaryali-genc-muhendis-adayi-gelistirdigi-deprem-uygulamasiyla-korku-dolu-anlari-engellemek-istiyor",
    },
    visualType: "network-mockup",
    caseStudy: {
      overview:
        "Afet İletişim Ağı, deprem ve benzeri felaketlerde ticari GSM baz istasyonlarının yıkılması veya aşırı yüklenme sonucu çökmesi durumunda devreye giren merkeziyetsiz bir mobil haberleşme yazılımıdır.",
      problem:
        "Afet anlarında ilk çöken sistem mobil baz istasyonlarıdır. İletişim kopunca enkaz altındakiler sesini duyuramaz, dışarıdakiler yakınlarına ulaşamaz ve arama-kurtarma süreçleri kör bir şekilde yürütülür.",
      idea:
        "Akıllı telefonlarda hazır bulunan Bluetooth ve Wi-Fi Direct donanımlarını otonom bir ad-hoc mesh ağına dönüştürerek, telefonların birbirini röle (aktarıcı) olarak kullandığı, baz istasyonsuz bir atlamalı (multi-hop) iletişim ağı kurmak.",
      whatIBuilt:
        "Android üzerinde arka planda çalışan P2P servis keşif mimarisini, batarya tasarruflu Bluetooth beacon dinleyicilerini ve cihazlar arası bas-konuş (push-to-talk) ses iletim protokolünü geliştirdim.",
      howItWorks: {
        steps: [
          { title: "Telefon A (Kazazede)", desc: "GSM olmasa bile acil durum sinyali ve ses kaydını yerel radyo frekansıyla yayar." },
          { title: "Doğrudan P2P Bağlantı", desc: "Menzildeki diğer telefonlar paketi yakalayarak otomatik soket kurar." },
          { title: "Çoklu Atlamalı Aktarım", desc: "Paket telefondan telefona aktarılarak mesh ağı sınırları boyunca taşınır." },
          { title: "Kurtarma Ekibi Kapısı", desc: "Enkaz bölgesine ulaşan arama-kurtarma terminali paketi alarak kazazede konumunu çözer." },
        ],
      },
      technology: [
        { name: "Kotlin & Android SDK", role: "Native arka plan servisleri ve donanım güç optimizasyonları" },
        { name: "Wi-Fi Direct (P2P)", role: "Modemsiz, cihazlar arası yüksek hızlı veri transfer kanalı" },
        { name: "Bluetooth Low Energy", role: "Minimum pil tüketimiyle kesintisiz cihaz keşfi ve sinyal yayını" },
        { name: "Özel Paket Protokolü", role: "Paket boyutunu minimize eden sıkıştırılmış acil durum veri formatı" },
      ],
      challenges: [
        "Android cihazların farklı marka ve modellerindeki Wi-Fi Direct bağlantı protokolü farklılıklarını standardize etmek.",
        "Kullanıcılar hareket halindeyken kopan mesh bağlantılarını anlık olarak yeniden inşa etmek.",
        "Arka planda çalışan dinleyicilerin pil tüketimini minimumda tutmak.",
      ],
      whatILearned:
        "Kritik acil durumlarda teorik bant genişliği hiçbir şeydir; dayanıklılık, düşük hata oranı ve deterministik kurtarma her şeydir. Mobil işletim sistemlerinin kablosuz katman sınırlarını sahada deneyimledim.",
      results: [
        "Google Play Store'da resmi olarak yayınlandı ve 5.000'den fazla aktif indirmeye ulaştı.",
        "Sakarya'da gerçekleştirilen acil durum tatbikatlarında cihazlar arası internetsiz ses aktarımı doğrulandı.",
        "Bölgesel basında genç bir mühendis adayının yenilikçi afet çözümü olarak haberleştirildi.",
      ],
    },
  },
  {
    slug: "takim-yildizi",
    number: "03",
    title: "Takım Yıldızı",
    badge: "WEB PLATFORMU · MERN · İŞ BİRLİĞİ",
    category: "Akademik İş Birliği & Ağ Platformu",
    year: "2025",
    shortDesc:
      "Üniversite öğrencilerine özel, kapalı devre akademik iş birliği, proje eşleştirme ve ders çalışma platformu.",
    highlights: ["MERN Stack", "Öğrenci Eşleştirme", "Görev Dağılımı", "Kapalı Devre Kampüs"],
    metadata: "AKADEMİK PLATFORM · MERN STACK · WEBSOCKETS · NOTION BENZERİ",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS", "WebSockets"],
    links: {},
    visualType: "academic-mockup",
    caseStudy: {
      overview:
        "Takım Yıldızı, yalnızca üniversite e-posta uzantısıyla doğrulanmış öğrencilerin katılabildiği, ders materyallerinin, proje ödevlerinin ve takım arkadaşı bulma süreçlerinin tek çatı altında toplandığı bir çalışma alanıdır.",
      problem:
        "Mühendislik öğrencileri dönem projelerinde farklı sohbet gruplarında kaybolmakta, ders notlarına organize erişememekte ve benzer yetkinliklere sahip güvenilir takım arkadaşları bulmakta zorlanmaktadır.",
      idea:
        "Notion benzeri sade bir arayüzle görev takibi, dosya arşivi ve yetenek eşleştirmesini bir araya getiren; yalnızca kampüs içine açık, reklamsız ve güvenli bir akademik çalışma platformu geliştirmek.",
      whatIBuilt:
        "Tüm MERN mimarisini kurdum, dinamik yetki yönetimini kurguladım ve gerçek zamanlı görev güncellemeleri için WebSocket altyapısını entegre ettim.",
      howItWorks: {
        steps: [
          { title: "Kampüs Doğrulaması", desc: "Öğrenciler akademik e-posta adresleriyle güvenli giriş yapar." },
          { title: "Takım Kurulumu", desc: "Proje liderleri ihtiyaç duyulan yetenekleri belirler ve ilan açar." },
          { title: "Çalışma Alanı", desc: "Kanban görev tahtaları, kaynak paylaşımı ve canlı tartışma kanalları." },
          { title: "Akademik Arşiv", desc: "Ders notları ve kod depoları güvenli bir şekilde saklanır." },
        ],
      },
      technology: [
        { name: "React.js & Tailwind CSS", role: "Hızlı, odaklanmayı artıran modern kullanıcı arayüzü" },
        { name: "Node.js & Express", role: "API servisleri ve oturum yönetimi" },
        { name: "MongoDB", role: "Esnek takım ve görev şemaları" },
        { name: "WebSockets", role: "Anlık görev güncellemeleri ve sınıf içi iletişim" },
      ],
      challenges: [
        "Öğrencilerin alışkanlıklarını karmaşık kurumsal araçlardan basit ve akıcı bir yapıya taşımak.",
        "Çoklu kullanıcıların aynı görev üzerinde anlık çakışmasız işlem yapabilmesini sağlamak.",
      ],
      whatILearned:
        "Öğrenciler için ürün tasarlarken sadelik her şeydir. Karmaşık kurumsal araçların hantallığından uzaklaşıp en doğrudan çözüme odaklanmanın önemini kavradım.",
      results: [
        "SUBÜ ve çevre mühendislik öğrencileri arasında prototip testleri başarıyla gerçekleştirildi.",
        "Dönem projelerinde takım kurma ve görev dağılımı süreçleri tek bir platforma indirgendi.",
      ],
    },
  },
  {
    slug: "qr-siparis-sistemi",
    number: "04",
    title: "QR Sipariş Sistemi",
    badge: "WEB APP · SAAS · ÜRÜN",
    category: "Restoran & Kafe Teknolojileri",
    year: "2025",
    shortDesc:
      "Kafeler ve restoranlar için fiziksel menü ve garson bağımlılığını azaltan, alt-saniyede mutfak terminaline ileten dijital QR sipariş sistemi.",
    highlights: ["QR Menü", "Anlık Sipariş Yönetimi", "Kampanya Modülü", "Mutfak Terminali"],
    metadata: "FULL-STACK SAAS · REAL-TIME WEBSOCKET · POSTGRESQL · TAILWIND",
    tech: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "WebSockets", "Tailwind CSS"],
    links: {},
    visualType: "browser-mockup",
    caseStudy: {
      overview:
        "Kafe ve restoranların yoğun saatlerdeki sipariş alma ve operasyonel aksaklıklarını ortadan kaldıran, uygulama indirme zorunluluğu olmayan hafif ve anlık çalışan bir web POS çözümüdür.",
      problem:
        "Yoğun saatlerde garsonların menü götürmesi, sipariş alması ve kasaya girmesi 10-15 dakikalık gecikmelere ve sipariş kayıplarına yol açmaktadır.",
      idea:
        "Masaya yerleştirilen dinamik QR kodun taranmasıyla 300 milisaniye altında açılan, sepete ekleme ve tek dokunuşla mutfak ekranına zil sesiyle anında düşen bir web uygulaması kurmak.",
      whatIBuilt:
        "Next.js ile hafif masaüstü/mobil web arayüzünü, WebSocket tabanlı canlı mutfak ekranı panelini ve dinamik menü/kampanya yönetim panelini geliştirdim.",
      howItWorks: {
        steps: [
          { title: "Masa QR Taraması", desc: "Uygulama yüklemeden tarayıcıda alt-saniyede dinamik menü açılır." },
          { title: "Hızlı Sipariş", desc: "Müşteri özel notlarını ekleyerek siparişi onaylar." },
          { title: "Canlı Mutfak İletimi", desc: "WebSocket ile mutfak terminaline anlık sipariş fişi düşer." },
          { title: "Yönetim Paneli", desc: "İşletme sahibi anlık masa doluluğunu ve ciro raporlarını izler." },
        ],
      },
      technology: [
        { name: "Next.js & TypeScript", role: "Hızlı ilk yükleme süresi ve tip güvenli veri akışı" },
        { name: "Node.js & WebSockets", role: "Masa ve mutfak arasında iki yönlü anlık veri iletişimi" },
        { name: "PostgreSQL", role: "Sipariş, ürün ve masa veritabanı" },
        { name: "Tailwind CSS", role: "Mobil öncelikli, temiz ve hızlı arayüz" },
      ],
      challenges: [
        "Kafe içi zayıf Wi-Fi bağlantılarında menünün gecikmesiz açılmasını sağlamak.",
        "Aynı masada birden fazla kişi sipariş verirken oluşabilecek eşzamanlılık çakışmalarını yönetmek.",
      ],
      whatILearned:
        "Yazılımın güzelliği kadar sahada garsonun ve mutfak aşçısının hayatını ne kadar kolaylaştırdığı önemlidir. Kullanıcı deneyimi sadece ekranda değil, dükkanın mutfağında başlar.",
      results: [
        "Ahenk Kafe dahil işletmelerde canlı test edildi ve sipariş alma süresi %60 kısaltıldı.",
        "Yoğun saatlerde sıfır sipariş kaybıyla yüksek hacimli adisyon akışı sağlandı.",
      ],
    },
  },
];

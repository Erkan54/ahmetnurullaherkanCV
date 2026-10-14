# Ahmet Nurullah Erkan · Portfolyo ve Dijital CV

![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs&logoColor=white)

Ahmet Nurullah Erkan'ın gömülü sistem, mobil uygulama ve web çalışmalarını; eğitimini, deneyimini ve basın bağlantılarını sunan kişisel portfolyo.

## İçerik

- Ana sayfa, hakkında, projeler, proje detayları, CV ve iletişim sayfaları.
- RescueRadar, Afet İletişim Ağı ve Takım Yıldızı proje sunumları.
- Teknik yetkinlik, deneyim çizelgesi, basın ve web sitesi bölümleri.
- Framer Motion ve Lenis ile animasyon/kaydırma bileşenleri; Tailwind CSS ile stil sistemi.

## Kurulum

```sh
git clone https://github.com/Erkan54/ahmetnurullaherkanCV.git
cd ahmetnurullaherkanCV
npm ci
npm run dev
```

Geliştirme sunucusu varsayılan olarak `http://localhost:3000` adresindedir. Node.js sürümü kurulu Next.js paketinin gereksinimlerini karşılamalıdır.

## Yapı ve özelleştirme

| Konum | İçerik |
| --- | --- |
| [`app/`](app/) | Next.js App Router sayfaları; Türkçe ve İngilizce yol karşılıkları |
| [`components/`](components/) | Proje kartları, sistem diyagramları, deneyim ve arayüz bileşenleri |
| [`data/`](data/) | `projects.ts`, `experience.ts`, `press.ts`, `skills.ts` içerikleri |
| [`public/`](public/) | Next.js tarafından sunulan görseller ve dosyalar |
| `index.html`, `css/`, `js/` | Depoda tutulan önceki statik HTML sürümü |

Yeni proje veya deneyim eklemek için önce `data/` içeriklerini güncelleyin. Metin/görsel yollarını kullanan bileşenleri de kontrol edin.

## Derleme ve yayın

```sh
npm run build
```

`next.config.mjs` içinde `output: 'export'` etkin olduğundan esas yayın çıktısı `out/` klasörüdür. Bu çıktı bir statik sunucuda barındırılır; Node tabanlı `next start` statik export için yayın yolu değildir. Dinamik proje yolları build sırasında üretilmelidir; iletişim bağlantıları tam bir arka uç hizmeti oluşturmaz.

Bu depo güncellemesinde README düzenlendi; site yeniden dağıtılmadı.

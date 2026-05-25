// Polatlı mahalle bazlı hyperlocal SEO data
// Her mahalle için ayrı sayfa → /polatli/[slug]/
// Schema: LocalBusiness areaServed (sadece bu mahalle) + Place + Service
// İçerik kuralı: uydurma yasak — kamuya açık nötr Polatlı bilgisi + BNS hizmetleri

export interface Mahalle {
  slug: string;
  ad: string; // "Fatih Mahallesi"
  konum: string; // "Polatlı merkez"
  not: string; // BNS spesifik not (örn. "BNS Enerji dükkanımızın bulunduğu mahalle")
  giris: string; // sayfa intro
  altyapi: string; // doğalgaz altyapı durumu
  referans: string | null; // 14 kurumsal referansta o mahalledeki proje (varsa)
  ozellik: string[]; // bullet liste — mahalle özelinde mantıklı hizmet vurgusu
}

export const mahalleler: Mahalle[] = [
  {
    slug: "fatih-mahallesi",
    ad: "Fatih Mahallesi",
    konum: "Polatlı merkez",
    not: "BNS Enerji & Doğalgaz dükkânımızın bulunduğu mahalle.",
    giris:
      "Fatih Mahallesi, Polatlı'nın merkez mahallelerinden biridir ve BNS Enerji & Doğalgaz dükkânı bu mahallede yer alır (Bıyıktay Cd. 37/A). Mahalle ve çevresindeki konut, ticari ve apartman yapılarına doğalgaz tesisatı, kombi montajı, klima satışı ve ısı pompası kurulumu hizmeti veriyoruz.",
    altyapi:
      "Polatlı doğalgaz dağıtımı Polgaz tarafından yürütülür. Fatih Mahallesi'nde doğalgaz altyapısı tamamlanmıştır; iç tesisat projeleri Polgaz onayıyla uygulanır.",
    referans: null,
    ozellik: [
      "Dükkân merkezli — keşif randevuları hızlı",
      "Konut + dükkân + apartman karışık doku",
      "Doğalgaz iç tesisat + kombi en yoğun talep",
    ],
  },
  {
    slug: "yenimahalle",
    ad: "Yenimahalle",
    konum: "Polatlı merkez",
    not: "Polatlı Yenimahalle Camii referans projesi bu mahallede.",
    giris:
      "Yenimahalle, Polatlı'nın merkeze yakın konut yoğun mahallelerindendir. BNS Enerji bu mahallede doğalgaz tesisatı, kombi, klima ve yerden ısıtma sistemleri kuruyor; mahallede tamamlanmış kamu referans projemiz Polatlı Yenimahalle Camii (yerden ısıtma + doğalgaz + kazan sistemleri).",
    altyapi:
      "Polgaz doğalgaz altyapısı tamamlanmıştır; mahalle genelinde apartman ve müstakil konut dağılımı dengelidir.",
    referans: "Polatlı Yenimahalle Camii — yerden ısıtma + doğalgaz + kazan sistemleri",
    ozellik: [
      "Cami referansı — kamu projesi",
      "Apartman + müstakil dengeli doku",
      "Yerden ısıtma ve merkezi sistem talebi yüksek",
    ],
  },
  {
    slug: "karsiyaka-mahallesi",
    ad: "Karşıyaka Mahallesi",
    konum: "Polatlı merkez",
    not: "Polatlı merkez yakın konut mahallesi.",
    giris:
      "Karşıyaka Mahallesi, Polatlı'nın merkez yakın konut mahallelerindendir. BNS Enerji burada doğalgaz tesisatı, kombi montajı, kombi değişimi, klima satışı ve ısı pompası kurulumu hizmeti veriyor. Daire bazlı doğalgaz tesisat ve yoğuşmalı kombi talebi yoğundur.",
    altyapi:
      "Polgaz doğalgaz altyapısı tamamlanmıştır. Konut yoğunluğu yüksek olan mahallelerden biridir.",
    referans: null,
    ozellik: [
      "Apartman doğalgaz iç tesisat",
      "Kombi yenileme talebi yüksek (eski yapı stoğu)",
      "Mayıs–Eylül arası klima yoğunluğu",
    ],
  },
  {
    slug: "cumhuriyet-mahallesi",
    ad: "Cumhuriyet Mahallesi",
    konum: "Polatlı merkez",
    not: "Polatlı'nın merkez mahallelerinden.",
    giris:
      "Cumhuriyet Mahallesi, Polatlı merkez mahallelerinden biridir. BNS Enerji bu mahallede doğalgaz tesisatı, kombi, klima ve yangın söndürme sistemleri kurulumu yapıyor. Ticari + konut karışık doku.",
    altyapi:
      "Polgaz doğalgaz altyapısı tamamlanmıştır. Merkez konum nedeniyle ticari yapı ve apartman karışıktır.",
    referans: null,
    ozellik: [
      "Konut + ticari karma doku",
      "Yangın söndürme tesisat talebi (ticari yapılar)",
      "Doğalgaz iç tesisat + kombi en sık iş",
    ],
  },
  {
    slug: "sentepe-mahallesi",
    ad: "Şentepe Mahallesi",
    konum: "Polatlı merkez genişleme alanı",
    not: "Polatlı'nın yeni yapılaşma alanlarından.",
    giris:
      "Şentepe Mahallesi, Polatlı'nın yeni yapılaşma alanlarından biridir. BNS Enerji bu mahallede yeni inşaat ve mevcut konutlarda doğalgaz tesisatı, kombi, ısı pompası, klima ve yerden ısıtma sistemleri kuruyor. Yeni yapılarda yoğuşmalı kombi ile yerden ısıtma kombinasyonu yaygındır.",
    altyapi:
      "Polgaz doğalgaz altyapısı bölge genelinde uzanmıştır. Yeni yapılaşma nedeniyle iç tesisat proje yoğunluğu yüksek olabilir.",
    referans: null,
    ozellik: [
      "Yeni inşaat doğalgaz iç tesisat",
      "Yerden ısıtma + yoğuşmalı kombi entegrasyonu",
      "Isı pompası ilgisi (yeni yapı, iyi izolasyon)",
    ],
  },
  {
    slug: "yildiz-mahallesi",
    ad: "Yıldız Mahallesi",
    konum: "Polatlı merkez",
    not: "Polatlı merkez konut mahallesi.",
    giris:
      "Yıldız Mahallesi, Polatlı'nın merkez konut mahallelerinden biridir. BNS Enerji burada doğalgaz iç tesisatı, kombi, kombi değişimi ve klima montajı hizmeti veriyor.",
    altyapi:
      "Polgaz doğalgaz altyapısı tamamlanmıştır. Apartman ve müstakil konut karışık doku.",
    referans: null,
    ozellik: [
      "Apartman doğalgaz iç tesisat",
      "Kombi değişimi (eski yapı stoğu)",
      "Klima satış + yetkili servis montajı",
    ],
  },
  {
    slug: "ataturk-mahallesi",
    ad: "Atatürk Mahallesi",
    konum: "Polatlı merkez",
    not: "Polatlı merkez mahallesi.",
    giris:
      "Atatürk Mahallesi, Polatlı'nın merkez mahallelerinden biridir. BNS Enerji bu mahallede doğalgaz iç tesisatı, kombi, klima ve ısı pompası hizmeti veriyor.",
    altyapi:
      "Polgaz doğalgaz altyapısı tamamlanmıştır. Konut yoğunluklu mahalle.",
    referans: null,
    ozellik: [
      "Konut doğalgaz tesisat ve kombi",
      "Yoğuşmalı kombi değişim talebi",
      "Mayıs–Eylül arası klima yoğunluğu",
    ],
  },
];

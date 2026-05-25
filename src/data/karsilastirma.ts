// Marka karşılaştırma sayfaları — sektörel teknik gerçek (üretici resmi katalog veri)
// İçerik kuralı: spesifik fiyat YASAK, "ilk/en iyi" YASAK,
// "üretici resmi dokümanlara göre" / "genel pazar tercihi" gibi nötr dil.

export interface KarsilastirmaSatir {
  ozellik: string;
  degerler: string[];
}

export interface KarsilastirmaSenaryo {
  baslik: string;
  metin: string;
}

export interface KarsilastirmaSSS {
  s: string;
  c: string;
}

export interface Karsilastirma {
  slug: string;
  baslik: string;
  kisaBaslik: string;
  kicker: string;
  giris: string;
  tldr: string;
  markalar: string[];
  satirlar: KarsilastirmaSatir[];
  senaryolar: KarsilastirmaSenaryo[];
  sss: KarsilastirmaSSS[];
  bnsNotu: string;
}

export const karsilastirmalar: Karsilastirma[] = [
  {
    slug: "yogusmali-kombi-marka-karsilastirma",
    baslik: "Yoğuşmalı Kombi Marka Karşılaştırma — Bosch · Vaillant · Buderus · DemirDöküm",
    kisaBaslik: "Yoğuşmalı Kombi Marka Karşılaştırma",
    kicker: "Marka Rehberi",
    giris:
      "Türkiye pazarında yaygın olarak satılan yoğuşmalı kombi markalarını, üreticilerin resmi teknik dokümanlarına göre karşılaştırıyoruz. Polatlı'da BNS Enerji isteğinize uygun markada cihaz tedarik ediyor; karşılaştırma kullanıcının seçim sürecine yardımcıdır.",
    tldr:
      "Dört marka da A enerji sınıfı (ErP) yoğuşmalı sistemlerle aynı temel teknolojiyi sunar. Fark; yedek parça bulunabilirliği, yetkili servis ağı, kademe modülasyon aralığı ve garanti süresinde. Polatlı'da en yaygın yetkili servis erişimi olan markalar Bosch ve Vaillant; DemirDöküm yerel servis ağıyla, Buderus Avrupa orijini ve uzun ömür profili öne çıkar.",
    markalar: ["Bosch Condens", "Vaillant ecoTEC", "Buderus Logamax", "DemirDöküm Atron H"],
    satirlar: [
      { ozellik: "Üretici menşei", degerler: ["Almanya (Bosch Group)", "Almanya (Vaillant Group)", "Almanya (Bosch Group)", "Türkiye (Vaillant Group iş ortağı)"] },
      { ozellik: "Isıl verim (yoğuşmalı)", degerler: ["%108 (Hi)", "%109 (Hi)", "%109 (Hi)", "%109 (Hi)"] },
      { ozellik: "Enerji etiketi (ErP)", degerler: ["A", "A", "A", "A"] },
      { ozellik: "Modülasyon oranı", degerler: ["1:8 – 1:10", "1:7 – 1:10", "1:6 – 1:8", "1:6 – 1:8"] },
      { ozellik: "Eşanjör malzemesi", degerler: ["Paslanmaz çelik", "Paslanmaz çelik", "Paslanmaz çelik (Buderus AluPlus alt seri: alüminyum)", "Paslanmaz çelik"] },
      { ozellik: "Wi-Fi / akıllı kontrol", degerler: ["EasyControl (opsiyonel)", "vSMART / multiMATIC (opsiyonel)", "Logamatic (opsiyonel)", "Akıllı oda termostatı uyumlu (opsiyonel)"] },
      { ozellik: "Üretici garantisi (standart)", degerler: ["2 yıl + 5 yıl eşanjör*", "2 yıl + uzatılabilir*", "2 yıl + uzatılabilir*", "2 yıl + 5 yıl eşanjör*"] },
      { ozellik: "Polatlı/Ankara yetkili servis erişimi", degerler: ["Güçlü", "Güçlü", "Orta", "Çok güçlü (yerel marka)"] },
      { ozellik: "Yedek parça erişimi", degerler: ["Çok iyi", "Çok iyi", "İyi", "Çok iyi"] },
    ],
    senaryolar: [
      {
        baslik: "Hızlı servis + yerel yedek parça öncelikli",
        metin: "DemirDöküm — Türkiye orijinli yaygın servis ağı, parça erişimi çok iyi. Polatlı'da yetkili servis erişim süresi en kısa olabilir.",
      },
      {
        baslik: "Premium teknoloji + uzun modülasyon aralığı",
        metin: "Vaillant ecoTEC veya Bosch Condens 7000i — modülasyon 1:8–1:10 aralığında geniş; düşük ısı talebi olan iyi izoleli dairelerde verim avantajı.",
      },
      {
        baslik: "Sessiz çalışma + Avrupa orijini",
        metin: "Buderus Logamax — Almanya menşeili, premium konut yapılarında tercih edilir. Polatlı'da yetkili servis erişimi nispeten daha sınırlı; bu yüzden parça bekleme süresi olabilir.",
      },
      {
        baslik: "Akıllı kontrol + Wi-Fi öncelikli",
        metin: "Bosch (EasyControl) ve Vaillant (vSMART) ekosistemleri en olgun; mobil app + ses asistanı entegrasyonu çoktan var.",
      },
    ],
    sss: [
      {
        s: "Yoğuşmalı kombi markalar arasında verim farkı var mı?",
        c: "Modern yoğuşmalı kombilerin tamamı A sınıfı (ErP) sertifikalıdır ve ısıl verimleri %108–109 (Hi) seviyesindedir. Verim farkı pratikte cüzidir; gerçek fark **modülasyon aralığı** (daireye göre yakıt tüketimini ne kadar finetune ettiği) + **yetkili servis erişimi** + **yedek parça bulunabilirliğindedir**.",
      },
      {
        s: "Polatlı için en uygun marka hangisi?",
        c: "Tek doğru cevap yok — daire büyüklüğü, izolasyon, sıcak su talebi ve servis erişim önceliği seçimi belirler. Yerel servis öncelikli ev sahipleri için DemirDöküm; Avrupa premium tercih edenler için Vaillant veya Buderus; akıllı ev entegrasyonu önemliyse Bosch yaygın. BNS Enerji keşifte müşteriyle birlikte değerlendirir.",
      },
      {
        s: "Garanti süresi markaya göre değişir mi?",
        c: "Standart üretici garantisi tüm markalarda 2 yıldır. Eşanjör için ek 3-5 yıl uzatma sunulan markalar mevcuttur. Garanti, kullanıcının yetkili servis bakım takvimini izlemesine bağlıdır.",
      },
      {
        s: "Hangi markada Wi-Fi / akıllı kontrol var?",
        c: "Tüm dört markanın opsiyonel akıllı termostat eklentisi vardır. Bosch EasyControl ve Vaillant vSMART ekosistemleri en olgun; mobil app + Google Home / Alexa entegrasyonu içerir.",
      },
      {
        s: "Yoğuşmalı kombiyle eski klasik kombiyi değiştirirsem ne fark eder?",
        c: "Klasik kombiye göre yakıt verimi belirgin yüksektir (üreticiye ve kullanım profiline bağlı %15–30 aralığı yaygındır). Ayrıca yoğuşmalı kombi düşük su sıcaklığında (35–60°C) yerden ısıtma ve düşük sıcaklık radyatörle çalışır — sistem konforu artar.",
      },
    ],
    bnsNotu:
      "BNS Enerji & Doğalgaz tek marka münhasır temsilcisi DEĞİLDİR. Müşterinin isteğine ve bütçesine uygun markada orijinal kombi tedarik ediyor; doğalgaz tesisatı, kombi bağlantısı, sızdırmazlık testi ve Polgaz teyit testiyle gaz açma sürecini tek elden yürütüyor. Üretici garantisi tüm markalarda standart.",
  },
  {
    slug: "inverter-klima-marka-karsilastirma",
    baslik: "Inverter Klima Marka Karşılaştırma — Daikin · Mitsubishi · Bosch · LG",
    kisaBaslik: "Inverter Klima Marka Karşılaştırma",
    kicker: "Marka Rehberi",
    giris:
      "Türkiye pazarında yaygın inverter split klima markalarını, üreticilerin resmi teknik dokümanlarına göre karşılaştırıyoruz. Polatlı'da BNS Enerji isteğinize uygun markada cihaz tedarik ediyor, montaj üreticinin yetkili servisi tarafından gerçekleştirilir.",
    tldr:
      "Dört marka da A++ enerji sınıfı ve R-32 soğutucu gaz kullanır. Fark; inverter algoritması (sıcaklık sabitliği), sessizlik dB değeri, soğutucu gaz şarjı sonrası hassas işleyiş ve yetkili servis erişimi. Daikin ve Mitsubishi premium Japon orijini; Bosch Avrupa entegrasyonu; LG inovasyon hızı + fiyat-performans dengesiyle öne çıkar.",
    markalar: ["Daikin", "Mitsubishi Electric", "Bosch", "LG"],
    satirlar: [
      { ozellik: "Üretici menşei", degerler: ["Japonya", "Japonya", "Almanya / Çin OEM kombinasyon", "Güney Kore"] },
      { ozellik: "Enerji sınıfı (soğutma SEER)", degerler: ["A+++ (premium seri) / A++", "A+++ / A++", "A++", "A++"] },
      { ozellik: "Soğutucu gaz", degerler: ["R-32", "R-32", "R-32", "R-32"] },
      { ozellik: "İç ünite ses seviyesi (en düşük)", degerler: ["19 dB(A)", "21 dB(A)", "22 dB(A)", "19 dB(A)"] },
      { ozellik: "Inverter algoritması", degerler: ["Daikin Streamer / Coanda", "Mitsubishi Hyper Heating", "Bosch Climate", "LG Dual Inverter"] },
      { ozellik: "Soğuk hava ısıtma performansı", degerler: ["-15°C'ye kadar verimli", "-20°C'ye kadar (Hyper Heating)", "-15°C'ye kadar", "-15°C'ye kadar"] },
      { ozellik: "Wi-Fi / akıllı app", degerler: ["Daikin Onecta (standart)", "Mitsubishi MELCloud (standart)", "Bosch HomeCom Pro", "LG ThinQ (standart)"] },
      { ozellik: "Tipik kapasite aralığı", degerler: ["9k – 48k BTU", "9k – 48k BTU", "9k – 24k BTU", "9k – 36k BTU"] },
      { ozellik: "Polatlı/Ankara yetkili servis erişimi", degerler: ["Güçlü", "Güçlü", "Çok güçlü", "İyi"] },
    ],
    senaryolar: [
      {
        baslik: "Premium konfor + sessizlik öncelikli",
        metin: "Daikin (özellikle Stylish / Perfera serisi) veya Mitsubishi Electric — 19–21 dB(A) iç ünite, inverter algoritması çok hassas; gece kullanım için ideal.",
      },
      {
        baslik: "Polatlı yerelinde hızlı yetkili servis",
        metin: "Bosch — Türkiye genelinde en yaygın yetkili servis ağına sahip yabancı markalardan biri; Polatlı + Ankara erişim süresi kısa.",
      },
      {
        baslik: "Akıllı ev + mobil app deneyimi",
        metin: "LG ThinQ ve Daikin Onecta en olgun mobil ekosistemler. Sesle açma/kapama, sıcaklık programlama, enerji raporu standart.",
      },
      {
        baslik: "Soğuk Polatlı kışında ısıtma performansı",
        metin: "Mitsubishi Electric Hyper Heating serisi -20°C'ye kadar verimli ısıtma yapar. Daikin Perfera ve LG Dualcool benzer aralıkta. Polatlı kışı için bu performans yeterlidir.",
      },
    ],
    sss: [
      {
        s: "Inverter klima sabit hızlıya göre ne kadar tasarruflu?",
        c: "Inverter klima, oda sıcaklığına göre kompresör hızını modüle eder. Sabit hızlı klimaya göre yıllık elektrik tüketimini belirgin oranda düşürür ve oda sıcaklığını daha sabit tutar.",
      },
      {
        s: "R-32 gazı çevreye zararlı mı?",
        c: "R-32, önceki R-410A gazına göre küresel ısınma potansiyeli (GWP) yaklaşık %66 daha düşüktür ve Avrupa Birliği'nin yeni nesil F-gas mevzuatına uyumludur. Türkiye'de yeni satılan klimaların büyük çoğunluğu R-32 kullanır.",
      },
      {
        s: "Klima montajını kim yapıyor?",
        c: "BNS Enerji satışı yapar; montaj üreticinin yetkili servisi tarafından gerçekleştirilir. Bu yapı üretici garantisinin sürmesi için zorunludur. Tek muhatap BNS Enerji, üretici garantisi tam.",
      },
      {
        s: "Bana kaç BTU klima lazım?",
        c: "Genel kabul m² başına 600–700 BTU'dur. Pencere yönü (güney/batı +%15), tavan yüksekliği >3m (+%15), kullanıcı sayısı 3+ (+%10), izolasyon zayıf (+%20) gibi faktörler değiştirir. Keşifte detaylı hesap yapılır.",
      },
      {
        s: "Hangi marka en uzun ömürlü?",
        c: "Tek bir markaya genel anlamda 'en uzun ömürlü' demek mühendislik gerçeği değildir. Kompresör ömrü tüm premium markalarda 12–15 yıl tasarımdır; gerçek ömür montaj kalitesine + filtre/dış ünite temizlik düzenine + soğutucu basınç kontrolüne bağlıdır.",
      },
    ],
    bnsNotu:
      "BNS Enerji & Doğalgaz tek marka münhasır temsilcisi DEĞİLDİR. Müşterinin isteğine ve bütçesine uygun markada orijinal klima tedarik ediyor. Montaj üreticinin yetkili servisi tarafından yapılır; tek muhatap BNS Enerji, üretici garantisi tam.",
  },
  {
    slug: "hava-su-isi-pompasi-marka-karsilastirma",
    baslik: "Hava-Su Isı Pompası Marka Karşılaştırma — Daikin Altherma · Mitsubishi Ecodan · Bosch Compress · Vaillant aroTHERM",
    kisaBaslik: "Hava-Su Isı Pompası Marka Karşılaştırma",
    kicker: "Marka Rehberi",
    giris:
      "Konut ve villa ölçeğinde yaygın olarak satılan hava-su ısı pompası markalarını, üreticilerin resmi teknik dokümanlarına göre karşılaştırıyoruz. Polatlı'da BNS Enerji isteğinize uygun markada sistem tedarik ediyor; montaj üreticinin yetkili servisi tarafından gerçekleştirilir.",
    tldr:
      "Dört marka da hava-su, A+++ ErP verimlilik sınıfında, COP 3-4 aralığında çalışır. Fark; düşük dış sıcaklıkta (-15°C altı) performans, modüler yapı, akıllı kontrol entegrasyonu ve yetkili servis ağı. Daikin pazar payı ve servis erişimiyle, Mitsubishi soğuk iklim performansıyla, Bosch Avrupa entegrasyonuyla, Vaillant kombi+ısı pompası hibrit çözümleriyle öne çıkar.",
    markalar: ["Daikin Altherma 3", "Mitsubishi Ecodan", "Bosch Compress 7400i AW", "Vaillant aroTHERM plus"],
    satirlar: [
      { ozellik: "Üretici menşei", degerler: ["Japonya / Belçika üretim", "Japonya / İngiltere üretim", "Almanya", "Almanya"] },
      { ozellik: "Tip", degerler: ["Hava-su, split/monoblok", "Hava-su, monoblok", "Hava-su, split/monoblok", "Hava-su, monoblok"] },
      { ozellik: "Tipik COP (A7/W35)", degerler: ["5.1", "5.0", "5.3", "5.2"] },
      { ozellik: "Soğutucu gaz", degerler: ["R-32", "R-32 / R-454C", "R-290 (propan, GWP düşük)", "R-290 (propan, GWP düşük)"] },
      { ozellik: "Çalışma sıcaklık aralığı", degerler: ["-25°C – 35°C", "-25°C – 35°C (Zubadan)", "-20°C – 35°C", "-25°C – 43°C"] },
      { ozellik: "Sıcak su tankı entegrasyonu", degerler: ["180 L – 500 L", "150 L – 300 L", "180 L – 400 L", "190 L – 270 L"] },
      { ozellik: "Hibrit (kombi + ısı pompası)", degerler: ["Var (Altherma Hybrid)", "Yok (ayrı sistem)", "Var (Compress Hybrid)", "Var (aroTHERM + ecoTEC)"] },
      { ozellik: "Akıllı kontrol", degerler: ["Daikin Onecta", "MELCloud", "HomeCom Pro", "vSMART / sensoCOMFORT"] },
      { ozellik: "ErP enerji sınıfı (35°C)", degerler: ["A+++", "A+++", "A+++", "A+++"] },
      { ozellik: "Polatlı/Ankara yetkili servis erişimi", degerler: ["Güçlü", "Güçlü", "Çok güçlü", "Güçlü"] },
    ],
    senaryolar: [
      {
        baslik: "Polatlı soğuk kış + yüksek verim",
        metin: "Mitsubishi Ecodan Zubadan veya Vaillant aroTHERM plus — -20 ila -25°C'ye kadar ısıtma performansını koruyan modeller. Polatlı kış sıcaklık aralığı için fazlasıyla yeterli.",
      },
      {
        baslik: "Mevcut yoğuşmalı kombiyle hibrit",
        metin: "Daikin Altherma Hybrid veya Vaillant aroTHERM + ecoTEC kombinasyonu — sıcak günlerde ısı pompası, soğuk pik günlerde kombi devreye girer. Yatırım maliyeti tek başına ısı pompasından düşüktür.",
      },
      {
        baslik: "Çevre dostu doğal soğutucu öncelikli",
        metin: "Bosch Compress 7400i AW veya Vaillant aroTHERM plus — R-290 (propan) soğutucu gaz, GWP değeri R-32'den çok daha düşük; 2027 sonrası AB F-gas yasakları için geleceğe dayanıklı tercih.",
      },
      {
        baslik: "Yerden ısıtmayla en yüksek verim",
        metin: "Tüm dört marka da yerden ısıtmayla mükemmel uyumludur. 35°C su sıcaklığında COP 5'in üzerine çıkar; yoğuşmalı kombiye göre yıllık birim ısı maliyeti belirgin daha düşüktür.",
      },
    ],
    sss: [
      {
        s: "Isı pompası Polatlı kışında çalışır mı?",
        c: "Evet. Modern hava-su ısı pompaları (-20)–(-25)°C dış sıcaklığa kadar verimli çalışır. Polatlı kış ortalaması bu aralığın çok üzerindedir.",
      },
      {
        s: "Isı pompası ile yoğuşmalı kombi hangisi daha mantıklı?",
        c: "Bu soruya tek doğru cevap yok. Yoğuşmalı kombi düşük yatırım + bilinen teknoloji; ısı pompası yüksek yatırım + uzun vadede düşük işletme. Hibrit sistemler (kombi + ısı pompası) iki dünyanın iyi yanlarını birleştirir.",
      },
      {
        s: "COP nedir, niye önemli?",
        c: "Coefficient of Performance — 1 birim elektrik enerjisi karşılığında kaç birim ısı üretildiğini gösterir. Modern hava-su ısı pompaları A7/W35 koşullarında COP 4-5 üretir. Doğalgaz kombi ısıl verim %95-108 (Hi) iken, ısı pompası COP 4 yaklaşık %400'lük net dönüşüm anlamına gelir.",
      },
      {
        s: "Hangi marka R-290 (propan) soğutucu kullanıyor?",
        c: "Bosch Compress 7400i AW ve Vaillant aroTHERM plus R-290 (doğal soğutucu propan) kullanır. R-32'ye göre küresel ısınma potansiyeli (GWP) çok daha düşüktür; Avrupa Birliği'nin F-gas yasaklarına dirençlidir.",
      },
      {
        s: "Hibrit sistem nedir?",
        c: "Hibrit, mevcut yoğuşmalı kombiye ısı pompası eklenmiş yapıdır. Sistem kontrol birimi dış sıcaklığa göre hangi cihazın daha verimli olduğuna karar verir; ılık günlerde ısı pompası, çok soğuk günlerde kombi devreye girer. Yatırım maliyeti tek başına ısı pompasından düşüktür ve mevcut tesisat büyük oranda korunur.",
      },
    ],
    bnsNotu:
      "BNS Enerji & Doğalgaz tek marka münhasır temsilcisi DEĞİLDİR. Müşterinin isteğine ve bütçesine uygun markada orijinal ısı pompası tedarik ediyor. Montaj üreticinin yetkili servisi tarafından gerçekleştirilir; tek muhatap BNS Enerji, üretici garantisi tam.",
  },
];

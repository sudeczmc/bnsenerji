// BNS Enerji & Doğalgaz — hizmet detayları
// ozet = WordPress sitesindeki BNS ifadesi (birebir)
// giris/adimlar/alanlar = genel teknik doğru bilgi (kamuya açık, uydurma değil)
// BNS'e özel detay (garanti, süre vb.) baba onayıyla sonradan eklenecek.

export interface HizmetAdim {
  baslik: string;
  metin: string;
}

export interface Hizmet {
  slug: string;
  ad: string;
  kisaAd: string;
  ozet: string;
  gorsel: string;
  giris: string;
  adimlar: HizmetAdim[];
  alanlar: string[];
}

export const hizmetler: Hizmet[] = [
  {
    slug: "dogalgaz-tesisati",
    ad: "Doğalgaz Tesisatı & Projelendirme",
    kisaAd: "Doğalgaz Tesisatı",
    ozet:
      "Konut ve ticari yapılarda doğalgaz tesisat projelendirme, borulama, vana montajı ve sızdırmazlık testleriyle güvenli sistem kurulumu.",
    gorsel: "/images/wp/Electrical-power-food-or-even-water-have-risen-so.jpg",
    giris:
      "Doğalgaz iç tesisatı, sayaç sonrasında binanın ve dairelerin içindeki boru hattının kurulmasıdır. Kombi, kat kaloriferi, ocak ve şofben gibi cihazların güvenle çalışması, bu tesisatın standartlara uygun döşenmesine bağlıdır. Projelendirmeden gaz açımına kadar tüm aşamalar yetkili firma tarafından yürütülür.",
    adimlar: [
      { baslik: "Keşif ve Projelendirme", metin: "Mekân yerinde incelenir, ihtiyaca göre proje hazırlanır ve dağıtım şirketinin onayına sunulur." },
      { baslik: "Borulama ve Montaj", metin: "Onaylı projeye göre boru hattı döşenir, vana ve cihaz bağlantıları yapılır." },
      { baslik: "Sızdırmazlık Testi", metin: "Hat basınç altında test edilerek sızdırmazlık doğrulanır." },
      { baslik: "Kontrol ve Gaz Açımı", metin: "Dağıtım şirketi kontrolünün ardından sistem güvenle devreye alınır." },
    ],
    alanlar: ["Konut ve daireler", "İş yerleri ve ticari binalar", "Endüstriyel tesisler"],
  },
  {
    slug: "isi-pompasi",
    ad: "Isı Pompası Montajı",
    kisaAd: "Isı Pompası",
    ozet:
      "Enerji tasarrufu sağlayan ısı pompalarının montajı, devreye alma ve test süreçlerinde yüksek performanslı çözümler sunulur.",
    gorsel: "/images/wp/De-plus-en-plus-populaires-les-pompes-a-chaleur.jpg",
    giris:
      "Isı pompası; havadan, sudan veya topraktan ısı enerjisi çekerek ısıtma ve soğutma yapan yüksek verimli bir sistemdir. Tükettiği elektriğin birkaç katı kadar ısı sağladığı için işletme maliyeti düşüktür. Yerden ısıtma, radyatör veya fan-coil sistemleriyle birlikte çalışır.",
    adimlar: [
      { baslik: "Keşif ve Sistem Seçimi", metin: "Yapının ısı ihtiyacı hesaplanır, uygun kapasitede ısı pompası belirlenir." },
      { baslik: "Dış ve İç Ünite Montajı", metin: "Dış ünite uygun konuma yerleştirilir, iç ünite ve varsa tank bağlantıları yapılır." },
      { baslik: "Hidrolik ve Elektrik Bağlantı", metin: "Tesisat ve elektrik bağlantıları standartlara uygun tamamlanır." },
      { baslik: "Devreye Alma ve Test", metin: "Sistem çalıştırılır, verim ve güvenlik kontrolleri yapılır." },
    ],
    alanlar: ["Konutlar ve villalar", "Ticari binalar", "Yerden ısıtmalı yapılar"],
  },
  {
    slug: "yangin-sondurme",
    ad: "Yangın Söndürme Sistemleri",
    kisaAd: "Yangın Söndürme",
    ozet:
      "Sprinkler, gazlı ve köpüklü sistemlerde borulama, bağlantı ve test uygulamalarıyla standartlara uygun güvenli sistemler kurulur.",
    gorsel: "/images/wp/2e7f649b4d88f4d1e1d9f958532c1d15.jpg",
    giris:
      "Yangın söndürme sistemleri, bir yangın anında erken müdahaleyle can ve mal güvenliğini korur. Sprinkler sistemleri otomatik su püskürtmesiyle, gazlı sistemler elektronik ve hassas ortamlarda, köpüklü sistemler yanıcı sıvı risklerinde kullanılır. Tasarım ve kurulum, yürürlükteki yangın yönetmeliğine uygun yapılır.",
    adimlar: [
      { baslik: "Risk Analizi ve Proje", metin: "Yapının yangın riski değerlendirilir, uygun söndürme sistemi projelendirilir." },
      { baslik: "Borulama ve Pompa İstasyonu", metin: "Boru hattı döşenir, hidrofor ve pompa bağlantıları kurulur." },
      { baslik: "Bağlantı ve Test", metin: "Söndürme bileşenleri bağlanır, sistem çalışma testinden geçirilir." },
    ],
    alanlar: ["İş yerleri ve fabrikalar", "Depo ve otoparklar", "Ticari ve kamu binaları"],
  },
  {
    slug: "klima",
    ad: "Klima Sistemleri",
    kisaAd: "Klima",
    ozet:
      "Split, multisplit ve VRF sistemlerinin montajı, bağlantı ve devreye alma işlemleriyle konforlu ortamlar oluşturulur.",
    gorsel: "/images/wp/9f404e1487a6bb753e9bb83ca3e4937f.jpg",
    giris:
      "Klima sistemleri mekânın büyüklüğüne ve kullanımına göre seçilir. Split sistemler tek bir oda veya konut için, multisplit sistemler tek dış üniteyle birden fazla iç ünite için, VRF sistemleri ise çok bölümlü büyük binalar için uygundur. Doğru kapasite ve montaj; hem konfor hem enerji verimliliği için belirleyicidir.",
    adimlar: [
      { baslik: "İhtiyaç ve Kapasite Belirleme", metin: "Mekânın metrekaresine ve kullanımına göre uygun sistem ve kapasite seçilir." },
      { baslik: "Ürün Tedariki", metin: "BNS Enerji, Bosch Partner Program üyesi olarak orijinal ürün tedarik eder." },
      { baslik: "Montaj ve Devreye Alma", metin: "Montaj Bosch yetkili servisi tarafından gerçekleştirilir, sistem devreye alınır." },
    ],
    alanlar: ["Konut ve daireler", "Ofis ve iş yerleri", "Çok bölümlü ticari binalar (VRF)"],
  },
  {
    slug: "yerden-isitma",
    ad: "Yerden Isıtma Sistemleri",
    kisaAd: "Yerden Isıtma",
    ozet:
      "Enerji verimliliği ve konforu bir araya getiren yerden ısıtma sistemlerinde profesyonel montaj ve devreye alma hizmetleri.",
    gorsel: "/images/wp/16d30f517f4f43909ddb6cfd60e76480.jpg",
    giris:
      "Yerden ısıtma, döşeme altına serilen boru hattıyla ısıyı tüm zemine dengeli biçimde yayan bir sistemdir. Düşük sıcaklıkta çalıştığı için konforlu ve enerji açısından verimlidir; özellikle ısı pompası ve yoğuşmalı kombiyle birlikte yüksek tasarruf sağlar.",
    adimlar: [
      { baslik: "Proje ve Hazırlık", metin: "Mekân planına göre boru düzeni ve kolektör konumu belirlenir." },
      { baslik: "Boru Serme ve Şap Hazırlığı", metin: "Yalıtım üzerine boru hattı serilir, şap dökümüne hazır hale getirilir." },
      { baslik: "Kolektör Bağlantı ve Devreye Alma", metin: "Kolektör ve ısı kaynağı bağlantıları yapılır, sistem test edilir." },
    ],
    alanlar: ["Yeni yapılan konutlar", "Villalar", "Ticari mekânlar"],
  },
  {
    slug: "merkezi-isitma",
    ad: "Merkezi Isıtma & Kazan Sistemleri",
    kisaAd: "Merkezi Isıtma",
    ozet:
      "Apartman, site ve ticari yapılarda merkezi ısıtma sistemlerinin kurulum ve devreye alma işlemlerinde eksiksiz uygulama sağlanır.",
    gorsel: "/images/wp/indir-4.jpg",
    giris:
      "Merkezi ısıtma sistemleri, tek bir kazan dairesinden tüm binaya ısı dağıtır. Apartman, site ve ticari yapılarda kazan, sirkülasyon pompası ve dağıtım hattıyla kurulur; kalorimetre uygulamasıyla her bağımsız bölüm kendi tüketimi kadar öder.",
    adimlar: [
      { baslik: "Sistem Tasarımı", metin: "Binanın ısı ihtiyacına göre kazan kapasitesi ve dağıtım hattı planlanır." },
      { baslik: "Kazan ve Hat Montajı", metin: "Kazan dairesi ekipmanları ve dağıtım boruları kurulur." },
      { baslik: "Dengeleme ve Devreye Alma", metin: "Sistem dengelenir, test edilir ve teslim edilir." },
    ],
    alanlar: ["Apartman ve siteler", "Ticari binalar", "Kamu yapıları"],
  },
];

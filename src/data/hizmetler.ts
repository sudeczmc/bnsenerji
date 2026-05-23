// BNS Enerji & Doğalgaz — hizmet detayları
// ozet = WordPress sitesindeki BNS ifadesi (birebir)
// giris/adimlar/alanlar = genel teknik doğru bilgi (kamuya açık, uydurma değil)
// BNS'e özel detay (garanti, süre vb.) baba onayıyla sonradan eklenecek.

export interface HizmetAdim {
  baslik: string;
  metin: string;
}

export interface HizmetSSS {
  s: string;
  c: string;
}

export interface Hizmet {
  slug: string;
  ad: string;
  kisaAd: string;
  ozet: string;
  gorsel: string;
  tldr: string;
  giris: string;
  adimlar: HizmetAdim[];
  alanlar: string[];
  sss: HizmetSSS[];
}

export const hizmetler: Hizmet[] = [
  {
    slug: "dogalgaz-tesisati",
    ad: "Doğalgaz Tesisatı & Projelendirme",
    kisaAd: "Doğalgaz Tesisatı",
    ozet:
      "Konut ve ticari yapılarda doğalgaz tesisat projelendirme, borulama, vana montajı ve sızdırmazlık testleriyle güvenli sistem kurulumu.",
    gorsel: "/images/wp/Electrical-power-food-or-even-water-have-risen-so.jpg",
    tldr:
      "Doğalgaz iç tesisatı, sayaç sonrasındaki boru hattının TS 7363 standardına ve dağıtım şirketi (Polatlı'da Polgaz) onayına uygun döşenmesidir.",
    giris:
      "Doğalgaz iç tesisatı, sayaç sonrasında binanın ve dairelerin içindeki boru hattının kurulmasıdır. Kombi, kat kaloriferi, ocak ve şofben gibi cihazların güvenle çalışması, bu tesisatın standartlara uygun döşenmesine bağlıdır. Projelendirmeden gaz açımına kadar tüm aşamalar yetkili firma tarafından yürütülür.",
    adimlar: [
      { baslik: "Keşif ve Projelendirme", metin: "Mekân yerinde incelenir, ihtiyaca göre proje hazırlanır ve dağıtım şirketinin onayına sunulur." },
      { baslik: "Borulama ve Montaj", metin: "Onaylı projeye göre boru hattı döşenir, vana ve cihaz bağlantıları yapılır." },
      { baslik: "Sızdırmazlık Testi", metin: "Hat basınç altında test edilerek sızdırmazlık doğrulanır." },
      { baslik: "Kontrol ve Gaz Açımı", metin: "Dağıtım şirketi kontrolünün ardından sistem güvenle devreye alınır." },
    ],
    alanlar: ["Konut ve daireler", "İş yerleri ve ticari binalar", "Endüstriyel tesisler"],
    sss: [
      { s: "Doğalgaz tesisatı için Polgaz onayı şart mı?", c: "Polatlı doğalgaz dağıtıcısı Polgaz'dır. Tüm iç tesisat projeleri yetkili firma tarafından hazırlanıp dağıtım şirketinin onayına sunulur; onay sonrası uygulama başlar." },
      { s: "Sızdırmazlık testi nasıl yapılır?", c: "Tesisat tamamlandıktan sonra hat, üreticinin ve dağıtım şirketinin belirlediği basınçta tutulur. Belirlenen sürede manometreyle algılanabilir basınç düşüşü olmazsa sızdırmazlık doğrulanır." },
      { s: "Hangi standartlara göre iç tesisat yapılır?", c: "Türk Standartları Enstitüsü TS 7363 (binalar için doğalgaz iç tesisat), TS EN 1775 ve dağıtım şirketinin teknik şartnamesi esas alınır." },
      { s: "Sayaç bağlantısı ve gaz açma süreci nasıl ilerler?", c: "Tesisat onaylandıktan sonra dağıtım şirketine abonelik başvurusu yapılır. Sayaç bağlantısı dağıtıcı tarafından kurulur ve devreye alma birlikte gerçekleşir." },
      { s: "Doğalgaz tesisatı kaç yılda bir kontrol edilmelidir?", c: "Dağıtım şirketleri ve cihaz üreticileri periyodik bakım önerir. Genel uygulama yılda bir gözle kontrol; baca, kombi ve cihaz bakımı üreticinin belirttiği aralıkta yapılır." },
      { s: "Keşif ücretsiz mi?", c: "Yerinde keşif ve ölçüm ücretsizdir; ardından projeye özel teklif sunulur." },
    ],
  },
  {
    slug: "isi-pompasi",
    ad: "Isı Pompası Montajı",
    kisaAd: "Isı Pompası",
    ozet:
      "Enerji tasarrufu sağlayan ısı pompalarının montajı, devreye alma ve test süreçlerinde yüksek performanslı çözümler sunulur.",
    gorsel: "/images/wp/De-plus-en-plus-populaires-les-pompes-a-chaleur.jpg",
    tldr:
      "Isı pompası, dış ortamdan ısı çekerek tükettiği elektriğin 3-4 katı kadar ısı üreten yüksek verimli sistemdir (tipik COP 3-4).",
    giris:
      "Isı pompası; havadan, sudan veya topraktan ısı enerjisi çekerek ısıtma ve soğutma yapan yüksek verimli bir sistemdir. Tükettiği elektriğin birkaç katı kadar ısı sağladığı için işletme maliyeti düşüktür. Yerden ısıtma, radyatör veya fan-coil sistemleriyle birlikte çalışır.",
    adimlar: [
      { baslik: "Keşif ve Sistem Seçimi", metin: "Yapının ısı ihtiyacı hesaplanır, uygun kapasitede ısı pompası belirlenir." },
      { baslik: "Dış ve İç Ünite Montajı", metin: "Dış ünite uygun konuma yerleştirilir, iç ünite ve varsa tank bağlantıları yapılır." },
      { baslik: "Hidrolik ve Elektrik Bağlantı", metin: "Tesisat ve elektrik bağlantıları standartlara uygun tamamlanır." },
      { baslik: "Devreye Alma ve Test", metin: "Sistem çalıştırılır, verim ve güvenlik kontrolleri yapılır." },
    ],
    alanlar: ["Konutlar ve villalar", "Ticari binalar", "Yerden ısıtmalı yapılar"],
    sss: [
      { s: "Isı pompası hangi durumda mantıklı?", c: "Yıllık ısıtma ve soğutma talebi yüksek konutlarda, doğalgaz hattı bulunmayan bölgelerde veya yenilenebilir enerji öncelikli yapılarda yüksek verim sağlar." },
      { s: "Hava-su ısı pompası nasıl çalışır?", c: "Dış ortam havasından ısı enerjisi çekilir; soğutucu akışkan üzerinden dolaşan suya aktarılır. Su, yerden ısıtma veya radyatör hattı üzerinden mekâna dağılır." },
      { s: "COP nedir, ne anlama gelir?", c: "Coefficient of Performance — 1 birim elektrik enerjisine karşılık kaç birim ısı üretildiğini gösterir. Modern hava-su sistemlerde COP 3-4 yaygın bir değerdir." },
      { s: "Isı pompası soğukta da çalışır mı?", c: "Modern inverter hava-su ısı pompaları yaklaşık -15°C'ye kadar verimli çalışır. Daha düşük sıcaklıklarda sistemler dahili elektrik destek modülüyle donatılabilir." },
      { s: "Hangi ısıtma sistemleriyle uyumlu?", c: "Yerden ısıtma, düşük sıcaklık radyatör ve fan-coil ile uyumlu çalışır. En verimli kombinasyon, düşük su sıcaklığında çalışan yerden ısıtma sistemiyledir." },
      { s: "Yıllık bakım gereksinimi nedir?", c: "Yılda bir kez dış ünite temizliği, filtre kontrolü ve soğutucu akışkan basınç ölçümü önerilir." },
    ],
  },
  {
    slug: "yangin-sondurme",
    ad: "Yangın Söndürme Sistemleri",
    kisaAd: "Yangın Söndürme",
    ozet:
      "Sprinkler, gazlı ve köpüklü sistemlerde borulama, bağlantı ve test uygulamalarıyla standartlara uygun güvenli sistemler kurulur.",
    gorsel: "/images/wp/2e7f649b4d88f4d1e1d9f958532c1d15.jpg",
    tldr:
      "Yangın söndürme sistemleri sanayi, otel, AVM, hastane ve okul gibi yapılarda Binaların Yangından Korunması Hakkında Yönetmelik (2007/12937) gereği zorunludur.",
    giris:
      "Yangın söndürme sistemleri, bir yangın anında erken müdahaleyle can ve mal güvenliğini korur. Sprinkler sistemleri otomatik su püskürtmesiyle, gazlı sistemler elektronik ve hassas ortamlarda, köpüklü sistemler yanıcı sıvı risklerinde kullanılır. Tasarım ve kurulum, yürürlükteki yangın yönetmeliğine uygun yapılır.",
    adimlar: [
      { baslik: "Risk Analizi ve Proje", metin: "Yapının yangın riski değerlendirilir, uygun söndürme sistemi projelendirilir." },
      { baslik: "Borulama ve Pompa İstasyonu", metin: "Boru hattı döşenir, hidrofor ve pompa bağlantıları kurulur." },
      { baslik: "Bağlantı ve Test", metin: "Söndürme bileşenleri bağlanır, sistem çalışma testinden geçirilir." },
    ],
    alanlar: ["İş yerleri ve fabrikalar", "Depo ve otoparklar", "Ticari ve kamu binaları"],
    sss: [
      { s: "Yangın söndürme sistemi yasal zorunluluk mu?", c: "Sanayi tesisleri, otel, AVM, hastane, okul ve büyük ofis yapıları gibi binalarda Binaların Yangından Korunması Hakkında Yönetmelik (Resmî Gazete 19/12/2007 — 2007/12937) gereği zorunludur." },
      { s: "Sprinkler sistemi nasıl çalışır?", c: "Tavandaki sprinkler başlıkları sıcaklığa duyarlıdır (yaygın 68°C). Yangın çıktığında etkilenen başlık otomatik açılır ve basınçlı su püskürtür; sistem tüm tavanı boşaltmaz, sadece sıcaklığa maruz kalan başlık devreye girer." },
      { s: "Gazlı söndürme hangi alanlarda tercih edilir?", c: "Su hasarına duyarlı sunucu odası, müze, arşiv, elektrik panoları ve hassas elektronik ekipmanın bulunduğu alanlarda inert gazlı (FM-200, Novec 1230, IG-541 gibi) sistemler tercih edilir." },
      { s: "Köpüklü söndürme sistemi ne işe yarar?", c: "Yanıcı sıvı (yakıt, kimyasal) bulunan alanlarda yüzeyi köpük tabakasıyla kaplayarak oksijen temasını keser. Akaryakıt istasyonu, fabrika ve depolarda yaygındır." },
      { s: "Yangın söndürme sistemi yıllık bakım şart mı?", c: "Evet. Yangın yönetmeliği periyodik bakım (basınç testi, sprinkler ve nozzle kontrolü, alarm panel testi, pompa motor egzersizi) öngörür." },
      { s: "Sistem devreye alma sürecinde ne teslim ediliyor?", c: "Hidrostatik basınç testi raporu, sistem fonksiyon doğrulaması ve bakım rehberi teslim edilir." },
    ],
  },
  {
    slug: "klima",
    ad: "Klima Sistemleri",
    kisaAd: "Klima",
    ozet:
      "Split, multisplit ve VRF sistemlerinin montajı, bağlantı ve devreye alma işlemleriyle konforlu ortamlar oluşturulur.",
    gorsel: "/images/wp/9f404e1487a6bb753e9bb83ca3e4937f.jpg",
    tldr:
      "Bosch klima BNS Enerji'den satılır, montaj Bosch yetkili servisi tarafından yapılır — tek muhatap BNS, Bosch garantisi sürer.",
    giris:
      "Klima sistemleri mekânın büyüklüğüne ve kullanımına göre seçilir. Split sistemler tek bir oda veya konut için, multisplit sistemler tek dış üniteyle birden fazla iç ünite için, VRF sistemleri ise çok bölümlü büyük binalar için uygundur. Doğru kapasite ve montaj; hem konfor hem enerji verimliliği için belirleyicidir.",
    adimlar: [
      { baslik: "İhtiyaç ve Kapasite Belirleme", metin: "Mekânın metrekaresine ve kullanımına göre uygun sistem ve kapasite seçilir." },
      { baslik: "Ürün Tedariki", metin: "BNS Enerji, Bosch Partner Program üyesi olarak orijinal ürün tedarik eder." },
      { baslik: "Montaj ve Devreye Alma", metin: "Montaj Bosch yetkili servisi tarafından gerçekleştirilir, sistem devreye alınır." },
    ],
    alanlar: ["Konut ve daireler", "Ofis ve iş yerleri", "Çok bölümlü ticari binalar (VRF)"],
    sss: [
      { s: "Bosch klima montajını kim yapıyor?", c: "Satış BNS Enerji tarafından, montaj ise Bosch yetkili servisi tarafından yapılır. Tek muhatap BNS Enerji; ürün ve montaj Bosch güvencesi altında olur." },
      { s: "Inverter klima ne işe yarar?", c: "Sabit hızlı klimaya göre kompresörü modüle ederek elektrik tüketimini düşürür ve oda sıcaklığını daha sabit tutar. Aynı kapasitede çok daha sessiz çalışır." },
      { s: "Klima için ne kadar BTU gerekir?", c: "Oda metrekare başına yaklaşık 600-700 BTU genel kabul olarak alınır. Pencere yönü, izolasyon kalitesi, tavan yüksekliği ve kullanım yoğunluğu bu değeri değiştirir; keşif sırasında detaylı hesap yapılır." },
      { s: "Klima yıllık bakım gerekli mi?", c: "Evet. Filtre temizliği, gaz kontrolü ve iç ünite hijyeni en az yılda 1 kez önerilir; düzenli bakım hem verimi hem cihaz ömrünü uzatır." },
      { s: "R-32 gazı çevreye zararlı mı?", c: "R-32, önceki R-410A gazına göre küresel ısınma potansiyeli (GWP) %66 daha düşüktür. Avrupa Birliği ve Türkiye'de yeni nesil klima sistemlerinde yaygın olarak kullanılır." },
      { s: "VRF sistem hangi durumda tercih edilir?", c: "Çok bölümlü ticari binalarda — ofis kompleksleri, oteller, alışveriş merkezleri gibi farklı zonların aynı anda farklı sıcaklık ihtiyacı duyduğu mekânlarda tek dış üniteyle çoklu iç ünite çözümü sağlar." },
    ],
  },
  {
    slug: "yerden-isitma",
    ad: "Yerden Isıtma Sistemleri",
    kisaAd: "Yerden Isıtma",
    ozet:
      "Enerji verimliliği ve konforu bir araya getiren yerden ısıtma sistemlerinde profesyonel montaj ve devreye alma hizmetleri.",
    gorsel: "/images/wp/16d30f517f4f43909ddb6cfd60e76480.jpg",
    tldr:
      "Yerden ısıtma, düşük su sıcaklığında (35-45°C) tüm zeminden eşit ısı yayan, ısı pompası ve yoğuşmalı kombiyle en verimli çalışan sistemdir.",
    giris:
      "Yerden ısıtma, döşeme altına serilen boru hattıyla ısıyı tüm zemine dengeli biçimde yayan bir sistemdir. Düşük sıcaklıkta çalıştığı için konforlu ve enerji açısından verimlidir; özellikle ısı pompası ve yoğuşmalı kombiyle birlikte yüksek tasarruf sağlar.",
    adimlar: [
      { baslik: "Proje ve Hazırlık", metin: "Mekân planına göre boru düzeni ve kolektör konumu belirlenir." },
      { baslik: "Boru Serme ve Şap Hazırlığı", metin: "Yalıtım üzerine boru hattı serilir, şap dökümüne hazır hale getirilir." },
      { baslik: "Kolektör Bağlantı ve Devreye Alma", metin: "Kolektör ve ısı kaynağı bağlantıları yapılır, sistem test edilir." },
    ],
    alanlar: ["Yeni yapılan konutlar", "Villalar", "Ticari mekânlar"],
    sss: [
      { s: "Yerden ısıtma ne kadar verimli?", c: "Düşük su sıcaklığında (yaklaşık 35-45°C) çalıştığı için radyatöre göre genelde daha verimli kabul edilir. Yoğuşmalı kombi veya ısı pompası ile eşleştirildiğinde maksimum tasarruf sağlar." },
      { s: "Hangi zemin kaplamasıyla uyumlu?", c: "Seramik ve doğal taş en yüksek iletkenliği sağlar. Laminat parke ve ahşap parke için üzerinde \"yerden ısıtma uyumlu\" etiketi bulunan ürünler tercih edilir; halı uygulanmaz veya çok ince seçilir." },
      { s: "Yerden ısıtma altına hangi izolasyon konur?", c: "Sert yalıtım levhası (yaygın olarak XPS veya EPS, 3-5 cm), üzerine alüminyum yansıtıcı folyo ve boru taşıyıcı plakası katmanı uygulanır." },
      { s: "Manifold ne işe yarar?", c: "Manifold (kolektör), her ısıtma devresinin debisini ve sıcaklığını ayarlamayı sağlar. Oda bazlı kontrolün merkezidir; her devre bağımsız ayarlanabilir." },
      { s: "Kaçak olursa nasıl tespit edilir?", c: "Sistem basınç düşüşü gösterirse termal kamera ile zemin taraması yapılır, sıcaklık dağılımındaki anomaliyle kaçak yeri lokal olarak tespit edilir." },
      { s: "Yerden ısıtma hangi yapılarda mantıklı?", c: "Yeni inşaat konutlar, villalar ve modernize edilen ticari mekânlar için uygundur. Zemin yüksekliği yeterli olduğu durumda mevcut yapılarda da uygulanabilir." },
    ],
  },
  {
    slug: "merkezi-isitma",
    ad: "Merkezi Isıtma & Kazan Sistemleri",
    kisaAd: "Merkezi Isıtma",
    ozet:
      "Apartman, site ve ticari yapılarda merkezi ısıtma sistemlerinin kurulum ve devreye alma işlemlerinde eksiksiz uygulama sağlanır.",
    gorsel: "/images/wp/indir-4.jpg",
    tldr:
      "Merkezi ısıtma, tek kazan dairesinden tüm binaya ısı dağıtan; kalorimetre (ısı pay ölçer) ile her dairenin kendi tüketimi kadar ödediği sistemdir.",
    giris:
      "Merkezi ısıtma sistemleri, tek bir kazan dairesinden tüm binaya ısı dağıtır. Apartman, site ve ticari yapılarda kazan, sirkülasyon pompası ve dağıtım hattıyla kurulur; kalorimetre uygulamasıyla her bağımsız bölüm kendi tüketimi kadar öder.",
    adimlar: [
      { baslik: "Sistem Tasarımı", metin: "Binanın ısı ihtiyacına göre kazan kapasitesi ve dağıtım hattı planlanır." },
      { baslik: "Kazan ve Hat Montajı", metin: "Kazan dairesi ekipmanları ve dağıtım boruları kurulur." },
      { baslik: "Dengeleme ve Devreye Alma", metin: "Sistem dengelenir, test edilir ve teslim edilir." },
    ],
    alanlar: ["Apartman ve siteler", "Ticari binalar", "Kamu yapıları"],
    sss: [
      { s: "Yoğuşmalı kazan nedir?", c: "Atık baca gazından su buharını yoğunlaştırarak ek ısı geri kazanan kazan tipidir. Klasik kazana göre yakıt verimliliği belirgin şekilde yüksektir." },
      { s: "Merkezi sistem mi bireysel kombi mi daha verimli?", c: "İyi yalıtımlı binalarda merkezi yoğuşmalı sistem genelde daha verimlidir; eski yalıtımsız binalarda fark azalır. Doğru cevap binaya ve kullanım profiline göre değişir." },
      { s: "Kazan dairesi havalandırma zorunlu mu?", c: "Evet. Yanma için temiz hava girişi ve egzoz için baca gerekir. TS standartlarına uygun havalandırma menfezi ve baca yapısı zorunludur." },
      { s: "Apartmanda merkezi ısıtma payı nasıl hesaplanır?", c: "Her daire için ısı pay ölçer (kalorimetre) kullanılır. Yıllık fatura, bireysel tüketim oranına göre paylaştırılır; bu sayede her daire kendi kullandığı kadar öder." },
      { s: "Sirkülasyon pompası ne kadar elektrik harcar?", c: "Inverter (sınıf A) sirkülasyon pompaları, klasik sabit hızlı pompalara göre belirgin ölçüde daha az elektrik tüketir. Modern sistemler enerji etiketi yüksek pompalar kullanır." },
      { s: "Kazan bakımı ne sıklıkta yapılmalı?", c: "Yılda bir kez baca temizliği, brülör ayarı, emniyet ekipmanı kontrolü ve sistem basınç testi önerilir. Düzenli bakım hem verimi hem güvenliği korur." },
    ],
  },
  {
    slug: "kombi",
    ad: "Kombi Satışı ve Montajı",
    kisaAd: "Kombi",
    ozet:
      "Bosch Condens yoğuşmalı kombi satışı, Bosch yetkili servisi montajı ve doğalgaz tesisat bağlantısı tek elden.",
    gorsel: "/images/bosch-kombi-hd.webp",
    tldr:
      "Polatlı'da Bosch Condens yoğuşmalı kombi BNS Enerji'den satılır, montaj Bosch yetkili servisi tarafından yapılır — tek muhatap BNS, üretici garantisi tam.",
    giris:
      "Kombi (combi-boiler), tek bir cihazda hem mahal ısıtması hem sıcak kullanım suyu üreten cihazdır. Yoğuşmalı (condensing) kombi, atık baca gazından su buharını yoğunlaştırarak ek ısı geri kazanır ve klasik kombiye göre belirgin yakıt verimi sağlar. Bosch Condens serisi, Polatlı doğalgaz tesisatına uyumlu, A enerji sınıfı yoğuşmalı sistemdir.",
    adimlar: [
      { baslik: "İhtiyaç Hesabı", metin: "Yapının ısı yükü ve kullanım suyu talebi hesaplanır, uygun kapasitede Bosch kombi seçilir." },
      { baslik: "Tedarik ve Tesisat Uyarlaması", metin: "Bosch Partner Program üyesi olarak orijinal cihaz tedarik edilir; baca ve doğalgaz hattı kontrolden geçirilir." },
      { baslik: "Montaj", metin: "Cihaz Bosch yetkili servisi tarafından monte edilir, hidrolik ve gaz bağlantıları tamamlanır." },
      { baslik: "Devreye Alma ve Test", metin: "Sızdırmazlık testi, yanma analizi, ısıtma ve kullanım suyu devresi testleri yapılır." },
    ],
    alanlar: ["Konut ve daireler", "Villalar", "Küçük ticari mekânlar"],
    sss: [
      { s: "Yoğuşmalı kombi klasik kombiden ne kadar verimli?", c: "Yoğuşmalı kombiler, atık baca gazından geri kazanılan ısı sayesinde klasik kombiye göre belirgin yakıt verimi sağlar (üreticiye ve kullanım profiline bağlı %15-30 aralığı yaygın bir değerdir)." },
      { s: "Polatlı'da hangi kombi kapasitesi gerekir?", c: "Daire metrekaresi, izolasyon kalitesi, pencere yönü ve daireye ait sıcak su talebine göre değişir. Genel kabul: 100 m²'ye kadar 24 kW, 100-150 m² için 28 kW, üzeri için 30+ kW. Doğru hesap keşifte yapılır." },
      { s: "Bosch kombi garantisi nasıl işliyor?", c: "Bosch Condens serisinde standart üretici garantisi geçerlidir. BNS Enerji satış, Bosch yetkili servisi montaj — ikisi birlikte garanti sürecini koordine eder." },
      { s: "Yoğuşmalı kombide baca özel mi olmalı?", c: "Evet. Yoğuşmalı kombi düşük sıcaklıkta atık gaz üretir, klasik baca yerine üreticinin önerdiği yoğuşma-uyumlu (genelde plastik veya alüminyum) baca kiti kullanılır." },
      { s: "Kondens (yoğuşma suyu) gideri zorunlu mu?", c: "Yoğuşmalı kombi çalışırken hafif asidik nitelikte yoğuşma suyu üretir; bu su nötralizör veya doğrudan gider hattına bağlanır. Drenaj çözümü montaj sırasında planlanır." },
      { s: "Kombi yıllık bakım gerekli mi?", c: "Evet. Yılda bir kez Bosch yetkili servisi tarafından bakım önerilir: brülör ayarı, baca gazı analizi, emniyet ventili testi, sistem basıncı ve filtre kontrolü." },
    ],
  },
  {
    slug: "kombi-degisimi",
    ad: "Kombi Değişimi",
    kisaAd: "Kombi Değişimi",
    ozet:
      "Eski kombilerin Bosch yoğuşmalı kombi ile değişimi — mevcut sistem teşhisi, sökme, baca uyarlaması ve montaj tek elden.",
    gorsel: "/images/bosch-kombi-hd.webp",
    tldr:
      "Eski kombiyi Bosch yoğuşmalı kombi ile değiştirmek yakıt verimini belirgin şekilde artırır. Tüm süreç — teşhis, sökme, baca uyarlaması, montaj, devreye alma — BNS koordinasyonunda yürür.",
    giris:
      "Klasik kombiyi yoğuşmalı kombiyle değiştirmek, hem yakıt tasarrufu hem de modern güvenlik standartlarına uyum sağlar. Mevcut tesisatın yoğuşmalı sisteme uygunluğu (baca tipi, kondens drenajı, radyatör hattı, doğalgaz vana ölçüsü) kontrol edilir; gerekli uyarlamalar yapıldıktan sonra yeni cihaz monte edilir.",
    adimlar: [
      { baslik: "Mevcut Sistem Teşhisi", metin: "Eski kombinin tipi, kapasitesi, baca durumu ve tesisat altyapısı yerinde incelenir." },
      { baslik: "Yeni Kombi + Baca Uygunluk Kontrolü", metin: "Bosch Condens serisinden uygun model seçilir; baca, kondens drenajı ve doğalgaz hattı uyumu doğrulanır." },
      { baslik: "Sökme ve Uyarlama", metin: "Eski kombi güvenli şekilde sökülür, gerekiyorsa baca borusu ve drenaj hattı revize edilir." },
      { baslik: "Montaj ve Devreye Alma", metin: "Bosch yetkili servisi yeni cihazı monte eder; sızdırmazlık testi, yanma analizi ve test ısıtması yapılır." },
    ],
    alanlar: ["Konut ve daireler", "Apartman ve site daireleri", "Küçük ticari mekânlar"],
    sss: [
      { s: "Eski kombimi yoğuşmalıyla değiştirmek mantıklı mı?", c: "Klasik kombilerin servis ömrü genellikle 12-15 yıldır. Cihaz 10+ yaşındaysa veya sık arıza veriyorsa yoğuşmalıyla değişim hem verim hem güvenlik açısından mantıklıdır." },
      { s: "Mevcut bacam yoğuşmalıya uygun mu?", c: "Yoğuşmalı kombi düşük sıcaklıkta atık gaz üretir, klasik baca asitlenebilir. Çoğu durumda üreticinin önerdiği plastik/alüminyum baca kiti ile değişim gerekir; keşif sırasında doğrulanır." },
      { s: "Kondens (yoğuşma suyu) gideri için ek iş gerekiyor mu?", c: "Yoğuşmalı kombi hafif asidik yoğuşma suyu üretir. Mevcut gider hattına bağlanabilir; bağlanamıyorsa nötralizör veya yeni drenaj hattı planlanır." },
      { s: "Radyatörlerimi değiştirmem gerekecek mi?", c: "Genelde hayır. Yoğuşmalı kombi düşük sıcaklıkta çalışıp daha verimlidir ama mevcut radyatörlerle de uyumludur. Verim için termostatik radyatör vanası eklemek tavsiye edilir." },
      { s: "Eski kombimin garantisi yeniyle devrediliyor mu?", c: "Hayır — yeni Bosch kombi kendi üretici garantisiyle gelir. Sürecin tamamı (sökme, kurulum, garanti aktivasyonu) BNS koordinasyonundadır." },
      { s: "Kombi değişimi ne kadar sürer?", c: "Standart bir daire değişiminde sökme, yeni montaj ve devreye alma genellikle aynı gün tamamlanır. Baca ve drenaj revizyonu gerekirse süre 1 gün uzayabilir." },
    ],
  },
  {
    slug: "vrf-kurulum",
    ad: "VRF Sistemi Kurulumu",
    kisaAd: "VRF Kurulum",
    ozet:
      "Çok bölümlü ticari binalarda Bosch Climate 5000 L VRF sistemi tasarımı, kurulumu ve devreye alma — tek dış üniteyle çoklu iç ünite.",
    gorsel: "/images/bosch-vrf-hd.webp",
    tldr:
      "VRF (Variable Refrigerant Flow), tek dış üniteyle 8-64 iç üniteye kadar bağlanan, her zonun bağımsız iklimlendirilebildiği ticari klima sistemidir. Polatlı'da Bosch Climate 5000 L VRF kurulumu BNS Enerji + Bosch yetkili servisi koordinasyonunda.",
    giris:
      "Variable Refrigerant Flow (VRF) sistemleri, soğutucu akışkanı değişken debiyle iç ünitelere aktararak her zonun bağımsız sıcaklık kontrolünü sağlar. Tek dış üniteden 8 ila 64 iç üniteye kadar bağlanabilir; ısı geri kazanımı yapan modeller aynı anda bazı zonları soğutup bazılarını ısıtabilir. Çok bölümlü ticari yapılarda klasik split veya merkezi sisteme göre belirgin enerji ve esneklik avantajı sağlar.",
    adimlar: [
      { baslik: "Yük Hesabı ve Zon Planı", metin: "Binanın ısı/soğutma yükü hesaplanır, zonlar belirlenir ve uygun kapasiteli dış ünite + iç ünite kombinasyonu projelendirilir." },
      { baslik: "Boru Altyapısı", metin: "Soğutucu akışkan bakır boru hattı, drenaj ve haberleşme kabloları döşenir; bağlantı standartlarına uygun izolasyon yapılır." },
      { baslik: "İç ve Dış Ünite Montajı", metin: "Bosch yetkili servisi üniteleri monte eder, hidrolik ve elektrik bağlantıları tamamlanır." },
      { baslik: "Devreye Alma ve Test", metin: "Sızdırmazlık + vakum işlemi, gaz şarjı, sistem testleri ve zon konfigürasyonu yapılır; kullanıcı eğitimi verilir." },
    ],
    alanlar: ["Ofis kompleksleri", "Oteller ve butik konaklama", "Alışveriş merkezleri ve mağazalar", "Restoran ve cafe zincirleri"],
    sss: [
      { s: "VRF ile multisplit arasındaki fark nedir?", c: "Multisplit tek dış üniteyle 2-5 iç üniteye kadar destekler ve her zon aynı modda (hep soğutma veya hep ısıtma) çalışır. VRF çok daha fazla iç ünite destekler ve zonlar bağımsız kontrol edilebilir; ısı geri kazanım modelleri farklı zonlarda aynı anda farklı mod çalıştırabilir." },
      { s: "VRF kapasite hesabı nasıl yapılır?", c: "Toplam iç ünite kapasitesi dış ünitenin nominal kapasitesinin yaklaşık %50-130 aralığında olabilir. Kullanım profili (aynı anda kaç zon aktif), bina yüksekliği ve boru uzunluğu da hesaba katılır." },
      { s: "VRF Polatlı iklimine uygun mu?", c: "Bosch VRF sistemleri geniş çalışma sıcaklık aralığında verimli çalışır. Modern modeller düşük dış sıcaklıklarda da ısıtma performansını koruyan inverter teknolojisiyle gelir." },
      { s: "Montajı kim yapıyor?", c: "Satış ve proje koordinasyonu BNS Enerji tarafından, montaj Bosch yetkili servisi tarafından yapılır. Bu yapı üretici garantisinin sürmesi açısından önemlidir." },
      { s: "VRF bakım sıklığı nedir?", c: "Yılda en az 1 kez profesyonel bakım önerilir: filtre temizliği, soğutucu basınç ölçümü, elektrik bağlantı kontrolü, iç ünite drenaj testi." },
      { s: "VRF mevcut binaya sonradan kurulabilir mi?", c: "Evet, mevcut binalarda da kurulabilir. Soğutucu boru ve drenaj rotaları için tavan/duvar şaftı planlaması gerekir; bina müsaitse 1-2 hafta içinde devreye alınabilir." },
    ],
  },
];

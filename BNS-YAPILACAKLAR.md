# BNS Enerji — Yapılacaklar (günlük takip)

> Her gün buradan devam. Sıralı kuyruk: yukarıdan aşağı. Bittikçe `[x]` işaretle + tarih düş.
> Öncelik mantığı: **gelir/sezon → index foundation → citation → sosyal/içerik.**
> Kuzey yıldızı: 1 ödeyen müşteri. Filtre: bu iş müşteriye dokunuyor mu?

---

## ✅ Bitti
- [x] **Favicon → gerçek BNS logosu** (2026-06-03, commit d11975e) — Google ikonu jenerik yeşil kareden orijinal logoya döndü. Google cache'i günler–haftalar içinde tazeler.
- [x] **GSC index sprint — öncelikli 10 URL** (2026-06-03) — Sude "Dizine eklenmesini iste" attı. Sayfalar raporu: 5/31 dizinde → tırmanış izlenecek.
- [x] **WooCommerce/WP junk redirect** (2026-06-03, commit db92c01) — /shop, /urun-kategorisi/*, /product/* vb → /urunler/ 301. "Hello world!" + "KOMBİ arşivleri" Google'da çıkıyordu; kod tarafı zaten 301/404 temiz, kalan iş GSC Removals (aşağıda).
- [x] **Nav internal linking** (2026-06-03, commit 293d9d8) — header "Marka Rehberi" dropdown + footer'a /karsilastirma/ + /polatli/ hub linki. 12 yeni sayfanın otorite akışı açıldı.

## 🔵 Aktif (bugün)
- [ ] **GSC Removals — "Hello world!" + WP junk temizle** · *Sen (panel, 2 dk)* — GSC → Kaldırmalar → Yeni istek: `/hello-world/` (URL) + önek kaldırma `/urun-kategorisi/` + `/product-category/`. ~24 saatte sonuçtan düşer. DOKUNMA: "Polatlı Merkezi Isıtma" + "Osb referans görsel" (gerçek sayfalar).
- [x] **Web3Forms key → form düzelt** (2026-06-04, commit 4a725dc) — key `d32c27fe…` iletisim.astro'ya gömüldü (fallback). Sude canlı test etti: form çalışıyor, lead düşüyor. ✅
- [x] **🔴 KRİTİK: Auto-deploy ~1 haftadır kopuktu — ÇÖZÜLDÜ** (2026-06-04, commit 24c4700) — @astrojs/cloudflare adapter bug'ı (withastro/astro#15802): ID'siz SESSION KV binding her deploy'da "already exists [10014]" veriyordu. 26 May'tan beri TEK deploy geçmemiş. Fix: adapter açıkça kuruldu + `scripts/fix-wrangler.mjs` build sonrası SESSION binding'i temizliyor. **Artık her push canlıya gidiyor — AMA her push sonrası canlı doğrulama ZORUNLU (curl ile commit izi kontrol).**

## 🟡 Sırada (yüksek öncelik — sezon/gelir)
- [x] **GBP optimize** (2026-06-04, Sude "hallettim") — Google İşletme Profili düzenlendi. ⏳ İzle: 1-2 hafta sonra "Polatlı klima/ısı pompası" yerel pack'te BNS çıkıyor mu kontrol et.
2. [ ] **Bing Webmaster doğrulama** · *Sen: meta etiket içeriğini bana ver → ben Layout'a ekle + deploy → sen "Doğrula" → API key generate → bana ver* · *Ben: sitemap + 31 URL push.* (ChatGPT Search Bing'den besleniyor — BNS orada zaten güçlü.)
3. [ ] **Cloudflare Crawler Hints** · *Sen (panel, 10 sn)* — zone Caching → Crawler Hints ON.

## 🟢 Index izleme (birkaç gün arayla)
- [ ] **GSC kalan 21 URL sprint** — gün 2: mahalle sayfaları (/polatli/*) + karşılaştırma; gün 3: yardımcı sayfalar. Listeyi her gün ben sıraya koyarım.
- [ ] **GSC Sayfalar rakamı kontrol** — 5'ten yukarı tırmandı mı (3-4 gün sonra).

## 🟣 Dizin / citation (kit hazır → MARKA-KUNYE.md)
1. [ ] Yandex İşletmem
2. [ ] Apple Business Connect
3. [ ] Foursquare
4. [ ] Bing Places (Bing doğrulama ile bağlı)
5. [ ] Bulurum.com
6. [ ] Find.com.tr — NAP'i kit ile eşitle (zaten kayıtlı)
7. [ ] Polatlı Ticaret Odası + Esnaf Odası üye dizini

## 🟠 Off-page / entity (taslaklar HAZIR → docs/)
- [ ] **Wikidata entity submit** · *Sen (panel)* — `docs/wikidata-bns-entity.md` izle: wikidata.org → Item Create → 12 property → Publish → Q-ID. Sonra ben Layout.astro `sameAs`'a Q-ID eklerim. (AI search'ün BNS'i tanıması için güçlü sinyal.)
- [ ] **PTO + POSAD + ATO + TESKON üyelik başvurusu** · *Baba imza* — `docs/uyelik-basvurulari.md` metinleri hazır, e-posta/dilekçe gönder.
- [ ] **Basın bülteni gönderimi** · *Sen (e-posta)* — `docs/basin-bulteni-2026-05.md` + 6 yerel medya hedefi hazır.
- [ ] **Yandex Webmaster kayıt + sitemap** · *Sen+ben* — hiç açılmadı (Bing'le aynı mantık).
- [ ] **HSTS preload Chrome listesi kontrol** · *Sen (1 dk)* — son submit 2026-05-24, 6-12 hafta süreç; girdi mi bak.

## ⚪ İçerik / sosyal / doğrulama
- [ ] **Babana 3 yetki sorusu** · *Sen (5 dk)* — VRF bayilik / yangın söndürme sertifika / Bosch Home Comfort dealer kaydı. Cevap gelmeden bu konularda içerik yazılamaz (uydurma yasağı).
- [ ] **LinkedIn şirket sayfası** · *Sen (30 dk)* — sektör "Construction" yanlış → düzelt + logo/kapak + açıklama (kit'ten).
- [ ] **Öğretmenevi 27 klima fotoğrafı** · *Sen (saha)* — gelince anasayfa "27" kartı gerçek foto olur (ben).

## 🔧 Benim (panel gerekmez — sıra gelince yaparım)
- [x] ~~Nav internal linking~~ — bitti (commit 293d9d8).
- [x] ~~Mahalle grid / mahalle vurgusu~~ — İPTAL (Sude kararı 2026-06-04: mahalle vurgusu istemiyor; doorway sayfaları zaten commit 382ee80 ile silinmişti).
- [ ] **Karşılaştırma sayfalarını /urunler/'den link** + anasayfa SSS'ye 2 karşılaştırma sorusu.
- [ ] **Hidden edges sweep** — definition list, View Transitions, dns-prefetch+preconnect, fetchpriority hero, urunler+hakkimizda FAQ schema, Q-H2 anasayfa. (MM %85→95.)
- [ ] **IndexNow toplu tetik** — `npm run indexnow` her major deploy sonrası.
- [ ] Lighthouse PSI run (4×100 doğrulama) + üretim commit'leri canlıda mı teyit.

---
*Son güncelleme: 2026-06-03. Sıradaki: Web3Forms key (Sude) → form fix (ben).*

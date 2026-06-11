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
- [x] **🔴 Auto-deploy ÇÖZÜLDÜ** (2026-06-04, commit 24c4700) — adapter SESSION KV bug'ı (withastro/astro#15802); ~1 haftadır deploy geçmiyordu. `scripts/fix-wrangler.mjs` build sonrası SESSION binding temizliyor. **Her push sonrası canlı doğrulama ZORUNLU.**
- [x] **Web3Forms key → form çalışıyor** (2026-06-04, commit 4a725dc) — Sude canlı test etti, lead düşüyor.
- [x] **GBP optimize** (2026-06-04, Sude "hallettim") — ⏳ 1-2 hafta sonra yerel pack'te çıkıyor mu izle.
- [x] **Marka Rehberi (/karsilastirma/) TAMAMEN silindi** (2026-06-04, commit 85ea96b) — Sude kararı. Sayfalar + nav + footer + linkler kaldırıldı, `/karsilastirma/*` → /urunler/ 301. Hizmet-içi teknik tablo (Yoğuşmalı vs Konvansiyonel) KORUNDU. Sayfa: 24→20.
- [x] **Metin düzeltmeleri** (2026-06-04/05, commit 553bbce + edc9d5d) — klima TL;DR tanım tarzı, kombi adım 5 + kombi-degisimi devrik, sezon ribbon, anasayfa "Markadan Bağımsız" kart+section. ⚠️ B grubu özet alanları (klima/ısı pompası vb "ozet") → Sude "olduğu gibi bırak", DOKUNMA.
- [x] **VRF "Polatlı projeleri var" → ONAYLANDI gerçek** (2026-06-05, Sude) — uydurma değil, cümle kalır. KAPANDI.
- [x] **IndexNow toplu tetik** (2026-06-05) — 19 URL, 3/3 endpoint başarılı. + `indexnow.mjs` sitemap path dist/client/ fix (commit 6d5c345, adapter sonrası ENOENT veriyordu).

## 🔴 KRİTİK ALTYAPI — auto-deploy CI 5 Haziran'dan beri ÖLÜ
- [x] **Manuel deploy çözüldü** (2026-06-11) — CF Worker `bnsenerji` 5 Haz'dan beri auto-deploy etmiyordu (6 gün; tüm commit'ler GitHub'da ama canlıya gitmemiş). CF API token (Workers Scripts Write, hesap sudenurczmc, Account ID `cd7916cd7412854204436c89ed54ebfe`) ile `wrangler deploy --name bnsenerji` (dist/client'ten, .wrangler kenara alınarak) → canlı. Bing tag + Wikidata sameAs doğrulandı canlıda.
- [ ] **⚠️ Auto-deploy CI neden durdu — kök sebep bulunmadı** · *Sen (panel)* — Workers & Pages → bnsenerji → Settings/Builds: GitHub auto-deploy build'leri fail mi, tetik mi kopuk? Bulunana kadar **her push sonrası manuel `wrangler deploy` gerekiyor** (token ile ben yaparım). Token bu oturum duruyor, sonunda sil.

## 🔵 SIRADAKİ AKTİF — Bing Webmaster (Sude doğrulayacak)
- [x] **Bing meta tag eklendi + canlı** (2026-06-11, commit e4275b4) — `373A1CDF5740BD1D9330726FABB30BBE` Layout head'de, canlıda doğrulandı.
- [ ] **Bing "Doğrula" + API key** · *Sen: bing.com/webmasters → BNS → "Doğrula" (tag canlı, geçer) → Settings → API Access → Generate Key → bana ver* · *Ben: sitemap + 20 URL push.* (ChatGPT Search Bing'den besleniyor.)
- [ ] **GSC Removals — "Hello world!" + WP/junk temizle** · *Sen (panel, 2 dk)* — GSC → Kaldırmalar → Yeni istek: `/hello-world/` + önek kaldırma `/urun-kategorisi/`, `/product-category/`, **`/karsilastirma/`** (marka rehberi silindi), `/polatli/` (mahalle silindi). ~24 saatte düşer. DOKUNMA: gerçek sayfalar.
- [ ] **Cloudflare Crawler Hints** · *Sen (panel, 10 sn)* — zone Caching → Crawler Hints ON.

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
- [x] **Wikidata entity submit** (2026-06-11) — **Q140173975** oluşturuldu (API ile, bot password). 10 statement temiz. Layout.astro `sameAs`'a eklendi (commit push). ⚠️ Taslaktaki 3 Q-ID YANLIŞTI, doğrulandı: Polatlı=Q945388 (Q257619 değil), company=Q783794, HVAC=Q1798773. Telefon/email/adres bilerek atlandı (silinme riski). Referanslar: find.com.tr + Polgaz. → İzle: 2-4 hafta sonra Knowledge Panel adaylığı + AI entity tanıma.
- [ ] **PTO + POSAD + ATO + TESKON üyelik başvurusu** · *Baba imza* — `docs/uyelik-basvurulari.md` metinleri hazır, e-posta/dilekçe gönder.
- [ ] **Basın bülteni gönderimi** · *Sen (e-posta)* — `docs/basin-bulteni-2026-05.md` + 6 yerel medya hedefi hazır.
- [ ] **Yandex Webmaster kayıt + sitemap** · *Sen+ben* — hiç açılmadı (Bing'le aynı mantık).
- [ ] **HSTS preload Chrome listesi kontrol** · *Sen (1 dk)* — son submit 2026-05-24, 6-12 hafta süreç; girdi mi bak.

## ⚪ İçerik / sosyal / doğrulama
- [ ] **Babana 3 yetki sorusu** · *Sen (5 dk)* — VRF bayilik / yangın söndürme sertifika / Bosch Home Comfort dealer kaydı. Cevap gelmeden bu konularda içerik yazılamaz (uydurma yasağı).
- [ ] **LinkedIn şirket sayfası** · *Sen (30 dk)* — sektör "Construction" yanlış → düzelt + logo/kapak + açıklama (kit'ten).
- [ ] **Öğretmenevi 27 klima fotoğrafı** · *Sen (saha)* — gelince anasayfa "27" kartı gerçek foto olur (ben).

## 🔧 Benim (panel gerekmez — sıra gelince yaparım)
- [x] ~~Nav internal linking~~ · ~~Mahalle grid~~ (İPTAL) · ~~Karşılaştırma link~~ (marka rehberi silindi, geçersiz) · ~~IndexNow tetik~~ (2026-06-05 yapıldı).
- [ ] **Hidden edges sweep** — definition list, View Transitions, dns-prefetch+preconnect, fetchpriority hero, urunler+hakkimizda FAQ schema, Q-H2 anasayfa. (MM %85→95, **marjinal** — off-page'den sonra.)
- [ ] **Lighthouse PSI** — PSI anonim API kotası doldu (2026-06-05). Sude pagespeed.web.dev'den 2 dk bakabilir; ya da atla (site zaten optimize: static + inline CSS + font subset + lazy-load). **Marjinal, öncelik değil.**
- [ ] **IndexNow** — her major deploy sonrası `npm run indexnow` (artık dist/client path fix'li).

---
*Son güncelleme: 2026-06-05. Bugün: deploy fix (kritik) + marka rehberi silme + metin düzeltmeleri + IndexNow. Sıradaki: **Bing Webmaster doğrulama** (Sude meta tag → ben). Asıl leverage: off-page (Wikidata/dizin/üyelik) — on-page bitti.*

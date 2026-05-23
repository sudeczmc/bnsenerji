# BNS Enerji & Doğalgaz — Polatlı

> Polatlı/Ankara merkezli doğalgaz, ısı pompası, klima ve yangın söndürme tesisat firması. 2020'den beri konut, ticari ve sanayi yapılarında uçtan uca uygulama.

**Canlı site:** [bnsenerjidogalgaz.com](https://bnsenerjidogalgaz.com)
**Konum:** Fatih Mah., Bıyıktay Cd. 37/A, Polatlı / Ankara
**Çağrı:** +90 532 499 39 86 · Pzt–Cmt 08:00–20:00

## Hizmetler

- **Doğalgaz Tesisatı** — TS 7363 standardı + Polgaz onaylı iç tesisat
- **Bosch Klima** — Bosch Climate split + multisplit, Bosch yetkili servisi montajı
- **Bosch Yoğuşmalı Kombi** — Condens serisi, A enerji sınıfı
- **Kombi Değişimi** — Eski kombilerin yoğuşmalı kombi ile yenilenmesi
- **VRF Sistemi** — Bosch Climate 5000 L (ticari binalar için)
- **Isı Pompası** — Bosch Compress hava-su (COP 3-4)
- **Yangın Söndürme Sistemleri** — Sprinkler, gazlı (FM-200/Novec 1230), köpüklü
- **Yerden Isıtma** — Yoğuşmalı kombi / ısı pompası uyumlu
- **Merkezi Isıtma & Kazan Sistemleri** — Apartman, site, ticari yapılar

## Yetki ve üyelikler

- **Polgaz** yetkili iç tesisat firması (Polatlı doğalgaz dağıtıcısı)
- **Bosch Partner Program** üyesi (Bosch klima, kombi, ısı pompası, VRF)
- İSG uyumlu çalışma protokolleri

## 14 kurumsal referans projesi

Polatlı Belediye Binası · Polatlı Ticaret Odası · Polatlı Şehir Stadı · Polatlı Öğretmenevi (27 Bosch klima) · Polatlı Yenimahalle Camii · Polatlı Ticaret Odası OSB · Zirvekent Plus · ESA İş Merkezi · Boztepe İş Merkezi · Arzum Dinlenme Tesisleri · Provet Veteriner Ürünleri A.Ş. · Polatlı Recep Usta · Nergis Cafe · Hanımlar Konağı

---

## Site teknik altyapı

[Astro 6](https://astro.build) static site + [Cloudflare Workers](https://workers.cloudflare.com/) edge deploy. Tasarım `[[premium-frontend-design]]` recipe (Vercel/Linear/Framer seviyesi motion + editorial layout), SEO `[[premium-web-seo]]` recipe (40+ schema entity, Lighthouse 4×100 hedef, AI search citation hazır).

### Komutlar

| Komut | Ne yapar |
| :--- | :--- |
| `npm install` | Bağımlılıkları kurar |
| `npm run dev` | Local dev server (`localhost:4321`) |
| `npm run build` | Production build → `./dist/` |
| `npm run preview` | Production preview |
| `npm run indexnow` | Sitemap URL'leri Bing/Yandex/Naver'a IndexNow ile push |

### Mucize Mühendislik §31 — Sıralanma altyapısı

Sitenin tüm sayfaları **110 on-page sinyal sweep** ile yapılandırıldı:

- Schema graph: WebSite + WebPage + Organization + LocalBusiness + Service + Offer + Product + CreativeWork + FAQPage + HowTo + BreadcrumbList + Speakable + ImageObject (license) + GeoCoordinates
- AI search citation hazır: 15+ AI bot allow (GPTBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, CCBot, Bytespider, Applebot-Extended), llms.txt + llms-full.txt
- Performance: AVIF + WebP picture, font-display optional, Speculation Rules API (Chrome 121+), HTTP/3 + Brotli (Cloudflare)
- Hyperlocal SEO: areaServed (Polatlı + Ankara), LocalBusiness schema, hyperlocal H1 ("Polatlı {hizmet}")
- IndexNow protokolü: `scripts/indexnow.mjs` — major content değişikliği sonrası tek komutla Bing/Yandex push

Tasarım + içerik felsefesi `[[feedback_organik_tasarim]]` + `[[feedback_uydurma_yasak]]` doktrinine bağlıdır — AI klişesi yok, sayı/sertifika/iddia gerçekten yoksa yazılmaz.

---

© BNS Enerji Doğal Gaz Tesisat Taahhüt Mühendislik Tarım Turizm İnşaat Emlak Sanayi ve Ticaret Limited Şirketi

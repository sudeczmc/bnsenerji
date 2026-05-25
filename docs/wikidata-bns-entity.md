# Wikidata Entity — BNS Enerji & Doğalgaz

**Amaç:** AI search (ChatGPT, Claude, Perplexity, Gemini, AI Overview) entity tanıma sinyali. Wikidata Q-ID, AI modellerinin tanıdığı "varlık" işaretidir — `LocalBusiness` schema tek başına yeterli değil. Wikidata = bilgi grafiğinde **kalıcı koordinat**.

**Submit adımı:**
1. wikidata.org'a giriş (Wikipedia hesabıyla — yoksa 1 dk hesap aç)
2. Sağ üst "Item" → "Create a new item"
3. Aşağıdaki property listesini doldur
4. "Publish" → Q-ID alır (örn. Q123456789)
5. Q-ID'yi `Layout.astro` Organization schema'sına `sameAs` arasına ekle: `"https://www.wikidata.org/wiki/Q123456789"`

---

## Label

- **TR (Turkish):** `BNS Enerji & Doğalgaz`
- **EN (English):** `BNS Enerji & Doğalgaz`

## Description

- **TR:** `Polatlı/Ankara merkezli doğalgaz tesisat, kombi, klima ve ısı pompası firması; Polgaz Sertifikalı (PG-1065)`
- **EN:** `Natural gas installation, boiler, air conditioning and heat pump company based in Polatlı, Ankara, Turkey; Polgaz certified (PG-1065)`

## Aliases (her dil için ekle)

- BNS Enerji
- BNS Doğalgaz
- BNS Enerji Doğal Gaz
- Polatlı BNS Enerji
- BNS Enerji Polatlı

---

## Statements (property listesi)

| Property | Property kodu | Değer | Kaynak |
|---|---|---|---|
| instance of | **P31** | business (Q4830453) | site |
| instance of | **P31** | natural gas company (Q1058914) | Polgaz sertifika |
| country | **P17** | Turkey (Q43) | adres |
| located in admin territorial entity | **P131** | Polatlı (Q257619) | site, adres |
| coordinate location | **P625** | 39.5840 N, 32.1469 E | site `geo` schema |
| official website | **P856** | `https://bnsenerjidogalgaz.com` | direct |
| official name | **P1448** | `BNS Enerji Doğal Gaz Tesisat Taahhüt Mühendislik Tarım Turizm İnşaat Emlak Sanayi ve Ticaret Limited Şirketi` | Ticaret Sicil |
| short name | **P1813** | BNS Enerji | site |
| inception | **P571** | 2020 | site, Ticaret Sicil |
| industry | **P452** | construction (Q385378) + heating, ventilation and air conditioning (Q193760) | site |
| ISIC | **P1850** | 4322 | site (Sıhhi tesisat, ısıtma ve klima kurulumu) |
| street address | **P969** | `Fatih Mah., Bıyıktay Cd. 37/A` | site |
| postal code | **P281** | 06900 | site |
| phone number | **P1329** | `+90 532 499 39 86` | site |
| email address | **P968** | `bnsenerji@gmail.com` | site |
| Instagram username | **P2003** | `bnsenerjidogalgaz` | site |
| LinkedIn company ID | **P4264** | `bns-enerji-&-doğalgaz` (URL slug) | site |
| service area | **P2541** | Polatlı (Q257619), Ankara Province (Q3957) | site `areaServed` |
| product or material produced/service | **P1056** | natural gas installation, boiler installation, air conditioning installation, heat pump installation, fire suppression system | site hizmetler |

---

## Reference (her statement için en az 1 kaynak ekle — Wikidata kalite kuralı)

Tüm statement'lar için **reference URL** olarak ekle:
- `https://bnsenerjidogalgaz.com/` (genel)
- `https://www.polgaz.com.tr/polgaz-sertifikali-firmalar` (Polgaz PG-1065 doğrulama)
- `https://bnsenerjidogalgaz.com/llms-full.txt` (machine-readable künye)

`stated in` (P248) property'si ile.

---

## Submit sonrası

1. **Q-ID'yi memory'ye kaydet:** `project_bns_enerji_site.md`'ye satır eklenecek
2. **`Layout.astro` Organization schema güncellemesi:**
   ```js
   sameAs: [
     "https://www.instagram.com/bnsenerjidogalgaz/",
     "https://www.linkedin.com/company/bns-enerji%CC%87-%26-do%C4%9Falgaz/",
     "https://www.wikidata.org/wiki/QXXXXXXX",  // ← buraya
   ],
   ```
3. **IndexNow tetik** → search engine'ler güncellemeyi alır
4. **Wikidata Reasonator'la kontrol:** `https://reasonator.toolforge.org/?q=QXXXXXXX` — entity grafiğini görsel görebilirsin

---

## Beklenen etki

- **2-4 hafta içinde:** Google Knowledge Panel aday adayı (yetersiz ama mümkün)
- **1-3 ay içinde:** ChatGPT/Claude/Perplexity'de "BNS Enerji Polatlı" sorgusunda entity-aware cevap (markup'tan değil entity grafiğinden)
- **3-6 ay içinde:** AI Overview citation şansı belirgin artış

**Doğrulama:** `https://www.google.com/search?kgmid=` Knowledge Graph search'te BNS aratılır (yoksa hâlâ aday).

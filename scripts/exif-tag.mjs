#!/usr/bin/env node
/**
 * BNS Enerji — Hyperlocal Image SEO: EXIF geo-tag + brand metadata
 *
 * Polatlı koordinatları (BNS dükkan + Fatih Mahallesi merkez):
 *   lat 39.5840 N, lon 32.1469 E  (LocalBusiness GeoCoordinates ile tutarlı)
 *
 * Yazılan metadata:
 *   - GPS lat/long + ref
 *   - Artist + Copyright + Creator
 *   - ImageDescription (alt-text gibi)
 *
 * Skill: seo-geo-aeo-audit §34 #30 — hyperlocal image SEO leverage.
 * Google Image Search "yerel" sinyali, image pack ranking için kritik.
 *
 * Çalıştırma: node scripts/exif-tag.mjs
 */

import { exiftool } from "exiftool-vendored";
import { readdir } from "node:fs/promises";
import { resolve, extname, join } from "node:path";

const IMAGES_DIR = resolve(process.cwd(), "public", "images");
const POLATLI_LAT = 39.584;
const POLATLI_LON = 32.1469;

// Etiketlenecek dosya pattern'leri (JPG/JPEG — EXIF native destek;
// WebP/AVIF EXIF okuma/yazma sınırlı, atlanır)
const VALID_EXT = [".jpg", ".jpeg"];

async function collectImages() {
  const all = [];

  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = join(dir, e.name);
      if (e.isDirectory()) {
        await walk(full);
      } else if (VALID_EXT.includes(extname(e.name).toLowerCase())) {
        all.push(full);
      }
    }
  }

  await walk(IMAGES_DIR);
  return all;
}

function describeFor(filename) {
  const lower = filename.toLowerCase();
  if (lower.includes("dukkan-vitrin")) {
    return "BNS Enerji & Doğalgaz — Polatlı Fatih Mahallesi mağaza ve showroom girişi";
  }
  if (lower.includes("bosch-klima")) return "Bosch Climate serisi inverter klima — BNS Enerji satış";
  if (lower.includes("bosch-kombi")) return "Bosch Condens yoğuşmalı kombi — BNS Enerji satış";
  if (lower.includes("bosch-isipompasi")) return "Bosch Compress hava-su ısı pompası — BNS Enerji satış";
  if (lower.includes("bosch-vrf")) return "Bosch Climate 5000 L VRF klima sistemi — BNS Enerji satış";
  if (lower.includes("wp/")) {
    return "BNS Enerji & Doğalgaz Polatlı referans projesi";
  }
  return "BNS Enerji & Doğalgaz — Polatlı doğalgaz, klima, ısı pompası firması";
}

async function tagImage(path) {
  try {
    await exiftool.write(path, {
      GPSLatitude: POLATLI_LAT,
      GPSLatitudeRef: "N",
      GPSLongitude: POLATLI_LON,
      GPSLongitudeRef: "E",
      Artist: "BNS Enerji & Doğalgaz",
      Copyright: "© BNS Enerji Doğal Gaz Tesisat Taahhüt Mühendislik Ltd. Şti.",
      Creator: "BNS Enerji & Doğalgaz",
      Rights: "© BNS Enerji & Doğalgaz",
      ImageDescription: describeFor(path),
      XMPToolkit: "BNS Enerji EXIF Pipeline",
      City: "Polatlı",
      "Sub-location": "Fatih Mahallesi",
      "Province-State": "Ankara",
      Country: "Türkiye",
      CountryCode: "TR",
    }, { writeArgs: ["-overwrite_original"] });
    return { path, ok: true };
  } catch (err) {
    return { path, ok: false, error: err.message };
  }
}

async function main() {
  const images = await collectImages();
  console.log(`EXIF tag: ${images.length} JPG bulundu (${IMAGES_DIR})`);
  console.log(`Koordinat: ${POLATLI_LAT}, ${POLATLI_LON} (Polatlı)`);
  console.log("");

  const results = await Promise.all(images.map(tagImage));
  const ok = results.filter((r) => r.ok).length;
  const fail = results.filter((r) => !r.ok);

  results.forEach((r) => {
    const short = r.path.replace(IMAGES_DIR, "");
    console.log(`  ${r.ok ? "✓" : "✗"} ${short}${r.ok ? "" : ` — ${r.error}`}`);
  });

  console.log("");
  console.log(`${ok}/${images.length} dosya etiketlendi.`);

  await exiftool.end();
  if (fail.length > 0) process.exit(1);
}

main().catch(async (err) => {
  console.error("EXIF hatası:", err);
  await exiftool.end();
  process.exit(1);
});

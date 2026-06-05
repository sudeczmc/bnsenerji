#!/usr/bin/env node
/**
 * IndexNow API auto-submit — BNS Enerji & Doğalgaz
 *
 * Bing, Yandex, Naver, Seznam tek API çağrısıyla ping'lenir.
 * Google IndexNow desteklemez (kendi sitemap ping protokolünü kullanır).
 * Ama ChatGPT Search Bing'den beslendiği için bu AI search citation hızını
 * saniyelere düşürür.
 *
 * Çalıştırma: `node scripts/indexnow.mjs`
 * Önkoşul: `npm run build` ile dist/sitemap-0.xml oluşturulmuş olmalı.
 */

import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const HOST = "bnsenerjidogalgaz.com";
const KEY = "443f2959afab45e9bcde635a5d50dfb1";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
// @astrojs/cloudflare adapter sitemap'i dist/client/ altina koyuyor; adapter
// yoksa dist/ koku. Ikisini de destekle.
const SITEMAP_PATH = [
  resolve(process.cwd(), "dist", "client", "sitemap-0.xml"),
  resolve(process.cwd(), "dist", "sitemap-0.xml"),
].find((p) => existsSync(p)) ?? resolve(process.cwd(), "dist", "client", "sitemap-0.xml");
const ENDPOINTS = [
  "https://api.indexnow.org/IndexNow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

async function extractUrls() {
  const xml = await readFile(SITEMAP_PATH, "utf-8");
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return matches.map((m) => m[1]);
}

async function submit(endpoint, urlList) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  return { endpoint, status: res.status, ok: res.ok };
}

async function main() {
  const urls = await extractUrls();
  console.log(`IndexNow: ${urls.length} URL bulundu`);
  console.log(`Host: ${HOST} | Key: ${KEY.slice(0, 8)}…${KEY.slice(-4)}`);
  console.log("");

  const results = await Promise.allSettled(
    ENDPOINTS.map((ep) => submit(ep, urls)),
  );

  results.forEach((r, i) => {
    const ep = ENDPOINTS[i];
    if (r.status === "fulfilled") {
      const { status, ok } = r.value;
      console.log(`  ${ok ? "✓" : "✗"} ${ep} → HTTP ${status}`);
    } else {
      console.log(`  ✗ ${ep} → ${r.reason?.message ?? "error"}`);
    }
  });

  const okCount = results.filter(
    (r) => r.status === "fulfilled" && r.value.ok,
  ).length;
  console.log(`\n${okCount}/${ENDPOINTS.length} endpoint başarılı.`);
  if (okCount === 0) process.exit(1);
}

main().catch((err) => {
  console.error("IndexNow hatası:", err);
  process.exit(1);
});

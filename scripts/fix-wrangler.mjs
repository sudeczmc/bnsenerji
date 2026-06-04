// Build sonrası düzeltme — @astrojs/cloudflare adapter bug'ı (withastro/astro#15802)
// Adapter, site session kullanmasa bile generate edilen wrangler.json'a ID'siz bir
// SESSION KV binding enjekte ediyor. Wrangler deploy bunu her seferinde yeni namespace
// olarak "provision" etmeye çalışıyor → namespace zaten var → API hatası 10014
// (a namespace with this account ID and title already exists) → deploy FAIL.
//
// Site tamamen statik; SESSION binding'e hiç ihtiyaç yok. Bu script onu config'den
// (hem kv_namespaces hem previews.kv_namespaces) çıkarır → wrangler provision denemez
// → deploy temiz geçer. Namespace ID gerektirmez, panel gerektirmez.

import { readFile, writeFile } from "node:fs/promises";

const CONFIG_PATH = "dist/client/wrangler.json";

const raw = await readFile(CONFIG_PATH, "utf8");
const cfg = JSON.parse(raw);

const stripSession = (arr) =>
  Array.isArray(arr) ? arr.filter((b) => b?.binding !== "SESSION") : arr;

let removed = 0;

if (Array.isArray(cfg.kv_namespaces)) {
  const before = cfg.kv_namespaces.length;
  cfg.kv_namespaces = stripSession(cfg.kv_namespaces);
  removed += before - cfg.kv_namespaces.length;
}

if (cfg.previews?.kv_namespaces) {
  const before = cfg.previews.kv_namespaces.length;
  cfg.previews.kv_namespaces = stripSession(cfg.previews.kv_namespaces);
  removed += before - cfg.previews.kv_namespaces.length;
}

await writeFile(CONFIG_PATH, JSON.stringify(cfg), "utf8");

console.log(
  `[fix-wrangler] SESSION KV binding(ler) temizlendi: ${removed} adet → deploy provision denemez.`
);

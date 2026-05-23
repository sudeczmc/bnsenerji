import { defineMiddleware } from "astro:middleware";

/**
 * BNS Enerji — WordPress geçiş redirect'leri.
 *
 * Domain 6 ay WordPress'teydi (Mayıs 2026'da Astro'ya geçti). Bazı eski
 * URL patterleri Google index'inde kalmış veya backlink olarak hayatta
 * olabilir. 301 ile SEO equity yeni içeriğe taşınır + soft 404 riski
 * minimize edilir.
 *
 * Pattern listesi — yaygın WP varsayılan + Türkçe WP slug:
 *   /?p=N veya /?page_id=N  → anasayfa (query atılır)
 *   /wp-admin/* /wp-content/* /wp-includes/*  → anasayfa
 *   /sample-page/ /hello-world/  → anasayfa
 *   /category/* /tag/* /author/* /date/  → /
 *   /services/ /service/  → /hizmetler/
 *   /hizmetlerimiz/ /servisler/  → /hizmetler/
 *   /about/ /about-us/  → /hakkimizda/
 *   /contact/ /contact-us/  → /iletisim/
 *   /references/  → /referanslar/
 *   /products/ /urunlerimiz/  → /urunler/
 *
 * Astro static build production'da middleware Cloudflare Worker üzerinden
 * çalışır — `output: "static"` modunda da middleware destekli (Astro 4+).
 */

const REDIRECTS: Record<string, string> = {
  // Hizmet sayfa varyantları
  "/services": "/hizmetler/",
  "/services/": "/hizmetler/",
  "/service": "/hizmetler/",
  "/service/": "/hizmetler/",
  "/hizmetlerimiz": "/hizmetler/",
  "/hizmetlerimiz/": "/hizmetler/",
  "/servisler": "/hizmetler/",
  "/servisler/": "/hizmetler/",

  // Hakkımızda varyantları
  "/about": "/hakkimizda/",
  "/about/": "/hakkimizda/",
  "/about-us": "/hakkimizda/",
  "/about-us/": "/hakkimizda/",
  "/hakkinda": "/hakkimizda/",
  "/hakkinda/": "/hakkimizda/",

  // İletişim varyantları
  "/contact": "/iletisim/",
  "/contact/": "/iletisim/",
  "/contact-us": "/iletisim/",
  "/contact-us/": "/iletisim/",
  "/bize-ulasin": "/iletisim/",
  "/bize-ulasin/": "/iletisim/",

  // Referanslar
  "/references": "/referanslar/",
  "/references/": "/referanslar/",
  "/portfolio": "/referanslar/",
  "/portfolio/": "/referanslar/",

  // Ürünler
  "/products": "/urunler/",
  "/products/": "/urunler/",
  "/urunlerimiz": "/urunler/",
  "/urunlerimiz/": "/urunler/",

  // WP varsayılan sayfalar
  "/sample-page": "/",
  "/sample-page/": "/",
  "/hello-world": "/",
  "/hello-world/": "/",
};

// WP'nin "Gone" kabul edilen path prefix'leri — 410 dönmek SEO açısından
// 404'ten hızlı index dışı bırakır.
const GONE_PREFIXES = [
  "/wp-admin",
  "/wp-content",
  "/wp-includes",
  "/wp-json",
  "/xmlrpc.php",
];

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // 1) Tam eşleşen WP-style redirect
  if (REDIRECTS[pathname]) {
    return context.redirect(REDIRECTS[pathname], 301);
  }

  // 2) WP query-string varsayılan post URL'leri (/?p=N, /?page_id=N, /?cat=N)
  if (pathname === "/" && (url.searchParams.has("p") || url.searchParams.has("page_id") || url.searchParams.has("cat"))) {
    return context.redirect("/", 301);
  }

  // 3) WP yönetim/içerik prefix'leri → 410 Gone (Google hızlı düşürür)
  if (GONE_PREFIXES.some((p) => pathname.startsWith(p))) {
    return new Response("Gone", {
      status: 410,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  // 4) Category/tag/author/date arşivleri → anasayfa
  if (/^\/(category|tag|author|date|archive)(\/|$)/.test(pathname)) {
    return context.redirect("/", 301);
  }

  return next();
});

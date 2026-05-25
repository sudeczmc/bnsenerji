// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://bnsenerjidogalgaz.com',
  trailingSlash: 'always',
  redirects: {
    '/bns-enerji-dogalgaz-polatli/': '/',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  build: {
    inlineStylesheets: 'always',
    assets: '_astro',
  },
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/tesekkurler/') && !page.includes('/404'),
      // Image sitemap — her sayfaya hero/primary image entry
      // Google Image Search crawl önceliği + "Licensable" badge (ImageObject schema ile birlikte)
      serialize: (item) => {
        const SITE = 'https://bnsenerjidogalgaz.com';
        const imageMap = {
          '/': `${SITE}/images/dukkan-vitrin.jpg`,
          '/hakkimizda/': `${SITE}/og-image.png`,
          '/iletisim/': `${SITE}/og-image.png`,
          '/referanslar/': `${SITE}/images/wp/1716460733.jpg`,
          '/urunler/': `${SITE}/images/bosch-klima-hd.webp`,
          '/hizmetler/': `${SITE}/og-image.png`,
          '/hizmetler/dogalgaz-tesisati/': `${SITE}/images/wp/Electrical-power-food-or-even-water-have-risen-so.jpg`,
          '/hizmetler/isi-pompasi/': `${SITE}/images/wp/De-plus-en-plus-populaires-les-pompes-a-chaleur.jpg`,
          '/hizmetler/yangin-sondurme/': `${SITE}/images/wp/2e7f649b4d88f4d1e1d9f958532c1d15.jpg`,
          '/hizmetler/klima/': `${SITE}/images/wp/9f404e1487a6bb753e9bb83ca3e4937f.jpg`,
          '/hizmetler/yerden-isitma/': `${SITE}/images/wp/16d30f517f4f43909ddb6cfd60e76480.jpg`,
          '/hizmetler/merkezi-isitma/': `${SITE}/images/wp/indir-4.jpg`,
          '/hizmetler/kombi/': `${SITE}/images/bosch-kombi-hd.webp`,
          '/hizmetler/kombi-degisimi/': `${SITE}/images/bosch-kombi-hd.webp`,
          '/hizmetler/vrf-kurulum/': `${SITE}/images/bosch-vrf-hd.webp`,
          '/osb-referans-gorsel/': `${SITE}/images/wp/1-18-jpg.webp`,
          '/kalite-politikasi/': `${SITE}/og-image.png`,
          '/yayin-politikamiz/': `${SITE}/og-image.png`,
        };
        // URL pathname'i çıkar (item.url tam URL gelir, sondaki / ile)
        const pathname = new URL(item.url).pathname;
        const imageUrl = imageMap[pathname];
        if (imageUrl) {
          item.img = [{ url: imageUrl, title: 'BNS Enerji & Doğalgaz' }];
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

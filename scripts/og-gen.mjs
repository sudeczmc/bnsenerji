import sharp from "sharp";

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#6BA535"/>
      <stop offset="1" stop-color="#4A7325"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="44" y="44" width="1112" height="542" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="2"/>
  <text x="600" y="212" font-family="Arial, sans-serif" font-size="122" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="16">BNS</text>
  <text x="600" y="264" font-family="Arial, sans-serif" font-size="30" font-weight="bold" fill="rgba(255,255,255,0.82)" text-anchor="middle" letter-spacing="12">ENERJİ &amp; DOĞALGAZ</text>
  <line x1="540" y1="314" x2="660" y2="314" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
  <text x="600" y="398" font-family="Arial, sans-serif" font-size="50" font-weight="bold" fill="#ffffff" text-anchor="middle">Polatlı Doğalgaz ve İklim Çözümleri</text>
  <text x="600" y="454" font-family="Arial, sans-serif" font-size="27" fill="rgba(255,255,255,0.82)" text-anchor="middle">Doğalgaz · Klima · Isı Pompası · Yangın Söndürme</text>
  <text x="600" y="558" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="rgba(255,255,255,0.9)" text-anchor="middle">bnsenerjidogalgaz.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og-image.png");
console.log("✓ og-image.png yenilendi (Güneş Enerjisi çıkarıldı)");

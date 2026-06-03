import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";

// Kaynak: BNS'in gerçek orijinal logosu (turuncu+yeşil dalga, koyu yeşil BNS)
const SRC = "public/images/bns-logo.png";

// 1) Şeffaf kenarları kırp, kareye oturt (hafif iç boşluk), şeffaf zemin
const trimmed = await sharp(SRC).trim().toBuffer();
const meta = await sharp(trimmed).metadata();
const side = Math.round(Math.max(meta.width, meta.height) * 1.1); // %10 nefes payı
const square = await sharp({
  create: { width: side, height: side, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
})
  .composite([{ input: trimmed, gravity: "center" }])
  .png()
  .toBuffer();

// 2) Şeffaf PNG ikonlar (Google + tarayıcı sekmesi)
await sharp(square).resize(32, 32).png().toFile("public/favicon-32.png");
await sharp(square).resize(192, 192).png().toFile("public/favicon-192.png");

// 3) apple-touch-icon — iOS şeffaflığı siyaha çevirir → beyaz zemin + iç boşluk
const appleInner = await sharp(square).resize(150, 150).toBuffer();
await sharp({
  create: { width: 180, height: 180, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
})
  .composite([{ input: appleInner, gravity: "center" }])
  .png()
  .toFile("public/apple-touch-icon.png");

// 4) favicon.ico — 48x48 PNG'yi ICO konteynerine sar (Vista+ PNG-in-ICO)
const ico48 = await sharp(square).resize(48, 48).png().toBuffer();
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // entry sayısı
const entry = Buffer.alloc(16);
entry.writeUInt8(48, 0); // genişlik
entry.writeUInt8(48, 1); // yükseklik
entry.writeUInt8(0, 2); // palet
entry.writeUInt8(0, 3); // reserved
entry.writeUInt16LE(1, 4); // planes
entry.writeUInt16LE(32, 6); // bit derinliği
entry.writeUInt32LE(ico48.length, 8); // veri boyutu
entry.writeUInt32LE(6 + 16, 12); // veri offset
writeFileSync("public/favicon.ico", Buffer.concat([header, entry, ico48]));

// 5) favicon.svg — gerçek logoyu base64 raster olarak göm (Google SVG favicon'u tercih eder)
const b64 = (await sharp(square).resize(256, 256).png().toBuffer()).toString("base64");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256"><image width="256" height="256" href="data:image/png;base64,${b64}"/></svg>`;
writeFileSync("public/favicon.svg", svg);

console.log("✓ Favicon seti gerçek BNS logosundan yenilendi: favicon.svg + favicon.ico + favicon-32/192.png + apple-touch-icon.png");

import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";

const SRC = "public/images/dukkan-vitrin.jpg";
const OUT = "public/images";

const sizes = [480, 540, 720, 960, 1080];

if (!existsSync(OUT)) await mkdir(OUT, { recursive: true });

for (const w of sizes) {
  const base = `${OUT}/dukkan-vitrin-${w}`;
  await sharp(SRC).resize({ width: w, withoutEnlargement: true }).avif({ quality: 65, effort: 6 }).toFile(`${base}.avif`);
  await sharp(SRC).resize({ width: w, withoutEnlargement: true }).webp({ quality: 80, effort: 6 }).toFile(`${base}.webp`);
  console.log(`✓ dukkan-vitrin-${w}.{avif,webp}`);
}

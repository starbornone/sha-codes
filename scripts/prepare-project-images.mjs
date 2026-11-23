import { mkdir, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const originals = fileURLToPath(new URL('../public/images/projects/', import.meta.url));
const output = join(originals, 'responsive');
const manifest = {};

await mkdir(output, { recursive: true });

for (const file of (await readdir(originals)).sort()) {
  if (!file.endsWith('.jpg')) continue;

  const input = sharp(join(originals, file));
  const { width, height } = (await input.metadata()).autoOrient;
  const widths = [...new Set([480, 768, 1200].map((size) => Math.min(size, width)))];
  const stem = file.slice(0, -4);
  const candidates = [];

  for (const target of widths) {
    const name = `${stem}-${target}.webp`;
    await input.clone().autoOrient().resize({ width: target })
      .webp({ quality: 78 })
      .toFile(join(output, name));
    candidates.push(`/images/projects/responsive/${name} ${target}w`);
  }

  manifest[`/images/projects/${file}`] = {
    width,
    height,
    srcSet: candidates.join(', '),
  };
}

await writeFile(
  new URL('../src/data/projectImages.generated.json', import.meta.url),
  `${JSON.stringify(manifest, null, 2)}\n`,
);

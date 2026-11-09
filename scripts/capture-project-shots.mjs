// Requires: npm i -D playwright && npx playwright install chromium
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const shots = [
  { id: "ovi", url: "https://www.ophis.com.au/" },
  { id: "ready-check", url: "https://readycheck.work/" },
  { id: "kritik-systems", url: "https://www.kritik.systems/" },
  { id: "midnight-archive", url: "https://www.midnightarchive.online/" },
  { id: "arcana-tools", url: "https://www.arcana.tools/" },
  { id: "talesmith", url: "https://www.talesmith.com.au/" },
  { id: "break-the-loop", url: "https://www.breaktheloop.games/" },
  { id: "praxis-primer", url: "https://www.praxisprimer.info/" },
  { id: "harptos-calendar-tracker", url: "https://harptos.starmist.studio/" },
  { id: "no-place-to-rest", url: "https://www.noplaceto.rest/" },
  { id: "dr-olga-palma", url: "https://drolgap.com.au/" },
];

const outDir = path.resolve("public/projects");
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});

for (const { id, url } of shots) {
  const out = path.join(outDir, `${id}-01.jpg`);
  process.stdout.write(`Shot ${id}… `);
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: out, type: "jpeg", quality: 82 });
    console.log("ok");
  } catch (error) {
    console.log(`failed: ${error.message}`);
  }
}

await browser.close();

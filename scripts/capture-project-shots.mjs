// Requires: npm i -D playwright && npx playwright install chromium
//
// Authenticated apps (ovi, ready-check, arcana-tools) need a Playwright
// storageState file in scripts/auth/<id>.json. Create one with:
//   node scripts/save-auth.mjs <id>
// Those JSON files are gitignored.

import { chromium } from "playwright";
import { access, mkdir } from "node:fs/promises";
import path from "node:path";

const shots = [
  {
    id: "ovi",
    url: "https://www.ophis.com.au/",
    auth: true,
  },
  {
    id: "ready-check",
    url: "https://readycheck.work/",
    auth: true,
  },
  { id: "kritik-systems", url: "https://www.kritik.systems/" },
  { id: "midnight-archive", url: "https://www.midnightarchive.online/" },
  {
    id: "arcana-tools",
    url: "https://www.arcana.tools/",
    auth: true,
  },
  { id: "talesmith", url: "https://www.talesmith.com.au/" },
  { id: "break-the-loop", url: "https://www.breaktheloop.games/" },
  { id: "praxis-primer", url: "https://www.praxisprimer.info/" },
  { id: "harptos-calendar-tracker", url: "https://harptos.starmist.studio/" },
  { id: "no-place-to-rest", url: "https://www.noplaceto.rest/" },
  { id: "dr-olga-palma", url: "https://drolgap.com.au/" },
];

const outDir = path.resolve("public/images/projects");
const authDir = path.resolve("scripts/auth");
await mkdir(outDir, { recursive: true });

async function authPath(id) {
  const file = path.join(authDir, `${id}.json`);
  try {
    await access(file);
    return file;
  } catch {
    return null;
  }
}

const browser = await chromium.launch();

for (const shot of shots) {
  const out = path.join(outDir, `${shot.id}-01.jpg`);
  process.stdout.write(`Shot ${shot.id}… `);

  const storageState = shot.auth ? await authPath(shot.id) : null;
  if (shot.auth && !storageState) {
    console.log(`skipped (run: node scripts/save-auth.mjs ${shot.id})`);
    continue;
  }

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    ...(storageState ? { storageState } : {}),
  });
  const page = await context.newPage();

  try {
    const target = shot.shotUrl ?? shot.url;
    await page.goto(target, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: out, type: "jpeg", quality: 82 });
    console.log(storageState ? "ok (authed)" : "ok");
  } catch (error) {
    console.log(`failed: ${error.message}`);
  } finally {
    await context.close();
  }
}

await browser.close();

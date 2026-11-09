// One-time login helper for authenticated project screenshots.
// Requires: npm i -D playwright && npx playwright install chromium
//
// Usage:
//   node scripts/save-auth.mjs <id> [startUrl]
//
// Examples:
//   node scripts/save-auth.mjs ovi https://www.ophis.com.au/
//   node scripts/save-auth.mjs ready-check https://readycheck.work/
//   node scripts/save-auth.mjs arcana-tools https://www.arcana.tools/
//
// A headed browser opens. Sign in, navigate to the screen you want to capture,
// then return here and press Enter. Session cookies are written to
// scripts/auth/<id>.json (gitignored) for scripts/capture-project-shots.mjs.

import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const defaults = {
  ovi: "https://www.ophis.com.au/",
  "ready-check": "https://readycheck.work/",
  "arcana-tools": "https://www.arcana.tools/",
};

const id = process.argv[2];
const startUrl = process.argv[3] ?? defaults[id];

if (!id || !startUrl) {
  console.error(
    "Usage: node scripts/save-auth.mjs <id> [startUrl]\n" +
      `Known ids: ${Object.keys(defaults).join(", ")}`,
  );
  process.exit(1);
}

const authDir = path.resolve("scripts/auth");
const authFile = path.join(authDir, `${id}.json`);
await mkdir(authDir, { recursive: true });

const browser = await chromium.launch({ headless: false });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
});
const page = await context.newPage();
await page.goto(startUrl, { waitUntil: "domcontentloaded", timeout: 60000 });

const rl = readline.createInterface({ input, output });
console.log(
  `\nSign in to ${id} in the browser window.\n` +
    "Open the page you want screenshots of, then press Enter here.\n",
);
await rl.question("Press Enter to save the session… ");
rl.close();

await context.storageState({ path: authFile });
await browser.close();
console.log(`Saved ${path.relative(process.cwd(), authFile)}`);

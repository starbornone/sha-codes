// Draws a 1200x630 share image for a project or talk page in the style of
// public/og-image.png. Satori lays out the markup as SVG and resvg turns it
// into a PNG, so the build needs no browser.
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';

const require = createRequire(import.meta.url);
const font = (pkg, file) => readFile(require.resolve(`@fontsource/${pkg}/files/${file}`));

const fonts = [
  { name: 'Rubik', weight: 400, data: await font('rubik', 'rubik-latin-400-normal.woff') },
  { name: 'Rubik', weight: 700, data: await font('rubik', 'rubik-latin-700-normal.woff') },
  { name: 'Overpass Mono', weight: 400, data: await font('overpass-mono', 'overpass-mono-latin-400-normal.woff') },
];

// From tailwind.config.js.
const colours = { background: '#16191d', oasis: '#1dddca', title: '#ccd1d6', muted: '#788591' };
const glow = 'rgba(29, 221, 202, 0.6)';

// Plain objects stand in for JSX, which this script can't use.
const el = (type, style, ...children) => ({ type, props: { style: { display: 'flex', ...style }, children } });

// The </> mark from the site logo.
const logo = {
  type: 'svg',
  props: {
    width: 40,
    height: 32,
    viewBox: '0 0 640 512',
    fill: colours.oasis,
    children: {
      type: 'path',
      props: {
        d: 'M405.1 .8c-8.4-2.8-17.4 1.7-20.2 10.1l-160 480c-2.8 8.4 1.7 17.4 10.1 20.2s17.4-1.7 20.2-10.1l160-480c2.8-8.4-1.7-17.4-10.1-20.2zM172 117.4c-5.9-6.6-16-7.2-22.6-1.3l-144 128C2 247.1 0 251.4 0 256s2 8.9 5.4 12l144 128c6.6 5.9 16.7 5.3 22.6-1.3s5.3-16.7-1.3-22.6L40.1 256 170.6 140c6.6-5.9 7.2-16 1.3-22.6zm296.1 0c-5.9 6.6-5.3 16.7 1.3 22.6L599.9 256 469.4 372c-6.6 5.9-7.2 16-1.3 22.6s16 7.2 22.6 1.3l144-128c3.4-3 5.4-7.4 5.4-12s-2-8.9-5.4-12l-144-128c-6.6-5.9-16.7-5.3-22.6 1.3z',
      },
    },
  },
};

// Long names wrap onto more lines, so step the size down to keep them in frame.
const titleSize = (title) => (title.length <= 24 ? 84 : title.length <= 44 ? 68 : 56);

export async function renderShareImage({ eyebrow, title, tags }) {
  const tree = el(
    'div',
    { width: 1200, height: 630, position: 'relative', backgroundColor: colours.background, fontFamily: 'Rubik' },
    el('div', { position: 'absolute', top: 0, right: 120, width: 2, height: 630, backgroundImage: `linear-gradient(to bottom, ${glow}, transparent)` }),
    el('div', { position: 'absolute', bottom: 64, left: 0, width: 1200, height: 2, backgroundImage: `linear-gradient(to right, ${glow}, transparent)` }),
    // Satori adds padding to an element's size instead of fitting it inside,
    // so the content sits in an inset box.
    el(
      'div',
      { position: 'absolute', top: 80, right: 96, bottom: 104, left: 96, flexDirection: 'column', justifyContent: 'space-between' },
      el(
        'div',
        { alignItems: 'center', gap: 20, fontSize: 40, fontWeight: 700 },
        logo,
        el('div', {}, el('span', { color: colours.oasis }, 'sha'), el('span', { color: colours.title }, '.codes')),
      ),
      el(
        'div',
        { flexDirection: 'column', gap: 20, maxWidth: 940 },
        el('div', { fontFamily: 'Overpass Mono', fontSize: 30, color: colours.oasis }, eyebrow),
        el('div', { fontSize: titleSize(title), fontWeight: 700, lineHeight: 1.1, color: colours.title }, title),
      ),
      el(
        'div',
        { gap: 36, fontFamily: 'Overpass Mono', fontSize: 26 },
        ...tags.map((tag, index) =>
          el('div', { gap: 12 }, el('span', { color: colours.oasis }, `0${index + 1}.`), el('span', { color: colours.muted }, tag)),
        ),
      ),
    ),
  );

  const svg = await satori(tree, { width: 1200, height: 630, fonts });
  return new Resvg(svg).render().asPng();
}

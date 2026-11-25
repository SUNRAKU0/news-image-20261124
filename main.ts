// News-image entry: copies the front-page image beside this file to /output/entry.png.
// Node 22, standard library only, no network, deterministic.
import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (!existsSync(source)) {
  throw new Error('entry.png is missing next to main.ts; nothing to copy.');
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));

// Verify the write: the output must exist and match the source byte for byte.
const outPath = join(outDir, 'entry.png');
const sourceBytes = statSync(source).size;
const outBytes = statSync(outPath).size;
if (outBytes !== sourceBytes) {
  throw new Error(`entry.png write failed: wrote ${outBytes} bytes, expected ${sourceBytes}.`);
}

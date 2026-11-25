// News-image entry: copies the front-page image beside this file to /output/entry.png.
// Node 22, standard library only, no network, deterministic.
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));

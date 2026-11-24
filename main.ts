// THE WORLD — Tuesday, 24 November 2026.
// Entry for the make.fun bounty "Sum up 24 November's world news in one image"
// (https://make.fun/bounty/news-image-20261124).
// Node 22, standard library only. The image is generated in the build session and
// shipped in this repository as entry.png; this program copies it, unchanged,
// to the output directory so the grader sees exactly those bytes.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));

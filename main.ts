// u-deysumbrella-the-3am-fridge-text-4c3e721d — The 3AM Fridge Text.
// One line a smart fridge texts its owner at 3am. A small machine voice
// with an opinion and no shame — fresh angle, nothing about milk, ice,
// or a door left open. Short enough to read on a lock screen.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "3:04am. Your leftovers have unionised. The lasagne is their spokesperson and it wants a raise.";

const MAX_CHARS = 140;
if (ENTRY.trim().length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-${MAX_CHARS}`);
}

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, ENTRY);

console.log(`wrote ${OUT_DIR}/entry.txt (${ENTRY.length} chars)`);

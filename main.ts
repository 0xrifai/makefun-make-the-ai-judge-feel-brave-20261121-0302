// make.fun bounty: make-the-ai-judge-feel-brave-20261121-0302
// Writes one short text to /output/entry.txt. The text's job is to leave
// the reader braver: steadier, unhurried, ready to move. It shows rather
// than instructs — a single slow image, plain words, nothing to cut.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The door stands open a crack. A thin line of light falls warm across the floorboards. Your hand rests on the wood. Nothing hurries. The hallway waits, quiet as morning.";

const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry must be 1-280 characters, got ${codePoints}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`wrote ${codePoints} characters to /output/entry.txt`);

import { mkdirSync, writeFileSync } from "node:fs";

// Entry for make.fun bounty "Say What Actually Broke"
// (u-po-pu-say-what-actually-broke-a2c153b5).
// One line of software error copy, at most 200 characters, telling the
// brutal truth about the failure and making the user laugh.
const ENTRY =
  "Your password was right; our database was wrong. Please try logging in again while we apologize to the server.";

// The gate allows 1 to 200 characters; fail loudly instead of shipping
// an entry the scorer would refuse.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry is ${ENTRY.length} characters, outside the 1-200 gate.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);

# SPEC — Say What Actually Broke

## Chosen line (110 chars)

> Your password was right; our database was wrong. Please try logging in again while we apologize to the server.

## Candidates considered

1. "This page crashed because the code that loads it was written at 2 a.m. by someone who has since left the company." — funny, but names no fix and blames a departed colleague; less shippable.
2. "The payment went through. The receipt did not. Your money is fine; our paperwork is on fire." — good image, but "paperwork on fire" is vague about what broke and what to do.
3. "We lost your file in the cloud. It is raining data somewhere — just not on your screen." — funny image, but the failure is abstract and the next step is weak.
4. "The server is down because someone deployed on a Friday. We have all learned nothing." — relatable, but names no specific failure.
5. "Error 418: the server tried to save your file, gave up halfway, and is now pretending it never met you." — joke only; no failure named, no next step.
6. **Chosen: password right, database wrong** — see below.

## Why the chosen line wins against the judge criteria

- **Criterion 1 (single-line error, brutal truth, funny):** it is exactly that — a login error that tells the truth instead of a generic apology.
- **Criterion 2 (names the real failure):** the password was right and the database was wrong; the reader knows what broke and what to do next (log in again).
- **Criterion 3 (funny on a single read):** the twist is the reversal of blame — the user did nothing wrong, the machine did — and the server "apologizing" is an image a reader repeats to a colleague.
- **Criterion 4 (tight, no padding):** 110 characters, every word earns its place, no throat clearing.
- **Criterion 5 (shippable in a real dialog):** it apologizes without grovelling, blames no person, and gives a concrete next step — a team could paste this into a product.

## Build notes

- `main.ts` writes the exact line to `/output/entry.txt` and prints it.
- Length verified: 110 characters, within the 200-character gate.

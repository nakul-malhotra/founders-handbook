# Founders' Handbook

A reading-first, fully-cited reference for founders. Volume I covers raising
venture capital at the pre-seed and seed stage.

One rule governs everything here: no claim is published unless it can be traced
to a named, public primary source. Every substantive statement in the guide
carries a superscript marker that resolves to an entry in the source catalogue,
and every catalogue entry links to the original work.

## Pages

- `/` — cover and contents
- `/guide` — the cited guide, fifteen chapters
- `/sources` — the source catalogue, grouped by kind
- `/method` — how it was assembled, and the citation standard

## Citation model

The catalogue lives in [`src/data/sources.ts`](src/data/sources.ts) as a typed,
`as const` record. Each citation references a source by id, so an unknown or
removed source fails the TypeScript build — citation integrity is checked at
compile time, not by hand.

## Stack

Next.js (App Router) · React · TypeScript · Tailwind. Type set in Bricolage
Grotesque, Spectral, and Spline Sans Mono.

## Develop

```bash
npm install
npm run build
npx next start
```

## Not advice

This is a synthesis of published guidance, not legal, tax, or financial advice.
Cited figures reflect their sources at the time of publication; check them
against the originals.

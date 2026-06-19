# Founders' Handbook — agent guidance

## What this repo is

A reading-first, fully-cited reference for founders. Volume I covers raising
venture capital at the pre-seed and seed stage. The site is built with
Next.js 16 (App Router), React 19, TypeScript, and Tailwind 4.

Live at **groundwork-vc.vercel.app**. Source repo: `nakul-malhotra/founders-handbook`.

---

## The one rule

**No claim is published unless it can be traced to a named, public primary source.**

Every substantive statement in the guide must carry a `<Cite id="source-id" />`
superscript marker. The cited source must exist in the catalogue
(`src/data/sources.ts`). An unknown source id is a TypeScript compile error —
citation integrity is checked at build time, not by hand.

---

## Adding a source

Sources live in `src/data/sources.ts` in the `RAW` array. Each entry follows
this shape:

```ts
{
  id: "unique-kebab-id",       // stable, lowercase, never reused
  author: "First Last",
  title: "Title of the Work",
  publisher: "domain.com or institution",
  year: "YYYY",               // or "n.d." if undated
  url: "https://...",         // direct public link, no paywalls without a note
  kind: "essay",              // one of the six kinds below
  note: "One-sentence digest of what this source contributes.",
}
```

Valid `kind` values: `"essay"` · `"library"` · `"fund"` · `"guide"` · `"data"` · `"operator"`

Source catalogue number (`n`) is assigned automatically by array position.
Append new sources at the end of a kind-group; never reorder existing entries
(that would renumber all subsequent citations).

---

## Citing in guide content

Use the `<Cite>` component from `@/components/Cite`:

```tsx
import { Cite, ChapterSources } from "@/components/Cite";

// single source
<Cite id="pg-fr" />

// multiple sources at once (same superscript cluster)
<Cite id={["pg-fr", "yc-raise"]} />

// at the end of each chapter section
<ChapterSources ids={["pg-fr", "yc-raise", "fc-lesson1"]} />
```

`<ChapterSources>` should list every source cited in the chapter, de-duped.
It renders the "Sources — this chapter" aside.

---

## Project structure

```
src/
  app/
    page.tsx          — cover / contents
    guide/page.tsx    — the fifteen-chapter guide
    sources/page.tsx  — full source catalogue
    method/page.tsx   — colophon and citation standard
    globals.css       — the entire design system (field-manual / drafting aesthetic)
    layout.tsx        — root layout, fonts, metadata
  components/
    Cite.tsx          — <Cite> and <ChapterSources>
    SiteHeader.tsx    — site-wide nav
    SiteFooter.tsx    — footer
    Toc.tsx           — in-guide table of contents
    ReadingProgress.tsx
  data/
    sources.ts        — the source catalogue (the ground truth for all citations)
    guide.ts          — chapter list (drives TOC and home contents index)
    site.ts           — site-level constants (name, nav, repo URL)
```

---

## Design language

The site uses a **field-manual / architect's-drafting** aesthetic:
- Title-block masthead, crop/registration marks, a faint technical grid
- Dimension-line rules, mono margin annotations
- Accent: survey-vermilion (`--vermilion`) on limestone paper (`--limestone`)
- Fonts: **Bricolage Grotesque** (display) · **Spectral** (body) · **Spline Sans Mono** (apparatus)

All design tokens live in `src/app/globals.css` as CSS custom properties.
Do not inline colours or font sizes — reference tokens.

---

## Dev commands

```bash
npm install          # install deps
npm run dev          # start dev server (localhost:3000)
npm run build        # production build (also the citation-integrity check)
npx next start       # serve the production build
```

TypeScript compilation (`npm run build`) is the primary correctness gate.
There is no separate lint script; `tsc` catches unknown source ids.

---

## What to avoid

- Unsourced claims in guide copy. If a sentence makes a factual assertion,
  it must have a `<Cite>` or it should not be published.
- Introducing new source ids without a corresponding entry in `RAW`.
- Renaming or removing existing source ids (breaks existing citations).
- Adding commentary or "common knowledge" statements that can't be traced
  to a named, public primary source in the catalogue.
- Paywalled or unpublished sources (flag them in `note` if they are partly gated).

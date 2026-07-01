# Design system

> Reference for anyone — human or agent — touching the visual design of this site
> or the [proposals](https://github.com/codemyriad/proposals) decks. The brand
> lives in one file; this explains what it is and how to change it.

The brand is a small, shared layer on **Tailwind + DaisyUI**:

- **`design/theme.mjs`** — the single source of truth. Exports the DaisyUI
  `codemyriad` theme (brand palette + control-shape tokens) and `fontFamily`
  (JetBrains Mono). `tailwind.config.mjs` imports it; nothing else defines brand
  colours.
- **`public/logo.svg`, `public/favicon.png`** — the mark.

Everything visual is expressed as DaisyUI tokens (`bg-base-100`, `text-primary`,
`text-base-content`, `.btn`, `.badge`, …) rather than hardcoded hex, so a brand
change is one edit in `design/theme.mjs`.

## Shared with the proposals repo

`design/theme.mjs`, `public/logo.svg`, and `public/favicon.png` are **vendored
byte-identical** into the private
[proposals](https://github.com/codemyriad/proposals) repo (client decks build on
the same brand). **This repo is the source of truth**; proposals keeps a copy and
runs a weekly **design-sync** check that flags drift against these files. If you
change the brand here, expect that check to go red until the copy is resynced —
see the proposals repo's `DESIGN.md`.

The two repos share the brand **layer only — no components**. The marketing-site
components (`src/components/…`) and the proposal components (in the proposals repo)
are separate surfaces.

## Changing the brand

1. Edit the token in **`design/theme.mjs`** (a colour, or the JetBrains Mono
   family).
2. `pnpm build` to confirm.
3. Copy the changed `design/theme.mjs` (and any changed logo/favicon) into the
   proposals repo — or let its design-sync check remind you.

## Component reference

DaisyUI-tokenised building blocks are documented with live examples in the
internal `/lab/` pages (`noindex`), e.g. `/lab/case-study-components`.

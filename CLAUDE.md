# codemyriad.io

Public marketing site + blog for Code Myriad. Astro (astro-nano base), Tailwind v3
+ DaisyUI, TypeScript, no UI framework. `pnpm` is the package manager.

## Reference docs (read the relevant one before working in that area)

- **Design system / brand** → [DESIGN.md](./DESIGN.md). The brand is one file:
  `design/theme.mjs` (DaisyUI `codemyriad` theme + JetBrains Mono), shared verbatim
  with the private `codemyriad/proposals` repo. Style with DaisyUI tokens, never
  hardcoded hex.
- Internal component references live under `/lab/` (`noindex`), e.g.
  `/lab/case-study-components`.

## Conventions

- Verify with `pnpm build` (`astro check && astro build`) and `pnpm lint`.
- Don't hardcode colours — use theme tokens (`bg-base-100`, `text-primary`,
  `text-base-content`, …).
- Client proposals do **not** live here — they're in the private
  `codemyriad/proposals` repo. Keep commercial/proposal content out of this public
  repo.

---
shaping: true
---

# Services Comms — Slices

**Shaping:** [shaping.md](./shaping.md) (Shape D selected — v8 tabbed editor list)

Single branch (`enh/services`), three vertical slices, each demo-able.

🟡 **State note (2026-06-12):** V1 and V2 are applied in the working tree (uncommitted). The content-model half of V1 was verified against the D6 table by the plan-review pass — verify and commit rather than recreate.

## V1: Content model + component, live on `/services`

The whole mechanism, proven on the low-traffic page first.

| Affordance | Change |
|---|---|
| `src/content/config.ts` | Add `how-we-work` collection; add `linkLabel?` to `services` |
| `src/content/services/*` | Migration per shaping D6 table (keep `02-…` slug; fix `report-redesign` ref) |
| `src/content/how-we-work/*` | 3 new entries |
| `src/components/ServicesTabs.astro` | New: tablist + panels + `<details name>` rows, closed by default; open-state CSS; 🟡 tab script: roving tabindex, Left/Right/Home/End, automatic activation, focus recovery after shortcut-driven switches (init-guard + `astro:page-load`) |
| 🟡 `src/components/Head.astro` | Import + preload JetBrains Mono 500 (D1.7) |
| `src/pages/services/index.astro` | Replace TODO list with `<ServicesTabs />`; 🟡 wrapper `max-w-screen-xl` → `max-w-screen-lg` (D5) |

**Demo:** `/services` shows the v8 list; click rows to expand (one open per tab); tabs switch by click; build passes.

## V2: Homepage swap + keyboard wiring

| Affordance | Change |
|---|---|
| `src/pages/index.astro` | Replace `#services` grid (lines 86–132) with `<ServicesTabs />`, keep `id="services"`; 🟡 delete unused frontmatter services fetch (lines 56–69) — lint gate |
| `src/components/KeyboardShortcuts.astro` | 🟡 Three-tier precedence (open menu panel → main → rest; D3) + init guard |
| `src/components/KeyboardShortcutGuide.astro` | 🟡 "Services list (home & /services)" group; relabel Navigation `S` entry |

**Demo:** homepage shows tabs; `S`/`H` switch tabs on home and `/services`; `S` still navigates from `/blog`; 🟡 `M` then `S` (menu open) still navigates to `/services` from the homepage; 🟡 press `H` while focus is on a services row — Tab continues from the How-we-work tab; Left/Right/Home/End move between tabs; Enter/Space toggles rows.

## V3: Mobile + verification pass

| Affordance | Change |
|---|---|
| `ServicesTabs.astro` | Responsive: stack title/description below `md`, slim gutter, indicator hidden below `sm`; 🟡 tab buttons ≥44px tall (py-[13px] + 18px label = 44px) |
| Verification | `pnpm lint && pnpm build`; preview at 1440px and 390px; 🟡 width parity home vs `/services`; keyboard pass per V2 demo list; reduced-motion check (cursor block); 🟡 eyeball auto-close content shift at 390px (`details name`) |

**Demo:** 390px viewport reads cleanly; tap targets are full rows; lint+build green.

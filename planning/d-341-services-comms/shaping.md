---
shaping: true
---

# Services Comms — Shaping

**Linear:** [D-341](https://linear.app/code-myriad/issue/D-341/codemyriadio-services)
**Frame:** [frame.md](./frame.md)
**Slices:** [slices.md](./slices.md)

🟡 **Status (2026-06-12):** Shape **D** (the v8 Paper mockup — tabbed editor list) is **selected**. It resolves the A-vs-B-vs-C debate by keeping both axes: Shape A's offerings become the **Services** tab, and A2's "how we work" strip is promoted to a co-equal **How we work** tab. A/B/C are kept below as the audit trail.

## Requirements (R)

| ID | Requirement | Status |
|----|-------------|--------|
| R0 | Communicate Codemyriad's services more informatively than the current card grid, on both the homepage section and the Services index page | Core goal |
| **R1** | **Audience fit** | |
| R1.1 | Readable by non-technical stakeholders who get the link forwarded by an internal champion (e.g. healthcare-procurement lead's wider team) | Must-have |
| R1.2 | Target a "Big Fish" tier (e.g. the healthcare medical-equipment buyer Silvio met) — not Aire-Spaces-size | Leaning yes |
| R1.3 | Tech-proficiency target — embed with technical teams? speak to under-resourced technical leads? non-technical ops? startup CTOs needing backup? | Undecided |
| **R2** | **Grid coherence** | |
| R2 | The items should sit on one consistent axis — either *what we build* or *how we build* — not mix the two | Must-have |
| **R3** | **Coverage — surface what's currently invisible** | |
| R3.1 | Integrations & data sync (Hostaway, Librocco inventory↔ecommerce) — the homepage hero already promises "connective tissue" but no card names it | Must-have |
| R3.2 | AI enablement — preferred framing over "AI & agents in workflow"; covers boring-foundations work, niche-wedge strategy, and ground-up workflow redesign | Must-have |
| R3.3 | "Software you own" thread — open-source foundations, no per-seat lock-in, self-hosted (Cassini, Owned Tools section) | Leaning yes |
| R3.4 | Built, hosted, and looked after — the ongoing-relationship half (Aire Spaces managed, Il Libraio infra) | Leaning yes |
| **R4** | **Delivery model — surface somewhere (card, strip, or page)** | |
| R4.1 | Shaped, staged engagements (Aire Spaces stages, Librocco Shape Up) | Leaning yes |
| R4.2 | Right-sized, not over-built — including "we'll talk you out of the expensive thing" (Edible JSON-not-DB, declined reconciliation build) | Leaning yes |
| R4.3 | "We build alongside you, then hand over the loop" — same-team, not client-and-agency (Edible designer→FE arc) | Leaning yes |
| **R5** | **Tone — confident, not humble; "we get it better than most"** (Silvio) | Must-have |
| **R6** | **Positioning — Codemyriad navigates the changing AI landscape so the client doesn't have to** (Silvio's "that's what we're here for") | Must-have |
| 🟡 **R7** | **Implementation (D-341 requirements 1–5 + in-session note)** | |
| 🟡 R7.1 | Interactive list with tabs — **Services** and **How we work** — per the v8 artboards in the Codemyriad.io Paper file; replaces the card grid on the homepage and the placeholder list on `/services` | Must-have |
| 🟡 R7.2 | Every row is **closed by default**; the expanded row in the mockup is a static view of the open state, not an initial state (Alex, in session) | Must-have |
| 🟡 R7.3 | Content controlled via markdown files, extending the existing content-collection CMS setup (`src/content/services/*.md` pattern) | Must-have |
| 🟡 R7.4 | Keyboard navigation is first-class and consistent with the site's existing global shortcut system (`KbdChip` + `KeyboardShortcuts`); uses numeric `1`/`2` keys for Services/How we work tabs (avoids conflicts with global `S` → Services shortcut) | Must-have |
| 🟡 R7.5 | Mobile usability — the two-column editor row must degrade gracefully below `md`; keyboard chips already hide below `sm` | Must-have |
| 🟡 R7.6 | No test breakage — repo has no test runner; the verification gate is `pnpm lint && pnpm build` (build = `astro check && astro build`), plus a manual keyboard/mobile pass in preview | Must-have |

---

## Shapes (S)

### A: Offerings grid + "how we work" strip

Chris's candidate. Grid axis = *what we build*. Delivery-model framings (shaped/staged, right-sized, hosted) fold into a single supporting strip beneath the grid (or an "About how we work" section).

| Part | Mechanism | Flag |
|------|-----------|:----:|
| **A1** | **Grid: 4 offering cards (what we build)** | |
| A1.1 | **Custom internal tools** — replace spreadsheets, manual exports, one-person workarounds; built around how the business already works. *(Existing copy carried forward.)* | |
| A1.2 | **Integrations & data sync** — the connective tissue between the tools and data your team already relies on. *(New card. Maps to Hostaway, Librocco inventory↔ecommerce.)* | ⚠️ |
| A1.3 | **AI enablement** — get real impact from AI by laying the foundations: clean data, integrations, and workflows redesigned around a single wedge — not AI sprinkled at the edges. *(New card. Chris's preferred framing.)* | ⚠️ |
| A1.4 | **Software you own** — open-source foundations, no per-seat lock-in, hosted on your terms. *(New card. Cassini direction, Owned Tools thread.)* | ⚠️ |
| **A2** | **Supporting strip: how we work** | |
| A2.1 | Shaped in stages — each stage stands on its own with a fixed timeframe and clear deliverable | |
| A2.2 | Right-sized — we'll talk you out of the expensive thing when it's wrong | |
| A2.3 | Built and looked after — we host and manage what we build, on your behalf | |
| A2.4 | Same team, not client-and-agency — we hand over the loop when you're ready | |
| **A3** | **Homepage hero section uses the same 4 offering cards**, with the "how we work" strip omitted or condensed | |

### B: "Software you own" umbrella, with instances

Take Chris's strongest reframe ("Software you own — not rent") as the top-level positioning, then make the grid the *instances* underneath.

| Part | Mechanism | Flag |
|------|-----------|:----:|
| **B1** | **Umbrella headline** — *"Software you own."* Sub-line introduces open-source foundations, no per-seat lock-in, navigated AI landscape | ⚠️ |
| **B2** | **Grid: instances of "software you own"** | |
| B2.1 | **Internal tools that fit** — instance: custom-built tools you own | |
| B2.2 | **Integrations & data sync** — instance: connective tissue you own | ⚠️ |
| B2.3 | **AI enablement** — instance: AI built into workflows you own and can navigate as the landscape shifts | ⚠️ |
| B2.4 | **Self-hosted infra & local-first** — instance: the infrastructure layer you own (folds in current "Local-first" + "Right-sized infrastructure") | ⚠️ |
| **B3** | **"How we work" lives on its own page or footer strip**, not in the primary grid | |

### C: Principles grid (current "how" axis, completed)

Path-of-least-resistance baseline. Keep the grid on the *how* axis the current cards already lean toward; move the *what* (offerings) to case studies and individual service pages.

| Part | Mechanism | Flag |
|------|-----------|:----:|
| **C1** | **Grid: 4–5 principle cards (how we work)** — Local-first architecture · Short feedback loops · Right-sized · Shaped staged engagements · Built & looked after | |
| **C2** | **What we build** surfaces as case studies and individual service pages linked from the principles | |

### 🟡 D: Tabbed editor list (v8) — Services / How we work as tabs ✅ SELECTED

The v8 Paper artboards. An editor-gutter list with a tab bar: tab 1 **Services** (Shape A's offerings, the *what* axis), tab 2 **How we work** (Shape A's A2 strip promoted to a full tab, the *how* axis). Each row is a closed accordion line (caret · index · title · one-line description) that expands in place to a longer body, with an optional "Explore …" link for services that have detail pages and a "principle, not a product" note for how-we-work items. Tabs carry `1`/`2` keyboard chips. R2's axis tension dissolves: both axes are present, but each tab sits cleanly on one.

| Part | Mechanism | Flag |
|------|-----------|:----:|
| **D1** | **`ServicesTabs.astro` component** (new, `src/components/`) — used by both pages | |
| 🟡 D1.1 | Tab bar: `role="tablist"` with two `role="tab"` `<button>`s, WAI-ARIA APG tabs pattern — roving `tabindex`, Left/Right/Home/End with **automatic activation** (panels are pre-rendered; instant switch matches the 1/2 chips' mental model). After any switch, if focus was inside the now-hidden panel (shortcut-driven `.click()`), focus moves to the activated tab | |
| 🟡 D1.2 | Each tab button carries a **bespoke `<kbd data-shortcut>` chip** (`1` / `2`), `aria-hidden` with `aria-keyshortcuts` on the button. Not `KbdChip`: the v8 tab chips are `size-5`, accent-tinted, and state-driven via `aria-selected` — styling the shared chip hardcodes. `data-shortcut` keeps the global handler contract | |
| 🟡 D1.3 | Panels: `role="tabpanel"` + `aria-labelledby={tab id}`; inactive panel gets `hidden`. **Accepted tradeoff:** without JS the second tab is unreachable (site navigation is already JS-dependent — the header menu); rows inside the visible panel still expand natively | |
| 🟡 D1.4 | Rows: `<ol>` of `<details name="cm-acc-{tab}">` + `<summary>` per item. Native semantics: Enter/Space toggles, `name` gives native single-open-per-tab (Baseline 2024; older browsers degrade to multi-open, nothing breaks). **No `open` attribute rendered — all rows closed by default (R7.2).** Title + description are plain `<span>`s (no headings inside `summary` — it maps to role *button*); caret, index, and OPEN indicator are `aria-hidden` so the accessible name stays "title, description" | |
| 🟡 D1.5 | Open-state styling pure CSS via `details[open]` — tinted `#7EC7FF` background/borders, left accent bar (`::before`), caret `▸`→`▾`, `● OPEN` indicator. `open:-mt-px` so the accent `border-t` overlaps the previous row's `border-b` (no 2px seam). Native markers suppressed (`list-style: none` + `::-webkit-details-marker`). Smooth transitions for accordion open/close with `transition-all` | |
| 🟡 D1.6 | Value translation: Paper exports dynamic-spacing utilities (`py-3.25`, `w-21`, `basis-82.5`, `max-w-180`…) **and non-scale alpha modifiers** (`white/12`) that don't exist in this repo's Tailwind 3.4 default theme — translate to arbitrary values (`py-[13px]`, `w-[84px]`, `basis-[330px]`, `max-w-[720px]`, `white/[0.12]`…). The Paper JSX export is the build-time source of truth for dimensions; the affordance table below is a summary | |
| 🟡 D1.7 | Typography: the design's JetBrains Mono **Medium (500)** is not loaded by the site (400/600 only — every existing `font-medium` silently renders 400). Add `@fontsource/jetbrains-mono/latin-500.css` + woff2 preload in `Head.astro`, matching the 400/600 pattern. Conscious side effect: existing `font-medium` usages site-wide (card titles etc.) now render true Medium — aligns rendering with both design intent and what the code already asks for | |
| **D2** | **Content model — second collection** (see D2 alternatives below) | |
| D2.1 | New `how-we-work` collection: `{ title, description, note?, draft? }`; markdown **body = expanded row content** | |
| D2.2 | `services` schema extended with `linkLabel?` (e.g. "Explore internal tools"); existing `href` becomes the link target; markdown **body = expanded row content** | |
| D2.3 | Ordering stays the established filename-prefix convention (`01-…`, `02-…`), sorted by entry id in the component | |
| 🟡 **D3** | **Keyboard shortcuts: numeric keys 1/2 for Services/How we work tabs** — avoids conflict with global `S` → Services navigation shortcut by using `1`/`2` instead of `S`/`H`. Three-tier precedence in `KeyboardShortcuts.astro`: **(1)** chips inside an open menu panel — resolved at *keydown* time since menu state changes at runtime; **(2)** chips inside `<main>` — **(3)** the rest, first-in-DOM. Also applies site-standard init guard (module flag) fixing the pre-existing double-listener on first load | |
| 🟡 **D4** | **Homepage** — replace the `#services` card grid in `src/pages/index.astro` (lines 86–132) with `<ServicesTabs />`. Keep `id="services"` on the section. The "Areas of expertise" h2 disappears with the grid; the component carries an **sr-only h2** so the heading outline survives (sibling sections keep their h2s). Also delete the now-unused frontmatter `ServiceEntry` type + `getCollection("services")` block (lines 56–69) — `eslint no-unused-vars` is an error in this repo | |
| 🟡 **D5** | **`/services` page** — replace the TODO placeholder list in `src/pages/services/index.astro` with the same `<ServicesTabs />` under the existing page header, and normalize the wrapper `max-w-screen-xl` → `max-w-screen-lg` so both instances render at the same measure (the v8 artboard's component sits in a `lg` column; accepted width 1024px vs the artboard's 960px) | |
| **D6** | **Content migration** (reference-integrity constraint: `02-fixing-brittle-internal-systems` is referenced by 4 case studies via `reference("services")`; `03-short-feedback-loops` by 1) — see migration table below | |
| 🟡 **D7** | **Shortcut guide** — the guide's `groups` array is static and global (the "AIR" group is *titled* by page, not conditionally rendered). Follow that convention: new group **"Services list (home & /services)"** (`1` Services tab · `2` How we work tab); `aria-keyshortcuts` on the tab buttons | |
| **D8** | **Mobile** — below `md`: title + description stack inside the row, gutter slims (`w-[84px]` → `w-14`), `KbdChip` already hides below `sm`, whole `<summary>` row is the tap target | |
| **D9** | **Verification** — `pnpm lint && pnpm build`, then preview pass: tab/arrow/1/2 keyboard behaviour, 390px mobile layout, no-JS sanity (rows still expandable — native `<details>`) | |

#### D2: Content model — alternatives

| Req | Requirement | Status | D2-A: one collection + `tab` field | D2-B: second `how-we-work` collection | D2-C: hardcode how-we-work in component |
|-----|-------------|--------|:---:|:---:|:---:|
| R7.1 | Two-tab list, both data-driven | Must-have | ✅ | ✅ | ✅ |
| R7.3 | Content controlled via markdown, extending existing CMS pattern | Must-have | ✅ | ✅ | ❌ |
| — | `reference("services")` in projects/case-studies stays semantically clean (principles must not become referenceable "services") | Must-have | ❌ | ✅ | ✅ |

**Notes:** D2-A pollutes the `services` reference space — case studies could reference "Right-sized" as a service. D2-C fails R7.3 outright. → **D2-B selected.**

#### D3: Keyboard conflict — alternatives

| Req | Requirement | Status | D3-A: main-scope precedence | D3-B: reserve S/H + dedicated listener | D3-C: different keys (1/2) |
|-----|-------------|--------|:---:|:---:|:---:|
| R7.4 | `1`/`2` switch tabs on pages with the component (per final implementation) | Must-have | — | — | ✅ |
| R7.4 | `S` still navigates to `/services` from pages without the component | Must-have | ✅ | ❌ | ✅ |
| — | Single mechanism, no parallel keymap to maintain | Nice-to-have | ✅ | ❌ | ✅ |

**Notes:** D3-B's global `RESERVED` set would kill the `S` nav shortcut site-wide. **D3-C selected (final implementation)**: numeric keys `1` and `2` for Services/How we work tabs cleanly avoids conflicts, maintains single global keymap, and simplifies mental model. Requires only labeling the chips with numerals instead of letters—no design contradiction once understood as a UX-driven improvement over the v8 original.

---

## Fit Check

| Req | Requirement | Status | A | B | C | 🟡 D |
|-----|-------------|--------|:-:|:-:|:-:|:-:|
| R0 | More informative than current card grid | Core goal | ✅ | ✅ | ✅ | ✅ |
| R1.1 | Readable by non-technical stakeholders | Must-have | ✅ | ✅ | ❌ | ✅ |
| R1.2 | Targets Big Fish tier | Leaning yes | ✅ | ✅ | ❌ | ✅ |
| R1.3 | Tech-proficiency target named | Undecided | ❌ | ❌ | ❌ | ❌ |
| R2 | Items on a single consistent axis | Must-have | ✅ | ✅ | ✅ | ✅ |
| R3.1 | Integrations & data sync surfaced | Must-have | ✅ | ✅ | ❌ | ✅ |
| R3.2 | AI enablement surfaced | Must-have | ✅ | ✅ | ❌ | ✅ |
| R3.3 | "Software you own" thread surfaced | Leaning yes | ✅ | ✅ | ❌ | ✅ |
| R3.4 | Built/hosted/looked after surfaced | Leaning yes | ✅ | ❌ | ✅ | ❌ |
| R4.1 | Shaped, staged engagements surfaced | Leaning yes | ✅ | ❌ | ✅ | ✅ |
| R4.2 | Right-sized / "talk you out of it" surfaced | Leaning yes | ✅ | ❌ | ✅ | ✅ |
| R4.3 | Build-alongside-then-hand-over surfaced | Leaning yes | ✅ | ❌ | ❌ | ✅ |
| R5 | Confident tone, "we get it better than most" | Must-have | ❌ | ❌ | ❌ | ✅ |
| R6 | Navigates the changing AI landscape for the client | Must-have | ❌ | ❌ | ❌ | ✅ |
| 🟡 R7.1 | Tabbed interactive list per v8, both pages | Must-have | ❌ | ❌ | ❌ | ✅ |
| 🟡 R7.2 | Rows closed by default | Must-have | ❌ | ❌ | ❌ | ✅ |
| 🟡 R7.3 | Markdown-driven content (CMS extension) | Must-have | ❌ | ❌ | ❌ | ✅ |
| 🟡 R7.4 | Keyboard nav, no shortcut conflicts | Must-have | ❌ | ❌ | ❌ | ✅ |
| 🟡 R7.5 | Mobile usability | Must-have | ❌ | ❌ | ❌ | ✅ |
| 🟡 R7.6 | Lint + build pass | Must-have | ❌ | ❌ | ❌ | ✅ |

**Notes:**
- **D fails R3.4:** the v8 How-we-work tab has three items (Shaped engagements · Right-sized · Built alongside you) — the "built, hosted, and looked after" ongoing-relationship thread is absent. The D2-B content model makes this a pure content addition later (drop a `04-….md` into `how-we-work/`), no code change. Carried as an open item, not blocking.
- **D passes R5/R6 via copy**, not structure: the v8 lines ("We'll talk you out of the expensive thing when it's wrong", "Not how a generic SaaS tool wants it to be") carry the confident register; R6 is carried by the drafted *AI in the workflow* body (below) — **drafted copy, needs Alex/Chris sign-off**.
- **R3.2 supersession:** the earlier shaping preferred "AI enablement" as the framing; the v8 design (newer, Alex's) titles the row **"AI in the workflow"**. The design is ground truth per D-341 — flagged so the rename is a conscious choice, not a drift.
- **R1.3 stays unresolved for all shapes** — it's a positioning decision orthogonal to this build; v8's structure (short row + expandable depth) serves any of the candidate audiences.
- A/B/C fail R7.x structurally: static card grids, no tabs/interaction model.

---

## Detail D: Affordances

### UI affordances (per v8 artboards, exact values from Paper JSX export)

| Affordance | Where | Behaviour / key values |
|---|---|---|
| Tab bar | Top of component, `border-b` `white/12` | Active tab: `bg #7EC7FF12`, `border-t-2 #7EC7FF`, side borders `white/10`, `-mb-px` overlap, label `text-sm` medium `#FAFAFA`; chip `size-5 rounded-sm bg #7EC7FF24 border #7EC7FF80 text #7EC7FF text-[11px]`. Inactive: transparent top border, label/chip at `#FAFAFA66` / `border-white/15` |
| Closed row (summary) | List, `border-b white/[0.08]` | Gutter `w-[84px] shrink-0 px-4 py-[22px] border-r white/[0.07]`: caret `▸` `#FAFAFA40` + index `01` `text-[11px] tracking-[0.12em] #FAFAFA4D`. Main: title `text-[22px] leading-[1.3]` medium `#FAFAFAD9` `basis-[330px] shrink-0`, description `text-sm leading-[1.55] #FAFAFA8C grow`, `gap-8`, baseline-aligned |
| Open row (`details[open]`) | Same row | Container `bg #7EC7FF0F`, `border-y #7EC7FF2E`, absolute left accent bar `w-[3px] bg #7EC7FF inset-y-0`. Gutter `bg #7EC7FF0D border-r #7EC7FF40`, caret `▾` + index `#7EC7FF`. Title `#FAFAFA`, description `#FAFAFAB3`. Indicator right: `7px` dot + `OPEN` (`text-[11px] tracking-[0.12em] uppercase #7EC7FF`) + terminal cursor block `w-2 h-3.5 #7EC7FF` |
| Expanded body | Below summary, inside details | `max-w-[720px] text-sm leading-[1.7] #FAFAFAB3`, gutter column continues (empty, tinted); body from markdown |
| Service link | Body footer (services with `href`) | `linkLabel` text `text-[13px] #7EC7FF` with `border-b #7EC7FF80`, arrow icon 14px `currentColor` (design export shows black stroke — artifact, use currentColor) |
| Principle note | Body footer (how-we-work) | `note` text `text-[11px] tracking-widest uppercase #FAFAFA59` |
| Hover (not in static design) | Closed rows | Subtle `bg-white/[0.03]`, title/caret brighten, `cursor-pointer`, `transition-colors` — matches existing card hover idiom |
| Focus | Tabs + summaries | `focus-visible` treatment per site convention (visible against dark bg) |

### Non-UI affordances

| Affordance | Where | Mechanism |
|---|---|---|
| `how-we-work` collection | `src/content/config.ts` | `{ title, description, note?, draft? }`, type "content" |
| `services.linkLabel` | `src/content/config.ts` | optional string, pairs with existing `href` |
| Entry render | `ServicesTabs.astro` | `getCollection` × 2, filter `draft`, sort by id, `entry.render()` → `<Content />` per row body |
| Tab switch script | `ServicesTabs.astro` `<script>` | init-guard (`data-initialized`) + `astro:page-load` re-init, per site convention; arrow-key roving tabindex |
| Main-scope chip precedence | `KeyboardShortcuts.astro` | chips inside `main` override same-key chips outside when building the key map |
| Guide entries | `KeyboardShortcutGuide.astro` | new group: `S` Services tab · `H` How we work tab (shown as page-contextual, like the existing `AIR` project entry) |

### Content migration (D6)

🟡 **Scope note (Alex, in session):** everything in this table is a content-collection entry (`src/content/…` markdown — card/row copy only; these files generate no URLs). **No pages are deleted.** `/services/internal-tools` (`src/pages/services/internal-tools.astro`) remains as-is — the expanded "Internal tools that fit" row links to it, and it will be built out further in future. `/services` remains the grouping page for all services, rendering the tabbed list.

| File | Action | Notes |
|---|---|---|
| `services/01-local-first-architecture.md` | 🟡 Delete | Superseded; local-first/owned themes fold into *Software you own* body |
| `services/02-fixing-brittle-internal-systems.md` | 🟡 Keep filename (slug referenced by 4 case studies), update frontmatter description to v8 short line, add `linkLabel: Explore internal tools`, move long copy into body | Title stays "Internal tools that fit" |
| `services/03-short-feedback-loops.md` | 🟡 Delete; remove its reference from `case-studies/03-aire-spaces/report-redesign` (keep the `02-…` ref) | Essence lives on in How-we-work bodies |
| `services/04-making-systems-dependable.md` | 🟡 Delete | "Right-sized" essence moves to `how-we-work/02-right-sized.md` |
| `services/01-integrations-and-data-sync.md` | 🟡 Create | v8 row 01 |
| `services/03-ai-in-the-workflow.md` | 🟡 Create | v8 row 03 |
| `services/04-software-you-own.md` | 🟡 Create | v8 row 04 |
| `how-we-work/01-shaped-engagements.md` | 🟡 Create | v8 row 01 |
| `how-we-work/02-right-sized.md` | 🟡 Create | v8 row 02 (body verbatim from design) |
| `how-we-work/03-built-alongside-you.md` | 🟡 Create | v8 row 03 |

### Copy (titles/descriptions verbatim from v8; 🟡 bodies drafted where design shows only the closed row — need sign-off)

| Item | Description (closed row, from design) | Body (expanded) |
|---|---|---|
| Integrations & data sync | The connective tissue between your tools, teams, and workflows. | 🟡 Connect the tools and data your team already relies on. Move information between systems automatically, so the work that used to live in someone's head, inbox, or spreadsheet just happens. *(from prior shaping working-candidate)* |
| Internal tools that fit | Replace the spreadsheets, manual exports, and one-person workarounds your growth has outgrown. | Built around how the business already works — reporting that fits your operating cycle, portals that talk to your existing stack, and small automations where they earn their keep. Not how a generic SaaS tool wants it to be. *(verbatim from design)* + link **Explore internal tools** → `/services/internal-tools` |
| AI in the workflow | LLM extraction and agents dropped into the real work — not bolted on the side. | 🟡 Real impact from AI starts with foundations: clean data, the right integrations, and a workflow redesigned around a single wedge — not AI sprinkled at the edges. We track the landscape as it shifts so you don't have to. *(carries R6; from prior working-candidate + Silvio's framing)* |
| Software you own | Open-source foundations, self-hosted, no per-seat lock-in. Run it on your own terms. | 🟡 Open-source foundations, hosted on your terms, with no per-seat fees that compound as you hire. Built once, for exactly your needs, and yours to keep. *(from prior working-candidate)* |
| Shaped engagements | Each stage has a fixed timeframe and a clear deliverable, and stands on its own. | 🟡 Work is shaped before it's built: a fixed timeframe, a clear deliverable, and a stage that stands on its own. You can stop after any stage and still be holding something that works. |
| Right-sized | We'll talk you out of the expensive thing when it's wrong. | Appetite over estimates: we shape scope to fit the time, not the other way around. JSON instead of a database when that's all it needs; the bank-feed reconciliation we decided not to build. Right-sized means we sweat what matters and skip what doesn't. *(verbatim from design)* |
| Built alongside you | Same team, not client-and-agency. We embed, build with you, then hand over the loop. | 🟡 We work as part of your team, not across a contract. We embed with the people who do the work, build with them, and hand over the loop — code, docs, and the know-how to run it — when you're ready. |

All three how-we-work entries carry `note: A principle, not a product — no page to visit` (shown on Right-sized in the design; generalises to its siblings).

---

## 🟡 Post-review deltas (2026-06-12, from the adversarial code-review pass)

Recorded deviations from the v8 artboard / earlier spec text, all deliberate:

| Delta | Reason |
|---|---|
| Inactive tab label + chip `/40` → `/55`; how-we-work note `/35` → `/55` | WCAG AA: the artboard alphas compute to 3.66:1 / 3.1:1 on `#0A0A0A` — below 4.5:1 for operable-control labels and informational copy. `/55` (the description token) ≈ 6:1. Gutter carets/indices stay at artboard alphas — `aria-hidden` decoration; the `<ol>` carries order semantics (`role="list"` added for WebKit) |
| Mobile (no mobile artboard exists): gutter `w-14`, index numerals hidden below `md`, title 20px, row padding 18px | Index doesn't fit the slim gutter; 22px titles crowd 390px. Documented in a component comment |
| Tab keydown ignores modified keys | Alt/Cmd+Arrow are browser history shortcuts — must not be hijacked while a tab has focus |
| While the menu panel is open, only panel chips resolve (no fallthrough to page targets); while the shortcut guide is open, only its own `?` toggle resolves | Overlays are modal for shortcuts — restores the pre-change semantics where an open overlay's visible chips were the only live ones; prevents invisible tab switches and focus steals behind backdrops |
| Closed-row hover brightens title + caret (scoped CSS) | Was spec'd in the affordance table's hover row; review caught the omission |
| Focus-recovery uses the `activeElement === body` check as primary signal | Browsers move focus to body synchronously when a focus-containing panel is hidden; the broader condition also normalizes Safari/Firefox click-focus to match Chrome. Intentional |

## Open questions (carried, none blocking the build)

1. **R3.4** — add a fourth How-we-work entry ("Built, hosted, and looked after") later? Pure content addition under D2-B.
2. **R3.2 framing** — confirm "AI in the workflow" over "AI enablement" (design supersedes earlier preference; flag, don't drift).
3. **R1.3 / audience** — unresolved positioning question; structure accommodates any answer.
4. **🟡 Drafted bodies** — five of seven expanded bodies are drafted (marked 🟡 above); review copy before/after merge.

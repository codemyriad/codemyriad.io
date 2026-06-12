---
shaping: true
---

# Services Comms — Frame

**Linear:** [D-341](https://linear.app/code-myriad/issue/D-341/services-comms-codemyriadio)

## Source

> Codemyraid has a lead in the healthcare medical device procurement industry. The lead was sourced at the Accelerate Tomorrow Ai Summit 2026 in Berlin. Expecting that the lead will share codemyraid website around stakeholders at the organisation, it is a good time to take a look at some key areas that still need work.
>
> 1. Services page, and section on home hero. Right now these are cards, but I think this would do better as an informative interactive list. Mockup TBD.

🟡 **D-341 updated (2026-06-12) — mockup no longer TBD, requirements expanded:**

> 1. Services page and section on homehero. Right now these are cards, but I think this would do better as an informative interactive list with tabs for Services and How We Work. Ref: V8 on the Codemyraid.io Paper file.
> 2. Important to investigate current state, and extend the sites CMS setup using markdown files (i.e how is service cards content controlled)
> 3. It is important to consider keyboard navigation, which is a founding design principal of codemyriad.io site.
> 4. Ensure mobile usability
> 5. Check for any test breakage once the work package is complete.

🟡 **Alex, in session (2026-06-12), on the v8 mockup's expanded row:**

> just a note that the open state is shown in the design, this is a static view of an interactive component. It should not be open by default, each row should be closed by default interactive.

---

## Problem

The Services section on the homepage and the Services index page currently use a card grid that communicates titles + one-line descriptions only. With a high-stakes lead (healthcare medical device procurement) likely to share the site with internal stakeholders, the current cards under-sell the depth and applicability of what Codemyriad does — they read as labels, not as a guided way to understand the offering.

## Outcome

A first-time visitor — particularly a non-technical stakeholder being passed the link by a champion inside the org — can scan the services, drill into the ones relevant to them, and leave with a clearer sense of *what Codemyriad does* and *whether it fits their situation* than the current card grid affords.

---

## Where this lives in the site

- **Homepage** — `src/pages/index.astro`, the `#services` section (card grid driven by `services` content collection).
- **Services index** — `src/pages/services/index.astro` (currently a placeholder list with a TODO for full design pass).
- **Services detail (one exists)** — `src/pages/services/internal-tools.astro`.
- **Content collection** — `src/content/services/*.md` (4 entries: local-first architecture, internal tools that fit, short feedback loops, right-sized infrastructure).

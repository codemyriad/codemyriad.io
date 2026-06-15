import { defineCollection, reference, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    draft: z.boolean().optional(),
    relatedPosts: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    // Core (existing)
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),

    // New: client identity & framing
    client: z.string().optional(), // defaults to title if omitted
    tagline: z.string().optional(), // short subheading under project name
    website: z.string().url().optional(),

    // New: engagement metadata
    industry: z.string().optional(),
    location: z.string().optional(),
    status: z.enum(["active", "past"]).default("active"),
    engagementType: z.enum(["ongoing", "one-off"]).optional(),
    firstEngagement: z.number().int().optional(), // year, e.g. 2024

    // New: cross-links & surfacing
    services: z.array(reference("services")).optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().optional(),
    caseStudyOrder: z.array(z.string()).optional(), // manual order of case-study slugs
  }),
});

const caseStudies = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(), // shown as the card description on the project page
    type: z.enum(["shipped", "experiment"]).default("shipped"),
    stage: z.string().optional(), // free text: "Stage 1", "Stage 2", "Experiment"
    status: z.string().optional(), // displayed badge: "Shipped", "In progress", etc. Defaults to type.
    ctaLabel: z.string().optional(), // overrides default link copy on the card
    /** When false, the entry shows in the timeline but is not clickable — no canonical page, no window. */
    writeUp: z.boolean().default(true),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),

    // Cross-links
    services: z.array(reference("services")).optional(),
    related: z.array(reference("blog")).optional(),

    // Structured blocks rendered automatically
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        })
      )
      .optional(),
    outcomes: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      )
      .optional(),

    // Optional preview media (header of window / canonical page)
    media: z
      .object({
        type: z.enum(["image", "video"]),
        src: z.string(),
        alt: z.string().optional(),
        poster: z.string().optional(), // for video
      })
      .optional(),

    // Window sizing hint (no effect on canonical page)
    window: z
      .object({
        width: z.number().optional(),
        height: z.number().optional(),
      })
      .optional(),

    draft: z.boolean().optional(),
  }),
});

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
    href: z.string().optional(),
    linkLabel: z.string().optional(), // copy for the expanded-row link to `href`
  }),
});

// Delivery principles shown on the "How we work" tab alongside services.
// Kept separate from `services` so reference("services") stays semantically
// clean (a principle is not a referenceable service offering).
const howWeWork = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
    note: z.string().optional(), // small-caps footer line in the expanded row
  }),
});

export const collections = {
  blog,
  projects,
  "case-studies": caseStudies,
  services,
  "how-we-work": howWeWork,
};

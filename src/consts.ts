import type { Site, Metadata, Links } from "@types";

export const SITE: Site = {
  NAME: "Code Myriad",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Operational systems for growing companies",
  DESCRIPTION: "Operational systems and internal tools for growing companies — the connective tissue between tools, teams, and workflows.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics we are passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of things we have worked on recently, with links to repositories and demos.",
};

export const SERVICES: Metadata = {
  TITLE: "Services",
  DESCRIPTION:
    "What we do — internal tools, reporting, automation, client portals.",
};

export const LINKS: Links = [
  {
    NAME: "discourse",
    HREF: "https://forum.codemyriad.io",
  },
  {
    NAME: "github",
    HREF: "https://github.com/codemyriad",
  },
];

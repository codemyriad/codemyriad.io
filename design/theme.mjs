import defaultTheme from "tailwindcss/defaultTheme";

/**
 * Code Myriad — shared brand design layer (single source of truth).
 *
 * Vendored into BOTH repos: codemyriad.io (marketing site) and proposals
 * (client decks). Keep the two copies byte-identical — `make design-sync`
 * (and the design-sync CI job) flags drift. See DESIGN.md.
 *
 * Consumed by each repo's tailwind.config.mjs:
 *   import { codemyriad, fontFamily } from "./design/theme.mjs";
 *   theme:   { extend: { fontFamily } }
 *   daisyui: { themes: [{ codemyriad }] }
 */

// Typeface — JetBrains Mono, falling back to the platform monospace stack.
export const fontFamily = {
  sans: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
};

// DaisyUI theme — brand palette + control-shape tokens.
export const codemyriad = {
  "primary": "#38BDF8",
  "primary-content": "#0A0A0A",
  "secondary": "#C792EA",
  "secondary-content": "#0A0A0A",
  "accent": "#F4C45C",
  "accent-content": "#0A0A0A",
  "neutral": "#2A2A2A",
  "neutral-content": "#FAFAFA",
  "base-100": "#0A0A0A",
  "base-200": "#1E1E1E",
  "base-300": "#333333",
  "base-content": "#FAFAFA",
  "info": "#818CF8",
  "info-content": "#0A0A0A",
  "success": "#34D399",
  "success-content": "#0A0A0A",
  "warning": "#F4915C",
  "warning-content": "#0A0A0A",
  "error": "#F87171",
  "error-content": "#0A0A0A",
  "--rounded-btn": "0",
  "--rounded-badge": "0",
  "--border-btn": "1px",
  "--animation-btn": "0.1s",
  "--btn-focus-scale": "0.97",
};

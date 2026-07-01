Astro Nano is a static, minimalist, lightweight, lightning fast portfolio and blog theme.

Built with Astro, Tailwind and Typescript, an no frameworks.

## 🎨 Design system

The brand is one shared file — `design/theme.mjs` (the DaisyUI `codemyriad` theme
+ JetBrains Mono) — imported by `tailwind.config.mjs`. This repo is the source of
truth; the private [proposals](https://github.com/codemyriad/proposals) repo
vendors a byte-identical copy. See **[DESIGN.md](./DESIGN.md)**. Agent notes:
[CLAUDE.md](./CLAUDE.md).

## 📄 Configuration

The blog posts on the demo serve as the documentation and configuration.

## 💻 Commands

All commands are run from the root of the project, from a terminal:

Replace npm with your package manager of choice. `npm`, `pnpm`, `yarn`, `bun`, etc

| Command                   | Action                                            |
| :------------------------ | :------------------------------------------------ |
| `npm install`             | Installs dependencies                             |
| `npm run dev`             | Starts local dev server at `localhost:4321`       |
| `npm run dev:network`     | Starts local dev server on local network          |
| `npm run sync`            | Generates TypeScript types for all Astro modules. |
| `npm run build`           | Build your production site to `./dist/`           |
| `npm run preview`         | Preview your build locally, before deploying      |
| `npm run preview:network` | Preview build on local network                    |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`  |
| `npm run astro -- --help` | Get help using the Astro CLI                      |
| `npm run lint`            | Run ESLint                                        |
| `npm run lint:fix`        | Auto-fix ESLint issues                            |

## 🧩 Case study components

Reusable building blocks for case-study write-ups live in
`src/components/case-study/` — `Stage`, `Callout`, `Quote`, `InlineNote`,
`MetricsBar`, `OutcomeGrid`, `StateList`. Each is documented with
placeholder data in the internal reference:

- **Page**: [`/lab/case-study-components`](/lab/case-study-components) — full-page view, easiest for visual refinement.
- **In-context**: from any project page (e.g. `/projects/03-aire-spaces`), press <kbd>⌘ Shift K</kbd> (or <kbd>Ctrl Shift K</kbd>) to open the same reference as a draggable terminal window — handy while authoring a new case study.

The terminal-window chrome itself is `TerminalWindow.astro`; `CaseStudyWindow`
is a thin wrapper around it that supplies case-study-specific content.

`/lab/` is `noindex`'d and disallowed in `robots.txt`.

## 🏛️ License

MIT

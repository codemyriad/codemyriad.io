---
title: "A Workflow for Developing Against Third-Party Dependencies"
description: "How we set up a flexible build environment to iterate on wa-sqlite within our monorepo - using git submodules for fast development and tarballs for CI, with a simple flag to switch between modes."
date: "Oct 10 2025"
author: "Ivan Kušt"
---

Working on [vlcn-io/wa-sqlite](https://github.com/vlcn-io/wa-sqlite) inside our ([librocco](https://github.com/librocco/librocco)) monorepo turned out to be a little adventure in dependency management. Our goal was simple: make it possible to build, load, and test the **entire toolchain** with minimal changes to our main app, while keeping the development cycle fast.

---

## Why Submodules?

To keep iteration tight, we decided to pull `vlcn-io/wa-sqlite` into `librocco` as a submodule. That way, any changes could immediately be tested in our app without publishing intermediate builds.

The toolchain we needed looked like this:

- [vlcn-io/crsqlite-wasm](https://github.com/vlcn-io/js/tree/main/packages/crsqlite-wasm) — part of the [vlcn-io/js](https://github.com/vlcn-io/js) monorepo. It exposes the [wa-sqlite](https://github.com/librocco/librocco) binary and provides a wrapped JS API.
- [vlcn-io/wa-sqlite](https://github.com/vlcn-io/wa-sqlite) — the actual `wa-sqlite` package.
- Since `crsqlite-wasm` depends on `wa-sqlite`, we didn’t need to explicitly add `wa-sqlite` to our monorepo — it comes along for free.

---

## Pulling in `vlcn-io/js`

Here’s where things got tricky:

- `vlcn-io/crsqlite-wasm` isn’t available as a standalone package. Instead, it lives inside the [vlcn-io/js] monorepo.
- Our monorepo ([librocco](https://github.com/librocco/librocco)) uses [Rush](https://rushjs.io/), while `vlcn-io/js` uses **pnpm workspaces**. Similar, but not the same.
- `vlcn-io/js` also references other packages (sometimes via relative paths outside the repo root). These dependencies, luckily, are maintained in other `vlcn-io`/\* repos.

In the end, our relevant tree looked like this:

```
librocco/
├── 3rd-party/
│   └── js/ (submodule: vlcn-io/js)
│       └── deps/
│           └── wa-sqlite/ (submodule: vlcn-io/wa-sqlite)
│           └── ... (other deps: emsdk, crsql rust code)
```

That meant juggling **three git layers**:

1. `codemyriad/wa-sqlite` (our fork) — where active dev happens
2. `codemyriad/vlcn-js` (our fork) — tracks submodule hash updates
3. `librocco` — tracks the `codemyriad/vlcn-js` submodule

Aside from a few minor tweaks in `vlcn-io/js`, the integration was minimal.

## Making It Work in Development

Since we didn’t want to fully integrate `vlcn-io/js` packages into our Rush setup, we relied on **import aliasing**:

- In **dev**, we aliased `@vlcn.io/*` imports in **Vite + TypeScript** to their submodule sources.
- This worked well locally, but failed in CI for reasong I can't remember anymore (anyway, this was fixed afterwards), but we needed a quick solution for the time being, so instead, we built a different workflow for CI and non-submodule dev.

## Building Tarballs for CI

To avoid forcing every dev (or CI job) to rebuild from scratch, we opted for **building tarballs** of the relevant packages (and committing to `git lfs`):

1. Run `pnpm pack` inside the relevant `vlcn-io/js` packages to produce `.tgz` files.
2. Collect those into `3rd-party/artefacts`.
3. Use **Rush’s `pnpm-config.json` global overrides** to force installs to come from our local tarballs:

   ```json
   "globalOverrides": {
     "@vlcn.io/crsqlite-wasm": "file:../../3rd-party/artefacts/vlcn.io-crsqlite-wasm-0.16.0.tgz"
   }
   ```

This solved a subtle problem with **workspace → registry fallbacks**.

For example, if `@vlcn.io/ws-client` depends on `@vlcn.io/crsqlite-wasm` via `workspace:*`, `pnpm pack` rewrites that dependency to a fixed version (e.g., `"0.16.0"`). Without overrides, installs would happily fetch that version from the public registry — not our local build. The override ensures every resolution points to our `.tgz` tarball.

## Two Modes: Submodules vs. Tarballs

We introduced an environment variable to make switching easy:

- **`USE_SUBMODULES=true`** → use Vite aliases to load directly from submodules (fast iteration).
- **`USE_SUBMODULES=false`** → use `node_modules` with tarballs (slower, but simpler for people not working on `wa-sqlite`).

This way, core devs can iterate quickly, while everyone else gets a stable experience without rebuilding from scratch.

## CI Flow

Finally, we got CI working fully with submodules:

1. Checkout repo with submodules.
2. Build from source (`make` where needed + `pnpm pack`).
3. Upload built tarballs as artifacts for downstream jobs.

This ensures **consistency across environments** while keeping while keeping **dev fast and CI reproducible**.

---
title: "Librocco"
description: "An open-source, local-first inventory system for managing books. Built with cr-sqlite, it enables accurate stock tracking across multiple terminals - even when one drops offline."
date: "Oct 09 2025"
demoURL: "https://librocco.codemyriad.io/demo"
repoURL: "https://github.com/librocco/librocco"
author: "Chris De Sousa"
---

Librocco is an open-source inventory management system for bookshops. It is designed to be _local-first_: resilient under poor network conditions or power outages, to ensure that stock remains accurate across multiple terminals. This resilience allows day-to-day sales and inventory tasks to continue uninterrupted, even when a terminal drops offline or the internet doesn't cooperate. It is currently used daily in an independent bookstore to manage 100k+ stock and transaction records. You can try it out with full production data at [libroc.co/demo](https://libroc.co/demo/#)

Librocco is built on [CR-SQLite](https://github.com/vlcn-io/cr-sqlite), a CRDT extension to SQLite compiled to WebAssembly. This enables it to run directly in the browser, store data locally, and resolve conflicts across nodes automatically - without requiring user intervention.

## Why have we been building it?

The project has its roots in a system first written over 15 years ago, while Silvio was working in one of the bookshops still using Librocco today. That early version was built with [ext-gwt](https://www.sencha.com/products/gxt/) (JavaScript generated from Java). Codemyriad took on the re-build with the following goals:

1. Modernise the existing system while preserving the lessons from its long use in real shops;
2. Explore offline-first patterns and put CRDTs to the test in a practical domain

The work is supported by independent bookshops who care less about monetising the software itself than about _using_ it to keep their businesses running smoothly. Our own motivation is similar: we want to see Librocco in use, proving that resilient, open-source tools can serve real communities.

Librocco is released under the [GNU Affero licence](https://github.com/librocco/librocco/blob/main/LICENSE).

## What has it taught us?

### 1. Exploring options for local storage & sync

We started by building Librocco around CouchDB & PouchDB, but eventually decided this wasn't a viable path forward. There were several reasons for this: [CouchDB's shortcomings](https://news.ycombinator.com/item?id=17114810#17116306); PouchDB's outdated docs - but ultimately the deciding factor was _sync performance_. With full production data, two syncing nodes could take more than 30 minutes to communicate changes. This created challenges: how would we keep the UI responsive while this is ongoing, and how would we present conflict resolution in a way that doesn't overwhelm after all of this time?

We researched alternatives and landed on CR-SQLite because:

1. SQL felt familiar
2. CRDT-based sync resolved conflicts without complex user-facing logic
3. It can be used with _or without_ a central coordinating server, making it a true peer-to-peer option.

We recently [contributed to CR-SQLite](/blog/01-contributing-opfs-cr-sqlite), updating it to the latest WA-SQLite in order to enable [OPFS](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system) as a storage layer. Since SQLite stores everything in a single file, this makes importing and exporting data from local storage far easier, and also improves our initial sync times significantly (more on this here).

### 2. Adopting Shape Up for project management

Basecamp’s [Shape Up](https://basecamp.com/shapeup) methodology resonated with us, especially the focus on “appetite” rather than estimates, and the idea that [scope should be hammered to fit that appetite](https://basecamp.com/shapeup/1.2-chapter-03#fixed-time-variable-scope). For a small team with limited manpower, scope hammering is an essential discipline. It forces us to make hard calls to trim back our ambition and helps set boundaries to avoid getting lost in the weeds.

### 3. Choosing Svelte over React

Before Librocco, our team had worked solely with React. Rich Harris’s presentation on [rethinking reactivity](https://www.youtube.com/watch?v=mIXyd46OWOI) convinced us to make the switch to Svelte early on. The ecosystem was still young at the time, and we felt some of those growing pains, but over time libraries like [Superforms](https://superforms.rocks/) and [Melt UI](https://www.melt-ui.com/), together with [Daisy UI](https://daisyui.com)'s design system, have helped us build momentum - and build better, more accessible UIs.

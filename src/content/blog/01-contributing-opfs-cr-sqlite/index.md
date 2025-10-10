---
title: "Contributing OPFS Support to CR-SQLite"
description: "We updated CR-SQLite to support OPFS (Origin Private File System), in order to replace IndexedDB as the default storage backend. This effectively gives CR-SQLite a file-based persistence layer in the browser, making it easier to import-export SQLite databases to-from local storage and significantly improving initial sync performance with production data."
date: "Oct 09 2025"
author: "Chris De Sousa"
---

We've spent the last year working with [CR-SQLite](https://github.com/vlcn-io/cr-sqlite) in [Librocco](https://github.com/librocco/librocco) - our open-source, local-first inventory system for managing books. After [running into frustration with CouchDB and PouchDB](/projects/01-librocco#1-exploring-options-for-local-storage-sync) we turned to CR-SQLite and haven’t regretted it. It’s a fantastically well-built project that runs directly in the browser, stores data locally, and syncs across nodes automatically without user intervention.

Everything worked well in development, but working with real produciton data surfaced new challenges. Initial syncs were slow, and importing/exporting the database wasn’t straightforward. SQLite is fundamentally a single-file database, but in the browser the latest version of CR-SQLite was bound to IndexedDB, which requires slicing that file into key–value chunks for persistence. It works, but IndexedDB's overhead makes it harder to ingest large datasets quickly or to export the database as a whole.

To overcome these challenges, we looked to the [Origin Private File System (OPFS)](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system) as a possible solution. OPFS is a newer browser API that provides file-based storage in the browser. With OPFS, import/export should become trivial, as we can work directly with the SQLite file as if it were on a local machine.

### CR-SQLite / WA-SQLite in brief

CR-SQLite is part of a broader ecosystem of tools maintained under [vlcn-io](https://github.com/vlcn-io/js). This ecosystem maintains a fork of WA-SQLite that integrates the CR-SQLite extension, and adds the layers needed for real applications - a JavaScript API for working with the compiled WASM module, reactive bindings, and a sync server for coordinating changes when a central node is required.

[WA-SQLite](https://github.com/rhashimoto/wa-sqlite) itself predates the official SQLite WASM build and was designed with extensibility in mind. It provides the hooks and [VFS layer](https://github.com/rhashimoto/wa-sqlite/tree/master/src/examples) that make SQLite usable in the browser with different storage backends. CR-SQLite relies on this foundation, but its fork had fallen behind upstream: while WA-SQLite continued to evolve to add support for new VFS backends like OPFS, CR-SQLite remained tied to IndexedDB.

### What we’ve done

We’ve updated CR-SQLite’s WA-SQLite fork so that recent upstream improvements are usable, and extended its JavaScript bindings to support OPFS. This effectively gives CR-SQLite a file-based persistence layer in the browser.

We’re already working with this in Librocco to speed up initial syncs and smooth out the rough edges we hit when scaling to real production use.

### Looking ahead

While the local-first ecosystem continues to evolve with new tools like [Zero](https://zerosync.dev/), we believe CR-SQLite stil has an important role to play. Here's why:

- It’s open source, with a permissive licence
- SQLite is familiar and powerful
- CRDT-based sync resolved conflicts without complex user-facing logic
- It can be used with _or without_ a central coordinating server, making it a true peer-to-peer option
- It’s already working in production apps, like [ours](https://libroc.co/demo/#), which we intend to continue using & improving in the coming years.

Our intent is to continue putting effort into CR-SQLite - starting with documentation. We’ve learned a lot in the process of updating it and using it in app: how WA-SQLite and CR-SQLite fit together, how VFS backends work, and where the rough edges are. We figure that contributing this knowledge back to the project is the best way to make it easier for others to adopt and build cool things with it!

### Related posts

- [Librocco: an open-source, local-first inventory system for managing books](/projects/01-librocco)
<!--
We've learned a few things in the process: [Other Blog Post Title](/blog/slug-of-the-post)
-->

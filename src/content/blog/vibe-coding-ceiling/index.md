---
title: "The vibe coding ceiling: what to do when you've built 80% of something and can't finish it"
description: "AI coding tools let non-technical founders get surprisingly far. Here's what's in that last 20% that stops a prototype becoming a production tool — and what your options are for getting past it."
date: "Mar 09 2026"
author: "Chris De Sousa"
relatedPosts:
  - build-vs-buy-software
  - what-can-be-automated-small-business
  - manual-process-cost
---

Something interesting has happened in the last couple of years. A growing number of non-technical founders and directors have started building things — real, functional tools — using AI coding assistants. They get further than they expected. The prototype actually works. The demo is convincing. And then, somewhere around the 80% mark, it stops moving forward.

This article is about that ceiling: what causes it, why it's not a personal failure, and what the options are for getting past it.

---

## Why the first 80% feels deceptively achievable

AI coding tools are genuinely good at the part of software development that most people imagine is the hard part: turning a clear description of what you want into working code. Describe a form, get a form. Describe a data transformation, get a script that does it. The gap between an idea and something that visibly works has collapsed.

This creates a reasonable impression that building software is now within reach for anyone with enough patience and a clear enough idea of what they want. And for a prototype, a proof of concept, or a demo — that impression is largely correct.

The problem is that what makes a prototype work and what makes a production tool work are different things. And the gap between them — the last 20% — is where most of the genuinely difficult engineering lives.

---

## What's actually in that last 20%

The features that make a tool useful in a demo are not the same as the features that make a tool reliable in daily use. Here's what tends to be missing:

**Error handling.** A prototype works when the input is clean and expected. Real use involves messy data, unexpected file formats, users doing things the tool wasn't designed for, and network requests that fail. A tool that hasn't been built to handle these gracefully breaks — sometimes visibly, sometimes silently, which is worse.

**Edge cases.** Every process has exceptions. The client whose data is structured differently. The month where the numbers come in late. The file that's slightly wrong. A prototype built around the typical case stops working the moment the atypical case shows up.

**Data integrity.** When a tool is doing something consequential — producing client reports, processing financial data, updating records — it needs to be correct every time, not most of the time. Building the checks and safeguards that guarantee this is unglamorous, important work that AI tools don't naturally prioritise.

**Deployment and hosting.** A script that runs on a laptop is not the same as an application that runs reliably for a whole team, from any machine, without someone having to set it up manually. Getting from one to the other involves infrastructure decisions that are invisible in the prototype stage.

**Maintenance.** The underlying APIs and services a tool depends on change. The data structure it processes evolves. The business's needs shift. A tool that can't be updated without breaking is a tool on borrowed time.

None of this is exotic. It's just the part of software development that requires experience and engineering judgement rather than the ability to describe what you want clearly.

---

## Why it's not a failure

It's worth saying this directly: getting 80% of the way with an AI coding tool is not a failure. It's a genuinely impressive outcome, and it means you've done something useful — you've validated that the tool you want is buildable, you've defined the requirements clearly enough to get a working prototype, and you've identified a real problem worth solving.

The ceiling isn't a sign that you've done something wrong. It's a sign that you've hit the natural boundary of what the tools are designed to do well.

AI coding assistants are optimised for generating code quickly from clear descriptions. They're not optimised for the iterative, judgement-heavy work of making that code robust, handling failure gracefully, and building something that will keep working six months from now without someone maintaining it carefully.

That's not a criticism of the tools — it's just an honest description of what they're for.

---

## What the options look like from here

When you've hit this ceiling, there are broadly three ways forward.

**Keep pushing with AI tools.** Sometimes the remaining problems are small enough that persistent prompting gets there. If the main issue is a specific bug or a single missing feature, this may be the right call. The risk is spending another week on something that would take an experienced developer an afternoon — or making the codebase more complicated in ways that make the real fix harder later.

**Hand it off to a developer with context.** The prototype you've built isn't wasted. It's a detailed specification of what you want, expressed in working code. A developer who can read it and understand the intent can often finish the job faster than building from scratch — because the hard thinking about what the tool should do has already been done. The goal is finishing and hardening something that's already 80% there, not starting over. It's worth thinking through the [build vs. buy question properly](/blog/build-vs-buy-software) at this stage, since handing off a prototype sits in interesting territory between the two.

**Rebuild properly from the beginning.** Sometimes the prototype has accumulated enough structural problems — the wrong architecture choices, the brittle dependencies — that the cleanest path forward is a proper rebuild with the prototype as a specification. This sounds discouraging, but it's often faster than it sounds: the requirements are crystal clear, the scope is defined, and there are no unknowns about whether the approach is viable.

Which option is right depends on how close "80% done" actually is, what the remaining problems are, and how the tool will be used in practice.

---

## A question worth asking

If you have a half-finished tool sitting on your machine that you built yourself and can't quite get over the line — the most useful thing to ask is: what exactly is broken or missing?

Sometimes the answer is a specific list of things. Sometimes it's more of a vague sense that it's not quite reliable enough to trust with real work. Either way, that answer shapes what happens next.

The prototype you've built demonstrates that you know what you want. That's the hardest part of any software project. The engineering to finish it is the tractable part. And if you're not sure whether the thing you've built is actually [a good candidate for a proper automated tool](/blog/what-can-be-automated-small-business), it's worth checking before investing more time in it.

---

### If you've hit this ceiling with something you've been building and want a second opinion on what it would take to finish it properly, we're happy to have a look — no commitment required. [See how we work →](/services/internal-tools)

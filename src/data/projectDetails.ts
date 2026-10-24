// The longer write-up on each project's page, keyed by project id. Drawn from
// each project's own repository (README, docs and code), so it says what the
// software does and how it's built, not outcomes nobody has measured.
// Projects without an entry show their card description only.

export type ProjectDetails = {
  // Who it's for and the problem it takes on.
  why: string;
  // What it does, for the people who use it.
  features: string[];
  // How it's built: architecture, data and the decisions behind them.
  engineering: string[];
};

export const PROJECT_DETAILS: Record<string, ProjectDetails> = {
  ovi: {
    why: "NDIS providers are audited against complex, context-dependent practice standards, often with small, high-turnover teams, so audit preparation tends to be manual and gaps surface late. OVI keeps the requirements, the controls and evidence that meet them, and the registers an auditor reads in one place, and works out readiness from all of it.",
    features: [
      "A compliance registry seeded with the NDIS Practice Standards modules, with organisation-level controls and evidence and a readiness score per framework.",
      "Documents, incidents, complaints, actions and risks registers, including reportable-incident clocks (24 hours or 5 business days) and versioned policies with review cycles and acknowledgements.",
      "Roles for admins, compliance managers, team leaders and auditors. Auditor access is read-only and always time-limited.",
      "Evidence-pack ZIP exports, register snapshots and an append-only change history of every insert, update and delete.",
      "A staff CRM covering leads through to customers: pipeline, contacts, playbook tasks, proposals priced from a price book, and token links where customers accept a proposal, which activates their organisation.",
      "Work queues, search, calendars, checklists, quick capture and in-app help, plus display settings for text size, spacing, muted colours and reduced motion.",
    ],
    engineering: [
      "A React 19 and TypeScript single-page app on Vite, with code-based TanStack Router routes and lazy-loaded chunks for everything past the marketing home page.",
      "Multi-tenant Supabase Postgres, with the schema declared one file per concern. Row-level security and column grants mean clients can only write the fields they own.",
      "Readiness is derived in the database from controls, evidence and register state, rather than stored as a number someone can edit.",
      "Schema tests run against a local PGlite database or a real project. Playwright covers desktop and mobile Chromium, alongside Vitest unit tests.",
      "Email goes out through an outbox on SMTP2GO's Australian API, so customer-facing messages never leave the country.",
    ],
  },
  "ready-check": {
    why: "Most to-do apps punish you for falling behind with red overdue badges and streaks. Ready Check is built for people with ADHD and AuDHD: it keeps Todoist-level task management, but frames missed dates as ready to reschedule, shows when work actually got done alongside when it was due, and tracks sales targets as progress rather than as being behind.",
    features: [
      "Inbox, Today, Upcoming, Projects and Labels, with Quick Add that understands natural-language dates, plus subtasks, recurrence, and planning dated steps back from a deadline.",
      "A month and week calendar showing due times and actual completion times side by side, with public holidays and leave left out of working-day totals.",
      "Focus tools: a Now/Next strip, planned time against when your day ends, energy check-ins, Focus Mode with a visual timer, and Break it down.",
      "A sales pipeline with activity logging, deals, monthly and yearly targets, forecasts, contacts and accounts, and a weekly review.",
      "Optional read-only Outlook and Google Calendar overlays, contact imports, Todoist CSV import, and an Outlook add-in that turns an email into a task.",
      "Accessibility settings for text size, reduced motion, muted colours and dyslexia-friendly spacing, with confetti strictly optional.",
    ],
    engineering: [
      "Local-first: IndexedDB through Dexie is the primary store, and optional Supabase account sync runs in the background, so capture keeps working offline.",
      "Zustand stores write through to a small storage interface, so components never touch Dexie and the sync layer wraps storage without changing the UI.",
      "Business rules such as recurrence, completion and calendar bucketing are pure functions that take the current time as a parameter, which keeps tests deterministic.",
      "Tabs stay in step through a BroadcastChannel, so one tab never overwrites another tab's newer changes.",
      "An installable PWA, with storage persistence requested from Settings rather than as a surprise prompt on startup.",
    ],
  },
  "kritik-systems": {
    why: "Quantitative Marxian political economy is usually worked through by hand from the text. Kritik Systems turns it into calculators that show their working, so students and study groups can explore surplus value, the rate of profit and reproduction schemas with every step derived and cited.",
    features: [
      "Calculators for surplus value, the rate of exploitation, organic composition of capital, the rate of profit and the tendency of the rate of profit to fall, reproduction schemas, prices of production, differential rent and more.",
      "Every result comes with a step-by-step derivation and cited notes, with fixtures taken from Marx's own worked examples in Capital.",
      "Saved scenarios, ordered sets, comparison views, charts, and JSON and CSV exports.",
      "Free to use with no account. A one-time purchase unlocks the Pro tools, and the licence also unlocks Pro reading guides on its sibling site, Praxis Primer.",
    ],
    engineering: [
      "A Next.js App Router app in TypeScript. The calculation engine is pure functions over readonly inputs, with no React, storage, network, clocks or randomness, so every formula is tested in isolation.",
      "Local-first: calculator inputs and scenarios stay in the browser in IndexedDB through Dexie and never leave it unless you export them.",
      "Supabase is used only for entitlements. Stripe Checkout and a webhook issue licence keys, which are stored as hashes and verified by both sites.",
      "The scope is deliberately narrow, with no user-generated public content and no moderation surface, so one person can maintain it in 6 to 12 hours a week.",
    ],
  },
  "midnight-archive": {
    why: "Obscurity Shroud is a trilogy of urban fantasy novels set in Sydney. Midnight Archive gives it a home built around the prose: chapters stay in the author's order and the story stays linear, while lore, illustrations and atmosphere sit around the text instead of turning the novel into a game.",
    features: [
      "A trilogy overview, book pages and a chapter reader with careful typography, optional lore notes, and previous and next navigation within and between books.",
      "A shared lore browser for characters, locations, factions and events, linked from the story text, with lore that can be gated by reading progress so readers discover the world as the protagonist does.",
      "Reader accounts that save and resume reading position across devices.",
      "Optional chapter discussion and reactions, with spoiler boundaries, private reports and author moderation.",
      "An author dashboard for book details, ordered chapter blocks (including pasted Markdown), publication states, release times and shared lore entries, with aggregate reading analytics.",
    ],
    engineering: [
      "Next.js App Router, React and strict TypeScript, with chapters stored as typed content blocks for prose, illustrations, annotations and lore references.",
      "Supabase Postgres with row-level security. Authors save through guarded RPCs that validate input, require an explicit publication review, and reject stale saves by comparing revisions.",
      "Reading progress uses owner-scoped tables with compare-and-increment revisions, so a stale tab can't overwrite newer progress.",
      "Sitemaps, canonical and Open Graph metadata and series JSON-LD are built only from published, publicly visible content, never drafts.",
    ],
  },
  "arcana-tools": {
    why: "Life admin is spread across many apps: tasks in one, the calendar in another, budgets and mood tracking somewhere else. Arcana Tools brings them into one dashboard designed for people with AuDHD, with Australian defaults for dates, currency and location.",
    features: [
      "A Today view with quick capture, inbox triage, today's tasks, upcoming events, bills and project progress.",
      "Personal, Work and Life Admin task lists. Recurring obligations such as registrations, renewals and the tax return turn into tasks before they're due.",
      "Quick capture from a phone, including speech input and iPhone Shortcuts.",
      "A calendar with month, week, three-day and agenda views, conflict detection, reminders, sunrise, sunset and moon data for the selected city, and read-only Google Calendar events from up to five accounts.",
      "Optional mood check-ins with insights over 7, 30 and 90 days, CSV export and a print-ready PDF.",
      "Budgeting in AUD with accounts, bills, budgets and alerts.",
    ],
    engineering: [
      "Next.js App Router with React, Tailwind CSS and shadcn/ui, organised as vertical feature slices with a strict rule that shared code never imports from features.",
      "Supabase Auth and Postgres with row-level security. Writes carry a version token, so concurrent edits are caught instead of silently overwritten.",
      "If a save fails, the change is kept as a browser draft scoped to the account, so nothing typed is lost.",
      "Validation happens at Zod schema boundaries, and sky calculations live in a self-contained astronomy module.",
    ],
  },
  talesmith: {
    why: "Choice-driven lessons engage learners, but building branching content usually takes developer tools. Talesmith lets teachers, trainers and facilitators build interactive, branching-path stories and lessons without writing code.",
    features: [
      "A branching path builder where each choice leads to a different node or ending.",
      "Ready-made story templates to shorten the time to a first lesson.",
      "Images, audio and video embedded in story nodes.",
      "A learner player that walks through the lesson one choice at a time.",
      "Sharing as a link or a JSON file, and an in-app educator guide.",
    ],
    engineering: [
      "A Vite, React and TypeScript single-page app in which authoring and playback share one story graph model of nodes, choices and media references.",
      "Validation flags missing start nodes, dangling choice targets, empty labels and unreachable nodes before a lesson is shared.",
      "Drafts save in the browser, and shared stories travel as JSON or as a snapshot embedded in the URL, keeping the backend thin until accounts and uploads are needed.",
      "Tested with Vitest and Playwright.",
    ],
  },
  "break-the-loop": {
    why: "Idle games are built on numbers that go up forever. Break the Loop asks what happens when they can't: a materialist strategy game in which growth itself creates crises, and the aim is to end the loop instead of grinding it.",
    features: [
      "A continuous simulation that you steer with policies, propaganda, diplomacy and timed transitions.",
      "Modes of production from extraction through colonialism, imperialism and crisis to socialism and communism, each changing which meters matter and which actions are available.",
      "NPC nations with interests of their own, trade, debt and aid. War emerges from economic and diplomatic pressure as a draining state, with no button to declare it.",
      "Party leadership, where faction support and party unity limit what you can get away with.",
      "A finite victory with no New Game+ grind, and several ways to lose, including coups and colonisation.",
      "Multiple saves and guest sessions with no account needed, plus reduced-motion and cue-muting options.",
    ],
    engineering: [
      "A monorepo with a TypeScript, Express, Prisma and Socket.IO simulation server ticking every two seconds, and a Vite and React interface.",
      "The server is authoritative: the UI sends actions over REST, receives state in real time, and never invents a tick outcome.",
      "Vitest covers ticks, actions, events, transitions, diplomacy and full campaign smoke runs.",
      "Deployed as the interface on Vercel, the engine on Render and the database on Supabase.",
    ],
  },
  "praxis-primer": {
    why: "Socialist and communist theory is easier to work through with structure and company. Praxis Primer is a reading and study companion that adds plans, summaries and prompts around the classic texts while linking to the texts themselves on their original sites, so it hosts no copyrighted material.",
    features: [
      "Self-paced reading plans for works including the Manifesto, Wage Labour and Capital, Capital Volume I, Imperialism and State and Revolution, with reading-time estimates.",
      "A section reader with original summaries, key claims, discussion prompts for study circles, glossary terms and source links.",
      "Spaced-repetition review of glossary terms, scheduled with the SM-2 algorithm.",
      "Private notes on each section, kept in the browser and never uploaded.",
      "Read-only plan snapshots to share with a study circle, and a free tier, with Pro guides unlocked by a Kritik Systems licence.",
    ],
    engineering: [
      "A Next.js App Router client with no backend of its own. Content is MDX and JSON, validated and indexed at build time, so a malformed guide fails the build instead of reaching readers.",
      "Notes, progress and review cards live in IndexedDB through Dexie and stay in step across tabs.",
      "The only network call is licence verification against Kritik Systems, cached locally for 24 hours.",
      "Reader examples can prefill the matching Kritik Systems calculator, with a link back to the reading.",
    ],
  },
  marketopia: {
    why: "Game theory concepts can feel abstract. Marketopia, built to accompany an introductory talk, teaches them through a story: Queen Celeste Mailer must save the realm of Marketopia from the Churn Dragon.",
    features: [
      "Story chapters covering game theory basics, the prisoner's dilemma, payoff matrices, Nash equilibrium and Bertrand competition.",
      "Applies the ideas to customer retention through chapters on churn, referral rewards, personalised incentives, predictive analytics and seasonal events.",
      "Interactive diagrams, charts and forms for trying out strategies.",
      "A final simulated battle against the Churn Dragon to test what you've learned.",
    ],
    engineering: [
      "A Next.js App Router app with one route per chapter, styled with Sass modules and animated with Framer Motion page transitions.",
      "Reusable components for payoff matrices, charts, tooltips and navigation, and a shared context that switches between shorter and more detailed explanations.",
    ],
  },
  "no-place-to-rest": {
    why: "A game about environmental injustice in which the danger is organised rather than natural: the clean routes through a ruined city are gated and watched, and the contaminated ones are simply open. A child crosses it guided by a cat that glows brighter near contamination.",
    features: [
      "47 hand-drawn scenes and 127 routes across three acts, with every ending reachable.",
      "Read, then commit: aiming the cat down a route costs energy, needs the cat's trust and works once per scene, so most choices are made half-blind.",
      "Three resources (exposure, energy and the bond with the cat), plus a hidden dose that never refunds.",
      "An evening that worsens the ground as time passes, told in words such as 'the light going', never as a countdown.",
      "Several endings. Each leaves flags behind that open paths on later runs.",
    ],
    engineering: [
      "A game-agnostic node-graph engine of resources, conditions, run state and a reducer. Game vocabulary is kept out of it by an ESLint rule and by a test that scans the engine's source.",
      "Mechanics are small pure reducer systems added to a list, such as reading a route, being refused at a gate, resting or the rising evening, rather than one large switch statement.",
      "Scenes render either as buttons or as a point-and-click picture whose clickable areas share the drawing's coordinate space.",
      "React and React DOM are the only runtime dependencies, and 248 checks run as plain Node scripts with a tiny assertion harness.",
    ],
  },
  "ai-dreams": {
    why: "A blog exploring philosophy, society and consciousness through a materialist lens. It is also where the transcripts of the Dev Camp talks are published.",
    features: [
      "A home feed with featured posts and paginated loading, plus category and tag archives.",
      "Post pages with cover images, related posts and syntax-highlighted code blocks.",
      "Static pages, such as a glossary and book recommendations, written in Markdoc with custom components.",
      "An RSS feed, a sitemap and a public data dashboard of top posts, category counts and yearly charts.",
    ],
    engineering: [
      "A Next.js and TypeScript site with posts managed in Hygraph over GraphQL: drafts in development, published content in production, and previews gated by a shared secret.",
      "Post view tracking in Supabase feeds the data dashboard.",
      "Vitest and Testing Library cover units, API routes and components with the CMS mocked, and Playwright runs end-to-end smoke tests against a production build.",
    ],
  },
  "dnd-point-buy-calc": {
    why: "Point-buy character creation in D&D 5e means juggling point costs, racial bonuses and modifiers by hand. This calculator does the bookkeeping live, so players can focus on the character.",
    features: [
      "Adjust all six ability scores and see each point cost against the 27-point budget as you go.",
      "Racial bonuses for the standard races and their variants, such as Hill and Mountain Dwarf or High, Wood and Drow Elf.",
      "Free-choice bonuses for races such as Half-Elf, Variant Human and Changeling.",
      "Modifiers and final totals that update in real time.",
    ],
    engineering: [
      "A Next.js and TypeScript app styled with Tailwind CSS, using React Context for the selected race, scores and bonuses.",
      "Race data drives the rules, so adding a race or variant is a data change rather than new logic.",
    ],
  },
};

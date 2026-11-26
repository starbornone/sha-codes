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
  "astral-archives": {
    why: "Players and game masters can find the right character or campaign tool from one page, whether they’re building a character for session zero or checking the date in Faerûn.",
    features: [
      "Six destinations cover D&D point-buy, Pathfinder Remaster attributes, Vampire V5 character creation, Chronicler’s campaign wiki, the Harptos calendar and World Binder’s campaign previews.",
      "Each card describes what the tool does and opens it directly. The D&D entry opens the calculator in 2024 rules mode.",
    ],
    engineering: [
      "Vite builds the assets and React renders the complete directory to static HTML, so the links work with JavaScript disabled.",
      "A typed list supplies card content and directory structured data. The same route definition supplies the canonical URL, page metadata and sitemap.",
    ],
  },
  "vtm-character-creator": {
    why: "V5 character creation ties the character’s motives and relationships to choices that affect the sheet. The guide keeps those choices together and surfaces open rulings before a player hands the build to their Storyteller.",
    features: [
      "Create fledglings, neonates or ancillae, with support for the seven named Core clans, Caitiff and Thin-blood characters. The guide applies the starting budgets and restrictions for the selected profile.",
      "Choose traits, Disciplines, powers, an eligible Predator Type, Advantages and Flaws. An optional Player’s Guide source pack adds choices alongside the Core catalog.",
      "Use the advancement journal to track earned XP, purchases and remaining XP after character creation. Starting XP has its own budget.",
      "Resume named drafts at their last step or restore a JSON backup. Print the evaluated sheet or export a Markdown brief with open rulings and selected narrative sections.",
      "Share a read-only mechanical build while keeping character names and narrative notes in the local draft.",
    ],
    engineering: [
      "A React and TypeScript app built with Vite. The rules evaluator uses source-tagged options to calculate ratings, show where grants came from and flag choices that need review.",
      "The same evaluated sheet drives review and print. Versioned browser saves and backups validate draft inputs, and share links carry a defined set of mechanical fields.",
    ],
  },
  "harptos-calendar-tracker": {
    why: "A Dungeon Master can advance a campaign through travel, downtime or a change of setting from one screen. The tracker keeps the date, local light and weather in step and produces a line ready to copy into session notes.",
    features: [
      "Set the local date and time or advance by hours, a day or a tenday. In Faerûn, the Harptos month view highlights the campaign day and shows tendays and festivals, including Shieldmeet in leap years.",
      "Switch among eleven locations, including Halruaa, Sharn, Greyhawk and Sigil. The same campaign moment is displayed in the selected location’s calendar, with a campaign day count in Sigil and the Radiant Citadel.",
      "See local light phases, clock markers and hourly weather. Weather follows local fronts with fog near dawn, precipitation transitions and short thunderstorms where conditions allow.",
      "A one-line campaign summary with copy-to-clipboard, plus share links that open as a read-only preview and can be adopted into the browser’s saved campaign.",
      "English by default, with an existing Simplified Chinese preference applied to the interface, summary and shared preview.",
    ],
    engineering: [
      "React and TypeScript on Vite, with calendar rules independent of the browser. Local date conversion and editing use a shared timeline measured in elapsed minutes from 1 Hammer 1 DR.",
      "Location profiles and the campaign clock determine daylight. Seeded weather yields the same condition for a given location and hour after a time jump, reload or adoption of a share link.",
      "The browser stores the clock, location and seed as a single snapshot. Edits stay in the current tab if a save fails and are included in the next successful save.",
    ],
  },
  chronicler: {
    why: "A GM can keep session prep, reference notes and player-facing lore in one campaign. Cross-linked entries show where someone appears, which places matter to a chapter and what treasure has turned up there.",
    features: [
      "Search people, enemies, organisations, treasure, chapters and locations by name, alias, tag or notes. Appearance links work in both directions, so a chapter shows its cast and loot and a location shows its occupants.",
      "The Session Desk brings the active chapter’s adventure notes and linked entries into view, with shortcuts for private notes and loot rolls during play.",
      "Draft player journal updates with recaps, discoveries and loot. Review changes and preview the player view before publishing.",
      "Generate shops and stock for settlements, link merchants to campaign entries and track sales from inventory.",
    ],
    engineering: [
      "A Next.js App Router application with Tailwind CSS and shadcn/ui. Campaign notes render as Markdown, with internal links opening previews in the GM workspace.",
      "The editable local demo starts with a seeded campaign and saves to a JSON file. The optional hosted mode uses Supabase Auth and Postgres row-level security for signed-in campaigns.",
    ],
  },
  "world-binder": {
    why: "During play, a GM needs the current scene and its clues, characters and handouts close at hand. World Binder breaks a premade adventure into linked references and gives players public previews they can read before the session.",
    features: [
      "Preview the illustrated invitation and opening scene for The Masque of Shattered Mirrors. The public site also introduces Bloodlines and Tearing Between the Seams.",
      "In the local Masque pilot, follow branching scenes, open NPC and clue references, and reveal handouts as the table discovers them.",
      "A browser journal preserves the current scene, outcomes, clues and table notes across reloads. The pilot can open a configured chapter in Chronicler for campaign notes.",
    ],
    engineering: [
      "A Next.js App Router workspace with a shared Zod schema for scenes and their linked entities.",
      "Public previews use curated player-facing content. The local pilot loads its GM material on the server and keeps run state in the browser.",
    ],
  },
  "open-tome": {
    why: "Game masters need maps that make rooms, routes and elevation clear during play. Open Tome combines readable overhead artwork with an editor for connected floors, so a tavern and the vault beneath it stay part of the same map.",
    features: [
      "Start from a furnished map or build with illustrated floors, walls and props. Select, group, move and rotate objects, with grid or free placement for furnishings and Undo/Redo for edits.",
      "Create aligned floors, connect stairs and hatches, and use an alignment ghost to see the level below. Named layers control visibility, locking and draw order.",
      "Switch between Build and Play views, hide roofs or wall artwork, and keep GM-only layers out of player views. Manual reveal and observer previews help prepare what players can see.",
      "Save drafts locally without an account and keep editable JSON backups. Export PNG artwork, print-ready PDFs or a ZIP with images, grid metadata and notes for a manual VTT handoff.",
    ],
    engineering: [
      "A Next.js App Router application with TypeScript, Tailwind CSS and a PixiJS WebGL canvas. Zustand manages editor state and reversible document changes.",
      "IndexedDB stores local drafts. Versioned JSON carries editable maps between browsers, including floors, layers, groups and object placement.",
      "Player views and artwork exports exclude GM-only layers and editor diagnostics. Flat artwork exports stay unlit so the destination VTT can handle session lighting.",
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
    why: "Players building a character before session zero can try different ability score arrays and see how their origin choices affect the result. The calculator defaults to the 2024 rules and lets players switch to the 2014 rules in Character Setup.",
    features: [
      "Adjust all six base scores or fill the standard array. Point costs, remaining budget, final scores and modifiers update as you edit.",
      "Under the 2024 rules, choose a Player’s Handbook species and background, assign the background’s ability increases, and see its skills and Origin feat.",
      "Under the 2014 rules, apply race and variant bonuses and make choices such as a High Elf’s wizard cantrip or a Variant Human’s feat.",
      "Copy a share link, import or export a JSON build, or print a build summary. Share links preserve the rules edition and language.",
    ],
    engineering: [
      "A client-side React and TypeScript app built with Vite and styled with Tailwind CSS. React Context keeps edition-specific choices separate while both editions use the same base scores and budget.",
      "TypeScript data modules define origins and racial bonuses. Pure functions calculate point costs, bonuses and ability modifiers.",
      "Build links without an edition marker and version 1 JSON exports still open in 2014 mode. A failed import leaves the current build intact.",
    ],
  },
  "pf2e-point-buy-calc": {
    why: "Pathfinder 2e Remaster characters gain boosts at creation and as they level. The ledger shows where every modifier comes from and tracks partial boosts as players plan their advancement.",
    features: [
      "Apply ancestry, background, class and free boosts, with alternate ancestry boosts and voluntary flaws. Use presets from Player Core and Player Core 2, selected ancestries from Howl of the Wild, or custom entries.",
      "Plan ancestry, class, skill and general feats through level 20. Browse feat choices for any level while keeping the modifier ledger at the character’s current level.",
      "Keep feat choices and modifiers together in share links and JSON backups. Print the attribute ledger or undo a reset or import before making another edit.",
    ],
    engineering: [
      "A static Vite site with a TypeScript rules engine that validates build choices, calculates modifier contributions and handles partial boosts.",
      "Versioned share links and JSON backups use the same build model. The feat catalog uses Foundry’s PF2e compendium data for levels, traits, prerequisites and background grants.",
    ],
  },
  "eclipse-phase-character-creator": {
    why: "In Eclipse Phase, a character’s mind and identity persist when they move into a new body. The creator keeps the ego separate from its current morph, so players can inspect their character’s calculations and compare a new sleeve without losing the old one.",
    features: [
      "Start an ego with identity, motivations, a core aptitude template and selected background, career, interest and faction packages. Partial drafts can be saved before a morph is assigned.",
      "Review a starting skill ledger with the source of each grant, linked aptitude and over-cap totals. Reallocate package points and track Customization Point costs for supported skills, traits, reputation and other choices.",
      "Browse the supported Quick-Start morphs and compare their health values and the resulting sleeve. Resleeving records the change and keeps earlier sleeves in the character’s history.",
      "Print a character dossier or export and restore a JSON backup. Drafts save locally in the browser without an account; full character creation and validation remain in development.",
    ],
    engineering: [
      "A React and TypeScript application on Vite, with React Router for the ego workspace, morph library, resleeving and print views, and Tailwind CSS for the interface.",
      "Rules datasets and source references stay separate from pure calculation functions. The dossier derives ego aptitude checks independently of morph health, while the skill ledger shows how package grants and allocations contribute to totals.",
      "IndexedDB stores egos and sleeves together in a transaction. Revision checks prevent stale edits from overwriting newer drafts, and JSON imports validate saved data before restoring it.",
    ],
  },
  "masque-of-shattered-mirrors": {
    why: "The Masque of Shattered Mirrors is a social-horror masquerade written for one player and one GM. The creator helps the player establish why their character accepted the invitation and what they care about, so the GM can tailor the session around those choices.",
    features: [
      "A session-zero guide leads from the invitation to the character’s concept, relationships, craft and the impression their mask is meant to give.",
      "Plan attributes, heritage, skills, feats, spells and starting gear. The campaign-fit review shows how the build supports checks such as Will, Perception, social skills and investigation.",
      "Keep named drafts in the browser, export or restore a character file, and open a read-only table reference with a printable card. A Foundry VTT export includes a PF2e character actor and a checklist for finishing setup.",
      "The protected GM workspace reviews player exports and saves character files with the GM’s own notes for later sessions.",
    ],
    engineering: [
      "The player app is built with React, TypeScript and Vite. It reuses the attribute boost logic from the Pathfinder 2e Attribute Calculator and saves named drafts in the browser.",
      "Player files carry the concept and build between browsers. The separate GM build opens character exports and packages private notes with the reviewed character.",
    ],
  },
};

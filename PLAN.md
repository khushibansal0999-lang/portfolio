# PM Portfolio — Build Plan

**Goal:** land a PM role. Primary reader is a recruiter or hiring manager who gives the site 60 seconds before deciding whether to read a case study.
**Stack:** Build in Lovable (React + Vite + TypeScript + Tailwind + shadcn/ui), sync to GitHub, deploy on Vercel.
**URL:** free `*.vercel.app` subdomain — no custom domain being purchased.
**Starting content:** 2–3 drafted case studies.
**Design:** four full visual themes (Release Notes, Mission Control, Journey Map, Editorial), switchable live on the site by the visitor. See Phase 4.

---

## The one rule that drives every decision

A hiring manager skims. They want, in order: *what did you ship, what changed because of it, and were you actually the one driving it.* Every layout choice below optimizes for that. Anything that delays those three answers gets cut.

---

## Phase 0 — Decisions to lock before writing code (~30 min)

| Decision | Why it matters now |
|---|---|
| Subdomain name | No custom domain, so the free subdomain **is** your URL — it goes on your resume and in every recruiter email. Claim `khushibansal.vercel.app` (or `.lovable.app`) before someone else does. Use your plain name; no `-portfolio`, `-v2`, or numbers. |
| Which 3 case studies ship | Three strong beats six mediocre. Pick for range: one 0→1, one growth/optimization, one messy-ambiguity story. |
| Resume: PDF, HTML page, or both | Both. HTML for skimming + SEO, PDF for the ATS upload. |
| Contact method | One primary CTA. Email link or Cal.com. Not a contact form — nobody fills those. |
| Public vs. anonymized metrics | Decide the line once, apply it everywhere. "Increased activation 34%" beats "increased activation significantly." Use relative % if absolutes are sensitive. |
| Default theme on first visit | **Updated 2026-09-12: now `poster`**, not `editorial` — see the Phase 4 guardrails update. It's the one every cold recruiter link and OG preview shows. |

**Deliverable:** a `content/` outline file naming the three case studies and their one-line "so what."

---

## Phase 1 — Content shaping (do this before design)

Design decisions fall out of content, not the reverse. For each case study, force it into this skeleton:

1. **One-line summary** — the whole thing in a sentence. *"Cut onboarding drop-off 40% by replacing a 6-step signup with progressive profiling."*
2. **Context** — company, your role, team size, timeframe. 3 sentences max.
3. **Problem** — with evidence. A number or a user quote, not an assertion.
4. **What you did** — the decisions *you* made, and the ones you rejected. This is where PM candidates win or lose; tradeoffs shown > process narrated.
5. **Outcome** — metrics, with a baseline. If it failed, say so and say what you learned — that reads as senior.
6. **What I'd do differently** — short. Signals self-awareness, and almost nobody includes it.

**Anti-patterns to strip out:**
- Framework tourism (RICE, Kano, double-diamond) unless it changed a decision.
- Passive voice hiding ownership — "it was decided" tells them nothing.
- Wireframe galleries with no commentary. A screenshot needs a caption saying why it looks that way.
- Metrics with no denominator.

**Deliverable:** 3 MDX files, each ~600–900 words, each with a hero image or diagram.

---

## Phase 2 — Site architecture

```
/                    Home — hook, 3 case study cards, short about, CTA
/work/[slug]         Case study detail (MDX)
/about               Who you are, how you work
/work-history        Career timeline — roles, scope, shipped things
/projects            Side projects
/projects/[slug]     Project detail (only for projects that earn one)
/learning            Learning & skills hub
/resume              HTML resume + PDF download
```

Eight routes. That's more surface than a portfolio strictly needs, so the nav has to do work — a flat eight-item nav buries the case studies, which are the thing that gets you hired.

**Nav structure:**
```
Work  ·  About  ·  Projects  ·  Resume        [primary nav — 4 items]
```
`/work-history` and `/learning` are reached *from* `/about`, not from the top nav. They're depth for the reader who's already interested, not entry points. This keeps one click between a cold visitor and a case study.

---

### `/` — Home

Top to bottom:
1. Name + one-line positioning. *"PM building 0→1 fintech products."* Not "passionate about products."
2. Three case study cards — each showing the outcome metric on the card face, so it's visible without a click.
3. Two-sentence about + photo.
4. CTA: email / resume / LinkedIn.

Nothing above the fold that isn't your name and what you do. No hero animation gate. No links to `/learning` or `/work-history` from here — they compete with the case studies.

---

### `/about` — About me

The page people read *after* a case study convinces them, to decide whether they want you on their team. So it answers "what are you like to work with," not "what have you done."

**Sections:**
1. **Photo + opening paragraph.** Real photo, looking at the camera. Opening line should be specific enough that it couldn't be on anyone else's site.
2. **The arc** — 3–4 sentences on how you got to PM and what pulled you here. Career changers: this is where you make the switch read as deliberate rather than accidental.
3. **How I work** — 4–6 short statements with a sentence of evidence each. *"I write before I meet"* → why, and what it changed. This section is what a hiring manager is actually scanning for.
4. **What I'm best at / what I'm still building** — naming a real weakness reads as senior. Keep it to one, and pair it with what you're doing about it.
5. **Outside work** — 2–3 lines. Humanizing, not a hobby inventory.
6. **Pointers down** — inline links to `/work-history` ("the full timeline") and `/learning` ("what I'm currently learning"). This is the only place those pages are linked prominently.
7. **CTA** — same email/resume CTA as home.

**Avoid:** "passionate about building products users love," a values list with no evidence, a personality-test result.

---

### `/work-history` — Career timeline

Distinct from `/work`. `/work` argues you're good; `/work-history` establishes scope, progression, and that the case studies sit inside a real career. A recruiter checking "has she operated at our size" lands here.

**Layout:** reverse-chronological vertical timeline. Each entry:

- Company, title, dates, location/remote
- One line on what the company does and its stage/size — *"Series B, ~120 people, B2B payments."* Reviewers don't know every company.
- **Scope:** team size, surface owned, whether you had direct reports
- **3–4 bullets of what shipped**, each with an outcome. Not responsibilities — outcomes.
- **Link out** to the relevant case study where one exists. This is the page's real job: turning the timeline into an on-ramp for `/work`.

**Also include:**
- Promotions shown as separate nested entries under one company — progression is a signal, don't flatten it.
- Gaps stated plainly with one line of context. An unexplained gap invites a worse story than the true one.
- Education and any certifications at the bottom, compact.

**Data model:** keep this in structured data (`content/roles.json` or MDX frontmatter), not hand-written JSX — you'll want `/resume` rendering from the same source so they can never drift.

---

### `/projects` — Side projects

For a PM, side projects prove initiative and that you can ship without an org behind you. They are *supporting* evidence — never let them outweigh the case studies.

**Index page:** grid of cards. Each card:
- Project name + one-line description
- Status badge — Live / Archived / Experiment. Be honest; a dead project labeled dead is fine, a dead project presented as live is a credibility hit.
- Stack or medium, as small tags
- Two links: **Live** and **Source** (whichever exist)
- Screenshot or a simple generated cover

**Sorting:** most interesting first, not most recent. Pin the best one.

**Detail pages** (`/projects/[slug]`) — only for projects with a real story. 3–5 sentences of *why you built it* and one thing you learned beats a full case study treatment. If a project doesn't warrant a page, the card links straight out and no detail route is generated.

**Include the small stuff.** A weekend script that saved your team four hours a week is a strong PM signal. Volume of finished small things > one unfinished ambitious thing.

**Cut:** tutorial follow-alongs, abandoned repos with no README, anything you can't demo.

---

### `/learning` — Learning & skills hub

The riskiest page on the site: done badly it's a skills word-cloud that says nothing, done well it shows you're deliberately building capability. The framing that saves it is **current and specific**, not a lifetime inventory.

**Sections:**

1. **Currently learning** — 2–3 items, each with *what*, *why*, and *where you are*. Dated. *"SQL beyond joins — so I stop blocking on analysts for basic funnel questions. Working through window functions; rebuilt our activation query myself last month."* This section is the whole point of the page, and it must be genuinely current — a stale "currently" line is worse than no page.

2. **Skills, grouped and honestly leveled.** Group by *Product* / *Technical* / *Data* / *Design*. Use three levels — **Fluent / Working / Learning** — and put real things in the Learning column. Every skill gets a short evidence clause or it doesn't appear. No 1–10 ratings, no percentage bars, no five-star widgets: they're unfalsifiable and read as filler.

3. **Tools** — small logo/text row. Figma, Amplitude, Linear, SQL, whatever's real. Low signal but recruiters keyword-scan it, so it earns its place.

4. **Notes and takeaways** — a short list of books/courses/talks with *one line of what changed in how you work* for each. A bare reading list signals nothing; the takeaway line is the signal.

5. **Certifications** — only if genuinely relevant. Compact list, no badge images.

**Maintenance rule:** put a `lastUpdated` field in the frontmatter and render it on the page. If it goes 6+ months stale, the honest move is to delete the page rather than let it rot — a visibly abandoned "currently learning" section undercuts the diligence it's trying to demonstrate.

---

### `/resume`

HTML resume rendering from the same `roles` data source as `/work-history`, plus a PDF download button. The PDF is what gets uploaded to ATS systems; keep it single-column, no graphics, real text.

---

## Phase 3 — Technical build

Lovable generates a **React + Vite + TypeScript + Tailwind + shadcn/ui** app and hosts it. No Next.js, so: no App Router, no server components, no `next/image`, no `next/og`, no build-time static generation. Routing is `react-router-dom`. Plan around that rather than fighting it.

### Content: skip MDX, use typed data files

MDX in Vite is possible (`@mdx-js/rollup`), but wiring it through Lovable's prompt loop is the kind of task the AI does inconsistently, and a broken content pipeline blocks every page. Use plain TypeScript data modules instead:

```
src/content/caseStudies.ts   Case studies — typed objects, body as structured blocks
src/content/projects.ts      Side projects
src/content/roles.ts         Career history → feeds /work-history AND /resume
src/content/skills.ts        Skills + currently-learning → feeds /learning
src/content/types.ts         Shared interfaces
```

For case study bodies, define a small block union rather than raw HTML strings — it keeps rendering consistent and stops the AI reinventing markup per page:

```ts
type Block =
  | { kind: 'heading'; text: string }
  | { kind: 'paragraph'; text: string }
  | { kind: 'image'; src: string; alt: string; caption?: string }
  | { kind: 'quote'; text: string; attribution?: string }
  | { kind: 'metrics'; items: { label: string; value: string; baseline?: string }[] }
  | { kind: 'list'; items: string[] };
```

One `<BlockRenderer>` component switches on `kind`. Content stays separate from layout, and you can hand-edit a case study without touching JSX.

The `roles.ts` → two-pages rule still holds: hand-maintaining the timeline and the resume separately guarantees they drift, and a resume that contradicts the site is a real credibility problem.

### The SPA metadata problem — solve this, don't defer it

A Vite SPA serves one `index.html` for every route. Google renders JS and will mostly cope, but **LinkedIn, Slack, iMessage, and WhatsApp scrapers typically do not execute JavaScript** — they read the raw HTML. So `react-helmet-async` will fix the browser tab title and help Google, but a link pasted into a recruiter DM can still preview with generic site-wide text on every URL.

For a portfolio whose main distribution channel *is* a pasted link, that's the highest-cost bug on the site. Options, best first:

1. **Make the root `index.html` OG tags excellent and universal.** Your name, your positioning line, one good 1200×630 image *in the `editorial` theme* — that's the theme every scraper effectively sees, since none of them execute JS to pick up a `?theme=` choice. Every URL then previews identically — not per-page, not per-theme, but always correct and never broken. Combined with `react-helmet-async` for tab titles and Google, this is the pragmatic 90% fix and costs about an hour.
2. **Share the root URL, not deep links.** A behavioral fix, free, and mostly what you'd do anyway.
3. **Prerendering** — `vite-plugin-ssg` or similar for true per-page static HTML. Correct, but fights Lovable's setup and its build config; only worth it if you're comfortable working in the synced GitHub repo.

Take option 1 + 2 for launch. Revisit 3 only if per-page previews turn out to matter.

**Also:** ship a static `public/sitemap.xml` and `public/robots.txt`. Lovable won't generate them and they're two files.

### Build order

Each step should end in something you can look at. In Lovable, prompt one step at a time and verify before moving on — large multi-page prompts produce drift you'll spend longer untangling than rebuilding. This order deliberately builds `editorial` as a complete, working, single-theme site first, then layers the other three skins on top of proven page structure — never build four skins for a page whose layout is still changing.

1. **Design tokens for all four themes, up front.** `theme/tokens.ts` + `theme/labels.ts` + `index.css` with all four `[data-theme]` blocks defined, even though only one renders yet. Cheap to do together now, painful to retrofit onto four already-built page sets later.
2. **`ThemeContext` + the switcher control.** Persistence (`localStorage` + `?theme=`), default-to-`editorial` guardrail, the instant no-reload swap. Build this before any page so every component is written theme-aware from the start rather than retrofitted.
3. Layout shell — `<Nav />` and `<Hero />` as `<Themed>` components, but only the `editorial` skin filled in; other three render an editorial fallback for now. Footer, page container, `react-router` routes stubbed.
4. `types.ts` + `caseStudies.ts` with one real case study + `<BlockRenderer>`. Riskiest piece; do it early, and keep it theme-agnostic per the rule above — `<BlockRenderer>` itself doesn't skin, only its parent card does.
5. Case study detail page + `<CaseStudyCard>` — `editorial` skin only.
6. Home page reading from `caseStudies.ts` — `editorial` skin only.
7. `/about`, `editorial` only.
8. `roles.ts` + `/work-history` (+ `<TimelineNode>`), then `/resume` — `editorial` only.
9. `/projects` + `/learning` — `editorial` only.
10. **Checkpoint: ship `editorial` as a complete, launchable site.** Everything above is real content on real pages — verify it against every non-negotiable below before touching theme #2. This is your fallback if time runs out; a finished one-theme site beats an unfinished four-theme one.
11. **`changelog` skins** for `Nav`, `Hero`, `CaseStudyCard`, and the case study/home/about page shells. Reuse data and routing untouched — only the presentation layer changes.
12. **`dashboard` skins**, same pattern.
13. **`journey` skins**, same pattern — plus the shared SVG path component used on home and `/work-history`.
14. Metadata — root `index.html` OG tags (editorial, per above), `react-helmet-async`, sitemap, robots.
15. Analytics — Plausible or GA4 via a script tag in `index.html`. Track which theme is active as an event property; it's a genuinely interesting thing to know about your visitors.

Steps 11–13 are independent of each other and fully droppable under time pressure — ship in that order (changelog and dashboard read as more universally professional than journey) and stop wherever you run out of hours. `/learning` remains the most droppable *page*, and is also the only one that actively decays.

### Deployment: build in Lovable, host on Vercel

Lovable can publish to `*.lovable.app` itself, so Vercel is optional — but since you're open to it, it's the better endpoint and costs nothing:

- **`vercel.app` reads more neutral than `lovable.app`** on a resume. A URL naming the AI builder you used invites a question you gain nothing from answering.
- Vercel's free tier gives better edge caching, real deploy previews, and per-branch URLs.
- If you ever do buy a domain, pointing it at Vercel is a 5-minute DNS change.
- You keep the option of migrating off Lovable entirely without changing your URL.

**Setup:** connect Lovable's GitHub sync → import that repo on Vercel → Vercel auto-detects Vite (build `npm run build`, output `dist`). Every Lovable change pushes to GitHub and auto-deploys.

**The one config you must add** — SPA routing. Without it, a direct load of `/work/some-slug` 404s on Vercel. Add `vercel.json` at the repo root:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Verify by opening a deep link in a fresh tab after deploying, not just by clicking through from the home page.

**Naming:** the Vercel project name becomes the subdomain, so create it as `khushibansal` — not `portfolio` or `my-app`.

### Working effectively in Lovable

- **Connect GitHub sync early.** It's two-way, it's your only real version control, and it's the escape hatch if you outgrow the platform. It also lets you (or me) edit files directly instead of prompting for every change.
- **Prompt in small scoped units.** "Build the work history timeline from `roles.ts`" beats "build the about, work history, and learning pages."
- **Use the AI for layout, not for content.** Never let it write your case study copy or invent metrics — a hiring manager can smell generated PM prose, and fabricated numbers are a real risk if anyone asks about them in an interview.
- **Pin content edits to the data files.** When something reads wrong, edit `src/content/*.ts` directly rather than prompting for a copy change.
- **Expect shadcn/ui defaults.** Fine for cards and buttons; override the type scale and spacing, since the default look is recognizable and reads as templated.

**Non-negotiables before launch — checked once per built theme, not once for the site:**
- Lighthouse ≥ 90 on performance, ≥ 95 accessibility, on `editorial` at minimum; spot-check the others. (SPAs pay a JS-bundle penalty; 90 is the realistic performance bar here, not 95.)
- Real keyboard navigation; visible focus states, in every theme you ship. A dashboard-style tile grid or a journey-map SVG path are exactly the layouts where custom focus handling gets forgotten.
- Every image has real `alt` text; compress to WebP before upload — no `next/image` means no automatic optimization.
- Works at 375px wide in every theme you ship — recruiters open links on phones constantly, and the journey-map path is the layout most likely to break here.
- Every case study readable with images blocked, in every theme.
- Direct-load every deep URL (e.g. `/work/some-slug`) in a fresh tab, **with each theme selected via `?theme=`** — SPA routing 404s on refresh are a classic Lovable-deploy failure, and it needs checking per theme since the query param changes the URL.
- Switching themes never causes a flash of unstyled/wrong content, layout shift, or scroll-position jump.

---

## Phase 4 — Multi-theme design system

Four live, switchable themes, same content underneath. The switcher itself is a portfolio artifact — it demonstrates you can define a design system and keep content and presentation cleanly separated, which is a real PM/product-thinking signal, not just decoration. That only holds if it's built cleanly; a half-themed site reads worse than one plain theme done well, so the architecture below is not optional scaffolding — it's the thing that makes this idea safe to ship.

### The one rule that makes this work

**Content is theme-agnostic. Presentation is not.** A case study's prose, metrics, and images are identical in all four themes — write them with zero theme-specific language ("shipped in v3.0" belongs in a label dictionary, not in your case study body). Everything that *varies* — nav labels, section headings, card treatment, color, type, motion — lives in a presentation layer keyed by theme. If you ever catch yourself editing case study copy to fit a theme, the architecture has leaked; stop and move that string into the label dictionary instead.

### Architecture

```
src/theme/
  ThemeContext.tsx     React context: current theme id, setter, persistence
  tokens.ts            Per-theme design tokens (color, type scale, radii, motion)
  labels.ts            Per-theme string dictionary (nav items, section headers, empty states)
  index.css            CSS custom properties per theme, scoped under [data-theme="…"]

src/components/skins/
  Hero.changelog.tsx   Hero.dashboard.tsx   Hero.journey.tsx   Hero.editorial.tsx
  CaseStudyCard.*.tsx  (one per theme)
  Nav.*.tsx            (one per theme)
  TimelineNode.*.tsx   (one per theme — only used by /work-history)
```

- **Theme ids:** `changelog` | `dashboard` | `journey` | `editorial`.
- **One `<Themed>` switch component** per themed UI element (`<Hero />`, `<CaseStudyCard />`, `<Nav />`…) that reads the current theme from context and renders the matching skin. Pages call `<Hero />`, never `<Hero.changelog />` directly — pages don't know which theme is active.
- **Tokens over inline styles.** Colors, spacing, and type live as CSS variables swapped by `[data-theme]`, the same pattern used for light/dark mode — so each skin component styles with `var(--accent)`, not a hardcoded hex, and a token tweak doesn't mean touching four components.
- **Labels are data, not JSX.** `labels.changelog.work = "Releases"`, `labels.journey.work = "The Path"`, etc. Pages render `{t.work}`, never a literal string — this is what lets one page template serve four themes without four copies of the page.
- **Persistence:** store the chosen theme in `localStorage`. Also support `?theme=journey` in the URL, so you can send a fintech recruiter the Editorial link and a consumer/gaming company the Journey Map link without them having to discover the switcher themselves.

This is real engineering scope, not styling — budget for it explicitly in Phase 3 rather than treating it as a Phase 4 add-on (see updated build order below).

### The four themes

**1. `changelog` — Release Notes**
Your career as shipped product versions.
- Type: monospace or near-mono for metadata (dates, version tags), clean sans for body.
- Color: terminal-adjacent — dark or off-white background, one signal color for "Added" vs. a muted tone for "Changed."
- Nav: *Releases · Roadmap (work history) · About · Resume.*
- Motif: version badges (`v3.0`), diff-style bullets (`+` for shipped, `~` for changed), a "currently shipping" status line on home.
- Where it's strongest: fintech, infra, dev-tools, or any company that will recognize the format immediately.

**2. `dashboard` — Mission Control**
The site as a live internal tool.
- Type: tight, functional sans (Inter/system), small caps for labels, tabular numerals for metrics.
- Color: light neutral background, bordered card tiles, one status-green / status-amber pairing used consistently (not decoratively).
- Nav: tab-style — *Overview · Logs · About · Resume.*
- Motif: metric tiles, thin progress bars, a status dot ("open to roles"), last-updated timestamps.
- Guardrail: no chart exists unless it encodes a real number from your content data — a fake sparkline is the fastest way this theme reads as gimmick instead of fluency.

**3. `journey` — Journey Map**
Career and case studies as nodes on a path.
- Type: warm sans, slightly larger scale — this theme leans human/narrative more than the other three.
- Color: one path/line color, filled nodes for "done," an outlined node for "now," a faint one for "next."
- Nav: *The Path · Chapters (work) · About · Resume.*
- Motif: an SVG path connecting milestones (career + case studies share one path on `/work-history`), a "you are here" marker.
- Where it's strongest: if your career has a clear arc worth narrating (a switch into PM, an unconventional route) — the theme structurally rewards that story and structurally exposes a flat one, so be honest with yourself about which you have.

**4. `editorial` — Documentary Profile (default)**
Not gamified — the counterweight to the other three, and the one shown to anyone who arrives without picking a theme.
- Type: a real display serif for headings, generous size, system sans body. This is the one place a slightly indulgent type choice is earned.
- Color: near-black on off-white, single accent used only for links.
- Nav: *Work · About · Resume* — minimal on purpose.
- Motif: numbered chapters, pull quotes lifted verbatim from your own case study copy, magazine-style cover treatment on home.
- **This is the load-bearing theme.** It's the default on first visit, the one described in the root OG tags (see Phase 3), and the fallback anyone lands on from a bare link. Build and polish it first and best — the other three are the delight a returning or exploring visitor finds, not the first impression.

### Guardrails

- **Default is `editorial`, always**, regardless of `localStorage`, until a visitor actively picks something else. A cold visitor should never land on Mission Control by chance.
- **The switcher itself stays quiet** — a small control in the header or footer, not a hero-level callout. It's a thing to discover, not the pitch.
- **Switching is instant**, no full page reload, no layout shift, no loading spinner. If it feels janky it undercuts the exact competence it's meant to signal.
- **Test all four independently** for contrast, keyboard nav, and focus states — see the expanded non-negotiables below. A theme that fails accessibility is worse than not having built it.
- **Motion:** fade/slide-in on scroll at most, in every theme. Respect `prefers-reduced-motion` globally, not per-theme.

> **Update, 2026-09-12:** A 5th theme, `poster` (forest + marigold, zine-cover treatment, real photos), was added later and became the default after the user reviewed it and preferred it over `editorial`. The "editorial is the only safe cold-visitor default" guardrail above no longer holds — `poster` is now what cold visitors, link previews, and OG scrapers see. `DEFAULT_THEME` in `ThemeContext.tsx` reflects this. Known gap: `poster`'s About/Home/Projects copy was run through a dash-elimination/humanize pass that the other four themes' copy was *not*, so content is no longer identical across themes for those pages — worth knowing before editing that copy again. `og-cover.png` is still an unmade placeholder; it should be a Poster-style image once created, not editorial's.

---

## Phase 5 — Launch

1. Deploy to Vercel, confirm the subdomain is the one you want, and direct-load 3–4 deep URLs in fresh tabs to prove the SPA rewrite works.
2. Check the OG preview by pasting the link into Slack/iMessage/LinkedIn — this is the first thing a referrer sees, and on an SPA it's the thing most likely to be silently wrong. Use LinkedIn's Post Inspector to force a re-scrape after any fix; it caches aggressively.
3. Proofread out loud. Typos in a PM portfolio read as carelessness about detail.
4. Send to 3 people — one PM, one recruiter, one person outside tech — and ask each: *"After 60 seconds, what do you think I do and am I good at it?"* Fix whatever the answers get wrong.
5. Add the URL to LinkedIn, resume header, email signature.

---

## Suggested sequencing

| Session | Work |
|---|---|
| 1 | Phase 0 decisions + Phase 1 content shaping for case study #1 |
| 2 | Content shaping #2 and #3 |
| 3 | Theme tokens/labels for all 4 + `ThemeContext`/switcher (build steps 1–2) |
| 4 | Layout shell + `caseStudies.ts`/`<BlockRenderer>`, `editorial` only (steps 3–4) |
| 5 | Case study template + home page, `editorial` only (steps 5–6) |
| 6 | `/about`, `editorial` only (step 7) |
| 7 | `roles.ts`, `/work-history` + `/resume`, `editorial` only (step 8) |
| 8 | `/projects` + `/learning`, `editorial` only (step 9) |
| 9 | **Checkpoint** — full non-negotiables pass on `editorial` alone (step 10) |
| 10 | `changelog` skins across all built pages (step 11) |
| 11 | `dashboard` skins (step 12) |
| 12 | `journey` skins + shared path component (step 13) |
| 13 | Metadata, analytics, cross-theme polish, Lighthouse ×4, launch (steps 14–15 + Phase 5) |

Roughly 38–48 focused hours — the theme system adds ~16–20 hours on top of the single-theme estimate, almost entirely in sessions 10–12 (skinning three more presentation layers over already-built page structure). Content work stays the same size; it's paid once regardless of theme count, which is the whole point of the content/presentation split in Phase 4.

**Writing load, honestly:** the four added pages are perhaps 4 hours of code and 6–8 hours of writing, independent of theming. `/about` and the `/learning` "currently learning" section are the slow ones — they need drafting and rereading, not just filling in fields. The theme label dictionaries (Phase 4) add a smaller writing task — four sets of nav/section copy — but it's naming, not prose, and goes fast once the tone per theme is settled.

**If time runs out:** stop after session 9. A complete, polished, single-theme (`editorial`) site is a strictly better outcome than a rushed four-theme one — sessions 10–12 are additive delight, not required for the site to do its job.

---

## Open items

- Confirm `khushibansal.vercel.app` is available; pick the fallback now if not.
- Whether `/writing` ships in v1 (recommendation: no; add it once you have two posts).
- Whether any case study needs anonymizing.
- Which side projects are demoable — determines whether `/projects` is a strength or filler.
- Whether you'll realistically maintain `/learning` — if not, fold the skills table into `/about` and skip the page.
- Whether 38–48 hours is realistic given your timeline — if not, the honest cut is sessions 10–12 (three of the four themes), not a page.
- Final tone/copy for each theme's label dictionary — nav names and section headers above are drafts, not locked.

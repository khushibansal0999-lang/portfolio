# Adding content

Everything on the site is plain TypeScript data in `src/content/`. No CMS, no database.
Add an entry to the right file, save, and it appears in every theme at once. Nothing in
`src/pages/` needs touching.

```bash
npm run dev
```

Then open http://localhost:5173/projects to see the work library.

## The five categories

The work library on `/projects` is divided into these, in this order. Labels and blurbs
live in `src/content/categories.ts`, and only categories that have at least one entry
show up on the page, so you can add the category first and fill it later.

| `category` id     | Section on the site           | What goes here |
| ----------------- | ----------------------------- | -------------- |
| `case-study`      | Case studies                  | End-to-end product work: research → decision → artifact → outcome |
| `build`           | Builds & prototypes           | Things you designed and shipped yourself |
| `teardown`        | Product teardowns             | An existing product pulled apart |
| `market-analysis` | Market & competitive analysis | Market sizing, competitor landscapes, positioning |
| `ux-analysis`     | UX analysis                   | A flow or interface read closely, with a proposed fix |

To add a sixth category: add the id to `WorkCategory` in `src/content/types.ts`, then add
a row to `WORK_CATEGORIES` in `src/content/categories.ts`. TypeScript will tell you if you
miss one of the two.

## Adding a teardown, market analysis, or UX analysis

These all use the same shape. Add to the `projects` array in `src/content/projects.ts`:

```ts
{
  slug: 'notion-pricing-analysis',        // becomes /projects/notion-pricing-analysis
  title: 'Notion Pricing Analysis',
  summary: 'One or two sentences. This is what shows on the card.',
  category: 'market-analysis',            // picks the section it lands in
  status: 'Experiment',                   // 'Live' | 'Archived' | 'Experiment'
  stack: ['Competitive analysis', 'Pricing'],  // shows as pills on the card
  timeframe: 'October 2026',
  hasDetail: true,                        // true = gets its own page at /projects/<slug>

  // Optional, all of these:
  cover: '/projects/notion-cover.webp',   // file lives in public/projects/
  liveUrl: 'https://…',                   // only if there is something to open
  decks: [{ href: '/decks/notion-analysis.pdf', label: 'View full deck' }],
  whyBuiltLabel: 'Scope & lens',          // renames the first section on the detail page
  whyBuilt: 'The long body text for the first section.',
  lessonLabel: 'The recommendation',      // renames the second section
  lesson: 'The long body text for the second section.',
  screens: [
    { src: '/projects/notion-tiers.webp', alt: 'Describe the image for screen readers' },
  ],
}
```

`hasDetail: false` makes it a card only, with no page of its own. Use that when the
summary plus a link is the whole thing.

## Adding a case study

Case studies are longer and structured as blocks. Add to `caseStudies` in
`src/content/caseStudies.ts`:

```ts
{
  slug: 'my-case-study',                  // becomes /work/my-case-study
  title: 'My Case Study',
  summary: 'The headline claim, with the number in it if there is one.',
  role: 'What you owned, and whether it was solo',
  timeframe: 'September 2026',
  tags: ['0→1', 'Research'],
  isIndependent: true,
  category: 'case-study',                 // optional, defaults to 'case-study'
  heroMetric: { label: 'What moved', value: '18% → 35%' },
  decks: [{ href: '/decks/my-prd.pdf', label: 'View PRD' }],
  blocks: [
    { kind: 'heading', text: 'Context' },
    { kind: 'paragraph', text: '…' },
    { kind: 'list', items: ['…', '…'] },
    { kind: 'metrics', items: [{ label: 'Never returned', value: '78%', baseline: 'optional' }] },
    { kind: 'image', src: '/projects/x.webp', alt: 'required', caption: 'optional' },
    { kind: 'quote', text: '…', attribution: 'optional' },
    { kind: 'link', href: 'https://…', text: 'Open the prototype →' },
  ],
}
```

Case studies appear both on the home page and in the Case studies section of the work
library, automatically.

## Adding files

- **PDFs** (decks, PRDs, teardowns) go in `public/decks/`. Reference them as
  `/decks/name.pdf`. They open inline in a new browser tab, no download prompt.
- **Images** go in `public/projects/`. Reference them as `/projects/name.webp`.
  Export as WebP, around 1400px wide. Always write a real `alt` description.

## Changing what roles you are open to

`src/content/availability.ts` is the only place that says it. Every status badge, hero
line, and contact block on all five themes reads from that file.

## House style

No em dashes anywhere in site copy. Use a colon, a full stop, or a comma instead. En
dashes in number ranges (`15–25`, `2022–23`) are fine.

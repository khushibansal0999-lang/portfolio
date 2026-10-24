// Writes COPY.md: every word of written content on the site, in one editable file.
//
//   npm run export:copy
//
// Each block carries an [id] that maps back to the exact field in src/content/.
// Edit the prose, leave the ids alone, and hand the file back to Claude to apply.
// Regenerating overwrites COPY.md, so apply your edits to the code before re-running.

import { writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { createServer } from 'vite'

const root = resolve(import.meta.dirname, '..')

// The content modules are TypeScript using the @/ alias, so load them through
// Vite itself rather than reimplementing the resolution.
async function loadContent() {
  const server = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'silent',
  })
  try {
    const [roles, caseStudies, projects, pageCopy, availability, categories, labels] =
      await Promise.all([
        server.ssrLoadModule('/src/content/roles.ts'),
        server.ssrLoadModule('/src/content/caseStudies.ts'),
        server.ssrLoadModule('/src/content/projects.ts'),
        server.ssrLoadModule('/src/content/pageCopy.ts'),
        server.ssrLoadModule('/src/content/availability.ts'),
        server.ssrLoadModule('/src/content/categories.ts'),
        server.ssrLoadModule('/src/theme/labels.ts'),
      ])
    return {
      roles: roles.roles,
      education: roles.education,
      leadership: roles.leadership,
      caseStudies: caseStudies.caseStudies,
      projects: projects.projects,
      pageCopy: pageCopy.pageCopy,
      availability: availability.availability,
      WORK_CATEGORIES: categories.WORK_CATEGORIES,
      labels: labels.labels,
      THEME_META: labels.THEME_META,
    }
  } finally {
    await server.close()
  }
}

const out = []
const push = (s = '') => out.push(s)

/** One editable block: a heading, its id, and the text. */
function field(id, label, value) {
  if (value === undefined || value === null || value === '') return
  push(`#### ${label}`)
  push(`\`[${id}]\``)
  push()
  if (Array.isArray(value)) {
    for (const item of value) {
      if (typeof item === 'string') push(`- ${item}`)
      else if (item.lead) push(`- **${item.lead}** ${item.text}`)
      else push(`- ${item.text}`)
    }
  } else {
    push(value)
  }
  push()
}

const c = await loadContent()

push('# Site copy')
push()
push(`_Generated from the code on ${new Date().toISOString().slice(0, 10)} by \`npm run export:copy\`._`)
push()
push('This is every word of written content on the site. Edit the text freely. **Leave the')
push('`[id]` lines alone.** They are how each block maps back to the code. When you are done,')
push('give this file back to Claude and say which sections you changed.')
push()
push('Two house rules the site already follows, worth keeping as you edit:')
push()
push('- No em dashes. Use a colon, a full stop, or a comma.')
push('- Nothing framed as an absence ("no PM on the team"). Say what you owned instead.')
push()
push('Anything marked **all themes** appears on every theme at once. The site has five themes')
push('and they share all prose; only the labels in the last section differ between them.')
push()
push('---')
push()

/* ---------------- availability ---------------- */
push('## What I am open to')
push()
push('_`src/content/availability.ts`. Drives every status badge and contact block, all themes._')
push()
field('availability.headline', 'Headline', c.availability.headline)
field('availability.headlineShort', 'Short version (pills, tight spaces)', c.availability.headlineShort)
field('availability.modesLine', 'Work modes', c.availability.modesLine)
field('availability.base', 'Based in', c.availability.base)
push('---')
push()

/* ---------------- home ---------------- */
push('## Home page')
push()
push('_`src/content/pageCopy.ts` → `home`. All themes._')
push()
const h = c.pageCopy.home
field('home.tagline', 'Tagline under the name', h.tagline)
field('home.intro', 'Opening paragraph', h.intro)
field('home.photoCaption', 'Caption under the hero photo', h.photoCaption)
field('home.greetingLine1', 'Greeting, line 1', h.greetingLine1)
field('home.greetingLine2', 'Greeting, line 2', h.greetingLine2)
field('home.arc', 'The "Hello, I\'m Khushi" paragraph', h.arc)
field('home.caseStudyTags', 'Tags under the case studies box', h.caseStudyTags)
field('home.toolkit.product', 'Toolkit, product column', h.toolkit.product)
field('home.toolkit.technical', 'Toolkit, technical column', h.toolkit.technical)
field('home.howIWork', 'How I work, short version', h.howIWork)
field('home.outside', 'Outside work', h.outside)
push('### Section headings')
push()
for (const [k, v] of [
  ['home.contactHeading', h.contactHeading],
  ['home.trackRecordHeading', h.trackRecordHeading],
  ['home.caseStudiesHeading', h.caseStudiesHeading],
  ['home.toolkitHeading', h.toolkitHeading],
  ['home.shippedHeading', h.shippedHeading],
  ['home.howIWorkHeading', h.howIWorkHeading],
  ['home.outsideHeading', h.outsideHeading],
]) {
  push(`- \`[${k}]\` ${v}`)
}
push()
push('---')
push()

/* ---------------- about ---------------- */
push('## About page')
push()
push('_`src/content/pageCopy.ts` → `about`. All themes._')
push()
const a = c.pageCopy.about
field('about.intro', 'Opening paragraph', a.intro)
field('about.arc', 'The arc', a.arc)
field('about.howIWork', 'How I work (bold lead sentence is optional, written as **bold**)', a.howIWork)
field('about.stillBuilding', "What I'm still building", a.stillBuilding)
field('about.outside', 'Outside work', a.outside)
push('### Section headings and links')
push()
for (const [k, v] of [
  ['about.arcHeading', a.arcHeading],
  ['about.howIWorkHeading', a.howIWorkHeading],
  ['about.stillBuildingHeading', a.stillBuildingHeading],
  ['about.outsideHeading', a.outsideHeading],
  ['about.timelineLink', a.timelineLink],
  ['about.projectsLink', a.projectsLink],
]) {
  push(`- \`[${k}]\` ${v}`)
}
push()
push('---')
push()

/* ---------------- work page ---------------- */
push('## Work page')
push()
push('_`src/content/pageCopy.ts` → `work`, and `src/content/categories.ts` for the sections._')
push()
field('work.intro', 'Opening paragraph', c.pageCopy.work.intro)
field('work.seoDescription', 'Search/social description', c.pageCopy.work.seoDescription)
push('### Category sections')
push()
push('Empty categories stay hidden until something is filed under them.')
push()
for (const cat of c.WORK_CATEGORIES) {
  push(`#### ${cat.label}`)
  push(`\`[category.${cat.id}.label]\` ${cat.label}`)
  push()
  push(`\`[category.${cat.id}.blurb]\``)
  push()
  push(cat.blurb)
  push()
}
push('---')
push()

/* ---------------- resume ---------------- */
push('## Resume page')
push()
push('_`src/content/pageCopy.ts` → `resume`, and `src/content/roles.ts` for the entries below._')
push()
field('resume.summary', 'Summary paragraph', c.pageCopy.resume.summary)
push('---')
push()

/* ---------------- roles ---------------- */
push('## Experience and timeline')
push()
push('_`src/content/roles.ts`. Shows on the Resume page, the Work History page, and the home timeline._')
push()
for (const r of c.roles) {
  push(`### ${r.company}`)
  push()
  push(`\`[role.${r.id}.title]\` ${r.title}`)
  push()
  push(`\`[role.${r.id}.dates]\` ${r.start} to ${r.end} · ${r.location}`)
  push()
  if (r.companyBlurb) {
    push(`\`[role.${r.id}.companyBlurb]\``)
    push()
    push(r.companyBlurb)
    push()
  }
  push(`\`[role.${r.id}.scope]\``)
  push()
  push(r.scope)
  push()
  push(`\`[role.${r.id}.bullets]\``)
  push()
  r.bullets.forEach((b, i) => push(`${i + 1}. ${b.text}`))
  push()
}
push('### Education')
push()
c.education.forEach((e) => {
  push(`- \`[education.${e.school.split(' ')[0].toLowerCase()}]\` **${e.degree}** · ${e.school}${e.detail ? ` (${e.detail})` : ''} · ${e.date}`)
})
push()
push('### Leadership')
push()
push('`[leadership]`')
push()
c.leadership.forEach((l) => push(`- ${l}`))
push()
push('---')
push()

/* ---------------- case studies ---------------- */
push('## Case studies')
push()
push('_`src/content/caseStudies.ts`. The long-form pages at `/work/<slug>`._')
push()
for (const cs of c.caseStudies) {
  push(`### ${cs.title}`)
  push()
  push(`\`[case.${cs.slug}.title]\` ${cs.title}`)
  push()
  push(`\`[case.${cs.slug}.summary]\``)
  push()
  push(cs.summary)
  push()
  push(`\`[case.${cs.slug}.role]\` ${cs.role}`)
  push()
  push(`\`[case.${cs.slug}.timeframe]\` ${cs.timeframe}`)
  push()
  push(`\`[case.${cs.slug}.tags]\` ${cs.tags.join(', ')}`)
  push()
  if (cs.heroMetric) {
    push(`\`[case.${cs.slug}.heroMetric]\` **${cs.heroMetric.value}** ${cs.heroMetric.label}`)
    push()
  }
  push(`\`[case.${cs.slug}.blocks]\` the body, block by block:`)
  push()
  cs.blocks.forEach((b, i) => {
    const id = `case.${cs.slug}.block${i + 1}`
    switch (b.kind) {
      case 'heading':
        push(`**${i + 1}. Heading** \`[${id}]\``)
        push()
        push(`## ${b.text}`)
        break
      case 'paragraph':
        push(`**${i + 1}. Paragraph** \`[${id}]\``)
        push()
        push(b.text)
        break
      case 'list':
        push(`**${i + 1}. List** \`[${id}]\``)
        push()
        b.items.forEach((item) => push(`- ${item}`))
        break
      case 'metrics':
        push(`**${i + 1}. Metric tiles** \`[${id}]\``)
        push()
        b.items.forEach((m) => push(`- **${m.value}** ${m.label}${m.baseline ? ` (${m.baseline})` : ''}`))
        break
      case 'image':
        push(`**${i + 1}. Image** \`[${id}]\` (file: \`${b.src}\`)`)
        push()
        push(`- alt: ${b.alt}`)
        if (b.caption) push(`- caption: ${b.caption}`)
        break
      case 'quote':
        push(`**${i + 1}. Quote** \`[${id}]\``)
        push()
        push(`> ${b.text}${b.attribution ? ` (${b.attribution})` : ''}`)
        break
      case 'link':
        push(`**${i + 1}. Link** \`[${id}]\` (href: \`${b.href}\`)`)
        push()
        push(`- text: ${b.text}`)
        break
    }
    push()
  })
  if (cs.decks?.length) {
    push(`\`[case.${cs.slug}.decks]\` ${cs.decks.map((d) => `${d.label} (${d.href})`).join(', ')}`)
    push()
  }
}
push('---')
push()

/* ---------------- projects ---------------- */
push('## Work entries')
push()
push('_`src/content/projects.ts`. The tiles on the Work page and the pages at `/projects/<slug>`._')
push()
for (const p of c.projects) {
  push(`### ${p.title}`)
  push()
  push(`\`[project.${p.slug}.title]\` ${p.title}`)
  push()
  push(`\`[project.${p.slug}.category]\` ${p.category} · \`[project.${p.slug}.status]\` ${p.status}${p.timeframe ? ` · \`[project.${p.slug}.timeframe]\` ${p.timeframe}` : ''}`)
  push()
  push(`\`[project.${p.slug}.tags]\` ${p.stack.join(', ')}`)
  push()
  push(`\`[project.${p.slug}.summary]\``)
  push()
  push(p.summary)
  push()
  if (p.whyBuilt) {
    push(`\`[project.${p.slug}.whyBuilt]\` section heading: ${p.whyBuiltLabel ?? 'Why I built it'}`)
    push()
    push(p.whyBuilt)
    push()
  }
  if (p.lesson) {
    push(`\`[project.${p.slug}.lesson]\` section heading: ${p.lessonLabel ?? "What I'd do differently"}`)
    push()
    push(p.lesson)
    push()
  }
  if (p.screens?.length) {
    push(`\`[project.${p.slug}.screens]\``)
    push()
    p.screens.forEach((s) => push(`- \`${s.src}\` alt: ${s.alt}`))
    push()
  }
}
push('---')
push()

/* ---------------- theme labels ---------------- */
push('## Theme labels')
push()
push('_`src/theme/labels.ts`. The only copy that differs between themes: nav items, buttons,')
push('and section names. Everything above is shared._')
push()
for (const [id, l] of Object.entries(c.labels)) {
  push(`### ${c.THEME_META[id].name} (${c.THEME_META[id].description})`)
  push()
  push(`- \`[labels.${id}.nav]\` ${l.nav.work} · ${l.nav.about} · ${l.nav.projects} · ${l.nav.resume}`)
  push(`- \`[labels.${id}.ctaEmail]\` ${l.home.ctaEmail}`)
  push(`- \`[labels.${id}.workHeading]\` ${l.home.workHeading}`)
  push(`- \`[labels.${id}.metricsHeading]\` ${l.caseStudy.metricsHeading}`)
  push(`- \`[labels.${id}.backToWork]\` ${l.caseStudy.backToWork}`)
  push(`- \`[labels.${id}.nowLabel]\` ${l.workHistory.nowLabel}`)
  push(`- \`[labels.${id}.pageHeading]\` ${l.workHistory.pageHeading}`)
  push(`- \`[labels.${id}.statusBadge]\` ${l.statusBadge}`)
  push()
}
push('---')
push()
push('## Footer')
push()
field('footer.posterHeadline', 'Closing line (Poster theme)', c.pageCopy.footer.posterHeadline)

await writeFile(join(root, 'COPY.md'), out.join('\n').replace(/\n{3,}/g, '\n\n'))
console.log('Wrote COPY.md')

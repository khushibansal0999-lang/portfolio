// Builds one block model of every word on the site, then renders it twice:
//
//   COPY.md    for reading in the repo and diffing
//   COPY.json  the same model, which scripts/export_copy_docx.py turns into COPY.docx
//
//   npm run export:copy
//
// Each editable block carries an [id] that maps back to the exact field in
// src/content/. Edit the prose, leave the ids alone, and hand the file back to
// Claude to apply. Regenerating overwrites both files, so apply your edits to
// the code before re-running.

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

/* ---------------- block model ---------------- */

const blocks = []
const B = {
  title: (text) => blocks.push({ kind: 'title', text }),
  h1: (text) => blocks.push({ kind: 'h1', text }),
  h2: (text) => blocks.push({ kind: 'h2', text }),
  h3: (text) => blocks.push({ kind: 'h3', text }),
  /** Grey italic pointer at the source file. Not editable copy. */
  note: (text) => blocks.push({ kind: 'note', text }),
  para: (text) => blocks.push({ kind: 'para', text }),
  rule: () => blocks.push({ kind: 'rule' }),
  /** A label, its [id], and the editable text under it. */
  field(id, label, value) {
    if (value === undefined || value === null || value === '') return
    blocks.push({ kind: 'field', id, label })
    if (Array.isArray(value)) {
      blocks.push({
        kind: 'bullets',
        items: value.map((v) => (typeof v === 'string' ? { text: v } : { lead: v.lead, text: v.text })),
      })
    } else {
      blocks.push({ kind: 'para', text: value })
    }
  },
  /** Short one-line values: id and text on the same line. */
  inline: (id, text) => blocks.push({ kind: 'inline', id, text }),
  bullets: (items) => blocks.push({ kind: 'bullets', items: items.map((t) => (typeof t === 'string' ? { text: t } : t)) }),
  numbered: (items) => blocks.push({ kind: 'numbered', items }),
  quote: (text) => blocks.push({ kind: 'quote', text }),
}

const c = await loadContent()

B.title('Site copy')
B.note(`Generated from the code on ${new Date().toISOString().slice(0, 10)} by npm run export:copy`)
B.para(
  'This is every word of written content on the site. Edit the text freely. Leave the [id] lines alone: they are how each block maps back to the code. When you are done, send this file back to Claude and say which sections you changed.',
)
B.para('Two house rules the site already follows, worth keeping as you edit:')
B.bullets([
  'No em dashes. Use a colon, a full stop, or a comma.',
  'Nothing framed as an absence ("no PM on the team"). Say what you owned instead.',
])
B.para(
  'The site has five themes and they share all of this prose, so one change here lands on every theme. Only the labels in the last section differ between themes.',
)
B.rule()

/* ---------------- availability ---------------- */
B.h1('What I am open to')
B.note('src/content/availability.ts. Drives every status badge and contact block.')
B.field('availability.headline', 'Headline', c.availability.headline)
B.field('availability.headlineShort', 'Short version, for pills and tight spaces', c.availability.headlineShort)
B.field('availability.modesLine', 'Work modes', c.availability.modesLine)
B.field('availability.base', 'Based in', c.availability.base)
B.rule()

/* ---------------- home ---------------- */
const h = c.pageCopy.home
B.h1('Home page')
B.note('src/content/pageCopy.ts, home')
B.field('home.tagline', 'Tagline under the name', h.tagline)
B.field('home.intro', 'Opening paragraph', h.intro)
B.field('home.photoCaption', 'Caption under the hero photo', h.photoCaption)
B.field('home.greetingLine1', 'Greeting, line 1', h.greetingLine1)
B.field('home.greetingLine2', 'Greeting, line 2', h.greetingLine2)
B.field('home.arc', 'The "Hello, I\'m Khushi" paragraph', h.arc)
B.field('home.caseStudyTags', 'Tags under the case studies box', h.caseStudyTags)
B.field('home.toolkit.product', 'Toolkit, product column', h.toolkit.product)
B.field('home.toolkit.technical', 'Toolkit, technical column', h.toolkit.technical)
B.field('home.howIWork', 'How I work, short version for the home page', h.howIWork)
B.field('home.outside', 'Outside work', h.outside)
B.h3('Section headings')
for (const [id, text] of [
  ['home.contactHeading', h.contactHeading],
  ['home.trackRecordHeading', h.trackRecordHeading],
  ['home.caseStudiesHeading', h.caseStudiesHeading],
  ['home.toolkitHeading', h.toolkitHeading],
  ['home.shippedHeading', h.shippedHeading],
  ['home.howIWorkHeading', h.howIWorkHeading],
  ['home.outsideHeading', h.outsideHeading],
]) {
  B.inline(id, text)
}
B.rule()

/* ---------------- about ---------------- */
const a = c.pageCopy.about
B.h1('About page')
B.note('src/content/pageCopy.ts, about')
B.field('about.intro', 'Opening paragraph', a.intro)
B.field('about.arc', 'The arc', a.arc)
B.field('about.howIWork', 'How I work. A bold opening sentence is optional.', a.howIWork)
B.field('about.stillBuilding', "What I'm still building", a.stillBuilding)
B.field('about.outside', 'Outside work', a.outside)
B.h3('Section headings and links')
for (const [id, text] of [
  ['about.arcHeading', a.arcHeading],
  ['about.howIWorkHeading', a.howIWorkHeading],
  ['about.stillBuildingHeading', a.stillBuildingHeading],
  ['about.outsideHeading', a.outsideHeading],
  ['about.timelineLink', a.timelineLink],
  ['about.projectsLink', a.projectsLink],
]) {
  B.inline(id, text)
}
B.rule()

/* ---------------- work page ---------------- */
B.h1('Work page')
B.note('src/content/pageCopy.ts work, and src/content/categories.ts for the sections')
B.field('work.intro', 'Opening paragraph', c.pageCopy.work.intro)
B.field('work.seoDescription', 'Search and social description', c.pageCopy.work.seoDescription)
B.h3('Category sections')
B.para('Empty categories stay hidden until something is filed under them.')
for (const cat of c.WORK_CATEGORIES) {
  B.inline(`category.${cat.id}.label`, cat.label)
  B.field(`category.${cat.id}.blurb`, `${cat.label}: section blurb`, cat.blurb)
}
B.rule()

/* ---------------- resume ---------------- */
B.h1('Resume page')
B.note('src/content/pageCopy.ts resume, and src/content/roles.ts for the entries below')
B.field('resume.summary', 'Summary paragraph', c.pageCopy.resume.summary)
B.rule()

/* ---------------- roles ---------------- */
B.h1('Experience and timeline')
B.note('src/content/roles.ts. Shows on the Resume page, the Work History page, and the home timeline.')
for (const r of c.roles) {
  B.h2(r.company)
  B.inline(`role.${r.id}.title`, r.title)
  B.inline(`role.${r.id}.dates`, `${r.start} to ${r.end} · ${r.location}`)
  if (r.companyBlurb) B.field(`role.${r.id}.companyBlurb`, 'Company, one line', r.companyBlurb)
  B.field(`role.${r.id}.scope`, 'Scope', r.scope)
  B.field(`role.${r.id}.bullets`, 'Bullets', r.bullets.map((b) => b.text))
}
B.h2('Education')
for (const e of c.education) {
  B.inline(
    `education.${e.school.split(' ')[0].toLowerCase()}`,
    `${e.degree} · ${e.school}${e.detail ? ` (${e.detail})` : ''} · ${e.date}`,
  )
}
B.h2('Leadership')
B.field('leadership', 'Entries', c.leadership)
B.rule()

/* ---------------- case studies ---------------- */
B.h1('Case studies')
B.note('src/content/caseStudies.ts. The long-form pages at /work/<slug>.')
for (const cs of c.caseStudies) {
  B.h2(cs.title)
  B.inline(`case.${cs.slug}.title`, cs.title)
  B.field(`case.${cs.slug}.summary`, 'Summary', cs.summary)
  B.inline(`case.${cs.slug}.role`, cs.role)
  B.inline(`case.${cs.slug}.timeframe`, cs.timeframe)
  B.inline(`case.${cs.slug}.tags`, cs.tags.join(', '))
  if (cs.heroMetric) B.inline(`case.${cs.slug}.heroMetric`, `${cs.heroMetric.value} — ${cs.heroMetric.label}`.replace(' — ', ': '))
  B.h3('Body')
  cs.blocks.forEach((b, i) => {
    const id = `case.${cs.slug}.block${i + 1}`
    const n = i + 1
    switch (b.kind) {
      case 'heading':
        B.field(id, `${n}. Section heading`, b.text)
        break
      case 'paragraph':
        B.field(id, `${n}. Paragraph`, b.text)
        break
      case 'list':
        B.field(id, `${n}. List`, b.items)
        break
      case 'metrics':
        B.field(
          id,
          `${n}. Metric tiles`,
          b.items.map((m) => `${m.value} — ${m.label}${m.baseline ? ` (${m.baseline})` : ''}`.replace(' — ', ': ')),
        )
        break
      case 'image':
        B.field(id, `${n}. Image (${b.src})`, [
          `alt text: ${b.alt}`,
          ...(b.caption ? [`caption: ${b.caption}`] : []),
        ])
        break
      case 'quote':
        blocks.push({ kind: 'field', id, label: `${n}. Quote` })
        B.quote(`${b.text}${b.attribution ? ` (${b.attribution})` : ''}`)
        break
      case 'link':
        B.field(id, `${n}. Link (${b.href})`, b.text)
        break
    }
  })
  if (cs.decks?.length) {
    B.inline(`case.${cs.slug}.decks`, cs.decks.map((d) => `${d.label} (${d.href})`).join(', '))
  }
}
B.rule()

/* ---------------- projects ---------------- */
B.h1('Work entries')
B.note('src/content/projects.ts. The tiles on the Work page and the pages at /projects/<slug>.')
for (const p of c.projects) {
  B.h2(p.title)
  B.inline(`project.${p.slug}.title`, p.title)
  B.inline(
    `project.${p.slug}.meta`,
    `${p.category} · ${p.status}${p.timeframe ? ` · ${p.timeframe}` : ''}`,
  )
  B.inline(`project.${p.slug}.tags`, p.stack.join(', '))
  B.field(`project.${p.slug}.summary`, 'Summary, shown on the tile', p.summary)
  if (p.whyBuilt) {
    B.field(`project.${p.slug}.whyBuilt`, `First section, heading "${p.whyBuiltLabel ?? 'Why I built it'}"`, p.whyBuilt)
  }
  if (p.lesson) {
    B.field(`project.${p.slug}.lesson`, `Second section, heading "${p.lessonLabel ?? "What I'd do differently"}"`, p.lesson)
  }
  if (p.screens?.length) {
    B.field(`project.${p.slug}.screens`, 'Image alt text', p.screens.map((s) => `${s.src}: ${s.alt}`))
  }
}
B.rule()

/* ---------------- theme labels ---------------- */
B.h1('Theme labels')
B.note(
  'src/theme/labels.ts. The only copy that differs between themes: nav items, buttons and section names. Everything above is shared.',
)
for (const [id, l] of Object.entries(c.labels)) {
  B.h2(`${c.THEME_META[id].name}: ${c.THEME_META[id].description}`)
  B.inline(`labels.${id}.nav`, `${l.nav.work} · ${l.nav.about} · ${l.nav.projects} · ${l.nav.resume}`)
  B.inline(`labels.${id}.ctaEmail`, l.home.ctaEmail)
  B.inline(`labels.${id}.workHeading`, l.home.workHeading)
  B.inline(`labels.${id}.metricsHeading`, l.caseStudy.metricsHeading)
  B.inline(`labels.${id}.backToWork`, l.caseStudy.backToWork)
  B.inline(`labels.${id}.nowLabel`, l.workHistory.nowLabel)
  B.inline(`labels.${id}.pageHeading`, l.workHistory.pageHeading)
  B.inline(`labels.${id}.statusBadge`, l.statusBadge)
}
B.rule()

B.h1('Footer')
B.field('footer.posterHeadline', 'Closing line, Poster theme', c.pageCopy.footer.posterHeadline)

/* ---------------- markdown renderer ---------------- */

function toMarkdown(model) {
  const out = []
  for (const b of model) {
    switch (b.kind) {
      case 'title':
        out.push(`# ${b.text}`, '')
        break
      case 'h1':
        out.push(`## ${b.text}`, '')
        break
      case 'h2':
        out.push(`### ${b.text}`, '')
        break
      case 'h3':
        out.push(`#### ${b.text}`, '')
        break
      case 'note':
        out.push(`_${b.text}_`, '')
        break
      case 'para':
        out.push(b.text, '')
        break
      case 'quote':
        out.push(`> ${b.text}`, '')
        break
      case 'field':
        out.push(`**${b.label}**`, `\`[${b.id}]\``, '')
        break
      case 'inline':
        out.push(`- \`[${b.id}]\` ${b.text}`)
        break
      case 'bullets':
        for (const i of b.items) out.push(i.lead ? `- **${i.lead}** ${i.text}` : `- ${i.text}`)
        out.push('')
        break
      case 'numbered':
        b.items.forEach((i, n) => out.push(`${n + 1}. ${i}`))
        out.push('')
        break
      case 'rule':
        out.push('---', '')
        break
    }
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n')
}

await writeFile(join(root, 'COPY.md'), toMarkdown(blocks))
await writeFile(join(root, 'COPY.json'), JSON.stringify(blocks, null, 2))
console.log(`Wrote COPY.md and COPY.json (${blocks.length} blocks)`)

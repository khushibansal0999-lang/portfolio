import { caseStudies } from './caseStudies'
import { projects } from './projects'
import { WORK_CATEGORIES } from './categories'
import type { Deck, WorkCategory, WorkCategoryMeta } from './types'

// One flat list of everything in the work library, whatever shape it started as.
// Case studies and projects are authored in their own files with their own fields;
// this flattens both into the single shape the grouped /projects view renders.
// A new content type later (a market analysis with no live URL, say) only needs a
// mapper here, not a new page. See CONTENT.md.

export interface WorkLink {
  label: string
  href: string
  external: boolean
}

export interface WorkItem {
  key: string
  title: string
  summary: string
  category: WorkCategory
  /** Small line under the title: timeframe, stack, tags. */
  meta: string[]
  status?: string
  cover?: string
  links: WorkLink[]
  decks?: Deck[]
}

function fromCaseStudies(): WorkItem[] {
  return caseStudies.map((cs) => ({
    key: `case-${cs.slug}`,
    title: cs.title,
    summary: cs.summary,
    category: cs.category ?? 'case-study',
    meta: [cs.timeframe, ...cs.tags],
    status: cs.heroMetric?.value,
    links: [{ label: 'Read the case study →', href: `/work/${cs.slug}`, external: false }],
    decks: cs.decks,
  }))
}

function fromProjects(): WorkItem[] {
  return projects.map((p) => {
    const links: WorkLink[] = []
    if (p.liveUrl) links.push({ label: 'Live ↗', href: p.liveUrl, external: true })
    if (p.caseStudySlug)
      links.push({ label: 'Case study →', href: `/work/${p.caseStudySlug}`, external: false })
    if (p.hasDetail)
      links.push({ label: 'Details →', href: `/projects/${p.slug}`, external: false })

    return {
      key: `project-${p.slug}`,
      title: p.title,
      summary: p.summary,
      category: p.category,
      meta: p.timeframe ? [p.timeframe, ...p.stack] : p.stack,
      status: p.status,
      cover: p.cover,
      links,
      decks: p.decks,
    }
  })
}

export const workItems: WorkItem[] = [...fromCaseStudies(), ...fromProjects()]

export interface WorkGroup {
  category: WorkCategoryMeta
  items: WorkItem[]
}

/** Categories that actually have something in them, in WORK_CATEGORIES order.
    Empty categories are skipped rather than shown as empty shelves. */
export function groupedWork(): WorkGroup[] {
  return WORK_CATEGORIES.map((category) => ({
    category,
    items: workItems.filter((item) => item.category === category.id),
  })).filter((group) => group.items.length > 0)
}

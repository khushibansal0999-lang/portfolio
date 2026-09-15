import type { WorkCategory, WorkCategoryMeta } from './types'

// The work library's category taxonomy. To add a new kind of work (say, a
// growth or pricing analysis), add an id to WorkCategory in types.ts and a row
// here — every page that groups or filters work picks it up automatically.
// Order here is the order sections appear on /projects. See CONTENT.md.
export const WORK_CATEGORIES: WorkCategoryMeta[] = [
  {
    id: 'case-study',
    label: 'Case studies',
    blurb: 'End-to-end product work: research, the decision, the artifact, the outcome.',
  },
  {
    id: 'build',
    label: 'Builds & prototypes',
    blurb: 'Products I designed and shipped myself. Every link goes to something live and working.',
  },
  {
    id: 'teardown',
    label: 'Product teardowns',
    blurb: 'Existing products pulled apart to find the mechanics doing the real work.',
  },
  {
    id: 'market-analysis',
    label: 'Market & competitive analysis',
    blurb: 'Where a market is moving, who is already there, and what that leaves open.',
  },
  {
    id: 'ux-analysis',
    label: 'UX analysis',
    blurb: 'Flows and interfaces read closely, with the friction named and a fix proposed.',
  },
]

export const categoryMeta: Record<WorkCategory, WorkCategoryMeta> = Object.fromEntries(
  WORK_CATEGORIES.map((c) => [c.id, c]),
) as Record<WorkCategory, WorkCategoryMeta>

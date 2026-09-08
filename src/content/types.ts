// Content is theme-agnostic by design — see PLAN.md Phase 4.
// Nothing in here should ever contain theme-specific language ("shipped in v3.0" etc).
// Presentation labels live in src/theme/labels.ts instead.

export type Block =
  | { kind: 'heading'; text: string }
  | { kind: 'paragraph'; text: string }
  | { kind: 'image'; src: string; alt: string; caption?: string }
  | { kind: 'quote'; text: string; attribution?: string }
  | { kind: 'metrics'; items: { label: string; value: string; baseline?: string }[] }
  | { kind: 'list'; items: string[] }
  | { kind: 'link'; href: string; text: string }

export interface CaseStudy {
  slug: string
  title: string
  summary: string
  role: string
  timeframe: string
  tags: string[]
  isIndependent: boolean
  heroMetric?: { label: string; value: string }
  blocks: Block[]
}

export interface RoleEntry {
  id: string
  company: string
  title: string
  start: string
  end: string
  location: string
  companyBlurb?: string
  scope: string
  bullets: { text: string; caseStudySlug?: string }[]
  isCurrent?: boolean
}

export interface EducationEntry {
  school: string
  degree: string
  detail?: string
  date: string
}

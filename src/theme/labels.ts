export type ThemeId = 'editorial' | 'changelog' | 'dashboard' | 'journey'

export const THEME_IDS: ThemeId[] = ['editorial', 'changelog', 'dashboard', 'journey']

export const THEME_META: Record<ThemeId, { name: string; description: string }> = {
  editorial: { name: 'Editorial', description: 'Documentary profile' },
  changelog: { name: 'Changelog', description: 'Release notes' },
  dashboard: { name: 'Dashboard', description: 'Mission control' },
  journey: { name: 'Journey', description: 'The path' },
}

interface Labels {
  nav: {
    work: string
    about: string
    projects: string
    resume: string
  }
  home: {
    workHeading: string
    ctaResume: string
    ctaEmail: string
  }
  caseStudy: {
    metricsHeading: string
    backToWork: string
  }
  workHistory: {
    nowLabel: string
    pageHeading: string
  }
  statusBadge: string
}

export const labels: Record<ThemeId, Labels> = {
  editorial: {
    nav: { work: 'Work', about: 'About', projects: 'Projects', resume: 'Resume' },
    home: { workHeading: 'Case studies', ctaResume: 'Resume', ctaEmail: 'Email me' },
    caseStudy: { metricsHeading: 'By the numbers', backToWork: '← Back to work' },
    workHistory: { nowLabel: 'Now', pageHeading: 'The full timeline' },
    statusBadge: 'Open to Senior PM roles',
  },
  changelog: {
    nav: { work: 'Releases', about: 'About', projects: 'Builds', resume: 'Resume' },
    home: { workHeading: 'Changelog', ctaResume: 'Resume', ctaEmail: 'Email me' },
    caseStudy: { metricsHeading: 'Impact', backToWork: '← Back to releases' },
    workHistory: { nowLabel: 'Currently shipping', pageHeading: 'Version history' },
    statusBadge: 'status: open to roles',
  },
  dashboard: {
    nav: { work: 'Overview', about: 'About', projects: 'Projects', resume: 'Resume' },
    home: { workHeading: 'Case studies', ctaResume: 'Resume', ctaEmail: 'Email me' },
    caseStudy: { metricsHeading: 'Metrics', backToWork: '← Back to overview' },
    workHistory: { nowLabel: 'Active', pageHeading: 'Activity log' },
    statusBadge: '● Open to Senior PM roles',
  },
  journey: {
    nav: { work: 'Chapters', about: 'About', projects: 'Quests', resume: 'Resume' },
    home: { workHeading: 'Chapters', ctaResume: 'Resume', ctaEmail: 'Email me' },
    caseStudy: { metricsHeading: 'What changed', backToWork: '← Back to the path' },
    workHistory: { nowLabel: 'You are here', pageHeading: 'The path so far' },
    statusBadge: 'Open to the next chapter',
  },
}

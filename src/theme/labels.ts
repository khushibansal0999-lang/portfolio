import { availability } from '@/content/availability'

export type ThemeId = 'editorial' | 'changelog' | 'dashboard' | 'journey' | 'poster'

export const THEME_IDS: ThemeId[] = ['editorial', 'changelog', 'dashboard', 'journey', 'poster']

export const THEME_META: Record<ThemeId, { name: string; description: string }> = {
  editorial: { name: 'Editorial', description: 'Documentary profile' },
  changelog: { name: 'Changelog', description: 'Release notes' },
  dashboard: { name: 'Dashboard', description: 'Mission control' },
  journey: { name: 'Journey', description: 'The path' },
  poster: { name: 'Poster', description: 'Zine cover' },
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
    nav: { work: 'Home', about: 'About', projects: 'Work', resume: 'Resume' },
    home: { workHeading: 'Case studies', ctaResume: 'Resume', ctaEmail: 'Email me' },
    caseStudy: { metricsHeading: 'By the numbers', backToWork: '← Back to work' },
    workHistory: { nowLabel: 'Now', pageHeading: 'The full timeline' },
    statusBadge: `${availability.headline} · ${availability.modesLine}`,
  },
  changelog: {
    nav: { work: 'Home', about: 'About', projects: 'Releases', resume: 'Resume' },
    home: { workHeading: 'Changelog', ctaResume: 'Resume', ctaEmail: 'Email me' },
    caseStudy: { metricsHeading: 'Impact', backToWork: '← Back to releases' },
    workHistory: { nowLabel: 'Currently shipping', pageHeading: 'Version history' },
    statusBadge: `status: ${availability.headlineShort.toLowerCase()} · ${availability.modesLine.toLowerCase()}`,
  },
  dashboard: {
    nav: { work: 'Overview', about: 'About', projects: 'Work', resume: 'Resume' },
    home: { workHeading: 'Case studies', ctaResume: 'Resume', ctaEmail: 'Email me' },
    caseStudy: { metricsHeading: 'Metrics', backToWork: '← Back to overview' },
    workHistory: { nowLabel: 'Active', pageHeading: 'Activity log' },
    statusBadge: `● ${availability.headline} · ${availability.modesLine}`,
  },
  journey: {
    nav: { work: 'Start here', about: 'About', projects: 'Quests', resume: 'Resume' },
    home: { workHeading: 'Chapters', ctaResume: 'Resume', ctaEmail: 'Email me' },
    caseStudy: { metricsHeading: 'What changed', backToWork: '← Back to the path' },
    workHistory: { nowLabel: 'You are here', pageHeading: 'The path so far' },
    statusBadge: `Open to the next chapter: ${availability.titles.join(' or ')} · ${availability.modesLine}`,
  },
  poster: {
    nav: { work: 'Home', about: 'About me', projects: 'Work', resume: 'Resume' },
    home: { workHeading: 'Case studies', ctaResume: 'Resume', ctaEmail: 'Get in touch!' },
    caseStudy: { metricsHeading: 'Target movement', backToWork: '← Back to work' },
    workHistory: { nowLabel: 'Now', pageHeading: 'Track record' },
    statusBadge: availability.headlineShort,
  },
}

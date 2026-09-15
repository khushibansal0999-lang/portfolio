// Single source of truth for "what roles am I open to, and on what terms."
// Every status badge, hero eyebrow, and contact block on the site reads from here,
// so changing the target title or the work modes is a one-line edit in this file.

export const availability = {
  /** Titles, in the order they should read. */
  titles: ['APM', 'PM'],
  /** Onsite / hybrid / remote, in the order they should read. */
  workModes: ['Onsite', 'Hybrid', 'Remote'],
  base: 'Bengaluru, India',

  /** "Open to APM and PM roles" */
  headline: 'Open to APM and PM roles',
  /** Short form for tight spaces (pills, nav chips). */
  headlineShort: 'Open to APM / PM roles',
  /** "Onsite, hybrid, or remote" */
  modesLine: 'Onsite, hybrid, or remote',
  /** Headline + modes, for the one-line hero eyebrow. */
  full: 'Open to APM and PM roles · Onsite, hybrid, or remote',
} as const

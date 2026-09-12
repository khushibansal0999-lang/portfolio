// Poster theme palette — see PLAN.md Phase 4 for why this theme breaks from the shared
// "ink wash" tokens the other four themes use. Kept as plain constants (not CSS vars)
// because poster pages are fully custom layouts with several named section backgrounds,
// not a single flat --bg/--text pair like the shared page shell.
export const poster = {
  forest: '#26372a',
  ink: '#141414',
  cream: '#f7f2e6',
  creamPaper: '#fdfaf1',
  marigold: '#f5b429',
  terracotta: '#e0552f',
  rust: '#9a3d1f',
  accentSoft: '#f6e2b8',
  textOnDark: '#f4efe1',
  mutedOnDark: '#c3ccbd',
  borderOnDark: '#3c4d3f',
} as const

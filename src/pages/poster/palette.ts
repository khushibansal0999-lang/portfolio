// Poster theme palette — a loud, illustrated zine-cover treatment (forest + marigold,
// ghost-outline display type, diamond motif) rather than a structural remix of the
// shared "ink wash" look the other four themes use — see the [data-theme='poster']
// block in src/index.css for the same rationale on the CSS-variable side. Kept as
// plain constants (not CSS vars) because poster pages are fully custom layouts with
// several named section backgrounds, not a single flat --bg/--text pair like the
// shared page shell.
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

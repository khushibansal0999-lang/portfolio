import { Helmet } from 'react-helmet-async'

// Per-page <title> for the tab + Google; the root index.html OG tags are what social
// scrapers actually see on an SPA (see PLAN.md Phase 3), so this is a nice-to-have on top,
// not the primary defense.
export function Seo({ title, description }: { title: string; description?: string }) {
  return (
    <Helmet>
      <title>{title} · Khushi Bansal</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  )
}

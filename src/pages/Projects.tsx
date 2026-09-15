import { Layout } from '@/components/Layout'
import { Seo } from '@/components/Seo'
import { WorkItemCard } from '@/components/WorkItemCard'
import { groupedWork } from '@/content/workItems'
import { useTheme } from '@/theme/ThemeContext'
import { PosterProjects } from '@/pages/poster/PosterProjects'

export function Projects() {
  const { theme, t } = useTheme()
  if (theme === 'poster') return <PosterProjects />

  const groups = groupedWork()

  return (
    <Layout>
      <Seo
        title={t.nav.projects}
        description="Case studies, builds, teardowns, and analysis: the full library of what I've shipped and taken apart."
      />
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        <h1 className="text-3xl font-medium mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
          {t.nav.projects}
        </h1>
        <p className="max-w-[60ch]" style={{ color: 'var(--text-muted)' }}>
          Everything here is mine end to end. Case studies and builds, plus the teardowns
          and analysis I write to keep the muscle warm.
        </p>

        {/* Jump links, so someone scanning for one kind of artifact lands on it directly. */}
        <nav className="flex flex-wrap gap-2 mt-6 mb-12">
          {groups.map(({ category, items }) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="text-xs px-3 py-1.5 border hover:opacity-70"
              style={{ borderColor: 'var(--border)', color: 'var(--accent-strong)', borderRadius: 'var(--radius)' }}
            >
              {category.label} ({items.length})
            </a>
          ))}
        </nav>

        <div className="space-y-16">
          {groups.map(({ category, items }) => (
            <section key={category.id} id={category.id} className="scroll-mt-24">
              <h2 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
                {category.label}
              </h2>
              <p className="text-sm mt-1 mb-6 max-w-[60ch]" style={{ color: 'var(--text-muted)' }}>
                {category.blurb}
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                {items.map((item) => (
                  <WorkItemCard key={item.key} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Layout>
  )
}

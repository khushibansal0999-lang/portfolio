import { Layout } from '@/components/Layout'
import { Seo } from '@/components/Seo'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/content/projects'
import { useTheme } from '@/theme/ThemeContext'
import { PosterProjects } from '@/pages/poster/PosterProjects'

export function Projects() {
  const { theme } = useTheme()
  if (theme === 'poster') return <PosterProjects />

  return (
    <Layout>
      <Seo
        title="Projects"
        description="Solo-built AI products and prototypes — live links, stack, and what I'd do differently."
      />
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        <h1 className="text-3xl font-medium mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
          Projects
        </h1>
        <p className="max-w-[60ch] mb-10" style={{ color: 'var(--text-muted)' }}>
          Solo-built, end to end — brief through prototype. Every link below is a live,
          working product, not a mockup.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

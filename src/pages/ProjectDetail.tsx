import { Link, Navigate, useParams } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Seo } from '@/components/Seo'
import { getProject } from '@/content/projects'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined

  if (!project || !project.hasDetail) return <Navigate to="/projects" replace />

  return (
    <Layout>
      <Seo title={project.title} description={project.summary} />
      <article className="max-w-2xl mx-auto px-6 pt-12 pb-24">
        <Link to="/projects" className="text-sm hover:underline" style={{ color: 'var(--text-muted)' }}>
          ← Back to projects
        </Link>

        <div className="flex items-start justify-between gap-4 mt-6">
          <h1 className="text-3xl font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
            {project.title}
          </h1>
          <span
            className="shrink-0 text-[11px] px-2 py-0.5 rounded-full border mt-2"
            style={{ borderColor: 'var(--border)', color: 'var(--accent-strong)' }}
          >
            {project.status}
          </span>
        </div>

        <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
          {project.timeframe} · {project.stack.join(' · ')}
        </p>

        <p className="text-lg mt-6 leading-relaxed max-w-[62ch]">{project.summary}</p>

        <div className="flex gap-4 mt-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium px-4 py-2 rounded"
              style={{ background: 'var(--accent-strong)', color: 'var(--bg)', borderRadius: 'var(--radius)' }}
            >
              Open live ↗
            </a>
          )}
        </div>

        {project.screens && project.screens.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {project.screens.map((s) => (
              <figure key={s.src}>
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full rounded border"
                  style={{ borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
                />
                {s.caption && (
                  <figcaption className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
                    {s.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

        {project.whyBuilt && (
          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
              {project.whyBuiltLabel ?? 'Why I built it'}
            </h2>
            <p className="leading-relaxed max-w-[68ch]">{project.whyBuilt}</p>
          </div>
        )}

        {project.lesson && (
          <div className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
              {project.lessonLabel ?? "What I'd do differently"}
            </h2>
            <p className="leading-relaxed max-w-[68ch]">{project.lesson}</p>
          </div>
        )}
      </article>
    </Layout>
  )
}

import { Link } from 'react-router-dom'
import type { Project } from '@/content/types'

const statusColor: Record<Project['status'], string> = {
  Live: 'var(--accent-strong)',
  Archived: 'var(--text-muted)',
  Experiment: 'var(--text-muted)',
}

function CardShell({ project, children }: { project: Project; children: React.ReactNode }) {
  const className =
    'block border rounded-lg overflow-hidden transition-transform hover:-translate-y-0.5'
  const style = {
    borderColor: 'var(--border)',
    background: 'var(--bg-elevated)',
    borderRadius: 'var(--radius)',
    boxShadow: 'var(--shadow)',
  }

  if (project.hasDetail) {
    return (
      <Link to={`/projects/${project.slug}`} className={className} style={style}>
        {children}
      </Link>
    )
  }
  const href = project.liveUrl ?? (project.caseStudySlug ? `/work/${project.caseStudySlug}` : '#')
  const isExternal = href.startsWith('http')
  return isExternal ? (
    <a href={href} target="_blank" rel="noreferrer" className={className} style={style}>
      {children}
    </a>
  ) : (
    <Link to={href} className={className} style={style}>
      {children}
    </Link>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <CardShell project={project}>
      {project.cover && (
        <img src={project.cover} alt="" loading="lazy" className="w-full aspect-video object-cover object-top" />
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
            {project.title}
          </h3>
          <span
            className="shrink-0 text-[11px] px-2 py-0.5 rounded-full border flex items-center gap-1"
            style={{ borderColor: 'var(--border)', color: statusColor[project.status] }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: statusColor[project.status] }}
            />
            {project.status}
          </span>
        </div>
        <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ background: 'var(--accent-soft)', color: 'var(--accent-strong)' }}
            >
              {s}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-4 text-sm">
          {project.liveUrl && (
            <span style={{ color: 'var(--accent-strong)' }} className="font-medium">
              Live ↗
            </span>
          )}
          {project.caseStudySlug && (
            <span style={{ color: 'var(--accent-strong)' }} className="font-medium">
              Case study →
            </span>
          )}
          {project.hasDetail && !project.caseStudySlug && (
            <span style={{ color: 'var(--accent-strong)' }} className="font-medium">
              Details →
            </span>
          )}
        </div>
      </div>
    </CardShell>
  )
}

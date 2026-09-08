import { Link } from 'react-router-dom'
import type { Project } from '@/content/types'

const statusColor: Record<Project['status'], string> = {
  Live: 'var(--accent-strong)',
  Archived: 'var(--text-muted)',
  Experiment: 'var(--text-muted)',
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="border rounded-lg overflow-hidden"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--bg-elevated)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)',
      }}
    >
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
        {/* Each destination is its own real link — a card is never a single giant <a>,
            so "Live" and "Case study"/"Details" always go where their label says. */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="font-medium hover:underline"
              style={{ color: 'var(--accent-strong)' }}
            >
              Live ↗
            </a>
          )}
          {project.caseStudySlug && (
            <Link
              to={`/work/${project.caseStudySlug}`}
              className="font-medium hover:underline"
              style={{ color: 'var(--accent-strong)' }}
            >
              Case study →
            </Link>
          )}
          {project.hasDetail && (
            <Link
              to={`/projects/${project.slug}`}
              className="font-medium hover:underline"
              style={{ color: 'var(--accent-strong)' }}
            >
              Details →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

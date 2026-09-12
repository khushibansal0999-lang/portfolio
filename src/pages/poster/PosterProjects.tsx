import { Link } from 'react-router-dom'
import { PosterLayout } from './PosterLayout'
import { Diamond } from './Diamond'
import { poster } from './palette'
import { Seo } from '@/components/Seo'
import { projects } from '@/content/projects'
import type { Project } from '@/content/types'

const serif = "'DM Serif Display', Georgia, serif"

const statusColor: Record<Project['status'], string> = {
  Live: poster.marigold,
  Archived: poster.mutedOnDark,
  Experiment: poster.mutedOnDark,
}

function PosterProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col" style={{ background: poster.creamPaper, border: `1px solid ${poster.borderOnDark}22` }}>
      {project.cover && (
        <img src={project.cover} alt="" loading="lazy" className="w-full aspect-video object-cover object-top" />
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 style={{ fontFamily: serif, fontSize: 20 }}>{project.title}</h3>
          <span
            className="shrink-0 flex items-center gap-1.5 text-[10.5px] px-2.5 py-1 rounded-full"
            style={{ border: `1px solid ${poster.rust}55`, color: poster.rust }}
          >
            <Diamond size={6} color={statusColor[project.status]} style={{ transform: 'none', borderRadius: '50%' }} />
            {project.status}
          </span>
        </div>
        <p className="text-[13px] mt-2 leading-relaxed" style={{ color: '#4a463d' }}>
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.stack.map((s) => (
            <span key={s} className="text-[10.5px] px-2 py-1 rounded-full" style={{ background: poster.accentSoft, color: poster.rust }}>
              {s}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-[13px] font-semibold" style={{ marginTop: 'auto', paddingTop: 16 }}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:underline" style={{ color: poster.rust }}>
              Live ↗
            </a>
          )}
          {project.caseStudySlug && (
            <Link to={`/work/${project.caseStudySlug}`} className="hover:underline" style={{ color: poster.rust }}>
              Case study →
            </Link>
          )}
          {project.hasDetail && (
            <Link to={`/projects/${project.slug}`} className="hover:underline" style={{ color: poster.rust }}>
              Details →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export function PosterProjects() {
  return (
    <PosterLayout>
      <Seo
        title="Projects"
        description="Solo-built AI products and prototypes — live links, stack, and what I'd do differently."
      />
      <header style={{ background: poster.forest, color: poster.textOnDark }} className="px-5 sm:px-11 py-12 sm:py-14">
        <div className="max-w-6xl mx-auto">
          <h1 className="flex items-center gap-3" style={{ fontFamily: serif, fontSize: 'clamp(34px,5vw,52px)' }}>
            <Diamond size={16} color={poster.marigold} />
            Projects
          </h1>
          <p className="mt-3 max-w-[58ch] text-sm" style={{ color: poster.mutedOnDark }}>
            Solo-built, end to end — brief through prototype. Every link below is a live, working
            product, not a mockup.
          </p>
        </div>
      </header>
      <div style={{ background: poster.cream }} className="px-5 sm:px-11 py-12 sm:py-14">
        <div className="max-w-6xl mx-auto grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <PosterProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </PosterLayout>
  )
}

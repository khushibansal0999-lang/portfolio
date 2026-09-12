import { Link } from 'react-router-dom'
import { PosterLayout } from './PosterLayout'
import { Diamond } from './Diamond'
import { poster } from './palette'
import { Seo } from '@/components/Seo'
import { ViewDeck } from '@/components/ViewDeck'
import type { Project } from '@/content/types'

const serif = "'DM Serif Display', Georgia, serif"
const mono = "'IBM Plex Mono', ui-monospace, monospace"

export function PosterProjectDetail({ project }: { project: Project }) {
  return (
    <PosterLayout>
      <Seo title={project.title} description={project.summary} />

      <header style={{ background: poster.forest, color: poster.textOnDark }} className="px-5 sm:px-11 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/projects" className="text-xs hover:underline" style={{ fontFamily: mono, color: poster.mutedOnDark }}>
            ← Back to projects
          </Link>

          <div className="flex flex-wrap items-start justify-between gap-4 mt-5">
            <h1 className="flex items-center gap-3" style={{ fontFamily: serif, fontSize: 'clamp(30px,4.5vw,46px)' }}>
              <Diamond size={14} color={poster.marigold} />
              {project.title}
            </h1>
            <span
              className="shrink-0 rounded-full px-3 py-1 text-[11px] mt-2"
              style={{ border: `1px solid ${poster.borderOnDark}`, color: poster.marigold }}
            >
              {project.status}
            </span>
          </div>

          <p className="text-xs sm:text-sm mt-3" style={{ fontFamily: mono, color: poster.mutedOnDark }}>
            {project.timeframe} · {project.stack.join(' · ')}
          </p>

          <p className="text-base sm:text-lg mt-6 leading-relaxed max-w-[62ch]" style={{ color: poster.mutedOnDark }}>
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold"
                style={{ background: poster.marigold, color: poster.ink }}
              >
                Open live ↗
              </a>
            )}
            {project.decks?.map((d) => <ViewDeck key={d.href} href={d.href} label={d.label} />)}
          </div>
        </div>
      </header>

      <article style={{ background: poster.cream, color: poster.ink }} className="px-5 sm:px-11 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {project.screens && project.screens.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-4">
              {project.screens.map((s) => (
                <figure key={s.src}>
                  <img src={s.src} alt={s.alt} loading="lazy" className="w-full" style={{ border: `1px solid ${poster.borderOnDark}33` }} />
                  {s.caption && (
                    <figcaption className="text-xs mt-2" style={{ fontFamily: mono, color: poster.rust }}>
                      {s.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}

          {project.whyBuilt && (
            <div>
              <h2 className="flex items-center gap-3" style={{ fontFamily: serif, fontSize: 24 }}>
                <Diamond size={11} color={poster.terracotta} />
                {project.whyBuiltLabel ?? 'Why I built it'}
              </h2>
              <p className="mt-3 leading-relaxed max-w-[68ch] text-[14.5px]" style={{ color: '#2c2b27' }}>
                {project.whyBuilt}
              </p>
            </div>
          )}

          {project.lesson && (
            <div>
              <h2 className="flex items-center gap-3" style={{ fontFamily: serif, fontSize: 24 }}>
                <Diamond size={11} color={poster.terracotta} />
                {project.lessonLabel ?? "What I'd do differently"}
              </h2>
              <p className="mt-3 leading-relaxed max-w-[68ch] text-[14.5px]" style={{ color: '#2c2b27' }}>
                {project.lesson}
              </p>
            </div>
          )}
        </div>
      </article>
    </PosterLayout>
  )
}

import { Link } from 'react-router-dom'
import { PosterLayout } from './PosterLayout'
import { PosterBlockRenderer } from './PosterBlockRenderer'
import { Diamond } from './Diamond'
import { poster } from './palette'
import { Seo } from '@/components/Seo'
import { ViewDeck } from '@/components/ViewDeck'
import type { CaseStudy } from '@/content/types'

const serif = "'DM Serif Display', Georgia, serif"
const mono = "'IBM Plex Mono', ui-monospace, monospace"

export function PosterCaseStudy({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <PosterLayout>
      <Seo title={caseStudy.title} description={caseStudy.summary} />

      <header style={{ background: poster.forest, color: poster.textOnDark }} className="px-5 sm:px-11 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-xs hover:underline" style={{ fontFamily: mono, color: poster.mutedOnDark }}>
            ← Back to work
          </Link>

          <div className="flex flex-wrap items-start justify-between gap-4 mt-5">
            <h1 className="flex items-center gap-3" style={{ fontFamily: serif, fontSize: 'clamp(32px,5vw,52px)', lineHeight: 1.02 }}>
              <Diamond size={16} color={poster.marigold} />
              {caseStudy.title}
            </h1>
            {caseStudy.isIndependent && (
              <span
                className="shrink-0 rounded-full px-3 py-1 text-[11px] mt-2"
                style={{ border: `1px solid ${poster.borderOnDark}`, color: poster.mutedOnDark }}
              >
                Independent project
              </span>
            )}
          </div>

          <p className="text-xs sm:text-sm mt-3" style={{ fontFamily: mono, color: poster.marigold }}>
            {caseStudy.role} · {caseStudy.timeframe}
          </p>

          <p className="text-base sm:text-lg mt-6 leading-relaxed max-w-[62ch]" style={{ color: poster.mutedOnDark }}>
            {caseStudy.summary}
          </p>

          {caseStudy.heroMetric && (
            <div className="inline-flex flex-col mt-7 px-5 py-3.5" style={{ background: poster.marigold, color: poster.ink }}>
              <span className="text-[10px] uppercase tracking-widest" style={{ fontFamily: mono }}>
                {caseStudy.heroMetric.label}
              </span>
              <span style={{ fontFamily: serif, fontSize: 30, lineHeight: 1.1 }}>{caseStudy.heroMetric.value}</span>
            </div>
          )}

          {caseStudy.decks && caseStudy.decks.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-6">
              {caseStudy.decks.map((d) => (
                <ViewDeck key={d.href} href={d.href} label={d.label} />
              ))}
            </div>
          )}
        </div>
      </header>

      <article style={{ background: poster.cream, color: poster.ink }} className="px-5 sm:px-11 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <PosterBlockRenderer blocks={caseStudy.blocks} />
        </div>
      </article>
    </PosterLayout>
  )
}

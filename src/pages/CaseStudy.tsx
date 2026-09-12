import { Link, Navigate, useParams } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { BlockRenderer } from '@/components/BlockRenderer'
import { Seo } from '@/components/Seo'
import { ViewDeck } from '@/components/ViewDeck'
import { getCaseStudy } from '@/content/caseStudies'
import { useTheme } from '@/theme/ThemeContext'
import { PosterCaseStudy } from '@/pages/poster/PosterCaseStudy'

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const { theme, t } = useTheme()
  const caseStudy = slug ? getCaseStudy(slug) : undefined

  if (!caseStudy) return <Navigate to="/" replace />
  if (theme === 'poster') return <PosterCaseStudy caseStudy={caseStudy} />

  return (
    <Layout>
      <Seo title={caseStudy.title} description={caseStudy.summary} />
      <article className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        <Link to="/" className="text-sm hover:underline" style={{ color: 'var(--text-muted)' }}>
          {t.caseStudy.backToWork}
        </Link>

        <div className="flex items-start justify-between gap-4 mt-6">
          <h1 className="text-3xl sm:text-4xl font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
            {caseStudy.title}
          </h1>
          {caseStudy.isIndependent && (
            <span
              className="shrink-0 text-[11px] px-2 py-0.5 rounded-full border mt-2"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
            >
              Independent project
            </span>
          )}
        </div>

        <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
          {caseStudy.role} · {caseStudy.timeframe}
        </p>

        <p className="text-lg mt-6 leading-relaxed max-w-[62ch]" style={{ color: 'var(--text)' }}>
          {caseStudy.summary}
        </p>

        {caseStudy.decks && caseStudy.decks.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-6">
            {caseStudy.decks.map((d) => (
              <ViewDeck key={d.href} href={d.href} label={d.label} />
            ))}
          </div>
        )}

        <div className="mt-10">
          <BlockRenderer blocks={caseStudy.blocks} />
        </div>
      </article>
    </Layout>
  )
}

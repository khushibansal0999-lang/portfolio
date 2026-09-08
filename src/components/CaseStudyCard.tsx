import { Link } from 'react-router-dom'
import type { CaseStudy } from '@/content/types'

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      to={`/work/${caseStudy.slug}`}
      className="block border rounded-lg p-5 transition-transform hover:-translate-y-0.5"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--bg-elevated)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)',
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
          {caseStudy.title}
        </h3>
        {caseStudy.isIndependent && (
          <span
            className="shrink-0 text-[11px] px-2 py-0.5 rounded-full border"
            style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
          >
            Independent project
          </span>
        )}
      </div>

      {caseStudy.heroMetric && (
        <p className="text-2xl font-semibold mt-3" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>
          {caseStudy.heroMetric.value}
          <span className="text-sm font-normal ml-2" style={{ color: 'var(--text-muted)' }}>
            {caseStudy.heroMetric.label}
          </span>
        </p>
      )}

      <p className="text-sm mt-3 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
        {caseStudy.summary}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {caseStudy.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full"
            style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}

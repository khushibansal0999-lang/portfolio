import { Layout } from '@/components/Layout'
import { CaseStudyCard } from '@/components/CaseStudyCard'
import { Seo } from '@/components/Seo'
import { caseStudies } from '@/content/caseStudies'
import { useTheme } from '@/theme/ThemeContext'

export function Home() {
  const { t } = useTheme()

  return (
    <Layout>
      <Seo
        title="Product Manager"
        description="Engineer-turned-PM shipping battery-management features to millions of EVs, now building AI products end to end."
      />
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-10">
        <p
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: 'var(--accent-strong)' }}
        >
          {t.statusBadge}
        </p>
        <h1
          className="text-4xl sm:text-5xl font-medium leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Khushi Bansal
        </h1>
        <p className="text-xl mt-3" style={{ color: 'var(--text-muted)' }}>
          Product Manager · Deep Tech, AI &amp; Data-Driven Products
        </p>
        <p className="mt-6 leading-relaxed max-w-[60ch]">
          Engineer-turned-PM with four years of end-to-end product ownership at Ola
          Electric, shipping battery-management features to millions of EVs with no
          dedicated PM. Now building AI products solo, brief through prototype.
        </p>
        <div className="flex gap-4 mt-8">
          <a
            href="mailto:khushi.bansal0999@gmail.com"
            className="text-sm font-medium px-4 py-2 rounded"
            style={{ background: 'var(--accent-strong)', color: 'var(--bg)', borderRadius: 'var(--radius)' }}
          >
            {t.home.ctaEmail}
          </a>
          <a
            href="/resume"
            className="text-sm font-medium px-4 py-2 rounded border"
            style={{ borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
          >
            {t.home.ctaResume}
          </a>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
          {t.home.workHeading}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

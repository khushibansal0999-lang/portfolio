import { Link } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Seo } from '@/components/Seo'
import { useTheme } from '@/theme/ThemeContext'
import { PosterAbout } from '@/pages/poster/PosterAbout'
import { pageCopy } from '@/content/pageCopy'

export function About() {
  const { theme } = useTheme()
  if (theme === 'poster') return <PosterAbout />

  return (
    <Layout>
      <Seo
        title="About"
        description="Engineer-turned-PM: how I got here and how I work."
      />
      <article className="max-w-2xl mx-auto px-6 pt-12 pb-24 space-y-10" style={{ fontFamily: 'var(--font-about)' }}>
        <header>
          <h1 className="text-3xl font-medium">About</h1>
          <p className="text-lg mt-4 leading-relaxed">{pageCopy.about.intro}</p>
        </header>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
            {pageCopy.about.arcHeading}
          </h2>
          <p className="leading-relaxed">{pageCopy.about.arc}</p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
            {pageCopy.about.howIWorkHeading}
          </h2>
          <ul className="space-y-4">
            {pageCopy.about.howIWork.map((bullet) => (
              <li key={bullet.text} className="leading-relaxed">
                {bullet.lead && <strong>{bullet.lead}</strong>} {bullet.text}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
            {pageCopy.about.stillBuildingHeading}
          </h2>
          <p className="leading-relaxed">{pageCopy.about.stillBuilding}</p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
            {pageCopy.about.outsideHeading}
          </h2>
          <p className="leading-relaxed">{pageCopy.about.outside}</p>
        </section>

        <section className="flex gap-6 text-sm pt-2" style={{ color: 'var(--accent-strong)' }}>
          <Link to="/work-history" className="hover:underline">
            {pageCopy.about.timelineLink}
          </Link>
          <Link to="/projects" className="hover:underline">
            {pageCopy.about.projectsLink}
          </Link>
        </section>

        <section className="flex gap-4 pt-4">
          <a
            href="mailto:khushi.bansal0999@gmail.com"
            className="text-sm font-medium px-4 py-2 rounded"
            style={{ background: 'var(--accent-strong)', color: 'var(--bg)', borderRadius: 'var(--radius)' }}
          >
            Email me
          </a>
          <Link
            to="/resume"
            className="text-sm font-medium px-4 py-2 rounded border"
            style={{ borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
          >
            Resume
          </Link>
        </section>
      </article>
    </Layout>
  )
}

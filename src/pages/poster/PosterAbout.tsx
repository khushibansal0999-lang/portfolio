import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PosterLayout } from './PosterLayout'
import { Diamond } from './Diamond'
import { poster } from './palette'
import { Seo } from '@/components/Seo'
import { pageCopy } from '@/content/pageCopy'
import { useTheme } from '@/theme/ThemeContext'

const serif = "'DM Serif Display', Georgia, serif"
const mono = "'IBM Plex Mono', ui-monospace, monospace"

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="flex items-center gap-3" style={{ fontFamily: serif, fontSize: 'clamp(22px,3vw,28px)' }}>
        <Diamond size={11} color={poster.terracotta} />
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

export function PosterAbout() {
  const { t } = useTheme()

  return (
    <PosterLayout>
      <Seo title="About" description="Engineer-turned-PM: how I got here and how I work." />

      <header style={{ background: poster.forest, color: poster.textOnDark }} className="px-5 sm:px-11 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="flex items-center gap-3" style={{ fontFamily: serif, fontSize: 'clamp(34px,5vw,52px)' }}>
            <Diamond size={16} color={poster.marigold} />
            {t.nav.about}
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-[58ch]" style={{ color: poster.mutedOnDark }}>
            {pageCopy.about.intro}
          </p>
        </div>
      </header>

      <article style={{ background: poster.cream, color: poster.ink }} className="px-5 sm:px-11 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-11">
          <Section title={pageCopy.about.arcHeading}>
            <p className="leading-relaxed text-[14.5px] max-w-[68ch]" style={{ color: '#2c2b27' }}>
              {pageCopy.about.arc}
            </p>
          </Section>

          <Section title={pageCopy.about.howIWorkHeading}>
            <ul className="flex flex-col gap-4">
              {pageCopy.about.howIWork.map((bullet) => (
                <li key={bullet.text} className="flex gap-3 leading-relaxed text-[13.5px] max-w-[64ch]">
                  <Diamond size={7} color={poster.rust} style={{ marginTop: 6 }} />
                  <span>
                    {bullet.lead && <strong>{bullet.lead}</strong>} {bullet.text}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title={pageCopy.about.stillBuildingHeading}>
            <p className="leading-relaxed text-[14.5px] max-w-[64ch]" style={{ color: '#2c2b27' }}>
              {pageCopy.about.stillBuilding}
            </p>
          </Section>

          <Section title={pageCopy.about.outsideHeading}>
            <p className="leading-relaxed text-[14.5px] max-w-[64ch]" style={{ color: '#2c2b27' }}>
              {pageCopy.about.outside}
            </p>
          </Section>

          <div className="flex flex-wrap gap-4 pt-2 text-sm" style={{ fontFamily: mono, color: poster.rust }}>
            <Link to="/work-history" className="hover:underline">
              {pageCopy.about.timelineLink}
            </Link>
            <Link to="/projects" className="hover:underline">
              {pageCopy.about.projectsLink}
            </Link>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:khushi.bansal0999@gmail.com"
              className="rounded-full px-5 py-2.5 text-sm font-semibold"
              style={{ background: poster.marigold, color: poster.ink }}
            >
              Email me
            </a>
            <Link
              to="/resume"
              className="rounded-full px-5 py-2.5 text-sm font-semibold"
              style={{ border: `1px solid ${poster.borderOnDark}`, color: poster.ink }}
            >
              Resume
            </Link>
          </div>
        </div>
      </article>
    </PosterLayout>
  )
}

import { PosterLayout } from './PosterLayout'
import { Diamond } from './Diamond'
import { poster } from './palette'
import { Seo } from '@/components/Seo'
import { roles, education, leadership } from '@/content/roles'

const serif = "'DM Serif Display', Georgia, serif"
const mono = "'IBM Plex Mono', ui-monospace, monospace"

export function PosterResume() {
  return (
    <PosterLayout>
      <Seo title="Resume" description="Khushi Bansal's resume." />

      <header style={{ background: poster.forest, color: poster.textOnDark }} className="px-5 sm:px-11 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto flex flex-wrap items-start justify-between gap-6">
          <div>
            <h1 className="flex items-center gap-3" style={{ fontFamily: serif, fontSize: 'clamp(32px,5vw,48px)' }}>
              <Diamond size={15} color={poster.marigold} />
              Khushi Bansal
            </h1>
            <p className="mt-3 text-sm" style={{ color: poster.mutedOnDark }}>
              Product Manager · Deep Tech, AI &amp; Data-Driven Products
            </p>
            <p className="text-xs mt-1" style={{ fontFamily: mono, color: poster.marigold }}>
              khushi.bansal0999@gmail.com
            </p>
          </div>
          <a
            href="/resume.pdf"
            className="shrink-0 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold"
            style={{ background: poster.marigold, color: poster.ink }}
          >
            Download PDF
          </a>
        </div>
      </header>

      <article style={{ background: poster.cream, color: poster.ink }} className="px-5 sm:px-11 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <p className="leading-relaxed text-[14.5px] max-w-[64ch]" style={{ color: '#2c2b27' }}>
            Engineer-turned-PM with 3.9 years of end-to-end product ownership at Ola Electric,
            shipping battery-management features to millions of EVs with no dedicated PM. Scope
            ambiguous problems into specs, mine fleet telemetry to decide what to build, and drive
            cross-functional delivery to launch. Pairing deep-tech credibility (BMS, charging,
            optimization) with hands-on AI product building.
          </p>

          <section>
            <h2 className="flex items-center gap-3" style={{ fontFamily: serif, fontSize: 24 }}>
              <Diamond size={11} color={poster.terracotta} />
              Experience
            </h2>
            <div className="mt-5 flex flex-col gap-7">
              {roles.map((role) => (
                <div key={role.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-sm font-semibold">
                      {role.title} · {role.company}
                    </h3>
                    <span className="text-xs shrink-0" style={{ fontFamily: mono, color: poster.rust }}>
                      {role.start} to {role.end}
                    </span>
                  </div>
                  <ul className="mt-2.5 flex flex-col gap-1.5">
                    {role.bullets.map((bullet, i) => (
                      <li key={i} className="text-[13px] leading-relaxed flex gap-2.5">
                        <Diamond size={6} color={poster.rust} style={{ marginTop: 6 }} />
                        <span>{bullet.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="flex items-center gap-3" style={{ fontFamily: serif, fontSize: 24 }}>
              <Diamond size={11} color={poster.terracotta} />
              Education
            </h2>
            <div className="mt-4 flex flex-col gap-1">
              {education.map((e) => (
                <p key={e.school} className="text-[13px]">
                  <span className="font-semibold">{e.degree}</span> · {e.school}
                  {e.detail && <span style={{ color: poster.rust }}> ({e.detail})</span>} ·{' '}
                  <span style={{ color: poster.rust }}>{e.date}</span>
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="flex items-center gap-3" style={{ fontFamily: serif, fontSize: 24 }}>
              <Diamond size={11} color={poster.terracotta} />
              Leadership
            </h2>
            <ul className="mt-4 flex flex-col gap-1.5 text-[13px]" style={{ color: '#4a463d' }}>
              {leadership.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Diamond size={6} color={poster.rust} style={{ marginTop: 6 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </PosterLayout>
  )
}

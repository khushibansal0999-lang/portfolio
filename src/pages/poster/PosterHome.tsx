import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { PosterLayout } from './PosterLayout'
import { Diamond } from './Diamond'
import { poster } from './palette'
import { Seo } from '@/components/Seo'
import { caseStudies } from '@/content/caseStudies'
import { projects } from '@/content/projects'
import { roles, education } from '@/content/roles'
import heroPortrait from '@/assets/poster/hero-portrait.webp'
import heroMobile from '@/assets/poster/hero-mobile.webp'
import khushiIntro from '@/assets/poster/khushi-intro.webp'

const serif = "'DM Serif Display', Georgia, serif"
const mono = "'IBM Plex Mono', ui-monospace, monospace"

function GhostWord({ text, size }: { text: string; size: string }) {
  const shared = {
    margin: 0,
    textAlign: 'center' as const,
    fontFamily: serif,
    fontSize: size,
    lineHeight: 0.88,
    letterSpacing: '-0.01em',
  }
  return (
    <div className="relative">
      <p style={{ ...shared, color: '#e6e1d1', position: 'relative', zIndex: 2 }}>{text}</p>
      <p
        aria-hidden="true"
        style={{
          ...shared,
          color: 'transparent',
          WebkitTextStroke: `1px ${poster.marigold}`,
          opacity: 0.6,
          position: 'absolute',
          inset: 0,
        }}
      >
        {text}
      </p>
    </div>
  )
}

function Hero() {
  const shippedCount = projects.filter((p) => p.status === 'Live').length
  return (
    <section style={{ background: poster.forest, color: poster.textOnDark }} className="relative overflow-hidden">
      <Diamond size={16} color={poster.marigold} style={{ position: 'absolute', top: '14%', left: '6%' }} />
      <Diamond size={9} color={poster.marigold} style={{ position: 'absolute', top: '22%', left: '3%' }} />
      <Diamond size={12} color={poster.marigold} style={{ position: 'absolute', top: '58%', right: '5%' }} />
      <Diamond size={8} color={poster.terracotta} style={{ position: 'absolute', top: '8%', right: '10%' }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-11 pt-10 sm:pt-14 pb-12 sm:pb-16">
        <p
          className="text-center text-[11px] sm:text-xs tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: mono, color: poster.marigold }}
        >
          {roles[0]?.location === 'Remote' ? 'Open to Senior PM · Remote or Bengaluru' : 'Open to Senior PM'}
        </p>
        <GhostWord text="PORTFOLIO" size="clamp(52px, 12vw, 128px)" />
        <p
          className="text-center mt-4 sm:mt-6 text-base sm:text-xl"
          style={{ color: poster.mutedOnDark }}
        >
          Khushi Bansal — Product Manager, Deep Tech, AI &amp; Data-Driven Products
        </p>

        <div className="mt-10 sm:mt-14 grid gap-8 sm:grid-cols-[300px_1fr] items-start">
          <div>
            <div className="relative overflow-hidden" style={{ background: poster.terracotta, height: 300 }}>
              <picture>
                <source media="(max-width: 639px)" srcSet={heroMobile} />
                <img
                  src={heroPortrait}
                  alt="Khushi Bansal"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 15%', filter: 'grayscale(1) contrast(1.05)' }}
                />
              </picture>
              <div style={{ position: 'absolute', inset: 0, background: poster.terracotta, mixBlendMode: 'multiply', opacity: 0.55 }} />
            </div>
            <div style={{ background: poster.ink }} className="px-4 py-3.5">
              <p className="text-[11px] leading-relaxed" style={{ fontFamily: mono, color: poster.textOnDark }}>
                I make product decisions with evidence, write the artifact, and own the tradeoff.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:pt-4">
            <p className="leading-relaxed max-w-[58ch] text-sm sm:text-[15px]" style={{ color: poster.mutedOnDark }}>
              Four years of end-to-end product ownership at Ola Electric — shipping
              battery-management features to millions of EVs with no dedicated PM on the team. Now
              I build AI products solo, start to finish.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs sm:text-[13px]" style={{ fontFamily: mono }}>
              <span>
                <span style={{ color: poster.marigold }}>EM:</span> khushi.bansal0999@gmail.com
              </span>
              <span>
                <span style={{ color: poster.marigold }}>SHIPPED:</span> {shippedCount} live products
              </span>
            </div>
            <a
              href="mailto:khushi.bansal0999@gmail.com"
              className="inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold"
              style={{ background: poster.marigold, color: poster.ink }}
            >
              <Diamond size={9} color={poster.ink} />
              Get in touch!
            </a>
          </div>
        </div>
      </div>

      <div className="relative" style={{ background: poster.ink, height: 72 }}>
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 flex items-center justify-center text-center"
          style={{
            transform: 'translate(-50%,-50%)',
            width: 76,
            height: 76,
            borderRadius: '50%',
            background: poster.marigold,
            color: poster.forest,
            fontSize: 10,
            fontWeight: 700,
            lineHeight: 1.2,
            fontFamily: mono,
          }}
        >
          SCROLL
          <br />
          DOWN
        </div>
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section style={{ background: poster.cream, color: poster.ink }} className="px-5 sm:px-11 py-14 sm:py-16">
      <div className="max-w-6xl mx-auto grid gap-12 sm:grid-cols-[1fr_360px] items-center">
        <div>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(34px,5vw,58px)', lineHeight: 1.03 }}>
            Hello,
            <br />
            I'm Khushi!
          </h2>
          <p className="mt-5 leading-relaxed max-w-[52ch] text-[13.5px] sm:text-sm" style={{ color: '#3a3a35' }}>
            I joined Ola Electric in 2022 as a firmware engineer on battery management systems, and
            kept ending up doing the PM's job on top of the engineering anyway — writing the spec,
            reading the fleet telemetry, making the tradeoff call on decisions that shipped to
            millions of vehicles. I left in April 2026 to make the switch official. Now I build AI
            products solo, start to finish.
          </p>
          <a
            href="https://www.linkedin.com/in/khushi-bansal0999/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 mt-6 rounded-full px-5 py-2.5 text-xs sm:text-[13px] hover:opacity-90"
            style={{ background: poster.terracotta, color: '#fff' }}
          >
            <span className="w-4 h-4 rounded-full inline-block" style={{ background: '#fff' }} />
            linkedin.com/in/khushi-bansal0999
          </a>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute"
            style={{ top: 20, left: 20, right: 54, bottom: 20, background: poster.forest }}
          />
          <div className="relative ml-12 overflow-hidden" style={{ height: 300, background: '#d8d2c2' }}>
            <img
              src={khushiIntro}
              alt="Khushi Bansal"
              className="w-full h-full object-cover"
              style={{ objectPosition: '66% 28%' }}
            />
          </div>
          <span
            className="absolute rounded-full px-4 py-2 text-[11px] font-semibold"
            style={{ top: 48, left: 0, background: poster.marigold, color: poster.ink }}
          >
            Bengaluru, India
          </span>
          <span
            className="absolute rounded-full px-4 py-2 text-[11px] font-semibold"
            style={{ bottom: 128, right: 0, background: poster.marigold, color: poster.ink }}
          >
            Open to Senior PM
          </span>
          <div
            className="absolute px-[18px] py-4"
            style={{ bottom: -16, left: 48, right: 54, background: poster.ink, color: poster.textOnDark }}
          >
            <p style={{ fontFamily: serif, fontSize: 20 }}>Contact</p>
            <p className="mt-2 text-[11px] sm:text-xs leading-relaxed">
              khushi.bansal0999@gmail.com
              <br />
              Open to Senior PM roles · remote or Bengaluru
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrackRecordAndCaseStudies() {
  const timelineEntries = [
    ...roles.map((r) => ({
      key: r.id,
      period: r.isCurrent ? `${r.start} — ${r.title}` : `${r.start}–${r.end}`,
      title: r.company,
      detail: r.scope,
    })),
    ...education.map((e) => ({
      key: e.school,
      period: e.date,
      title: e.school,
      detail: `${e.degree}${e.detail ? ` · ${e.detail}` : ''}`,
    })),
  ]

  return (
    <section style={{ background: poster.forest, color: poster.textOnDark }} className="px-5 sm:px-11 py-14 sm:py-16">
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2">
        <div>
          <h3 style={{ fontFamily: serif, fontSize: 'clamp(28px,3.4vw,38px)', color: poster.marigold }}>
            Track record
          </h3>
          <div className="mt-6 flex flex-col gap-5">
            {timelineEntries.map((entry) => (
              <div key={entry.key} className="flex gap-3.5">
                <Diamond size={11} color={poster.terracotta} style={{ marginTop: 5 }} />
                <div>
                  <p className="text-[13px] sm:text-sm font-semibold">
                    {entry.period} — {entry.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: poster.mutedOnDark }}>
                    {entry.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6" style={{ background: poster.marigold, color: poster.ink }}>
            <h4 style={{ fontFamily: serif, fontSize: 30 }}>Case studies</h4>
            <div className="mt-4 flex flex-col gap-4">
              {caseStudies.map((cs) => (
                <Link key={cs.slug} to={`/work/${cs.slug}`} className="flex gap-3 group">
                  <Diamond size={10} color={poster.forest} style={{ marginTop: 5 }} />
                  <div>
                    <p className="text-[13px] font-bold group-hover:underline">
                      {cs.title}
                      {cs.heroMetric && <span className="font-normal"> · {cs.heroMetric.value}</span>}
                    </p>
                    <p className="mt-1 text-[11.5px] leading-relaxed">{cs.summary.slice(0, 140)}…</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Problem framing', 'PRDs', '0→1', 'Data fluency'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-1.5 text-[11px]"
                  style={{ background: poster.ink, color: poster.textOnDark }}
                >
                  #{tag.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 style={{ fontFamily: serif, fontSize: 'clamp(28px,3.4vw,38px)', color: poster.marigold }}>
            Toolkit
          </h3>
          <div className="grid grid-cols-2 gap-6 mt-5">
            <div>
              <p style={{ fontFamily: serif, fontSize: 19 }}>Product</p>
              <p className="mt-2 text-xs leading-loose" style={{ color: poster.mutedOnDark }}>
                PRDs &amp; acceptance criteria
                <br />
                Primary user research
                <br />
                KPI trees &amp; A/B design
                <br />
                MoSCoW prioritisation
              </p>
            </div>
            <div>
              <p style={{ fontFamily: serif, fontSize: 19 }}>Technical</p>
              <p className="mt-2 text-xs leading-loose" style={{ color: poster.mutedOnDark }}>
                Fleet telemetry analysis
                <br />
                Optimisation (LP, MPC)
                <br />
                Embedded systems
                <br />
                SQL · Python · RAG
              </p>
            </div>
          </div>

          <div className="mt-6 relative">
            <p
              style={{ fontFamily: serif, fontSize: 'clamp(38px,5vw,56px)', lineHeight: 0.95, color: 'transparent', WebkitTextStroke: `1px ${poster.marigold}`, opacity: 0.6 }}
            >
              SHIPPED
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-2.5">
            {projects.map((p) => {
              const to = p.liveUrl ?? (p.hasDetail ? `/projects/${p.slug}` : undefined)
              const row = (
                <div
                  className="flex justify-between pb-2.5 text-[12.5px]"
                  style={{ borderBottom: `1px solid ${poster.borderOnDark}` }}
                >
                  <span>{p.title}</span>
                  <span style={{ fontFamily: mono, fontSize: 10.5, color: p.status === 'Live' ? poster.marigold : poster.mutedOnDark }}>
                    {p.status === 'Live' ? 'LIVE ↗' : p.status.toUpperCase()}
                  </span>
                </div>
              )
              return to ? (
                p.liveUrl ? (
                  <a key={p.slug} href={to} target="_blank" rel="noreferrer" className="hover:opacity-80">
                    {row}
                  </a>
                ) : (
                  <Link key={p.slug} to={to} className="hover:opacity-80">
                    {row}
                  </Link>
                )
              ) : (
                <div key={p.slug}>{row}</div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function HowIWorkAndOutside() {
  const outside = [
    { label: 'Painting & writing', shape: 'diamond' as const },
    { label: 'Badminton, often', shape: 'circle' as const },
    { label: 'Always a book going', shape: 'square' as const },
    { label: 'Volunteering & mentoring', shape: 'rounded' as const },
  ]
  const shapeStyle = (shape: (typeof outside)[number]['shape']): CSSProperties => {
    switch (shape) {
      case 'diamond':
        return { transform: 'rotate(45deg)' }
      case 'circle':
        return { borderRadius: '50%' }
      case 'rounded':
        return { borderRadius: '999px 999px 0 999px' }
      default:
        return {}
    }
  }
  return (
    <section style={{ background: poster.cream, color: poster.ink }} className="px-5 sm:px-11 py-14 sm:py-16">
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2">
        <div>
          <h3 style={{ fontFamily: serif, fontSize: 'clamp(26px,3vw,34px)' }}>How I work</h3>
          <div className="mt-5 flex flex-col gap-4">
            <p className="text-[13px] leading-relaxed">
              The mutual-fund RAG assistant abstains and cites its sources instead of ever
              speculating — I'd rather it cover less and be right every time.
            </p>
            <p className="text-[13px] leading-relaxed">
              Fleet telemetry usually told me what to build next before a roadmap meeting could —
              separating real failure modes from sensor noise, not guessing at them.
            </p>
            <p className="text-[13px] leading-relaxed">
              Progressive thermal de-rating over a hard cutoff cost some peak performance, on
              purpose. A rider noticing a slower charge beats one who inherits a corner cut on
              safety.
            </p>
          </div>
        </div>
        <div>
          <h3 style={{ fontFamily: serif, fontSize: 'clamp(26px,3vw,34px)' }}>Outside work</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5 text-center">
            {outside.map((item) => (
              <div key={item.label}>
                <span
                  className="inline-block"
                  style={{ width: 34, height: 34, background: poster.marigold, ...shapeStyle(item.shape) }}
                />
                <p className="mt-4 text-[11.5px] leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function PosterHome() {
  return (
    <PosterLayout>
      <Seo
        title="Product Manager"
        description="Engineer-turned-PM shipping battery-management features to millions of EVs, now building AI products end to end."
      />
      <Hero />
      <Intro />
      <TrackRecordAndCaseStudies />
      <HowIWorkAndOutside />
    </PosterLayout>
  )
}

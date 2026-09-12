import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PosterLayout } from './PosterLayout'
import { Diamond } from './Diamond'
import { poster } from './palette'
import { Seo } from '@/components/Seo'

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
  return (
    <PosterLayout>
      <Seo title="About" description="Engineer-turned-PM: how I got here and how I work." />

      <header style={{ background: poster.forest, color: poster.textOnDark }} className="px-5 sm:px-11 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="flex items-center gap-3" style={{ fontFamily: serif, fontSize: 'clamp(34px,5vw,52px)' }}>
            <Diamond size={16} color={poster.marigold} />
            About me
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-[58ch]" style={{ color: poster.mutedOnDark }}>
            I spent four years being the de facto product manager on features that didn't have
            one, writing the spec, reading the fleet telemetry, making the tradeoff call on
            decisions that shipped to millions of vehicles. In 2026 I made that role official.
          </p>
        </div>
      </header>

      <article style={{ background: poster.cream, color: poster.ink }} className="px-5 sm:px-11 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-11">
          <Section title="The arc">
            <p className="leading-relaxed text-[14.5px] max-w-[68ch]" style={{ color: '#2c2b27' }}>
              I joined Ola Electric in 2022 as a firmware engineer on battery management systems.
              These modules didn't have a dedicated PM, so somewhere along the way I just started
              doing that job too: turning a vague "reduce charge time" ask into a shipped
              optimization framework, or deciding how much peak performance to trade away for rider
              safety in a thermal model. Fleet data usually told me what to build next before anyone
              had to ask. I left in April 2026 to make the switch official. Since then I've done a
              PM fellowship and shipped three solo AI products, brief, PRD, working prototype, the
              whole thing, because I wanted proof this was a real shift and not just a new title on
              a resume.
            </p>
          </Section>

          <Section title="How I work">
            <ul className="flex flex-col gap-4">
              {[
                <>
                  <strong>I ship the boundary, not just the feature.</strong> For a mutual-fund FAQ
                  assistant, the real product decision wasn't the retrieval pipeline. It was
                  making the assistant abstain and cite sources rather than ever speculate, since a
                  confident wrong answer in that domain is a trust and regulatory risk. I'd rather
                  cover less and be right every time.
                </>,
                <>
                  Mining charging, voltage, temperature, and fault telemetry across the fleet,
                  separating real failure modes from sensor noise, is what actually told us what
                  to build next, not a roadmap meeting. It cut fault false positives 80% and 25%
                  across two systems.
                </>,
                <>
                  Progressive thermal de-rating over a hard safety cutoff cost a bit of peak
                  performance, on purpose. I'd rather a rider notice a slightly slower charge than
                  have the product quietly inherit a default that cuts corners on safety.
                </>,
                <>
                  I wrote a 17-page PRD with Given/When/Then acceptance criteria and six non-goals
                  for a solo AI build that nobody but me would ever read. Not because anyone asked.
                  Sloppy specs make sloppy products, even when you're the only stakeholder.
                </>,
                <>
                  Spec ownership, cross-functional coordination, phased rollout on production
                  firmware, no PM in the room: that was just Tuesday at Ola for four years. The
                  pivot isn't really about the fellowship. It's catching my résumé up to what I was
                  already doing.
                </>,
              ].map((text, i) => (
                <li key={i} className="flex gap-3 leading-relaxed text-[13.5px] max-w-[64ch]">
                  <Diamond size={7} color={poster.rust} style={{ marginTop: 6 }} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="What I'm still building">
            <p className="leading-relaxed text-[14.5px] max-w-[64ch]" style={{ color: '#2c2b27' }}>
              Everything I've shipped so far, I've shipped alone, or without a PM in the room. That
              taught me ownership, but not yet what it's like to drive a roadmap through a team
              where I'm not also the one writing the code. That's the gap I want the next role to
              close.
            </p>
          </Section>

          <Section title="Outside work">
            <p className="leading-relaxed text-[14.5px] max-w-[64ch]" style={{ color: '#2c2b27' }}>
              I paint and write outside of anything that needs a deadline, play badminton badly but
              often, and I'm rarely without a book going. I also volunteer regularly, the same
              instinct that had me running webinars and mock-interview drives back in college, just
              less official about it now.
            </p>
          </Section>

          <div className="flex flex-wrap gap-4 pt-2 text-sm" style={{ fontFamily: mono, color: poster.rust }}>
            <Link to="/work-history" className="hover:underline">
              The full timeline →
            </Link>
            <Link to="/projects" className="hover:underline">
              What I've built on my own →
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

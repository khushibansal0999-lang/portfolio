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
      <Seo title="About" description="Engineer-turned-PM — how I got here and how I work." />

      <header style={{ background: poster.forest, color: poster.textOnDark }} className="px-5 sm:px-11 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="flex items-center gap-3" style={{ fontFamily: serif, fontSize: 'clamp(34px,5vw,52px)' }}>
            <Diamond size={16} color={poster.marigold} />
            About me
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-[58ch]" style={{ color: poster.mutedOnDark }}>
            I spent four years being the de facto product manager on features that didn't have
            one — writing the spec, reading the fleet telemetry, making the tradeoff call on
            decisions that shipped to millions of vehicles. In 2026 I made that role official.
          </p>
        </div>
      </header>

      <article style={{ background: poster.cream, color: poster.ink }} className="px-5 sm:px-11 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-11">
          <Section title="The arc">
            <p className="leading-relaxed text-[14.5px] max-w-[68ch]" style={{ color: '#2c2b27' }}>
              I joined Ola Electric in 2022 as a firmware engineer on battery management systems.
              What actually happened over the next four years is that I kept ending up doing the
              PM's job on top of the engineering — turning a vague "reduce charge time" ask into a
              shipped optimization framework, deciding how to trade peak performance against rider
              safety in a thermal model, mining fleet data across a million-plus vehicles to figure
              out what to build next — because these modules didn't have a dedicated PM. I left in
              April 2026 to make the switch formal. In the four months since, I've done a PM
              fellowship and shipped three solo AI products end to end — brief through PRD through
              working prototype — to prove the shift is real, not a resume rebrand.
            </p>
          </Section>

          <Section title="How I work">
            <ul className="flex flex-col gap-4">
              {[
                <>
                  <strong>I ship the boundary, not just the feature.</strong> For a mutual-fund FAQ
                  assistant, the real product decision wasn't the retrieval pipeline — it was
                  making the assistant abstain and cite sources rather than ever speculate, because
                  a confident wrong answer in that domain is a trust and regulatory risk. Coverage
                  traded for trust, deliberately.
                </>,
                <>
                  <strong>I let field data set the roadmap, not instinct.</strong> Mining charging,
                  voltage, temperature, and fault telemetry across the fleet — separating real
                  failure modes from sensor noise — cut fault false positives 80% and 25% across
                  two systems, and directly set what got built next.
                </>,
                <>
                  <strong>I make the call and own the tradeoff.</strong> Chose progressive thermal
                  de-rating over a hard safety cutoff — a small peak-performance loss traded on
                  purpose for reliability and rider experience, not a default I inherited.
                </>,
                <>
                  <strong>I write the artifact, not just the idea.</strong> A 17-page PRD with
                  Given/When/Then acceptance criteria and six explicit non-goals for a solo AI
                  build — the discipline of a real PRD, applied even when I was the only person who
                  had to read it.
                </>,
                <>
                  <strong>I'd already done this job before I had the title.</strong> Four years of
                  spec ownership, cross-functional coordination, and phased rollout on production
                  firmware, without a PM in the room, is the actual credential behind the pivot —
                  not the fellowship.
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
              Everything I've shipped, I've shipped alone or without a PM in the room — which
              taught me ownership, but not yet what it's like to drive a roadmap through a team
              where I'm not also the one writing the code. That's the gap the next role needs to
              close.
            </p>
          </Section>

          <Section title="Outside work">
            <p className="leading-relaxed text-[14.5px] max-w-[64ch]" style={{ color: '#2c2b27' }}>
              I paint and write outside of anything that needs a deadline, play badminton badly but
              often, and I'm rarely without a book going. I also volunteer regularly — same
              instinct that had me running webinars and mock-interview drives back in college, just
              less official about it now.
            </p>
          </Section>

          <div className="flex flex-wrap gap-4 pt-2 text-sm" style={{ fontFamily: mono, color: poster.rust }}>
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

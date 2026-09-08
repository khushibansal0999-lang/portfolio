import { Link } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Seo } from '@/components/Seo'

export function About() {
  return (
    <Layout>
      <Seo
        title="About"
        description="Engineer-turned-PM — how I got here and how I work."
      />
      <article className="max-w-2xl mx-auto px-6 pt-12 pb-24 space-y-10">
        <header>
          <h1 className="text-3xl font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
            About
          </h1>
          <p className="text-lg mt-4 leading-relaxed">
            I spent four years being the de facto product manager on features that
            didn’t have one — writing the spec, reading the fleet telemetry, making
            the tradeoff call on decisions that shipped to millions of vehicles. In
            2026 I made that role official.
          </p>
        </header>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
            The arc
          </h2>
          <p className="leading-relaxed">
            I joined Ola Electric in 2022 as a firmware engineer on battery
            management systems. What actually happened over the next four years is
            that I kept ending up doing the PM’s job on top of the engineering —
            turning a vague "reduce charge time" ask into a shipped optimization
            framework, deciding how to trade peak performance against rider safety
            in a thermal model, mining fleet data across a million-plus vehicles to
            figure out what to build next — because these modules didn’t have a
            dedicated PM. I left in April 2026 to make the switch formal. In the
            four months since, I’ve done a PM fellowship and shipped three solo AI
            products end to end — brief through PRD through working prototype — to
            prove the shift is real, not a resume rebrand.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
            How I work
          </h2>
          <ul className="space-y-4">
            <li>
              <strong>I ship the boundary, not just the feature.</strong> For a
              mutual-fund FAQ assistant, the real product decision wasn’t the
              retrieval pipeline — it was making the assistant abstain and cite
              sources rather than ever speculate, because a confident wrong answer
              in that domain is a trust and regulatory risk. Coverage traded for
              trust, deliberately.
            </li>
            <li>
              <strong>I let field data set the roadmap, not instinct.</strong>{' '}
              Mining charging, voltage, temperature, and fault telemetry across the
              fleet — separating real failure modes from sensor noise — cut fault
              false positives 80% and 25% across two systems, and directly set what
              got built next.
            </li>
            <li>
              <strong>I make the call and own the tradeoff.</strong> Chose
              progressive thermal de-rating over a hard safety cutoff — a small
              peak-performance loss traded on purpose for reliability and rider
              experience, not a default I inherited.
            </li>
            <li>
              <strong>I write the artifact, not just the idea.</strong> A 17-page
              PRD with Given/When/Then acceptance criteria and six explicit
              non-goals for a solo AI build — the discipline of a real PRD, applied
              even when I was the only person who had to read it.
            </li>
            <li>
              <strong>I’d already done this job before I had the title.</strong>{' '}
              Four years of spec ownership, cross-functional coordination, and
              phased rollout on production firmware, without a PM in the room, is
              the actual credential behind the pivot — not the fellowship.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
            What I’m still building
          </h2>
          <p className="leading-relaxed">
            Everything I’ve shipped, I’ve shipped alone or without a PM in the
            room — which taught me ownership, but not yet what it’s like to drive a
            roadmap through a team where I’m not also the one writing the code.
            That’s the gap the next role needs to close.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
            Outside work
          </h2>
          <p className="leading-relaxed">
            I paint and write outside of anything that needs a deadline, play
            badminton badly but often, and I’m rarely without a book going. I also
            volunteer regularly — same instinct that had me running webinars and
            mock-interview drives back in college, just less official about it now.
          </p>
        </section>

        <section className="flex gap-6 text-sm pt-2" style={{ color: 'var(--accent)' }}>
          <Link to="/work-history" className="hover:underline">
            The full timeline →
          </Link>
        </section>

        <section className="flex gap-4 pt-4">
          <a
            href="mailto:khushi.bansal0999@gmail.com"
            className="text-sm font-medium px-4 py-2 rounded"
            style={{ background: 'var(--accent)', color: 'var(--bg)', borderRadius: 'var(--radius)' }}
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

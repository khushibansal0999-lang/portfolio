import { Link } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Seo } from '@/components/Seo'
import { useTheme } from '@/theme/ThemeContext'
import { PosterAbout } from '@/pages/poster/PosterAbout'

export function About() {
  const { theme } = useTheme()
  if (theme === 'poster') return <PosterAbout />

  return (
    <Layout>
      <Seo
        title="About"
        description="Engineer-turned-PM — how I got here and how I work."
      />
      <article className="max-w-2xl mx-auto px-6 pt-12 pb-24 space-y-10" style={{ fontFamily: 'var(--font-about)' }}>
        <header>
          <h1 className="text-3xl font-medium">
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
            management systems. These modules didn't have a dedicated PM, so
            somewhere along the way I just started doing that job too — turning a
            vague "reduce charge time" ask into a shipped optimization framework, or
            deciding how much peak performance to trade away for rider safety in a
            thermal model. Fleet data usually told me what to build next before
            anyone had to ask. I left in April 2026 to make the switch official.
            Since then I've done a PM fellowship and shipped three solo AI products
            — brief, PRD, working prototype, the whole thing — because I wanted
            proof this was a real shift, not just a new title on a resume.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
            How I work
          </h2>
          <ul className="space-y-4">
            <li>
              <strong>I ship the boundary, not just the feature.</strong> For a
              mutual-fund FAQ assistant, the real product decision wasn't the
              retrieval pipeline — it was making the assistant abstain and cite
              sources rather than ever speculate, since a confident wrong answer in
              that domain is a trust and regulatory risk. I'd rather cover less and
              be right every time.
            </li>
            <li>
              Mining charging, voltage, temperature, and fault telemetry across the
              fleet — separating real failure modes from sensor noise — is what
              actually told us what to build next, not a roadmap meeting. It cut
              fault false positives 80% and 25% across two systems.
            </li>
            <li>
              Progressive thermal de-rating over a hard safety cutoff cost a bit of
              peak performance, on purpose. I'd rather a rider notice a slightly
              slower charge than have the product quietly inherit a default that
              cuts corners on safety.
            </li>
            <li>
              I wrote a 17-page PRD with Given/When/Then acceptance criteria and six
              non-goals for a solo AI build that nobody but me would ever read. Not
              because anyone asked — sloppy specs make sloppy products, even when
              you're the only stakeholder.
            </li>
            <li>
              Spec ownership, cross-functional coordination, phased rollout on
              production firmware, no PM in the room — that was just Tuesday at Ola
              for four years. The pivot isn't really about the fellowship. It's
              catching my résumé up to what I was already doing.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
            What I’m still building
          </h2>
          <p className="leading-relaxed">
            Everything I've shipped so far, I've shipped alone, or without a PM in
            the room. That taught me ownership — but not yet what it's like to
            drive a roadmap through a team where I'm not also the one writing the
            code. That's the gap I want the next role to close.
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

        <section className="flex gap-6 text-sm pt-2" style={{ color: 'var(--accent-strong)' }}>
          <Link to="/work-history" className="hover:underline">
            The full timeline →
          </Link>
          <Link to="/projects" className="hover:underline">
            What I've built on my own →
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

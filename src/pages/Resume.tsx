import { Layout } from '@/components/Layout'
import { Seo } from '@/components/Seo'
import { roles, education, leadership } from '@/content/roles'
import { contact } from '@/content/contact'
import { useTheme } from '@/theme/ThemeContext'
import { PosterResume } from '@/pages/poster/PosterResume'

export function Resume() {
  const { theme } = useTheme()
  if (theme === 'poster') return <PosterResume />

  return (
    <Layout>
      <Seo title="Resume" description="Khushi Bansal's resume." />
      <article className="max-w-2xl mx-auto px-6 pt-12 pb-24">
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
              Khushi Bansal
            </h1>
            <p style={{ color: 'var(--text-muted)' }}>Product Manager · Deep Tech, AI &amp; Data-Driven Products</p>
            <p className="text-sm mt-1 flex flex-wrap gap-x-2 gap-y-1" style={{ color: 'var(--text-muted)' }}>
              <a href={`mailto:${contact.email}`} className="hover:underline">
                {contact.email}
              </a>
              <span aria-hidden="true">·</span>
              <a href={contact.phoneHref} className="hover:underline">
                {contact.phone}
              </a>
              <span aria-hidden="true">·</span>
              <span>{contact.location}</span>
            </p>
            <p className="text-sm mt-1 flex flex-wrap gap-x-2" style={{ color: 'var(--accent-strong)' }}>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                LinkedIn ↗
              </a>
              <span aria-hidden="true" style={{ color: 'var(--text-muted)' }}>
                ·
              </span>
              <a href={contact.github} target="_blank" rel="noreferrer" className="hover:underline">
                GitHub ↗
              </a>
            </p>
          </div>
          <a
            href="/resume.pdf"
            className="shrink-0 text-sm font-medium px-4 py-2 rounded border"
            style={{ borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
          >
            Download PDF
          </a>
        </div>

        <section className="mb-10">
          <p className="leading-relaxed">
            Engineer moving into product management. 3.9 years at Ola Electric
            owning battery-management features end to end across millions of EVs:
            ₹3 Cr of scrapped hardware recovered, false failure alerts cut 80%, one
            patent co-filed. Top Fellow at Next Leap. I scope ambiguous problems into
            specs, mine fleet telemetry to decide what to build, and drive delivery
            across teams to launch. Now building AI products solo, from problem
            definition through to a shipped app.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
            Experience
          </h2>
          <div className="space-y-8">
            {roles.map((role) => (
              <div key={role.id}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold">
                    {role.title} · {role.company}
                  </h3>
                  <span className="text-xs shrink-0" style={{ color: 'var(--text-muted)' }}>
                    {role.start} – {role.end}
                  </span>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {role.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm leading-relaxed flex gap-2">
                      <span style={{ color: 'var(--accent-strong)' }}>·</span>
                      <span>{bullet.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
            Education
          </h2>
          {education.map((e) => (
            <p key={e.school} className="text-sm">
              <span className="font-medium">{e.degree}</span> · {e.school}
              {e.detail && <span style={{ color: 'var(--text-muted)' }}> ({e.detail})</span>} ·{' '}
              <span style={{ color: 'var(--text-muted)' }}>{e.date}</span>
            </p>
          ))}
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
            Leadership
          </h2>
          <ul className="text-sm space-y-1" style={{ color: 'var(--text-muted)' }}>
            {leadership.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </article>
    </Layout>
  )
}

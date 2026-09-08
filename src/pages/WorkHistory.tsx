import { Link } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Seo } from '@/components/Seo'
import { roles, education, leadership } from '@/content/roles'
import { useTheme } from '@/theme/ThemeContext'

export function WorkHistory() {
  const { t } = useTheme()

  return (
    <Layout>
      <Seo title="Work History" description="Full career timeline." />
      <article className="max-w-2xl mx-auto px-6 pt-12 pb-24">
        <h1 className="text-3xl font-medium mb-10" style={{ fontFamily: 'var(--font-heading)' }}>
          {t.workHistory.pageHeading}
        </h1>

        <div className="space-y-12 border-l pl-6" style={{ borderColor: 'var(--border)' }}>
          {roles.map((role) => (
            <div key={role.id} className="relative">
              <span
                className="absolute -left-[calc(1.5rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full"
                style={{ background: role.isCurrent ? 'var(--accent)' : 'var(--border)' }}
              />
              {role.isCurrent && (
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'var(--accent)' }}>
                  {t.workHistory.nowLabel}
                </p>
              )}
              <h2 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
                {role.company}
              </h2>
              <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {role.title} · {role.start} – {role.end} · {role.location}
              </p>
              {role.companyBlurb && (
                <p className="text-sm mt-2 italic" style={{ color: 'var(--text-muted)' }}>
                  {role.companyBlurb}
                </p>
              )}
              <p className="text-sm mt-2 leading-relaxed">{role.scope}</p>
              <ul className="mt-4 space-y-2">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm leading-relaxed flex gap-2">
                    <span style={{ color: 'var(--accent)' }}>—</span>
                    <span>
                      {bullet.text}{' '}
                      {bullet.caseStudySlug && (
                        <Link to={`/work/${bullet.caseStudySlug}`} className="hover:underline" style={{ color: 'var(--accent)' }}>
                          Case study →
                        </Link>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
            Education
          </h2>
          {education.map((e) => (
            <div key={e.school} className="text-sm leading-relaxed">
              <span className="font-medium">{e.school}</span> — {e.degree}
              {e.detail && <span style={{ color: 'var(--text-muted)' }}> · {e.detail}</span>} ·{' '}
              <span style={{ color: 'var(--text-muted)' }}>{e.date}</span>
            </div>
          ))}
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
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

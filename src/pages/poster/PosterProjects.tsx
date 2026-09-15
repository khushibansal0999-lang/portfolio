import { Link } from 'react-router-dom'
import { PosterLayout } from './PosterLayout'
import { Diamond } from './Diamond'
import { poster } from './palette'
import { Seo } from '@/components/Seo'
import { ViewDeck } from '@/components/ViewDeck'
import type { WorkItem } from '@/content/workItems'
import { useWorkGroups } from '@/drafts/useWorkGroups'
import { useTheme } from '@/theme/ThemeContext'

const serif = "'DM Serif Display', Georgia, serif"
const mono = "'IBM Plex Mono', ui-monospace, monospace"

function PosterWorkCard({ item }: { item: WorkItem }) {
  return (
    <div className="flex flex-col" style={{ background: poster.creamPaper, border: `1px solid ${poster.borderOnDark}22` }}>
      {item.cover && (
        <img src={item.cover} alt="" loading="lazy" className="w-full aspect-video object-cover object-top" />
      )}
      <div className="p-5 flex flex-col flex-1">
        {item.isDraft && (
          <p className="text-[10.5px] uppercase tracking-widest mb-2" style={{ fontFamily: mono, color: poster.rust }}>
            Draft · only visible on this browser
          </p>
        )}
        <div className="flex items-start justify-between gap-3">
          <h3 style={{ fontFamily: serif, fontSize: 20 }}>{item.title}</h3>
          {item.status && (
            <span
              className="shrink-0 flex items-center gap-1.5 text-[10.5px] px-2.5 py-1 rounded-full"
              style={{ border: `1px solid ${poster.rust}55`, color: poster.rust }}
            >
              <Diamond size={6} color={poster.marigold} style={{ transform: 'none', borderRadius: '50%' }} />
              {item.status}
            </span>
          )}
        </div>

        <p className="text-[13px] mt-2 leading-relaxed" style={{ color: '#4a463d' }}>
          {item.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {item.meta.map((m) => (
            <span key={m} className="text-[10.5px] px-2 py-1 rounded-full" style={{ background: poster.accentSoft, color: poster.rust }}>
              {m}
            </span>
          ))}
        </div>

        <div
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-semibold"
          style={{ marginTop: 'auto', paddingTop: 16 }}
        >
          {item.links.map((link) =>
            link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="hover:underline" style={{ color: poster.rust }}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} to={link.href} className="hover:underline" style={{ color: poster.rust }}>
                {link.label}
              </Link>
            ),
          )}
          {item.decks?.map((d) => (
            <ViewDeck key={d.href} href={d.href} label={d.label} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function PosterProjects() {
  const { t } = useTheme()
  const groups = useWorkGroups()

  return (
    <PosterLayout>
      <Seo
        title={t.nav.projects}
        description="Case studies, builds, teardowns, and analysis: the full library of what I've shipped and taken apart."
      />
      <header style={{ background: poster.forest, color: poster.textOnDark }} className="px-5 sm:px-11 py-12 sm:py-14">
        <div className="max-w-6xl mx-auto">
          <h1 className="flex items-center gap-3" style={{ fontFamily: serif, fontSize: 'clamp(34px,5vw,52px)' }}>
            <Diamond size={16} color={poster.marigold} />
            {t.nav.projects}
          </h1>
          <p className="mt-3 max-w-[58ch] text-sm" style={{ color: poster.mutedOnDark }}>
            Everything here is mine end to end. Case studies and builds, plus the teardowns and
            analysis I write to keep the muscle warm.
          </p>

          {/* Jump links, so someone scanning for one kind of artifact lands on it directly. */}
          <nav className="flex flex-wrap gap-2 mt-6">
            {groups.map(({ category, items }) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="text-[11px] px-3 py-1.5 rounded-full hover:opacity-80"
                style={{ border: `1px solid ${poster.borderOnDark}`, color: poster.marigold, fontFamily: mono }}
              >
                {category.label} ({items.length})
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div style={{ background: poster.cream }} className="px-5 sm:px-11 py-12 sm:py-14">
        <div className="max-w-6xl mx-auto flex flex-col gap-14">
          {groups.map(({ category, items }) => (
            <section key={category.id} id={category.id} className="scroll-mt-20">
              <h2 className="flex items-center gap-3" style={{ fontFamily: serif, fontSize: 'clamp(24px,3vw,30px)' }}>
                <Diamond size={11} color={poster.terracotta} />
                {category.label}
              </h2>
              <p className="mt-2 mb-6 max-w-[58ch] text-[13px]" style={{ color: '#4a463d' }}>
                {category.blurb}
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                {items.map((item) => (
                  <PosterWorkCard key={item.key} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </PosterLayout>
  )
}

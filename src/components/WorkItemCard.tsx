import { Link } from 'react-router-dom'
import { ViewDeck } from './ViewDeck'
import type { WorkItem } from '@/content/workItems'

// One card shape for everything in the work library, whatever file it was authored in.
// Each destination is its own real link, never a card-wide <a>, so a label always goes
// where it says it goes.
export function WorkItemCard({ item }: { item: WorkItem }) {
  return (
    <div
      className="border overflow-hidden flex flex-col"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--bg-elevated)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)',
      }}
    >
      {item.cover && (
        <img src={item.cover} alt="" loading="lazy" className="w-full aspect-video object-cover object-top" />
      )}
      <div className="p-5 flex flex-col flex-1">
        {item.isDraft && (
          <p className="text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--accent-strong)' }}>
            Draft · only visible on this browser
          </p>
        )}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
            {item.title}
          </h3>
          {item.status && (
            <span
              className="shrink-0 text-[11px] px-2 py-0.5 rounded-full border"
              style={{ borderColor: 'var(--border)', color: 'var(--accent-strong)' }}
            >
              {item.status}
            </span>
          )}
        </div>

        <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {item.summary}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {item.meta.map((m) => (
            <span
              key={m}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ background: 'var(--accent-soft)', color: 'var(--accent-strong)' }}
            >
              {m}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm" style={{ marginTop: 'auto', paddingTop: 16 }}>
          {item.links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-medium hover:underline"
                style={{ color: 'var(--accent-strong)' }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="font-medium hover:underline"
                style={{ color: 'var(--accent-strong)' }}
              >
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

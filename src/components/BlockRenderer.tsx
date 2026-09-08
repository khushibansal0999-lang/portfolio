import type { Block } from '@/content/types'
import { Link } from 'react-router-dom'

// Theme-agnostic on purpose — see PLAN.md Phase 4. Renders identically in every theme;
// only the surrounding page/card chrome differs.
export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => (
        <BlockItem key={i} block={block} />
      ))}
    </div>
  )
}

function BlockItem({ block }: { block: Block }) {
  switch (block.kind) {
    case 'heading':
      return (
        <h2
          className="text-xl font-semibold mt-10 mb-2"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {block.text}
        </h2>
      )
    case 'paragraph':
      return (
        <p className="leading-relaxed max-w-[68ch]" style={{ color: 'var(--text)' }}>
          {block.text}
        </p>
      )
    case 'image':
      return (
        <figure>
          <img src={block.src} alt={block.alt} className="rounded w-full" style={{ borderRadius: 'var(--radius)' }} />
          {block.caption && (
            <figcaption className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
              {block.caption}
            </figcaption>
          )}
        </figure>
      )
    case 'quote':
      return (
        <blockquote
          className="border-l-2 pl-4 italic max-w-[60ch]"
          style={{ borderColor: 'var(--accent)', color: 'var(--text)' }}
        >
          “{block.text}”
          {block.attribution && (
            <footer className="text-sm not-italic mt-1" style={{ color: 'var(--text-muted)' }}>
              — {block.attribution}
            </footer>
          )}
        </blockquote>
      )
    case 'metrics':
      return (
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
          {block.items.map((item, i) => (
            <div
              key={i}
              className="border rounded p-3"
              style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}
            >
              <dt className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                {item.label}
              </dt>
              <dd className="text-lg font-semibold mt-1" style={{ color: 'var(--accent-strong)', fontFamily: 'var(--font-heading)' }}>
                {item.value}
              </dd>
              {item.baseline && (
                <dd className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  {item.baseline}
                </dd>
              )}
            </div>
          ))}
        </dl>
      )
    case 'list':
      return (
        <ul className="space-y-2 max-w-[68ch]">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2 leading-relaxed">
              <span style={{ color: 'var(--accent-strong)' }}>—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'link': {
      const isExternal = block.href.startsWith('http')
      const className = 'inline-block font-medium hover:underline'
      const style = { color: 'var(--accent-strong)' }
      return isExternal ? (
        <a href={block.href} target="_blank" rel="noreferrer" className={className} style={style}>
          {block.text}
        </a>
      ) : (
        <Link to={block.href} className={className} style={style}>
          {block.text}
        </Link>
      )
    }
  }
}

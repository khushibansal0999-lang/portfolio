import { Link } from 'react-router-dom'
import type { Block } from '@/content/types'
import { Diamond } from './Diamond'
import { poster } from './palette'

const serif = "'DM Serif Display', Georgia, serif"
const mono = "'IBM Plex Mono', ui-monospace, monospace"

export function PosterBlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-7">
      {blocks.map((block, i) => (
        <PosterBlockItem key={i} block={block} />
      ))}
    </div>
  )
}

function PosterBlockItem({ block }: { block: Block }) {
  switch (block.kind) {
    case 'heading':
      return (
        <h2 className="flex items-center gap-3 mt-3" style={{ fontFamily: serif, fontSize: 'clamp(22px,3vw,28px)' }}>
          <Diamond size={11} color={poster.terracotta} />
          {block.text}
        </h2>
      )
    case 'paragraph':
      return (
        <p className="leading-relaxed max-w-[68ch] text-[14.5px]" style={{ color: '#2c2b27' }}>
          {block.text}
        </p>
      )
    case 'image':
      return (
        <figure>
          <img src={block.src} alt={block.alt} className="w-full" />
          {block.caption && (
            <figcaption className="text-xs mt-2" style={{ color: poster.rust, fontFamily: mono }}>
              {block.caption}
            </figcaption>
          )}
        </figure>
      )
    case 'quote':
      return (
        <blockquote
          className="pl-5 py-1 max-w-[58ch]"
          style={{ borderLeft: `3px solid ${poster.marigold}`, fontFamily: serif, fontSize: 19, fontStyle: 'italic', lineHeight: 1.5 }}
        >
          “{block.text}”
          {block.attribution && (
            <footer className="text-xs mt-2 not-italic" style={{ fontFamily: mono, color: poster.rust }}>
              — {block.attribution}
            </footer>
          )}
        </blockquote>
      )
    case 'metrics':
      return (
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {block.items.map((item, i) => (
            <div key={i} className="p-4" style={{ background: poster.forest, color: poster.textOnDark }}>
              <dt className="text-[10px] uppercase tracking-wide" style={{ fontFamily: mono, color: poster.mutedOnDark }}>
                {item.label}
              </dt>
              <dd className="text-lg font-semibold mt-1.5" style={{ fontFamily: serif, color: poster.marigold }}>
                {item.value}
              </dd>
              {item.baseline && (
                <dd className="text-[10.5px] mt-0.5" style={{ color: poster.mutedOnDark }}>
                  {item.baseline}
                </dd>
              )}
            </div>
          ))}
        </dl>
      )
    case 'list':
      return (
        <ul className="flex flex-col gap-2.5 max-w-[68ch]">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-[13.5px]">
              <Diamond size={7} color={poster.rust} style={{ marginTop: 6 }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'link': {
      const isExternal = block.href.startsWith('http')
      const className = 'inline-flex items-center gap-1.5 font-semibold hover:underline'
      const style = { color: poster.rust }
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

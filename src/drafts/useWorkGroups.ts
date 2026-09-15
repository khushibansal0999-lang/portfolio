import { useEffect, useState } from 'react'
import { groupItems, workItems, type WorkGroup, type WorkItem } from '@/content/workItems'
import { listDrafts, subscribe, type DraftEntry } from './draftStore'

// The work page reads its groups through this hook so unpublished local drafts
// show up next to the real entries, in the right category, marked as drafts.
// Published content still comes from src/content/*.ts; drafts are additive only.

function draftToWorkItem(d: DraftEntry): WorkItem {
  const links = d.linkHref
    ? [{ label: d.linkLabel || 'Open ↗', href: d.linkHref, external: /^https?:/.test(d.linkHref) }]
    : []
  return {
    key: `draft-${d.id}`,
    title: d.title,
    summary: d.summary,
    category: d.category,
    meta: [
      ...(d.timeframe ? [d.timeframe] : []),
      ...d.tags,
      // The file itself is a blob in IndexedDB, not a hosted URL yet, so name it
      // rather than linking it. /add has the download button that publishes it.
      ...(d.deckFileName ? [`Deck attached: ${d.deckFileName}`] : []),
    ],
    status: d.status,
    links,
    isDraft: true,
  }
}

export function useWorkGroups(): WorkGroup[] {
  const [drafts, setDrafts] = useState<DraftEntry[]>(() => listDrafts())

  useEffect(() => subscribe(() => setDrafts(listDrafts())), [])

  return groupItems([...workItems, ...drafts.map(draftToWorkItem)])
}

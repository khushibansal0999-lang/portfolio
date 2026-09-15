// Local draft store for the /add form.
//
// The site is a static SPA with no backend, so a draft created in the browser
// lives in the browser: the entry JSON in localStorage, the deck/cover files as
// blobs in IndexedDB (localStorage would blow its ~5MB quota on one PDF).
// Drafts render on the work page for the author only, marked as drafts, and
// publishing means copying the generated snippet into src/content/projects.ts
// and dropping the files into public/. See CONTENT.md.

import type { ProjectStatus, WorkCategory } from '@/content/types'

export interface DraftEntry {
  id: string
  slug: string
  title: string
  summary: string
  category: WorkCategory
  status: ProjectStatus
  timeframe: string
  tags: string[]
  linkHref: string
  linkLabel: string
  deckFileName: string
  deckLabel: string
  coverFileName: string
  hasDetail: boolean
  firstLabel: string
  firstBody: string
  secondLabel: string
  secondBody: string
  createdAt: string
}

const STORAGE_KEY = 'portfolio-drafts'
const DB_NAME = 'portfolio-draft-files'
const STORE = 'files'

/* ---------------- entries (localStorage) ---------------- */

const listeners = new Set<() => void>()

export function subscribe(fn: () => void) {
  listeners.add(fn)
  return () => {
    listeners.delete(fn)
  }
}

function emit() {
  listeners.forEach((fn) => fn())
}

export function listDrafts(): DraftEntry[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as DraftEntry[]) : []
  } catch {
    // Unreadable or unavailable storage (private browsing, cleared data).
    return []
  }
}

function writeDrafts(drafts: DraftEntry[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts))
  } catch {
    // Quota or private browsing. The caller already has the entry in hand and
    // can still copy the snippet, so failing to cache it is not fatal.
  }
  emit()
}

export function saveDraft(draft: DraftEntry) {
  const rest = listDrafts().filter((d) => d.id !== draft.id)
  writeDrafts([draft, ...rest])
}

export function deleteDraft(id: string) {
  writeDrafts(listDrafts().filter((d) => d.id !== id))
  void deleteFile(`${id}:deck`)
  void deleteFile(`${id}:cover`)
}

/* ---------------- files (IndexedDB) ---------------- */

function openDb(): Promise<IDBDatabase | null> {
  return new Promise((resolve) => {
    if (typeof indexedDB === 'undefined') return resolve(null)
    const req = indexedDB.open(DB_NAME, 1)
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE)
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => resolve(null)
  })
}

export async function putFile(key: string, file: Blob): Promise<void> {
  const db = await openDb()
  if (!db) return
  await new Promise<void>((resolve) => {
    const tx = db.transaction(STORE, 'readwrite')
    tx.objectStore(STORE).put(file, key)
    tx.oncomplete = () => resolve()
    tx.onerror = () => resolve()
  })
}

export async function getFile(key: string): Promise<Blob | null> {
  const db = await openDb()
  if (!db) return null
  return new Promise((resolve) => {
    const tx = db.transaction(STORE, 'readonly')
    const req = tx.objectStore(STORE).get(key)
    req.onsuccess = () => resolve((req.result as Blob) ?? null)
    req.onerror = () => resolve(null)
  })
}

export async function deleteFile(key: string): Promise<void> {
  const db = await openDb()
  if (!db) return
  await new Promise<void>((resolve) => {
    const tx = db.transaction(STORE, 'readwrite')
    tx.objectStore(STORE).delete(key)
    tx.oncomplete = () => resolve()
    tx.onerror = () => resolve()
  })
}

/** Hands the stored file back to the author so they can drop it into public/. */
export async function downloadFile(key: string, fileName: string) {
  const blob = await getFile(key)
  if (!blob) return false
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
  return true
}

/* ---------------- helpers ---------------- */

export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
}

function tsString(value: string) {
  return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ')}'`
}

/** The exact object to paste into the `projects` array in src/content/projects.ts. */
export function toSnippet(d: DraftEntry): string {
  const lines: string[] = ['  {']
  lines.push(`    slug: ${tsString(d.slug)},`)
  lines.push(`    title: ${tsString(d.title)},`)
  lines.push(`    summary:\n      ${tsString(d.summary)},`)
  lines.push(`    category: ${tsString(d.category)},`)
  lines.push(`    status: ${tsString(d.status)},`)
  lines.push(`    stack: [${d.tags.map(tsString).join(', ')}],`)
  if (d.timeframe) lines.push(`    timeframe: ${tsString(d.timeframe)},`)
  if (d.linkHref) lines.push(`    liveUrl: ${tsString(d.linkHref)},`)
  if (d.coverFileName) lines.push(`    cover: ${tsString(`/projects/${d.coverFileName}`)},`)
  if (d.deckFileName)
    lines.push(
      `    decks: [{ href: ${tsString(`/decks/${d.deckFileName}`)}, label: ${tsString(d.deckLabel || 'View deck')} }],`,
    )
  lines.push(`    hasDetail: ${d.hasDetail},`)
  if (d.hasDetail && d.firstBody) {
    if (d.firstLabel) lines.push(`    whyBuiltLabel: ${tsString(d.firstLabel)},`)
    lines.push(`    whyBuilt:\n      ${tsString(d.firstBody)},`)
  }
  if (d.hasDetail && d.secondBody) {
    if (d.secondLabel) lines.push(`    lessonLabel: ${tsString(d.secondLabel)},`)
    lines.push(`    lesson:\n      ${tsString(d.secondBody)},`)
  }
  lines.push('  },')
  return lines.join('\n')
}

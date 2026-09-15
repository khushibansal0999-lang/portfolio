import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { WORK_CATEGORIES } from '@/content/categories'
import { projects } from '@/content/projects'
import type { ProjectStatus, WorkCategory } from '@/content/types'
import {
  deleteDraft,
  downloadFile,
  listDrafts,
  putFile,
  saveDraft,
  slugify,
  subscribe,
  toSnippet,
  type DraftEntry,
} from './draftStore'

// The author-only "add an entry" dialog, reachable at /add and linked from
// nowhere on the public site. It writes a local draft (see draftStore.ts), shows
// it on the work page immediately so the tile can be checked, and hands back the
// snippet plus the files needed to publish it for real.

const STATUSES: ProjectStatus[] = ['Live', 'Experiment', 'Archived']

/** Section labels that fit each kind of entry, used as defaults on the detail page. */
const SECTION_DEFAULTS: Record<WorkCategory, { first: string; second: string }> = {
  'case-study': { first: 'Context', second: "What I'd do differently" },
  build: { first: 'Why I built it', second: "What I'd do differently" },
  teardown: { first: 'Scope & lens', second: 'The recommendation' },
  research: { first: 'Method', second: 'What it changed' },
  'market-analysis': { first: 'The landscape', second: 'What it leaves open' },
  'ux-analysis': { first: 'What I looked at', second: 'The fix I would ship' },
  metrics: { first: 'The question', second: 'The design' },
  strategy: { first: 'The bet', second: 'Why not the alternatives' },
}

/** What the outbound link means for this kind of entry. */
function linkHint(category: WorkCategory) {
  return category === 'build'
    ? { label: 'Live URL', hint: 'Where the working product lives', defaultLabel: 'Live ↗' }
    : { label: 'Link (optional)', hint: 'Anything worth opening: a doc, a board, a source', defaultLabel: 'Open ↗' }
}

const emptyForm = {
  title: '',
  summary: '',
  category: 'teardown' as WorkCategory,
  status: 'Experiment' as ProjectStatus,
  timeframe: '',
  tags: '',
  linkHref: '',
  linkLabel: '',
  deckLabel: 'View deck',
  hasDetail: true,
  firstLabel: '',
  firstBody: '',
  secondLabel: '',
  secondBody: '',
}

export function AddEntryModal() {
  const location = useLocation()
  const navigate = useNavigate()
  const open = location.pathname === '/add'

  if (!open) return null
  return <AddEntryDialog onClose={() => navigate('/projects')} />
}

function AddEntryDialog({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState(emptyForm)
  const [deck, setDeck] = useState<File | null>(null)
  const [cover, setCover] = useState<File | null>(null)
  const [drafts, setDrafts] = useState<DraftEntry[]>(() => listDrafts())
  const [saved, setSaved] = useState<DraftEntry | null>(null)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const firstField = useRef<HTMLInputElement>(null)

  useEffect(() => subscribe(() => setDrafts(listDrafts())), [])
  useEffect(() => firstField.current?.focus(), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const set = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [key]: value }))

  const defaults = SECTION_DEFAULTS[form.category]
  const link = linkHint(form.category)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!form.title.trim()) return setError('Give it a name to display.')
    if (!form.summary.trim()) return setError('Add the one-line summary. It is what shows on the tile.')

    const slug = slugify(form.title)
    if (!slug) return setError('That name has no letters or numbers in it to build a URL from.')
    if (projects.some((p) => p.slug === slug))
      return setError(`A published entry already uses the URL /projects/${slug}. Change the name.`)

    const id = `${slug}-${Date.now().toString(36)}`
    const deckFileName = deck ? `${slug}${extensionOf(deck.name, '.pdf')}` : ''
    const coverFileName = cover ? `${slug}-cover${extensionOf(cover.name, '.webp')}` : ''

    const draft: DraftEntry = {
      id,
      slug,
      title: form.title.trim(),
      summary: form.summary.trim(),
      category: form.category,
      status: form.status,
      timeframe: form.timeframe.trim(),
      tags: form.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      linkHref: form.linkHref.trim(),
      linkLabel: form.linkLabel.trim() || link.defaultLabel,
      deckFileName,
      deckLabel: form.deckLabel.trim() || 'View deck',
      coverFileName,
      hasDetail: form.hasDetail,
      firstLabel: form.firstLabel.trim() || defaults.first,
      firstBody: form.firstBody.trim(),
      secondLabel: form.secondLabel.trim() || defaults.second,
      secondBody: form.secondBody.trim(),
      createdAt: new Date().toISOString(),
    }

    if (deck) await putFile(`${id}:deck`, deck)
    if (cover) await putFile(`${id}:cover`, cover)
    saveDraft(draft)
    setSaved(draft)
    setForm(emptyForm)
    setDeck(null)
    setCover(null)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Add a work entry"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:p-8"
      style={{ background: 'rgba(15, 15, 15, 0.6)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="w-full max-w-2xl my-auto border"
        style={{
          background: 'var(--bg)',
          color: 'var(--text)',
          borderColor: 'var(--border)',
          borderRadius: 'var(--radius)',
          fontFamily: 'var(--font-body)',
        }}
      >
        <header
          className="flex items-start justify-between gap-4 px-6 py-5 border-b"
          style={{ borderColor: 'var(--border)' }}
        >
          <div>
            <h2 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
              Add to the work library
            </h2>
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              Saves as a draft on this browser only. Publishing is the copy step at the end.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 text-lg leading-none px-2 py-1 hover:opacity-60"
            style={{ color: 'var(--text-muted)' }}
          >
            ✕
          </button>
        </header>

        {saved ? (
          <PublishPanel draft={saved} copied={copied} setCopied={setCopied} onDone={() => setSaved(null)} />
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-5 flex flex-col gap-5">
            <Field label="Name to display" required>
              <input
                ref={firstField}
                value={form.title}
                onChange={(e) => set('title', e.target.value)}
                placeholder="Spotify Wrapped Teardown"
                style={inputStyle}
                className="w-full px-3 py-2 border"
              />
            </Field>

            <Field label="Type of content" required hint="Decides which section of the work page it lands in.">
              <select
                value={form.category}
                onChange={(e) => set('category', e.target.value as WorkCategory)}
                style={inputStyle}
                className="w-full px-3 py-2 border"
              >
                {WORK_CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="One-line summary" required hint="This is the text on the tile. Two sentences at most.">
              <textarea
                value={form.summary}
                onChange={(e) => set('summary', e.target.value)}
                rows={3}
                placeholder="What it is and why it was worth doing."
                style={inputStyle}
                className="w-full px-3 py-2 border"
              />
            </Field>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="When" hint="Shows as the first pill.">
                <input
                  value={form.timeframe}
                  onChange={(e) => set('timeframe', e.target.value)}
                  placeholder="October 2026"
                  style={inputStyle}
                  className="w-full px-3 py-2 border"
                />
              </Field>
              <Field label="Status">
                <select
                  value={form.status}
                  onChange={(e) => set('status', e.target.value as ProjectStatus)}
                  style={inputStyle}
                  className="w-full px-3 py-2 border"
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Tags" hint="Comma separated. They render as pills: Retention analysis, Pricing">
              <input
                value={form.tags}
                onChange={(e) => set('tags', e.target.value)}
                placeholder="Retention analysis, Engagement loops"
                style={inputStyle}
                className="w-full px-3 py-2 border"
              />
            </Field>

            <fieldset className="border px-4 py-4 flex flex-col gap-4" style={{ borderColor: 'var(--border)' }}>
              <legend className="text-xs uppercase tracking-widest px-1" style={{ color: 'var(--text-muted)' }}>
                Deck
              </legend>
              <Field label="PDF" hint="Opens inline on the site. The file downloads to you at the end, to drop into public/decks.">
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => setDeck(e.target.files?.[0] ?? null)}
                  className="w-full text-sm"
                />
              </Field>
              {deck && (
                <Field label="Button label">
                  <input
                    value={form.deckLabel}
                    onChange={(e) => set('deckLabel', e.target.value)}
                    placeholder="View deck"
                    style={inputStyle}
                    className="w-full px-3 py-2 border"
                  />
                </Field>
              )}
            </fieldset>

            <fieldset className="border px-4 py-4 flex flex-col gap-4" style={{ borderColor: 'var(--border)' }}>
              <legend className="text-xs uppercase tracking-widest px-1" style={{ color: 'var(--text-muted)' }}>
                Link
              </legend>
              <Field label={link.label} hint={link.hint}>
                <input
                  value={form.linkHref}
                  onChange={(e) => set('linkHref', e.target.value)}
                  placeholder="https://"
                  style={inputStyle}
                  className="w-full px-3 py-2 border"
                />
              </Field>
              {form.linkHref && (
                <Field label="Link label">
                  <input
                    value={form.linkLabel}
                    onChange={(e) => set('linkLabel', e.target.value)}
                    placeholder={link.defaultLabel}
                    style={inputStyle}
                    className="w-full px-3 py-2 border"
                  />
                </Field>
              )}
            </fieldset>

            <Field label="Cover image" hint="Optional. Sits at the top of the tile. WebP or PNG, around 1400px wide.">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setCover(e.target.files?.[0] ?? null)}
                className="w-full text-sm"
              />
            </Field>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={form.hasDetail}
                onChange={(e) => set('hasDetail', e.target.checked)}
              />
              Give it its own page at /projects/{slugify(form.title) || 'your-slug'}
            </label>

            {form.hasDetail && (
              <div className="grid gap-5">
                <Field label="First section" hint={`Heading, defaults to "${defaults.first}"`}>
                  <input
                    value={form.firstLabel}
                    onChange={(e) => set('firstLabel', e.target.value)}
                    placeholder={defaults.first}
                    style={inputStyle}
                    className="w-full px-3 py-2 border mb-2"
                  />
                  <textarea
                    value={form.firstBody}
                    onChange={(e) => set('firstBody', e.target.value)}
                    rows={5}
                    placeholder="The body text for that section."
                    style={inputStyle}
                    className="w-full px-3 py-2 border"
                  />
                </Field>
                <Field label="Second section" hint={`Heading, defaults to "${defaults.second}"`}>
                  <input
                    value={form.secondLabel}
                    onChange={(e) => set('secondLabel', e.target.value)}
                    placeholder={defaults.second}
                    style={inputStyle}
                    className="w-full px-3 py-2 border mb-2"
                  />
                  <textarea
                    value={form.secondBody}
                    onChange={(e) => set('secondBody', e.target.value)}
                    rows={5}
                    placeholder="The body text for that section."
                    style={inputStyle}
                    className="w-full px-3 py-2 border"
                  />
                </Field>
              </div>
            )}

            {error && (
              <p className="text-sm" style={{ color: '#b3261e' }} role="alert">
                {error}
              </p>
            )}

            <div className="flex flex-wrap gap-3 pt-1">
              <button
                type="submit"
                className="text-sm font-medium px-4 py-2"
                style={{ background: 'var(--accent-strong)', color: 'var(--bg)', borderRadius: 'var(--radius)' }}
              >
                Save draft
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-sm font-medium px-4 py-2 border"
                style={{ borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {!saved && drafts.length > 0 && (
          <div className="px-6 py-5 border-t" style={{ borderColor: 'var(--border)' }}>
            <h3 className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
              Unpublished drafts ({drafts.length})
            </h3>
            <ul className="flex flex-col gap-2">
              {drafts.map((d) => (
                <li key={d.id} className="flex flex-wrap items-center justify-between gap-3 text-sm">
                  <span>
                    {d.title}
                    <span style={{ color: 'var(--text-muted)' }}> · {d.category}</span>
                  </span>
                  <span className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setSaved(d)}
                      className="hover:underline"
                      style={{ color: 'var(--accent-strong)' }}
                    >
                      Publish steps
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteDraft(d.id)}
                      className="hover:underline"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Delete
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

function PublishPanel({
  draft,
  copied,
  setCopied,
  onDone,
}: {
  draft: DraftEntry
  copied: boolean
  setCopied: (v: boolean) => void
  onDone: () => void
}) {
  const snippet = toSnippet(draft)

  return (
    <div className="px-6 py-5 flex flex-col gap-5">
      <div>
        <p className="text-sm font-medium">Draft saved. It is on the work page now, marked as a draft.</p>
        <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
          Only you can see it. Three steps make it real for everyone.
        </p>
      </div>

      <Step n={1} title="Take the files">
        <div className="flex flex-wrap gap-3">
          {draft.deckFileName ? (
            <button
              type="button"
              onClick={() => downloadFile(`${draft.id}:deck`, draft.deckFileName)}
              className="text-sm px-3 py-1.5 border"
              style={{ borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
            >
              Download {draft.deckFileName} → public/decks/
            </button>
          ) : (
            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
              No deck attached.
            </span>
          )}
          {draft.coverFileName && (
            <button
              type="button"
              onClick={() => downloadFile(`${draft.id}:cover`, draft.coverFileName)}
              className="text-sm px-3 py-1.5 border"
              style={{ borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
            >
              Download {draft.coverFileName} → public/projects/
            </button>
          )}
        </div>
      </Step>

      <Step n={2} title="Paste this into src/content/projects.ts">
        <pre
          className="text-[11px] leading-relaxed overflow-x-auto p-3 border"
          style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)', fontFamily: 'var(--font-mono)' }}
        >
          {snippet}
        </pre>
        <button
          type="button"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(snippet)
              setCopied(true)
              setTimeout(() => setCopied(false), 2000)
            } catch {
              setCopied(false)
            }
          }}
          className="text-sm font-medium px-4 py-2 mt-3"
          style={{ background: 'var(--accent-strong)', color: 'var(--bg)', borderRadius: 'var(--radius)' }}
        >
          {copied ? 'Copied' : 'Copy entry'}
        </button>
      </Step>

      <Step n={3} title="Deploy">
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          Commit and push. Vercel rebuilds, the entry goes live for everyone, and you can delete the
          draft below.
        </p>
      </Step>

      <div className="flex flex-wrap gap-3 pt-1 border-t" style={{ borderColor: 'var(--border)', paddingTop: 16 }}>
        <button
          type="button"
          onClick={onDone}
          className="text-sm font-medium px-4 py-2 border"
          style={{ borderColor: 'var(--border)', borderRadius: 'var(--radius)' }}
        >
          Add another
        </button>
        <button
          type="button"
          onClick={() => {
            deleteDraft(draft.id)
            onDone()
          }}
          className="text-sm px-4 py-2"
          style={{ color: 'var(--text-muted)' }}
        >
          Delete this draft
        </button>
      </div>
    </div>
  )
}

function Step({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="text-sm font-semibold mb-2">
        <span style={{ color: 'var(--accent-strong)' }}>{n}.</span> {title}
      </h3>
      {children}
    </section>
  )
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string
  hint?: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium">
        {label}
        {required && <span style={{ color: 'var(--accent-strong)' }}> *</span>}
      </span>
      {hint && (
        <span className="block text-xs mt-0.5 mb-1.5" style={{ color: 'var(--text-muted)' }}>
          {hint}
        </span>
      )}
      <span className={hint ? 'block' : 'block mt-1.5'}>{children}</span>
    </label>
  )
}

const inputStyle = {
  borderColor: 'var(--border)',
  background: 'var(--bg-elevated)',
  color: 'var(--text)',
  borderRadius: 'var(--radius)',
  fontFamily: 'var(--font-body)',
  fontSize: 14,
}

function extensionOf(name: string, fallback: string) {
  const dot = name.lastIndexOf('.')
  return dot > 0 ? name.slice(dot).toLowerCase() : fallback
}

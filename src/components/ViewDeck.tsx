// Opens a hosted PDF in a new tab — browsers render PDFs natively inline,
// so this is "view," not "download" (no forced Content-Disposition, no save prompt).
export function ViewDeck({ href, label = 'View deck' }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded border hover:opacity-80"
      style={{ borderColor: 'var(--border)', color: 'var(--accent-strong)', borderRadius: 'var(--radius)' }}
    >
      📄 {label} ↗
    </a>
  )
}

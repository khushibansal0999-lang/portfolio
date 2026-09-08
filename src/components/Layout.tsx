import type { ReactNode } from 'react'
import { Nav } from './Nav'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Nav />
      <main className="flex-1">{children}</main>
      <footer className="border-t py-8 px-6" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-3xl mx-auto text-sm flex items-center justify-between" style={{ color: 'var(--text-muted)' }}>
          <span>© 2026 Khushi Bansal</span>
          <a href="mailto:khushi.bansal0999@gmail.com" className="hover:underline">
            khushi.bansal0999@gmail.com
          </a>
        </div>
      </footer>
    </div>
  )
}

import type { CSSProperties, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '@/theme/ThemeContext'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Diamond } from './Diamond'
import { poster } from './palette'

const navVarOverrides = {
  '--border': poster.borderOnDark,
  '--text-muted': poster.mutedOnDark,
  '--bg': poster.forest,
} as CSSProperties

function PosterNav() {
  const { t } = useTheme()

  const linkStyle = ({ isActive }: { isActive: boolean }): CSSProperties => ({
    opacity: isActive ? 1 : 0.75,
    fontWeight: isActive ? 600 : 400,
  })

  return (
    <header style={{ background: poster.forest, color: poster.textOnDark }}>
      <div
        className="max-w-6xl mx-auto px-5 sm:px-11 py-4 sm:py-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3"
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        <NavLink
          to="/"
          className="flex items-center gap-2.5 text-base sm:text-lg whitespace-nowrap"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          <Diamond size={11} color={poster.terracotta} />
          Khushi Bansal
        </NavLink>
        <nav className="flex items-center gap-4 sm:gap-6 flex-wrap text-xs sm:text-[13px]">
          <NavLink to="/" end style={linkStyle}>
            {t.nav.work}
          </NavLink>
          <NavLink to="/about" style={linkStyle}>
            {t.nav.about}
          </NavLink>
          <NavLink to="/projects" style={linkStyle}>
            {t.nav.projects}
          </NavLink>
          <NavLink to="/resume" style={linkStyle}>
            {t.nav.resume}
          </NavLink>
          <a
            href="mailto:khushi.bansal0999@gmail.com"
            className="font-semibold px-4 py-2 rounded-full text-[11px] sm:text-xs"
            style={{ background: poster.marigold, color: poster.forest }}
          >
            {t.home.ctaEmail}
          </a>
          <span style={navVarOverrides}>
            <ThemeSwitcher />
          </span>
        </nav>
      </div>
    </header>
  )
}

function PosterFooter() {
  return (
    <footer style={{ background: poster.ink, color: poster.textOnDark }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-11 py-10 sm:py-11 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3.5">
          <Diamond size={16} color={poster.terracotta} />
          <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(22px,3.4vw,34px)' }}>
            Let's talk product.
          </p>
        </div>
        <a
          href="mailto:khushi.bansal0999@gmail.com"
          className="font-bold px-6 py-3 rounded-full text-xs sm:text-[13px]"
          style={{ background: poster.marigold, color: poster.ink }}
        >
          Get in touch!
        </a>
      </div>
      <div
        className="max-w-6xl mx-auto px-5 sm:px-11 pb-8 flex flex-wrap justify-between gap-2 text-[10px] sm:text-[11px] tracking-widest uppercase"
        style={{ color: poster.mutedOnDark, fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
      >
        <span>© 2026 Khushi Bansal</span>
        <span>khushi.bansal0999@gmail.com</span>
      </div>
    </footer>
  )
}

export function PosterLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: poster.cream, color: poster.ink, fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      <PosterNav />
      <main className="flex-1">{children}</main>
      <PosterFooter />
    </div>
  )
}

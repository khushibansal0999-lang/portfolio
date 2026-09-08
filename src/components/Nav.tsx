import { NavLink } from 'react-router-dom'
import { useTheme } from '@/theme/ThemeContext'
import { ThemeSwitcher } from './ThemeSwitcher'
import { cn } from '@/lib/utils'

export function Nav() {
  const { t } = useTheme()

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn('text-sm transition-opacity hover:opacity-70', isActive ? 'font-semibold' : 'font-normal')

  return (
    <header
      className="sticky top-0 z-20 border-b backdrop-blur"
      style={{ borderColor: 'var(--border)', background: 'color-mix(in srgb, var(--bg) 85%, transparent)' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <NavLink to="/" className="text-sm font-semibold tracking-tight whitespace-nowrap" style={{ fontFamily: 'var(--font-heading)' }}>
          Khushi Bansal
        </NavLink>
        <nav className="flex items-center gap-4 sm:gap-6 flex-wrap" style={{ color: 'var(--text)' }}>
          <NavLink to="/" className={linkClass} end>
            {t.nav.work}
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            {t.nav.about}
          </NavLink>
          <NavLink to="/resume" className={linkClass}>
            {t.nav.resume}
          </NavLink>
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  )
}

import { useTheme } from '@/theme/ThemeContext'
import { THEME_IDS, THEME_META } from '@/theme/labels'

// Deliberately quiet — a small control, not a hero-level callout. See PLAN.md Phase 4 guardrails.
export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as (typeof THEME_IDS)[number])}
      aria-label="Switch site theme"
      className="text-xs rounded px-2 py-1 border bg-transparent cursor-pointer"
      style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
    >
      {THEME_IDS.map((id) => (
        <option key={id} value={id}>
          {THEME_META[id].name}
        </option>
      ))}
    </select>
  )
}

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { THEME_IDS, labels, THEME_META, type ThemeId } from './labels'

const STORAGE_KEY = 'portfolio-theme'
const DEFAULT_THEME: ThemeId = 'editorial'

function isThemeId(value: string | null): value is ThemeId {
  return !!value && (THEME_IDS as string[]).includes(value)
}

function resolveInitialTheme(): ThemeId {
  if (typeof window === 'undefined') return DEFAULT_THEME
  const params = new URLSearchParams(window.location.search)
  const fromQuery = params.get('theme')
  if (isThemeId(fromQuery)) return fromQuery

  // A cold visitor with no explicit choice (no query param, no prior pick) always
  // lands on `editorial` — see PLAN.md Phase 4 guardrails. Only an earlier *explicit*
  // switcher use (stored below) can produce anything else.
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (isThemeId(stored)) return stored

  return DEFAULT_THEME
}

interface ThemeContextValue {
  theme: ThemeId
  setTheme: (theme: ThemeId) => void
  t: (typeof labels)[ThemeId]
  meta: (typeof THEME_META)[ThemeId]
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(resolveInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const setTheme = (next: ThemeId) => {
    setThemeState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // localStorage unavailable (private browsing etc.) — theme still works for this session
    }
    const url = new URL(window.location.href)
    url.searchParams.set('theme', next)
    window.history.replaceState({}, '', url)
  }

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, t: labels[theme], meta: THEME_META[theme] }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

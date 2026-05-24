import { useTheme } from '@/hooks/useTheme'
import { SunIcon, MoonIcon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const Icon = isDark ? SunIcon : MoonIcon

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'}`}
      className="p-2 hover:bg-faded/8 text-faded"
    >
      <Icon className="size-4" />
    </button>
  )
}

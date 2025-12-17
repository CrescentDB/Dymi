import { Sun, Moon, Palette } from 'lucide-react'

interface ThemeSwitcherProps {
  theme: string
  setTheme: (theme: 'midnight' | 'aurora' | 'minimal' | 'auto') => void
  isDark: boolean
}

const ThemeSwitcher = ({ theme, setTheme, isDark }: ThemeSwitcherProps) => {
  const cycleTheme = () => {
    const themes: Array<'midnight' | 'aurora' | 'minimal' | 'auto'> = ['midnight', 'aurora', 'minimal', 'auto']
    const currentIndex = themes.indexOf(theme as any)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  const getIcon = () => {
    if (theme === 'auto') return <Palette size={20} />
    return isDark ? <Moon size={20} /> : <Sun size={20} />
  }

  return (
    <button 
      className="control-btn theme-btn"
      onClick={cycleTheme}
      aria-label="Change Theme"
      title={`Current: ${theme}`}
    >
      {getIcon()}
      <style>{`
        .theme-btn {
          position: relative;
        }
      `}</style>
    </button>
  )
}

export default ThemeSwitcher

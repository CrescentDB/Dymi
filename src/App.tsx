import { useState } from 'react'
import Clock from './components/Clock'
import DateDisplay from './components/DateDisplay'
import ThemeSwitcher from './components/ThemeSwitcher'
import SettingsPanel from './components/SettingsPanel'
import ThemeSelector from './components/ThemeSelector'
import PomodoroTimer from './components/PomodoroTimer'
import QuoteDisplay from './components/QuoteDisplay'
import { useTime } from './hooks/useTime'
import { useTheme } from './hooks/useTheme'
import { useKeyboard } from './hooks/useKeyboard'
import { Settings, Maximize2, Minimize2, Palette, Timer, MessageCircle } from 'lucide-react'

function App() {
  const time = useTime()
  const { theme, setTheme, isDark } = useTheme()
  const [showSettings, setShowSettings] = useState(false)
  const [showThemeSelector, setShowThemeSelector] = useState(false)
  const [showPomodoro, setShowPomodoro] = useState(false)
  const [showQuotes, setShowQuotes] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [format24h, setFormat24h] = useState(() => {
    const saved = localStorage.getItem('dymi-format')
    return saved === 'true'
  })
  const [timezone, setTimezone] = useState(() => {
    const saved = localStorage.getItem('dymi-timezone')
    return saved || 'local'
  })

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const cycleTheme = () => {
    const themes: Array<'midnight' | 'aurora' | 'minimal' | 'neon' | 'sunset' | 'forest' | 'ocean' | 'rosegold' | 'monochrome' | 'retro' | 'cherry' | 'auto'> = 
      ['midnight', 'aurora', 'minimal', 'neon', 'sunset', 'forest', 'ocean', 'rosegold', 'monochrome', 'retro', 'cherry', 'auto']
    const currentIndex = themes.indexOf(theme as any)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  // Keyboard shortcuts
  useKeyboard({
    'space': toggleFullscreen,
    't': cycleTheme,
    's': () => setShowSettings(true),
    'p': () => setShowPomodoro(!showPomodoro),
    'q': () => setShowQuotes(!showQuotes),
    'escape': () => {
      if (showSettings) setShowSettings(false)
      else if (showThemeSelector) setShowThemeSelector(false)
      else if (document.fullscreenElement) document.exitFullscreen()
    },
    'f': () => {
      const newFormat = !format24h
      setFormat24h(newFormat)
      localStorage.setItem('dymi-format', String(newFormat))
    },
  })

  return (
    <div className={`app ${theme}`} data-dark={isDark}>
      <div className="background-gradient"></div>
      
      <main className="main-content">
        <Clock time={time} format24h={format24h} timezone={timezone} />
        <DateDisplay time={time} timezone={timezone} />
      </main>

      <div className="controls">
        <button 
          className="control-btn"
          onClick={() => setShowThemeSelector(!showThemeSelector)}
          aria-label="Theme Selector"
          title="Choose Theme"
        >
          <Palette size={20} />
        </button>

        <button 
          className="control-btn"
          onClick={() => setShowPomodoro(!showPomodoro)}
          aria-label="Pomodoro Timer"
          title="Toggle Pomodoro (P)"
        >
          <Timer size={20} />
        </button>

        <button 
          className="control-btn"
          onClick={() => setShowQuotes(!showQuotes)}
          aria-label="Toggle Quotes"
          title="Toggle Quotes (Q)"
        >
          <MessageCircle size={20} />
        </button>

        <button 
          className="control-btn"
          onClick={() => setShowSettings(!showSettings)}
          aria-label="Settings"
          title="Settings (S)"
        >
          <Settings size={20} />
        </button>
        
        <ThemeSwitcher theme={theme} setTheme={setTheme} isDark={isDark} />
        
        <button 
          className="control-btn"
          onClick={toggleFullscreen}
          aria-label="Toggle Fullscreen"
          title="Fullscreen (Space)"
        >
          {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </button>
      </div>

      {showPomodoro && <PomodoroTimer />}
      {showQuotes && <QuoteDisplay />}

      {showThemeSelector && (
        <ThemeSelector
          currentTheme={theme}
          setTheme={setTheme}
          onClose={() => setShowThemeSelector(false)}
        />
      )}

      {showSettings && (
        <SettingsPanel
          format24h={format24h}
          setFormat24h={(value) => {
            setFormat24h(value)
            localStorage.setItem('dymi-format', String(value))
          }}
          timezone={timezone}
          setTimezone={(value) => {
            setTimezone(value)
            localStorage.setItem('dymi-timezone', value)
          }}
          onClose={() => setShowSettings(false)}
        />
      )}

      <footer className="footer">
        <p>
          <span className="logo">Dymi</span> — Time, beautifully rendered
        </p>
      </footer>
    </div>
  )
}

export default App

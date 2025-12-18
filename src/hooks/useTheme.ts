import { useState, useEffect } from 'react'

type Theme = 'midnight' | 'aurora' | 'minimal' | 'auto'

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('dymi-theme')
    return (saved as Theme) || 'midnight'
  })

  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    localStorage.setItem('dymi-theme', theme)

    if (theme === 'auto') {
      const hour = new Date().getHours()
      const autoTheme = hour >= 6 && hour < 18 ? 'minimal' : 'midnight'
      setIsDark(autoTheme !== 'minimal')
    } else {
      setIsDark(theme !== 'minimal')
    }
  }, [theme])

  return { theme, setTheme, isDark }
}

export default useTheme

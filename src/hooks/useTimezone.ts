import { useState, useEffect } from 'react'

export const useTimezone = () => {
  const [timezone, setTimezone] = useState<string>(() => {
    const saved = localStorage.getItem('dymi-timezone')
    return saved || 'local'
  })

  useEffect(() => {
    localStorage.setItem('dymi-timezone', timezone)
  }, [timezone])

  const detectTimezone = () => {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone
    } catch {
      return 'local'
    }
  }

  const setToLocal = () => {
    setTimezone('local')
  }

  const setToDetected = () => {
    setTimezone(detectTimezone())
  }

  return {
    timezone,
    setTimezone,
    setToLocal,
    setToDetected,
    detectedTimezone: detectTimezone(),
  }
}

// Also export as default for compatibility
export default useTimezone

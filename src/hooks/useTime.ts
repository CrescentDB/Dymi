import { useState, useEffect } from 'react'

export const useTime = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    // Update every 50ms for smooth second hand animation
    const interval = setInterval(() => {
      setTime(new Date())
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return time
}

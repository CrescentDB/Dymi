import { useEffect } from 'react'

type KeyHandler = () => void

export const useKeyboard = (handlers: Record<string, KeyHandler>) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input, textarea, or contenteditable
      const target = e.target as HTMLElement
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target.isContentEditable
      ) {
        return
      }

      const key = e.key.toLowerCase()
      
      // Handle space key specifically (it's ' ' not 'space')
      const mappedKey = key === ' ' ? 'space' : key

      if (handlers[mappedKey]) {
        e.preventDefault()
        handlers[mappedKey]()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [handlers])
}

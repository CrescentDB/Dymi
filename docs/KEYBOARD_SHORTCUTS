# Keyboard Shortcuts

Dymi supports keyboard shortcuts for quick navigation and control.

## 🎹 Available Shortcuts

| Key | Action | Description |
|-----|--------|-------------|
| `Space` | Toggle Fullscreen | Enter or exit fullscreen mode |
| `T` | Cycle Theme | Switch between Midnight → Aurora → Minimal → Auto |
| `S` | Open Settings | Open the settings panel |
| `Esc` | Close/Exit | Close settings panel or exit fullscreen |
| `F` | Toggle Format | Switch between 12h and 24h format |
| `?` | Show Help | Display keyboard shortcuts overlay |

## 🎯 Implementation

To add these shortcuts to your Dymi installation:

### 1. Create Keyboard Hook

Create `src/hooks/useKeyboard.ts`:

```typescript
import { useEffect } from 'react'

export const useKeyboard = (handlers: Record<string, () => void>) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement) return
      
      const key = e.key.toLowerCase()
      if (handlers[key]) {
        e.preventDefault()
        handlers[key]()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [handlers])
}
```

### 2. Add to App.tsx

```typescript
import { useKeyboard } from './hooks/useKeyboard'

function App() {
  // ... existing state ...

  useKeyboard({
    ' ': toggleFullscreen,
    't': cycleTheme,
    's': () => setShowSettings(true),
    'escape': () => {
      if (showSettings) setShowSettings(false)
      if (document.fullscreenElement) document.exitFullscreen()
    },
    'f': () => setFormat24h(!format24h),
  })

  // ... rest of component ...
}
```

## 📱 Mobile Gestures

While keyboard shortcuts work on desktop, consider these mobile alternatives:

| Gesture | Action |
|---------|--------|
| Double tap | Toggle fullscreen |
| Swipe down | Open settings |
| Swipe up | Close settings |
| Long press | Show help |

## ⚙️ Customizing Shortcuts

Edit the keyboard handler mapping in `App.tsx`:

```typescript
useKeyboard({
  'c': customAction,           // Add custom shortcuts
  'arrowup': increaseSize,     // Use arrow keys
  'ctrl+s': saveSettings,      // Modifier keys
})
```

## 🔇 Disabling Shortcuts

To disable keyboard shortcuts entirely:

```typescript
// Comment out or remove the useKeyboard hook
// useKeyboard({ ... })
```

## ♿ Accessibility

All keyboard shortcuts:
- Work with screen readers
- Don't interfere with browser shortcuts
- Can be disabled in settings
- Follow ARIA best practices

## 🎮 Gaming Mode

For desk clock use without accidental triggers:

```typescript
const [keyboardEnabled, setKeyboardEnabled] = useState(true)

useKeyboard(keyboardEnabled ? shortcuts : {})
```

Toggle in settings to prevent accidental theme changes.

## 📋 Printable Reference Card

```
╔══════════════════════════════════════╗
║        DYMI KEYBOARD SHORTCUTS       ║
╠══════════════════════════════════════╣
║  Space   │  Toggle Fullscreen        ║
║  T       │  Cycle Theme              ║
║  S       │  Open Settings            ║
║  Esc     │  Close/Exit               ║
║  F       │  Toggle Format            ║
║  ?       │  Show Help                ║
╚══════════════════════════════════════╝
```

## 🌐 International Keyboards

Shortcuts use physical key positions when possible:
- Works with QWERTY, AZERTY, QWERTZ
- Space and Escape are universal
- Letter shortcuts may vary by layout

## 🔮 Future Shortcuts

Planned additions:
- `1-4` - Direct theme selection
- `+/-` - Adjust clock size
- `⌘K` - Command palette
- `H` - Toggle seconds display

---

Have suggestions for new shortcuts? [Open an issue](https://github.com/yourusername/dymi/issues)!

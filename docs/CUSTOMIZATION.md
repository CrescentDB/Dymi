# Customization Guide

Learn how to customize Dymi to match your preferences.

## 🎨 Creating Custom Themes

### 1. Define Theme Colors

Edit `src/styles/globals.css` and add your theme variables:

```css
:root {
  /* Your Custom Theme */
  --bg-custom: #1a1a1a;
  --text-custom: #ffffff;
  --accent-custom: #ff6b6b;
  --glass-custom: rgba(255, 107, 107, 0.1);
}
```

### 2. Add Theme Class

```css
.app.custom {
  background: var(--bg-custom);
  color: var(--text-custom);
}

.app.custom .background-gradient {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(255, 107, 107, 0.2), 
    transparent 70%
  );
}

.app.custom .time-display {
  text-shadow: 0 0 40px rgba(255, 107, 107, 0.3);
}
```

### 3. Register Theme

Update `src/utils/constants.ts`:

```typescript
export const THEMES = ['midnight', 'aurora', 'minimal', 'auto', 'custom'] as const

export const THEME_NAMES = {
  midnight: 'Midnight',
  aurora: 'Aurora',
  minimal: 'Minimal',
  auto: 'Auto',
  custom: 'Custom', // Add your theme
} as const
```

### 4. Update Theme Hook

Modify `src/hooks/useTheme.ts` to handle your custom theme.

## ⏰ Customizing Clock Display

### Change Font

Edit `src/styles/clock.css`:

```css
.time-display {
  font-family: 'Your Font', monospace;
  font-weight: 700; /* Adjust weight */
  letter-spacing: 0.1em; /* Adjust spacing */
}
```

### Adjust Size

```css
.time-display {
  font-size: clamp(6rem, 20vw, 12rem); /* Larger clock */
}
```

### Add Custom Effects

```css
.time-display {
  /* Neon glow effect */
  text-shadow: 
    0 0 10px currentColor,
    0 0 20px currentColor,
    0 0 30px currentColor;
  
  /* Gradient text */
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## 🌐 Adding More Timezones

Edit `src/utils/constants.ts`:

```typescript
export const TIMEZONES = [
  // ... existing timezones
  { value: 'Asia/Singapore', label: 'Singapore (SGT)' },
  { value: 'Africa/Cairo', label: 'Cairo (EET)' },
  // Add more as needed
] as const
```

## 📱 Customizing Mobile View

Edit media queries in `src/styles/globals.css`:

```css
@media (max-width: 768px) {
  .time-display {
    font-size: clamp(4rem, 15vw, 8rem);
  }
  
  .controls {
    bottom: 1rem; /* Move controls */
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }
}
```

## ⚙️ Adding New Settings

### 1. Add State in App.tsx

```typescript
const [showSeconds, setShowSeconds] = useState(true)
```

### 2. Update SettingsPanel.tsx

```typescript
<div className="setting-item">
  <label>
    <input
      type="checkbox"
      checked={showSeconds}
      onChange={(e) => setShowSeconds(e.target.checked)}
    />
    <span>Show seconds</span>
  </label>
</div>
```

### 3. Pass to Clock Component

```typescript
<Clock 
  time={time} 
  format24h={format24h} 
  timezone={timezone}
  showSeconds={showSeconds}
/>
```

## 🎭 Animation Customization

Edit `src/styles/animations.css`:

```css
/* Slower fade in */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px); /* More dramatic */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Adjust duration */
.fade-in {
  animation: fadeIn 1.2s ease-out; /* Slower */
}
```

## 🔔 Adding Sound Effects

Create `src/utils/sounds.ts`:

```typescript
export const playTickSound = () => {
  const audio = new Audio('/sounds/tick.mp3')
  audio.volume = 0.1
  audio.play().catch(() => {}) // Silent fail if blocked
}
```

Use in Clock component:

```typescript
useEffect(() => {
  if (time.getSeconds() === 0) {
    playTickSound()
  }
}, [time])
```

## 🖼️ Custom Background

Add to `src/styles/globals.css`:

```css
.app::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/your-background.jpg');
  background-size: cover;
  opacity: 0.1;
  z-index: 0;
}
```

## 💾 Persisting Custom Settings

All settings are automatically saved to `localStorage`. To add new settings:

```typescript
// Save
localStorage.setItem('dymi-custom-setting', value)

// Load
const saved = localStorage.getItem('dymi-custom-setting')
```

## 🚀 Advanced: Add New Features

Check out these files to extend functionality:

- `src/components/` - Add new UI components
- `src/hooks/` - Create custom React hooks
- `src/utils/` - Add utility functions

## 📝 Example: Adding a Pomodoro Timer

1. Create `src/components/PomodoroTimer.tsx`
2. Add state management hook `src/hooks/usePomodoro.ts`
3. Import and add to `App.tsx`
4. Style in `src/styles/pomodoro.css`

## 🤝 Share Your Customizations

Built something cool? Share it with the community:

1. Fork the repo
2. Create a branch with your customization
3. Open a PR with screenshots
4. We might feature it in the main repo!

---

Need help? [Open an issue](https://github.com/yourusername/dymi/issues) or join our discussions!

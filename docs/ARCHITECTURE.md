# Architecture Overview

Understanding how Dymi is structured internally.

## 🏗️ Project Structure

```
dymi/
├── .github/              # GitHub workflows and templates
├── docs/                 # Documentation
├── public/               # Static assets (favicon, manifest)
├── src/
│   ├── components/       # React components
│   │   ├── Clock.tsx             # Main clock display
│   │   ├── DateDisplay.tsx       # Date component
│   │   ├── ThemeSwitcher.tsx     # Theme toggle button
│   │   └── SettingsPanel.tsx     # Settings modal
│   │
│   ├── hooks/            # Custom React hooks
│   │   ├── useTime.ts            # Time state management
│   │   └── useTheme.ts           # Theme persistence
│   │
│   ├── styles/           # CSS files
│   │   ├── globals.css           # Global styles & themes
│   │   ├── animations.css        # Animation definitions
│   │   └── clock.css             # Clock-specific styles
│   │
│   ├── utils/            # Helper functions
│   │   ├── formatTime.ts         # Time formatting logic
│   │   └── constants.ts          # App constants
│   │
│   ├── App.tsx           # Root component
│   └── main.tsx          # React entry point
│
└── Configuration files    # package.json, tsconfig, etc.
```

## 🔄 Data Flow

```
main.tsx
  └─> App.tsx
       ├─> useTime() hook [updates every 50ms]
       │     └─> Provides current time to components
       │
       ├─> useTheme() hook [manages theme state]
       │     ├─> Reads from localStorage
       │     └─> Updates theme class on <div>
       │
       ├─> Clock component
       │     ├─> Receives: time, format24h, timezone
       │     └─> Renders: Formatted time display
       │
       ├─> DateDisplay component
       │     ├─> Receives: time, timezone
       │     └─> Renders: Formatted date
       │
       ├─> ThemeSwitcher component
       │     └─> Cycles through themes
       │
       └─> SettingsPanel component
             └─> Manages user preferences
```

## ⚡ Performance Optimizations

### 1. High-Frequency Updates
```typescript
// useTime hook updates every 50ms for smooth animation
setInterval(() => setTime(new Date()), 50)
```

### 2. CSS-Only Animations
- No JavaScript animations for performance
- GPU-accelerated transforms
- Uses `will-change` for optimization

### 3. Minimal Re-renders
- Components only re-render when their props change
- Memoization where needed
- Efficient state management

## 🎨 Theme System

### Theme Architecture

```css
:root {
  /* Define CSS custom properties per theme */
  --bg-midnight: #0a0e27;
  --text-midnight: #e0e6ff;
  /* ... more variables */
}

.app.midnight {
  background: var(--bg-midnight);
  color: var(--text-midnight);
}
```

### Theme Switching Flow

1. User clicks ThemeSwitcher
2. `setTheme()` updates state
3. useEffect in `useTheme` hook:
   - Saves to localStorage
   - Updates `isDark` state
4. App.tsx receives new theme
5. CSS class changes on root div
6. Browser applies new CSS custom properties

### Auto Theme Logic

```typescript
if (theme === 'auto') {
  const hour = new Date().getHours()
  const autoTheme = hour >= 6 && hour < 18 ? 'minimal' : 'midnight'
}
```

## ⏱️ Time Management

### Why 50ms Updates?

Standard 1000ms updates create visible "jumps". 50ms provides:
- Smooth second hand interpolation
- Minimal performance impact
- Imperceptible to human eye

### Time Formatting Pipeline

```
Date object
  └─> formatTime() util
       ├─> Apply timezone
       ├─> Apply 12/24h format
       └─> Return formatted string
            └─> Clock component
                 └─> Split into individual characters
                      └─> Animate each character
```

## 🔌 Component Communication

### Props Down, Events Up

```typescript
// Parent (App.tsx) passes props down
<Clock time={time} format24h={format24h} />

// Child (SettingsPanel) emits events up
<SettingsPanel 
  onClose={() => setShowSettings(false)}
  setFormat24h={setFormat24h}
/>
```

### State Management Strategy

- **Local State**: Component-specific UI (modals, hover)
- **Lifted State**: Shared between components (theme, settings)
- **localStorage**: Persistent across sessions

## 📦 Build Process

```
Source Code (TypeScript + CSS)
  └─> TypeScript Compiler
       └─> Type checking & transpilation
            └─> Vite bundler
                 ├─> Tree shaking
                 ├─> Code splitting
                 ├─> Minification
                 └─> Output: dist/
                      ├─> index.html
                      ├─> assets/
                      │    ├─> index-[hash].js
                      │    └─> index-[hash].css
                      └─> manifest.json
```

## 🔐 Security Considerations

### CSP (Content Security Policy)
```html
<!-- Restrict external resources -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; style-src 'self' 'unsafe-inline'">
```

### No External Dependencies (Runtime)
- Zero third-party scripts loaded
- All fonts from Google Fonts CDN (optional)
- Icons from lucide-react (bundled)

## 🧪 Testing Strategy

### Component Testing
- Test Clock renders correctly
- Test theme switching
- Test timezone changes
- Test settings persistence

### Integration Testing
- Test full user flows
- Test keyboard shortcuts
- Test fullscreen mode

### Browser Testing
- Chrome/Edge (Chromium)
- Firefox
- Safari
- Mobile browsers

## 🚀 Deployment Pipeline

```
Git Push
  └─> GitHub Actions
       ├─> Install dependencies
       ├─> Run linter
       ├─> Run tests
       ├─> Build production
       └─> Deploy to:
            ├─> GitHub Pages
            ├─> Vercel
            └─> Netlify
```

## 📊 Performance Metrics

Target metrics:
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: > 95
- **Bundle Size**: < 100KB (gzipped)

## 🔮 Future Architecture Plans

- [ ] Service Worker for offline support
- [ ] IndexedDB for advanced settings storage
- [ ] Web Workers for background tasks
- [ ] Module federation for plugin system

## 🤝 Contributing to Architecture

When making architectural changes:

1. Update this document
2. Consider performance impact
3. Maintain backwards compatibility
4. Add migration guide if needed

---

Questions? [Open a discussion](https://github.com/yourusername/dymi/discussions)

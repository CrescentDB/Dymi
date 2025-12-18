# 🔧 Netlify Deploy Fix

## The Problem

Netlify build failed due to **case-sensitivity** issues. Linux (Netlify) is case-sensitive, but macOS/Windows are not.

### Errors Found:
1. ❌ `src/app.tsx` should be `src/App.tsx` (capital A)
2. ❌ Missing `useKeyboard` import in App.tsx
3. ⚠️ Hook exports must be **named exports** not default

## Quick Fix (3 Steps)

### Step 1: Rename the file

```bash
# In your terminal
git mv src/app.tsx src/App.tsx
```

### Step 2: Verify App.tsx imports

Make sure `src/App.tsx` has these imports at the top:

```typescript
import { useState } from 'react'
import Clock from './components/Clock'
import DateDisplay from './components/DateDisplay'
import ThemeSwitcher from './components/ThemeSwitcher'
import SettingsPanel from './components/SettingsPanel'
import { useTime } from './hooks/useTime'
import { useTheme } from './hooks/useTheme'
import { useKeyboard } from './hooks/useKeyboard'
import { Settings, Maximize2, Minimize2 } from 'lucide-react'
```

### Step 3: Verify all hooks use named exports

Check each hook file exports like this:

**✅ Correct (named export):**
```typescript
// src/hooks/useTime.ts
export const useTime = () => { ... }
```

**❌ Wrong (default export):**
```typescript
// Don't do this
export default function useTime() { ... }
```

## Commit and Push

```bash
git add .
git commit -m "fix: rename app.tsx to App.tsx for case-sensitive filesystems"
git push
```

Netlify will automatically redeploy! ✅

## Verification Checklist

Before pushing, verify locally:

```bash
# This should pass with no errors
npm run build

# Or just TypeScript check
npx tsc --noEmit
```

## File Structure Should Be:

```
src/
├── App.tsx          ← Capital A (not app.tsx)
├── main.tsx
├── components/
│   ├── Clock.tsx
│   ├── DateDisplay.tsx
│   ├── ThemeSwitcher.tsx
│   └── SettingsPanel.tsx
├── hooks/
│   ├── useTime.ts
│   ├── useTheme.ts
│   ├── useKeyboard.ts
│   └── useTimezone.ts
├── styles/
│   ├── globals.css
│   ├── animations.css
│   └── clock.css
└── utils/
    ├── formatTime.ts
    └── constants.ts
```

## Why This Happened

- **macOS/Windows**: File systems are case-insensitive by default
  - `app.tsx` and `App.tsx` are treated as the same file
- **Linux (Netlify)**: File system is case-sensitive
  - `app.tsx` ≠ `App.tsx`
  - Import `'./App'` won't find `app.tsx`

## Still Having Issues?

1. Delete `node_modules` and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

2. Clear TypeScript cache:
```bash
rm -rf .tsc-cache
```

3. Test the build:
```bash
npm run build
```

If errors persist, check:
- All component filenames match their imports exactly
- All hooks use `export const hookName = ...` not `export default`
- No typos in import paths

---

**After fixing, your Netlify deploy should succeed! 🎉**

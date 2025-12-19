export const TIMEZONES = [
  { value: 'local', label: 'Local Time' },
  { value: 'America/New_York', label: 'New York (EST)' },
  { value: 'America/Chicago', label: 'Chicago (CST)' },
  { value: 'America/Denver', label: 'Denver (MST)' },
  { value: 'America/Los_Angeles', label: 'Los Angeles (PST)' },
  { value: 'Europe/London', label: 'London (GMT)' },
  { value: 'Europe/Paris', label: 'Paris (CET)' },
  { value: 'Europe/Berlin', label: 'Berlin (CET)' },
  { value: 'Europe/Moscow', label: 'Moscow (MSK)' },
  { value: 'Asia/Dubai', label: 'Dubai (GST)' },
  { value: 'Asia/Kolkata', label: 'Mumbai (IST)' },
  { value: 'Asia/Shanghai', label: 'Shanghai (CST)' },
  { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
  { value: 'Asia/Seoul', label: 'Seoul (KST)' },
  { value: 'Australia/Sydney', label: 'Sydney (AEDT)' },
  { value: 'Pacific/Auckland', label: 'Auckland (NZDT)' },
] as const

export const THEMES = [
  'midnight', 
  'aurora', 
  'minimal', 
  'neon', 
  'sunset', 
  'forest', 
  'ocean', 
  'rosegold', 
  'monochrome', 
  'retro', 
  'cherry', 
  'auto'
] as const

export const THEME_NAMES = {
  midnight: 'Midnight',
  aurora: 'Aurora',
  minimal: 'Minimal',
  neon: 'Neon',
  sunset: 'Sunset',
  forest: 'Forest',
  ocean: 'Ocean',
  rosegold: 'Rose Gold',
  monochrome: 'Monochrome',
  retro: 'Retro',
  cherry: 'Cherry Blossom',
  auto: 'Auto',
} as const

export const THEME_DESCRIPTIONS = {
  midnight: 'Deep blue with indigo accents',
  aurora: 'Teal and coral gradients',
  minimal: 'Clean light theme',
  neon: 'Cyberpunk hot pink & cyan',
  sunset: 'Warm oranges and purples',
  forest: 'Deep greens and earth tones',
  ocean: 'Blue gradients like underwater',
  rosegold: 'Elegant pink and gold',
  monochrome: 'Pure black & white',
  retro: '80s synthwave vibes',
  cherry: 'Soft pink sakura blossoms',
  auto: 'Adapts to time of day',
} as const

export const UPDATE_INTERVAL = 50

export const AUTO_THEME_HOUR_THRESHOLD = {
  start: 6,
  end: 18,
} as const

export const MOTIVATIONAL_QUOTES = [
  "Every moment is a fresh beginning.",
  "Time is what we want most, but what we use worst.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Don't watch the clock; do what it does. Keep going.",
  "Time you enjoy wasting is not wasted time.",
  "The future depends on what you do today.",
  "Lost time is never found again.",
  "Time is the most valuable thing you can spend.",
  "Make each day your masterpiece.",
  "Today is the only day. Yesterday is gone.",
]

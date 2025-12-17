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

export const THEMES = ['midnight', 'aurora', 'minimal', 'auto'] as const

export const THEME_NAMES = {
  midnight: 'Midnight',
  aurora: 'Aurora',
  minimal: 'Minimal',
  auto: 'Auto',
} as const

export const UPDATE_INTERVAL = 50 // ms - smooth animation

export const AUTO_THEME_HOUR_THRESHOLD = {
  start: 6,  // 6 AM
  end: 18,   // 6 PM
} as const

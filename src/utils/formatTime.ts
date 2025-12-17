export const formatTime = (date: Date, format24h: boolean, timezone: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: !format24h,
    timeZone: timezone === 'local' ? undefined : timezone,
  }

  let formatted = date.toLocaleTimeString('en-US', options)

  // Remove AM/PM for 24h format
  if (format24h) {
    formatted = formatted.replace(/\s?(AM|PM)/i, '')
  }

  return formatted
}

interface DateDisplayProps {
  time: Date
  timezone: string
}

const DateDisplay = ({ time, timezone }: DateDisplayProps) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: timezone === 'local' ? undefined : timezone,
  }

  const formatted = time.toLocaleDateString('en-US', options)

  return (
    <div className="date-display fade-in" style={{ animationDelay: '0.2s' }}>
      <p>{formatted}</p>
      <style>{`
        .date-display {
          font-size: clamp(1rem, 2vw, 1.5rem);
          font-weight: 400;
          opacity: 0.8;
          letter-spacing: 0.02em;
        }

        @media (max-width: 768px) {
          .date-display {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  )
}

export default DateDisplay

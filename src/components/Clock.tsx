import { formatTime } from '../utils/formatTime'
import '../styles/clock.css'

interface ClockProps {
  time: Date
  format24h: boolean
  timezone: string
}

const Clock = ({ time, format24h, timezone }: ClockProps) => {
  const formattedTime = formatTime(time, format24h, timezone)
  
  return (
    <div className="clock fade-in">
      <div className="time-display">
        {formattedTime.split('').map((char, i) => (
          <span 
            key={i} 
            className={`time-char ${char === ':' ? 'separator' : ''}`}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Clock

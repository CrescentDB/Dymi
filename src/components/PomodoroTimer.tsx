import { useState, useEffect } from 'react'
import { Play, Pause, RotateCcw } from 'lucide-react'

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isBreak, setIsBreak] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Timer finished
            setIsActive(false)
            if (isBreak) {
              setMinutes(25)
              setIsBreak(false)
            } else {
              setMinutes(5)
              setIsBreak(true)
            }
          } else {
            setMinutes(minutes - 1)
            setSeconds(59)
          }
        } else {
          setSeconds(seconds - 1)
        }
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, minutes, seconds, isBreak])

  const toggle = () => setIsActive(!isActive)

  const reset = () => {
    setIsActive(false)
    setMinutes(25)
    setSeconds(0)
    setIsBreak(false)
  }

  return (
    <div className="pomodoro-container">
      <div className="pomodoro-label">
        {isBreak ? 'Break Time' : 'Focus Time'}
      </div>
      <div className="pomodoro-display">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="pomodoro-controls">
        <button onClick={toggle} className="pomo-btn">
          {isActive ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <button onClick={reset} className="pomo-btn">
          <RotateCcw size={16} />
        </button>
      </div>

      <style>{`
        .pomodoro-container {
          position: fixed;
          top: 5rem;
          right: 2rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 1rem;
          text-align: center;
          min-width: 150px;
          z-index: 50;
        }

        .pomodoro-label {
          font-size: 0.75rem;
          opacity: 0.8;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .pomodoro-display {
          font-size: 2rem;
          font-weight: 300;
          font-variant-numeric: tabular-nums;
          margin-bottom: 0.75rem;
        }

        .pomodoro-controls {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
        }

        .pomo-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: none;
          background: rgba(255, 255, 255, 0.15);
          color: inherit;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .pomo-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .pomodoro-container {
            top: auto;
            bottom: 5rem;
            right: 1rem;
            min-width: 120px;
            padding: 0.75rem;
          }

          .pomodoro-display {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  )
}

export default PomodoroTimer

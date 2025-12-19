import { useState, useEffect } from 'react'
import { MOTIVATIONAL_QUOTES } from '../utils/constants'
import { RefreshCw } from 'lucide-react'

const QuoteDisplay = () => {
  const [quote, setQuote] = useState('')
  const [isRotating, setIsRotating] = useState(false)

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)
    return MOTIVATIONAL_QUOTES[randomIndex]
  }

  const refreshQuote = () => {
    setIsRotating(true)
    setTimeout(() => {
      setQuote(getRandomQuote())
      setIsRotating(false)
    }, 300)
  }

  useEffect(() => {
    setQuote(getRandomQuote())
  }, [])

  return (
    <div className="quote-container fade-in">
      <div className={`quote-text ${isRotating ? 'rotating' : ''}`}>
        "{quote}"
      </div>
      <button 
        onClick={refreshQuote}
        className="quote-refresh"
        aria-label="New quote"
      >
        <RefreshCw size={14} />
      </button>

      <style>{`
        .quote-container {
          position: fixed;
          bottom: 5rem;
          left: 50%;
          transform: translateX(-50%);
          max-width: 600px;
          width: 90%;
          text-align: center;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          z-index: 50;
        }

        .quote-text {
          flex: 1;
          font-size: 0.875rem;
          font-style: italic;
          opacity: 0.8;
          line-height: 1.5;
          transition: opacity 0.3s ease;
        }

        .quote-text.rotating {
          opacity: 0;
        }

        .quote-refresh {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: none;
          background: rgba(255, 255, 255, 0.1);
          color: inherit;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .quote-refresh:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(180deg);
        }

        @media (max-width: 768px) {
          .quote-container {
            bottom: 8rem;
            padding: 0.75rem 1rem;
          }

          .quote-text {
            font-size: 0.75rem;
          }

          .quote-refresh {
            width: 28px;
            height: 28px;
          }
        }
      `}</style>
    </div>
  )
}

export default QuoteDisplay

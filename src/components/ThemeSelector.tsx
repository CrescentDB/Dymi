import { X } from 'lucide-react'
import { THEMES, THEME_NAMES, THEME_DESCRIPTIONS } from '../utils/constants'

type Theme = typeof THEMES[number]

interface ThemeSelectorProps {
  currentTheme: string
  setTheme: (theme: Theme) => void
  onClose: () => void
}

const ThemeSelector = ({ currentTheme, setTheme, onClose }: ThemeSelectorProps) => {
  return (
    <>
      <div className="theme-selector-overlay" onClick={onClose} />
      <div className="theme-selector-panel slide-in">
        <div className="theme-selector-header">
          <h2>Choose Theme</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="theme-grid">
          {THEMES.map((theme) => (
            <button
              key={theme}
              className={`theme-card ${currentTheme === theme ? 'active' : ''}`}
              onClick={() => {
                setTheme(theme)
                setTimeout(onClose, 300)
              }}
            >
              <div className={`theme-preview theme-preview-${theme}`}></div>
              <div className="theme-info">
                <div className="theme-name">{THEME_NAMES[theme]}</div>
                <div className="theme-desc">{THEME_DESCRIPTIONS[theme]}</div>
              </div>
            </button>
          ))}
        </div>

        <style>{`
          .theme-selector-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(4px);
            z-index: 300;
          }

          .theme-selector-panel {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            padding: 2rem;
            max-width: 700px;
            width: 90vw;
            max-height: 80vh;
            overflow-y: auto;
            z-index: 301;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
          }

          .theme-selector-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
          }

          .theme-selector-header h2 {
            font-size: 1.5rem;
            font-weight: 600;
          }

          .theme-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 1rem;
          }

          .theme-card {
            background: rgba(255, 255, 255, 0.05);
            border: 2px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 0;
            cursor: pointer;
            transition: all 0.2s ease;
            overflow: hidden;
          }

          .theme-card:hover {
            transform: translateY(-4px);
            border-color: rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          }

          .theme-card.active {
            border-color: currentColor;
            box-shadow: 0 0 20px currentColor;
          }

          .theme-preview {
            width: 100%;
            height: 80px;
            border-radius: 10px 10px 0 0;
          }

          .theme-preview-midnight { background: linear-gradient(135deg, #0a0e27, #6366f1); }
          .theme-preview-aurora { background: linear-gradient(135deg, #1a1a2e, #16c79a, #ff6b6b); }
          .theme-preview-minimal { background: linear-gradient(135deg, #fafafa, #2563eb); }
          .theme-preview-neon { background: linear-gradient(135deg, #0d0221, #ff00ff, #00ffff); }
          .theme-preview-sunset { background: linear-gradient(135deg, #1a0b2e, #ff6b6b, #ffa500); }
          .theme-preview-forest { background: linear-gradient(135deg, #0f2027, #2ecc71); }
          .theme-preview-ocean { background: linear-gradient(135deg, #0a2342, #3b82f6); }
          .theme-preview-rosegold { background: linear-gradient(135deg, #2c1810, #f4c2c2, #d4af37); }
          .theme-preview-monochrome { background: linear-gradient(135deg, #000, #fff); }
          .theme-preview-retro { background: linear-gradient(135deg, #2b0e3a, #ff6ec7, #39ff14); }
          .theme-preview-cherry { background: linear-gradient(135deg, #fff5f7, #ff6b9d); }
          .theme-preview-auto { background: linear-gradient(135deg, #0a0e27, #fafafa); }

          .theme-info {
            padding: 1rem;
            text-align: left;
          }

          .theme-name {
            font-weight: 600;
            font-size: 0.95rem;
            margin-bottom: 0.25rem;
          }

          .theme-desc {
            font-size: 0.75rem;
            opacity: 0.7;
          }

          @media (max-width: 768px) {
            .theme-selector-panel {
              padding: 1.5rem;
            }

            .theme-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 0.75rem;
            }

            .theme-preview {
              height: 60px;
            }
          }
        `}</style>
      </div>
    </>
  )
}

export default ThemeSelector

import { X } from 'lucide-react'

interface SettingsPanelProps {
  format24h: boolean
  setFormat24h: (value: boolean) => void
  timezone: string
  setTimezone: (value: string) => void
  onClose: () => void
}

const SettingsPanel = ({ format24h, setFormat24h, timezone, setTimezone, onClose }: SettingsPanelProps) => {
  const timezones = [
    { value: 'local', label: 'Local Time' },
    { value: 'America/New_York', label: 'New York' },
    { value: 'America/Los_Angeles', label: 'Los Angeles' },
    { value: 'Europe/London', label: 'London' },
    { value: 'Europe/Paris', label: 'Paris' },
    { value: 'Asia/Tokyo', label: 'Tokyo' },
    { value: 'Asia/Dubai', label: 'Dubai' },
    { value: 'Australia/Sydney', label: 'Sydney' },
  ]

  return (
    <>
      <div className="settings-overlay" onClick={onClose} />
      <div className="settings-panel slide-in">
        <div className="settings-header">
          <h2>Settings</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="settings-content">
          <div className="setting-item">
            <label>
              <input
                type="checkbox"
                checked={format24h}
                onChange={(e) => setFormat24h(e.target.checked)}
              />
              <span>24-hour format</span>
            </label>
          </div>

          <div className="setting-item">
            <label htmlFor="timezone">Timezone</label>
            <select
              id="timezone"
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
            >
              {timezones.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <style>{`
          .settings-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(4px);
            z-index: 200;
          }

          .settings-panel {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            padding: 2rem;
            min-width: 320px;
            max-width: 90vw;
            z-index: 201;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          }

          .settings-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
          }

          .settings-header h2 {
            font-size: 1.5rem;
            font-weight: 600;
          }

          .close-btn {
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 8px;
            transition: background 0.2s;
          }

          .close-btn:hover {
            background: rgba(255, 255, 255, 0.1);
          }

          .settings-content {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .setting-item label {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            cursor: pointer;
            font-size: 1rem;
          }

          .setting-item input[type="checkbox"] {
            width: 20px;
            height: 20px;
            cursor: pointer;
          }

          .setting-item select {
            width: 100%;
            padding: 0.75rem;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            color: inherit;
            font-size: 1rem;
            cursor: pointer;
            margin-top: 0.5rem;
          }

          .setting-item select:focus {
            outline: none;
            border-color: rgba(255, 255, 255, 0.4);
          }

          @media (max-width: 768px) {
            .settings-panel {
              padding: 1.5rem;
              min-width: 280px;
            }
          }
        `}</style>
      </div>
    </>
  )
}

export default SettingsPanel

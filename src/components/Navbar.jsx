import { useNavigate, useLocation } from 'react-router-dom'
import { useShowroomStore } from '../store/useShowroomStore.js'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleHomeClick = () => {
    // Reset store state to ensure a clean state when returning to showroom
    useShowroomStore.getState().setSelectedComponent(null)
    useShowroomStore.getState().setHoveredComponent(null)
    
    if (location.pathname !== '/') {
      navigate('/')
    }
  }

  const minimize = () => window.electronAPI?.minimize()
  const maximize = () => window.electronAPI?.maximize()
  const close    = () => window.electronAPI?.close()

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {location.pathname !== '/' && (
          <button className="navbar-back" onClick={() => navigate(-1)}>
            ← Back to Gallery
          </button>
        )}
      </div>

      <div className="navbar-right" style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginLeft: 'auto' }}>
        <div className="navbar-logo" onClick={handleHomeClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <img src="./SchaefflerLogo.png" alt="Schaeffler" style={{ height: '20px', objectFit: 'contain' }} />
        </div>

        <div className="navbar-controls">
          <button className="window-btn minimize" onClick={minimize} title="Minimize">─</button>
          <button className="window-btn" onClick={maximize} title="Maximize">□</button>
          <button className="window-btn close" onClick={close} title="Close">✕</button>
        </div>
      </div>
    </nav>
  )
}

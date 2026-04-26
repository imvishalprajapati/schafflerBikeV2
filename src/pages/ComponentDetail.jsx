import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import {
  Zap,
  Car,
  Fuel,
  BarChart3,
  Box,
  ShieldCheck,
  Settings2
} from 'lucide-react'
import { componentMap } from '../data/components.js'
import ComponentViewer from '../components/ComponentViewer.jsx'

export default function ComponentDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const pageRef = useRef()
  const component = componentMap[id]

  useEffect(() => {
    if (!pageRef.current) return
    gsap.fromTo(pageRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    )
  }, [id])

  if (!component) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ fontSize: '3rem' }}>⚠</div>
        <div style={{ color: 'var(--text-secondary)' }}>Component not found</div>
        <button className="back-button" style={{ position: 'static' }} onClick={() => navigate('/')}>← Back Gallery</button>
      </div>
    )
  }

  return (
    <div className="detail-page" ref={pageRef}>
      {/* Top Section: Header + Viewer */}
      <div className="detail-top-grid">

        {/* Left Card: Information Header */}
        <div className="detail-header-card">
          <div className="header-text-group">
            <h1>{component.label}</h1>
            <p>{component.tagline}</p>
          </div>

          <div className="header-apps-group">
            {component.applications?.includes('PHEV') && (
              <div className="app-indicator">
                <Zap className="app-icon" size={24} />
                <span>Plug-in Hybrid<br />Electric Vehicle</span>
              </div>
            )}
            {component.applications?.includes('MHEV') && (
              <div className="app-indicator">
                <Car className="app-icon" size={24} />
                <span>Mild Hybrid<br />Electric Vehicle</span>
              </div>
            )}
            {component.applications?.includes('BEV') && (
              <div className="app-indicator">
                <Zap className="app-icon" size={24} style={{ color: '#00893D' }} />
                <span>Battery Electric<br />Vehicle</span>
              </div>
            )}
            {component.applications?.includes('EV') && !component.applications?.includes('BEV') && (
              <div className="app-indicator">
                <Zap className="app-icon" size={24} />
                <span>Electric<br />Vehicle</span>
              </div>
            )}
            {component.applications?.includes('Gasoline') && (
              <div className="app-indicator">
                <Fuel className="app-icon" size={24} />
                <span>Gasoline</span>
              </div>
            )}
            {component.applications?.includes('Gasoline/Diesel') && (
              <div className="app-indicator">
                <Fuel className="app-icon" size={24} />
                <span>Gasoline /<br />Diesel</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Box: 3D Viewer */}
        <div className="detail-viewer-box">
          <ComponentViewer
            componentId={component.id}
            modelFile={component.model}
          />
          {/* <div className="viewer-watermark">GENERATE MOTION</div> */}
        </div>
      </div>

      {/* Bottom Section: Info Cards */}
      <div className="detail-bottom-grid">

        {/* Card 1: Highlights */}
        <div className="info-card">
          <div className="detail-card-header">
            <BarChart3 size={18} className="card-header-icon" />
            <h2>Highlights</h2>
          </div>
          <div className="card-body">
            {component.highlights?.map((h, i) => (
              <div key={i} className="highlight-item">
                <div className="highlight-circle">
                  {i === 0 ? <BarChart3 size={24} /> : i === 1 ? <Box size={24} /> : <Settings2 size={24} />}
                </div>
                <div className="highlight-text">{h}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Advantages */}
        <div className="info-card">
          <div className="detail-card-header">
            <ShieldCheck size={18} className="card-header-icon" />
            <h2>Advantages</h2>
          </div>
          <div className="card-body">
            <ul className="advantages-list">
              {component.advantages?.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 3: Features */}
        <div className="info-card">
          <div className="detail-card-header">
            <Settings2 size={18} className="card-header-icon" />
            <h2>Features / Specs</h2>
          </div>
          <div className="card-body">
            <table className="features-table">
              <tbody>
                {Object.entries(component.specs || {}).map(([key, val]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

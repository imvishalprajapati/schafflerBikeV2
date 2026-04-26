import { Suspense, useRef, useState, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Bounds, PerformanceMonitor, Bvh, useProgress } from '@react-three/drei'
import { useNavigate, Link } from 'react-router-dom'
import { useShowroomStore } from '../store/useShowroomStore.js'
import BikeViewer from '../components/BikeViewer.jsx'
import components from '../data/components.js'

// ── Featured Components for Home Grid ───────────────────────────────────
const FEATURED_COMPONENTS = [
  { id: 'ecu', label: 'Engine Control Units', image: '/parts/throttle_body.png', filter: (c) => c.category === 'Engine Control Units' },
  { id: 'sensors', label: 'Sensors', image: '/parts/knock_sensor.png', filter: (c) => ['knock_sensor', 'pressure_sensor', 'flex_fuel_sensor'].includes(c.id) },
  { id: 'injectors', label: 'Injectors', image: '/parts/fuel_injector.png', filter: (c) => c.id.startsWith('fuel_injector') },
  { id: 'valvetrain', label: 'Valvetrain', image: '/parts/chain_tensioner.png', filter: (c) => ['hydraulic_chain_tensioner', 'cam_roller'].includes(c.id) },
  { id: 'bearings', label: 'Bearings', image: '/parts/roller_bearing.png', filter: (c) => ['crankpin_kzk', 'cylindrical_roller', 'drawn_cup_starter'].includes(c.id) },
  { id: 'clutch', label: 'Starter One Way Clutch', image: '/parts/one_way_clutch.png', filter: (c) => c.id === 'one_way_clutch' },
]

function LoadingOverlay() {
  const { progress, active } = useProgress()
  if (!active && progress >= 100) return null

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 500,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
    }}>
      <div style={{
        width: 50, height: 50, borderRadius: '50%',
        border: '3px solid rgba(0,137,61,0.1)',
        borderTopColor: '#00893D',
        animation: 'spin 1s linear infinite',
        marginBottom: 16,
      }} />
      <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00893D' }}>
        {Math.round(progress)}%
      </div>
    </div>
  )
}

export default function Home() {
  const [dpr, setDpr] = useState(1.5)
  const [activeSelection, setActiveSelection] = useState(null)
  const navigate = useNavigate()
  const bikeGroupRef = useRef()

  const selectionItems = useMemo(() => {
    if (!activeSelection) return []
    return components.filter(activeSelection.filter)
  }, [activeSelection])

  const handleCardClick = (comp) => {
    const items = components.filter(comp.filter)
    if (items.length > 1) {
      setActiveSelection(comp)
    } else if (items.length === 1) {
      navigate(`/component/${items[0].id}`)
    }
  }

  return (
    <div className="home-page">
      <LoadingOverlay />

      {/* ── Hero Section ── */}
      <section className="home-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Efficient ICE Solutions –
            <span>Engine</span>
          </h1>
          <p className="hero-description">
            Thanks to a consistent system approach, Schaeffler offers a large variety of sensors,
            actuators and bearings that play a significant role in improving performance,
            reducing fuel consumption and increasing engine longevity.
          </p>
        </div>

        <div className="hero-image-area">
          <Canvas
            frameloop="demand"
            camera={{ position: [-4, 1.5, 6], fov: 35 }}
            gl={{ antialias: true, alpha: true }}
            dpr={dpr}
            style={{ background: 'transparent' }}
          >
            <PerformanceMonitor onDecline={() => setDpr(1)} />
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 10, 5]} intensity={2} />
            <Suspense fallback={null}>
              <Bounds fit clip margin={1.2}>
                <Bvh firstHitOnly>
                  <group ref={bikeGroupRef} position={[0, -0.5, 0]} scale={0.4}>
                    <BikeViewer groupRef={bikeGroupRef} />
                  </group>
                </Bvh>
              </Bounds>
            </Suspense>
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              minDistance={3}
              maxDistance={10}
              autoRotate={true}
              autoRotateSpeed={0.5}
              makeDefault
            />
          </Canvas>
        </div>
      </section>

      {/* ── Components Grid ── */}
      <section className="home-cards-container">
        <div className="home-cards-row">
          {FEATURED_COMPONENTS.map((comp) => (
            <div 
              key={comp.id} 
              className="home-comp-card"
              onClick={() => handleCardClick(comp)}
            >
              <div className="card-img-box">
                <img src={comp.image} alt={comp.label} />
              </div>
              <span className="card-label">{comp.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Selection Overlay ── */}
      {activeSelection && (
        <div className="selection-overlay" onClick={() => setActiveSelection(null)}>
          <div className="overlay-header" onClick={e => e.stopPropagation()}>
            <h2 className="overlay-title">Select {activeSelection.label}</h2>
            <button className="close-overlay" onClick={() => setActiveSelection(null)}>✕</button>
          </div>
          
          <div className="selection-grid" onClick={e => e.stopPropagation()}>
            {selectionItems.map(item => (
              <div 
                key={item.id} 
                className="selection-card"
                onClick={() => navigate(`/component/${item.id}`)}
              >
                <img src={activeSelection.image} alt={item.label} />
                <h3>{item.label}</h3>
                <p>{item.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Custom Global Animation Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}} />
    </div>
  )
}

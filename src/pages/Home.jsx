import { Suspense, useRef, useState, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Bounds, PerformanceMonitor, Bvh, useProgress } from '@react-three/drei'
import { useNavigate, Link } from 'react-router-dom'
import { useShowroomStore } from '../store/useShowroomStore.js'
import BikeViewer from '../components/BikeViewer.jsx'
import components from '../data/components.js'

// ── Featured Components for Home Grid ───────────────────────────────────
// ── Featured Components for Home Grid ───────────────────────────────────
const FEATURED_ICE_COMPONENTS = [
  { 
    id: 'engine', 
    label: 'Engine', 
    image: './images/injectors.png', 
    filter: (c) => c.category === 'Engine',
    description: 'Thanks to a consistent system approach, Schaeffler offers a large variety of sensors, actuators and bearings that play a significant role in terms of energy efficiency. From Port Fuel Injectors, to knock sensors, bearings, our latest technologies guarantee a better efficiency for the 2-wheeler applications.'
  },
  { 
    id: 'transmission', 
    label: 'Transmission', 
    image: './images/needle roller assembly.png', 
    filter: (c) => c.category === 'Transmission',
    description: 'A robust and compact drivetrain is crucial in order to get the power of the engine to the wheel. This also requires reliable main shaft bearings in the transmission like ball bearings with centrifugal disc or roller bearings with special raceway profiles.'
  },
  { 
    id: 'chassis', 
    label: 'Chassis', 
    image: './images/Wheel bearing with encoder sealing.png', 
    filter: (c) => c.category === 'Chassis',
    description: 'Chassis bearings directly impact the riding feeling and vehicle behavior. This comprises the steering head bearing for a smooth steering feeling as well as radial spherical bearings in the steering damper for a stable dynamic behavior.'
  },
  { 
    id: 'ecu', 
    label: 'Engine Control Units', 
    image: './images/M4C Engine Control Unit.png', 
    filter: (c) => c.category === 'Engine Control Units',
    description: "Schaeffler has a strong and demonstrated expertise in the development of Electronic Control Units – addressing every kind of 2-wheeler & Powersports application. We ensure more efficiency, safety and drivability while keeping the riding pleasure."
  },
]

const FEATURED_EV_COMPONENTS = [
  { id: 'emotor', label: 'Traction Motors', image: './images/E-Motor 48 V.png', filter: (c) => c.id === 'emotor_48v', description: 'High-performance, cost optimized e-Motor platform scalable in power and torque to match diverse vehicle needs.' },
  { id: 'edcu', label: 'Control Units', image: './images/Control Unit – Electric Drive eDCU.png', filter: (c) => c.id === 'edcu', description: 'Smart, all-in-one controller merging motor and vehicle control functions into a single, scalable unit.' },
  { id: 'irps', label: 'Position Sensors', image: './images/Inductive Rotor Position Sensor (iRPS).png', filter: (c) => c.id === 'irps', description: 'Compact inductive sensor for high-speed sensing, providing accurate positioning for maximum e-motor efficiency.' },
  { id: 'bms', label: 'Battery Management', image: './images/Battery Management System.png', filter: (c) => c.id === 'bms', description: 'Highly integrated BMS solution offering balancing, monitoring, switching and current measurement on a single PCB.' },
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

  const bikeMode = useShowroomStore(s => s.bikeMode)
  const setBikeMode = useShowroomStore(s => s.setBikeMode)

  const featuredComponents = bikeMode === 'EV' ? FEATURED_EV_COMPONENTS : FEATURED_ICE_COMPONENTS

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

  const heroContent = bikeMode === 'EV' ? {
    title: 'Powertrain Electrification –',
    subtitle: 'EV Solutions',
    description: 'Schaeffler is shaping the future of electric mobility. Our modular and scalable electrification solutions for 2- and 3-wheelers ensure maximum efficiency, performance, and sustainability.'
  } : {
    title: 'Efficient ICE Solutions –',
    subtitle: 'Engine',
    description: 'Thanks to a consistent system approach, Schaeffler offers a large variety of sensors, actuators and bearings that play a significant role in improving performance, reducing fuel consumption and increasing engine longevity.'
  }

  return (
    <div className="home-page">
      <LoadingOverlay />

      {/* ── Mode Toggle ── */}
      <div className="mode-toggle-container">
        <button
          className={`mode-btn ${bikeMode === 'ICE' ? 'active' : ''}`}
          onClick={() => setBikeMode('ICE')}
        >
          ICE / Hybrid
        </button>
        <button
          className={`mode-btn ${bikeMode === 'EV' ? 'active' : ''}`}
          onClick={() => setBikeMode('EV')}
        >
          Pure EV
        </button>
      </div>

      {/* ── Hero Section ── */}
      <section className="home-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            {heroContent.title}
            <span>{heroContent.subtitle}</span>
          </h1>
          <p className="hero-description">
            {heroContent.description}
          </p>
        </div>

        <div className="hero-image-area">
          <Canvas
            frameloop="demand"
            camera={{ position: [-4, 1.5, 6], fov: 35 }}
            gl={{ antialias: true, alpha: true }}
            dpr={dpr}
            key={bikeMode} // Force re-mount on mode change for clean transition
            style={{ background: 'transparent' }}
          >
            <PerformanceMonitor onDecline={() => setDpr(1)} />
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 10, 5]} intensity={2} />
            <Suspense fallback={null}>
              <Bounds fit clip margin={1.2}>
                <Bvh firstHitOnly>
                  <group ref={bikeGroupRef} position={[0, -0.5, 0]} scale={bikeMode === 'EV' ? 0.3 : 0.4}>
                    <BikeViewer groupRef={bikeGroupRef} bikeMode={bikeMode} />
                  </group>
                </Bvh>
              </Bounds>
            </Suspense>
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              minDistance={6.5}
              maxDistance={8.5}
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
          {featuredComponents.map((comp) => (
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
        <div 
          className="selection-overlay" 
          onClick={(e) => {
            if (e.target === e.currentTarget && e.clientX < e.target.clientWidth) {
              setActiveSelection(null)
            }
          }}
        >
          <div className="overlay-header" onClick={e => e.stopPropagation()}>
            <div className="overlay-title-group">
              <h2 className="overlay-title">Select {activeSelection.label}</h2>
              <p className="overlay-description">{activeSelection.description}</p>
            </div>
            <button className="close-overlay" onClick={() => setActiveSelection(null)}>✕</button>
          </div>

          <div className="selection-grid" onClick={e => e.stopPropagation()}>
            {selectionItems.map(item => (
              <div
                key={item.id}
                className="selection-card"
                onClick={() => navigate(`/component/${item.id}`)}
              >
                <img src={item.image} alt={item.label} />
                <h3>{item.label}</h3>
                <p>{item.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Custom Global Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .mode-toggle-container {
          position: absolute;
          top: 100px;
          left: 4rem;
          display: flex;
          background: #f0f0f0;
          padding: 4px;
          border-radius: 99px;
          z-index: 10;
          border: 1px solid #e0e0e0;
        }

        .mode-btn {
          padding: 8px 24px;
          border: none;
          background: transparent;
          border-radius: 99px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #666;
        }

        .mode-btn.active {
          background: #00893D;
          color: white;
          box-shadow: 0 4px 12px rgba(0, 137, 61, 0.2);
        }
      `}} />
    </div>
  )
}

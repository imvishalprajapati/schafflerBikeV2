import { Html } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'
import { useShowroomStore } from '../store/useShowroomStore.js'
import components from '../data/components.js'

// Category colors
const catColor = {
  'Engine': '#00893D',
  'Engine Control Units': '#00b050',
  'Transmission': '#0077cc',
  'Chassis': '#cc7700',
  'Electrification': '#9900cc',
}

function HotspotPin({ component }) {
  const navigate = useNavigate()
  const { setHoveredComponent, dynamicAnchors } = useShowroomStore()
  const color = catColor[component.category] || '#00893D'

  // Prefer dynamic anchor (computed from mesh bounds), fall back to hardcoded
  const dynPos = dynamicAnchors[component.id]
  const pinPosition = dynPos ?? component.anchor

  if (!pinPosition) return null

  return (
    <Html position={pinPosition} center zIndexRange={[10, 20]}>
      <div
        className="hotspot-pin hovered"
        onMouseEnter={() => setHoveredComponent(component.id)}
        onMouseLeave={() => setHoveredComponent(null)}
        onPointerDown={(e) => {
          e.stopPropagation()
          navigate(`/component/${component.id}`)
        }}
        style={{ '--pin-color': color }}
      >
        <div className="hotspot-label">
          {component.label}
          <span className="hotspot-category">{component.category}</span>
        </div>
        <div className="hotspot-ring" style={{ borderColor: color }}>
          <div className="hotspot-dot" style={{ background: color }} />
        </div>
      </div>
    </Html>
  )
}

export default function Hotspots() {
  const { selectedComponent } = useShowroomStore()

  // Only show a pin for the component the user clicked in the left sidebar
  if (!selectedComponent) return null

  const comp = components.find(c => c.id === selectedComponent)
  if (!comp) return null

  return <HotspotPin component={comp} />
}

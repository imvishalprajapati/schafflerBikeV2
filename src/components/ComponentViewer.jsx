import { useState, useMemo, Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF, Bounds, PerformanceMonitor, Center } from '@react-three/drei'
import { ErrorBoundary } from './ErrorBoundary.jsx'

// ── ComponentModel ────────────────────────────────────────────────────────────
function ComponentModel({ modelPath }) {
  const { scene: rawScene } = useGLTF(modelPath, './draco/')
  const scene = useMemo(() => rawScene.clone(true), [rawScene])

  return <primitive object={scene} scale={1.2} />
}

// ── Fallback ──────────────────────────────────────────────────────────────────
function FallbackBox({ color = '#00893D' }) {
  return (
    <mesh>
      <torusKnotGeometry args={[0.6, 0.2, 128, 32]} />
      <meshStandardMaterial
        color={color} metalness={0.8} roughness={0.1}
        emissive={color} emissiveIntensity={0.1}
      />
    </mesh>
  )
}

// ── ComponentViewer ───────────────────────────────────────────────────────────
export default function ComponentViewer({
  componentId,
  modelFile,
  color = '#00893D'
}) {
  if (!modelFile) return null;

  const [modelError, setModelError] = useState(false)
  const [dpr, setDpr] = useState(1.5)
  const modelPath = `./models/${modelFile}`

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 40 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      shadows
      dpr={dpr}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <PerformanceMonitor onDecline={() => setDpr(1)} />
      <Suspense fallback={null}>
        {/* Lighting — neutral studio setup */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
        <directionalLight position={[-3, 3, -3]} intensity={0.5} color="#ffffff" />
        <pointLight position={[0, 4, 2]} intensity={0.8} color="#ffffff" />

        <Bounds fit clip observe margin={1.2}>
          {!modelError ? (
            <ErrorBoundary
              fallback={<Center><FallbackBox color={color} /></Center>}
              onError={() => setModelError(true)}
            >
              <Suspense fallback={<Center><FallbackBox color={color} /></Center>}>
                <Center>
                  <ComponentModel modelPath={modelPath} />
                </Center>
              </Suspense>
            </ErrorBoundary>
          ) : (
            <Center><FallbackBox color={color} /></Center>
          )}
        </Bounds>

        <Environment preset="warehouse" />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minDistance={2.2}
          maxDistance={9}
          autoRotate={false}
          // Restrict vertical rotation to keep the component in a good viewing angle
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.6}
          // Restrict horizontal rotation to prevent full 360 view (limit to ~120 degrees)
          minAzimuthAngle={-Math.PI / 3}
          maxAzimuthAngle={Math.PI / 3}
          makeDefault
        />
      </Suspense>
    </Canvas>
  )
}

import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function ResponsiveMesh() {
 const meshRef = useRef()
 const { viewport } = useThree()

 const scale = Math.min(viewport.width * 0.4, 2.5)

 useFrame((state) => {
  const time = state.clock.getElapsedTime()
  if (meshRef.current) {
   meshRef.current.rotation.x = time * 0.15
   meshRef.current.rotation.y = time * 0.2
  }
 })

 return (
  <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.4}>
   <Sphere ref={meshRef} args={[1, 100, 100]} scale={scale}>
    <MeshDistortMaterial
     color="#2a2a2a"
     attach="material"
     distort={0.4}
     speed={1.5}
     roughness={0.3}
     metalness={0.9}
     emissive="#E8FF47"
     emissiveIntensity={0.15}
    />
   </Sphere>
  </Float>
 )
}

function generateParticlePositions(count, width, height) {
 const positions = new Float32Array(count * 3)
 for (let i = 0; i < count; i++) {
  positions[i * 3] = (Math.random() - 0.5) * width
  positions[i * 3 + 1] = (Math.random() - 0.5) * height
  positions[i * 3 + 2] = (Math.random() - 0.5) * 10
 }
 return positions
}

function Particles({ count = 80 }) {
 const points = useRef()
 const { viewport } = useThree()

 const [particlesPosition] = useState(
  () => generateParticlePositions(count, viewport.width * 1.5, viewport.height * 1.5)
 )

 useFrame((state) => {
  const time = state.clock.getElapsedTime()
  if (points.current) {
   points.current.rotation.y = time * 0.03
   points.current.rotation.x = time * 0.01
  }
 })

 return (
  <points ref={points}>
   <bufferGeometry>
    <bufferAttribute
     attach="attributes-position"
     count={particlesPosition.length / 3}
     array={particlesPosition}
     itemSize={3}
    />
   </bufferGeometry>
   <pointsMaterial
    size={0.03}
    color="#E8FF47"
    sizeAttenuation={true}
    transparent={true}
    opacity={0.3}
    blending={THREE.AdditiveBlending}
   />
  </points>
 )
}

function HeroBackground3D() {
 return (
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.12 }}>
   <Canvas
    camera={{ position: [0, 0, 5], fov: 60 }}
    gl={{ alpha: true, antialias: true }}
    dpr={[1, 1.5]}
   >
    <ambientLight intensity={0.4} />
    <directionalLight position={[5, 5, 5]} intensity={1.2} color="#E8FF47" />
    <directionalLight position={[-5, -5, -5]} intensity={0.6} color="#FF6B35" />

    <ResponsiveMesh />
    <Particles count={80} />
   </Canvas>

   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(12,12,12,0.5)] to-[var(--bg-color)] pointer-events-none" />
  </div>
 )
}

export default HeroBackground3D

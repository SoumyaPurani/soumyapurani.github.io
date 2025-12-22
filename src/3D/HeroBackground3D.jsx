import React, { useRef } from 'react'
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
          color="#1e40af"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.4}
          metalness={0.8}
          emissive="#00E5FF"
          emissiveIntensity={0.2} 
        />
      </Sphere>
    </Float>
  )
}

function Particles({ count = 100 }) {
  const points = useRef()
  const { viewport } = useThree()
  
  const particlesPosition = React.useMemo(() => {
    const positions = new Float32Array(count * 3)
    const width = viewport.width * 1.5
    const height = viewport.height * 1.5
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * width
      positions[i * 3 + 1] = (Math.random() - 0.5) * height
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [count, viewport])

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
        color="#00E5FF"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function HeroBackground3D() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden bg-[var(--bg-color)]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#00E5FF" />
        <directionalLight position={[-5, -5, -5]} intensity={1} color="#3b82f6" />
        
        <ResponsiveMesh />
        <Particles count={200} />
      </Canvas>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(10,10,10,0.5)] to-[var(--bg-color)] pointer-events-none" />
    </div>
  )
}

export default HeroBackground3D

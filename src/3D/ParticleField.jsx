import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleSystem({ count = 200 }) {
  const pointsRef = useRef()
  
  const particlesPosition = React.useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8
      
      const color = Math.random() > 0.5 ? new THREE.Color('#00f3ff') : new THREE.Color('#bc13fe')
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    
    return { positions, colors }
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.03
      
      const positions = pointsRef.current.geometry.attributes.position.array
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        const x = positions[i3]
        
        positions[i3 + 1] += Math.sin(time * 0.5 + x * 0.5) * 0.002
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.positions.length / 3}
          array={particlesPosition.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesPosition.colors.length / 3}
          array={particlesPosition.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors={true}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function ParticleField({ particleCount = 200 }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00f3ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bc13fe" />
        <ParticleSystem count={particleCount} />
      </Canvas>
    </div>
  )
}

export default ParticleField

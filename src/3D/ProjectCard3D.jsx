import React, { useState } from 'react'

function ProjectCard3D({ children }) {
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!isHovered) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    
    setRotation({
      x: -y * 10,
      y: x * 10, 
    })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div
      className="relative transition-all duration-500 h-full" 
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${
            isHovered ? 'translateZ(10px)' : 'translateZ(0px)'
          }`,
          transition: 'transform 0.1s ease-out', 
          transformStyle: 'preserve-3d',
        }}
        className="will-change-transform h-full" 
      >
        {children}
      </div>
    </div>
  )
}

export default ProjectCard3D

import React, { useEffect, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function SpinningShape() {
 const meshRef = useRef()
 const matRef = useRef()

 useFrame((state) => {
  if (meshRef.current) {
   meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4
   meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.6
  }
  if (matRef.current) {
   matRef.current.emissiveIntensity =
    0.6 + Math.sin(state.clock.getElapsedTime() * 2) * 0.3
  }
 })

 return (
  <mesh ref={meshRef}>
   <octahedronGeometry args={[1.2, 0]} />
   <meshStandardMaterial
    ref={matRef}
    color="#E8FF47"
    emissive="#E8FF47"
    emissiveIntensity={0.6}
    wireframe={true}
   />
  </mesh>
 )
}

const bootMessages = [
 "Initializing Soumya Purani Portfolio v3.0.0",
 "Loading core modules...",
 "Establishing secure connection...",
 "Loading 3D rendering engine...",
 "Initializing particle system...",
 "Loading UI components...",
 "Establishing WebGL context...",
 "Loading shaders and materials...",
 "Connecting to backend services...",
 "Loading portfolio data...",
 "Rendering 3D environment...",
 "Finalizing user interface...",
 "System ready. Welcome to my portfolio.",
]

const codeSnippets = [
 "npm run dev",
 "vite v7.3.2 ready",
 "loading <Canvas />",
 "init THREE.Scene()",
 "render.start()",
]

function LoadingScreenAnimation({ onComplete }) {
 const [progress, setProgress] = useState(0)
 const [fading, setFading] = useState(false)
 const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
 const [displayedText, setDisplayedText] = useState('')

 useEffect(() => {
  let currentProg = 0;
  let snipSnipIdx = 0;
  let charIdx = 0;
  let textState = '';
  const PAUSE_TICKS = 6;
  let pauseRemaining = 0;
  let progressDone = false;

  const interval = setInterval(() => {
   currentProg = Math.min(currentProg + 1, 100);
   setProgress(currentProg);
   if (currentProg >= 100) progressDone = true;

   const msgIdx = Math.min(Math.floor(currentProg / 8), bootMessages.length - 1);
   setCurrentMessageIndex(msgIdx);

   const snippet = codeSnippets[snipSnipIdx];
   const typingDone = snipSnipIdx >= codeSnippets.length - 1 && charIdx >= snippet.length;

   if (pauseRemaining > 0) {
    pauseRemaining--;
   } else if (charIdx >= snippet.length) {
    if (snipSnipIdx < codeSnippets.length - 1) {
     snipSnipIdx++;
     charIdx = 0;
     textState = '';
     pauseRemaining = PAUSE_TICKS;
    }
   } else {
    textState += snippet[charIdx];
    charIdx++;
   }
   setDisplayedText(textState);

   if (progressDone && typingDone) {
    clearInterval(interval);
    setTimeout(() => setFading(true), 300);
    setTimeout(() => onComplete?.(), 800);
   }
  }, 100);

  return () => clearInterval(interval);
 }, [onComplete]);

 const statusLabel =
  progress < 30
   ? 'Initializing...'
   : progress < 60
    ? 'Loading assets...'
    : progress < 90
     ? 'Rendering scene...'
     : 'Ready to launch!'

 return (
  <div
   className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}
   style={{ background: 'var(--bg-color)' }}
  >
   <div
    className="absolute inset-0 pointer-events-none"
    style={{
     backgroundImage:
      'radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)',
     backgroundSize: '32px 32px',
    }}
   />

   <div
    className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none"
    style={{
     background: 'radial-gradient(circle, rgba(232,255,71,0.04) 0%, transparent 70%)',
     filter: 'blur(40px)',
    }}
   />
   <div
    className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
    style={{
     background: 'radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 70%)',
     filter: 'blur(40px)',
    }}
   />

   <div className="relative z-10 w-full max-w-3xl mx-6 flex flex-col" style={{ fontFamily: '"JetBrains Mono", monospace' }}>

    <div
     className="flex items-center gap-3 rounded-t-xl px-4 py-3"
     style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid rgba(232,255,71,0.15)',
      borderLeft: '1px solid rgba(232,255,71,0.15)',
      borderRight: '1px solid rgba(232,255,71,0.15)',
     }}
    >
     <div className="flex gap-1.5">
      <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
      <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
      <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
     </div>
     <div className="flex-1 text-center text-xs" style={{ color: 'var(--text-muted)' }}>
      soumya@portfolio: ~ bash
     </div>
     <div className="text-xs tabular-nums" style={{ color: 'var(--text-muted)' }}>
      {Math.round(progress)}%
     </div>
    </div>

    <div
     className="relative rounded-b-xl overflow-hidden"
     style={{
      background: 'rgba(12,12,12,0.92)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(232,255,71,0.08)',
      borderTop: 'none',
      minHeight: '420px',
     }}
    >
     <div className="absolute inset-0 opacity-15 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 3.5] }}>
       <ambientLight intensity={0.3} />
       <pointLight position={[5, 5, 5]} intensity={2} color="#E8FF47" />
       <pointLight position={[-5, -3, -5]} intensity={0.8} color="#FF6B35" />
       <SpinningShape />
      </Canvas>
     </div>

     <div className="relative z-10 p-6 flex flex-col h-full" style={{ minHeight: '420px' }}>

      <div className="mb-5 space-y-1.5 text-xs">
       <div style={{ color: 'var(--text-muted)' }}>
        <span style={{ color: 'var(--primary-color)' }}>&#x276F;</span>{' '}
        Initializing developer portfolio...
       </div>
       <div style={{ color: 'var(--text-muted)' }}>
        <span style={{ color: 'var(--primary-color)' }}>&#x276F;</span>{' '}
        Loading 3D environment...
       </div>
       <div className="flex items-start gap-2" style={{ color: 'var(--text-color)' }}>
        <span style={{ color: 'var(--primary-color)' }}>&#x276F;</span>
        <span>{bootMessages[currentMessageIndex]}</span>
       </div>
      </div>

      <div
       className="mb-5 rounded-lg p-3 text-xs"
       style={{
        background: 'rgba(20,20,20,0.7)',
        border: '1px solid rgba(232,255,71,0.06)',
       }}
      >
       <div className="flex items-start gap-2">
        <span className="select-none" style={{ color: 'var(--accent-color)' }}>1</span>
        <span style={{ color: 'var(--primary-color)' }}>
         {displayedText}
         <span
          style={{
           display: 'inline-block',
           width: '2px',
           height: '1em',
           background: 'var(--primary-color)',
           verticalAlign: 'text-bottom',
           animation: 'blink 0.8s step-end infinite',
          }}
         />
        </span>
       </div>
      </div>

      <div className="grow" />

      <div className="space-y-3">
       <div
        className="w-full rounded-full h-1"
        style={{ background: 'rgba(255,255,255,0.06)' }}
       >
        <div
         className="h-1 rounded-full transition-all duration-300 ease-out"
         style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color))',
          boxShadow: '0 0 8px rgba(232,255,71,0.4)',
         }}
        />
       </div>

       <div className="flex items-center justify-between text-xs">
        <span style={{ color: 'var(--text-muted)' }}>
         <span style={{ color: 'var(--primary-color)' }}>&#x25CF;</span>{' '}
         {statusLabel}
        </span>
        <span className="tabular-nums" style={{ color: 'var(--text-muted)' }}>
         {Math.round(progress)} / 100
        </span>
       </div>
      </div>
     </div>
    </div>

    <div className="mt-4 text-center text-xs" style={{ color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
     SOUMYA PURANI &#183; PORTFOLIO
    </div>
   </div>
  </div>
 )
}

export default LoadingScreenAnimation

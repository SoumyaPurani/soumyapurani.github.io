import React, { useEffect, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Wireframe octahedron that pulses with cyan glow
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
        color="#00E5FF"
        emissive="#00E5FF"
        emissiveIntensity={0.6}
        wireframe={true}
      />
    </mesh>
  )
}

// Terminal boot sequence messages
const bootMessages = [
  "Initializing Soumya Purani Portfolio v2.1.0",
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

// Skill-based code snippets
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
      // 1. Progress bar — slower increment so typing has time to play out
      currentProg = Math.min(currentProg + 1, 100);
      setProgress(currentProg);
      if (currentProg >= 100) progressDone = true;

      // 2. Boot message
      const msgIdx = Math.min(Math.floor(currentProg / 8), bootMessages.length - 1);
      setCurrentMessageIndex(msgIdx);

      // 3. Typing — only advance AFTER current snippet is FULLY typed
      const snippet = codeSnippets[snipSnipIdx];
      const typingDone = snipSnipIdx >= codeSnippets.length - 1 && charIdx >= snippet.length;

      // Handle pause between snippets BEFORE checking if done / typing
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

      // 4. Complete only when BOTH the bar is full AND all typing is done
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
      {/* Subtle dot-grid backdrop (mirrors body::before) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(98,37,230,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Terminal window */}
      <div className="relative z-10 w-full max-w-3xl mx-6 flex flex-col" style={{ fontFamily: '"JetBrains Mono", monospace' }}>

        {/* Title bar */}
        <div
          className="flex items-center gap-3 rounded-t-xl px-4 py-3"
          style={{
            background: 'var(--bg-surface)',
            borderTop: '1px solid rgba(0,229,255,0.15)',
            borderLeft: '1px solid rgba(0,229,255,0.15)',
            borderRight: '1px solid rgba(0,229,255,0.15)',
          }}
        >
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
          </div>
          <div className="flex-1 text-center text-xs" style={{ color: 'var(--text-muted)' }}>
            soumya@portfolio: ~ bash
          </div>
          {/* Faint progress fraction */}
          <div className="text-xs tabular-nums" style={{ color: 'var(--text-muted)' }}>
            {Math.round(progress)}%
          </div>
        </div>

        {/* Terminal body */}
        <div
          className="relative rounded-b-xl overflow-hidden"
          style={{
            background: 'rgba(5,5,8,0.92)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(0,229,255,0.1)',
            borderTop: 'none',
            minHeight: '420px',
          }}
        >
          {/* 3D canvas background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 3.5] }}>
              <ambientLight intensity={0.3} />
              <pointLight position={[5, 5, 5]} intensity={2} color="#00E5FF" />
              <pointLight position={[-5, -3, -5]} intensity={0.8} color="#6225e6" />
              <SpinningShape />
            </Canvas>
          </div>

          {/* Text content */}
          <div className="relative z-10 p-6 flex flex-col h-full" style={{ minHeight: '420px' }}>

            {/* Boot messages */}
            <div className="mb-5 space-y-1.5 text-xs">
              <div style={{ color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--primary-color)' }}>❯</span>{' '}
                Initializing developer portfolio...
              </div>
              <div style={{ color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--primary-color)' }}>❯</span>{' '}
                Loading 3D environment...
              </div>
              <div className="flex items-start gap-2" style={{ color: 'var(--text-color)' }}>
                <span style={{ color: 'var(--primary-color)' }}>❯</span>
                <span>{bootMessages[currentMessageIndex]}</span>
              </div>
            </div>

            {/* Code snippet */}
            <div
              className="mb-5 rounded-lg p-3 text-xs"
              style={{
                background: 'rgba(14,14,20,0.7)',
                border: '1px solid rgba(0,229,255,0.08)',
              }}
            >
              <div className="flex items-start gap-2">
                <span className="select-none" style={{ color: 'var(--secondary-color)' }}>1</span>
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

            {/* Spacer */}
            <div className="grow" />

            {/* Progress section */}
            <div className="space-y-3">
              {/* Bar */}
              <div
                className="w-full rounded-full h-1"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                <div
                  className="h-1 rounded-full transition-all duration-300 ease-out"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))',
                    boxShadow: '0 0 8px rgba(0,229,255,0.5)',
                  }}
                />
              </div>

              {/* Status row */}
              <div className="flex items-center justify-between text-xs">
                <span style={{ color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--primary-color)' }}>●</span>{' '}
                  {statusLabel}
                </span>
                <span className="tabular-nums" style={{ color: 'var(--text-muted)' }}>
                  {Math.round(progress)} / 100
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle bottom label */}
        <div className="mt-4 text-center text-xs" style={{ color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
          SOUMYA PURANI · PORTFOLIO        </div>
      </div>
    </div>
  )
}

export default LoadingScreenAnimation

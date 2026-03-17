import React, { useEffect, useState } from 'react'

function LoadingScreenAnimation({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 12
        const newProgress = Math.min(prev + increment, 100)

        if (newProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => setFading(true), 100)
          setTimeout(onComplete, 600)
          return 100
        }
        return newProgress
      })
    }, 80)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className={`fixed inset-0 z-50 bg-[var(--bg-color)] flex flex-col items-center justify-center transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Logo mark */}
      <div className="mb-10 font-display text-2xl font-bold tracking-tight">
        <span className="text-white">Soumya</span>
        <span className="text-gradient ml-1.5">Purani</span>
      </div>

      {/* Progress bar */}
      <div className="w-52 h-[2px] bg-white/[0.06] rounded-full overflow-hidden relative">
        <div
          className="h-full rounded-full transition-all duration-150 ease-out"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))',
            boxShadow: '0 0 12px var(--primary-glow)',
          }}
        />
      </div>

      {/* Percentage */}
      <div className="mt-4 font-mono text-xs text-[var(--text-muted)] tracking-widest">
        {Math.round(progress)}%
      </div>
    </div>
  )
}

export default LoadingScreenAnimation

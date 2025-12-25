import React, { useEffect, useState } from 'react'

function LoadingScreenAnimation({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 10
        const newProgress = Math.min(prev + increment, 100)
        
        if (newProgress >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 200)
          return 100
        }
        return newProgress
      })
    }, 100)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-[var(--bg-color)] flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden relative">
        <div 
          className="h-full bg-[var(--primary-color)] shadow-[0_0_15px_rgba(0,229,255,0.7)] transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 font-mono text-[var(--primary-color)] text-sm animate-pulse">
        {Math.round(progress)}%
      </div>
    </div>
  )
}

export default LoadingScreenAnimation
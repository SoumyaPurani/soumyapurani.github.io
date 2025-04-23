import React from 'react'
import Logo from './Logo'

function Navbar() {
  return (
    <nav className="fixed top-o w-full z-40 bg-#1C0D30 shadow-lg backdrop-blur-lg px-1 border-white">
        <div className="max-w-5xl mx-auto px-4"> 
            <div className="flex justify-between items-center font-mono h-16">
                <Logo />
            </div>
        </div>
    </nav>
  )
}

export default Navbar
import React, { useEffect } from 'react'
import Logo from './Logo'
import { MdMenu } from "react-icons/md";

function Navbar({isMenuOpen, setIsMenuOpen}) {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 glass px-1 border-b border-[rgba(255,255,255,0.1)]">
        <div className="max-w-5xl mx-auto px-4"> 
            <div className="flex justify-between items-center font-mono h-16">
                <Logo />
                {!isMenuOpen && <div onClick={() => setIsMenuOpen(prev => !prev)} className="text-2xl absolute right-7 z-40 md:hidden cursor-pointer font-mono text-white">
                  <MdMenu />
                </div>}
                <div className="flex md:flex items-center space-x-8">
                  <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 text-lg hover:text-[var(--primary-color)] transition-colors duration-300">
                      {">"} Home
                    </a>
                    <a href="#about" className="text-gray-300 text-lg hover:text-[var(--primary-color)] transition-colors duration-300">
                      {">"} About
                    </a>
                    <a href="#projects" className="text-gray-300 text-lg hover:text-[var(--primary-color)] transition-colors duration-300">
                      {">"} Projects
                    </a>
                    <a href="#contact" className="text-gray-300 text-lg hover:text-[var(--primary-color)] transition-colors duration-300">
                      {">"} Contact
                    </a>
                  </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
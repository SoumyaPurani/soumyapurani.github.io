import React, { useEffect } from 'react'
import Logo from './Logo'
import { MdMenu } from "react-icons/md";

function Navbar({isMenuOpen, setIsMenuOpen}) {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);
  return (
    <nav className="fixed top-o w-full z-40 bg-#1C0D30 shadow-lg backdrop-blur-lg px-1 border-white">
        <div className="max-w-5xl mx-auto px-4"> 
            <div className="flex justify-between items-center font-mono h-16">
                <Logo />
                {!isMenuOpen && <div onClick={() => setIsMenuOpen(prev => !prev)} className="text-2xl absolute right-7 z-40m md:hidden cursor-pointer font-mono">
                  <MdMenu />
                </div>}
                <div className="flex md:flex items-center space-x-8">
                  <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 text-lg hover:text-xl hover:text-white transition-all">Home</a>
                    <a href="#about" className="text-gray-300 text-lg hover:text-xl hover:text-white transition-all">About</a>
                    <a href="#projects" className="text-gray-300 text-lg hover:text-xl hover:text-white transition-all">Projects</a>
                    <a href="#contact" className="text-gray-300 text-lg hover:text-xl hover:text-white transition-all">Contact</a>
                  </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
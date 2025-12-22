import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { MdMenu } from "react-icons/md";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";

function Navbar({isMenuOpen, setIsMenuOpen}) {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navColour ? "glass-nav py-2" : "bg-transparent py-4"}`}>
        <div className="max-w-6xl mx-auto px-4"> 
            <div className="flex justify-between items-center h-full">
                <Logo />
                {!isMenuOpen && <div onClick={() => setIsMenuOpen(prev => !prev)} className="text-2xl absolute right-7 z-50 md:hidden cursor-pointer text-white">
                  <MdMenu />
                </div>}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="flex items-center gap-2 text-lg text-white font-medium hover:text-[var(--primary-color)] transition-all relative group">
                      <AiOutlineHome className="mb-1" /> Home
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-color)] group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#about" className="flex items-center gap-2 text-lg text-white font-medium hover:text-[var(--primary-color)] transition-all relative group">
                      <AiOutlineUser className="mb-1" /> About
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-color)] group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#projects" className="flex items-center gap-2 text-lg text-white font-medium hover:text-[var(--primary-color)] transition-all relative group">
                      <AiOutlineFundProjectionScreen className="mb-1" /> Projects
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-color)] group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#contact" className="flex items-center gap-2 text-lg text-white font-medium hover:text-[var(--primary-color)] transition-all relative group">
                       Contact
                       <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-color)] group-hover:w-full transition-all duration-300"></span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
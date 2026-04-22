import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { MdMenu } from "react-icons/md";

const navItems = [
 { href: '#home', label: 'Home' },
 { href: '#about', label: 'About' },
 { href: '#experience', label: 'Career' },
 { href: '#projects', label: 'Work' },
 { href: '#contact', label: 'Contact' },
];

function Navbar({ isMenuOpen, setIsMenuOpen }) {
 const [scrolled, setScrolled] = useState(false);
 const [activeSection, setActiveSection] = useState('home');

 useEffect(() => {
  const handleScroll = () => {
   setScrolled(window.scrollY > 20);

   const sections = navItems.map(item => item.href.slice(1));
   for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i]);
    if (el && el.getBoundingClientRect().top <= 150) {
     setActiveSection(sections[i]);
     break;
    }
   }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 return (
  <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-2' : 'bg-transparent py-5'}`}>
   <div className="max-w-6xl mx-auto px-6">
    <div className="flex justify-between items-center">
     <Logo />

     {!isMenuOpen && (
      <button
       onClick={() => setIsMenuOpen(prev => !prev)}
       className="text-2xl absolute right-6 z-50 md:hidden cursor-pointer text-white/70 hover:text-white transition-colors"
       aria-label="Open menu"
      >
       <MdMenu />
      </button>
     )}

     <div className="hidden md:flex items-center gap-1">
      {navItems.map(({ href, label }) => {
       const isActive = activeSection === href.slice(1);
       return (
        <a
         key={href}
         href={href}
         className={`group relative px-3.5 py-2 text-sm font-medium font-mono tracking-wide transition-colors duration-300 ${
          isActive
           ? 'text-(--primary-color)'
           : 'text-(--text-muted) hover:text-(--primary-color)'
         }`}
        >
         {label}
         <span
          className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-(--primary-color) transition-transform duration-300 ease-out ${
           isActive 
            ? 'origin-left scale-x-100' 
            : 'origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100'
          }`}
          aria-hidden="true"
         />
        </a>
       );
      })}
     </div>
    </div>
   </div>
  </nav>
 )
}

export default Navbar

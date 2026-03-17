import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { MdMenu } from "react-icons/md";

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#freelance', label: 'Freelance' },
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
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-[var(--primary-color)]'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[var(--primary-color)] rounded-full shadow-[0_0_8px_var(--primary-glow)]" />
                  )}
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

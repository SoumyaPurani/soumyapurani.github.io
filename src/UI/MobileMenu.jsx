import { RxCross2 } from "react-icons/rx";

function MobileMenu({isMenuOpen, setIsMenuOpen}) {
  return (
    <div className={`fixed w-full top-0 left-0 bg-[rgba(10,10,10,0.95)] z-40 flex flex-col items-center justify-center h-screen transition-all duration-300 gap-15 ease-in-out ${isMenuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>
        <button onClick={() => setIsMenuOpen(false)} 
        className="absolute top-5 right-7 text-2xl focus:outline-none cursor-pointer text-white hover:text-[var(--primary-color)] transition-colors" 
        aria-label="Close Menu">
            <RxCross2 />
        </button>
        <a onClick={() => setIsMenuOpen(false)} href="#home" className={`text-2xl font-mono font-semibold text-white my-4 transform transition-transform duration-300 hover:text-[var(--primary-color)] hover:shadow-[0_0_5px_rgba(0,243,255,0.5)] ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          {">"} Home
        </a>
        <a onClick={() => setIsMenuOpen(false)} href="#about" className={`text-2xl font-mono font-semibold text-white my-4 transform transition-transform duration-300 hover:text-[var(--primary-color)] hover:shadow-[0_0_5px_rgba(0,243,255,0.5)] ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          {">"} About
        </a>
        <a onClick={() => setIsMenuOpen(false)} href="#projects" className={`text-2xl font-mono font-semibold text-white my-4 transform transition-transform duration-300 hover:text-[var(--primary-color)] hover:shadow-[0_0_5px_rgba(0,243,255,0.5)] ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          {">"} Projects
        </a>
        <a onClick={() => setIsMenuOpen(false)} href="#contact" className={`text-2xl font-mono font-semibold text-white my-4 transform transition-transform duration-300 hover:text-[var(--primary-color)] hover:shadow-[0_0_5px_rgba(0,243,255,0.5)] ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          {">"} Contact
        </a>
    </div>
  )
}

export default MobileMenu

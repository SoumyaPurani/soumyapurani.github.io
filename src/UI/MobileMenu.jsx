import { RxCross2 } from "react-icons/rx";

const menuItems = [
 { href: '#home', label: 'Home' },
 { href: '#about', label: 'About' },
 { href: '#experience', label: 'Career' },
 { href: '#projects', label: 'Work' },
 { href: '#contact', label: 'Contact' },
];

function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
 return (
  <div className={`fixed inset-0 bg-(--bg-color)/95 backdrop-blur-xl z-60 flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
   <button
    onClick={() => setIsMenuOpen(false)}
    className="absolute top-5 right-6 text-2xl cursor-pointer text-white/50 hover:text-white transition-colors duration-300"
    aria-label="Close Menu"
   >
    <RxCross2 />
   </button>

   <nav className="flex flex-col items-center gap-6">
    {menuItems.map(({ href, label }, i) => (
     <a
      key={href}
      onClick={() => setIsMenuOpen(false)}
      href={href}
      className="group flex items-center gap-3 transition-all duration-500 ease-out"
      style={{
       transitionDelay: isMenuOpen ? `${i * 50}ms` : '0ms',
       opacity: isMenuOpen ? 1 : 0,
       transform: isMenuOpen ? 'translateY(0)' : 'translateY(16px)',
      }}
     >
      <span className="text-2xl font-display font-semibold text-white/80 group-hover:text-(--primary-color) transition-colors">
       {label}
      </span>
     </a>
    ))}
   </nav>
  </div>
 )
}

export default MobileMenu

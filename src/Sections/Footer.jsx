import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

function Footer() {
 return (
  <footer className="py-16 relative">
   <div className="section-divider mb-12" />
   <div className="container mx-auto px-6 lg:px-12">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
     <div className="flex flex-col items-center md:items-start gap-3">
      <a href="#home" className="font-display text-lg font-bold tracking-tight text-(--text-color) hover:text-(--primary-color) transition-colors">
       Soumya<span className="text-gradient ml-1">Purani</span>
      </a>
      <a
       href="mailto:soumyapurani@gmail.com"
       className="font-mono text-xs text-(--text-muted) hover:text-(--primary-color) transition-colors"
      >
       soumyapurani@gmail.com
      </a>
     </div>

     <div className="flex items-center gap-6">
      <a
       href="https://www.linkedin.com/in/soumyapurani/"
       className="text-(--text-muted) hover:text-(--primary-color) transition-all duration-300 text-lg"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="LinkedIn"
      >
       <FaLinkedin />
      </a>
      <a
       href="https://github.com/SoumyaPurani"
       className="text-(--text-muted) hover:text-(--primary-color) transition-all duration-300 text-lg"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="GitHub"
      >
       <FaGithub />
      </a>
      <a
       href="#home"
       className="text-(--text-muted) hover:text-(--primary-color) transition-all duration-300 text-lg border border-(--border-subtle) p-2 hover:border-(--primary-color)/30"
       aria-label="Back to top"
      >
       <FiArrowUp className="text-sm" />
      </a>
     </div>
    </div>

    <div className="section-divider mt-10 mb-6" />
    <p className="text-center text-xs text-(--text-muted) font-mono tracking-wider">
     &copy; {new Date().getFullYear()} Soumya Purani
    </p>
   </div>
  </footer>
 )
}

export default Footer

import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-12 relative">
        <div className="section-divider mb-10" />
        <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center gap-6 mb-6">
                <a
                    href="https://www.linkedin.com/in/soumyapurani/"
                    className="text-white/20 hover:text-[var(--primary-color)] transition-all duration-300 text-xl hover:-translate-y-0.5"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/SoumyaPurani"
                    className="text-white/20 hover:text-[var(--primary-color)] transition-all duration-300 text-xl hover:-translate-y-0.5"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
            </div>
            <p className="text-xs text-white/15 font-mono tracking-wider">
                &copy; 2025 Soumya Purani
            </p>
        </div>
    </footer>
  )
}

export default Footer

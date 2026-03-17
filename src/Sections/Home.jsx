import React from 'react'
import profileImg from '../assets/profileImg.jpg'
import { FaFileDownload } from "react-icons/fa";
import TypingEffect from '../UI/TypingEffect';
import ParticleField from '../3D/ParticleField';

function Home({ startTyping }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <ParticleField particleCount={150} />

        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--primary-color)]/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--secondary-color)]/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
                <p className="font-mono text-sm text-[var(--text-muted)] mb-4 tracking-widest uppercase">Welcome to my portfolio</p>

                <h1 className="font-display text-4xl md:text-6xl font-bold mb-3 leading-[1.1] tracking-tight">
                    Hi There! <span className="inline-block origin-[70%_70%] animate-wave">👋🏻</span>
                </h1>

                <h1 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
                    I'M <span className="text-gradient">SOUMYA PURANI</span>
                </h1>

                <div className="text-xl md:text-2xl text-[var(--primary-color)]/80 font-mono mb-8 h-8">
                    <TypingEffect text="A Software Engineer..." speed={100} start={startTyping} />
                </div>

                <p className="text-white/50 text-base mb-10 max-w-lg leading-relaxed">
                    I build secure, interactive, and scalable software. I love solving complex problems and optimizing performance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        className="group px-7 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-black font-bold text-sm rounded-lg hover:shadow-[0_0_30px_var(--primary-glow)] transition-all duration-500 hover:-translate-y-0.5"
                        href="#contact"
                    >
                        Contact Me
                    </a>
                    <a
                        className="group px-7 py-3 border border-white/10 text-white/70 font-medium text-sm rounded-lg hover:border-[var(--primary-color)]/40 hover:text-[var(--primary-color)] hover:bg-[var(--primary-color)]/[0.04] transition-all duration-500 hover:-translate-y-0.5 flex items-center gap-2"
                        href="/resume.pdf"
                        download="Soumya_Purani_Resume.pdf"
                    >
                        Get Resume
                        <FaFileDownload className="text-xs" />
                    </a>
                </div>
            </div>

            <div className="flex justify-center lg:justify-end">
                <div className="relative group">
                    {/* Glow ring */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                    <img
                        className="relative w-[260px] md:w-[320px] lg:w-[370px] rounded-full border-2 border-white/10 group-hover:border-[var(--primary-color)]/30 transition-all duration-700 object-cover object-bottom"
                        src={profileImg}
                        alt="Soumya Purani"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home

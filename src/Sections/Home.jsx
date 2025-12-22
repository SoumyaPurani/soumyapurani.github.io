import React from 'react'
import profileImg from '../assets/profileImg.jpg'
import { FaFileDownload } from "react-icons/fa";
import TypingEffect from '../UI/TypingEffect';
import ParticleField from '../3D/ParticleField';

function Home({ startTyping }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <ParticleField particleCount={150} />
        <div className="container mx-auto px-6 lg:px-12 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                    Hi There! <span className="animate-wave inline-block origin-[70%_70%]">👋🏻</span>
                </h1>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                    I'M <span className="text-[var(--primary-color)]">SOUMYA PURANI</span>
                </h1>

                <div className="text-2xl md:text-4xl text-[var(--primary-color)] font-bold mb-10 h-10 font-mono">
                    <TypingEffect text="A Software Engineer..." speed={100} start={startTyping} />
                </div>
                
                <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
                    I build secure, interactive, and scalable software. I love solving complex problems and optimizing performance.
                </p>

                <div className="flex flex-col md:flex-row justify-start items-center space-y-4 md:space-y-0 md:space-x-6">
                    <a className="px-8 py-3 bg-[var(--primary-color)] text-black font-bold rounded hover:bg-[var(--secondary-color)] hover:text-white hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all duration-300 transform hover:-translate-y-1" href="#contact">
                        Contact Me
                    </a>
                    <a className="px-8 py-3 border border-[var(--primary-color)] text-[var(--primary-color)] font-bold rounded hover:bg-[rgba(0,243,255,0.1)] hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2" href="/resume.pdf" download="Soumya_Purani_Resume.pdf">
                        <p>Get Resume</p>
                        <FaFileDownload />
                    </a>
                </div>
            </div>

            <div className="flex justify-center lg:justify-end">
                 <div className="relative">
                    <img 
                        className="w-[280px] md:w-[350px] lg:w-[400px] rounded-full border-4 border-[rgba(0,229,255,0.3)] shadow-[0_0_50px_rgba(0,229,255,0.2)] hover:scale-105 transition-transform duration-300 object-cover object-bottom neon-glow" 
                        src={profileImg} 
                        alt="Profile Image" 
                    />
                 </div>
            </div>
        </div>
    </section>
  )
}

export default Home

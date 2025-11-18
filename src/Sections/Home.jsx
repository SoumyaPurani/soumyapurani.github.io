import React from 'react'
import profileImg from '../assets/profileImg.jpg'
import { FaFileDownload } from "react-icons/fa";
import TypingEffect from '../UI/TypingEffect';
import RevealOnScroll from '../UI/RevealOnScroll';

function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center lg:flex-row-reverse gap-10 lg:gap-20 px-6 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[var(--secondary-color)] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-[var(--primary-color)] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        </div>

        <div className="text-center z-10">
            <div className="relative inline-block">
                <img className="w-[220px] lg:w-[280px] rounded-full border-4 border-[rgba(0,243,255,0.3)] shadow-[0_0_30px_rgba(0,243,255,0.2)] hover:scale-105 transition-transform duration-300 object-cover object-bottom" src={profileImg} alt="Profile Image" />
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-[var(--bg-color)]"></div>
            </div>
        </div>

        <div className="text-center lg:text-left z-10 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
                  Soumya Purani
                </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-400 mb-8 font-mono h-8">
                I am a <TypingEffect text="Software Engineer..." speed={100} />
            </div>
            <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                I build secure, interactive, and scalable software. I love solving complex problems and optimizing performance.
            </p>
            <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center space-y-4 md:space-y-0 md:space-x-6">
              <a className="px-8 py-3 bg-[var(--primary-color)] text-black font-bold rounded hover:bg-[var(--secondary-color)] hover:text-white hover:shadow-[0_0_20px_rgba(188,19,254,0.5)] transition-all duration-300 transform hover:-translate-y-1" href="#contact">
                Contact Me
              </a>
              <a className="px-8 py-3 border border-[var(--primary-color)] text-[var(--primary-color)] font-bold rounded hover:bg-[rgba(0,243,255,0.1)] hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2" href="/resume.pdf" download="Soumya_Purani_Resume.pdf">
                <p>Download Resume</p>
                <FaFileDownload />
              </a>
            </div>
        </div>
    </section>
  )
}

export default Home

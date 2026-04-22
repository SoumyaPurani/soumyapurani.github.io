import React from 'react'
import profileImg from '../assets/profileImg.jpg'
import { FaFileDownload } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import TypingEffect from '../UI/TypingEffect';
import HeroBackground3D from '../3D/HeroBackground3D';

function Home({ startTyping }) {
 return (
  <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-28 pb-20 md:pb-0">
   <HeroBackground3D />

   <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,255,71,0.04) 0%, transparent 70%)' }} />
   <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.03) 0%, transparent 70%)' }} />

   <div className="container mx-auto px-6 lg:px-12 z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-center">
    <div className="text-left">
     <p className="font-mono text-xs text-(--text-muted) mb-6 tracking-[0.2em] uppercase hero-line-animate">
      Software Engineer / Support Specialist / Freelancer
     </p>

     <h1
      className="font-display font-bold mb-6 leading-[0.95] tracking-[-0.04em] hero-name-animate"
      style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
     >
      I build software
      <br />
      <span className="text-gradient">that shouldn't</span>
      <br />
      break at 3am.
     </h1>

     <div className="text-lg md:text-xl text-(--primary-color)/80 font-mono mb-8 h-8 hero-line-animate">
      <TypingEffect text="Hi, My name is Soumya..." speed={100} start={startTyping} />
     </div>

     <p className="text-(--text-dim) text-base mb-12 max-w-lg leading-[1.7] hero-line-animate">
      Tier 2 Application Support Engineer by day, freelance developer by night.
      Based in Canada. CS grad from Dalhousie. I ship reliable code.
     </p>

     <div className="flex flex-row gap-6 items-center hero-cta-animate">
      <a
       className="px-8 py-3.5 bg-(--secondary-color) text-(--bg-color) font-bold text-sm tracking-wide hover:bg-(--primary-color) transition-all duration-300 text-center"
       href="#contact"
      >
       Contact Me
      </a>
      <a
       className="group flex items-center gap-2 text-sm text-(--text-dim) hover:text-(--primary-color) transition-all duration-300 font-medium"
       href="/resume.pdf"
       download="Soumya_Purani_Resume.pdf"
      >
       Get Resume
       <FiArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
      </a>
     </div>
    </div>

    <div className="flex justify-center lg:justify-end">
     <div className="relative">
      <img
       className="relative w-[240px] md:w-[300px] lg:w-[360px] aspect-3/4 object-cover object-bottom border-2 border-(--border-subtle) hover:border-(--primary-color)/30 transition-all duration-700"
       src={profileImg}
       alt="Soumya Purani"
      />
      <div className="absolute -bottom-3 -right-3 w-[240px] md:w-[300px] lg:w-[360px] aspect-3/4 border border-(--primary-color)/10 -z-10" />
     </div>
    </div>
   </div>
  </section>
 )
}

export default Home

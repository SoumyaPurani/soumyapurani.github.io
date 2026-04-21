import React, { useState } from 'react'
import dalChessClub from '../assets/dalChessClub.png'
import DCA from '../assets/DCA.png'
import BeachBluenoser from '../assets/BeachBluenoser.png'
import cacheImg from '../assets/cacheimg.jpg'
import QuickCash from '../assets/QuickCash.jpg'
import RevealOnScroll from '../UI/RevealOnScroll'
import { BsGithub } from "react-icons/bs";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import InProgress from '../assets/InProgress.jpg'
import StretchandSmile from '../assets/StretchandSmile.png'

const allProjects = [
 {
  Image: dalChessClub,
  title: "Dalhousie Chess Club",
  description: "A website for the Dalhousie Chess Club, built with React and Node JS. It features a responsive design and a user-friendly interface.",
  technologies: ["React", "NodeJS", "REST APIs", "MySQL", "Git"],
  ghLink: "https://github.com/SoumyaPurani/DalChessClub",
  category: "personal",
 },
 {
  Image: DCA,
  title: "Dalhousie Consulting Association",
  description: "A website for the Dalhousie Consulting Association, built with React and NodeJS. Giving full control of website content to the client using Strapi.",
  technologies: ["React", "NodeJS", "Strapi", "REST APIs", "Docker", "PostgreSQL", "Git"],
  ghLink: "https://github.com/SoumyaPurani/DalConsultingAssociation",
  category: "personal",
 },
 {
  Image: BeachBluenoser,
  title: "Beach Bluenoser",
  description: "An android application for tourists visiting Nova Scotia. It provides information about the best beaches in the province, including directions, weather, and nearby attractions.",
  technologies: ["Java", "Android Studio", "GCP", "Firebase", "Git"],
  ghLink: "https://github.com/SoumyaPurani/BeachBluenoser",
  category: "personal",
 },
 {
  Image: QuickCash,
  title: "Quick Cash",
  description: "An android application to help people find small and spontaneous jobs while also allowing employers to post occasional jobs.",
  technologies: ["Java", "Android Studio", "Git", "Firebase", "Jira", "GCP"],
  ghLink: "https://github.com/SoumyaPurani/QuickCash",
  category: "personal",
 },
 {
  Image: cacheImg,
  title: "Cache Simulator",
  description: "A cache simulator built in C language to understand the working of cache memory.",
  technologies: ["C", "Git"],
  ghLink: "https://github.com/SoumyaPurani/CacheSimulator",
  category: "personal",
 },
 {
  Image: InProgress,
  title: "Ecommerce Website",
  description: "An Ecommerce website built with React and SpringBoot. It features a responsive design, user-friendly interface, and production grade complex features.",
  technologies: ["React", "SpringBoot", "REST APIs", "H2", "Git", "JWT", "AWS"],
  ghLink: "https://github.com/SoumyaPurani/SpringBootEcomm",
  category: "personal",
 },
 {
  Image: StretchandSmile,
  title: "Stretch and Smile",
  description: "Stretch and Smile is a website for a physiotherapy clinic. Created using React, TailwindCSS and NodeJS. Currently hosted on Cloudflare Pages.",
  technologies: ["React", "NodeJS", "TailwindCSS", "Git", "Cloudflare Pages"],
  liveLink: "https://stretchandsmile.ca/",
  category: "client",
 },
];

const filters = [
 { key: "all", label: "All" },
 { key: "personal", label: "Personal" },
 { key: "client", label: "Client" },
];

function Projects() {
 const [activeFilter, setActiveFilter] = useState("all");

 const filtered = activeFilter === "all"
  ? allProjects
  : allProjects.filter(p => p.category === activeFilter);

 return (
  <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
   <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,255,71,0.02) 0%, transparent 70%)' }} />

   <div className="container mx-auto px-6 lg:px-12 z-10 relative">
    <RevealOnScroll>
     <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
      <div>
       <p className="font-mono text-xs text-[var(--text-muted)] tracking-[0.2em] uppercase mb-3">Portfolio</p>
       <h2 className="section-heading text-3xl md:text-5xl font-bold tracking-tight">
        Selected <span className="text-gradient">Work</span>
       </h2>
      </div>
      <div className="flex gap-0 border border-[var(--border-subtle)]">
       {filters.map(f => (
        <button
         key={f.key}
         onClick={() => setActiveFilter(f.key)}
         className={`filter-tab ${activeFilter === f.key ? 'active' : ''}`}
        >
         {f.label}
        </button>
       ))}
      </div>
     </div>
    </RevealOnScroll>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
     {filtered.map((project, index) => (
      <RevealOnScroll key={project.title} delay={index * 60}>
       <div className="group bg-[var(--bg-surface)] accent-top h-full flex flex-col transition-all duration-500 hover:-translate-y-0.5">
        <div className="relative overflow-hidden">
         <div className="aspect-[3/2]">
          <img
           src={project.Image}
           alt={project.title}
           className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:opacity-80"
          />
         </div>
         {project.liveLink && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[var(--bg-color)]/90 px-2.5 py-1 border border-[var(--border-subtle)]">
           <span className="w-1.5 h-1.5 rounded-full bg-[#28c840] live-dot" />
           <span className="font-mono text-[10px] text-[#28c840] font-medium tracking-wider">LIVE</span>
          </div>
         )}
        </div>

        <div className="p-5 flex flex-col flex-grow">
         <h3 className="text-base font-bold mb-2 tracking-tight text-[var(--text-color)]/90 group-hover:text-[var(--primary-color)] transition-colors">
          {project.title}
         </h3>
         <p className="text-[var(--text-dim)] mb-5 text-sm leading-[1.7] flex-grow min-h-[3rem]">
          {project.description}
         </p>

         <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech, key) => (
           <span key={key} className="pill text-[10px]">{tech}</span>
          ))}
         </div>

         <div className="mt-auto pt-3 border-t border-[var(--border-subtle)]">
          {project.ghLink && (
           <a href={project.ghLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--primary-color)] transition-all duration-300 group/link">
            <BsGithub className="text-sm" />
            <span className="text-xs font-medium font-mono">Source</span>
            <FiArrowUpRight className="text-xs opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
           </a>
          )}
          {project.liveLink && (
           <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--primary-color)] transition-all duration-300 group/link">
            <FiExternalLink className="text-sm" />
            <span className="text-xs font-medium font-mono">Visit</span>
            <FiArrowUpRight className="text-xs opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
           </a>
          )}
         </div>
        </div>
       </div>
      </RevealOnScroll>
     ))}
    </div>
   </div>
  </section>
 )
}

export default Projects

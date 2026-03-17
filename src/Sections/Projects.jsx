import React, { useState } from 'react'
import dalChessClub from '../assets/dalChessClub.png'
import DCA from '../assets/DCA.png'
import BeachBluenoser from '../assets/BeachBluenoser.png'
import cacheImg from '../assets/cacheimg.jpg'
import QuickCash from '../assets/QuickCash.jpg'
import RevealOnScroll from '../UI/RevealOnScroll'
import ProjectCard3D from '../3D/ProjectCard3D'
import { BsGithub } from "react-icons/bs";
import ParticleField from '../3D/ParticleField'
import InProgress from '../assets/InProgress.jpg'

function Projects() {
    const [projects] = useState([
        {Image: dalChessClub, title: "Dalhousie Chess Club", description: "A website for the Dalhousie Chess Club, built with React and Node JS. It features a responsive design and a user-friendly interface.", technologies: ["React", "NodeJS", "REST APIs", "My SQL", "Git"], ghLink: "https://github.com/SoumyaPurani/DalChessClub"},
        {Image: DCA, title: "Dalhousie Consulting Association", description: "A website for the Dalhousie Consulting Association, built with React and NodeJS. Giving full control of website content to the client using Strapi.", technologies: ["React", "NodeJS", "Strapi", "REST APIs", "Docker", "PostgreSQL", "Git"], ghLink: "https://github.com/SoumyaPurani/DalConsultingAssociation"},
        {Image: BeachBluenoser, title: "Beach Bluenoser", description: "An android application for tourists visiting Nova Scotia. It provides information about the best beaches in the province, including directions, weather, and nearby attractions.", technologies: ["Java", "Android Studio", "Google Cloud Platform", "Firebase", "Git"], ghLink: "https://github.com/SoumyaPurani/BeachBluenoser"},
        {Image: QuickCash, title: "Quick Cash", description: "An android application to help people find small and sponteneous job while also allowing employers to post occasional jobs.", technologies: ["Java", "Android Studio", "Git", "Firebase", "Jira", "Google Cloud Platform"], ghLink: "https://github.com/SoumyaPurani/QuickCash"},
        {Image: cacheImg, title: "Cache Simulator", description: "A cache simulator built C language to understand the working of cache.", technologies: ["C", "Git"], ghLink: "https://github.com/SoumyaPurani/CacheSimulator"},
        {Image: InProgress, title: "Ecommerce Website", description: "An Ecommerce website built with React and SpringBoot. It features a responsive design, user-friendly interface, and production grade complex features.", technologies: ["React", "SpringBoot", "REST APIs", "H2", "Git", "Jakarta Persistence API", "JSON Web Token", "AWS"], ghLink: "https://github.com/SoumyaPurani/SpringBootEcomm"}
    ]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
        <ParticleField particleCount={150} />

        <div className="container mx-auto px-6 lg:px-12 z-10 relative">
            <RevealOnScroll>
                <div className="text-center mb-16">
                    <p className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase mb-3">Portfolio</p>
                    <h2 className="section-heading text-3xl md:text-5xl font-bold tracking-tight">
                        My Recent <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-sm text-white/30 mt-4 max-w-md mx-auto">Here are a few projects I've worked on.</p>
                </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                {projects.map((project, index) => (
                    <RevealOnScroll key={index} delay={index * 80}>
                    <ProjectCard3D>
                        <div className="group glass h-full rounded-2xl overflow-hidden border border-white/[0.04] hover:border-[var(--primary-color)]/20 transition-all duration-500 flex flex-col hover:bg-[var(--primary-color)]/[0.01]">

                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <div className="aspect-[16/10]">
                                    <img
                                        src={project.Image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Content */}
                            <div className="p-5 pt-4 flex flex-col flex-grow">
                                <h3 className="text-base font-bold mb-2 tracking-tight text-white/90 group-hover:text-white transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-white/35 mb-5 text-sm leading-relaxed flex-grow min-h-[3rem]">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.technologies.map((tech, key) => (
                                        <span key={key} className="bg-white/[0.03] text-white/30 py-1 px-2 rounded-md text-[11px] border border-white/[0.04] hover:text-[var(--primary-color)]/60 hover:border-[var(--primary-color)]/20 transition-all duration-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-3 border-t border-white/[0.03]">
                                    <a href={project.ghLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-[var(--primary-color)] transition-all duration-300 group/link">
                                        <BsGithub className="text-sm" />
                                        <span className="text-xs font-medium">View Source</span>
                                        <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </ProjectCard3D>
                    </RevealOnScroll>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects

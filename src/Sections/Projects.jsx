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

function Projects() {
    const [projects] = useState([
        {Image: dalChessClub, title: "Dalhousie Chess Club", description: "A website for the Dalhousie Chess Club, built with React and Node JS. It features a responsive design and a user-friendly interface.", technologies: ["React", "NodeJS", "REST APIs", "My SQL", "Git"], ghLink: "https://github.com/SoumyaPurani/DalChessClub"},
        {Image: DCA, title: "Dalhousie Consulting Association", description: "A website for the Dalhousie Consulting Association, built with React and NodeJS. Giving full control of website content to the client using Strapi.", technologies: ["React", "NodeJS", "Strapi", "REST APIs", "Docker", "PostgreSQL", "Git"], ghLink: "https://github.com/SoumyaPurani/DalConsultingAssociation"},
        {Image: BeachBluenoser, title: "Beach Bluenoser", description: "An android application for tourists visiting Nova Scotia. It provides information about the best beaches in the province, including directions, weather, and nearby attractions.", technologies: ["Java", "Android Studio", "Google Cloud Platform", "Firebase", "Git"], ghLink: "https://github.com/SoumyaPurani/BeachBluenoser"},
        {Image: QuickCash, title: "Quick Cash", description: "An android application to help people find small and sponteneous job while also allowing employers to post occasional jobs.", technologies: ["Java", "Android Studio", "Git", "Firebase", "Jira", "Google Cloud Platform"], ghLink: "https://github.com/SoumyaPurani/QuickCash"},
        {Image: cacheImg, title: "Cache Simulator", description: "A cache simulator built C language to understand the working of cache.", technologies: ["C", "Git"], ghLink: "https://github.com/SoumyaPurani/CacheSimulator"}
    ]);
  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
        <ParticleField particleCount={150} />
        <RevealOnScroll>
        <div className="container mx-auto px-6 lg:px-12 z-10 relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                My Recent <span className="text-[var(--primary-color)]">Works</span>
                <p className="text-lg text-gray-400 mt-4 font-normal">Here are a few projects I've worked on.</p>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard3D key={index} index={index}>
                        <div className="glass h-full rounded-xl overflow-hidden border border-[rgba(0,229,255,0.1)] hover:border-[var(--primary-color)] hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all flex flex-col justify-between">
                            
                            <div className="relative overflow-hidden group">
                                <img src={project.Image} alt={project.title} className="w-full h-56 object-cover object-top hover:scale-110 transition-transform duration-500 opacity-90 hover:opacity-100" />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-4 text-center">{project.title}</h3>
                                <p className="text-gray-300 mb-6 text-sm text-center leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                                
                                <div className="flex justify-center gap-4 mt-auto">
                                    <a href={project.ghLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[var(--accent-color)] text-white rounded flex items-center gap-2 hover:bg-[var(--secondary-color)] transition-colors text-sm font-bold">
                                        <BsGithub /> GitHub
                                    </a>
                                </div>
                            </div>

                        </div>
                    </ProjectCard3D>
                ))}
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default Projects
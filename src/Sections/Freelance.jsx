import React, { useState } from 'react'
import RevealOnScroll from '../UI/RevealOnScroll'
import ProjectCard3D from '../3D/ProjectCard3D'
import { FiExternalLink } from "react-icons/fi";
import ParticleField from '../3D/ParticleField'
import InProgress from '../assets/InProgress.jpg'
import StretchandSmile from '../assets/StretchandSmile.png'

function Freelance() {
    const [freelanceProjects] = useState([
        {
            Image: StretchandSmile,
            title: "Stretch and Smile",
            description: "Stretch and Smile is a website for a physiotherapy clinic. It was created using React, TailwindCSS and NodeJS. It is currently hosted on Cloudflare Pages.",
            technologies: ["React", "NodeJS", "TailwindCSS", "Git", "Cloudflare Pages"],
            liveLink: "https://stretchandsmile.ca/"
        },
    ]);

    return (
        <section id="freelance" className="min-h-screen py-20 relative overflow-hidden">
            <ParticleField particleCount={150} />
            <RevealOnScroll>
                <div className="container mx-auto px-6 lg:px-12 z-10 relative">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                        My Freelance <span className="text-[var(--primary-color)]">Work</span>
                        <p className="text-lg text-gray-400 mt-4 font-normal">Here are some projects I've delivered for clients.</p>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {freelanceProjects.map((project, index) => (
                            <ProjectCard3D key={index} index={index}>
                                <div className="glass h-full rounded-xl overflow-hidden border border-[rgba(0,229,255,0.1)] hover:border-[var(--primary-color)] hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all flex flex-col justify-between">
                                    
                                    <div className="relative overflow-hidden group">
                                        <img src={project.Image} alt={project.title} className="w-full h-56 object-cover object-center hover:scale-110 transition-transform duration-500" />
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold mb-4 text-center">{project.title}</h3>
                                        <p className="text-gray-300 mb-6 text-sm text-center leading-relaxed flex-grow">
                                            {project.description}
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-2 mb-6 justify-center">
                                            {project.technologies.map((tech, key) => (
                                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <div className="flex justify-center gap-4 mt-auto">
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[var(--accent-color)] text-white rounded flex items-center gap-2 hover:bg-[var(--secondary-color)] transition-colors text-sm font-bold">
                                                <FiExternalLink /> Visit Site
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

export default Freelance

import React, { useState } from 'react'
import dalChessClub from '../assets/dalChessClub.png'
import DCA from '../assets/DCA.png'
import BeachBluenoser from '../assets/BeachBluenoser.png'
import QuickCash from '../assets/QuickCash.jpg'
import RevealOnScroll from '../UI/RevealOnScroll'

function Projects() {
    const [projects] = useState([
        {Image: dalChessClub, title: "Dalhousie Chess Club", description: "A website for the Dalhousie Chess Club, built with React and Node JS. It features a responsive design and a user-friendly interface.", technologies: ["React", "NodeJS", "REST APIs", "My SQL", "Git"]},
        {Image: DCA, title: "Dalhousie Conuslting Association", description: "A website for the Dalhousie Consulting Association, built with React and NodeJS. Giving full control of website content to the client using Strapi.", technologies: ["React", "NodeJS", "Strapi", "REST APIs", "Docker", "PostgreSQL", "Git"]},
        {Image: BeachBluenoser, title: "Beach Bluenoser", description: "An android application for tourists visiting Nova Scotia. It provides information about the best beaches in the province, including directions, weather, and nearby attractions.", technologies: ["Java", "Android Studio", "Google Cloud Platform", "Firebase", "Git"]},
        {Image: QuickCash, title: "Quick Cash", description: "An android application to help people find small and sponteneous job while also allowing employers to post occasional jobs.", technologies: ["Java", "Android Studio", "Git", "Firebase", "Jira", "Google Cloud Platform"]},
    ]);
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[var(--primary-color)] hover:shadow-[0_4px_20px_rgba(0,243,255,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <div className="mb-4 overflow-hidden rounded-lg">
                            <img src={project.Image} alt={project.title} className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500" />
                        </div>
                        <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="bg-[rgba(59,130,246,0.1)] text-[var(--accent-color)] py-1 px-3 rounded-full text-xs hover:bg-[rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default Projects
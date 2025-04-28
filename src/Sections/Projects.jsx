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
    <section id="projects" className="min-h-screen flex items-center font-mono justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="cursor-pointer p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900">
                        <h3 className="font-semibold text-xl mb-4">{project.title}</h3>
                        <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22,46,0.2)] rounded-xl">
                            <img src={project.Image} alt="Image not available due to confidentiality reasons" className="w-full h-50 object-cover rounded-xl"></img>
                        </div>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap sm:items-center gap-2 mb-4">
                            <strong>Tech Stack:</strong> {project.technologies.map((tech, index) => (
                                <span key={index} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition">{tech}</span>
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
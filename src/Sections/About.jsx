import React from 'react'
import RevealOnScroll from '../UI/RevealOnScroll'

function About() {
    const skills = [
        "HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "ExpressJS", "MongoDB",
        "Python", "Django", "Tailwind CSS", "Bootstrap", "Git", "Java", "C++",
        "Firebase", "SQL", "REST APIs", "GraphQL", "Docker", "Figma",
        "Agile Methodologies", "Problem Solving", "Team Collaboration", "Communication Skills"
    ]
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 relative">
        <div className="max-w-3xl mx-auto px-4 z-10">
            <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent text-center">
                About Me
            </h2>
            <div className="glass p-8 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    I am a software engineer with a passion for building secure, interactive, and scalable software solutions. I have a strong foundation in computer science principles and a keen interest in exploring new technologies. My goal is to create innovative solutions that solve real-world problems and enhance user experiences.
                </p>
            </div>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <RevealOnScroll>
                <div className="glass p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4 text-[var(--primary-color)]">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <span key={index} className="bg-[rgba(0,243,255,0.1)] text-[var(--primary-color)] py-1 px-3 rounded-full text-sm hover:bg-[rgba(0,243,255,0.2)] hover:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition cursor-pointer">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                </RevealOnScroll>
                <RevealOnScroll>
                <div className="glass p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4 text-[var(--primary-color)]">Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>B.S. in Applied Computer Science</strong> - Dalhousie University (2021 - 2025)
                        </li>
                        <li>
                            <strong>Diploma in Computer Engineering</strong> - VPMP Polytechnic (2018 - 2021)
                        </li> 
                    </ul>
                </div>
                </RevealOnScroll>
            </div>
            <RevealOnScroll>
            <div className="glass p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all mt-6">
            <h3 className="text-xl font-bold mb-4 text-[var(--primary-color)]">Work Experience</h3>
            <div className="space-y-6 text-gray-300">
                <div>
                    <h4 className="font-bold text-[var(--text-color)]">Software Engineer - AI Trainer <span className="text-[var(--secondary-color)] text-sm ml-2">(June 2025 - Present)</span></h4>
                    <p className="text-sm text-gray-400 mb-2">Outlier</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Evaluated and critiqued AI-generated code for best practices and efficiency.</li>
                        <li>Improved AI solutions using React, Tailwind, Node.js, and Java.</li>
                        <li>Authored high-quality code samples for training AI models.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-[var(--text-color)]">Data Validation Associate <span className="text-[var(--secondary-color)] text-sm ml-2">(Nov 2021 - Present)</span></h4>
                    <p className="text-sm text-gray-400 mb-2">Symcor Inc</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Ensured data integrity with 95% accuracy in financial data validation.</li>
                        <li>Achieved 100% client satisfaction rate for 3 consecutive years.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-[var(--text-color)]">Software Developer Intern <span className="text-[var(--secondary-color)] text-sm ml-2">(Oct 2020 - June 2021)</span></h4>
                    <p className="text-sm text-gray-400 mb-2">BrainyBeams Technologies</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Engineered a robust e-commerce platform using Django and Python.</li>
                        <li>Optimized user experience with intuitive interfaces and navigation.</li>
                    </ul>
                </div>
            </div>
            </div>
            </RevealOnScroll>
        </div>
    </section>
  )
}

export default About

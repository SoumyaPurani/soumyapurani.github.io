import React from 'react';
import RevealOnScroll from '../UI/RevealOnScroll';
import ParticleField from '../3D/ParticleField';

function Experience() {
    const experiences = [
        {
            role: "Software Engineer",
            company: "Outlier",
            period: "June 2025 - Present",
            description: [
                "Independently evaluated and critiqued AI-generated code, ensuring adherence to industry best practices and security standards.",
                "Enhanced AI solutions by optimizing code for robustness and maintainability using ReactJS, NodeJS, and Java.",
                "Authored and tested high-quality code samples, directly influencing AI model performance for enterprise applications.",
                "Improved application reliability by identifying issues across front‑end, back‑end, and database layers."
            ],
            technologies: [ "ReactJS", "NodeJS", "JavaScript", "TailWind CSS"]
        },
        {
            role: "Freelance Developer",
            company: "Self-Employed",
            period: "June 2025 - Present",
            description: [
                "Building custom web and mobile solutions for clients.",
                "Managing full project lifecycle from requirement gathering to deployment.",
                "Optimizing application performance and user experience."
            ],
            technologies: ["React", "Node.js", "JavaScript", "TailWind CSS", "HTML", "CSS", "Git", "Full Stack Development"]
        },
        {
            role: "Software Engineer Intern",
            company: "BrainyBeam Technologies",
            period: "October 2020 - June 2021",
            description: [
                "Developed and supported a Django‑based e‑commerce platform, resolving bugs and improving user experience.",
                "Implemented secure authentication flows and optimized database interactions.",
                "Collaborated with cross‑functional teams to troubleshoot issues and enhance system performance."
            ],
            technologies: ["Django", "Python", "SQLite", "Jira", "Git", "Full Stack Development"]
        }
    ];

    return (
        <section id="experience" className="min-h-screen py-20 relative overflow-hidden">
            <ParticleField particleCount={100} />
            
            <RevealOnScroll>
                <div className="container mx-auto px-6 lg:px-12 z-10 relative">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                        Professional <span className="text-[var(--primary-color)]">Experience</span>
                    </h2>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="glass p-8 rounded-xl border border-[rgba(255,255,255,0.05)] hover:border-[var(--primary-color)] transition-colors group">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-[var(--primary-color)] transition-colors">
                                            {exp.role}
                                        </h3>
                                        <p className="text-lg text-gray-400">{exp.company}</p>
                                    </div>
                                    <span className="text-sm text-gray-400 bg-blue-500/10 px-3 py-1 rounded-full mt-2 md:mt-0">
                                        {exp.period}
                                    </span>
                                </div>
                                
                                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, key) => (
                                        <span key={key} className="text-xs bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full hover:bg-blue-500/20 transition-all">
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
    );
}

export default Experience;

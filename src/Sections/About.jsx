import React from 'react'

function About() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Python",
        "Django",
        "Tailwind CSS",
        "Bootstrap",
        "Git",
        "Java",
        "C++",
        "Firebase",
        "SQL",
        "REST APIs",
        "GraphQL",
        "Docker",
    ]
  return (
    <section id="#about" className="min-h-screen font-mono flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4 ">
            <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">About Me</h2>
            <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-5 text-xl">
                    I am a software engineer with a passion for building secure, interactive, and scalable software solutions. I have a strong foundation in computer science principles and a keen interest in exploring new technologies. My goal is to create innovative solutions that solve real-world problems and enhance user experiences.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-2xl text-center font-bold mb-8">💼Skills</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {skills.map((skill, index) => (
                            <span key={index} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition cursor-pointer">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
)}

export default About

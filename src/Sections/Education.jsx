import React from 'react';
import RevealOnScroll from '../UI/RevealOnScroll';
import ParticleField from '../3D/ParticleField';
import { FaGraduationCap } from "react-icons/fa";

function Education() {
    const education = [
        {
            school: "Dalhousie University",
            degree: "Master of Applied Computer Science",
            period: "2021 - 2025",
            description: "Coursework: Software Development, Database Management, Web Design, Web Development, Version Control, Mobile Computing, Systems Programming",
        },
        {
            school: "Gujarat Technological University",
            degree: "Bachelor of Engineering in Computer Engineering",
            period: "2018 - 2021",
            description: "Coursework:Data Structure, Java, Operating System, Software Engineering, Computer Networks, Python, C++, Algorithms",
        }
    ];

    return (
        <section id="education" className="min-h-screen py-20 relative overflow-hidden">
             <ParticleField particleCount={80} /> 
            
            <RevealOnScroll>
                <div className="container mx-auto px-6 lg:px-12 z-10 relative">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                        <span className="text-[var(--primary-color)]">Education</span>
                    </h2>

                    <div className="max-w-3xl mx-auto relative">
                        <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-[rgba(0,229,255,0.2)]"></div>

                        <div className="space-y-12">
                            {education.map((edu, index) => (
                                <div key={index} className={`relative flex  items-center justify-between md:justify-normal w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="absolute left-[14px] md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--primary-color)] rounded-full shadow-[0_0_10px_var(--primary-color)] z-10"></div>
                                    <div className="w-full md:w-5/12 ml-10 md:ml-0 glass p-6 rounded-xl border border-[rgba(255,255,255,0.05)] hover:border-[var(--primary-color)] transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.1)]">
                                        <h3 className="text-xl font-bold text-white mb-1">{edu.school}</h3> 
                                        <p className="text-[var(--primary-color)] font-medium text-sm mb-2">{edu.degree}</p>
                                        <p className="text-gray-400 text-xs italic mb-4">{edu.period}</p>
                                        <p className="text-gray-300 text-sm">{edu.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}

export default Education;

import React from 'react';
import RevealOnScroll from '../UI/RevealOnScroll';
import ParticleField from '../3D/ParticleField';

function Education() {
    const education = [
        {
            school: "Dalhousie University",
            degree: "Bachelor of Applied Computer Science",
            period: "2021 - 2025",
            description: "Coursework: Software Development, Database Management, Web Design, Web Development, Version Control, Mobile Computing, Systems Programming",
        },
        {
            school: "Gujarat Technological University",
            degree: "Diploma in Computer Engineering",
            period: "2018 - 2021",
            description: "Coursework: Data Structure, Java, Operating System, Software Engineering, Computer Networks, Python, C++, Algorithms",
        }
    ];

    return (
        <section id="education" className="py-24 relative overflow-hidden">
            <ParticleField particleCount={80} />

            <div className="container mx-auto px-6 lg:px-12 z-10 relative">
                <RevealOnScroll>
                    <div className="text-center mb-16">
                        <p className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase mb-3">Background</p>
                        <h2 className="section-heading text-3xl md:text-5xl font-bold tracking-tight">
                            <span className="text-gradient">Education</span>
                        </h2>
                    </div>
                </RevealOnScroll>

                <div className="max-w-3xl mx-auto relative">
                    {/* Timeline line */}
                    <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-[var(--primary-color)]/20 via-[var(--primary-color)]/10 to-transparent" />

                    <div className="space-y-10">
                        {education.map((edu, index) => (
                            <RevealOnScroll key={index} delay={index * 120}>
                                <div className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Timeline dot */}
                                    <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 top-7 w-3 h-3 rounded-full border-2 border-[var(--primary-color)]/40 bg-[var(--bg-color)] z-10 shadow-[0_0_8px_rgba(0,229,255,0.15)]" />

                                    <div className="flex-1 min-w-0 md:flex-none md:w-5/12 ml-10 md:ml-0 glass p-6 rounded-2xl border border-white/[0.04] hover:border-[var(--primary-color)]/20 transition-all duration-500 group hover:bg-[var(--primary-color)]/[0.01]">
                                        <h3 className="text-lg font-bold text-white/90 group-hover:text-white transition-colors mb-1">
                                            {edu.school}
                                        </h3>
                                        <p className="text-[var(--primary-color)]/60 font-medium text-sm mb-1">
                                            {edu.degree}
                                        </p>
                                        <p className="font-mono text-xs text-[var(--text-muted)] mb-4">
                                            {edu.period}
                                        </p>
                                        <p className="text-white/40 text-sm leading-relaxed">
                                            {edu.description}
                                        </p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;

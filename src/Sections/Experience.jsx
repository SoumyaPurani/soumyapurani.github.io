import React from 'react';
import RevealOnScroll from '../UI/RevealOnScroll';
import ParticleField from '../3D/ParticleField';

function Experience() {
    const experiences = [
        {
            role: "Tier 2 Application Support",
            company: "Symcor",
            period: "March 2026 - Present",
            description: [
                "Provide Tier 2 production application support in a large enterprise environment by triaging, diagnosing, and resolving incidents via ITIL/EIM processes, meeting SLAs through effective prioritization and escalation management.",
                "Troubleshoot issues using application/system log analysis and knowledge repositories; collaborate with Level 2, Infrastructure, and Level 3 (Development) teams on complex incidents and required application changes.",
                "Create and maintain deployment/support documentation and knowledge articles; capture standardized resolution steps to improve consistency and speed of incident remediation.",
                "Execute routine application maintenance and support disaster recovery activities (DR readiness, documented failover steps, troubleshooting during failover); contribute to problem management by documenting incidents and supporting root-cause and long-term remediation efforts."
            ],
            technologies: ["ITIL", "EIM", "SQL", "Linux", "Bash", "Databases"]
        },
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
            technologies: ["ReactJS", "NodeJS", "JavaScript", "TailWind CSS"]
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
        <section id="experience" className="py-24 relative overflow-hidden">
            <ParticleField particleCount={100} />

            <div className="container mx-auto px-6 lg:px-12 z-10 relative">
                <RevealOnScroll>
                    <div className="text-center mb-16">
                        <p className="font-mono text-xs text-(--text-muted) tracking-widest uppercase mb-3">Career</p>
                        <h2 className="section-heading text-3xl md:text-5xl font-bold tracking-tight">
                            Professional <span className="text-gradient">Experience</span>
                        </h2>
                    </div>
                </RevealOnScroll>

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline line */}
                    <div className="absolute left-[19px] md:left-8 top-0 bottom-0 w-px bg-linear-to-b from-(--primary-color)/20 via-(--primary-color)/10 to-transparent" />

                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <RevealOnScroll key={index} delay={index * 100}>
                                <div className="relative pl-12 md:pl-20 group">
                                    {/* Timeline dot */}
                                    <div className="absolute left-[15px] md:left-[28px] top-8 w-[9px] h-[9px] rounded-full bg-(--bg-color) border-2 border-(--primary-color)/40 group-hover:border-(--primary-color) group-hover:shadow-[0_0_10px_var(--primary-glow)] transition-all duration-500" />

                                    <div className="glass p-6 md:p-8 rounded-2xl border border-white/4 hover:border-(--primary-color)/20 transition-all duration-500 group-hover:bg-(--primary-color)/1">
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                                            <div>
                                                <h3 className="text-lg md:text-xl font-bold text-white/90 group-hover:text-white transition-colors">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-white/40 text-sm">{exp.company}</p>
                                            </div>
                                            <span className="font-mono text-xs text-(--text-muted) bg-white/3 px-3 py-1.5 rounded-md border border-white/4 whitespace-nowrap">
                                                {exp.period}
                                            </span>
                                        </div>

                                        <ul className="space-y-2.5 mb-5">
                                            {exp.description.map((desc, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-white/40 leading-relaxed">
                                                    <span className="w-1 h-1 rounded-full bg-(--primary-color)/40 mt-2 shrink-0" />
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-1.5">
                                            {exp.technologies.map((tech, key) => (
                                                <span key={key} className="text-xs text-white/30 bg-white/3 py-1 px-2.5 rounded-md border border-white/4 hover:text-(--primary-color)/60 hover:border-(--primary-color)/20 transition-all duration-300">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
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

export default Experience;

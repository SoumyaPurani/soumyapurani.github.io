import { useState, useEffect, useRef } from 'react';
import RevealOnScroll from '../UI/RevealOnScroll'
import ParticleField from '../3D/ParticleField'
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
    DiHtml5,
    DiCss3
} from "react-icons/di";
import {
    SiFirebase,
    SiNextdotjs,
    SiPostgresql,
    SiTailwindcss,
    SiDocker,
    SiAndroidstudio,
    SiJira,
    SiFigma,
    SiSpring,
    SiPostman,
    SiMariadbfoundation,
    SiGnubash,
    SiSupabase,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
    FaGithub,
    FaBootstrap,
    FaPhp,
    FaConfluence,
    FaAws,
} from "react-icons/fa";

const SkillCard = ({ icon, name, activeTooltip, setActiveTooltip, index }) => {
    const isActive = activeTooltip === index;

    const handleInteraction = (e) => {
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        setActiveTooltip(isActive ? null : index);
    };

    const handleMouseEnter = () => {
        if (window.matchMedia('(hover: hover)').matches) setActiveTooltip(index);
    };

    const handleMouseLeave = () => {
        if (window.matchMedia('(hover: hover)').matches) setActiveTooltip(null);
    };

    return (
        <div
            className={`
                relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[110px] md:h-[110px] glass flex items-center justify-center rounded-xl
                border transition-all duration-400 cursor-pointer group
                ${isActive
                    ? 'z-50 border-[var(--primary-color)]/40 bg-[var(--primary-color)]/[0.04] shadow-[0_0_20px_rgba(0,229,255,0.15)]'
                    : 'z-10 border-white/[0.04] hover:border-[var(--primary-color)]/30 hover:bg-[var(--primary-color)]/[0.02]'
                }
            `}
            onClick={handleInteraction}
            onTouchEnd={handleInteraction}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`
                text-3xl sm:text-4xl transition-all duration-300
                ${isActive
                    ? 'text-[var(--primary-color)] scale-110'
                    : 'text-white/40 group-hover:text-white/70'
                }
            `}>
                {icon}
            </div>

            {isActive && (
                <div className="absolute -top-12 inset-x-0 flex justify-center pointer-events-none animate-fadeIn">
                    <div className="flex flex-col items-center">
                        <div className="px-3 py-1.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--primary-color)]/30 text-xs font-mono font-medium text-[var(--primary-color)] whitespace-nowrap shadow-[0_0_16px_rgba(0,229,255,0.2)]">
                            {name}
                        </div>
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[var(--primary-color)]/30" />
                    </div>
                </div>
            )}
        </div>
    );
};

function About() {
    const [activeTooltip, setActiveTooltip] = useState(null);
    const sectionRef = useRef(null);

    const skills = [
        { icon: <DiJavascript1 />, name: "JavaScript" },
        { icon: <DiReact />, name: "React" },
        { icon: <DiNodejs />, name: "Node.js" },
        { icon: <DiMongodb />, name: "MongoDB" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <DiGit />, name: "Git" },
        { icon: <SiFirebase />, name: "Firebase" },
        { icon: <DiPython />, name: "Python" },
        { icon: <DiJava />, name: "Java" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <DiHtml5 />, name: "HTML5" },
        { icon: <DiCss3 />, name: "CSS3" },
        { icon: <SiSpring />, name: "Spring Boot" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <FaPhp />, name: "PHP" },
        { icon: <SiMariadbfoundation />, name: "MariaDB" },
        { icon: <SiGnubash />, name: "Bash" },
    ];

    const tools = [
        { icon: <VscVscode />, name: "VS Code" },
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiAndroidstudio />, name: "Android Studio" },
        { icon: <SiJira />, name: "Jira" },
        { icon: <FaConfluence />, name: "Confluence" },
        { icon: <SiFigma />, name: "Figma" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <SiSupabase />, name: "Supabase" },
        { icon: <FaAws />, name: "AWS" },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.skill-card-container')) {
                setActiveTooltip(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    return (
        <section id="about" className="py-24 relative overflow-hidden" ref={sectionRef}>
            <ParticleField particleCount={150} />
            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* About Me */}
                <RevealOnScroll>
                    <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
                        <p className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase mb-4">About</p>
                        <h2 className="section-heading text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                            Know Who <span className="text-gradient">I Am</span>
                        </h2>
                        <div className="glass p-8 md:p-10 rounded-2xl w-full">
                            <p className="text-white/50 text-base leading-[1.8]">
                                Hi Everyone, I am <span className="text-white font-medium">Soumya Purani</span> currently based in <span className="text-white font-medium">Canada</span>.
                                <br /><br />
                                I am a Software Engineer at Outlier, a freelance developer and a Computer Science graduate from Dalhousie University.
                                <br /><br />
                                Apart from coding, some other activities that I love to do!
                            </p>
                            <ul className="mt-6 space-y-2.5 text-white/50 inline-block text-left">
                                {['Playing Chess', 'Watching Tech Videos', 'Travelling'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm">
                                        <span className="w-1 h-1 rounded-full bg-[var(--primary-color)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Skills */}
                <RevealOnScroll>
                    <div className="mb-24">
                        <div className="text-center mb-12">
                            <p className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase mb-3">Skills</p>
                            <h2 className="section-heading text-2xl md:text-4xl font-bold tracking-tight">
                                Professional <span className="text-gradient">Skillset</span>
                            </h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 pt-8 pb-4 skill-card-container max-w-4xl mx-auto">
                            {skills.map((skill, index) => (
                                <SkillCard
                                    key={index}
                                    index={`skill-${index}`}
                                    icon={skill.icon}
                                    name={skill.name}
                                    activeTooltip={activeTooltip}
                                    setActiveTooltip={setActiveTooltip}
                                />
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Tools */}
                <RevealOnScroll>
                    <div>
                        <div className="text-center mb-12">
                            <p className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase mb-3">Toolbox</p>
                            <h2 className="section-heading text-2xl md:text-4xl font-bold tracking-tight">
                                <span className="text-gradient">Tools</span> I Use
                            </h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 pt-8 pb-4 skill-card-container max-w-4xl mx-auto">
                            {tools.map((tool, index) => (
                                <SkillCard
                                    key={index}
                                    index={`tool-${index}`}
                                    icon={tool.icon}
                                    name={tool.name}
                                    activeTooltip={activeTooltip}
                                    setActiveTooltip={setActiveTooltip}
                                />
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    )
}

export default About

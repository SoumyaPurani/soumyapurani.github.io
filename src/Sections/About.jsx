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
        if (e.cancelable) {
            e.preventDefault();
        }
        e.stopPropagation();
        
        if (isActive) {
            setActiveTooltip(null);
        } else {
            setActiveTooltip(index);
        }
    };

    const handleMouseEnter = () => {
        if (window.matchMedia('(hover: hover)').matches) {
            setActiveTooltip(index);
        }
    };

    const handleMouseLeave = () => {
        if (window.matchMedia('(hover: hover)').matches) {
            setActiveTooltip(null);
        }
    };

    return (
        <div 
            className={`
                relative w-32 h-32 glass flex items-center justify-center rounded-lg 
                border border-[rgba(0,229,255,0.1)] hover:border-[var(--primary-color)] 
                hover:scale-105 transition-all cursor-pointer group 
                shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(0,229,255,0.3)]
                ${isActive ? 'z-50 border-[var(--primary-color)] scale-105' : 'z-10'}
            `}
            onClick={handleInteraction}
            onTouchEnd={handleInteraction}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Icon */}
            <div className={`
                text-5xl transition-colors duration-300
                ${isActive 
                    ? 'text-[var(--primary-color)] drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]' 
                    : 'text-gray-300 group-hover:text-[var(--primary-color)] group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]'
                }
            `}>
                {icon}
            </div>

            {isActive && (
                <div className="absolute -top-16 inset-x-0 flex justify-center pointer-events-none">
                    <div className="flex flex-col items-center">
                        <div className="px-4 py-2 rounded-lg bg-[rgba(10,10,20,0.98)] border border-[var(--primary-color)] text-sm font-bold tracking-wide text-[var(--primary-color)] whitespace-nowrap shadow-[0_0_20px_rgba(0,229,255,0.4),inset_0_0_20px_rgba(0,229,255,0.1)]">
                            {name}
                        </div>
                        
                        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[var(--primary-color)]"></div>
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
        <section id="about" className="min-h-screen py-20 relative overflow-hidden" ref={sectionRef}>
            <ParticleField particleCount={150} />
            <div className="container mx-auto px-6 lg:px-12">
                
                {/* About Me Section */}
                <RevealOnScroll>
                    <div className="flex flex-col items-center text-center mb-20 max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">
                            Know Who <span className="text-[var(--primary-color)]">I Am</span>
                        </h1>
                        <div className="glass p-8 rounded-xl border border-[rgba(255,255,255,0.05)] w-full">
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                Hi Everyone, I am <span className="text-[var(--primary-color)] font-bold">Soumya Purani</span> currently based in <span className="text-[var(--primary-color)] font-bold">Canada</span>.
                                <br /><br />
                                I am a Software Engineer at Outlier, a freelance developer and a Computer Science graduate from Dalhousie University.
                                <br /><br />
                                Apart from coding, some other activities that I love to do!
                            </p>
                            <ul className="list-none space-y-2 text-gray-300 inline-block text-left">
                                <li className="flex items-center gap-2">
                                    <span className="text-[var(--primary-color)]">➜</span> Playing Chess
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[var(--primary-color)]">➜</span> Watching Tech Videos
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[var(--primary-color)]">➜</span> Travelling
                                </li>
                            </ul>
                        </div>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll>
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Professional <span className="text-[var(--primary-color)]">Skillset</span>
                    </h1>
                    
                    <div className="flex flex-wrap justify-center gap-8 mb-20 pt-16 pb-8 skill-card-container">
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
                </RevealOnScroll>

                <RevealOnScroll>
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        <span className="text-[var(--primary-color)]">Tools</span> I Use
                    </h1>
                    
                    <div className="flex flex-wrap justify-center gap-8 mb-20 pt-16 pb-8 skill-card-container">
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
                </RevealOnScroll>

            </div>
        </section>
    )
}

export default About
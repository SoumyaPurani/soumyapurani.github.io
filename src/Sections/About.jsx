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

function About() {
    return (
        <section id="about" className="min-h-screen py-20 relative overflow-hidden">
            <ParticleField particleCount={150} />
            <div className="container mx-auto px-6 lg:px-12">
                
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
                                    <li className="flex items-center gap-2"><span className="text-[var(--primary-color)]">➜</span> Playing Chess</li>
                                    <li className="flex items-center gap-2"><span className="text-[var(--primary-color)]">➜</span> Watching Tech Videos</li>
                                    <li className="flex items-center gap-2"><span className="text-[var(--primary-color)]">➜</span> Travelling</li>
                            </ul>
                        </div>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll>
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Professional <span className="text-[var(--primary-color)]">Skillset</span>
                    </h1>
                    
                    <div className="flex flex-wrap justify-center gap-8 mb-20">
                         {[
                            { icon: <DiJavascript1 />, name: "JavaScript" },
                            { icon: <DiReact />, name: "React" },
                            { icon: <DiNodejs />, name: "Node.js" },
                            { icon: <DiMongodb />, name: "MongoDB" },
                            { icon: <SiNextdotjs />, name: "Next.js" },
                            { icon: <DiGit />, name: "Git" },
                            { icon: <SiFirebase />, name: "Firebase" },
                            { icon: <DiPython />, name: "Python" },
                            { icon: <DiJava />, name: "Java" },
                            { icon: <SiTailwindcss />, name: "Tailwind" },
                            { icon: <DiHtml5 />, name: "HTML5" },
                            { icon: <DiCss3 />, name: "CSS" },
                            { icon: <SiSpring />, name: "Spring" },
                            { icon: <FaBootstrap />, name: "Bootstrap" },
                            { icon: <FaPhp />, name: "PHP" },
                            { icon: <SiMariadbfoundation />, name: "MariaDB" },
                            { icon: <SiGnubash />, name: "Bash" },
                        ].map((skill, index) => (
                            <div key={index} className="w-32 h-32 glass flex flex-col items-center justify-center rounded-lg border border-[rgba(0,229,255,0.1)] hover:border-[var(--primary-color)] hover:scale-105 transition-all cursor-pointer group shadow-[0_0_10px_rgba(0,0,0,0.2)]">
                                <div className="text-5xl text-gray-300 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                                    {skill.icon}
                                </div>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>

                <RevealOnScroll>
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        <span className="text-[var(--primary-color)]">Tools</span> I Use
                    </h1>
                    <div className="flex flex-wrap justify-center gap-8 mb-20">
                         {[
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
                        ].map((tool, index) => (
                            <div key={index} className="w-32 h-32 glass flex flex-col items-center justify-center rounded-lg border border-[rgba(0,229,255,0.1)] hover:border-[var(--primary-color)] hover:scale-105 transition-all cursor-pointer group shadow-[0_0_10px_rgba(0,0,0,0.2)]">
                                <div className="text-5xl text-gray-300 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                                    {tool.icon}
                                </div>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>

            </div>
        </section>
    )
}

export default About

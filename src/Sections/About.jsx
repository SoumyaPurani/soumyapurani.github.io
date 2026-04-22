import RevealOnScroll from '../UI/RevealOnScroll';
import { DiJavascript1, DiReact, DiNodejs, DiPython, DiJava } from "react-icons/di";
import { SiNextdotjs, SiSpring, SiTailwindcss, SiMongodb, SiGit, SiDocker, SiPostgresql, SiFirebase, SiGithub, SiPostman, SiFigma, SiJira, SiSupabase } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";

function About() {
  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "10+", label: "Projects Delivered" },
    { value: "3", label: "Roles Held" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,255,71,0.04) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <RevealOnScroll>
          <div className="mb-16">
            <p className="font-mono text-xs text-(--text-muted) tracking-[0.2em] uppercase mb-3">About</p>
            <h2 className="section-heading text-3xl md:text-5xl font-bold tracking-tight">
              Know Who <span className="text-gradient">I Am</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-(--text-dim) text-base leading-[1.8]">
                  Hi, I'm <span className="text-(--text-color) font-medium">Soumya Purani</span>, currently based in Canada.
                  I'm a Tier 2 Application Support Engineer at Symcor, a freelance developer,
                  and a Computer Science graduate from Dalhousie University.
                </p>
                <p className="text-(--text-dim) text-base leading-[1.8]">
                  I build secure, interactive, and scalable software. I love solving complex
                  problems, optimizing performance, and shipping things that work reliably
                  under pressure.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-mono text-xs text-(--text-muted) tracking-[0.2em] uppercase mb-5">Core Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: "JavaScript", icon: <DiJavascript1 className="text-lg" /> },
                      { name: "React", icon: <DiReact className="text-lg" /> },
                      { name: "Node.js", icon: <DiNodejs className="text-lg" /> },
                      { name: "Python", icon: <DiPython className="text-lg" /> },
                      { name: "Java", icon: <DiJava className="text-lg" /> },
                      { name: "Next.js", icon: <SiNextdotjs className="text-lg" /> },
                      { name: "Spring Boot", icon: <SiSpring className="text-lg" /> },
                      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-lg" /> },
                      { name: "MongoDB", icon: <SiMongodb className="text-lg" /> },
                      { name: "Git", icon: <SiGit className="text-lg" /> },
                    ].map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center cursor-pointer gap-2 px-4 py-2.5 bg-(--bg-surface) border border-(--border-subtle) rounded-lg hover:border-(--primary-color)/30 hover:bg-(--primary-color)/2 transition-all duration-300"
                      >
                        <span className="text-(--text-color)/50 group-hover:text-(--primary-color) transition-colors">
                          {skill.icon}
                        </span>
                        <span className="text-sm text-(--text-color)/80 font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-xs text-(--text-muted) tracking-[0.2em] uppercase mb-5">Tools</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: "VS Code", icon: <VscVscode className="text-lg" /> },
                      { name: "Docker", icon: <SiDocker className="text-lg" /> },
                      { name: "PostgreSQL", icon: <SiPostgresql className="text-lg" /> },
                      { name: "Firebase", icon: <SiFirebase className="text-lg" /> },
                      { name: "AWS", icon: <FaAws className="text-lg" /> },
                      { name: "GitHub", icon: <SiGithub className="text-lg" /> },
                      { name: "Postman", icon: <SiPostman className="text-lg" /> },
                      { name: "Figma", icon: <SiFigma className="text-lg" /> },
                      { name: "Jira", icon: <SiJira className="text-lg" /> },
                      { name: "Supabase", icon: <SiSupabase className="text-lg" /> },
                    ].map((tool) => (
                      <div
                        key={tool.name}
                        className="flex cursor-pointer items-center gap-2 px-4 py-2.5 bg-(--bg-surface) border border-(--border-subtle) rounded-lg hover:border-(--primary-color)/30 hover:bg-(--primary-color)/2 transition-all duration-300"
                      >
                        <span className="text-(--text-color)/50 group-hover:text-(--primary-color) transition-colors">
                          {tool.icon}
                        </span>
                        <span className="text-sm text-(--text-color)/80 font-medium">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-xs text-(--text-muted) tracking-[0.2em] uppercase mb-5">Hobbies</h3>
                  <div className="flex flex-wrap gap-2 cursor-pointer">
                    {['Chess', 'Tech Videos', 'Travelling', 'Homelab'].map((hobby) => (
                      <span key={hobby} className="px-3 py-1.5 text-sm text-(--text-dim) bg-(--bg-surface) border border-(--border-subtle) rounded-md hover:border-(--primary-color)/20 hover:text-(--primary-color)/70 transition-all duration-300">
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="space-y-6">
              <div className="accent-top bg-(--bg-surface) rounded-lg border border-(--border-subtle) p-8 space-y-7">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-mono text-xs text-(--primary-color) tracking-[0.2em] uppercase mb-2">Current Role</h3>
                    <p className="text-(--text-color) font-medium text-lg mb-1">Tier 2 Application Support Engineer</p>
                    <p className="text-(--text-dim) text-sm">Symcor &middot; 2026&ndash;Present</p>
                  </div>
                  <span className="live-dot w-2 h-2 rounded-full bg-(--primary-color) mt-2 shrink-0" />
                </div>

                <div className="section-divider" />

                <div>
                  <h3 className="font-mono text-xs text-(--primary-color) tracking-[0.2em] uppercase mb-2">Freelance</h3>
                  <p className="text-(--text-color) font-medium text-lg mb-1">Full-Stack Developer</p>
                  <p className="text-(--text-dim) text-sm">Building custom solutions for clients</p>
                </div>

                <div className="section-divider" />

                <div>
                  <h3 className="font-mono text-xs text-(--primary-color) tracking-[0.2em] uppercase mb-2">Location</h3>
                  <p className="text-(--text-color) font-medium text-lg mb-1">Canada</p>
                  <p className="text-(--text-dim) text-sm">Open to remote opportunities worldwide</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="bg-(--bg-surface) border border-(--border-subtle) rounded-lg p-5 text-center hover:border-(--primary-color)/20 transition-all duration-300"
                    style={{ animationDelay: `${(i + 1) * 100}ms` }}
                  >
                    <p className="font-display text-2xl md:text-3xl font-bold text-(--primary-color) leading-none mb-1.5">{stat.value}</p>
                    <p className="font-mono text-[10px] text-(--text-muted) tracking-[0.15em] uppercase leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="relative bg-(--bg-surface) border border-(--border-subtle) rounded-lg p-6 overflow-hidden">
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,255,71,0.06) 0%, transparent 70%)' }} />
                <div className="relative z-10 flex items-center gap-5">
                  <div className="shrink-0 w-16 h-16 border-2 border-(--primary-color)/20 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(232,255,71,0.08) 0%, rgba(255,107,53,0.04) 100%)' }}>
                    <span className="font-display text-2xl font-bold text-(--primary-color)">SP</span>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-(--text-muted) tracking-[0.15em] uppercase mb-1">Status</p>
                    <p className="text-sm text-(--text-color)/90 font-medium">Available for freelance & collaboration</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

export default About
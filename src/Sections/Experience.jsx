import React from 'react';
import RevealOnScroll from '../UI/RevealOnScroll';

function Experience() {
 const career = [
  {
   type: 'work',
   role: "Tier 2 Application Support",
   org: "Symcor",
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
   type: 'work',
   role: "Software Engineer",
   org: "Outlier",
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
   type: 'work',
   role: "Freelance Developer",
   org: "Self-Employed",
   period: "June 2025 - Present",
   description: [
    "Building custom web and mobile solutions for clients.",
    "Managing full project lifecycle from requirement gathering to deployment.",
    "Optimizing application performance and user experience."
   ],
   technologies: ["React", "Node.js", "JavaScript", "Tailwind CSS", "Git"]
  },
  {
   type: 'work',
   role: "Software Engineer Intern",
   org: "BrainyBeam Technologies",
   period: "October 2020 - June 2021",
   description: [
    "Developed and supported a Django‑based e‑commerce platform, resolving bugs and improving user experience.",
    "Implemented secure authentication flows and optimized database interactions.",
    "Collaborated with cross‑functional teams to troubleshoot issues and enhance system performance."
   ],
   technologies: ["Django", "Python", "SQLite", "Jira", "Git"]
  },

 ];

 return (
  <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
   <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.02) 0%, transparent 70%)' }} />

   <div className="container mx-auto px-6 lg:px-12 z-10 relative">
    <RevealOnScroll>
     <div className="mb-16">
      <p className="font-mono text-xs text-(--text-muted) tracking-[0.2em] uppercase mb-3">Career</p>
      <h2 className="section-heading text-3xl md:text-5xl font-bold tracking-tight">
       Professional <span className="text-gradient">Experience</span>
      </h2>
     </div>
    </RevealOnScroll>

    <div className="max-w-3xl mx-auto relative">
     <div className="absolute left-[11px] md:left-[11px] top-0 bottom-0 w-px bg-(--text-muted)/20" />

     <div className="space-y-6">
      {career.map((entry, index) => (
       <RevealOnScroll key={index} delay={index * 60}>
        <div className="relative pl-10 group">
         <div className="absolute left-0 top-7 w-[23px] h-[23px] rounded-full bg-(--bg-color) border-2 flex items-center justify-center" style={{ borderColor: entry.type === 'edu' ? 'var(--accent-color)' : 'var(--primary-color)' }}>
          {entry.type === 'edu' && (
           <span className="text-[6px] font-mono font-bold" style={{ color: 'var(--accent-color)' }}>EDU</span>
          )}
         </div>

         <div className="accent-border py-6 group-hover:bg-(--bg-surface) transition-all duration-500 rounded-r-lg pr-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 gap-2">
           <div>
            <h3 className="text-base md:text-lg font-bold text-(--text-color)/90 group-hover:text-(--text-color) transition-colors">
             {entry.role}
            </h3>
            <p className="text-(--text-muted) text-sm">{entry.org}</p>
           </div>
           <span className="font-mono text-xs text-(--text-muted) bg-(--bg-surface) px-3 py-1 border border-(--border-subtle) whitespace-nowrap">
            {entry.period}
           </span>
          </div>

          {Array.isArray(entry.description) ? (
           <ul className="space-y-2 mb-4">
            {entry.description.map((desc, i) => (
             <li key={i} className="flex gap-3 text-sm text-(--text-dim) leading-[1.7]">
              <span className="w-1 h-1 rounded-full bg-(--primary-color)/40 mt-2.5 shrink-0" />
              {desc}
             </li>
            ))}
           </ul>
          ) : (
           <p className="text-sm text-(--text-dim) leading-[1.7] mb-4">{entry.description}</p>
          )}

          {entry.technologies.length > 0 && (
           <div className="flex flex-wrap gap-1.5">
            {entry.technologies.map((tech, key) => (
             <span key={key} className="pill text-[11px]">{tech}</span>
            ))}
           </div>
          )}
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

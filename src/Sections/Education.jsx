import React from 'react';
import RevealOnScroll from '../UI/RevealOnScroll';

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Applied Computer Science",
      institution: "Dalhousie University",
      location: "Halifax, Nova Scotia",
      period: "2021 - 2025",
      achievements: [
        "Relevant Coursework: Software Development, Database Management, Web Design & Development, Version Control, Mobile Computing, Systems Programming"
      ],
      highlights: [
        { label: "Degree", value: "Bachelor's" },
        { label: "Duration", value: "4 Years" },
        { label: "Focus", value: "Full-Stack Development" }
      ]
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Gujarat Technological University",
      location: "Gujarat, India",
      period: "2018 - 2021",
      achievements: [
        "Coursework: Data Structures, Java, Operating Systems, Software Engineering, Computer Networks, Python, C++, Algorithms"
      ],
      highlights: [
        { label: "Degree", value: "Diploma" },
        { label: "Duration", value: "3 Years" },
        { label: "Specialization", value: "Software Engineering" }
      ]
    }
  ];

  const relevantCourses = [
    "Software Development & Architecture",
    "Database Management Systems",
    "Web Design & Development",
    "Version Control Systems",
    "Mobile Computing & Applications",
    "Systems Programming & OS",
    "Data Structures & Algorithms",
    "Computer Networks & Security",
    "Object-Oriented Programming",
    "Software Engineering Practices"
  ];

  return (
    <section id="education" className="py-24 md:py-32 relative overflow-hidden">
      {/* Academic gradient backdrop */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
           style={{ background: 'radial-gradient(circle, rgba(232,255,71,0.05) 0%, transparent 60%)' }} />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <RevealOnScroll>
          <div className="mb-16">
            <p className="font-mono text-xs text-(--text-muted) tracking-[0.2em] uppercase mb-3">Academic Journey</p>
            <h2 className="section-heading text-3xl md:text-5xl font-bold tracking-tight">
              Education & <span className="text-gradient">Credentials</span>
            </h2>
            <p className="mt-4 text-(--text-dim) max-w-2xl leading-relaxed">
              My academic foundation in computer science and engineering — combining theoretical depth with practical application.
            </p>
          </div>
        </RevealOnScroll>

        {/* Main Education Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {educationData.map((edu, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="accent-top group hover:bg-(--bg-surface)/50 transition-all duration-500 rounded-lg p-8">
                {/* Institution Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-(--text-color)/90 mb-1">{edu.degree}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-(--primary-color) font-medium">{edu.institution}</span>
                      <span className="text-(--text-muted) text-sm">• {edu.location}</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-(--text-muted) bg-(--bg-surface) px-3 py-1.5 border border-(--border-subtle) whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>

                

                {/* Highlights */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {edu.highlights.map((highlight, i) => (
                    <div key={i} className="text-center p-3 border border-(--border-subtle) rounded-md bg-(--bg-surface)/30">
                      <p className="text-xs font-mono text-(--text-muted) uppercase tracking-wider mb-1">{highlight.label}</p>
                      <p className="text-sm font-medium text-(--text-color)">{highlight.value}</p>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  {edu.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color)/60 mt-2 shrink-0" />
                      <p className="text-sm text-(--text-dim) leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Relevant Coursework Section */}
        <RevealOnScroll delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="font-mono text-xs text-(--text-muted) tracking-[0.2em] uppercase mb-4">Relevant Coursework</h3>
              <p className="text-(--text-dim) text-base leading-relaxed mb-6">
                Core academic subjects that form the foundation of my technical expertise.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {relevantCourses.map((course, index) => (
                <div key={index} className="group">
                  <div className="p-4 border border-(--border-subtle) bg-(--bg-surface)/30 hover:bg-(--bg-surface) hover:border-(--primary-color)/30 transition-all duration-300 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-2 h-2 rounded-full bg-(--primary-color)/50" />
                      <span className="text-xs font-mono text-(--text-muted)">#{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-sm text-(--text-color)/80 font-medium">{course}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Philosophy */}
            <div className="mt-12 pt-8 border-t border-(--border-subtle)">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-(--text-color)/90 mb-3">Academic Philosophy</h4>
                  <p className="text-(--text-dim) leading-relaxed">
                    I believe technical education should balance theoretical rigor with practical application. My academic journey emphasized building systems that are both elegant and robust a philosophy that continues to shape my professional work.
                  </p>
                </div>
                <div className="px-6 py-4 border border-(--primary-color)/20 bg-(--primary-color)/5 rounded-lg">
                  <p className="font-mono text-sm text-(--primary-color) text-center">
                    "Code with purpose,<br />build with understanding"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default Education;
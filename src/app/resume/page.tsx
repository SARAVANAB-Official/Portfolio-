'use client'

import { useRef } from 'react'
import { FiDownload, FiArrowLeft, FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi'

export default function ResumePage() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="min-h-screen bg-[#020617]">
      <div className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <FiArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </a>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <FiDownload className="w-4 h-4" />
            Download PDF
          </button>
        </div>
      </div>

      <div ref={ref} className="max-w-4xl mx-auto px-4 py-12 print:py-0">
        <div className="bg-white text-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl print:rounded-none print:shadow-none">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8 pb-8 border-b-2 border-[#6366F1]/20">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Saravana</h1>
              <p className="text-lg text-[#6366F1] font-medium">MERN Stack Developer</p>
              <p className="text-gray-500 mt-1 max-w-xl">
                Building scalable SaaS platforms, AI-powered applications, and modern digital experiences.
              </p>
            </div>
            <div className="space-y-2 text-sm text-gray-600 shrink-0">
              <div className="flex items-center gap-2"><FiMail className="w-4 h-4 text-[#6366F1]" /> saravanbofficials@gmail.com</div>
              <div className="flex items-center gap-2"><FiMapPin className="w-4 h-4 text-[#6366F1]" /> Tamil Nadu, India</div>
              <div className="flex items-center gap-2"><FiGithub className="w-4 h-4 text-[#6366F1]" /> github.com/SARAVANAB-Official</div>
              <div className="flex items-center gap-2"><FiLinkedin className="w-4 h-4 text-[#6366F1]" /> linkedin.com/in/saravanabofficial</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-[#6366F1] rounded-full" />
                  Professional Summary
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Passionate MERN Stack Developer with 3+ years of experience building scalable web applications,
                  AI-powered SaaS platforms, and modern digital experiences. Proficient in React.js, Next.js,
                  Node.js, MongoDB, and cloud deployment. Focused on clean architecture, performance optimization,
                  and delivering user-centric solutions.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-[#6366F1] rounded-full" />
                  Experience
                </h2>
                <div className="space-y-4">
                  {[
                    { title: 'MERN Stack Developer', org: 'Freelance / Self-Employed', period: '2023 - Present', desc: 'Built and deployed 15+ web applications including AI-powered SaaS platforms, ecommerce solutions, and real-time collaboration tools for clients worldwide.' },
                    { title: 'Full Stack Developer Intern', org: 'Tech Solutions Inc.', period: '2022 - 2023', desc: 'Developed full-stack applications using MERN stack. Contributed to REST API design, database optimization, and responsive frontend implementation.' },
                  ].map((job) => (
                    <div key={job.title} className="border-l-2 border-[#6366F1]/20 pl-4">
                      <h3 className="font-semibold text-gray-900 text-sm">{job.title}</h3>
                      <p className="text-xs text-[#6366F1]">{job.org} | {job.period}</p>
                      <p className="text-xs text-gray-500 mt-1">{job.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-[#6366F1] rounded-full" />
                  Featured Projects
                </h2>
                <div className="space-y-3">
                  {[
                    { name: 'AI Powered Ecommerce SaaS', desc: 'Scalable ecommerce platform with AI recommendations, analytics dashboard, and payment integration.' },
                    { name: 'Campus Placement Portal', desc: 'Full-stack placement management system with role-based access, job tracking, and analytics.' },
                    { name: 'Real-Time Code Collaboration IDE', desc: 'Browser-based collaborative editor with WebRTC, real-time sync, and integrated terminal.' },
                  ].map((proj) => (
                    <div key={proj.name} className="text-sm">
                      <h3 className="font-medium text-gray-900">{proj.name}</h3>
                      <p className="text-xs text-gray-500">{proj.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-[#6366F1] rounded-full" />
                  Skills
                </h2>
                <div className="space-y-3">
                  {[
                    { cat: 'Frontend', items: 'React.js, Next.js, Tailwind CSS, TypeScript, JavaScript, HTML5, CSS3' },
                    { cat: 'Backend', items: 'Node.js, Express.js, MongoDB, REST APIs, JWT Auth, PostgreSQL' },
                    { cat: 'Tools', items: 'Git, GitHub, Docker, Vercel, Render, Firebase, Postman' },
                    { cat: 'AI/ML', items: 'OpenAI API, NLP, AI Integration, Chatbots' },
                  ].map((skill) => (
                    <div key={skill.cat}>
                      <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">{skill.cat}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{skill.items}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-1 h-5 bg-[#6366F1] rounded-full" />
                  Education
                </h2>
                <div className="text-sm">
                  <h3 className="font-medium text-gray-900">B.Tech Information Technology</h3>
                  <p className="text-xs text-gray-500">NPR College of Engineering and Technology</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

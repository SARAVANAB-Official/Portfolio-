'use client'

import { motion } from 'framer-motion'
import { FiCode, FiUsers, FiZap, FiBook, FiTarget } from 'react-icons/fi'
import AnimatedCounter from './AnimatedCounter'

const stats = [
  { icon: FiCode, end: 25, suffix: '+', label: 'Projects Built' },
  { icon: FiUsers, end: 15, suffix: '+', label: 'Happy Clients' },
  { icon: FiZap, end: 50, suffix: '+', label: 'Technologies' },
  { icon: FiBook, end: 3, suffix: '+', label: 'Years Experience' },
]

const highlights = [
  {
    icon: FiTarget,
    title: 'Full-Stack Expertise',
    description: 'End-to-end development from database design to pixel-perfect UI.',
    color: '#6366F1',
  },
  {
    icon: FiZap,
    title: 'AI Integration',
    description: 'Seamlessly integrating AI/ML capabilities into modern web applications.',
    color: '#8B5CF6',
  },
  {
    icon: FiCode,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code.',
    color: '#06B6D4',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6366F1]/20 to-[#8B5CF6]/20 rounded-3xl blur-2xl" />
              <div className="relative aspect-square rounded-2xl overflow-hidden glass-card">
                <div className="w-full h-full bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#6366F1]/30 to-[#8B5CF6]/30 flex items-center justify-center border-2 border-[#6366F1]/30">
                      <span className="text-5xl font-bold gradient-text">S</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Saravana</h3>
                    <p className="text-sm text-gray-400">MERN Stack Developer</p>
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-emerald-400">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Available for opportunities
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              I am Saravana, a passionate <span className="text-[#6366F1] font-semibold">MERN Stack Developer</span> focused on building scalable web applications, AI-powered SaaS products, and modern digital experiences.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I enjoy creating high-performance backend systems, attractive frontend interfaces, and real-world problem-solving platforms that make a difference. My approach combines clean architecture principles with modern design patterns to deliver products that users love.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Currently exploring advanced AI integrations, real-time applications, and cloud-native architectures. I believe in continuous learning and staying at the cutting edge of web technologies.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['React.js', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'AI/ML', 'Docker'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-lg glass text-gray-300 border border-white/[0.06] hover:border-[#6366F1]/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center hover:border-[#6366F1]/20 transition-colors"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center hover:border-[#6366F1]/20 transition-colors"
            >
              <stat.icon className="w-6 h-6 text-[#6366F1] mx-auto mb-3" />
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
                className="text-3xl font-bold gradient-text block mb-1"
              />
              <span className="text-sm text-gray-400">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

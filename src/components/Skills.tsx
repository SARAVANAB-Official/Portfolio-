'use client'

import { motion } from 'framer-motion'
import { SiReact, SiNodedotjs, SiGit, SiJavascript, SiHtml5 } from 'react-icons/si'
import { FiCode, FiServer, FiTool } from 'react-icons/fi'
import {
  BiLogoTypescript,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoTailwindCss,
} from 'react-icons/bi'

const skillCategories = {
  Frontend: {
    icon: FiCode,
    color: '#6366F1',
    skills: [
      { name: 'React.js', level: 95, Icon: SiReact },
      { name: 'Next.js', level: 90, Icon: BiLogoTypescript },
      { name: 'Tailwind CSS', level: 92, Icon: BiLogoTailwindCss },
      { name: 'JavaScript', level: 93, Icon: SiJavascript },
      { name: 'HTML5', level: 95, Icon: SiHtml5 },
      { name: 'CSS3', level: 92, Icon: BiLogoTailwindCss },
    ],
  },
  Backend: {
    icon: FiServer,
    color: '#8B5CF6',
    skills: [
      { name: 'Node.js', level: 90, Icon: SiNodedotjs },
      { name: 'Express.js', level: 88, Icon: SiNodedotjs },
      { name: 'MongoDB', level: 85, Icon: BiLogoMongodb },
      { name: 'REST APIs', level: 90, Icon: FiServer },
      { name: 'JWT Auth', level: 85, Icon: SiNodedotjs },
      { name: 'PostgreSQL', level: 75, Icon: BiLogoPostgresql },
    ],
  },
  Tools: {
    icon: FiTool,
    color: '#06B6D4',
    skills: [
      { name: 'Git', level: 90, Icon: SiGit },
      { name: 'GitHub', level: 88, Icon: SiGit },
      { name: 'Postman', level: 85, Icon: FiTool },
      { name: 'Vercel', level: 90, Icon: BiLogoPython },
      { name: 'Render', level: 80, Icon: BiLogoPython },
      { name: 'Firebase', level: 78, Icon: BiLogoPostgresql },
    ],
  },
}

function MarqueeSkills() {
  const skills = ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind', 'Express', 'Git', 'REST APIs', 'JWT']

  return (
    <div className="relative overflow-hidden py-8 mb-12">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex gap-6"
      >
        {[...skills, ...skills].map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-5 py-3 rounded-full glass whitespace-nowrap text-sm text-gray-400 border border-white/[0.06]"
          >
            <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
            {skill}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full mx-auto" />
        </motion.div>

        <MarqueeSkills />

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skillCategories).map(([category, data], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
            >
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${data.color}15`, border: `1px solid ${data.color}30` }}
                  >
                    <data.icon className="w-5 h-5" style={{ color: data.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category}</h3>
                </div>

                <div className="space-y-4">
                  {data.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.08 }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <skill.Icon className="w-3.5 h-3.5 text-gray-500" />
                          <span className="text-sm text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="relative h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.08, ease: 'easeOut' }}
                          className="absolute inset-y-0 left-0 rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${data.color}, ${data.color}80)`,
                            boxShadow: `0 0 10px ${data.color}40`,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

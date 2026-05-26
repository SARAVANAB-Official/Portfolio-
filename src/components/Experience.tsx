'use client'

import { motion } from 'framer-motion'
import { FiAward, FiBriefcase, FiShield, FiStar, FiTrendingUp, FiCpu } from 'react-icons/fi'

const experiences = [
  {
    icon: FiCpu,
    title: 'AI SaaS Platforms',
    description: 'Built and deployed scalable AI-powered SaaS platforms with real-time data processing, smart recommendations, and advanced analytics dashboards.',
    color: '#6366F1',
  },
  {
    icon: FiBriefcase,
    title: 'MERN Stack Applications',
    description: 'Developed production-grade full-stack MERN applications with robust REST APIs, optimized database schemas, and intuitive user interfaces.',
    color: '#8B5CF6',
  },
  {
    icon: FiStar,
    title: 'Modern Frontend Architecture',
    description: 'Created responsive, accessible, and visually stunning interfaces using React, Next.js, and Tailwind CSS with micro-frontend patterns.',
    color: '#06B6D4',
  },
  {
    icon: FiShield,
    title: 'Secure Authentication & Authorization',
    description: 'Implemented JWT-based authentication, OAuth2.0, RBAC systems, and secure API gateways for enterprise-grade applications.',
    color: '#6366F1',
  },
  {
    icon: FiTrendingUp,
    title: 'Performance Optimization',
    description: 'Optimized application performance through code splitting, lazy loading, caching strategies, CDN integration, and database query optimization.',
    color: '#8B5CF6',
  },
  {
    icon: FiAward,
    title: 'Open Source Contributions',
    description: 'Active contributor to open-source projects, building developer tools, utility libraries, and sharing knowledge through technical articles.',
    color: '#06B6D4',
  },
  {
    icon: FiCpu,
    title: 'Cloud Deployment & DevOps',
    description: 'Deployed and managed applications on Vercel, Render, and AWS with CI/CD pipelines, Docker containerization, and monitoring.',
    color: '#6366F1',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            A track record of building impactful products and solving real-world problems
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-5 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#6366F1]/40 via-[#8B5CF6]/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                <div
                  className="absolute left-1 md:left-4 top-0 w-7 md:w-8 h-7 md:h-8 rounded-xl flex items-center justify-center border"
                  style={{
                    background: `${item.color}15`,
                    borderColor: `${item.color}30`,
                  }}
                >
                  <item.icon className="w-4 h-4" style={{ color: item.color }} />
                </div>

                <div className="glass-card rounded-xl p-5 hover:border-[#6366F1]/20 transition-colors">
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

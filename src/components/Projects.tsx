'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    name: 'AI Powered Ecommerce SaaS',
    description:
      'A scalable AI-powered ecommerce SaaS platform with smart product recommendations, analytics dashboard, authentication system, payment gateway integration, and modern admin panel.',
    tech_stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'AI APIs'],
    features: [
      'AI Recommendations',
      'Admin Dashboard',
      'JWT Authentication',
      'Cloudinary Upload',
      'Payment Integration',
      'Responsive UI',
    ],
    category: 'fullstack',
  },
  {
    name: 'Campus Placement Portal',
    description:
      'A modern full-stack placement management portal for students, recruiters, and placement officers with dashboards, role-based access, job tracking, and analytics.',
    tech_stack: ['MERN Stack', 'MongoDB', 'JWT', 'Express.js'],
    features: [
      'Role-Based Access',
      'Recruiter Dashboard',
      'Student Portal',
      'Resume Upload',
      'Placement Analytics',
      'Job Application Tracking',
    ],
    category: 'fullstack',
  },
  {
    name: 'AI Chat Assistant Platform',
    description:
      'An intelligent chatbot platform powered by NLP and machine learning models for automated customer support, lead generation, and real-time conversation analytics.',
    tech_stack: ['Next.js', 'Python', 'OpenAI API', 'WebSocket', 'MongoDB', 'Redis'],
    features: [
      'NLP-Powered Responses',
      'Real-Time Chat',
      'Sentiment Analysis',
      'Conversation History',
      'Multi-Language Support',
      'Analytics Dashboard',
    ],
    category: 'ai',
  },
  {
    name: 'DevFlow - Developer Portfolio Builder',
    description:
      'A drag-and-drop portfolio builder for developers with pre-built templates, GitHub integration, custom domains, and one-click deployment to Vercel/Netlify.',
    tech_stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Supabase'],
    features: [
      'Drag & Drop Builder',
      'GitHub Integration',
      'Custom Themes',
      'SEO Optimized',
      'Analytics Integration',
      'One-Click Deploy',
    ],
    category: 'frontend',
  },
  {
    name: 'Real-Time Code Collaboration IDE',
    description:
      'A browser-based collaborative code editor with real-time syncing, syntax highlighting, terminal emulator, and integrated video/audio calls for pair programming.',
    tech_stack: ['React.js', 'Socket.io', 'WebRTC', 'Node.js', 'Redis', 'Docker'],
    features: [
      'Real-Time Sync',
      'Video/Audio Calls',
      'Syntax Highlighting',
      'Built-in Terminal',
      'File Explorer',
      'Multi-Cursor Support',
    ],
    category: 'fullstack',
  },
  {
    name: 'Smart Invoice Generator',
    description:
      'An AI-assisted invoicing platform that auto-generates professional invoices, tracks payments, sends reminders, and provides financial insights for freelancers and small businesses.',
    tech_stack: ['React.js', 'Node.js', 'MongoDB', 'PDFKit', 'Stripe API', 'Chart.js'],
    features: [
      'AI Invoice Generation',
      'Payment Tracking',
      'Automated Reminders',
      'Financial Reports',
      'Multi-Currency',
      'PDF Export',
    ],
    category: 'ai',
  },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'AI/ML', value: 'ai' },
  { label: 'Frontend', value: 'frontend' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full mx-auto mb-8" />

          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((filter) => (
              <motion.button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === filter.value
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeFilter === filter.value && (
                  <motion.div
                    layoutId="filter-indicator"
                    className="absolute inset-0 glass-card rounded-lg"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{filter.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-500">No projects in this category yet. Coming soon!</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

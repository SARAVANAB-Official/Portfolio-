'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

interface Project {
  name: string
  description: string
  tech_stack: string[]
  features: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glowX, setGlowX] = useState(50)
  const [glowY, setGlowY] = useState(50)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setRotateX((y - centerY) / centerY * -8)
    setRotateY((x - centerX) / centerX * 8)
    setGlowX((x / rect.width) * 100)
    setGlowY((y / rect.height) * 100)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlowX(50)
    setGlowY(50)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="perspective-[1000px]"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out',
        }}
        className="relative group cursor-pointer"
      >
        <div
          className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
          style={{
            background: `radial-gradient(400px circle at ${glowX}% ${glowY}%, rgba(99,102,241,0.15), transparent 40%)`,
            pointerEvents: 'none',
          }}
        />
        <div className="relative h-full glass-card rounded-2xl p-6 md:p-8 hover:border-[#6366F1]/30 transition-colors duration-500">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/20 flex items-center justify-center border border-white/[0.06]">
              <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#6366F1] to-[#8B5CF6]" />
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="Live Demo"
              >
                <FiExternalLink className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
            {project.name}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech_stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-1.5">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-1 h-1 rounded-full bg-[#6366F1]" />
                {feature}
              </div>
            ))}
          </div>

          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${glowX}% ${glowY}%, rgba(99,102,241,0.06), transparent 40%)`,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

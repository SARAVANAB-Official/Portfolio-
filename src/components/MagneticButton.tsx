'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export default function MagneticButton({
  children,
  onClick,
  href,
  className = '',
  variant = 'primary',
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const divRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 })

  const variantsMap = {
    primary:
      'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-lg shadow-[#6366F1]/25 hover:shadow-[#6366F1]/40',
    secondary:
      'glass-card text-white hover:bg-white/[0.12]',
    ghost:
      'text-gray-400 hover:text-white',
  }

  const baseClass = `relative inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden ${variantsMap[variant]} ${className}`

  const content = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  )

  const glowClass = "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${baseClass} group`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div ref={divRef} className="absolute inset-0 rounded-xl" />
        <div
          className={glowClass}
          style={{
            background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99,102,241,0.1), transparent 40%)',
          }}
        />
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClass} group`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div ref={divRef} className="absolute inset-0 rounded-xl" />
      <div
        className={glowClass}
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99,102,241,0.1), transparent 40%)',
        }}
      />
      {content}
    </motion.button>
  )
}

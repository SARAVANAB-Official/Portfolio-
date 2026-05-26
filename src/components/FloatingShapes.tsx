'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface Shape {
  id: number
  type: 'circle' | 'square' | 'triangle'
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

function generateShapes(): Shape[] {
  return Array.from({ length: 8 }, (_, i) => ({
    id: i,
    type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as Shape['type'],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 80 + 40,
    color: [
      'rgba(99, 102, 241, 0.08)',
      'rgba(139, 92, 246, 0.06)',
      'rgba(6, 182, 212, 0.06)',
      'rgba(99, 102, 241, 0.04)',
    ][Math.floor(Math.random() * 4)],
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }))
}

export default function FloatingShapes() {
  const shapes = useMemo(() => generateShapes(), [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            x: [0, 30, -20, 40, -30, 0],
            y: [0, -40, 20, -30, 40, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        >
          {shape.type === 'circle' && (
            <div
              className="w-full h-full rounded-full"
              style={{ background: shape.color }}
            />
          )}
          {shape.type === 'square' && (
            <div
              className="w-full h-full rounded-2xl"
              style={{ background: shape.color, transform: 'rotate(45deg)' }}
            />
          )}
          {shape.type === 'triangle' && (
            <div
              className="w-full h-full"
              style={{
                background: shape.color,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}

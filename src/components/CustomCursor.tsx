'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 })

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  useEffect(() => {
    if (isTouchDevice) return
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [cursorX, cursorY, isVisible])

  if (typeof window === 'undefined' || isTouchDevice) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: springX, y: springY, opacity: isVisible ? 1 : 0 }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9998]"
        style={{ x: cursorX, y: cursorY, opacity: isVisible ? 1 : 0 }}
        animate={{ scale: isHovering ? 2.5 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        <div className="w-full h-full rounded-full bg-[#6366F1]/20 blur-sm" />
      </motion.div>
    </>
  )
}

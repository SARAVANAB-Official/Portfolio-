'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiGithub, FiLinkedin, FiInstagram, FiGlobe, FiMail, FiMapPin } from 'react-icons/fi'
import MagneticButton from './MagneticButton'

const socialLinks = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/SARAVANAB-Official', color: 'hover:text-[#6366F1]' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/saravanabofficial/', color: 'hover:text-[#6366F1]' },
  { icon: FiInstagram, label: 'Instagram', href: 'https://www.instagram.com/saravana_rescriptor7523/', color: 'hover:text-[#8B5CF6]' },
  { icon: FiGlobe, label: 'Portfolio', href: '#', color: 'hover:text-[#06B6D4]' },
]

interface FormFieldProps {
  label: string
  type?: string
  isTextarea?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

function FormField({ label, type = 'text', isTextarea = false, value, onChange }: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = value.length > 0

  return (
    <div className="relative">
      {isTextarea ? (
        <textarea
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={4}
          className="w-full px-4 pt-6 pb-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm outline-none transition-all duration-300 resize-none focus:border-[#6366F1]/50 focus:bg-white/[0.06]"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full px-4 pt-6 pb-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white text-sm outline-none transition-all duration-300 focus:border-[#6366F1]/50 focus:bg-white/[0.06]"
        />
      )}
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          isFocused || hasValue
            ? 'top-2 text-xs text-[#6366F1]'
            : 'top-1/2 -translate-y-1/2 text-sm text-gray-500'
        }`}
      >
        {label}
      </label>
    </div>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <FormField
                label="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <FormField
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <FormField
                label="Message"
                isTextarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <MagneticButton variant="primary" onClick={() => {}}>
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
                <FiSend className="w-4 h-4" />
              </MagneticButton>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <FiMail className="w-5 h-5 text-[#6366F1]" />
                <span>saravanbofficials@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FiMapPin className="w-5 h-5 text-[#8B5CF6]" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-xl glass-card flex items-center justify-center text-gray-400 transition-colors ${link.color}`}
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

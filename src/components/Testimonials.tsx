'use client'

import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'CTO, TechVentures',
    content:
      'Saravana delivered an exceptional AI-powered platform for us. His expertise in MERN stack and AI integration transformed our vision into a production-ready product. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Product Manager, DevStudio',
    content:
      'Working with Saravana was a fantastic experience. He understood our requirements perfectly and built a scalable solution that exceeded our expectations. Great attention to detail.',
    rating: 5,
  },
  {
    name: 'Arun Kumar',
    role: 'Founder, SaaSify',
    content:
      'Saravana built our entire placement portal from scratch. The role-based access, analytics dashboard, and real-time tracking features were exactly what we needed. Top-notch developer.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-6 hover:border-[#6366F1]/20 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6 italic">
                &ldquo;{item.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366F1]/30 to-[#8B5CF6]/30 flex items-center justify-center border border-[#6366F1]/20">
                  <span className="text-sm font-bold gradient-text">
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

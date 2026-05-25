'use client'

import { motion } from 'framer-motion'
import { FiHeart } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            className="text-lg font-bold gradient-text"
          >
            {'<Saravana />'}
          </motion.a>

          <p className="text-sm text-gray-500 flex items-center gap-1">
            Built with
            <FiHeart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            using Next.js & Tailwind CSS
          </p>

          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Saravana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

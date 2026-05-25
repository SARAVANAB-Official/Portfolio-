import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Saravana | MERN Stack Developer',
  description:
    'MERN Stack Developer building scalable SaaS platforms, AI-powered applications, and modern digital experiences.',
  keywords: [
    'MERN Stack',
    'React.js',
    'Next.js',
    'Node.js',
    'MongoDB',
    'Full Stack Developer',
    'Portfolio',
    'Saravana',
  ],
  openGraph: {
    title: 'Saravana | MERN Stack Developer',
    description:
      'MERN Stack Developer building scalable SaaS platforms, AI-powered applications, and modern digital experiences.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} !scroll-smooth`}>
      <body className="bg-[#020617] text-[#E2E8F0] antialiased min-h-screen font-sans">
        {children}
      </body>
    </html>
  )
}

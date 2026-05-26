'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions, Engine } from '@tsparticles/engine'

export default function ParticleBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    const initEngine = async () => {
      const { initParticlesEngine } = await import('@tsparticles/react')
      await initParticlesEngine(async (engine: Engine) => {
        await loadSlim(engine)
      })
      setInit(true)
    }
    initEngine()
  }, [])

  const options: ISourceOptions = useMemo(() => ({
    fullScreen: { enable: false, zIndex: 0 },
    fpsLimit: 60,
    particles: {
      number: { value: 50, density: { enable: true } },
      color: { value: ['#6366F1', '#8B5CF6', '#06B6D4'] },
      opacity: {
        value: { min: 0.1, max: 0.3 },
        animation: { enable: true, speed: 0.5 }
      },
      size: {
        value: { min: 1, max: 3 },
        animation: { enable: true, speed: 1 }
      },
      links: {
        enable: true,
        distance: 150,
        color: '#6366F1',
        opacity: 0.1,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'bounce' }
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
        onClick: { enable: true, mode: 'push' }
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.3 } },
        push: { quantity: 2 }
      }
    },
    detectRetina: true
  }), [])

  if (!init) return null

  return (
    <div className="absolute inset-0 -z-10">
      <Particles id="tsparticles" options={options} className="w-full h-full" />
    </div>
  )
}

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { SECTIONS } from '../data/presentationData'

/**
 * Fixed side navigation (desktop) + top progress bar (all devices).
 * Tracks the active section using IntersectionObserver.
 */
export default function Navigation() {
  const [active, setActive] = useState('hero')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-gradient-to-r from-electric-500 via-electric-400 to-success shadow-glow"
      />

      {/* Desktop side nav */}
      <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
        <ul className="flex flex-col gap-3">
          {SECTIONS.map((s) => {
            const isActive = active === s.id
            return (
              <li key={s.id} className="group flex items-center justify-end gap-3">
                <span
                  className={`whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-electric-400 opacity-100'
                      : 'text-slate-500 opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <span className="font-mono text-[10px] text-slate-400 mr-1">{s.short}</span>
                  {s.label}
                </span>
                <button
                  onClick={() => scrollTo(s.id)}
                  aria-label={s.label}
                  className="relative flex h-3 w-3 items-center justify-center"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      isActive
                        ? 'h-3 w-3 bg-electric-500 shadow-glow'
                        : 'h-2 w-2 bg-slate-600 group-hover:bg-electric-400'
                    }`}
                  />
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Mobile bottom mini-indicator */}
      <div className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 lg:hidden">
        <div className="flex items-center gap-1.5 rounded-full glass-strong px-3 py-2">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              aria-label={s.label}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === s.id ? 'w-5 bg-electric-500' : 'w-1.5 bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  )
}

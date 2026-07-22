import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from './components/Icon'

// Reuse the EXACT section components from the full 13-section deck.
import Hero from './components/Hero'
import IndustryProblem from './components/IndustryProblem'
import Objective from './components/Objective'
import ExistingSolutions from './components/ExistingSolutions'
import ProposedSolution from './components/ProposedSolution'
import SoftwareProgress from './components/SoftwareProgress'
import RoadmapSlide from './components/RoadmapSlide'

// The condensed CEO deck is just a curated subset of the real slides,
// shown one-at-a-time with deck navigation. No content is re-created.
// `index` overrides the eyebrow number so numbering matches the deck order
// (without changing the full 13-section site at /).
const SLIDES = [
  { id: 'hero', label: 'Overview', Component: Hero },
  { id: 'problem', label: 'The Industry Problem', Component: IndustryProblem },
  { id: 'objective', label: 'Objective', Component: Objective, props: { index: '03' } },
  { id: 'existing', label: 'Existing Solutions', Component: ExistingSolutions, props: { index: '04' } },
  { id: 'solution', label: 'Proposed Solution', Component: ProposedSolution, props: { index: '05' } },
  { id: 'software', label: 'Software Development Progress', Component: SoftwareProgress, props: { index: '06' } },
  { id: 'roadmap-future', label: 'Future Development Roadmap', Component: RoadmapSlide, props: { index: '07' } },
]

export default function CeoDeck() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const total = SLIDES.length

  const go = useCallback(
    (next) => {
      setI((cur) => {
        const n = Math.min(Math.max(next, 0), total - 1)
        setDir(n >= cur ? 1 : -1)
        return n
      })
    },
    [total]
  )

  useEffect(() => {
    const onKey = (e) => {
      // let arrow keys scroll a slide's inner content when needed;
      // use PageUp/Down or explicit nav keys to move between slides.
      if (e.key === 'ArrowRight' || e.key === 'PageDown') go(i + 1)
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') go(i - 1)
      else if (e.key === 'Home') go(0)
      else if (e.key === 'End') go(total - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [i, go, total])

  const slide = SLIDES[i]
  const Slide = slide.Component

  return (
    <div className="fixed inset-0 overflow-hidden bg-surface-base text-navy-900">
      {/* shared background layers (same as the full deck) */}
      <div className="pointer-events-none fixed inset-0 bg-industrial" />
      <div className="pointer-events-none fixed inset-0 bg-techgrid opacity-70" />

      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={slide.id}
          custom={dir}
          initial={{ opacity: 0, x: dir * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir * -40 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative z-10 h-full w-full overflow-y-auto"
        >
          {/* Render the real section. Its own section padding + animations apply. */}
          <div className="flex min-h-full flex-col justify-center">
            <Slide {...(slide.props || {})} />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* progress dots */}
      <div className="pointer-events-auto fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 shadow-card backdrop-blur">
        {SLIDES.map((sl, idx) => (
          <button
            key={sl.id}
            onClick={() => go(idx)}
            aria-label={`Go to ${sl.label}`}
            className={`h-2 rounded-full transition-all duration-300 ${idx === i ? 'w-6 bg-electric-500' : 'w-2 bg-slate-300 hover:bg-electric-400'}`}
          />
        ))}
      </div>

      {/* prev / next */}
      <button
        onClick={() => go(i - 1)}
        disabled={i === 0}
        aria-label="Previous slide"
        className="fixed left-4 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-navy-700 shadow-card backdrop-blur transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-25"
      >
        <Icon name="ChevronLeft" className="h-5 w-5" />
      </button>
      <button
        onClick={() => go(i + 1)}
        disabled={i === total - 1}
        aria-label="Next slide"
        className="fixed right-4 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-navy-700 shadow-card backdrop-blur transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-25"
      >
        <Icon name="ChevronRight" className="h-5 w-5" />
      </button>

      {/* slide counter */}
      <div className="fixed right-5 top-5 z-50 rounded-full border border-slate-200 bg-white/80 px-3 py-1 font-mono text-xs text-navy-600 shadow-card backdrop-blur">
        {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>

      {/* link back to full deck */}
      <a
        href="/"
        className="fixed left-5 top-5 z-50 flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-navy-600 shadow-card backdrop-blur transition hover:text-electric-600"
      >
        <Icon name="LayoutList" className="h-3.5 w-3.5" />
        Full deck
      </a>
    </div>
  )
}

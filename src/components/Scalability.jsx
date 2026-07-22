import { motion } from 'framer-motion'
import { ROADMAP } from '../data/presentationData'
import SectionWrapper from './SectionWrapper'
import Icon from './Icon'

export default function Scalability({ index = '11' }) {
  return (
    <SectionWrapper
      id="scalability"
      index={index}
      label="Scalability & Deployment"
      title="A clear path from 5-LED POC to industrial deployment."
    >
      {/* compact pipeline strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-navy-600"
      >
        {['5 LED POC', '25 LED Topology', 'Camera Integration', 'ML Model Training', 'PLC Integration', 'Industrial Deployment'].map(
          (s, i, arr) => (
            <span key={s} className="flex items-center gap-2">
              <span className="rounded-full border border-electric-500/20 bg-electric-500/[0.06] px-3 py-1 text-electric-600">
                {s}
              </span>
              {i < arr.length - 1 && <Icon name="ChevronRight" className="h-3.5 w-3.5 text-electric-500/60" />}
            </span>
          )
        )}
      </motion.div>

      {/* roadmap timeline */}
      <div className="relative">
        {/* progress line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute left-0 top-7 hidden h-0.5 w-full origin-left bg-gradient-to-r from-electric-500 via-electric-400 to-success glow-line lg:block"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {ROADMAP.map((r, i) => (
            <motion.div
              key={r.stage}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* node */}
              <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-electric-500/40 bg-white text-electric-500 shadow-glow">
                <Icon name={r.icon} className="h-6 w-6" />
              </div>
              <div className="w-full rounded-xl glass p-4 transition-all hover:border-electric-500/40 hover:shadow-glow">
                <div className="mb-1.5 font-mono text-xs font-bold text-electric-400">
                  {r.stage}
                </div>
                <p className="text-xs leading-relaxed text-navy-700">{r.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

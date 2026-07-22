import { motion } from 'framer-motion'
import { ROADMAP_SLIDE } from '../data/presentationData'
import SectionWrapper from './SectionWrapper'
import Icon from './Icon'

const R = ROADMAP_SLIDE

// status → styling (green done / blue current / grey future)
const ST = {
  done: {
    dot: 'bg-success text-white',
    node: 'border-success/40 bg-white text-success',
    line: 'bg-success',
    chip: 'border-success/30 bg-success/10 text-success',
    cardBorder: 'border-success/30',
    cardTint: 'bg-success/[0.04]',
    icon: 'bg-success/12 text-success',
    label: 'Completed',
    labelChip: 'bg-success/15 text-success',
  },
  current: {
    dot: 'bg-electric-500 text-white',
    node: 'border-electric-500 bg-electric-500 text-white',
    line: 'bg-slate-200',
    chip: 'border-electric-500/40 bg-electric-500/10 text-electric-600',
    cardBorder: 'border-electric-500/50',
    cardTint: 'bg-electric-500/[0.05]',
    icon: 'bg-electric-500/12 text-electric-600',
    label: 'Current Development',
    labelChip: 'bg-electric-500/15 text-electric-600',
  },
  future: {
    dot: 'bg-slate-300 text-white',
    node: 'border-slate-300 bg-white text-slate-400',
    line: 'bg-slate-200',
    chip: 'border-slate-200 bg-white text-navy-600 shadow-card',
    cardBorder: 'border-slate-200',
    cardTint: 'bg-white',
    icon: 'bg-slate-100 text-slate-500',
    label: 'Future',
    labelChip: 'bg-slate-100 text-slate-500',
  },
}

function Timeline() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-card backdrop-blur md:p-6">
      {/* legend */}
      <div className="mb-5 flex flex-wrap gap-4 text-xs text-navy-600">
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-success" />Completed</span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-electric-500" />Current</span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-slate-300" />Future</span>
      </div>

      <div className="flex flex-wrap items-stretch gap-x-1.5 gap-y-4">
        {R.timeline.map((t, i, arr) => {
          const s = ST[t.status]
          const isCurrent = t.status === 'current'
          return (
            <div key={t.label} className="flex items-stretch gap-1.5">
              <div className="relative flex w-[128px] flex-col items-center text-center">
                {isCurrent && (
                  <span className="mb-1 whitespace-nowrap rounded-full bg-electric-500 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                    {R.currentLabel}
                  </span>
                )}
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${s.dot} ${isCurrent ? 'shadow-glow ring-4 ring-electric-500/20' : ''}`}
                >
                  {t.status === 'done' ? (
                    <Icon name="Check" className="h-4 w-4" />
                  ) : isCurrent ? (
                    <Icon name="CircleDot" className="h-4 w-4" />
                  ) : (
                    <span className="text-[11px] font-bold">{i + 1}</span>
                  )}
                </motion.span>
                <span className={`mt-2 text-[11px] font-medium leading-tight ${isCurrent ? 'text-electric-600' : t.status === 'done' ? 'text-navy-800' : 'text-navy-600'}`}>
                  {t.label}
                </span>
              </div>
              {i < arr.length - 1 && (
                <Icon name="ChevronRight" className="mt-2 h-4 w-4 shrink-0 self-start text-slate-300" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function PhaseCard({ phase, index }) {
  const s = ST[phase.status]
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
      className={`flex flex-col rounded-2xl border p-5 shadow-card ${s.cardBorder} ${s.cardTint}`}
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className={`inline-flex rounded-xl p-2.5 ${s.icon}`}>
            <Icon name={phase.icon} className="h-5 w-5" />
          </span>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Phase {phase.n}</div>
            <h4 className="text-sm font-bold leading-tight text-navy-900">{phase.title}</h4>
          </div>
        </div>
        <span className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${s.labelChip}`}>
          {s.label}
        </span>
      </div>

      {phase.note && (
        <p className="mb-2 rounded-lg bg-white/70 px-3 py-2 text-[11px] italic leading-relaxed text-navy-600">
          {phase.note}
        </p>
      )}

      <ul className="space-y-1">
        {phase.points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-xs text-navy-700">
            <Icon name="Check" className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${phase.status === 'done' ? 'text-success' : phase.status === 'current' ? 'text-electric-500' : 'text-slate-400'}`} />
            {p}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function RoadmapSlide({ index = '14' }) {
  return (
    <SectionWrapper
      id="roadmap-future"
      index={index}
      label="Future Development Roadmap"
      title={R.title}
      subtitle={R.subtitle}
    >
      <Timeline />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {R.phases.map((phase, i) => (
          <PhaseCard key={phase.n} phase={phase} index={i} />
        ))}
      </div>

      {/* Executive closing box */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mt-12 rounded-2xl border-l-4 border-electric-500 bg-gradient-to-r from-surface-soft to-white px-6 py-6 md:px-10"
      >
        <div className="mb-2 flex items-center gap-2 text-electric-600">
          <Icon name="Rocket" className="h-5 w-5" />
          <span className="text-xs font-semibold uppercase tracking-wider">Executive Summary</span>
        </div>
        <p className="max-w-5xl text-base leading-relaxed text-navy-800 md:text-lg">{R.closing}</p>
      </motion.div>
    </SectionWrapper>
  )
}

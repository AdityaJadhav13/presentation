import { motion } from 'framer-motion'
import { RECONFIG } from '../data/presentationData'
import SectionWrapper from './SectionWrapper'
import Icon from './Icon'

function LedChip({ n, dim, glow }) {
  return (
    <motion.div
      layout
      className={`flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold transition-all ${
        glow
          ? 'bg-ledglow text-navy-900 shadow-glow-led'
          : dim
          ? 'border border-slate-200 bg-slate-50 text-slate-400'
          : 'border border-electric-500/30 bg-electric-500/10 text-electric-600'
      }`}
    >
      {n}
    </motion.div>
  )
}

function Sequence({ leds, glow, dim, title, sub }) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-navy-600">
          {title}
        </span>
        <span className="text-[10px] text-slate-400">· {sub}</span>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {leds.map((n, i) => (
          <div key={`${title}-${n}`} className="flex items-center gap-2">
            <LedChip n={n} glow={glow} dim={dim} />
            {i < leds.length - 1 && (
              <Icon name="ChevronRight" className="h-4 w-4 text-slate-400" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function DynamicReconfiguration() {
  return (
    <SectionWrapper
      id="reconfig"
      index="10"
      label="Dynamic Reconfiguration Mechanism"
      title="Skip the noise. Run only the lighting that matters."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
        {/* Sequences */}
        <div className="space-y-8 rounded-2xl glass-strong p-6 md:p-8">
          <motion.div
            initial={{ opacity: 1 }}
            whileInView={{ opacity: [1, 0.35, 1] }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 2, times: [0, 0.5, 1] }}
          >
            <Sequence
              leds={RECONFIG.default}
              dim
              title="Default Sequence"
              sub="every angle, fixed order"
            />
          </motion.div>

          <div className="flex items-center gap-3 text-electric-400">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-electric-500/40" />
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-3 py-1 text-xs font-medium"
            >
              <Icon name="Sparkles" className="h-3.5 w-3.5" />
              ML-optimized
            </motion.div>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-electric-500/40" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Sequence
              leds={RECONFIG.optimized}
              glow
              title="Optimized Sequence"
              sub="high-value angles only"
            />
          </motion.div>

          <p className="text-sm leading-relaxed text-navy-600">{RECONFIG.explanation}</p>
        </div>

        {/* Feedback loop visual */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center rounded-2xl glass p-6"
        >
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-electric-400">
            Closed Feedback Loop
          </h3>

          <div className="relative space-y-3">
            {[
              { icon: 'Lightbulb', label: 'LED Control', color: 'text-ledglow' },
              { icon: 'Camera', label: 'Image Capture', color: 'text-electric-400' },
              { icon: 'BrainCircuit', label: 'ML Result', color: 'text-defect' },
            ].map((step, i) => (
              <div key={step.label}>
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                  <Icon name={step.icon} className={`h-5 w-5 ${step.color}`} />
                  <span className="text-sm font-medium text-navy-900">{step.label}</span>
                </div>
                {i < 2 && (
                  <div className="flex justify-center py-1">
                    <Icon name="ArrowDown" className="h-4 w-4 text-electric-500 glow-line" />
                  </div>
                )}
              </div>
            ))}

            {/* feedback arrow back to top */}
            <div className="flex items-center justify-center gap-2 pt-2 text-xs text-electric-600">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                <Icon name="RefreshCw" className="h-4 w-4 glow-line" />
              </motion.div>
              ML result feeds back to LED control
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

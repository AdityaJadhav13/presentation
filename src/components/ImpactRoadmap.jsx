import { motion } from 'framer-motion'
import { IMPACT_CARDS, IMPACT_CLOSING, IMPACT_CTA } from '../data/presentationData'
import SectionWrapper from './SectionWrapper'
import GlowCard from './GlowCard'
import Icon from './Icon'

export default function ImpactRoadmap({ index = '12' }) {
  return (
    <SectionWrapper
      id="impact"
      index={index}
      label="Impact & Future Roadmap"
      title="The measurable difference this system makes."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {IMPACT_CARDS.map((c, i) => (
          <GlowCard key={c.title} accent="green" delay={i * 0.08} className="flex items-center gap-4">
            <div className="inline-flex shrink-0 rounded-xl bg-success/15 p-3 text-success transition-colors group-hover:bg-success/25">
              <Icon name={c.icon} className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-semibold text-navy-900">{c.title}</h3>
          </GlowCard>
        ))}
      </div>

      {/* Closing statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="relative mt-16 overflow-hidden rounded-3xl glass-strong p-8 text-center md:p-14"
      >
        {/* ambient glow */}
        <div className="pointer-events-none absolute -top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-electric-500/15 blur-3xl" />

        <div className="relative">
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-navy-700 md:text-xl">
            {IMPACT_CLOSING}
          </p>

          <div className="mx-auto my-8 h-px w-24 bg-gradient-to-r from-transparent via-electric-500 to-transparent" />

          <p className="mx-auto max-w-4xl text-xl font-bold leading-tight md:text-3xl">
            <span className="text-gradient">{IMPACT_CTA}</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-ledglow/30 bg-ledglow/10 px-4 py-2 text-sm font-medium text-ledglow">
              <Icon name="Lightbulb" className="h-4 w-4" />
              Dynamic Lighting
            </span>
            <Icon name="Plus" className="h-4 w-4 text-slate-500" />
            <span className="inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-4 py-2 text-sm font-medium text-electric-600">
              <Icon name="Cpu" className="h-4 w-4" />
              Embedded Control
            </span>
            <Icon name="Plus" className="h-4 w-4 text-slate-500" />
            <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-2 text-sm font-medium text-success">
              <Icon name="BrainCircuit" className="h-4 w-4" />
              Machine Learning
            </span>
          </div>
        </div>
      </motion.div>

      {/* footer */}
      <div className="mt-16 border-t border-slate-200 pt-8 text-center">
        <p className="font-mono text-xs text-slate-400">
          AW4W Line Quality Inspection · Stage 1 POC · AI-Driven Dynamic Lighting System
        </p>
      </div>
    </SectionWrapper>
  )
}

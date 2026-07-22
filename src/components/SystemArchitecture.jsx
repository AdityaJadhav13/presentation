import { motion } from 'framer-motion'
import { SYSTEM_BLOCKS, SYSTEM_LABELS } from '../data/presentationData'
import SectionWrapper from './SectionWrapper'
import ArchitectureBlock from './ArchitectureBlock'
import Dashboard from './Dashboard'

export default function SystemArchitecture() {
  return (
    <SectionWrapper
      id="system"
      index="05"
      label="System Architecture"
      title="End-to-end control & inspection pipeline."
      subtitle="From the dashboard down to the wheel — and back up through the AI layer to alerts and logging."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
        {/* Architecture flow */}
        <div className="rounded-2xl glass-strong p-6 md:p-8">
          <div className="mx-auto max-w-md">
            {SYSTEM_BLOCKS.map((b, i) => (
              <ArchitectureBlock
                key={b.id}
                block={b}
                index={i}
                isLast={i === SYSTEM_BLOCKS.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Spec labels */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass p-6"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-electric-400">
              Communication Spec
            </h3>
            <dl className="space-y-3">
              {SYSTEM_LABELS.map((l) => (
                <div
                  key={l.k}
                  className="flex items-center justify-between border-b border-slate-200/70 pb-2 last:border-0"
                >
                  <dt className="text-xs text-slate-500">{l.k}</dt>
                  <dd className="font-mono text-xs font-medium text-slate-200">{l.v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>

      {/* Dashboard mockup */}
      <div className="mt-14">
        <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-navy-900">
          <span className="h-5 w-1 rounded-full bg-electric-500" />
          Live Control Dashboard
        </h3>
        <Dashboard />
      </div>
    </SectionWrapper>
  )
}

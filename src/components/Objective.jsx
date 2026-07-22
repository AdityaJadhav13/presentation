import { motion } from 'framer-motion'
import { OBJECTIVE } from '../data/presentationData'
import SectionWrapper from './SectionWrapper'
import Icon from './Icon'

export default function Objective({ index = '03' }) {
  return (
    <SectionWrapper
      id="objective"
      index={index}
      label="Objective"
      title={OBJECTIVE.title}
      subtitle={OBJECTIVE.subtitle}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {OBJECTIVE.points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-electric-500/40 hover:shadow-card-lg"
          >
            {/* number + icon */}
            <div className="flex flex-col items-center gap-2">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-electric-500 text-sm font-bold text-white shadow-glow">
                {i + 1}
              </span>
              <span className="inline-flex rounded-xl bg-electric-500/10 p-2.5 text-electric-500">
                <Icon name={p.icon} className="h-5 w-5" />
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-navy-900">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

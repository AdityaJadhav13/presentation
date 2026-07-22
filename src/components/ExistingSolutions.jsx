import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  EXISTING_SOLUTIONS,
  EXISTING_TITLE,
  EXISTING_SUBTITLE,
  EXISTING_SUMMARY,
} from '../data/presentationData'
import Icon from './Icon'

// Static class maps per accent so Tailwind keeps them in the build.
const ACCENT = {
  blue: {
    bar: 'bg-sol-blue',
    text: 'text-sol-blue',
    hoverBorder: 'hover:border-sol-blue/50',
    chip: 'bg-sol-blue/[0.07] text-sol-blue border-sol-blue/25',
    box: 'border-sol-blue/15 bg-sol-blue/[0.05]',
    dot: 'bg-sol-blue',
    grad: 'from-sol-blue/15 to-sol-blue/[0.03]',
    fallbackIcon: 'text-sol-blue',
  },
  purple: {
    bar: 'bg-sol-purple',
    text: 'text-sol-purple',
    hoverBorder: 'hover:border-sol-purple/50',
    chip: 'bg-sol-purple/[0.07] text-sol-purple border-sol-purple/25',
    box: 'border-sol-purple/15 bg-sol-purple/[0.05]',
    dot: 'bg-sol-purple',
    grad: 'from-sol-purple/15 to-sol-purple/[0.03]',
    fallbackIcon: 'text-sol-purple',
  },
  green: {
    bar: 'bg-sol-green',
    text: 'text-sol-green',
    hoverBorder: 'hover:border-sol-green/50',
    chip: 'bg-sol-green/[0.07] text-sol-green border-sol-green/25',
    box: 'border-sol-green/15 bg-sol-green/[0.05]',
    dot: 'bg-sol-green',
    grad: 'from-sol-green/15 to-sol-green/[0.03]',
    fallbackIcon: 'text-sol-green',
  },
  orange: {
    bar: 'bg-sol-orange',
    text: 'text-sol-orange',
    hoverBorder: 'hover:border-sol-orange/50',
    chip: 'bg-sol-orange/[0.07] text-sol-orange border-sol-orange/25',
    box: 'border-sol-orange/15 bg-sol-orange/[0.05]',
    dot: 'bg-sol-orange',
    grad: 'from-sol-orange/15 to-sol-orange/[0.03]',
    fallbackIcon: 'text-sol-orange',
  },
}

function SolutionImage({ src, alt, a, fallbackIcon }) {
  const [ok, setOk] = useState(true)
  return (
    <div className="relative h-44 w-full overflow-hidden md:h-48">
      {ok ? (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setOk(false)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
      ) : (
        <div
          className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${a.grad}`}
        >
          <Icon name={fallbackIcon} className={`h-12 w-12 ${a.fallbackIcon} opacity-70`} />
        </div>
      )}
      {/* top accent bar */}
      <div className={`absolute inset-x-0 top-0 h-1 ${a.bar}`} />
    </div>
  )
}

function SolutionCard({ s, index }) {
  const a = ACCENT[s.accent]
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className={`group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:shadow-card-lg ${a.hoverBorder}`}
    >
      <SolutionImage src={s.image} alt={s.category} a={a} fallbackIcon={s.fallbackIcon} />

      <div className="flex flex-1 flex-col gap-4 p-6">
        {/* Category title with accent bar */}
        <div className="flex items-start gap-3">
          <span className={`mt-1.5 h-5 w-1 shrink-0 rounded-full ${a.bar}`} />
          <h3 className="text-lg font-bold leading-snug text-navy-900">{s.category}</h3>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-navy-600">{s.description}</p>

        {/* Method chips */}
        <div>
          <div className={`mb-2 text-[11px] font-semibold uppercase tracking-wider ${a.text}`}>
            Methods
          </div>
          <div className="flex flex-wrap gap-2">
            {s.methods.map((m, i) => (
              <motion.span
                key={m}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.12 + 0.2 + i * 0.07 }}
                className={`rounded-full border px-3 py-1 text-xs font-medium ${a.chip}`}
              >
                {m}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Used-for box */}
        <div className={`mt-auto rounded-xl border p-4 ${a.box}`}>
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-navy-700">
            Used For
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {s.usedFor.map((u) => (
              <span key={u} className="flex items-center gap-1.5 text-xs text-navy-700">
                <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                {u}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ExistingSolutions({ index = '03' }) {
  return (
    <section id="existing" className="relative w-full px-5 py-24 sm:px-8 md:py-32 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 md:mb-16"
        >
          <span className="section-label">
            <span className="h-px w-8 bg-electric-500/60" />
            {index} / Existing Solutions
          </span>
          <h2 className="max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            {EXISTING_TITLE}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-3xl text-base leading-relaxed text-navy-600 md:text-lg"
          >
            {EXISTING_SUBTITLE}
          </motion.p>
        </motion.div>

        {/* 2x2 grid (4-up on very large screens) */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {EXISTING_SOLUTIONS.map((s, i) => (
            <SolutionCard key={s.category} s={s} index={i} />
          ))}
        </div>

        {/* Bottom summary callout */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-xl border-l-4 border-electric-500 bg-gradient-to-r from-surface-soft to-white px-6 py-5"
        >
          <p className="text-base leading-relaxed text-navy-700 md:text-lg">{EXISTING_SUMMARY}</p>
        </motion.div>
      </div>
    </section>
  )
}

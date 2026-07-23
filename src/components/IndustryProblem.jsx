import { motion } from 'framer-motion'
import { PROBLEM, DEFECT_ROWS } from '../data/presentationData'
import { DEFECT_IMAGES } from '../data/defectImages'
import Icon from './Icon'

// Per-category styling: `cat` is the folder name for images.
const CAT_STYLES = {
  surface: {
    cat: 'surface',
    cardBorder: 'border-slate-200 border-l-cat-surface',
    badge: 'bg-cat-surface/10 text-electric-600 border-cat-surface/40',
    dot: 'bg-cat-surface',
    imgBg: 'bg-cat-surface/10',
    imgIcon: 'text-cat-surface',
  },
  paint: {
    cat: 'paint',
    cardBorder: 'border-slate-200 border-l-cat-paint',
    badge: 'bg-cat-paint/10 text-[#7c5cff] border-cat-paint/40',
    dot: 'bg-cat-paint',
    imgBg: 'bg-cat-paint/10',
    imgIcon: 'text-cat-paint',
  },
  casting: {
    cat: 'casting',
    cardBorder: 'border-slate-200 border-l-cat-casting',
    badge: 'bg-cat-casting/10 text-[#d97917] border-cat-casting/40',
    dot: 'bg-cat-casting',
    imgBg: 'bg-cat-casting/10',
    imgIcon: 'text-cat-casting',
  },
  dimensional: {
    cat: 'dimensional',
    cardBorder: 'border-slate-200 border-l-cat-dimensional',
    badge: 'bg-cat-dimensional/10 text-[#0f9b6c] border-cat-dimensional/40',
    dot: 'bg-cat-dimensional',
    imgBg: 'bg-cat-dimensional/10',
    imgIcon: 'text-cat-dimensional',
  },
}

// Convert a defect name into a predictable image filename slug.
// e.g. "Paint Peel-Off" -> "paint-peel-off", "Bolt-Hole Issue" -> "bolt-hole-issue"
export function defectSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Keep only defects whose image file exists, and drop any category row that
// ends up with no images. (DEFECT_IMAGES is generated from public/defects/.)
const VISIBLE_ROWS = DEFECT_ROWS.map((row) => {
  const have = new Set(DEFECT_IMAGES[row.border] || [])
  return { ...row, defects: row.defects.filter((d) => have.has(defectSlug(d))) }
}).filter((row) => row.defects.length > 0)

function DefectCard({ name, style }) {
  // Only cards with an existing image reach this point (rows are pre-filtered).
  const src = `/defects/${style.cat}/${defectSlug(name)}.jpg`

  return (
    <div
      className={`group flex w-48 shrink-0 flex-col overflow-hidden rounded-xl border border-l-4 bg-white shadow-card ring-1 ring-slate-100/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg ${style.cardBorder}`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <img
          src={src}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Label */}
      <div className="flex items-center gap-2.5 px-3.5 py-3">
        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${style.dot}`} />
        <span className="text-sm font-medium text-navy-900">{name}</span>
      </div>
    </div>
  )
}

/** One infinitely-scrolling marquee row of defect cards. */
function DefectRow({ row, index }) {
  const style = CAT_STYLES[row.border]
  // Repeat enough to fill the row, then duplicate the whole set so the
  // -50% translate marquee loops seamlessly even with only a few cards.
  const reps = Math.max(2, Math.ceil(10 / row.defects.length))
  const base = Array.from({ length: reps }).flatMap(() => row.defects)
  const loop = [...base, ...base]
  const animClass = row.dir === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
    >
      <div className="mb-2 flex items-center gap-2">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${style.badge}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
          {row.category}
        </span>
      </div>

      {/* marquee viewport with edge fade masks */}
      <div className="relative overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className={`flex w-max gap-3 ${animClass} pause-on-hover`}>
          {loop.map((d, i) => (
            <DefectCard key={`${d}-${i}`} name={d} style={style} />
          ))}
        </div>
      </div>

      <p className="mt-1.5 pl-1 text-xs text-navy-600">
        <span className="font-medium text-navy-700">Note: </span>
        {row.note}
      </p>
    </motion.div>
  )
}

function TheoryPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 36 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
      className="rounded-2xl glass p-6 lg:self-start"
    >
      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-navy-900">
        <Icon name="HelpCircle" className="h-5 w-5 text-electric-500" />
        {PROBLEM.theoryTitle}
      </h3>

      <div className="space-y-3.5">
        {PROBLEM.theory.map((p) => (
          <p key={p} className="text-sm leading-relaxed text-navy-600">
            {p}
          </p>
        ))}
      </div>

      {/* Highlight box */}
      <motion.div
        animate={{
          boxShadow: [
            '0 0 0 rgba(37,99,235,0.18)',
            '0 0 26px rgba(37,99,235,0.32)',
            '0 0 0 rgba(37,99,235,0.18)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-6 rounded-xl border-2 border-electric-500/60 bg-gradient-to-br from-white to-surface-soft p-5"
      >
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-electric-600">
          {PROBLEM.highlight.label}
        </div>
        <div className="text-lg font-bold text-navy-900">{PROBLEM.highlight.title}</div>
        <div className="mt-1 text-sm font-medium text-electric-600">{PROBLEM.highlight.sub}</div>
      </motion.div>
    </motion.div>
  )
}

export default function IndustryProblem({ index = '02' }) {
  return (
    <section id="problem" className="relative w-full px-5 py-24 sm:px-8 md:py-32 lg:px-16">
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
            {index} / The Industry Problem
          </span>
          <h2 className="max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            {PROBLEM.title}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-navy-600 md:text-lg">
            {PROBLEM.subtitle}
          </p>
        </motion.div>

        {/* Main: defect rows (65%) + theory (35%). Theory first on mobile. */}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[65fr_35fr] lg:gap-10">
          {/* Theory: order-first on mobile, order-last on desktop */}
          <div className="order-1 lg:order-2">
            <TheoryPanel />
          </div>

          {/* Defect rows — only defects with an existing image are shown; empty rows are dropped. */}
          <div className="order-2 min-w-0 space-y-7 lg:order-1">
            {VISIBLE_ROWS.map((row, i) => (
              <DefectRow key={row.category} row={row} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom core problem statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 flex items-start gap-4 rounded-xl border-l-4 border-electric-500 bg-surface-soft px-6 py-5"
        >
          <Icon name="AlertCircle" className="mt-0.5 h-6 w-6 shrink-0 text-electric-500" />
          <p className="text-base text-navy-700 md:text-lg">
            <span className="font-bold text-navy-900">{PROBLEM.coreLabel}: </span>
            Before AI can detect a defect,{' '}
            <span className="font-semibold text-electric-600">{PROBLEM.coreHighlight}</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

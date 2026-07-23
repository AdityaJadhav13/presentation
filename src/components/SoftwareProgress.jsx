import { useState } from 'react'
import { motion } from 'framer-motion'
import { SOFTWARE } from '../data/presentationData'
import SectionWrapper from './SectionWrapper'
import Icon from './Icon'

const S = SOFTWARE

/** Shadow-based height-measurement reference — shown fully (no cropping). */
function HeightReference({ data: r, icon = 'Ruler', badge = 'Measurement Reference', maxH = 'max-h-[420px]' }) {
  const [ok, setOk] = useState(true)
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mt-6 overflow-hidden rounded-2xl border border-electric-500/30 bg-white shadow-card"
    >
      <div className="flex items-center gap-2 border-b border-slate-200 bg-electric-500/[0.05] px-5 py-3">
        <Icon name={icon} className="h-4 w-4 text-electric-600" />
        <span className="text-sm font-bold text-navy-900">{r.label}</span>
        <span className="ml-auto rounded-full bg-electric-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-electric-600">
          {badge}
        </span>
      </div>
      <div className="flex items-center justify-center bg-slate-50 p-4">
        {ok ? (
          <img
            src={r.img}
            alt={r.label}
            loading="lazy"
            onError={() => setOk(false)}
            className={`${maxH} w-auto max-w-full rounded-lg object-contain`}
          />
        ) : (
          <div className="flex h-56 w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 text-slate-400">
            <Icon name="ImageOff" className="h-8 w-8" />
            <span className="font-mono text-xs">Place image at public{r.img}</span>
          </div>
        )}
      </div>
      <p className="px-5 py-3 text-xs text-navy-600">{r.caption}</p>
    </motion.div>
  )
}

function StoryStrip() {
  return (
    <div className="mb-10 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-navy-600">
      {S.story.map((s, i, arr) => (
        <span key={s} className="flex items-center gap-2">
          <span className="rounded-full border border-electric-500/20 bg-electric-500/[0.06] px-3 py-1 text-electric-600">{s}</span>
          {i < arr.length - 1 && <Icon name="ChevronRight" className="h-3.5 w-3.5 text-electric-500/60" />}
        </span>
      ))}
    </div>
  )
}

function Shot({ shot, index }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all hover:shadow-card-lg"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-900">
        <img
          src={shot.img}
          alt={shot.label}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-md bg-navy-900/70 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
          {shot.label}
        </span>
      </div>
      <figcaption className="px-4 py-3 text-xs text-navy-600">{shot.caption}</figcaption>
    </motion.figure>
  )
}

function PhaseCard({ phase, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="inline-flex rounded-xl bg-electric-500/10 p-2.5 text-electric-500">
          <Icon name={phase.icon} className="h-5 w-5" />
        </span>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-electric-600">{phase.tag}</div>
          <h4 className="text-sm font-bold leading-tight text-navy-900">{phase.title}</h4>
        </div>
      </div>
      <ul className="space-y-1.5">
        {phase.points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-xs text-navy-700">
            <Icon name="Check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-electric-500" />
            {p}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function SoftwareProgress({ index = '13' }) {
  return (
    <SectionWrapper
      id="software"
      index={index}
      label="Software Development Progress"
      title={S.title}
      subtitle={S.subtitle}
    >
      <StoryStrip />

      {/* Screenshots — primary visual, 2x2 */}
      <div className="grid gap-5 sm:grid-cols-2">
        {S.shots.map((shot, i) => (
          <Shot key={shot.img} shot={shot} index={i} />
        ))}
      </div>

      {/* Shadow-based height-measurement reference */}
      {S.heightRef && <HeightReference data={S.heightRef} />}

      {/* Shadow length vs LED brightness level — shown large */}
      {S.levels && (
        <HeightReference
          data={S.levels}
          icon="Layers"
          badge="Brightness Study"
          maxH="max-h-[640px]"
        />
      )}

      {/* Phases */}
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {S.phases.map((phase, i) => (
          <PhaseCard key={phase.tag} phase={phase} index={i} />
        ))}
      </div>

      {/* Current Milestone highlight box */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mt-12 overflow-hidden rounded-2xl border border-success/30 bg-gradient-to-br from-success/[0.08] to-white p-6 shadow-card md:p-8"
      >
        <div className="mb-4 flex items-center gap-2">
          <Icon name="BadgeCheck" className="h-6 w-6 text-success" />
          <h3 className="text-lg font-bold text-navy-900">{S.milestone.title}</h3>
        </div>
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {S.milestone.items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-start gap-2.5 rounded-xl border border-success/20 bg-white px-3.5 py-2.5"
            >
              <Icon name="CircleCheck" className="mt-0.5 h-4 w-4 shrink-0 text-success" />
              <span className="text-sm font-medium text-navy-800">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Roadmap */}
      <div className="mt-12">
        <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-electric-600">
          <Icon name="Milestone" className="h-4 w-4" />
          Future Development Roadmap
        </h3>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
          {S.roadmap.map((step, i, arr) => {
            const done = i < S.roadmapDoneUpto + 1
            return (
              <div key={step} className="flex items-center gap-2">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${
                    done
                      ? 'border-success/30 bg-success/10 text-success'
                      : 'border-slate-200 bg-white text-navy-600 shadow-card'
                  }`}
                >
                  {done && <Icon name="Check" className="h-3 w-3" />}
                  {step}
                </motion.span>
                {i < arr.length - 1 && <Icon name="ChevronRight" className="h-3.5 w-3.5 text-electric-500/50" />}
              </div>
            )
          })}
        </div>
      </div>

      {/* Closing statement */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mt-12 rounded-2xl border-l-4 border-electric-500 bg-gradient-to-r from-surface-soft to-white px-6 py-6 text-center md:px-10"
      >
        <p className="mx-auto max-w-4xl text-base font-medium leading-relaxed text-navy-800 md:text-lg">
          The software platform has successfully evolved from{' '}
          <span className="font-bold text-electric-600">hardware control to precision measurement</span>, establishing a
          strong foundation for future{' '}
          <span className="font-bold text-electric-600">AI-powered automated alloy wheel inspection</span>.
        </p>
      </motion.div>
    </SectionWrapper>
  )
}

import { motion } from 'framer-motion'
import { ML } from '../data/presentationData'
import Icon from './Icon'

// ============================================================
// Small reusable pieces (light mode, scroll-in)
// ============================================================

function Block({ title, icon, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mb-4 flex items-center gap-2.5">
        <span className="inline-flex rounded-lg bg-electric-500/10 p-2 text-electric-500">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-bold text-navy-900 md:text-xl">{title}</h3>
      </div>
      {children}
    </motion.div>
  )
}

function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-card ${className}`}>{children}</div>
  )
}

function Bullets({ items, icon = 'Check' }) {
  return (
    <ul className="space-y-2">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-2 text-sm text-navy-700">
          <Icon name={icon} className="mt-0.5 h-4 w-4 shrink-0 text-electric-500" />
          {b}
        </li>
      ))}
    </ul>
  )
}

function Chips({ items, tone = 'blue' }) {
  const cls = {
    blue: 'border-electric-500/25 bg-electric-500/[0.07] text-electric-600',
    purple: 'border-sol-purple/30 bg-sol-purple/[0.07] text-sol-purple',
  }[tone]
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((x) => (
        <span key={x} className={`rounded-full border px-2.5 py-1 text-xs font-medium ${cls}`}>{x}</span>
      ))}
    </div>
  )
}

/** Horizontal pipeline that wraps; arrows between steps. */
function Pipeline({ steps, icons }) {
  return (
    <div className="flex flex-col items-stretch gap-2 lg:flex-row lg:flex-wrap lg:items-stretch">
      {steps.map((label, i) => (
        <div key={label + i} className="flex items-center gap-2 lg:flex-1">
          <div className="flex w-full flex-1 items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-3 shadow-card lg:flex-col lg:text-center">
            {icons && (
              <span className="inline-flex shrink-0 rounded-lg bg-electric-500/10 p-2 text-electric-500">
                <Icon name={icons[i]} className="h-4 w-4" />
              </span>
            )}
            <span className="text-xs font-medium text-navy-900">{label}</span>
          </div>
          {i < steps.length - 1 && (
            <>
              <Icon name="ChevronRight" className="hidden h-4 w-4 shrink-0 text-electric-500 glow-line lg:block" />
              <Icon name="ChevronDown" className="ml-4 h-3.5 w-3.5 text-electric-500 lg:hidden" />
            </>
          )}
        </div>
      ))}
    </div>
  )
}

function ResultCard({ data }) {
  return (
    <div className="rounded-2xl border border-defect/30 bg-defect/[0.04] p-5 shadow-card">
      <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-700">
        <Icon name="ScanSearch" className="h-4 w-4 text-defect" />
        Example Inspection Result
      </div>
      <dl className="space-y-2">
        {Object.entries(data).map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-4 border-b border-slate-200/70 pb-1.5 last:border-0">
            <dt className="text-xs text-navy-600">{k}</dt>
            <dd className="text-right text-sm font-semibold text-navy-900">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

// ============================================================
// Section — condensed single scroll
// ============================================================
export default function MLLayer() {
  return (
    <section id="ml" className="relative w-full px-5 py-24 sm:px-8 md:py-32 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-10 md:mb-12"
        >
          <span className="section-label">
            <span className="h-px w-8 bg-electric-500/60" />
            08 / Machine Learning
          </span>
          <h2 className="max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.6rem]">
            {ML.title}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-navy-600 md:text-lg">{ML.subtitle}</p>
        </motion.div>

        <div className="space-y-14">
          {/* Overall flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl glass-strong p-5 md:p-6"
          >
            <h4 className="mb-4 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-electric-600">
              <Icon name="Workflow" className="h-3.5 w-3.5" /> Overall ML Flow
            </h4>
            <Pipeline steps={ML.flow.map((f) => f.label)} icons={ML.flow.map((f) => f.icon)} />
          </motion.div>

          {/* Goal */}
          <Block title={ML.goal.heading} icon="Target">
            <p className="mb-4 max-w-3xl text-sm text-navy-600 md:text-base">{ML.goal.intro}</p>
            <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-electric-600">It answers</h4>
                  <Bullets items={ML.goal.questions} icon="ChevronRight" />
                </Card>
                <Card>
                  <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-electric-600">Why ML</h4>
                  <Bullets items={ML.goal.why} />
                </Card>
              </div>
              <ResultCard data={ML.goal.result} />
            </div>
          </Block>

          {/* Data */}
          <Block title={ML.data.heading} icon="Database">
            <div className="grid gap-4 lg:grid-cols-3">
              <Card className="lg:col-span-1">
                <p className="text-sm font-medium text-navy-900">{ML.data.perWheel}</p>
                <p className="mt-2 text-xs text-navy-600">{ML.data.note}</p>
              </Card>
              {ML.data.calc.map((c) => (
                <Card key={c.wheels} className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-navy-900">{c.wheels}</span>
                  <span className="text-2xl font-bold text-electric-600">{c.total}</span>
                </Card>
              ))}
            </div>
          </Block>

          {/* Model stages */}
          <Block title="Model Stages" icon="Layers">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {ML.stages.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all hover:shadow-card-lg hover:border-electric-500/40"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-electric-500 text-[11px] font-bold text-white">{s.n}</span>
                    <Icon name={s.icon} className="h-4 w-4 text-electric-500" />
                  </div>
                  <h4 className="text-sm font-bold text-navy-900">{s.title}</h4>
                  <p className="mt-1 text-xs text-navy-600"><span className="font-semibold">Output: </span>{s.out}</p>
                  <p className="mt-2 rounded-md bg-slate-50 px-2 py-1 text-[10px] text-navy-600">{s.models}</p>
                </motion.div>
              ))}
            </div>
          </Block>

          {/* 3 ways to use 25 angles */}
          <Block title="Using the 25 Lighting Angles" icon="Lightbulb">
            <div className="grid gap-4 lg:grid-cols-3">
              {ML.methods.map((m) => (
                <Card key={m.name} className="flex flex-col">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="inline-flex rounded-lg bg-electric-500/10 p-2 text-electric-500">
                      <Icon name={m.icon} className="h-4 w-4" />
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-navy-600">{m.tag}</span>
                  </div>
                  <h4 className="text-sm font-bold text-navy-900">{m.name}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-navy-600">{m.desc}</p>
                </Card>
              ))}
            </div>
          </Block>

          {/* Key practices */}
          <Block title="Key Practices" icon="ListChecks">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ML.practices.map((p) => (
                <Card key={p.title}>
                  <div className="mb-3 flex items-center gap-2">
                    <Icon name={p.icon} className="h-4 w-4 text-electric-500" />
                    <h4 className="text-sm font-bold text-navy-900">{p.title}</h4>
                  </div>
                  <Bullets items={p.points} />
                </Card>
              ))}
            </div>
            <div className="mt-4 flex items-start gap-3 rounded-xl border-l-4 border-electric-500 bg-gradient-to-r from-surface-soft to-white px-5 py-4">
              <Icon name="GitMerge" className="mt-0.5 h-5 w-5 shrink-0 text-electric-500" />
              <p className="text-sm font-medium leading-relaxed text-navy-800">
                <span className="font-bold">Decision logic: </span>{ML.decision}
              </p>
            </div>
          </Block>

          {/* Deployment */}
          <Block title="Deployment Flow" icon="MonitorSmartphone">
            <Card>
              <Pipeline steps={ML.deploy} />
              <p className="mt-4 rounded-lg bg-slate-50 px-4 py-2.5 text-xs text-navy-600">{ML.deployNote}</p>
            </Card>
          </Block>

          {/* Roadmap + challenges */}
          <Block title="Practical Roadmap" icon="Milestone">
            <div className="grid gap-4 lg:grid-cols-[1fr_300px]">
              <div className="grid gap-2 sm:grid-cols-2">
                {ML.roadmap.map((r, i) => (
                  <motion.div
                    key={r}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-card"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-500 text-[10px] font-bold text-white">{i + 1}</span>
                    <span className="text-xs text-navy-700">{r}</span>
                  </motion.div>
                ))}
              </div>
              <Card>
                <h4 className="mb-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-sol-purple">
                  <Icon name="TriangleAlert" className="h-3.5 w-3.5" /> Main Challenges
                </h4>
                <Chips items={ML.challenges} tone="purple" />
              </Card>
            </div>
          </Block>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-xl border-l-4 border-electric-500 bg-gradient-to-r from-surface-soft to-white px-6 py-6 text-center"
          >
            <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-navy-800 md:text-xl">
              The ML layer converts controlled lighting images into an{' '}
              <span className="font-bold text-electric-600">automatic inspection decision</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

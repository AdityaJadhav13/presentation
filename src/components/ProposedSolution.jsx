import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SOLUTION } from '../data/presentationData'
import AlloyWheel from './AlloyWheel'
import Icon from './Icon'

// =================================================================
// Small reusable pieces
// =================================================================

/** Image with automatic vector fallback. */
function FallbackImage({ src, alt, fallback }) {
  const [ok, setOk] = useState(true)
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-surface-soft/60">
      {ok ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setOk(false)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-4">{fallback}</div>
      )}
    </div>
  )
}

/** Horizontal flow of icon steps (vertical on mobile). */
function FlowRow({ steps }) {
  return (
    <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-center gap-2 sm:flex-1 sm:flex-col">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className="flex w-full flex-1 items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-3 shadow-card sm:w-full sm:flex-col sm:gap-2 sm:text-center"
          >
            <span className="inline-flex shrink-0 rounded-lg bg-electric-500/10 p-2 text-electric-500">
              <Icon name={s.icon} className="h-4 w-4" />
            </span>
            <span className="text-xs font-medium text-navy-900">{s.label}</span>
          </motion.div>
          {i < steps.length - 1 && (
            <>
              <Icon
                name="ChevronRight"
                className="hidden h-4 w-4 shrink-0 text-electric-500 glow-line sm:block"
              />
              <Icon name="ChevronDown" className="ml-4 h-3.5 w-3.5 text-electric-500 sm:hidden" />
            </>
          )}
        </div>
      ))}
    </div>
  )
}

/** Blue callout statement card. */
function Callout({ children, icon = 'Quote' }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border-l-4 border-electric-500 bg-gradient-to-r from-surface-soft to-white px-5 py-4">
      <Icon name={icon} className="mt-0.5 h-5 w-5 shrink-0 text-electric-500" />
      <p className="text-sm font-medium leading-relaxed text-navy-800 md:text-base">{children}</p>
    </div>
  )
}

function SubHeading({ children }) {
  return (
    <h4 className="text-[11px] font-semibold uppercase tracking-wider text-electric-600">
      {children}
    </h4>
  )
}

function Bullets({ items, icon = 'Check' }) {
  return (
    <ul className="space-y-2">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-2.5 text-sm text-navy-700">
          <Icon name={icon} className="mt-0.5 h-4 w-4 shrink-0 text-electric-500" />
          {b}
        </li>
      ))}
    </ul>
  )
}

// =================================================================
// LED visuals
// =================================================================

/** 5 LEDs around a wheel, glowing sequentially. */
function PocWheel() {
  const RADIUS = 40
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[300px]">
      <div className="absolute inset-0 rounded-full bg-electric-500/[0.06] blur-2xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <AlloyWheel size={200} spokes={7} />
      </div>
      {/* camera marker */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white/90 px-2 py-1 text-[9px] font-semibold text-navy-700 shadow-card">
        <Icon name="Camera" className="mx-auto h-3.5 w-3.5 text-electric-500" />
        Fixed Cam
      </div>
      {Array.from({ length: 5 }).map((_, i) => {
        const angle = (i / 5) * Math.PI * 2 - Math.PI / 2
        const x = 50 + Math.cos(angle) * RADIUS
        const y = 50 + Math.sin(angle) * RADIUS
        return (
          <motion.div
            key={i}
            className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[10px] font-bold"
            style={{ left: `${x}%`, top: `${y}%`, background: '#F59E0B', color: '#0F172A' }}
            animate={{
              opacity: [0.35, 1, 0.35],
              scale: [1, 1.3, 1],
              boxShadow: [
                '0 0 0 rgba(245,158,11,0.2)',
                '0 0 24px rgba(245,158,11,0.95)',
                '0 0 0 rgba(245,158,11,0.2)',
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
              delay: i * 0.5,
            }}
          >
            {i + 1}
          </motion.div>
        )
      })}
    </div>
  )
}

/** One POC photo shown FULLY (no cropping) with a label + graceful fallback. */
function PocPhoto({ photo }) {
  const [ok, setOk] = useState(true)
  return (
    <figure className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-card">
      <div className="flex h-72 w-full items-center justify-center p-2 sm:h-80 lg:h-96">
        {ok ? (
          <img
            src={photo.img}
            alt={photo.label}
            loading="lazy"
            onError={() => setOk(false)}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <PocWheel />
        )}
      </div>
      <figcaption className="absolute left-2 top-2 rounded-md bg-navy-900/70 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
        {photo.label}
      </figcaption>
    </figure>
  )
}


/** 5x5 matrix, LED1..LED25 glowing sequentially. */
function MatrixGrid({ compact = false }) {
  return (
    <div className={`mx-auto grid w-full grid-cols-5 gap-1.5 ${compact ? 'max-w-[220px]' : 'max-w-[300px]'}`}>
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="flex aspect-square items-center justify-center rounded-md text-[8px] font-semibold"
          style={{ background: 'rgba(37,99,235,0.08)', color: '#475569' }}
          animate={{
            backgroundColor: [
              'rgba(37,99,235,0.08)',
              'rgba(245,158,11,0.95)',
              'rgba(37,99,235,0.08)',
            ],
            color: ['#475569', '#0F172A', '#475569'],
            boxShadow: [
              '0 0 0 rgba(245,158,11,0)',
              '0 0 12px rgba(245,158,11,0.85)',
              '0 0 0 rgba(245,158,11,0)',
            ],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
            delay: i * 0.18,
          }}
        >
          {i + 1}
        </motion.div>
      ))}
    </div>
  )
}

// =================================================================
// Tab content panels
// =================================================================

function ConceptTab() {
  const c = SOLUTION.concept
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-5">
        <h3 className="text-xl font-bold text-navy-900">{c.title}</h3>
        {c.paragraphs.map((p) => (
          <p key={p} className="text-sm leading-relaxed text-navy-600 md:text-base">
            {p}
          </p>
        ))}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <SubHeading>Key Idea</SubHeading>
          <p className="mt-2 text-sm text-navy-700">{c.keyIdea}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <SubHeading>Lighting → Data Flow</SubHeading>
          <div className="mt-4">
            <FlowRow steps={c.flow} />
          </div>
        </div>
        <Callout>{c.statement}</Callout>
      </div>
    </div>
  )
}

function PocTab() {
  const p = SOLUTION.poc
  return (
    <div className="space-y-7">
      <p className="max-w-3xl text-sm leading-relaxed text-navy-600 md:text-base">{p.intro}</p>

      {/* Real POC hardware photos — all three, large and fully visible (no cropping) */}
      <div className="grid gap-5 md:grid-cols-3">
        {p.photos.map((ph) => (
          <PocPhoto key={ph.img} photo={ph} />
        ))}
      </div>

      {/* Annotated shadow-measurement captures per LED angle */}
      {p.annotated && (
        <div>
          <SubHeading>{p.annotated.heading}</SubHeading>
          <p className="mt-1.5 mb-3 text-xs text-navy-600">{p.annotated.note}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.annotated.shots.map((ph) => (
              <PocPhoto key={ph.img} photo={ph} />
            ))}
          </div>
        </div>
      )}

      {/* 12 V vs 18 V LED-drive comparison */}
      {p.voltage && (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="mb-2 flex items-center gap-2">
            <Icon name="Zap" className="h-4 w-4 text-ledglow" />
            <SubHeading>{p.voltage.heading}</SubHeading>
          </div>
          <p className="mb-3 text-xs text-navy-600">{p.voltage.note}</p>
          <div className="flex items-center justify-center rounded-xl bg-slate-50 p-3">
            <img
              src={p.voltage.img}
              alt={p.voltage.heading}
              loading="lazy"
              className="max-h-[460px] w-auto max-w-full rounded-lg object-contain"
            />
          </div>
        </div>
      )}

      {/* proves */}
      <div className="rounded-xl border border-slate-200 bg-surface-soft/50 p-5">
        <SubHeading>The 5 LED POC Will Prove</SubHeading>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <Bullets items={p.proves.slice(0, 4)} />
          <Bullets items={p.proves.slice(4)} />
        </div>
      </div>

      {/* working cycle */}
      <div>
        <SubHeading>Working Cycle</SubHeading>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {p.cycle.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-navy-700 shadow-card">
                {step}
              </span>
              {i < p.cycle.length - 1 && (
                <Icon name="ChevronRight" className="h-3.5 w-3.5 text-electric-500/70" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FullTab() {
  const f = SOLUTION.full
  return (
    <div className="space-y-7">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-5">
          <p className="text-sm leading-relaxed text-navy-600 md:text-base">{f.intro}</p>
          <div>
            <SubHeading>The 25 LED Setup Gives</SubHeading>
            <div className="mt-3">
              <Bullets items={f.gives} icon="Plus" />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <FallbackImage
            src={f.image}
            alt="Final 25 LED setup"
            fallback={<MatrixGrid />}
          />
          <p className="text-center text-xs text-navy-600">{f.matrixNote}</p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-surface-soft/50 p-5">
        <SubHeading>Lighting Coverage</SubHeading>
        <p className="mt-2 text-sm leading-relaxed text-navy-700">{f.angles}</p>
      </div>
    </div>
  )
}

function LogicTab() {
  const l = SOLUTION.logic
  return (
    <div className="space-y-7">
      <p className="max-w-3xl text-sm leading-relaxed text-navy-600 md:text-base">{l.intro}</p>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* capture logic */}
        <div>
          <SubHeading>25 LED Image Capture Logic</SubHeading>
          <div className="mt-3 space-y-1.5">
            {l.captureFlow.map((r) => (
              <div
                key={r.led}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3.5 py-2 shadow-card"
              >
                <span className="w-20 shrink-0 font-mono text-xs font-semibold text-ledglow">
                  {r.led}
                </span>
                <Icon name="ArrowRight" className="h-3.5 w-3.5 shrink-0 text-electric-500" />
                <span className="text-xs text-navy-700">{r.img}</span>
              </div>
            ))}
          </div>
        </div>

        {/* defect visibility */}
        <div>
          <SubHeading>Defect Visibility Logic</SubHeading>
          <p className="mt-2 mb-3 text-sm leading-relaxed text-navy-600">{l.visibilityIntro}</p>
          <div className="space-y-1.5">
            {l.examples.map((e) => (
              <div
                key={e.defect}
                className="flex items-start gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs"
              >
                <span className="w-20 shrink-0 font-semibold text-navy-900">{e.defect}</span>
                <Icon name="ArrowRight" className="mt-0.5 h-3 w-3 shrink-0 text-electric-500" />
                <span className="text-navy-600">{e.effect}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* per-LED step flow */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
        <SubHeading>Per-LED Step Flow</SubHeading>
        <div className="mt-4">
          <FlowRow steps={l.stepFlow} />
        </div>
      </div>

      <Callout icon="Info">{l.note}</Callout>
    </div>
  )
}

function SafetyTab() {
  const s = SOLUTION.safety
  return (
    <div className="space-y-7">
      <p className="max-w-3xl text-sm leading-relaxed text-navy-600 md:text-base">{s.intro}</p>

      {/* architectures */}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
          <SubHeading>LED Power Architecture</SubHeading>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {s.powerArch.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-lg bg-ledglow/10 px-3 py-1.5 text-xs font-medium text-[#b45309]">
                  {step}
                </span>
                {i < s.powerArch.length - 1 && (
                  <Icon name="ArrowRight" className="h-3.5 w-3.5 text-ledglow" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
          <SubHeading>Control Architecture</SubHeading>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {s.controlArch.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-lg bg-electric-500/10 px-3 py-1.5 text-xs font-medium text-electric-600">
                  {step}
                </span>
                {i < s.controlArch.length - 1 && (
                  <Icon name="ArrowRight" className="h-3.5 w-3.5 text-electric-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Callout icon="ShieldAlert">{s.controlNote}</Callout>

      {/* full system + why dim */}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-surface-soft/50 p-5">
          <SubHeading>For the Full 25 LED System</SubHeading>
          <div className="mt-3">
            <Bullets items={s.fullSystem} icon="Dot" />
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-surface-soft/50 p-5">
          <SubHeading>Why DIM Control Is Preferred</SubHeading>
          <div className="mt-3">
            <Bullets items={s.whyDim} icon="ThumbsUp" />
          </div>
        </div>
      </div>

      {/* safety + maintenance */}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-success/20 bg-success/[0.04] p-5">
          <h4 className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-success">
            <Icon name="ShieldCheck" className="h-4 w-4" />
            Safety & Repeatability
          </h4>
          <Bullets items={s.safety} icon="Check" />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
          <h4 className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-navy-700">
            <Icon name="Wrench" className="h-4 w-4 text-electric-500" />
            Maintenance
          </h4>
          <p className="mb-3 text-xs text-navy-600">{s.maintenanceIntro}</p>
          <SubHeading>If a channel fails, check</SubHeading>
          <div className="mt-2">
            <Bullets items={s.maintenanceChecks} icon="Search" />
          </div>
        </div>
      </div>
    </div>
  )
}

const TAB_PANELS = {
  concept: ConceptTab,
  poc: PocTab,
  full: FullTab,
  logic: LogicTab,
  safety: SafetyTab,
}

// =================================================================
// Main section
// =================================================================
export default function ProposedSolution({ index = '04' }) {
  const [active, setActive] = useState('concept')
  const ActivePanel = TAB_PANELS[active]
  const activeTab = SOLUTION.tabs.find((t) => t.id === active)
  const showBadge = activeTab && (active === 'poc' || active === 'full')
  const badge = active === 'poc' ? SOLUTION.poc.badge : active === 'full' ? SOLUTION.full.badge : null
  const badgeClass =
    active === 'poc'
      ? 'border-electric-500/30 bg-electric-500/10 text-electric-600'
      : 'border-cyan-500/40 bg-cyan-500/10 text-cyan-600'

  return (
    <section id="solution" className="relative w-full px-5 py-24 sm:px-8 md:py-32 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
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
            {index} / Proposed Solution
          </span>
          <h2 className="max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.6rem]">
            {SOLUTION.title}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-navy-600 md:text-lg">
            {SOLUTION.subtitle}
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="-mx-1 mb-6 flex gap-2 overflow-x-auto px-1 pb-1"
        >
          {SOLUTION.tabs.map((t, i) => {
            const on = t.id === active
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  on
                    ? 'border-electric-500 bg-electric-500 text-white shadow-glow'
                    : 'border-slate-200 bg-white text-navy-600 shadow-card hover:border-electric-500/40 hover:text-electric-600'
                }`}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold opacity-70">
                  {i + 1}
                </span>
                <Icon name={t.icon} className="h-4 w-4" />
                {t.label}
              </button>
            )
          })}
        </motion.div>

        {/* Active panel */}
        <div className="rounded-2xl glass-strong p-6 md:p-8">
          {/* panel header with optional badge */}
          <div className="mb-6 flex items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex rounded-lg bg-electric-500/10 p-2 text-electric-500">
                <Icon name={activeTab.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider text-navy-700">
                {activeTab.label}
              </span>
            </div>
            {showBadge && (
              <span
                className={`shrink-0 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${badgeClass}`}
              >
                {badge}
              </span>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <ActivePanel />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 rounded-xl border-l-4 border-electric-500 bg-gradient-to-r from-surface-soft to-white px-6 py-6 text-center"
        >
          <p className="mx-auto max-w-4xl text-lg font-medium leading-relaxed text-navy-800 md:text-xl">
            The 25 LED system is not just a lighting setup. It is a{' '}
            <span className="font-bold text-electric-600">
              controlled, repeatable image-data generation system
            </span>{' '}
            for future AI-based defect detection.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

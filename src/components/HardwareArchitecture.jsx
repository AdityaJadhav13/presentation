import { useState } from 'react'
import { motion } from 'framer-motion'
import { HARDWARE } from '../data/presentationData'
import AlloyWheel from './AlloyWheel'
import Icon from './Icon'

// Kind → industrial color mapping (power=orange, control=blue, comm=purple,
// status=green, camera/mechanical=grey).
const KIND = {
  power: { text: 'text-sol-orange', border: 'border-sol-orange/35', soft: 'bg-sol-orange/[0.06]', dot: 'bg-sol-orange', hex: '#EA580C' },
  control: { text: 'text-electric-600', border: 'border-electric-500/35', soft: 'bg-electric-500/[0.06]', dot: 'bg-electric-500', hex: '#2563EB' },
  comm: { text: 'text-sol-purple', border: 'border-sol-purple/35', soft: 'bg-sol-purple/[0.06]', dot: 'bg-sol-purple', hex: '#7C3AED' },
  status: { text: 'text-sol-green', border: 'border-sol-green/35', soft: 'bg-sol-green/[0.06]', dot: 'bg-sol-green', hex: '#059669' },
  camera: { text: 'text-slate-500', border: 'border-slate-300', soft: 'bg-slate-50', dot: 'bg-slate-400', hex: '#64748B' },
}

// ---------- small reusable pieces ----------

/**
 * Component image box with automatic icon fallback.
 * Shows the real photo from /public/hardware/ when present; if the file is
 * missing or fails to load, falls back to the centered icon placeholder.
 * The box keeps the same fixed size for every card.
 */
function CompImage({ image, icon, kind, size = 'h-12 w-12' }) {
  const c = KIND[kind]
  const [ok, setOk] = useState(Boolean(image))
  return (
    <div
      className={`group/img relative ${size} shrink-0 overflow-hidden rounded-lg border bg-white shadow-card ${
        ok ? c.border : `border-dashed ${c.border} ${c.soft}`
      }`}
    >
      {ok ? (
        <img
          src={image}
          alt=""
          loading="lazy"
          onError={() => setOk(false)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <Icon name={icon} className={`h-5 w-5 ${c.text}`} />
        </div>
      )}
    </div>
  )
}

/** Hardware block: component image (or icon fallback) + title/sub. */
function HwBlock({ title, sub, icon, kind = 'control', image, withImageSlot = false }) {
  const c = KIND[kind]
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4 }}
      className={`flex items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-card ${c.border}`}
    >
      {withImageSlot ? (
        <CompImage image={image} icon={icon} kind={kind} />
      ) : (
        <span className={`inline-flex shrink-0 rounded-lg p-2 ${c.soft} ${c.text}`}>
          <Icon name={icon} className="h-5 w-5" />
        </span>
      )}
      <div className="min-w-0">
        <div className="text-sm font-semibold text-navy-900">{title}</div>
        {sub && <div className="mt-0.5 text-[11px] text-navy-600">{sub}</div>}
      </div>
    </motion.div>
  )
}

/** Numbered section card wrapper. */
function HwSection({ n, title, accent = 'control', children, note }) {
  const c = KIND[accent]
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-card backdrop-blur md:p-6"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white ${c.dot}`}>
          {n}
        </span>
        <h3 className="text-base font-bold text-navy-900 md:text-lg">{title}</h3>
      </div>
      {children}
      {note && (
        <p className={`mt-4 rounded-lg border-l-4 ${c.border} ${c.soft} px-4 py-2.5 text-xs font-medium text-navy-700`} style={{ borderLeftColor: c.hex }}>
          {note}
        </p>
      )}
    </motion.div>
  )
}

function MiniArrow({ kind = 'control', dashed = false, thick = false }) {
  const c = KIND[kind]
  return (
    <Icon
      name="ArrowRight"
      className={`hidden h-4 w-4 shrink-0 sm:block ${c.text}`}
      style={dashed ? { opacity: 0.7 } : thick ? { strokeWidth: 3 } : undefined}
    />
  )
}

function Chip({ children, kind = 'control' }) {
  const c = KIND[kind]
  return (
    <span className={`rounded-md border px-2.5 py-1 font-mono text-[11px] ${c.border} ${c.soft} ${c.text}`}>
      {children}
    </span>
  )
}

function KVList({ items, kind = 'power' }) {
  return (
    <div className="space-y-2">
      {items.map((it) => (
        <div key={it.k} className="flex items-center gap-3 border-b border-slate-100 pb-2 last:border-0 last:pb-0">
          {it.image !== undefined && (
            <CompImage image={it.image} icon="CircuitBoard" kind={kind} size="h-9 w-9" />
          )}
          <div className="flex min-w-0 flex-1 items-baseline justify-between gap-3">
            <span className="text-xs font-medium text-navy-700">{it.k}</span>
            <span className="text-right font-mono text-[11px] text-navy-600">{it.v}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// ---------- the 5x5 / circular LED lighting frame ----------
function LightingFrame() {
  const LEDS = 25
  const RADIUS = 43
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[340px]">
      <div className="absolute inset-0 rounded-full bg-electric-500/[0.05] blur-2xl" />
      {/* outer ring guide */}
      <div className="absolute inset-[8%] rounded-full border border-dashed border-slate-300" />
      {/* wheel */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AlloyWheel size={170} spokes={7} />
      </div>
      {/* camera in front */}
      <div className="absolute -bottom-1 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center">
        <div className="rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-center shadow-card">
          <Icon name="Camera" className="mx-auto h-4 w-4 text-slate-500" />
          <span className="text-[9px] font-semibold text-navy-700">Fixed Camera</span>
        </div>
      </div>
      {/* 25 LEDs around */}
      {Array.from({ length: LEDS }).map((_, i) => {
        const angle = (i / LEDS) * Math.PI * 2 - Math.PI / 2
        const x = 50 + Math.cos(angle) * RADIUS
        const y = 50 + Math.sin(angle) * RADIUS
        return (
          <motion.div
            key={i}
            className="absolute flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[7px] font-bold"
            style={{ left: `${x}%`, top: `${y}%`, background: '#F59E0B', color: '#0F172A' }}
            animate={{
              opacity: [0.3, 1, 0.3],
              boxShadow: ['0 0 0 rgba(245,158,11,0.2)', '0 0 14px rgba(245,158,11,0.9)', '0 0 0 rgba(245,158,11,0.2)'],
            }}
            transition={{ duration: LEDS * 0.16, repeat: Infinity, ease: 'easeInOut', times: [0, 0.5, 1], delay: i * 0.16 }}
          >
            {i + 1}
          </motion.div>
        )
      })}
    </div>
  )
}

export default function HardwareArchitecture() {
  const H = HARDWARE
  return (
    <section id="hardware" className="relative w-full px-5 py-24 sm:px-8 md:py-32 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8 md:mb-10"
        >
          <span className="section-label">
            <span className="h-px w-8 bg-electric-500/60" />
            06 / Hardware Architecture
          </span>
          <h2 className="max-w-4xl text-2xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-3xl lg:text-[2.4rem]">
            {H.title}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-navy-600 md:text-base">
            {H.subtitle}
          </p>
        </motion.div>

        {/* Legend */}
        <div className="mb-8 flex flex-wrap gap-x-5 gap-y-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-3 shadow-card backdrop-blur">
          {H.legend.map((l) => (
            <div key={l.label} className="flex items-center gap-2 text-xs text-navy-600">
              <span className="h-1 w-7 rounded" style={{ background: l.color }} />
              {l.label}
            </div>
          ))}
        </div>

        {/* ===== Sections grid ===== */}
        <div className="grid gap-5 lg:grid-cols-2">
          {/* 1. Power Input */}
          <HwSection n="1" title={H.power.title} accent="power" note={H.power.note}>
            <div className="space-y-2">
              {H.power.blocks.map((b, i) => (
                <div key={b.title} className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <div className="flex-1">
                    <HwBlock {...b} withImageSlot />
                  </div>
                  {i < H.power.blocks.length - 1 && <MiniArrow kind="power" thick />}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-slate-50 p-3">
              <KVList items={H.power.components} />
            </div>
          </HwSection>

          {/* 2. Logic Power */}
          <HwSection n="2" title={H.logic.title} accent="control" note={H.logic.note}>
            <div className="space-y-2">
              {H.logic.blocks.map((b, i) => (
                <div key={b.title} className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <div className="flex-1">
                    <HwBlock {...b} withImageSlot />
                  </div>
                  {i < H.logic.blocks.length - 1 && <MiniArrow kind={i === 0 ? 'power' : 'control'} />}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-slate-50 p-3">
              <KVList items={H.logic.components} />
            </div>
          </HwSection>

          {/* 3. Controller */}
          <HwSection n="3" title={H.controller.title} accent="control">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <HwBlock title="ESP32 DevKit" sub="Main controller" icon="Cpu" kind="control" image="/hardware/esp32.jpg" withImageSlot />
                <div className="mt-3 grid grid-cols-2 gap-1.5">
                  {H.controller.functions.map((f) => (
                    <span key={f} className="flex items-center gap-1.5 text-[11px] text-navy-700">
                      <span className="h-1 w-1 rounded-full bg-electric-500" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <HwBlock
                  title={H.controller.expander.title}
                  sub={H.controller.expander.sub}
                  icon="Network"
                  kind="control"
                  image="/hardware/mcp23017.jpg"
                  withImageSlot
                />
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {H.controller.expander.i2c.map((x) => (
                    <Chip key={x} kind="control">{x}</Chip>
                  ))}
                </div>
                <div className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-navy-600">
                  Stage 1 DIM Map
                </div>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {H.controller.stage1.map((x) => (
                    <Chip key={x} kind="status">{x}</Chip>
                  ))}
                </div>
              </div>
            </div>
          </HwSection>

          {/* 4. LED Driver channel */}
          <HwSection n="4" title={H.driver.title} accent="power">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-navy-600">
                One Channel Wiring
              </div>
              <div className="space-y-1">
                {H.driver.channel.map((c) => (
                  <div key={c.from + c.to} className="flex items-center gap-2 font-mono text-[11px]">
                    <span className="w-28 shrink-0 text-right text-navy-700">{c.from}</span>
                    <Icon name="ArrowRight" className="h-3 w-3 text-sol-orange" />
                    <span className="text-navy-600">{c.to}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {H.driver.logic.map((l) => (
                <Chip key={l} kind="status">{l}</Chip>
              ))}
            </div>
            <div className="mt-4">
              <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-navy-600">
                Why No MOSFET
              </div>
              <ul className="space-y-1">
                {H.driver.whyNoMosfet.map((w) => (
                  <li key={w} className="flex items-start gap-2 text-xs text-navy-700">
                    <Icon name="Check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sol-green" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 space-y-1.5">
              {H.driver.notes.map((nn) => (
                <p key={nn} className="rounded-lg border-l-4 border-sol-orange bg-sol-orange/[0.06] px-3 py-2 text-xs font-medium text-navy-700">
                  {nn}
                </p>
              ))}
            </div>
          </HwSection>

          {/* 5. Physical lighting arrangement — full width */}
          <div className="lg:col-span-2">
            <HwSection n="5" title={H.lighting.title} accent="status" note={H.lighting.note}>
              <div className="grid items-center gap-6 lg:grid-cols-[340px_minmax(0,1fr)]">
                <LightingFrame />
                <div className="space-y-4">
                  <div className="rounded-lg bg-slate-50 p-4">
                    <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-navy-600">
                      COB LED
                    </div>
                    <p className="font-mono text-xs text-navy-700">{H.lighting.cob}</p>
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-dashed border-slate-300 bg-white px-4 py-3">
                    <Icon name="Camera" className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                    <span className="text-xs text-navy-700">{H.lighting.cameraNote}</span>
                  </div>
                  <div>
                    <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-navy-600">
                      Capture Sequence
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {H.lighting.sequence.map((s, i) => (
                        <div key={s} className="flex items-center gap-2">
                          <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-[11px] text-navy-700 shadow-card">
                            {s}
                          </span>
                          {i < H.lighting.sequence.length - 1 && (
                            <Icon name="ChevronRight" className="h-3 w-3 text-slate-400" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* physical part image cards */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {H.lighting.parts.map((p) => (
                  <HwBlock key={p.title} {...p} withImageSlot />
                ))}
              </div>
            </HwSection>
          </div>

          {/* 6. Communication */}
          <HwSection n="6" title={H.comm.title} accent="comm" note={H.comm.note}>
            <div className="mb-3 flex flex-wrap gap-2">
              {H.comm.roles.map((r) => (
                <Chip key={r} kind="comm">{r}</Chip>
              ))}
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <HwBlock title="MAX3485 RS485" sub="On-board transceiver" icon="Microchip" kind="comm" image={H.comm.transceiverImage} withImageSlot />
              <HwBlock title="USB-RS485 Converter" sub="PC / dashboard side" icon="Usb" kind="comm" image={H.comm.converterImage} withImageSlot />
            </div>
            <div className="mt-3 space-y-1">
              {H.comm.connections.map((c) => (
                <div key={c} className="font-mono text-[11px] text-navy-700">{c}</div>
              ))}
            </div>
            <div className="mt-3 rounded-lg bg-slate-50 p-3">
              <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-navy-600">
                Termination & Bias
              </div>
              <ul className="space-y-1">
                {H.comm.termination.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-[11px] text-navy-700">
                    <span className="h-1 w-1 rounded-full bg-sol-purple" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </HwSection>

          {/* 7. RTC */}
          <HwSection n="7" title={H.rtc.title} accent="control" note={H.rtc.note}>
            <HwBlock title={H.rtc.module} sub="Time stamping & logging" icon="Clock" kind="control" image={H.rtc.image} withImageSlot />
            <div className="mt-3 flex flex-wrap gap-1.5">
              {H.rtc.connections.map((c) => (
                <Chip key={c} kind="control">{c}</Chip>
              ))}
            </div>
          </HwSection>

          {/* 8. Operator interface — full width */}
          <div className="lg:col-span-2">
            <HwSection n="8" title={H.operator.title} accent="status" note={H.operator.note}>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {H.operator.items.map((it) => (
                  <HwBlock key={it.title} {...it} withImageSlot />
                ))}
                <HwBlock {...H.operator.terminal} withImageSlot />
              </div>
            </HwSection>
          </div>
        </div>

        {/* 9. Safety notes + final principle */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-sol-green/25 bg-sol-green/[0.05] p-6"
          >
            <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-navy-900">
              <Icon name="ShieldCheck" className="h-5 w-5 text-sol-green" />
              Hardware Safety Notes
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {H.safety.map((s) => (
                <li key={s} className="flex items-start gap-2 text-xs text-navy-700">
                  <Icon name="Check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sol-green" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center rounded-2xl border-l-4 border-electric-500 bg-gradient-to-r from-surface-soft to-white p-6"
          >
            <h3 className="mb-3 text-base font-bold text-navy-900">Final LED Control Principle</h3>
            {H.principle.map((p) => (
              <p key={p} className="mb-2 font-mono text-xs leading-relaxed text-navy-700 md:text-sm">
                {p}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

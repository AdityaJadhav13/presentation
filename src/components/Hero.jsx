import { motion } from 'framer-motion'
import { HERO } from '../data/presentationData'
import AlloyWheel from './AlloyWheel'
import Icon from './Icon'

// LED ring positions around the wheel (5 LEDs)
const LED_COUNT = 5
const RADIUS = 165 // px from center within the 400px stage

function HeroVisual() {
  const leds = Array.from({ length: LED_COUNT })

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      {/* ambient glow */}
      <div className="absolute inset-0 rounded-full bg-electric-500/10 blur-3xl" />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <AlloyWheel size={300} spokes={8} />
      </motion.div>

      {/* LED ring */}
      <div className="absolute inset-0">
        {leds.map((_, i) => {
          const angle = (i / LED_COUNT) * Math.PI * 2 - Math.PI / 2
          const x = 50 + (Math.cos(angle) * RADIUS) / 4.4
          const y = 50 + (Math.sin(angle) * RADIUS) / 4.4
          return (
            <motion.div
              key={i}
              className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ left: `${x}%`, top: `${y}%`, background: '#F59E0B' }}
              animate={{
                opacity: [0.3, 1, 0.3],
                boxShadow: [
                  '0 0 0px rgba(245,158,11,0.2)',
                  '0 0 24px rgba(245,158,11,0.85)',
                  '0 0 0px rgba(245,158,11,0.2)',
                ],
                scale: [1, 1.35, 1],
              }}
              transition={{
                duration: LED_COUNT * 0.45,
                repeat: Infinity,
                ease: 'easeInOut',
                times: [0, 0.5, 1],
                delay: i * 0.45,
              }}
            />
          )
        })}
      </div>

      {/* Camera scan line sweeping vertically */}
      <div className="absolute inset-[12%] overflow-hidden rounded-full">
        <motion.div
          className="absolute left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-electric-400 to-transparent shadow-glow"
          animate={{ top: ['8%', '92%', '8%'] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Pulsing defect marker (upper-right of wheel) */}
      <motion.div
        className="absolute"
        style={{ left: '64%', top: '34%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <motion.span
          className="absolute -inset-2 rounded-full border border-defect/70"
          animate={{ scale: [1, 2.2, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        />
        <span className="block h-2.5 w-2.5 rounded-full bg-defect shadow-glow-red" />
      </motion.div>

      {/* Floating labels */}
      <FloatLabel className="left-[-6%] top-[6%]" text="LED Topology" delay={1.6} />
      <FloatLabel className="right-[-4%] top-[46%]" text="Camera Scan" delay={1.8} />
      <FloatLabel className="left-[58%] top-[20%]" text="Defect Point" delay={2} accent="red" />
    </div>
  )
}

function FloatLabel({ text, className, delay = 0, accent = 'blue' }) {
  const color =
    accent === 'red' ? 'border-defect/40 text-defect' : 'border-electric-500/40 text-electric-400'
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`absolute hidden rounded-full glass px-3 py-1 text-[10px] font-mono uppercase tracking-wider sm:block ${color} ${className}`}
    >
      {text}
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden px-5 py-28 sm:px-8 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left: copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            <span className="h-px w-8 bg-electric-500/60" />
            Industrial AI Inspection · Stage 1 POC
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-gradient">{HERO.title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-base text-navy-600 sm:text-lg leading-relaxed"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-4 py-2 text-sm font-medium text-electric-600"
          >
            <Icon name="Sparkles" className="h-4 w-4" />
            {HERO.heroLine}
          </motion.div>

          {/* Feature cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {HERO.cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 + i * 0.12 }}
                whileHover={{ y: -5 }}
                className="rounded-xl glass p-4 transition-all duration-300 hover:border-electric-500/40 hover:shadow-glow"
              >
                <div className="mb-3 inline-flex rounded-lg bg-electric-500/15 p-2 text-electric-400">
                  <Icon name={c.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-navy-900">{c.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-navy-600">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 font-mono text-xs text-slate-500"
          >
            {HERO.footer}
          </motion.p>
        </div>

        {/* Right: animated visual */}
        <div className="relative">
          <HeroVisual />
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, y: { duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <Icon name="ChevronDown" className="h-6 w-6" />
      </motion.div>
    </section>
  )
}

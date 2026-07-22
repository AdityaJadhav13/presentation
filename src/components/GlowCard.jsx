import { motion } from 'framer-motion'

/**
 * Reusable glassmorphism card with hover glow + scroll-in animation.
 * `accent` controls the glow color: 'blue' | 'red' | 'green' | 'yellow'
 */
const ACCENTS = {
  blue: 'hover:shadow-glow-lg hover:border-electric-500/40',
  red: 'hover:shadow-glow-red hover:border-defect/40',
  green: 'hover:shadow-glow-green hover:border-success/40',
  yellow: 'hover:shadow-glow-led hover:border-ledglow/40',
}

export default function GlowCard({
  children,
  accent = 'blue',
  delay = 0,
  className = '',
  hover = true,
  ...rest
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      whileHover={hover ? { y: -6 } : undefined}
      className={`group relative rounded-2xl glass p-6 transition-all duration-300 ${
        hover ? ACCENTS[accent] : ''
      } ${className}`}
      {...rest}
    >
      {/* top sheen */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-500/30 to-transparent" />
      {children}
    </motion.div>
  )
}

import { motion } from 'framer-motion'

/**
 * Reusable section shell.
 * - full-height-ish padded section with consistent layout
 * - animated label + heading + optional subtitle that fade/slide in on scroll
 */
export default function SectionWrapper({
  id,
  index,
  label,
  title,
  subtitle,
  children,
  className = '',
}) {
  return (
    <section
      id={id}
      className={`relative w-full px-5 sm:px-8 lg:px-16 py-24 md:py-32 ${className}`}
    >
      <div className="mx-auto max-w-7xl w-full">
        {(label || title) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12 md:mb-16"
          >
            {label && (
              <span className="section-label">
                <span className="h-px w-8 bg-electric-500/60" />
                {index ? `${index} / ` : ''}
                {label}
              </span>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900 max-w-4xl leading-[1.1]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-5 text-base md:text-lg text-navy-600 max-w-3xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

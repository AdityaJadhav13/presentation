import { motion } from 'framer-motion'
import Icon from './Icon'

/** Reusable block used in the system architecture diagram. */
const GROUP_STYLES = {
  control: 'border-electric-500/30 text-electric-400',
  comm: 'border-[#b482ff]/30 text-[#c4a3ff]',
  power: 'border-ledglow/30 text-ledglow',
  optics: 'border-success/30 text-success',
  ai: 'border-defect/30 text-defect',
}

export default function ArchitectureBlock({ block, index, isLast }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
        whileHover={{ scale: 1.03 }}
        className={`flex w-full items-center gap-3 rounded-xl glass border px-4 py-3.5 transition-all hover:shadow-glow ${
          GROUP_STYLES[block.group] || GROUP_STYLES.control
        }`}
      >
        <span className="font-mono text-[10px] text-slate-400">
          {String(block.id).padStart(2, '0')}
        </span>
        <Icon name={block.icon} className="h-5 w-5 shrink-0" />
        <span className="text-sm font-medium text-navy-900">{block.title}</span>
      </motion.div>

      {!isLast && (
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: (index % 4) * 0.08 + 0.15 }}
          className="my-1 flex h-6 origin-top items-center justify-center"
        >
          <span className="block h-full w-px bg-gradient-to-b from-electric-500/80 to-electric-500/20 glow-line" />
        </motion.div>
      )}
    </div>
  )
}

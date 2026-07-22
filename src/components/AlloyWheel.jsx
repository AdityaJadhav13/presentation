import { motion } from 'framer-motion'

/**
 * Reusable SVG alloy wheel with metallic gradient, rim, spokes, hub.
 * `spokes` controls the number of spokes. Pure SVG — no external images.
 */
export default function AlloyWheel({ size = 320, spokes = 7, className = '' }) {
  const cx = 100
  const cy = 100
  const spokeArr = Array.from({ length: spokes })

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Alloy wheel"
    >
      <defs>
        <radialGradient id="aw-metal" cx="42%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#e9f2ff" />
          <stop offset="35%" stopColor="#9fb6d4" />
          <stop offset="70%" stopColor="#4a5a78" />
          <stop offset="100%" stopColor="#1c2540" />
        </radialGradient>
        <radialGradient id="aw-hub" cx="40%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#dfe9ff" />
          <stop offset="100%" stopColor="#2a3656" />
        </radialGradient>
        <linearGradient id="aw-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#cdddf5" />
          <stop offset="50%" stopColor="#3a4a6b" />
          <stop offset="100%" stopColor="#0f1730" />
        </linearGradient>
      </defs>

      {/* Outer tire ring */}
      <circle cx={cx} cy={cy} r="92" fill="none" stroke="#0c1428" strokeWidth="12" />
      <circle cx={cx} cy={cy} r="92" fill="none" stroke="url(#aw-ring)" strokeWidth="4" />

      {/* Outer rim */}
      <circle cx={cx} cy={cy} r="80" fill="url(#aw-metal)" stroke="#0c1428" strokeWidth="2" />
      {/* Inner barrel */}
      <circle cx={cx} cy={cy} r="64" fill="#0d1426" stroke="#5d7196" strokeWidth="1.5" />

      {/* Spokes */}
      <g>
        {spokeArr.map((_, i) => {
          const a = (i / spokes) * Math.PI * 2 - Math.PI / 2
          const x1 = cx + Math.cos(a) * 18
          const y1 = cy + Math.sin(a) * 18
          const x2 = cx + Math.cos(a) * 62
          const y2 = cy + Math.sin(a) * 62
          return (
            <g key={i}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#aw-metal)"
                strokeWidth="9"
                strokeLinecap="round"
              />
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#c9dbf5"
                strokeWidth="1.4"
                strokeLinecap="round"
                opacity="0.6"
              />
            </g>
          )
        })}
      </g>

      {/* Center hub */}
      <circle cx={cx} cy={cy} r="20" fill="url(#aw-hub)" stroke="#0c1428" strokeWidth="2" />
      <circle cx={cx} cy={cy} r="7" fill="#0d1426" stroke="#7d92b8" strokeWidth="1" />
      {/* Lug nuts */}
      {Array.from({ length: 5 }).map((_, i) => {
        const a = (i / 5) * Math.PI * 2 - Math.PI / 2
        return (
          <circle
            key={i}
            cx={cx + Math.cos(a) * 13}
            cy={cy + Math.sin(a) * 13}
            r="2.2"
            fill="#aebfdd"
          />
        )
      })}

      {/* Rotating highlight to give a subtle metallic shimmer */}
      <motion.circle
        cx={cx}
        cy={cy}
        r="80"
        fill="none"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="3"
        strokeDasharray="40 460"
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: 'center' }}
      />
    </svg>
  )
}

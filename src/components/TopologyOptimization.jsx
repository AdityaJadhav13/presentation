import { motion } from 'framer-motion'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { TOPOLOGY_LEDS, TOPOLOGY_MESSAGE } from '../data/presentationData'
import SectionWrapper from './SectionWrapper'
import AlloyWheel from './AlloyWheel'
import Counter from './Counter'

const bestLed = TOPOLOGY_LEDS.reduce((a, b) => (b.score > a.score ? b : a))

function TopologyRing() {
  const RADIUS = 42 // % within the square stage
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[380px]">
      <div className="absolute inset-0 rounded-full bg-electric-500/10 blur-3xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <AlloyWheel size={230} spokes={7} />
      </div>

      {TOPOLOGY_LEDS.map((led, i) => {
        const angle = (i / TOPOLOGY_LEDS.length) * Math.PI * 2 - Math.PI / 2
        const x = 50 + Math.cos(angle) * RADIUS
        const y = 50 + Math.sin(angle) * RADIUS
        const isBest = led.id === bestLed.id
        // brightness scales with score
        const glow = led.score / 100
        return (
          <motion.div
            key={led.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
          >
            <motion.div
              className="flex h-11 w-11 items-center justify-center rounded-full text-xs font-bold"
              style={{
                background: isBest ? '#F59E0B' : `rgba(245,158,11,${0.3 + glow * 0.5})`,
                color: isBest ? '#fff' : '#0F172A',
                boxShadow: `0 0 ${glow * 26}px rgba(245,158,11,${glow * 0.7})`,
              }}
              animate={
                isBest
                  ? { scale: [1, 1.12, 1], boxShadow: [
                      '0 4px 16px rgba(245,158,11,0.5)',
                      '0 6px 30px rgba(245,158,11,0.8)',
                      '0 4px 16px rgba(245,158,11,0.5)',
                    ] }
                  : {}
              }
              transition={{ duration: 2, repeat: Infinity }}
            >
              {led.id}
            </motion.div>
            <div
              className={`absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] ${
                isBest ? 'text-ledglow' : 'text-navy-600'
              }`}
            >
              <Counter value={led.score} suffix="%" />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

const CHART_DATA = TOPOLOGY_LEDS.map((l) => ({ name: `LED ${l.id}`, score: l.score, id: l.id }))

export default function TopologyOptimization() {
  return (
    <SectionWrapper
      id="topology"
      index="09"
      label="Topology Optimization Engine"
      title="Learning which LED angle reveals the most."
      subtitle="Topology = LED placement and lighting sequence around the wheel. The engine ranks each position by defect-visibility performance."
    >
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <TopologyRing />

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-lg text-navy-700"
          >
            {TOPOLOGY_MESSAGE}
          </motion.p>

          {/* score chart */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass p-5"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-electric-400">
              Defect-Visibility Score by LED
            </h3>
            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CHART_DATA} margin={{ top: 8, right: 8, left: -22, bottom: 0 }}>
                  <XAxis
                    dataKey="name"
                    tick={{ fill: '#475569', fontSize: 11 }}
                    axisLine={{ stroke: '#e2e8f0' }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fill: '#475569', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: 'rgba(37,99,235,0.06)' }}
                    contentStyle={{
                      background: '#ffffff',
                      border: '1px solid rgba(37,99,235,0.25)',
                      borderRadius: 10,
                      color: '#0F172A',
                      fontSize: 12,
                      boxShadow: '0 8px 30px rgba(15,23,42,0.12)',
                    }}
                  />
                  <Bar dataKey="score" radius={[6, 6, 0, 0]} maxBarSize={46}>
                    {CHART_DATA.map((d) => (
                      <Cell
                        key={d.id}
                        fill={d.id === bestLed.id ? '#F59E0B' : '#2563EB'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 text-center text-xs text-slate-500">
              <span className="font-semibold text-ledglow">LED {bestLed.id}</span> wins at{' '}
              {bestLed.score}% — the system prioritizes it.
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

import { motion } from 'framer-motion'
import { DASHBOARD } from '../data/presentationData'
import Icon from './Icon'

const LOG_COLORS = {
  info: 'text-navy-600',
  led: 'text-ledglow',
  warn: 'text-defect',
  ok: 'text-success',
}

/** Realistic dark-UI dashboard mockup for the embedded control system. */
export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card-lg backdrop-blur-xl"
    >
      {/* title bar */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-defect/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-ledglow/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          <span className="ml-3 font-mono text-xs text-navy-600">
            AW4W · LED Control Dashboard
          </span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[10px] font-medium text-success">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
          CONNECTED
        </span>
      </div>

      <div className="grid gap-4 p-5 lg:grid-cols-3">
        {/* Connection + Monitor */}
        <div className="space-y-4">
          <Panel icon="Plug" title="Connection">
            {DASHBOARD.connection.map((r) => (
              <Row key={r.k} k={r.k} v={r.v} />
            ))}
          </Panel>

          <Panel icon="Activity" title="System Monitoring">
            {DASHBOARD.monitor.map((r) => (
              <Row key={r.k} k={r.k} v={r.v} good={r.good} />
            ))}
          </Panel>
        </div>

        {/* LED status + controls */}
        <div className="space-y-4">
          <Panel icon="LightbulbOff" title="LED Visual Status">
            <div className="flex items-center justify-between gap-2 py-1">
              {[1, 2, 3, 4, 5].map((n) => {
                const active = n === 3
                return (
                  <div key={n} className="flex flex-col items-center gap-1.5">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-all ${
                        active
                          ? 'bg-ledglow text-navy-900 shadow-glow-led'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {n}
                    </div>
                    <span
                      className={`text-[9px] ${active ? 'text-ledglow' : 'text-slate-400'}`}
                    >
                      {active ? 'ON' : 'OFF'}
                    </span>
                  </div>
                )
              })}
            </div>
          </Panel>

          <Panel icon="Settings2" title="Sequence Control">
            <div className="grid grid-cols-2 gap-2">
              <FakeBtn icon="Play" label="Auto Sequence" active />
              <FakeBtn icon="Hand" label="Manual LED" />
              <FakeBtn icon="Pause" label="Pause" />
              <FakeBtn icon="RotateCcw" label="Reset" />
            </div>
          </Panel>

          <Panel icon="ShieldAlert" title="Fault / Emergency" danger>
            <div className="flex items-center justify-between">
              <span className="text-xs text-navy-600">Status</span>
              <span className="text-xs font-semibold text-success">No Fault</span>
            </div>
            <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-defect/40 bg-defect/10 py-2 text-xs font-bold text-defect">
              <Icon name="OctagonAlert" className="h-4 w-4" />
              EMERGENCY STOP
            </button>
          </Panel>
        </div>

        {/* Event log */}
        <div>
          <Panel icon="ScrollText" title="Event Log" full>
            <div className="space-y-1.5 font-mono text-[11px]">
              {DASHBOARD.log.map((l, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-slate-400">{l.t}</span>
                  <span className={LOG_COLORS[l.type]}>{l.m}</span>
                </div>
              ))}
            </div>
            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-electric-500/30 bg-electric-500/10 py-2 text-xs font-medium text-electric-600 transition-colors hover:bg-electric-500/20">
              <Icon name="Download" className="h-3.5 w-3.5" />
              Export CSV
            </button>
          </Panel>
        </div>
      </div>
    </motion.div>
  )
}

function Panel({ icon, title, children, danger, full }) {
  return (
    <div
      className={`rounded-xl border bg-slate-50 p-4 ${
        danger ? 'border-defect/20' : 'border-slate-200'
      } ${full ? 'h-full' : ''}`}
    >
      <div className="mb-3 flex items-center gap-2">
        <Icon
          name={icon}
          className={`h-4 w-4 ${danger ? 'text-defect' : 'text-electric-400'}`}
        />
        <h4 className="text-xs font-semibold uppercase tracking-wider text-navy-700">
          {title}
        </h4>
      </div>
      <div className="space-y-1.5">{children}</div>
    </div>
  )
}

function Row({ k, v, good }) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className="text-slate-500">{k}</span>
      <span className={`font-mono font-medium ${good ? 'text-success' : 'text-navy-800'}`}>
        {v}
      </span>
    </div>
  )
}

function FakeBtn({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-2 text-[11px] font-medium ${
        active
          ? 'border-electric-500/40 bg-electric-500/15 text-electric-600'
          : 'border-slate-200 bg-slate-50 text-navy-600'
      }`}
    >
      <Icon name={icon} className="h-3.5 w-3.5" />
      {label}
    </div>
  )
}

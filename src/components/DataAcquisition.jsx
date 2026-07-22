import { motion } from 'framer-motion'
import { DATA_ACQ } from '../data/presentationData'
import Icon from './Icon'

const D = DATA_ACQ

// ============================================================
// Reusable building blocks (scroll-in, light mode)
// ============================================================

/** A numbered scroll block with heading. */
function Block({ n, title, icon, children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`scroll-mt-24 ${className}`}
    >
      <div className="mb-5 flex items-center gap-3">
        {n && (
          <span className="font-mono text-sm font-bold text-electric-500/70">{n}</span>
        )}
        {icon && (
          <span className="inline-flex rounded-lg bg-electric-500/10 p-2 text-electric-500">
            <Icon name={icon} className="h-5 w-5" />
          </span>
        )}
        <h3 className="text-xl font-bold text-navy-900 md:text-2xl">{title}</h3>
      </div>
      {children}
    </motion.div>
  )
}

function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-card md:p-6 ${className}`}>
      {children}
    </div>
  )
}

function SubHeading({ children, icon }) {
  return (
    <h4 className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-electric-600">
      {icon && <Icon name={icon} className="h-3.5 w-3.5" />}
      {children}
    </h4>
  )
}

function Bullets({ items, icon = 'Check', cols = 1 }) {
  return (
    <ul className={`grid gap-2 ${cols === 2 ? 'sm:grid-cols-2' : cols === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : ''}`}>
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
    green: 'border-sol-green/30 bg-sol-green/[0.07] text-sol-green',
    purple: 'border-sol-purple/30 bg-sol-purple/[0.07] text-sol-purple',
    red: 'border-defect/30 bg-defect/[0.06] text-defect',
  }[tone]
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((x) => (
        <span key={x} className={`rounded-full border px-2.5 py-1 text-xs font-medium ${cls}`}>{x}</span>
      ))}
    </div>
  )
}

function CodeCard({ title, code }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
      {title && (
        <div className="border-b border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-navy-600">
          {title}
        </div>
      )}
      <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed text-navy-700">{code}</pre>
    </div>
  )
}

function KV({ data, accent = 'blue' }) {
  const border = accent === 'red' ? 'border-defect/30 bg-defect/[0.04]' : 'border-slate-200 bg-white'
  return (
    <div className={`rounded-2xl border p-5 shadow-card ${border}`}>
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

function Callout({ children, icon = 'Info', tone = 'blue' }) {
  const tones = {
    blue: { border: 'border-electric-500', from: 'from-surface-soft', ic: 'text-electric-500' },
    red: { border: 'border-defect', from: 'from-defect/[0.05]', ic: 'text-defect' },
    amber: { border: 'border-ledglow', from: 'from-ledglow/[0.06]', ic: 'text-ledglow' },
    green: { border: 'border-sol-green', from: 'from-sol-green/[0.06]', ic: 'text-sol-green' },
  }[tone]
  return (
    <div className={`flex items-start gap-3 rounded-xl border-l-4 bg-gradient-to-r to-white px-5 py-4 ${tones.border} ${tones.from}`}>
      <Icon name={icon} className={`mt-0.5 h-5 w-5 shrink-0 ${tones.ic}`} />
      <p className="text-sm font-medium leading-relaxed text-navy-800">{children}</p>
    </div>
  )
}

/** Horizontal step flow (wraps; arrows between). */
function Flow({ steps, icons }) {
  return (
    <div className="flex flex-col items-stretch gap-2 lg:flex-row lg:flex-wrap lg:items-stretch">
      {steps.map((label, i) => (
        <div key={label + i} className="flex items-center gap-2 lg:flex-1">
          <div className="flex w-full flex-1 items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-center shadow-card">
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

// ============================================================
// 25-image strip visual (1 wheel → 25 LED images)
// ============================================================
function LedImageStrip() {
  return (
    <div className="grid grid-cols-5 gap-2 sm:grid-cols-10 lg:grid-cols-[repeat(13,minmax(0,1fr))]">
      {Array.from({ length: 25 }).map((_, i) => {
        const angle = (i / 25) * Math.PI * 2
        const lx = 50 + Math.cos(angle) * 32
        const ly = 50 + Math.sin(angle) * 32
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            className="relative aspect-square overflow-hidden rounded-md border border-slate-200"
            style={{ background: `radial-gradient(circle at ${lx}% ${ly}%, #cdddf5 0%, #4a5f86 55%, #1c2740 100%)` }}
          >
            <span className="absolute left-0.5 top-0.5 rounded bg-black/40 px-1 font-mono text-[7px] text-ledglow">
              {String(i + 1).padStart(2, '0')}
            </span>
          </motion.div>
        )
      })}
    </div>
  )
}

// ============================================================
// Section
// ============================================================
export default function DataAcquisition() {
  return (
    <section id="data" className="relative w-full px-5 py-24 sm:px-8 md:py-32 lg:px-16">
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
            07 / Data Acquisition & Feature Engineering
          </span>
          <h2 className="max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.6rem]">
            {D.title}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-navy-600 md:text-lg">{D.subtitle}</p>
          <div className="mt-6 rounded-xl border-l-4 border-electric-500 bg-gradient-to-r from-surface-soft to-white px-5 py-3 font-mono text-xs text-navy-700 md:text-sm">
            {D.oneLiner}
          </div>
        </motion.div>

        <div className="space-y-16">
          {/* 7.1 Purpose */}
          <Block n="7.1" title={D.purpose.heading} icon="Target">
            <p className="mb-5 max-w-3xl text-sm leading-relaxed text-navy-600 md:text-base">{D.purpose.intro}</p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <SubHeading icon="ListChecks">This stage focuses on</SubHeading>
                <div className="mt-3"><Bullets items={D.purpose.focus} /></div>
              </Card>
              <div className="space-y-3">
                {D.purpose.twoMeanings.map((m) => (
                  <Card key={m.k} className="flex items-start gap-3">
                    <span className="inline-flex shrink-0 rounded-lg bg-electric-500/10 p-2.5 text-electric-500">
                      <Icon name={m.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-navy-900">{m.k}</div>
                      <div className="text-sm text-navy-600">{m.v}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Block>

          {/* 7.2-7.3 Why 25 images */}
          <Block n="7.3" title="Why 25 Images Per Wheel" icon="Images">
            <p className="mb-5 max-w-3xl text-sm leading-relaxed text-navy-600 md:text-base">
              A defect may not be visible under every lighting angle, so we collect 25 instead of relying on one image.
            </p>
            <div className="mb-5"><LedImageStrip /></div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <SubHeading icon="Sparkles">This helps in</SubHeading>
                <div className="mt-3"><Bullets items={D.purpose.whyMulti} /></div>
              </Card>
              <Card>
                <SubHeading icon="Lightbulb">Defect vs best angle</SubHeading>
                <div className="mt-3 space-y-2">
                  {D.purpose.defectAngles.map((d) => (
                    <div key={d.defect} className="flex items-center gap-3 text-sm">
                      <span className="w-24 shrink-0 font-semibold text-navy-900">{d.defect}</span>
                      <Icon name="ArrowRight" className="h-3.5 w-3.5 text-electric-500" />
                      <span className="text-navy-600">{d.angle}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </Block>

          {/* 7.4 Capture sequence */}
          <Block n="7.4" title="Image Capture Sequence" icon="ListOrdered">
            <Card>
              <ol className="space-y-2">
                {D.captureSequence.map((s, i) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-navy-700">
                    <span className="font-mono text-xs font-bold text-electric-500">{i + 1}.</span>
                    {s}
                  </li>
                ))}
              </ol>
            </Card>
            <div className="mt-4"><Callout icon="Info">{D.captureNote}</Callout></div>
          </Block>

          {/* 7.5-7.6 metadata + naming */}
          <Block n="7.5" title="What to Save With Each Image" icon="Tag">
            <div className="grid gap-4 lg:grid-cols-2">
              <Card>
                <SubHeading icon="ListChecks">Save for every image</SubHeading>
                <div className="mt-3"><Chips items={D.metadata} /></div>
                <div className="mt-4">
                  <SubHeading icon="FileText">Naming format</SubHeading>
                  <div className="mt-2 rounded-md bg-slate-50 px-3 py-2 font-mono text-[11px] text-navy-700">{D.namingFormat}</div>
                  <div className="mt-2 space-y-1">
                    {D.namingExamples.map((e) => (
                      <div key={e} className="font-mono text-[11px] text-navy-600">{e}</div>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-navy-600">
                    <span className="font-semibold text-navy-900">Pro: </span>{D.namingPro} — {D.namingProNote}
                  </p>
                </div>
              </Card>
              <KV data={D.metadataExample} />
            </div>
          </Block>

          {/* 7.7-7.8 folder + labels */}
          <Block n="7.7" title="Dataset Structure & Label Files" icon="FolderTree">
            <div className="grid gap-4 lg:grid-cols-2">
              <CodeCard title="Recommended folder structure" code={D.folderStructure} />
              <div className="space-y-4">
                <CodeCard title="label.json — Defective" code={D.labelDefective} />
                <CodeCard title="label.json — OK" code={D.labelOk} />
              </div>
            </div>
          </Block>

          {/* 7.9-7.11 controlled conditions */}
          <Block n="7.9" title="Controlled Capture Conditions" icon="Settings2">
            <div className="grid gap-4 md:grid-cols-3">
              {D.controls.map((c) => (
                <Card key={c.title} className="flex flex-col">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="inline-flex rounded-lg bg-electric-500/10 p-2 text-electric-500">
                      <Icon name={c.icon} className="h-4 w-4" />
                    </span>
                    <h4 className="text-sm font-bold text-navy-900">{c.title}</h4>
                  </div>
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {c.items.map((it) => (
                      <span key={it} className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] text-navy-700">{it}</span>
                    ))}
                  </div>
                  <p className="mt-auto rounded-lg bg-slate-50 px-3 py-2 text-xs leading-relaxed text-navy-600">{c.why}</p>
                </Card>
              ))}
            </div>
          </Block>

          {/* 7.12-7.13 quality + raw/processed */}
          <Block n="7.12" title="Image Quality Check · Raw vs Processed" icon="CheckCheck">
            <div className="grid gap-4 lg:grid-cols-2">
              <Card>
                <SubHeading icon="ScanLine">Quality check flags</SubHeading>
                <div className="mt-3"><Chips items={D.qualityChecks} tone="red" /></div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-md bg-sol-green/10 px-2 py-1 font-mono text-sol-green">Image Quality: PASS</span>
                  <span className="rounded-md bg-defect/10 px-2 py-1 font-mono text-defect">FAIL — Blur detected</span>
                </div>
              </Card>
              <div className="grid gap-3">
                {D.rawVsProcessed.map((r) => (
                  <Card key={r.title} className="flex items-start gap-3">
                    <span className="inline-flex shrink-0 rounded-lg bg-electric-500/10 p-2.5 text-electric-500">
                      <Icon name={r.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-navy-900">{r.title}</div>
                      <p className="mt-1 text-xs leading-relaxed text-navy-600">{r.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Block>

          {/* 7.14-7.21 preprocessing */}
          <Block n="7.14" title="Preprocessing & Feature Engineering Basics" icon="SlidersHorizontal">
            <p className="mb-5 max-w-3xl text-sm leading-relaxed text-navy-600 md:text-base">
              Feature engineering means creating useful information from raw images. Deep models learn many features
              automatically, but we still do basic feature engineering through preprocessing and multi-light comparison.
            </p>
            <Card className="mb-5">
              <SubHeading icon="Workflow">Preprocessing flow</SubHeading>
              <div className="mt-4"><Flow steps={D.preprocessFlow} /></div>
            </Card>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {D.preprocessSteps.map((s) => (
                <Card key={s.title}>
                  <div className="mb-2 flex items-center gap-2">
                    <Icon name={s.icon} className="h-4 w-4 text-electric-500" />
                    <h4 className="text-sm font-bold text-navy-900">{s.title}</h4>
                  </div>
                  <p className="text-xs leading-relaxed text-navy-600">{s.desc}</p>
                </Card>
              ))}
            </div>
          </Block>

          {/* 7.22-7.23 classical features */}
          <Block n="7.22" title="Edge & Texture Features" icon="Spline">
            <div className="grid gap-4 md:grid-cols-2">
              {D.classicalFeatures.map((c) => (
                <Card key={c.title} className="flex items-start gap-3">
                  <span className="inline-flex shrink-0 rounded-lg bg-electric-500/10 p-2.5 text-electric-500">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-navy-900">{c.title}</div>
                    <p className="mt-1 text-xs leading-relaxed text-navy-600">{c.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Block>

          {/* 7.24-7.30 multi-light feature engineering */}
          <Block n="7.24" title="Multi-Light Feature Engineering" icon="Layers">
            <div className="mb-5"><Callout icon="Sparkles" tone="blue">{D.multiLight.intro}</Callout></div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {D.multiLight.maps.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all hover:shadow-card-lg hover:border-electric-500/40"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-flex rounded-lg bg-electric-500/10 p-2 text-electric-500">
                      <Icon name={m.icon} className="h-4 w-4" />
                    </span>
                    <h4 className="text-sm font-bold text-navy-900">{m.title}</h4>
                  </div>
                  <code className="mb-2 inline-block rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-electric-600">{m.formula}</code>
                  <p className="text-xs leading-relaxed text-navy-600">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </Block>

          {/* 7.31 feature table */}
          <Block n="7.31" title="Per-Wheel Feature Summary" icon="Table">
            <Card className="overflow-hidden p-0">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wider text-navy-600">
                    <th className="px-5 py-3 font-semibold">Feature</th>
                    <th className="px-5 py-3 font-semibold">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {D.featureTable.map((row) => (
                    <tr key={row.f} className="border-b border-slate-100 last:border-0">
                      <td className="px-5 py-2.5 font-medium text-navy-900">{row.f}</td>
                      <td className="px-5 py-2.5 text-navy-600">{row.m}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </Block>

          {/* 7.32-7.33 split + annotation */}
          <Block n="7.32" title="Dataset Splitting & Annotation" icon="Split">
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="space-y-3">
                <Card className="border-sol-green/25 bg-sol-green/[0.05]">
                  <SubHeading icon="CircleCheck">Correct — split by Wheel ID</SubHeading>
                  <div className="mt-3"><Bullets items={D.split.correct} icon="Check" /></div>
                </Card>
                <Callout icon="TriangleAlert" tone="red">{D.split.wrong}</Callout>
              </div>
              <Card>
                <SubHeading icon="Tag">Annotation order</SubHeading>
                <div className="mt-3 space-y-2">
                  {D.annotation.map((a) => (
                    <div key={a.task} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 shadow-card">
                      <span className="rounded-md bg-electric-500/10 px-2 py-0.5 text-[10px] font-bold text-electric-600">{a.step}</span>
                      <div className="text-sm">
                        <span className="font-semibold text-navy-900">{a.task}: </span>
                        <span className="text-navy-600">{a.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </Block>

          {/* 7.34-7.35 augmentation + imbalance */}
          <Block n="7.34" title="Augmentation & Class Imbalance" icon="Scale">
            <div className="grid gap-4 lg:grid-cols-2">
              <Card>
                <SubHeading icon="Wand2">Data augmentation</SubHeading>
                <div className="mt-3"><Chips items={D.augmentation} tone="green" /></div>
                <div className="mt-3"><Callout icon="TriangleAlert" tone="amber">{D.augNote}</Callout></div>
              </Card>
              <Card>
                <SubHeading icon="Scale">Class imbalance</SubHeading>
                <p className="mt-2 text-sm text-navy-700">{D.imbalance.note}</p>
                <div className="mt-3"><Bullets items={D.imbalance.solutions} cols={2} /></div>
                <p className="mt-3 rounded-lg bg-defect/[0.06] px-3 py-2 text-xs font-medium text-defect">{D.imbalance.emphasis}</p>
              </Card>
            </div>
          </Block>

          {/* 7.36 quality rules */}
          <Block n="7.36" title="Data Quality Rules" icon="ShieldCheck">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-sol-green/25 bg-sol-green/[0.05]">
                <SubHeading icon="CircleCheck">Good dataset rules</SubHeading>
                <div className="mt-3"><Bullets items={D.goodRules} icon="Check" /></div>
              </Card>
              <Card className="border-defect/20 bg-defect/[0.04]">
                <h4 className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-defect">
                  <Icon name="OctagonAlert" className="h-3.5 w-3.5" />
                  Bad dataset problems
                </h4>
                <ul className="mt-3 space-y-2">
                  {D.badProblems.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-navy-700">
                      <Icon name="X" className="mt-0.5 h-4 w-4 shrink-0 text-defect" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Block>

          {/* 7.37 final output */}
          <Block n="7.37" title="Final ML-Ready Dataset Output" icon="PackageCheck">
            <div className="grid gap-4 lg:grid-cols-2">
              <Card>
                <SubHeading icon="ListChecks">At the end we should have</SubHeading>
                <div className="mt-3"><Bullets items={D.finalOutput} cols={2} /></div>
              </Card>
              <Card>
                <SubHeading icon="BrainCircuit">Ready for</SubHeading>
                <div className="mt-3"><Chips items={D.finalReadyFor} /></div>
              </Card>
            </div>
          </Block>

          {/* 7.38 final flow */}
          <Block n="7.38" title="Final Flow Summary" icon="Workflow">
            <Card>
              <Flow steps={D.finalFlow.map((f) => f.label)} icons={D.finalFlow.map((f) => f.icon)} />
            </Card>
          </Block>

          {/* 7.39 closing */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border-l-4 border-electric-500 bg-gradient-to-r from-surface-soft to-white p-6 md:p-8"
          >
            <h3 className="mb-3 text-base font-bold text-navy-900">In Summary</h3>
            <p className="max-w-4xl text-sm leading-relaxed text-navy-700 md:text-base">{D.closing}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

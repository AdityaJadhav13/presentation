# AI-Driven Dynamic Lighting System — Alloy Wheel Defect Detection

A premium, interactive React presentation website for the industrial AI inspection project
(AW4W Line Quality Inspection · Stage 1 POC).

Built with **React + Vite + Tailwind CSS + Framer Motion + Lucide React + Recharts**.

## Run locally

```bash
npm install      # install dependencies (already done)
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Project structure

```
src/
 ├── components/
 │    ├── SectionWrapper.jsx       # reusable section shell + scroll-in heading
 │    ├── GlowCard.jsx             # reusable glassmorphism card w/ hover glow
 │    ├── ArchitectureBlock.jsx    # reusable system-architecture block
 │    ├── AlloyWheel.jsx           # pure-SVG metallic alloy wheel (reused)
 │    ├── Counter.jsx              # count-up-on-scroll number animation
 │    ├── Icon.jsx                 # Lucide icon resolver (by string name)
 │    ├── Dashboard.jsx            # dark-UI control dashboard mockup
 │    ├── Navigation.jsx           # side nav + top progress bar
 │    ├── Hero.jsx                 # 01 animated wheel + LED ring + scan line
 │    ├── IndustryProblem.jsx      # 02 before/after lighting visual
 │    ├── ExistingSolutions.jsx    # 03 limitation cards
 │    ├── ProposedSolution.jsx     # 04 animated flow diagram
 │    ├── SystemArchitecture.jsx   # 05 architecture + spec + dashboard
 │    ├── HardwareArchitecture.jsx # 06 colored power/signal/comm/fault flow
 │    ├── DataAcquisition.jsx      # 07 five LED image cards + features
 │    ├── MLLayer.jsx              # 08 ML pipeline + result card
 │    ├── TopologyOptimization.jsx # 09 circular LED topology + bar chart
 │    ├── DynamicReconfiguration.jsx # 10 default→optimized + feedback loop
 │    ├── Scalability.jsx          # 11 roadmap timeline
 │    └── ImpactRoadmap.jsx        # 12 impact cards + closing CTA
 │
 ├── data/
 │    └── presentationData.js      # ALL text/content/data lives here
 │
 ├── App.jsx                       # assembles all sections + background
 ├── main.jsx
 └── index.css                     # Tailwind + theme utilities
```

## Customization notes

- **All copy and numbers** live in `src/data/presentationData.js` — edit there, not in components.
- **Theme colors** (electric blue, defect red, LED glow, success green) are defined in
  `tailwind.config.js` under `theme.extend.colors`. Change them once, applies everywhere.
- **LED scores / sequences** — edit `TOPOLOGY_LEDS`, `LED_IMAGES`, `RECONFIG` in the data file.
- **Dashboard values** (baud rate, slave ID, active LED, etc.) — edit `DASHBOARD` in the data file.
- **Add/remove sections** — update the `SECTIONS` array (drives the navigation) and mount the
  component in `App.jsx`.
- Fonts (Inter + JetBrains Mono) load from Google Fonts in `index.html`.

## Notes
- The Recharts bundle-size warning at build time is expected and harmless for a presentation site.
- Fully responsive: side nav on desktop, bottom dot-indicator on mobile.

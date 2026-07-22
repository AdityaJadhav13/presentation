// =====================================================================
// Central content store for the entire presentation.
// Keeping all copy / data here keeps components clean and reusable.
// =====================================================================

export const SECTIONS = [
  { id: 'hero', label: 'Overview', short: '01' },
  { id: 'problem', label: 'The Problem', short: '02' },
  { id: 'existing', label: 'Existing Solutions', short: '03' },
  { id: 'solution', label: 'Proposed Solution', short: '04' },
  { id: 'system', label: 'System Architecture', short: '05' },
  { id: 'hardware', label: 'Hardware Architecture', short: '06' },
  { id: 'data', label: 'Data Acquisition', short: '07' },
  { id: 'ml', label: 'ML Intelligence', short: '08' },
  { id: 'topology', label: 'Topology Engine', short: '09' },
  { id: 'reconfig', label: 'Reconfiguration', short: '10' },
  { id: 'scalability', label: 'Scalability', short: '11' },
  { id: 'impact', label: 'Impact & Roadmap', short: '12' },
]

// ---------------------- Hero ----------------------
export const HERO = {
  title: 'AI-Driven Dynamic Lighting System for Alloy Wheel Defect Detection',
  subtitle:
    'A reconfigurable vision-based inspection system using controlled LED illumination, embedded control, and machine learning intelligence.',
  heroLine: 'From manual visual inspection to adaptive AI-assisted quality control.',
  footer:
    'AW4W Line Quality Inspection  |  Stage 1 POC: 5 LED Control → Future Scalable AI Inspection System',
  cards: [
    {
      icon: 'Lightbulb',
      title: 'Dynamic Lighting',
      desc: 'Reveal hidden defects using controlled LED angles.',
    },
    {
      icon: 'ScanEye',
      title: 'AI Vision Intelligence',
      desc: 'Detect, classify, and localize surface defects from captured images.',
    },
    {
      icon: 'Cpu',
      title: 'Industrial Control Ready',
      desc: 'Dashboard control, Modbus RS485 communication, event logging, safety monitoring, and future PLC integration.',
    },
  ],
}

// ---------------------- Problem (Section 2) ----------------------
export const PROBLEM = {
  title: 'The Industry Problem',
  subtitle:
    'Alloy wheels have multiple defect categories, but our project focuses on surface and cosmetic defects that depend strongly on lighting visibility.',
  theoryTitle: 'Why Detection Is Difficult',
  theory: [
    'Alloy wheel inspection is not a single-defect problem. The wheel can have surface defects, paint defects, casting defects, and dimensional defects.',
    'Each defect type needs a different detection approach. For our current project, the focus is on surface and cosmetic defects that can be improved using controlled lighting and camera vision.',
    'The key challenge is visibility: a defect must first become clearly visible before AI can detect it.',
    'Because alloy wheels are glossy, curved, and reflective, the same defect may be visible from one LED angle and hidden from another.',
  ],
  highlight: {
    label: 'Our Focus',
    title: 'Surface + Cosmetic Defects',
    sub: 'using Dynamic LED Lighting and Camera Vision',
  },
  coreLabel: 'Core Problem',
  core: 'Before AI can detect a defect, controlled lighting must make the defect visible.',
  coreHighlight: 'controlled lighting must make the defect visible',
}

// Defect category rows for the scrolling marquee (Section 2)
// `border` keys map to tailwind `cat.*` colors; `dir` controls scroll direction.
export const DEFECT_ROWS = [
  {
    category: 'Surface Defects',
    border: 'surface',
    dir: 'left',
    note: 'Mostly detected using camera, side lighting, dark-field lighting, or low-angle lighting.',
    defects: [
      'Scratch', 'Scuff Mark', 'Pin Hole', 'Surface Crack', 'Hairline Crack',
      'Burrs', 'Tool Marks', 'Edge Chip', 'Rim Lip Damage', 'Spoke Damage',
    ],
  },
  {
    category: 'Paint & Coating Defects',
    border: 'paint',
    dir: 'right',
    note: 'Highly dependent on gloss, reflection, texture, and lighting angle.',
    defects: [
      'Paint Drip', 'Small Drip', 'Orange Peel', 'Thin Paint', 'Paint Peel-Off',
      'Chipping', 'Dirt Inclusion', 'Dust Particles', 'Color Mismatch',
      'Low Gloss', 'Blistering', 'Fish Eye',
    ],
  },
  {
    category: 'Casting / Internal Defects',
    border: 'casting',
    dir: 'left',
    note: 'Often require X-Ray, CT scan, or special NDT methods if not surface-visible.',
    defects: [
      'Porosity', 'Blow Hole', 'Shrinkage Cavity', 'Inclusion', 'Cold Shut',
      'Misrun', 'Hot Tear', 'Flash', 'Mold Mismatch',
    ],
  },
  {
    category: 'Dimensional / Geometry Defects',
    border: 'dimensional',
    dir: 'right',
    note: 'Usually require CMM, gauges, profile scanners, or runout machines.',
    defects: [
      'Bolt-Hole Issue', 'Center Bore Defect', 'Chamfer Defect', 'Bent Rim',
      'Out-of-Round Wheel', 'Lateral Runout', 'Radial Runout', 'Imbalance',
      'Wrong Wheel Model',
    ],
  },
]

// ---------------------- Objective (executive slide) ----------------------
export const OBJECTIVE = {
  title: 'Objective',
  subtitle: 'What this project sets out to achieve.',
  points: [
    {
      icon: 'Bot',
      title: 'Automated, cost-effective detection',
      desc: 'Develop an automated and cost-effective alloy wheel defect detection system.',
    },
    {
      icon: 'Lightbulb',
      title: 'Multi-angle LED imaging',
      desc: 'Capture high-quality images using multi-angle directional LED illumination.',
    },
    {
      icon: 'ScanEye',
      title: 'Enhanced defect visibility',
      desc: 'Enhance the visibility of scratches, cracks, dents, and casting defects.',
    },
    {
      icon: 'Network',
      title: 'Scalable architecture',
      desc: 'Develop a scalable architecture, expanding from a 5-LED prototype to a 25-LED industrial inspection system.',
    },
  ],
}

// ---------------------- Existing Industrial Inspection Solutions (Section 3) ----------------------
// Purpose: explain what techniques industry already uses. No limitations here.
export const EXISTING_TITLE = 'Existing Industrial Inspection Solutions'
export const EXISTING_SUBTITLE =
  'Industries use different inspection methods based on defect type, inspection stage, and required accuracy.'
export const EXISTING_SUMMARY =
  'Different inspection methods solve different inspection needs across casting, surface finishing, dimensional measurement, and structural validation.'

export const EXISTING_SOLUTIONS = [
  {
    accent: 'blue',
    image: '/solutions/xray-inspection.jpg',
    fallbackIcon: 'Layers',
    category: 'Internal & Subsurface Defect Detection',
    description:
      'Used immediately after casting or forging to detect hidden structural defects before expensive machining and finishing.',
    methods: [
      'Automated Radiographic Testing / Industrial X-Ray',
      'Ultrasonic Testing',
      'Industrial Computed Tomography',
    ],
    usedFor: ['Shrinkage cavity', 'Gas porosity', 'Internal cracks', 'Blow holes', 'Inclusions'],
  },
  {
    accent: 'purple',
    image: '/solutions/machine-vision.jpg',
    fallbackIcon: 'ScanEye',
    category: 'External Surface & Cosmetic Defect Detection',
    description:
      'Used at end-of-line or after machining and painting to inspect visible surface and cosmetic defects.',
    methods: [
      'AI-Powered Machine Vision Systems',
      'Fluorescent Penetrant Inspection',
      'Eddy Current Testing',
    ],
    usedFor: [
      'Scratches',
      'Surface cracks',
      'Pinholes',
      'Paint defects',
      'Burrs',
      'Dirt inclusion',
      'Chipping',
    ],
  },
  {
    accent: 'green',
    image: '/solutions/cmm-laser-inspection.jpg',
    fallbackIcon: 'Ruler',
    category: 'Dimensional, Geometric & Assembly Inspection',
    description:
      'Used to verify that the wheel matches required mechanical dimensions, geometry, and assembly conditions.',
    methods: [
      'Structured Laser / 3D Profile Triangulation',
      'Coordinate Measuring Machines',
      'Gauges and Profile Measurement',
      'Example-Based Assembly Vision',
    ],
    usedFor: [
      'Runout',
      'Bolt-hole alignment',
      'Center bore defects',
      'Deformation',
      'Wrong geometry',
      'Assembly checks',
    ],
  },
  {
    accent: 'orange',
    image: '/solutions/acoustic-testing.jpg',
    fallbackIcon: 'AudioWaveform',
    category: 'Acoustic & Dynamic Integrity Testing',
    description:
      "Used to evaluate structural integrity by comparing the wheel's vibration or resonance response against a known good reference.",
    methods: ['Acoustic Resonance Testing'],
    usedFor: [
      'Structural weakness',
      'Cracks',
      'Vibration signature deviation',
      'Material integrity issues',
    ],
  },
]

// ---------------------- Proposed Solution (Section 4) ----------------------
// Detailed, tabbed presentation area. Content is intentionally rich so it can
// be spoken from during the presentation.
export const SOLUTION = {
  title: 'Proposed Solution: Controlled Multi-Angle Inspection Lighting System',
  subtitle:
    'A scalable lighting setup that starts with a 5 LED POC and expands into a 25 LED full inspection system for better alloy wheel defect visibility.',

  tabs: [
    { id: 'concept', label: 'Concept', icon: 'Lightbulb' },
    { id: 'poc', label: 'Stage 1 POC', icon: 'CircleDot' },
    { id: 'full', label: '25 LED Full Setup', icon: 'Grid3x3' },
    { id: 'logic', label: 'Working Logic', icon: 'Workflow' },
  ],

  // ---- TAB 1: Concept ----
  concept: {
    title: 'Project Concept',
    paragraphs: [
      'We are creating a repeatable inspection lighting setup where high-CRI COB LEDs illuminate the alloy wheel from different angles.',
      'The purpose is not just to light the wheel. The purpose is to create controlled shadows and highlights so that surface defects become more visible to the camera.',
    ],
    keyIdea:
      'One LED angle creates one shadow/reflection condition. Multiple LED angles create multiple visibility conditions for the same wheel.',
    flow: [
      { label: 'Controlled LED Angle', icon: 'Flashlight' },
      { label: 'Shadow / Highlight', icon: 'Contrast' },
      { label: 'Camera Image', icon: 'Camera' },
      { label: 'AI-Ready Defect Data', icon: 'DatabaseZap' },
    ],
    statement: 'Before AI can detect a defect, the lighting must make the defect visible.',
  },

  // ---- TAB 2: Stage 1 POC ----
  poc: {
    title: 'Stage 1 POC — 5 LED Controlled Lighting Setup',
    badge: 'Current Build',
    image: '/proposal/stage1-5led-setup.jpg',
    // Real Stage-1 POC hardware photos (shown in the POC tab visual)
    photos: [
      { img: '/hardware-poc/circuit.jpg', label: 'Control Circuit' },
      { img: '/hardware-poc/led-setup.jpg', label: '5 LED Setup' },
      { img: '/hardware-poc/object-shadow.jpg', label: 'Object + Shadow' },
    ],
    intro:
      'The current stage uses 5 high-CRI COB LEDs placed around the wheel. Each LED turns ON one by one while the wheel and camera remain fixed.',
    positions: [
      { led: 'LED 1', pos: 'Top / front lighting' },
      { led: 'LED 2', pos: 'Upper-left angled lighting' },
      { led: 'LED 3', pos: 'Upper-right angled lighting' },
      { led: 'LED 4', pos: 'Lower-left angled lighting' },
      { led: 'LED 5', pos: 'Lower-right angled lighting' },
    ],
    proves: [
      'Whether angled lighting improves defect visibility',
      'Whether COB LEDs are bright enough',
      'Whether LED positions and angles are correct',
      'Whether one-by-one LED sequencing works',
      'Whether constant-current LED operation is stable',
      'Whether heat handling is safe',
      'Whether the setup is repeatable for camera capture',
    ],
    cycle: [
      'System starts → All LEDs OFF',
      'LED1 ON → Capture Image 1 → LED1 OFF',
      'LED2 ON → Capture Image 2 → LED2 OFF',
      'LED3 ON → Capture Image 3 → LED3 OFF',
      'LED4 ON → Capture Image 4 → LED4 OFF',
      'LED5 ON → Capture Image 5 → LED5 OFF',
      'Cycle complete',
    ],
  },

  // ---- TAB 3: 25 LED Full Setup ----
  full: {
    title: 'Final Full Setup — 25 LED Multi-Angle Lighting System',
    badge: 'Final Scalable System',
    image: '/proposal/final-25led-setup.jpg',
    intro:
      'After validating the 5 LED POC, the same system can scale to 25 high-CRI COB LEDs.',
    gives: [
      'More lighting angles around the wheel',
      'Better surface coverage',
      'Better visibility of scratches, cracks, dents, burrs, chips, pinholes, scuff marks, and paint defects',
      'More image data for future AI inspection',
      '25 different shadow and reflection conditions for the same wheel',
    ],
    matrixNote:
      'The 25 LEDs can be logically arranged as a 5 × 5 matrix (LED1 … LED25).',
    angles:
      'This gives lighting from top, bottom, left, right, center, diagonal angles, upper-left, upper-right, lower-left, lower-right, and different height levels.',
  },

  // ---- TAB 4: Working Logic ----
  logic: {
    title: 'Lighting and Image Capture Logic',
    intro:
      'The camera stays fixed. For each LED, the camera captures one image. For one wheel, the system can generate 25 images under 25 lighting conditions — a defect may appear clearly only in a few lighting angles.',
    captureFlow: [
      { led: 'LED1 ON', img: 'Capture Image 1' },
      { led: 'LED2 ON', img: 'Capture Image 2' },
      { led: 'LED3 ON', img: 'Capture Image 3' },
      { led: '…', img: '…' },
      { led: 'LED25 ON', img: 'Capture Image 25' },
    ],
    visibilityIntro:
      'A normal smooth area reflects light evenly. A defective area disturbs reflection and creates shadow, highlight, or texture change.',
    examples: [
      { defect: 'Scratch', effect: 'Thin dark or bright line under side light' },
      { defect: 'Dent', effect: 'Curved shadow or uneven highlight' },
      { defect: 'Crack', effect: 'Sharp dark line under angled light' },
      { defect: 'Burr', effect: 'Bright edge and shadow' },
      { defect: 'Paint drip', effect: 'Uneven reflection' },
      { defect: 'Chip', effect: 'Broken edge highlight' },
      { defect: 'Scuff mark', effect: 'Dull patch compared to normal surface' },
    ],
    stepFlow: [
      { label: 'LED ON', icon: 'Lightbulb' },
      { label: 'Wait fixed delay', icon: 'Timer' },
      { label: 'Camera capture', icon: 'Camera' },
      { label: 'LED OFF', icon: 'Power' },
      { label: 'Next LED', icon: 'ArrowRightCircle' },
    ],
    note:
      'Initially, only one LED should be ON at a time to avoid shadow cancellation and keep image comparison clean.',
  },

  // ---- TAB 5: Driver + Safety ----
  safety: {
    title: 'Driver, Control, Safety and Maintenance Logic',
    intro:
      'Each COB LED is a high-power LED and should not be connected directly to 36V. Each LED channel needs a constant-current LED driver.',
    powerArch: ['36V supply', 'Constant-current LED driver', 'COB LED'],
    controlArch: ['Controller GPIO / GPIO expander', 'Driver DIM pin'],
    controlNote:
      'The controller does not switch high LED current directly. It only controls the DIM / ON-OFF pin of the LED driver.',
    fullSystem: [
      '25 COB LEDs',
      '25 constant-current LED drivers',
      '25 DIM control lines',
      'GPIO expander or control board for 25 channels',
      '10k pulldown on each DIM line to keep LEDs OFF during boot/reset',
    ],
    whyDim: [
      'Safer LED operation',
      'Less heat on PCB',
      'No direct high-current MOSFET switching',
      'Cleaner control',
      'Better reliability',
      'Driver maintains stable 700mA LED current',
    ],
    safety: [
      'Only one LED ON at a time initially',
      'All LEDs OFF during boot',
      'All LEDs OFF during reset',
      'All LEDs OFF during fault',
      'Emergency stop turns all LEDs OFF',
      'Fixed wheel position',
      'Fixed camera position',
      'Fixed LED positions',
      'Same LED ON time every cycle',
      'Proper heatsink and thermal paste for every COB LED',
    ],
    maintenanceIntro:
      'Each channel should be clearly labelled (e.g. LED1 Driver, LED1 COB, LED1 DIM … through LED25).',
    maintenanceChecks: [
      'Is 36V reaching the driver?',
      'Is driver GND connected?',
      'Is DIM signal reaching the driver?',
      'Is COB LED connected?',
      'Is driver output present?',
      'Is connector loose?',
      'Is LED overheated?',
    ],
  },

  finalStatement:
    'The 25 LED system is not just a lighting setup. It is a controlled, repeatable image-data generation system for future AI-based defect detection.',
}

// ---------------------- System Architecture ----------------------
export const SYSTEM_BLOCKS = [
  { id: 1, title: 'React Presentation / Dashboard', icon: 'LayoutDashboard', group: 'control' },
  { id: 2, title: 'USB-to-RS485 Converter', icon: 'Usb', group: 'control' },
  { id: 3, title: 'RS485 A/B Communication Line', icon: 'Cable', group: 'comm' },
  { id: 4, title: 'MAX3485 RS485 Module', icon: 'Microchip', group: 'comm' },
  { id: 5, title: 'ESP32 Controller', icon: 'Cpu', group: 'control' },
  { id: 6, title: 'LED Driver / MOSFET Switching Stage', icon: 'Zap', group: 'power' },
  { id: 7, title: 'COB LED Array', icon: 'Lightbulb', group: 'power' },
  { id: 8, title: 'Alloy Wheel Illumination', icon: 'CircleDot', group: 'optics' },
  { id: 9, title: 'Camera Image Capture', icon: 'Camera', group: 'optics' },
  { id: 10, title: 'ML Defect Detection Layer', icon: 'BrainCircuit', group: 'ai' },
  { id: 11, title: 'Result / Alert / Logging', icon: 'BellRing', group: 'ai' },
]

export const SYSTEM_LABELS = [
  { k: 'Dashboard Role', v: 'Modbus Master' },
  { k: 'ESP32 Role', v: 'Modbus Slave' },
  { k: 'Protocol', v: 'Modbus RTU over RS485' },
  { k: 'Baud Rate', v: '9600' },
  { k: 'Slave ID', v: '1' },
  { k: 'LED Channels', v: '5' },
]

// ---------------------- Hardware Architecture (Section 6) ----------------------
// Full 25 LED inspection-lighting hardware, organized into 9 sections.
export const HARDWARE = {
  title: '25 LED Alloy Wheel Inspection Lighting System — Hardware Architecture',
  subtitle:
    'A 36V power backbone, one constant-current driver per COB LED, and controller-based DIM control — shown end to end from mains to the inspection lighting frame.',

  // Color-coded flow legend (signal types)
  legend: [
    { label: 'Power line (thick)', color: '#EA580C', kind: 'power' },
    { label: 'Control / signal', color: '#2563EB', kind: 'control' },
    { label: 'Communication', color: '#7C3AED', kind: 'comm' },
    { label: 'Status / signal', color: '#059669', kind: 'status' },
    { label: 'Camera / image (dashed)', color: '#64748B', kind: 'camera' },
  ],

  // 1. Power Input
  power: {
    title: 'Power Input Section',
    note: '36V SMPS provides main power for LED drivers and buck converter.',
    blocks: [
      { title: 'AC Mains Input', sub: '230V AC', icon: 'PlugZap', kind: 'power' },
      { title: '36V SMPS', sub: 'Main Power Supply', icon: 'Power', kind: 'power', image: '/hardware/36v-smps.jpg' },
      { title: '+36V DC Rail / GND', sub: 'Common ground', icon: 'Minus', kind: 'power' },
    ],
    components: [
      { k: 'Bulk Capacitor', v: '1000µF / 50V across +36V & GND', image: '/hardware/bulk-capacitor.jpg' },
      { k: 'Bleeder Resistor', v: '10kΩ / 0.5W across +36V & GND', image: '/hardware/bleeder-resistor.jpg' },
      { k: 'Power Indicator LED', v: '+36V → 1.8kΩ / 0.5W → LED → GND', image: '/hardware/power-indicator-led.jpg' },
    ],
  },

  // 2. Logic Power
  logic: {
    title: 'Logic Power Section',
    note: 'Buck converter powers controller. ESP32 3.3V powers logic modules.',
    blocks: [
      { title: '36V → 5V Buck Converter', sub: 'VIN +36V/GND → VOUT +5V/GND', icon: 'BatteryCharging', kind: 'power', image: '/hardware/buck-converter.jpg' },
      { title: 'ESP32 VIN', sub: 'Powered by +5V', icon: 'Cpu', kind: 'control', image: '/hardware/esp32.jpg' },
      { title: 'ESP32 3.3V Output', sub: 'Logic supply for RTC + MAX3485', icon: 'Zap', kind: 'control' },
    ],
    components: [
      { k: '5V Capacitor', v: '47µF / 16V on +5V rail' },
      { k: 'Decoupling', v: '0.1µF near ESP32, RTC, MAX3485' },
      { k: '3.3V Bulk', v: '10µF–47µF on 3.3V rail' },
    ],
  },

  // 3. Controller
  controller: {
    title: 'Controller Section',
    functions: [
      'LED sequence control',
      'DIM signal generation',
      'Modbus communication',
      'RTC time reading',
      'Start / Stop input',
      'Status LED output',
    ],
    expander: {
      title: 'MCP23017 / GPIO Expander',
      sub: 'I²C → 25 LED control outputs',
      i2c: ['ESP32 GPIO21 → SDA', 'ESP32 GPIO22 → SCL'],
    },
    stage1: [
      'GPIO25 → LED1 DIM',
      'GPIO26 → LED2 DIM',
      'GPIO27 → LED3 DIM',
      'GPIO14 → LED4 DIM',
      'GPIO33 → LED5 DIM',
    ],
  },

  // 4. LED Driver channel
  driver: {
    title: '25 LED Driver Section',
    notes: [
      'Each COB LED has its own 700mA constant-current driver.',
      'Controller only controls the DIM pin. LED current is handled by the LDD driver.',
    ],
    channel: [
      { from: '+36V', to: 'LDD VIN+' },
      { from: 'GND', to: 'LDD VIN−' },
      { from: 'LDD VOUT+', to: 'COB LED+' },
      { from: 'LDD VOUT−', to: 'COB LED−' },
      { from: 'Controller GPIO', to: 'LDD DIM' },
      { from: 'LDD DIM', to: '10kΩ pulldown → GND' },
    ],
    logic: ['DIM HIGH = COB LED ON', 'DIM LOW = COB LED OFF'],
    whyNoMosfet: [
      'COB LED needs 700mA constant current',
      'Direct voltage switching can damage the COB LED',
      'A MOSFET would need extra thermal handling',
      'LDD DIM pin gives clean, safe ON/OFF control',
    ],
  },

  // 5. Physical lighting arrangement
  lighting: {
    title: '25 LED Physical Lighting Arrangement',
    note: '25 lighting angles create different shadows and highlights for defect visibility.',
    cameraNote: 'Fixed camera captures one image per LED angle.',
    cob: 'CREE XLamp CXB1512 · 18V class · High CRI · 700mA',
    sequence: ['LED1 ON → Capture Image 1', 'LED2 ON → Capture Image 2', '…', 'LED25 ON → Capture Image 25'],
    // Physical parts shown as image cards beside the lighting frame.
    parts: [
      { title: 'LDD-700L Driver', sub: 'Constant-current 700mA', icon: 'Microchip', kind: 'power', image: '/hardware/ldd-700l-driver.jpg' },
      { title: 'CREE CXB1512 COB LED', sub: '18V class · High CRI', icon: 'Lightbulb', kind: 'power', image: '/hardware/cree-cxb1512-cob-led.jpg' },
      { title: 'Alloy Wheel', sub: 'Inspection target', icon: 'CircleDot', kind: 'camera', image: '/hardware/alloy-wheel.jpg' },
      { title: 'Camera', sub: 'Fixed, faces the wheel', icon: 'Camera', kind: 'camera', image: '/hardware/camera.jpg' },
    ],
  },

  // 6. Communication
  comm: {
    title: 'Communication Section',
    note: 'RS485 Modbus RTU used for dashboard control and status monitoring.',
    transceiverImage: '/hardware/max3485-rs485.jpg',
    converterImage: '/hardware/usb-rs485-converter.jpg',
    roles: ['Dashboard / PC / HMI = Modbus Master', 'ESP32 = Modbus Slave'],
    connections: [
      'ESP32 TX2 (GPIO17) → MAX3485 DI',
      'ESP32 RX2 (GPIO16) → MAX3485 RO',
      'ESP32 GPIO4 → MAX3485 DE/RE',
      'MAX3485 A/B → RS485 bus terminal',
    ],
    termination: [
      '120Ω termination between A and B',
      '680Ω pull-up from A to 3.3V',
      '680Ω pull-down from B to GND',
    ],
  },

  // 7. RTC
  rtc: {
    title: 'RTC Section',
    module: 'DS3231 RTC Module',
    image: '/hardware/ds3231-rtc.jpg',
    connections: ['VCC → 3.3V', 'GND → GND', 'SDA → GPIO21', 'SCL → GPIO22'],
    note: 'Module already has 472 = 4.7kΩ pull-ups, so external I²C pull-ups can be DNP (optional).',
  },

  // 8. Operator interface
  operator: {
    title: 'Operator Interface Section',
    note: 'Manual control and system indication.',
    items: [
      { title: 'Start Button', sub: 'GPIO ↔ GND, internal pull-up', icon: 'Play', kind: 'control', image: '/hardware/start-button.jpg' },
      { title: 'Stop Button', sub: 'GPIO ↔ GND, internal pull-up', icon: 'Square', kind: 'control', image: '/hardware/stop-button.jpg' },
      { title: 'Green Status LED', sub: 'Ready / Running / Normal', icon: 'CircleCheck', kind: 'status', image: '/hardware/green-status-led.jpg' },
      { title: 'Red Status LED', sub: 'Fault / Stop / Error', icon: 'CircleAlert', kind: 'power', image: '/hardware/red-status-led.jpg' },
    ],
    // terminal block referenced for wiring; shown as an extra part card
    terminal: { title: 'Terminal Block', sub: 'Field wiring connections', icon: 'Cable', kind: 'camera', image: '/hardware/terminal-block.jpg' },
  },

  // 9. Safety notes
  safety: [
    'All LEDs OFF during boot',
    'Only one LED ON at a time',
    '10kΩ DIM pulldown keeps LEDs OFF',
    'Constant-current drivers protect COB LEDs',
    'Stop / fault turns all LEDs OFF',
    'Fixed camera and fixed wheel position for repeatable inspection',
  ],

  // Final control principle
  principle: [
    'Controller GPIO HIGH → LDD DIM HIGH → selected COB LED ON',
    'Controller GPIO LOW → LDD DIM LOW → selected COB LED OFF',
  ],
}

// ---------------------- Data Acquisition & Feature Engineering (Section 7) ----------------------
// Single long SCROLLABLE layout (no tabs). Grouped into ordered blocks.
export const DATA_ACQ = {
  title: 'Data Acquisition & Feature Engineering',
  subtitle:
    'How we collect image data from the 25 LED lighting setup and turn raw images into clean, ML-ready information.',
  oneLiner: '25 LEDs → 25 lighting angles → 25 images per wheel → preprocessing → useful features → ML model',

  // 7.1–7.3 Purpose & why
  purpose: {
    heading: 'Purpose of This Stage',
    intro:
      'The goal is to make sure the ML model gets clean, organized, repeatable, and meaningful data. A model cannot work well if images are random, blurry, wrongly named, or captured under changing conditions.',
    focus: [
      'Capture images correctly',
      'Save images systematically',
      'Link each image with its LED number',
      'Label wheel condition',
      'Clean the image',
      'Extract useful visual information',
      'Prepare the final dataset for training',
    ],
    twoMeanings: [
      { k: 'Data Acquisition', v: 'collecting images properly', icon: 'Camera' },
      { k: 'Feature Engineering', v: 'preparing useful information from those images for ML', icon: 'Sparkles' },
    ],
    whyMulti: [
      'Find hidden defects',
      'Reduce missed defects',
      'Understand which LED angle is best',
      'Improve defect confidence',
      'Compare surface response under different lights',
    ],
    defectAngles: [
      { defect: 'Scratch', angle: 'clear under side lighting' },
      { defect: 'Dent', angle: 'clear under diagonal lighting' },
      { defect: 'Paint defect', angle: 'clear under front lighting' },
      { defect: 'Crack', angle: 'dark line under low-angle lighting' },
    ],
  },

  // 7.4 capture sequence
  captureSequence: [
    'Start inspection · all LEDs OFF',
    'Wheel ID generated · camera ready',
    'LED1 ON → wait for light to stabilize → capture → save → LED1 OFF',
    'LED2 ON → wait → capture → save → LED2 OFF',
    '… → LED25 ON → wait → capture → save → LED25 OFF',
    'Inspection image set complete (25 images)',
  ],
  captureNote: 'Only one LED is ON at a time — this keeps each image tied to one lighting direction.',

  // 7.5–7.6 metadata + naming
  metadata: [
    'wheel ID', 'LED number', 'image number', 'capture time', 'camera settings',
    'inspection batch number', 'operator name (if needed)', 'wheel type / model',
    'defect label (if known)', 'lighting angle', 'image file path',
  ],
  metadataExample: {
    'Wheel ID': 'WHEEL_0001',
    'LED Number': 'LED_07',
    'Image File': 'WHEEL_0001_LED_07.jpg',
    Timestamp: '2026-06-15 14:20:30',
    'Wheel Status': 'Defective',
    'Defect Type': 'Scratch',
  },
  namingFormat: 'WHEEL_<wheel_id>_LED_<led_number>_<label>.jpg',
  namingExamples: [
    'WHEEL_0001_LED_01_OK.jpg',
    'WHEEL_0002_LED_01_SCRATCH.jpg',
  ],
  namingPro: 'WHEEL_0001_LED_01.jpg … WHEEL_0001_LED_25.jpg + a separate label file',
  namingProNote:
    'Keeping labels separate is better: if the label changes later, the image filename does not need to change.',

  // 7.7 folder structure
  folderStructure: `dataset/
  raw/
    WHEEL_0001/
      LED_01.jpg … LED_25.jpg
      label.json
    WHEEL_0002/
      LED_01.jpg … LED_25.jpg
      label.json
  processed/
    WHEEL_0001/
      LED_01_processed.jpg … LED_25_processed.jpg
  annotations/
    detection_labels/
    segmentation_masks/
  splits/
    train.txt
    val.txt
    test.txt`,

  // 7.8 label files
  labelDefective: `{
  "wheel_id": "WHEEL_0002",
  "final_status": "Defective",
  "defect_type": "Scratch",
  "defect_location": "Outer rim",
  "severity": "Medium",
  "best_led_angles": [7, 13],
  "images": { "LED_01": "LED_01.jpg", "...": "..." }
}`,
  labelOk: `{
  "wheel_id": "WHEEL_0001",
  "final_status": "OK",
  "defect_type": "None",
  "defect_location": "None",
  "severity": "None",
  "best_led_angles": []
}`,

  // 7.9–7.11 controlled conditions
  controls: [
    {
      icon: 'Aperture',
      title: 'Camera Settings (fixed)',
      items: ['Exposure', 'Focus', 'White balance', 'Gain', 'Resolution', 'Camera position', 'Lens position', 'Frame rate'],
      why: 'If the camera auto-changes exposure, the same defect looks different in every image and confuses the model. Use manual exposure, focus and white balance.',
    },
    {
      icon: 'Lightbulb',
      title: 'Lighting Settings (fixed)',
      items: ['Same ON time', 'Same brightness / current', 'Same position', 'Same angle', 'Same distance from wheel'],
      why: 'If brightness changes, ML may learn the brightness difference instead of the defect. Each LED should be calibrated and documented.',
    },
    {
      icon: 'Crosshair',
      title: 'Wheel Position (fixed)',
      items: ['Center alignment', 'Rotation angle', 'Distance from camera', 'Distance from LEDs', 'Mounting height', 'Background area'],
      why: 'For POC: fixed wheel stand, center marking, mechanical stopper, and alignment guide.',
    },
  ],

  // 7.12 quality check
  qualityChecks: [
    'Blur', 'Overexposure', 'Underexposure', 'Camera not connected', 'LED not ON',
    'Wrong LED angle', 'Image too dark', 'Image too bright', 'Wheel not present',
  ],

  // 7.13 raw vs processed
  rawVsProcessed: [
    {
      title: 'Raw Data',
      icon: 'FileImage',
      desc: 'Original captured image. Never edit or overwrite it — always keep it safe. Raw images matter because we may improve preprocessing later.',
    },
    {
      title: 'Processed Data',
      icon: 'Wand2',
      desc: 'Image after cleaning: cropped, resized, normalized, masked, contrast-enhanced. The ML model uses processed data.',
    },
  ],

  // 7.15–7.21 preprocessing
  preprocessFlow: ['Original image', 'Crop wheel area', 'Resize 640×640', 'Normalize', 'Apply wheel mask', 'Model input'],
  preprocessSteps: [
    { icon: 'Crop', title: 'Crop the wheel region', desc: 'Remove background distraction, reduce size, focus on the useful region. Since camera & wheel are fixed, the crop region can be fixed (e.g. x=100–900, y=80–880).' },
    { icon: 'CircleDashed', title: 'Wheel masking', desc: 'Keep only the wheel and ignore background. Circular / manual ROI / segmentation / fixed-ROI mask. A fixed circular mask is enough for POC.' },
    { icon: 'Scaling', title: 'Resize', desc: '640×640 for YOLO detection · 224×224 or 384×384 for classification · 512×512 for segmentation.' },
    { icon: 'SlidersHorizontal', title: 'Normalization', desc: 'Scale pixels 0–255 → 0–1 (or standardized). Makes training stable, faster, and less brightness-sensitive.' },
    { icon: 'Waves', title: 'Noise reduction', desc: 'Light denoising only (Gaussian / median / bilateral). Avoid heavy smoothing — small scratches can disappear.' },
    { icon: 'Contrast', title: 'Contrast enhancement', desc: 'CLAHE improves local contrast without over-brightening. Use carefully — too much can create fake defects.' },
  ],

  // 7.22–7.23 classical features
  classicalFeatures: [
    { icon: 'Spline', title: 'Edge features', desc: 'Canny, Sobel, Laplacian, gradient magnitude — for scratches, cracks, rim-edge damage, surface lines.' },
    { icon: 'Grid2x2', title: 'Texture features', desc: 'LBP, Gabor filters, GLCM, patch variance, roughness score — for rough paint, scuff/tool/machining marks.' },
  ],

  // 7.24–7.30 multi-light feature engineering
  multiLight: {
    intro: 'The most important special part of our project: with 25 images of the same wheel, we create features by comparing images. This is where our hardware becomes useful for ML.',
    maps: [
      { icon: 'Diff', title: 'Difference Image', formula: 'LED_07 − LED_13', desc: 'A defect creates a sharp change between two angles while smooth areas change gently — highlights scratch, dent, raised edge, unevenness.' },
      { icon: 'ArrowUpDown', title: 'Max / Min Intensity', formula: 'range = max − min across 25', desc: 'High brightness variation per pixel may indicate surface irregularity, dent, scratch, deep groove, or paint defect.' },
      { icon: 'CloudFog', title: 'Shadow Response Map', formula: 'average − minimum', desc: 'High shadow response can show surface discontinuity where defects cast shadows under certain angles.' },
      { icon: 'Sun', title: 'Highlight Response Map', formula: 'maximum − average', desc: 'Shiny / raised defects create strong highlights — helps detect raised burrs, chips, sharp edges, paint irregularities.' },
      { icon: 'Layers', title: 'Average Image', formula: 'mean of LED1…LED25', desc: 'A clean general view that reduces random lighting noise — but directional shadows weaken, so not enough alone.' },
      { icon: 'Crosshair', title: 'Best LED Angle', formula: 'argmax visibility', desc: 'Record which LED shows each defect best (e.g. Scratch→LED7, Dent→LED12, Paint→LED3). Helps reduce LEDs later.' },
    ],
  },

  // 7.31 feature table
  featureTable: [
    { f: 'Wheel ID', m: 'Unique wheel sample' },
    { f: 'Number of images', m: '25' },
    { f: 'Defect label', m: 'OK / Defective' },
    { f: 'Defect type', m: 'Scratch / Dent / Crack' },
    { f: 'Best LED angle', m: 'LED number that shows defect clearly' },
    { f: 'Max defect score', m: 'Highest ML confidence' },
    { f: 'Brightness variation', m: 'Surface response across LEDs' },
    { f: 'Image quality status', m: 'PASS / FAIL' },
  ],

  // 7.32 split
  split: {
    correct: ['Train: WHEEL_0001 – 0700', 'Validation: WHEEL_0701 – 0850', 'Test: WHEEL_0851 – 1000'],
    wrong: 'LED_01 of WHEEL_0001 in train + LED_02 of the SAME wheel in test → data leakage. The same wheel must not appear in both train and test.',
  },

  // 7.33 annotation
  annotation: [
    { task: 'Classification', label: 'label each wheel as OK or Defective', step: 'Start here' },
    { task: 'Detection', label: 'draw bounding boxes around defects', step: 'Then' },
    { task: 'Segmentation', label: 'draw exact defect mask', step: 'Later' },
  ],

  // 7.34–7.35 augmentation + imbalance
  augmentation: ['Small rotation', 'Small crop', 'Brightness adjust', 'Contrast adjust', 'Noise', 'Blur', 'Minor scaling'],
  augNote: 'Use carefully — lighting direction matters. Avoid heavy transforms or random flips if wheel orientation matters.',
  imbalance: {
    note: 'Usually many OK wheels, few defective (e.g. 10,000 OK vs 800 defective).',
    solutions: ['Collect more defect images', 'Class weighting', 'Oversampling', 'Anomaly detection', 'Augment defect class', 'Evaluate recall carefully'],
    emphasis: 'For inspection, the model must not miss defects — defective recall is critical.',
  },

  // 7.36 quality rules
  goodRules: [
    'Same camera setting', 'Same lighting sequence', 'Same wheel position', 'Same file naming',
    'Same label format', 'No duplicate leakage', 'Bad images removed/flagged', 'Labels verified by human', 'Defect classes clearly defined',
  ],
  badProblems: [
    'Blurred images', 'Wrong labels', 'Mixed lighting conditions', 'Auto exposure changes',
    'Unknown wheel position', 'Unclear defect category', 'Same wheel in train & test',
  ],

  // 7.37 final output
  finalOutput: [
    'Organized raw images', 'Processed images', 'Label files', 'Annotation files',
    'Train/val/test split', 'Feature maps (if required)', 'Metadata table', 'Image quality report',
  ],
  finalReadyFor: ['Classification model', 'YOLO detection model', 'Segmentation model', 'Anomaly detection model'],

  // 7.38 final flow
  finalFlow: [
    { label: 'Wheel placed in fixture', icon: 'Crosshair' },
    { label: '25 LEDs turn ON one by one', icon: 'Lightbulb' },
    { label: 'Camera captures 25 images', icon: 'Camera' },
    { label: 'Saved by Wheel ID + LED number', icon: 'FolderTree' },
    { label: 'Metadata & labels saved', icon: 'Tag' },
    { label: 'Image quality check', icon: 'CheckCheck' },
    { label: 'Preprocessing (crop/resize/normalize/mask)', icon: 'SlidersHorizontal' },
    { label: 'Feature engineering (diff/intensity/shadow/best LED)', icon: 'Sparkles' },
    { label: 'ML-ready dataset created', icon: 'Database' },
  ],

  // 7.39 closing statement
  closing:
    'For each alloy wheel, the system turns ON one LED at a time and captures 25 images under 25 different lighting angles. Each image is saved with wheel ID, LED number, timestamp, camera settings and label. Raw images are preserved; processed images are created by cropping, resizing, normalizing, masking and quality-checking. Multiple angles also let us build difference images, brightness-variation maps, shadow and highlight maps, and best-LED-angle info — a dataset ready for classification, detection, segmentation, or anomaly detection.',
}

// ---------------------- ML Intelligence Layer (Section 8) ----------------------
// Condensed, single-scroll layout — only the important points, in boxes.
export const ML = {
  title: 'Machine Learning Intelligence Layer',
  subtitle:
    'Using controlled multi-angle lighting images to detect alloy wheel defects with classification, detection, localization, and anomaly analysis.',

  flow: [
    { label: 'Controlled Lighting Images', icon: 'Images' },
    { label: 'Preprocessing', icon: 'SlidersHorizontal' },
    { label: 'ML / AI Model', icon: 'BrainCircuit' },
    { label: 'Result Fusion (25 angles)', icon: 'Layers' },
    { label: 'OK/NG + Type + Location + Confidence', icon: 'BadgeCheck' },
  ],

  // What the ML layer decides
  goal: {
    heading: 'What the ML Layer Decides',
    intro:
      'The ML system analyzes the 25 controlled-lighting images of a wheel and produces one inspection result.',
    questions: [
      'Is the wheel OK or defective?',
      'What type of defect, and where?',
      'How severe is it?',
      'Which LED angle revealed it best?',
    ],
    result: {
      'Wheel ID': 'WHEEL_001',
      Result: 'Defective',
      'Defect Type': 'Scratch',
      Location: 'Outer Rim / Upper-Right',
      Confidence: '92%',
      'Best Angle': 'LED 7 & LED 13',
    },
    why: [
      'Reduces human error & fatigue',
      'Checks every wheel the same way',
      'Detects small visual patterns',
      'Repeatable, logged results',
    ],
  },

  // Data in one line
  data: {
    heading: 'Data',
    perWheel: '1 wheel = 25 images (one per LED angle).',
    calc: [
      { wheels: '100 wheels', total: '2,500 images' },
      { wheels: '1,000 wheels', total: '25,000 images' },
    ],
    note: 'Saved by Wheel ID + LED number, with a separate label file (OK/defect type/location/best LED).',
  },

  // 4 model stages (compact)
  stages: [
    { n: 1, title: 'Classification', out: 'OK / Defective', models: 'CNN · ResNet · EfficientNet', icon: 'Tags' },
    { n: 2, title: 'Object Detection', out: 'defect type + box + confidence', models: 'YOLO · Faster R-CNN', icon: 'ScanSearch' },
    { n: 3, title: 'Segmentation', out: 'exact defect mask', models: 'U-Net · Mask R-CNN · DeepLabV3+', icon: 'Spline' },
    { n: 4, title: 'Anomaly Detection', out: 'heatmap + score (rare defects)', models: 'PatchCore · PaDiM · Anomalib', icon: 'Radar' },
  ],

  // 3 ways to use 25 angles
  methods: [
    { icon: 'Image', name: 'Single Image', tag: 'Easiest first', desc: 'Check each LED image separately, then combine results.' },
    { icon: 'Crosshair', name: 'Best-Angle', tag: 'Faster', desc: 'Learn which LED angles reveal each defect best; inspect only those.' },
    { icon: 'Layers', name: 'Multi-Image Fusion', tag: 'Advanced', desc: 'Combine all 25 images together (multi-channel / stacked) — used later.' },
  ],

  // Key practices (boxes)
  practices: [
    {
      icon: 'SlidersHorizontal',
      title: 'Preprocessing',
      points: ['Crop wheel region', 'Resize (640×640)', 'Normalize', 'Mask background'],
    },
    {
      icon: 'Split',
      title: 'Split by Wheel ID',
      points: ['Train 70% · Val 15% · Test 15%', 'Never put the same wheel in train & test', 'Avoids fake high accuracy (25 similar images)'],
    },
    {
      icon: 'Gauge',
      title: 'Evaluation',
      points: ['Focus on RECALL for defects', 'False OK is the dangerous case', 'Lower threshold to catch more defects'],
    },
    {
      icon: 'Combine',
      title: 'Result Fusion',
      points: ['25 predictions → 1 decision', 'Defect in ≥ 2 angles = stronger', 'final score = max(LED1…LED25)'],
    },
  ],

  // Decision logic callout
  decision: 'If any important LED image detects a defect above the confidence threshold → Defective. Otherwise → OK.',

  // Deployment one-liner pipeline
  deploy: ['LED Sequence', 'Camera Capture', 'PC / Edge Inference', 'Dashboard Result', 'CSV / Report Log'],
  deployNote: 'POC runs on a laptop/PC: capture all 25 images first, then run ML and show OK/NG + report.',

  // Roadmap (compact, numbered)
  roadmap: [
    'Capture 25 images per wheel',
    'Label wheels OK / Defective',
    'Train simple OK-vs-Defective classifier',
    'Find best LED angles for defects',
    'Train YOLO detection + location',
    'Add anomaly detection for rare defects',
    'Build final dashboard result',
  ],

  challenges: ['Few defect images', 'Reflections & glare', 'Wheel design variation', 'Class imbalance', 'Label quality'],

  statement: 'The ML layer converts controlled lighting images into an automatic inspection decision.',
}

// ---------------------- Topology Optimization ----------------------
export const TOPOLOGY_LEDS = [
  { id: 1, score: 62 },
  { id: 2, score: 74 },
  { id: 3, score: 91 },
  { id: 4, score: 68 },
  { id: 5, score: 80 },
]

export const TOPOLOGY_MESSAGE =
  'The system learns which LED angle gives maximum defect visibility and can prioritize the most useful lighting positions.'

// ---------------------- Dynamic Reconfiguration ----------------------
export const RECONFIG = {
  default: [1, 2, 3, 4, 5],
  optimized: [3, 5, 2],
  explanation:
    'The system can skip low-value lighting angles and use the lighting sequence that gives better defect visibility, reducing inspection time.',
}

// ---------------------- Scalability ----------------------
export const ROADMAP = [
  { stage: 'Stage 1', title: '5 LED hardware and dashboard control', icon: 'Lightbulb' },
  { stage: 'Stage 2', title: '25 LED scalable topology', icon: 'Grid3x3' },
  { stage: 'Stage 3', title: 'Camera and image dataset', icon: 'Camera' },
  { stage: 'Stage 4', title: 'ML defect detection model', icon: 'BrainCircuit' },
  { stage: 'Stage 5', title: 'PLC integration and real-time alerts', icon: 'Cpu' },
  { stage: 'Stage 6', title: 'Industrial deployment with traceability', icon: 'Factory' },
]

// ---------------------- Impact ----------------------
export const IMPACT_CARDS = [
  { icon: 'Eye', title: 'Better defect visibility' },
  { icon: 'Timer', title: 'Faster inspection' },
  { icon: 'UserMinus', title: 'Less manual dependency' },
  { icon: 'GitCompareArrows', title: 'Higher consistency' },
  { icon: 'BellRing', title: 'Real-time alerting' },
  { icon: 'FileText', title: 'Traceability and logging' },
  { icon: 'Network', title: 'Scalable industrial architecture' },
]

export const IMPACT_CLOSING =
  'This project transforms alloy wheel inspection from fixed manual observation into an adaptive, AI-supported inspection system.'

export const IMPACT_CTA =
  'Dynamic Lighting + Embedded Control + Machine Learning = Smarter Industrial Quality Inspection'

// ---------------------- Software Development Progress (executive slide) ----------------------
export const SOFTWARE = {
  title: 'Software Development Progress',
  subtitle: 'Integrated Vision Platform for Alloy Wheel Inspection',

  // Story flow shown as a slim step strip
  story: [
    'Software Platform',
    'Lighting & Camera Integration',
    'Grid Detection & Measurement',
    'Calibration & Accuracy',
    'Future AI Inspection Platform',
  ],

  // Four dashboard screenshots (clean copies in /public/dashboard/)
  shots: [
    { img: '/dashboard/overall-dashboard.jpg', label: 'Overall Dashboard', caption: 'Complete inspection software platform' },
    { img: '/dashboard/led-camera-control.jpg', label: 'Lighting & Camera Control', caption: 'Unified control of lighting and camera workflow' },
    { img: '/dashboard/grid-detection.jpg', label: 'Grid Detection & Measurement', caption: 'Automated grid detection and dimensional measurement' },
    { img: '/dashboard/calibration-result.jpg', label: 'Calibration Result', caption: 'Measured to 5.00 mm after calibration' },
  ],

  // Shadow-based height-measurement reference (place the file at this path)
  heightRef: {
    img: '/hardware-poc/height-measurement.jpeg',
    label: 'Shadow-Based Height Measurement',
    caption:
      'Object height is estimated from its cast shadow under controlled lighting — measured against a calibrated reference grid.',
  },

  phases: [
    {
      icon: 'LayoutDashboard',
      tag: 'Phase 1',
      title: 'Integrated Inspection Platform',
      points: [
        'Centralized inspection software platform',
        'Lighting control + camera operation in one dashboard',
        'Automated image acquisition workflow',
        'Real-time system monitoring',
        'Session-based image management',
        'Operator-friendly inspection interface',
      ],
    },
    {
      icon: 'Ruler',
      tag: 'Phase 2',
      title: 'Precision Measurement Module',
      points: [
        'Automatic grid detection',
        'Perspective correction',
        'Real-world dimensional measurement',
        'Interactive measurement tools',
        'Foundation for precision inspection',
      ],
    },
    {
      icon: 'Target',
      tag: 'Phase 3',
      title: 'Calibration & Accuracy Improvement',
      points: [
        'Calibration workflow to identify measurement deviations',
        'Controlled lighting & shadow-based height estimation',
        'Refined measurement model using calibration data',
        'Achieved ~94–95% measurement accuracy',
        'Repeatable calibration process for continuous improvement',
      ],
    },
  ],

  milestone: {
    title: 'Current Milestone',
    items: [
      'Integrated inspection software platform completed',
      'Lighting and camera synchronization completed',
      'Automated image capture workflow completed',
      'Precision grid measurement completed',
      'Calibration workflow completed',
      'Height measurement accuracy: 94–95%',
    ],
  },

  roadmap: [
    'Software Platform',
    'Grid Detection',
    'Calibration',
    '94–95% Height Accuracy',
    'Improve Accuracy (>98%)',
    'Surface Defect Detection',
    'AI-Based Defect Classification',
    'Automatic Pass / Fail',
    'Production Line Integration',
  ],
  roadmapDoneUpto: 3, // first N items are achieved (0-indexed count)

  closing:
    'The software platform has successfully evolved from hardware control to precision measurement, establishing a strong foundation for future AI-powered automated alloy wheel inspection.',
}

// ---------------------- Future Development Roadmap (executive slide) ----------------------
export const ROADMAP_SLIDE = {
  title: 'Future Development Roadmap',
  subtitle: 'Roadmap Towards an Intelligent Alloy Wheel Inspection Platform',

  // Horizontal timeline steps. status: 'done' | 'current' | 'future'
  timeline: [
    { label: 'Integrated Vision Platform', status: 'done' },
    { label: 'Precision Measurement', status: 'done' },
    { label: 'Calibration & 94–95% Accuracy', status: 'current' },
    { label: 'Measurement Enhancement (>98%)', status: 'future' },
    { label: 'Automated Image Acquisition', status: 'future' },
    { label: 'Inspection Dataset Generation', status: 'future' },
    { label: 'Machine Learning Pipeline', status: 'future' },
    { label: 'AI Surface Defect Detection', status: 'future' },
    { label: 'Automatic Pass / Fail Decision', status: 'future' },
    { label: 'Factory Integration', status: 'future' },
    { label: 'Production Deployment', status: 'future' },
  ],
  currentLabel: 'Current Development Stage',

  // Phase cards
  phases: [
    {
      n: 1, icon: 'LayoutDashboard', title: 'Integrated Vision Platform', status: 'done',
      points: ['Centralized inspection dashboard', 'LED lighting control', 'Camera integration', 'Hardware communication', 'Session management', 'Real-time monitoring', 'Automated image capture workflow'],
    },
    {
      n: 2, icon: 'Ruler', title: 'Precision Measurement', status: 'done',
      points: ['Automatic grid detection', 'Perspective correction', 'Dimensional measurement', 'Interactive measurement tools', 'Calibration workflow', 'Shadow-based height estimation', '~94–95% measurement accuracy'],
    },
    {
      n: 3, icon: 'Target', title: 'Measurement Enhancement', status: 'current',
      points: ['Improve accuracy beyond 98%', 'Advanced calibration refinement', 'Automatic error compensation', 'Improved repeatability', 'Industrial-grade validation'],
    },
    {
      n: 4, icon: 'Images', title: 'Automated Image Acquisition', status: 'future',
      note: 'Focus: collecting high-quality inspection data that will power the AI models.',
      points: ['Multi-light synchronized acquisition', 'Standardized capture workflow', 'Image quality verification', 'Inspection dataset generation', 'Session database creation', 'Production-ready image repository'],
    },
    {
      n: 5, icon: 'BrainCircuit', title: 'Machine Learning Pipeline', status: 'future',
      note: 'Transforms collected inspection images into an AI-ready dataset.',
      points: ['Dataset preparation', 'Image preprocessing', 'Data augmentation', 'ML model development', 'Model training & validation', 'Performance benchmarking', 'Continuous improvement'],
    },
    {
      n: 6, icon: 'ScanSearch', title: 'AI-Based Defect Detection', status: 'future',
      note: 'AI automatically identifies different surface defects on alloy wheels.',
      points: ['Surface defect detection', 'Defect localization', 'Defect classification', 'Multi-defect recognition', 'Confidence scoring', 'Severity estimation'],
    },
    {
      n: 7, icon: 'BadgeCheck', title: 'Intelligent Quality Inspection', status: 'future',
      points: ['Automatic Pass / Fail decision', 'Inspection report generation', 'Quality analytics', 'Inspection history', 'Traceability', 'Production statistics', 'Operator decision support'],
    },
    {
      n: 8, icon: 'Factory', title: 'Production Deployment', status: 'future',
      points: ['MES integration', 'PLC communication', 'Production line integration', 'Real-time inspection', 'Factory dashboard', 'Continuous monitoring', 'Scalable manufacturing solution'],
    },
  ],

  closing:
    'The project has successfully established a robust vision acquisition and precision measurement platform. The upcoming phases focus on building high-quality inspection datasets, developing Machine Learning models, enabling AI-driven defect detection, and deploying a fully automated industrial inspection solution.',
}

// ---------------------- Dashboard Mock ----------------------
export const DASHBOARD = {
  connection: [
    { k: 'Port', v: 'COM3 / ttyUSB0' },
    { k: 'Baud Rate', v: '9600' },
    { k: 'Slave ID', v: '1' },
    { k: 'Protocol', v: 'Modbus RTU' },
  ],
  monitor: [
    { k: 'Active LED', v: '3' },
    { k: 'System Status', v: 'Running', good: true },
    { k: 'Fault Status', v: 'No Fault', good: true },
    { k: 'LED ON Time', v: '80 ms' },
    { k: 'Gap Time', v: '10 ms' },
  ],
  log: [
    { t: '12:04:31', m: 'Connection established · Slave ID 1', type: 'info' },
    { t: '12:04:33', m: 'Auto sequence started', type: 'info' },
    { t: '12:04:34', m: 'LED 3 ON · 80ms', type: 'led' },
    { t: '12:04:35', m: 'Defect candidate flagged @ LED 3', type: 'warn' },
    { t: '12:04:36', m: 'Event logged → CSV', type: 'ok' },
  ],
}

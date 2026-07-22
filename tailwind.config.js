/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ----- Premium LIGHT MODE palette -----
        // `navy` = dark text / charcoal scale (was background in dark mode).
        navy: {
          950: '#0F172A', // primary navy text
          900: '#0F172A',
          800: '#1e293b',
          700: '#334155',
          600: '#475569', // secondary text
        },
        // `electric` = primary deep blue accent (token name kept for reuse).
        electric: {
          DEFAULT: '#2563EB',
          300: '#60A5FA',
          400: '#3b82f6',
          500: '#2563EB',
          600: '#1d4ed8',
        },
        cyan: {
          DEFAULT: '#06B6D4',
          400: '#22d3ee',
          500: '#06B6D4',
          600: '#0891b2',
        },
        // `defect` = danger red/orange highlight.
        defect: '#EF4444',
        warn: '#FB923C',
        // `ledglow` = warm amber for LED visuals (kept readable on light bg).
        ledglow: '#F59E0B',
        success: '#10B981',
        // Surface tones
        surface: {
          base: '#F8FAFC', // page background
          white: '#FFFFFF',
          soft: '#EFF6FF', // soft blue background
        },
        // Defect-category borders (Section 2)
        cat: {
          surface: '#60A5FA',
          paint: '#A78BFA',
          casting: '#FB923C',
          dimensional: '#34D399',
        },
        // Solution-category accents (Section 3)
        sol: {
          blue: '#2563EB',
          purple: '#7C3AED',
          green: '#059669',
          orange: '#EA580C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        // Soft card shadows for light mode
        card: '0 4px 16px rgba(15,23,42,0.10), 0 1px 3px rgba(15,23,42,0.06)',
        'card-lg': '0 18px 50px rgba(15,23,42,0.14)',
        glow: '0 6px 28px rgba(37,99,235,0.18)',
        'glow-lg': '0 14px 44px rgba(37,99,235,0.26)',
        'glow-red': '0 6px 26px rgba(239,68,68,0.28)',
        'glow-led': '0 6px 26px rgba(245,158,11,0.3)',
        'glow-green': '0 6px 24px rgba(16,185,129,0.26)',
        'glow-cyan': '0 6px 26px rgba(6,182,212,0.26)',
      },
      backgroundImage: {
        'industrial':
          'radial-gradient(ellipse at top, #FFFFFF 0%, #F8FAFC 45%, #EFF6FF 100%)',
        'grid':
          'linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(37,99,235,0.25)' },
          '50%': { boxShadow: '0 0 26px rgba(37,99,235,0.4)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 8s ease infinite',
        'scroll-left': 'scrollLeft 40s linear infinite',
        'scroll-right': 'scrollRight 40s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

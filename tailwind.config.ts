import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: { DEFAULT: '#156084', 600: '#11506f', 700: '#0e405a', 50: '#EAF5FA' },
        sky: { DEFAULT: '#5EBCDC', 300: '#9BD8EC', 100: '#D5EEF7' },
        leaf: { DEFAULT: '#78A04F', dark: '#4F7A32', 100: '#E6F0DC' },
        navy: { DEFAULT: '#0D3B53', 900: '#082638' },
        mist: '#EAF5FA',
        charcoal: '#1F2A30',
      },
      fontFamily: {
        heading: ['"Montserrat Variable"', 'Montserrat', 'system-ui', 'sans-serif'],
        sans: ['"Open Sans Variable"', '"Open Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 40px -16px rgba(13,59,83,0.22)',
        lift: '0 24px 60px -24px rgba(13,59,83,0.35)',
        glow: '0 24px 70px -28px rgba(21,96,132,0.55)',
      },
      backgroundImage: {
        'grad-ocean': 'linear-gradient(135deg,#156084 0%,#2f8fb3 55%,#5EBCDC 100%)',
        'grad-deep': 'linear-gradient(160deg,#082638 0%,#0D3B53 45%,#156084 100%)',
        'grad-leaf': 'linear-gradient(135deg,#4F7A32 0%,#78A04F 100%)',
        'grad-wash': 'linear-gradient(180deg,#EAF5FA 0%,#FFFFFF 55%,#F1F7EC 100%)',
      },
      keyframes: {
        drift: { '0%,100%': { transform: 'translate3d(0,0,0)' }, '50%': { transform: 'translate3d(0,-14px,0)' } },
        sway: { '0%,100%': { transform: 'translateX(0)' }, '50%': { transform: 'translateX(-24px)' } },
      },
      animation: { drift: 'drift 9s ease-in-out infinite', sway: 'sway 14s ease-in-out infinite' },
    },
  },
  plugins: [],
} satisfies Config

import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '0.5': '0.5px',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    fontFamily: {
      sans: ['ui-monospace','SFMono-Regular','"SF Mono"','Menlo','Consolas','"Liberation Mono"','monospace']
    },
    extend: {
      keyframes: {
        'fade-out': {
          "0%": { opacity: '1' },
          "20%": { opacity: '.5' },
          "40%": { opacity: '.01' },
          "100%": { opacity: '0' },
        },
        'fade-in': {
          "0%": { opacity: '0' },
          "60%": { opacity: '.01' },
          "80%": { opacity: '.5' },
          "100%": { opacity: '1' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(var(--tilt))' },
        },
      },
      animation: {
        'fade-out': "fade-out .5s",
        'fade-in': "fade-in .5s",
        'wiggle': 'wiggle .25s ease-in-out',
      }
    },
  },
  plugins: [],
} satisfies Config


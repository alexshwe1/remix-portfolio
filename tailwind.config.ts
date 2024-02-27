import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'primary': '#F8FAFD',
      'secondary': '#B4AAA9',
      'tertiary': '#FFF0DF',
      'quaternary': '#F0C9B3',
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
      },
      animation: {
        'fade-out': "fade-out .5s",
        'fade-in': "fade-in .5s",
      }
    },
  },
  plugins: [],
} satisfies Config


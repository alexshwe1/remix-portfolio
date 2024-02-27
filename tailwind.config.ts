import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        slideDown: "",
      }
    },
  },
  plugins: [],
} satisfies Config


import flowbite from 'flowbite-react/tailwind'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4C6F9C',
        text: '#171717',
        white: '#ffffff',
        transpBlue: 'rgba(76, 111, 156, 0.2)',
      },
      fontFamily: {
        title: ['"Adam"', 'ui-sans-serif'],
        lato: ['var(--font-inter)', 'ui-sans-serif'],
        montserrat: ['var(--font-montserrat)', 'ui-sans-serif'],
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
        scroll8: 'scroll8 10s linear infinite',
        scroll7: 'scroll7 10s linear infinite',
        scroll6: 'scroll6 10s linear infinite',
        pause: 'pause',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scroll8: {
          '100%': { transform: 'translate3d(calc(-50px * 8), 0, 0)' },
        },
        scroll7: {
          '100%': { transform: 'translate3d(calc(-50px * 7), 0, 0)' },
        },
        scroll6: {
          '100%': { transform: 'translate3d(calc(-50px * 6), 0, 0)' },
        },
        pause: {
          '0%': { animationPlayState: 'paused' },
          '100%': { animationPlayState: 'paused' },
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
}
export default config

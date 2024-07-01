import { Montserrat } from 'next/font/google'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
    },
  },
  plugins: [],
}
export default config

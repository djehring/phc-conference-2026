import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'phc-navy': '#2D2E83',
        'phc-navy-light': '#3A3B9A',
        'phc-navy-dark': '#1E1F5E',
        'phc-cyan': '#4ABFD8',
        'phc-cyan-light': '#7DD4E6',
        'phc-cyan-pale': '#E8F7FB',
        'off-white': '#F8F9FC',
        'warm-grey': '#6B7280',
        'dark-grey': '#1F2937',
        'success-green': '#10B981',
        'warm-amber': '#F59E0B',
      },
      fontFamily: {
        heading: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

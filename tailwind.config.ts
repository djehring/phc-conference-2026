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
        'phc-navy': '#2d2e83',
        'phc-navy-dark': '#1f2063',
        'phc-cyan': '#4abfd8',
        'phc-cyan-light': '#6dcee3',
        'phc-dark': '#2d2e83',
        'phc-light': '#4abfd8',
        'phc-yellow': '#e7e700',
        'warm-amber': '#d97706',
        'success-green': '#16a34a',
        'off-white': '#f4f5f7',
        'dark-grey': '#3d4454',
        'warm-grey': '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(10deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
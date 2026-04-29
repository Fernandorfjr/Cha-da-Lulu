import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#f8e8e8',
        rose: '#e7c7c7',
        cream: '#fffaf6',
        pearl: '#fffdfb',
        champagne: '#d8bf9c',
        truffle: '#5a4141',
        mist: '#f4eeea',
        /** Neutro off-white para “poço” de imagem nos cards (harmoniza fotos variadas) */
        linen: '#f8f6f5',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 50px rgba(104, 76, 76, 0.08)',
        lift: '0 18px 40px rgba(123, 92, 92, 0.14)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top, rgba(255,255,255,0.85), rgba(255,255,255,0) 58%)',
        'section-glow':
          'radial-gradient(circle at top right, rgba(231,199,199,0.36), rgba(255,255,255,0) 55%)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
} satisfies Config

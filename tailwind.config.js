/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          1: '#FF7B00',
          2: '#FF8800',
          3: '#FF9500',
          4: '#FFA200',
          5: '#FFAA00',
          DEFAULT: '#FFB700',
          7: '#FFC300',
          8: '#FFD000',
          9: '#FFDD00',
          10: '#FFEA00',
        },
        dark: {
          DEFAULT: '#0a0a08',
          2: '#111109',
          3: '#1a1200',
        },
      },
      fontFamily: {
        cormorant: ["'Cormorant Garamond'", 'serif'],
        cinzel: ["'Cinzel'", 'serif'],
        garamond: ["'EB Garamond'", 'serif'],

      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.6)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        musicNote: {
          '0%': { opacity: '0', transform: 'translateY(0) scale(0.8)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(-30px) scale(1.2)' },
        },
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        pulseGold: 'pulseGold 2s ease-in-out infinite',
        fadeUp: 'fadeUp 1s ease forwards',
        shimmer: 'shimmer 3s linear infinite',
        spin: 'spin 4s linear infinite',
        musicNote: 'musicNote 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: { DEFAULT: '#E8834A', dark: '#C4622D' },
        cream: '#FFF8F0',
        forest: { DEFAULT: '#2D5016', light: '#3d6b1e' },
        terracotta: '#C4622D',
        dark: '#1a0e08',
        'warm-brown': '#3E2723',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

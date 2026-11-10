/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fcf5ff',
          100: '#f7ebff',
          200: '#edd6ff',
          300: '#dfb3ff',
          400: '#cb82ff',
          500: '#bd69f5',
          600: '#a855d8',
          700: '#8e3eb5',
          800: '#763593',
          900: '#622d78',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

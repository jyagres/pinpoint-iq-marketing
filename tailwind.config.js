/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4ff',
          500: '#3b5bdb',
          600: '#2f4ac7',
          700: '#2540b0',
        }
      }
    },
  },
  plugins: [],
}

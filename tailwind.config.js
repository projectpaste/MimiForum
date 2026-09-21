/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mimi: {
          pink: '#ff85a2',
          purple: '#b388ff',
          dark: '#1a1625'
        }
      }
    },
  },
  plugins: [],
}

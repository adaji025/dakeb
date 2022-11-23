/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: {
            '50': '#157145',
            '100': '#002500'
          },
          yellow: '#DEA90A'
        }
      }
    },
  },
  plugins: [],
}
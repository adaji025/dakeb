/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          green: {
            50: "#157145",
            100: "#002500",
          },
          yellow: "#DEA90A",
          dark: {
            50: "#4F4F4F",
            100: "#333333",
          },
        },
      },
    },
    fontFamily: {
      anglecia: "anglecia"
    }
  },
  plugins: [],
};

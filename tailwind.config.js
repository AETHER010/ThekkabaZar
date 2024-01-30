/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        main: "#0B5CA5",
        lightblue: "#b4d3f0",
        orange: "#F45115",
        slateblue: "#E7F4FC",
      },
      fontFamily: {
        popins: ["popins", "Proxima Nova", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./src/**/**/**/*.{html,js,jsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        main: "#0D76B8",
        lightblue: "#F1FAFE",
        orange: "#F45115",
        slateblue: "#E7F4FC",
      },
      fontFamily: {
        sans: ["Poppins", "Proxima Nova", "sans-serif"], // Set Poppins as the default sans-serif font
      },

      screens: {
        xs: { max: "429px" }, // Extra small screens (max width: 429px)
        sm: { min: "430px", max: "767px" }, // Small screens (min width: 430px, max width: 767px)
        md: { min: "768px", max: "1023px" }, // Medium screens (min width: 768px, max width: 1023px)
        lg: { min: "1024px", max: "1279px" }, // Large screens (min width: 1024px, max width: 1279px)
        xl: { min: "1280px", max: "2500px" }, // Extra large screens (min width: 1280px)
      },
    },
  },
  plugins: [],
};

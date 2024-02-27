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
      // fontWeight: {
      //   'medium': 500, // Set font weight to Medium (500)
      // },
      screens: {
        sm: "428px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};

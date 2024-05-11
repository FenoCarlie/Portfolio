/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      greyGlass: "#34353AE6",
      greyGlass1: "#34353AE3",
      yellowClaire: "#fec86b",
      black: "#040203",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        openSans: ["OpenSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

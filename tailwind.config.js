/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "rgba(15, 15, 15, 1)",
        button: "rgba(158, 255, 0, 1)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};

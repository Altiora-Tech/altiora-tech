/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "alt-purple": {
          DEFAULT: "#4c1d95",
          light: "#6d28d9",
          dark: "#37186f",
        },
        "alt-gold": {
          DEFAULT: "#facc15",
          light: "#fde047",
          dark: "#eab308",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}


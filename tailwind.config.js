/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primiary: "#8F0305",
        secondary: "#F9F2BA",
        tertiary: "#00102E"
      },
    },
  },
  plugins: [],
}
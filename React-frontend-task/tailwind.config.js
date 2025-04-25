/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customCream: "#FFFBF9",
        menuBtn: "#F89E6E",
        backBtn: "#E2E1E1",
        servicesBg: "#1F465D",
        articleClr: "#222D50"
      },
      fontFamily: {
        inter: ['"Inter"', 'serif'], 
      },
      boxShadow: {
        'top-right': '9px -7px 0px #F89E6E', // Customize values as needed
      },
    },
  },
  plugins: [],
}
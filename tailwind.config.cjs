/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main' : '#f89e19',
        'main-text' : '#1B1925',
        'second-text' : '#ecd8bd',
      },
      fontFamily: {
        'league_spartan': ['League Spartan', 'sans-serif'],
      }
    },
    keyframes: {
      shimmer: {
        '100%': {transform: 'translateX(100%)'}
      }
    }
  },
  plugins: [],
}

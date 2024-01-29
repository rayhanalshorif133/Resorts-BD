/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'rubik': ['Rubik', 'sans-serif']
      },
      colors: {
        'resort': '#173C6C',
        'resort-secondary': '#666666',
        'resort-secondary-light': '#a7a7a7',
        'search-border-color': '#E2E2E2',
      },
      fontSize: {
        '2xs': '10px',
        '3xs': '8px',
      },
    }
  },
  plugins: [],
}
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
      },
    }
  },
  plugins: [],
}
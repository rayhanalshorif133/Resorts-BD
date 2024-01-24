/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'rubik': ['Rubik', 'sans-serif']
      },
      colors: {
        'base': '#173C6C',
      },
    }
  },
  plugins: [],
}
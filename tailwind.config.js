/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      '2xs': '320px',
      'xs': '375px',
      'xxs': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily:{
        'rubik': ['Rubik', 'sans-serif']
      },
      colors: {
        'resort': '#173C6C',
        'resort-secondary': '#666666',
        'resort-secondary-light': '#a7a7a7',
        'search-border-color': '#E2E2E2',
        'filter-nav-color': '#fafafa',
      },
      fontSize: {
        '2xs': '10px',
        '3xs': '8px',
      },
      zIndex: {
        '100': '100',
        '150': '150',
        '200': '200',
        '220': '220',
        '250': '250',
        '300': '300',
      },
      inset: {
        '520px': '520px',
        '290px': '290px',
        '18px': '18px',
      },
    }
  },
  plugins: [
    "./node_modules/flowbite/**/*.js",
  ],
  
}
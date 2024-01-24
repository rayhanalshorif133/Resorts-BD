/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0px 0px -15px rgba(0, 0, 0, 0.3)',
      }
    }
  },
  plugins: [],
}
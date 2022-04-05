const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./public/**/*.{html,js}",
    "./public/*",
    './index.html',],

  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

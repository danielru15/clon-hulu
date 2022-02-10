module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      screens: {
        "3xl":"2000px"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
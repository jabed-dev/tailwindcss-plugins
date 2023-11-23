const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {},
  plugins: [
    plugin.withOptions((options = {}) => {
      return ({ addComponents, theme }) => {
        console.log(options)
      }
    })({ className: 'btn' }),
  ],
}

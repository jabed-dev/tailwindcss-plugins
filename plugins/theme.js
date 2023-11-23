const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme') // (default)

module.exports = {
  theme: {},
  plugins: [
    plugin(({ theme }) => {
      // theme values in the user’s and default Tailwind theme (custom + default)
      console.log(theme('accentColor.red.500'))
      console.log(theme('accentColor.red')[500])
      console.log(theme('accentColor').red[500])
      
      // if theme('incorrect') undefined then return second argument
      console.log(theme('incorrect', {x: 'xyz'}))
      // {x: 'xyz'}
    }),
  ],
}

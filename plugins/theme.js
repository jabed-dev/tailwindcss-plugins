const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme') // (default)

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // can't use a theme function with the same name like fontFamily
        // ({theme}) => ({arial: ['Arial', ...theme('fontFamily.sans')]}) 
        // Error: Maximum call stack size exceeded
        arial: ['Arial', ...defaultTheme.fontFamily.sans],
      },
    }
    backgroundColor: ({ theme, colors, breakpoints }) => {
      console.log(breakpoints({ xl: '1280px' }))
      console.log(colors.slate)
      console.log(theme('screens')) // theme values (custom + default)
      return {
        // key: 'value'
      }
    },
  },
  plugins: [
    plugin(({ theme }) => {
      // theme values in the user’s and default Tailwind theme (custom + default)
      console.log(theme('accentColor.red.500'))
      console.log(theme('accentColor.red')[500])
      console.log(theme('accentColor').red[500])
      console.log(theme('spacing')[4])
      
      // if theme('incorrect') undefined then return second argument
      console.log(theme('incorrect', {x: 'xyz'}))
      // {x: 'xyz'}
    }),
  ],
}

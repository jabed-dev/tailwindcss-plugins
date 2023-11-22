const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ config }) => {
      // config values in the user’s and default Tailwind configuration 
      console.log(config().theme.accentColor.red)
      console.log(config('theme.accentColor.red'))
      console.log(config('content').files)
      console.log(config('darkMode'))
      
      // if config('incorrect') undefined then return second argument
      console.log(config('theme.incorrect', {x: 'xyz'}))
      // return > {x: 'xyz'}
    }),
  ],
}

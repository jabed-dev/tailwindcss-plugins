const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      // config values in the user’s and default Tailwind configuration 
      console.log(config().theme.accentColor.red)
      console.log(config('theme.accentColor.red'))
      console.log(config('content').files)
      // if config('incorrect') undefined then return second argument
      console.log(config('theme.incorrect', {x: 'abc'}))
      // return > {x: 'abc'}
    }),
  ],
}

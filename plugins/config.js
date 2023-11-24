const plugin = require('tailwindcss/plugin')
const defaultConfig = require('tailwindcss/defaultConfig') // (default)

module.exports = {
  darkMode: 'class',
  theme: {},
  plugins: [
    plugin(({ config }) => {
      // config values in the user’s and default Tailwind configuration (custom + default)
      console.log(config().theme.accentColor.red)
      console.log(config('theme.accentColor.red'))
      console.log(config('theme.accentColor').red[500])
      console.log(config('darkMode'))
      
      // if config('incorrect') undefined then return second argument
      console.log(config('theme.incorrect', {x: 'xyz'}))
      // {x: 'xyz'}

      // get all corePlugins [ ... ]       
      console.log(config().corePlugins)
      console.log(JSON.stringify(config().corePlugins, null, 2)) // see all
    }),
  ],
}

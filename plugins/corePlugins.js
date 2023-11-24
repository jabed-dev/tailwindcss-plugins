const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {},
  corePlugins: {
    accentColor: true, // enabled
    fontSize: false, // disable
  },
  plugins: [
    plugin(({ corePlugins }) => { // checking if a core plugin is enabled or disable
      console.log(corePlugins('accentColor')) // true
      console.log(corePlugins('fontSize')) // false
    }),
  ],
}
 
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {},
  },
  corePlugins: {
    accentColor: true, // enabled
    fontSize: false, // disable
  },
  plugins: [
    plugin(function ({ corePlugins }) { // checking if a core plugin is enabled or disable
      console.log(corePlugins('accentColor')) // true
      console.log(corePlugins('fontSize')) // false
    }),
  ],
}

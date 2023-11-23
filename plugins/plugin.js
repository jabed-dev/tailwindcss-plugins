// plugin config can modify default config
// custom config can modify plugin config

const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'media'
  theme: {
    extend: {},
  },
  plugins: [
    plugin(
      ({
        addBase,
        addUtilities,
        matchUtilities,
        addComponents,
        matchComponents,
        addVariant,
        matchVariant,
        theme,
        config,
        corePlugins,
        e,
      }) => {
        // Add your custom styles here
      },
      {
        // same as a config object
        content: [],
        darkMode: 'class',
        prefix: 'tw-',
        important: true,
        theme: {},
        // ...
      }
    ),
  ],
}

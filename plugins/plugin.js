// plugin config can modify default config
// custom config can modify plugin config

const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {},
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
        // addUtilities()
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

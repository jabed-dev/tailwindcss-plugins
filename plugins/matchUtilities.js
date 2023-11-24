const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    tabSize: {
      2: 2,
      3: 3,
      DEFAULT: 4,
      5: 5,
      6: 6,
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          tab: (value, { modifier }) => ({ // modifier explore in the match-with-modifier.js
            tabSize: value,
          }),
        },
        { 
          values: theme('tabSize'), // { key: value }
          type: 'number',
          respectPrefix: true,
          respectImportant: true,
          supportsNegativeValues: true,
          modifiers: { key: 'value' } // explore in the match-with-modifier.js
        }
      )
    }),
  ],
}

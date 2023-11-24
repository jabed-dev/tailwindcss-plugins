const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {},
  plugins: [
    plugin(
      ({ matchComponents, theme }) => {
        matchComponents(
          {
            btn: (value, { modifier }) => ({ // modifier explore in the match-with-modifier.js
              padding: `${theme('spacing.1')}  ${theme('spacing.2')}`,
              border: `1px solid ${theme('colors.' + value + '.400')}`,
              borderRadius: theme('borderRadius.md'),
              backgroundColor: theme('colors.' + value + '.200'),
              color: theme('colors.' + value + '.800'),
              width: theme('width.full'),
              maxWidth: theme('maxWidth.sm'),
              textAlign: 'center',
              userSelect: 'none',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: theme('colors.' + value + '.200') + 'cc',
                color: theme('colors.' + value + '.800') + 'e6',
              },
              '&:focus': {
                outline: `1px solid ${theme('colors.' + value + '.400')}`,
              },
              '.dark &': {
                backgroundColor: theme('colors.' + value + '.800'),
                color: theme('colors.' + value + '.100'),
                '&:hover': {
                  backgroundColor: theme('colors.' + value + '.800') + 'e6',
                  color: theme('colors.' + value + '.100') + 'e6',
                },
              },
              [`@media (min-width: ${theme('screens.sm')})`]: {
                '&': {
                  maxWidth: theme('maxWidth.md'),
                },
              },
            }),
          },
          {
            values: theme('btnColors'), // { key: value }
            type: 'color',
            respectPrefix: true,
            respectImportant: true,
            supportsNegativeValues: false,
            modifiers: { key: 'value' }, // explore in the match-with-modifier.js
          }
        )
      },
      {
        theme: {
          btnColors: {
            DEFAULT: 'slate',
            red: 'red',
            blue: 'blue',
            green: 'green',
            pink: 'pink',
            teal: 'teal',
            yellow: 'yellow',
          },
        },
      }
    ),
  ],
}

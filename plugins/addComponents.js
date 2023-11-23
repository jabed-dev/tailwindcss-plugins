const plugin = require('tailwindcss/plugin')

module.exports = {
  prefix: 'tw-',
  important: true,
  theme: {},
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents(
        {
          '.btn': {
            '@apply px-1 border border-solid border-gray-400 rounded-md': {},
            backgroundColor: theme('colors.gray.100'),
            color: theme('colors.gray.900'),
            width: theme('width.full'),
            textAlign: 'center',
            userSelect: 'none',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(209, 213, 219, 0.5)',
              color: 'rgba(17, 24, 39, 0.9)',
            },
            '&:focus': {
              outline: `1px solid ${theme('colors.gray.400')}`,
            },
            '.dark &': {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.gray.200'),
              '&:hover': {
                backgroundColor: 'rgba(55, 65, 81, 0.8)',
                color: 'rgba(229, 231, 235, 0.9)',
              },
            },
            [`@media (min-width: ${theme('screens.sm')})`]: {
              '&': {
                maxWidth: theme('maxWidth.md'),
              },
            },
          },
        },
        {
          respectPrefix: true, // true and prefix: 'wt-' then add 'wt-*'
          respectImportant: true, // true and important: true then add '* !important'
        }
      )
    }),
  ],
}

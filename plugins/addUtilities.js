const plugin = require('tailwindcss/plugin')

module.exports = {
  prefix: 'tw-',
  important: true,
  theme: {},
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(
        {
          '.content-auto': {
            'content-visibility': 'auto',
          },
          '.content-hidden': {
            'content-visibility': 'hidden',
          },
          '.content-visible': {
            'content-visibility': 'visible',
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
 
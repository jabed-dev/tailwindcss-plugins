const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  prefix: 'tw-',
  important: true,
  theme: {
    extend: {},
  },
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
          respectPrefix: false, // true and prefix: 'wt-' then add 'wt-*'
          respectImportant: false, // true and important: true then add '* !important'
        }
      )
    }),
  ],
}

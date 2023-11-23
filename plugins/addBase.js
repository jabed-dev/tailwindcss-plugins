const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {},
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme('fontSize.2xl') },
        h2: { fontSize: theme('fontSize.xl') },
        h3: { fontSize: theme('fontSize.lg') },
        a: {
          color: theme('colors.indigo.600'),
          '&:hover': {
            textDecorationLine: 'underline',
          },
          '&:active': {
            color: theme('colors.red.500'),
          },
        },
      })
    })      
  ],
}

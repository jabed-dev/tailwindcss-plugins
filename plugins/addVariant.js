const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {},
  plugins: [
    plugin(({ addVariant }) => {
      for (let i = 1; i <= 10; i++) {
        addVariant(`child-${i}`, `&>:nth-child(${i})`) //child-i\:*>:nth-child(i)
      }

      addVariant('optional', '&:optional') // .optional\:*:optional
      addVariant('hocus', ['&:hover', '&:focus']) // .hocus\:*:hover | .hocus\:*:focus
      addVariant('inverted-colors', '@media (inverted-colors: inverted)')
      addVariant('my-dark', '.dark &') // .dark .my-dark\:*
      // addVariant('variant', () => { return string })
    }),
  ],
}

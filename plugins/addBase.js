const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addBase, theme }) => {
    addBase({
        'h1': {
            fontSize: theme('fontSize.3xl')
        },
        'h2': {
            fontSize: theme('fontSize.2xl')
        },
        'h3': {
            fontSize: theme('fontSize.xl')
        },
        'h4': {
            fontSize: theme('fontSize.lg')
        },
        'h5': {
            fontSize: theme('fontSize.base')
        },
        'h6': {
            fontSize: theme('fontSize.sm')
        },
        a: {
            color: theme('colors.indigo.600'),
            '&:hover': {
                textDecorationLine: 'underline',
            },
            '&:active': {
                color: theme('colors.red.500')
            }
        }
    })
})
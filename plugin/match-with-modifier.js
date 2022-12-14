const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ matchUtilities }) => {
    matchUtilities(
        {
            '@container': (value, { modifier }) => {
                console.log({value, modifier});
                return {
                    'container-type': value,
                    'container-name': modifier,
                }
            },
        },
        {
            values: {
                DEFAULT: 'inline-size',
                normal: 'normal',
            },
            modifiers: {
                'header': 'header',
                'main': 'main',
                'footer': 'footer'
            }
        }
    )
})

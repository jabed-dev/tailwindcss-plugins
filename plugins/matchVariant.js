const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ matchVariant, theme }) => {
    matchVariant('child', (value) => {
        return `&>:nth-child(${value})`
    }, {
        values: theme('child')
    })
}, {
    theme: {
        child: (() => {
            let _values = {}
            for (let i = 1; i <= 10; i++) {
                _values[i] = i
            }
            return _values
        })()
    }
})

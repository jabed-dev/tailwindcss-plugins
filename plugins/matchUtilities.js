const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ matchUtilities, theme }) => {
    matchUtilities({
        tab: (value) => ({
            tabSize: value
        })
    }, {
        values: theme('tabSize')
    })
}, {
    theme: {
        tabSize: (() => {
            let _values = {}
            for (let i = 1; i <= 6; i++) {
                if (i === 4) {
                    _values['DEFAULT'] = i
                    continue
                }
                _values[i] = i
            }
            return _values
        })()
    }
})

const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, theme }) => {
    for (let i = 2; i <= 8; i++) {
        // if (i === 3) continue;
        addUtilities({
            [`.tab-${i}`]: {
                tabSize: i
            }
        })
    }

    addUtilities({
        '.font-arial': {
            fontFamily: 'Arial ' + theme('fontFamily.sans')
        }
    })
})
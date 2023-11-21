const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addVariant }) => {
    for (let i = 1; i <= 10; i++) {
        addVariant(`child-${i}`, `&>:nth-child(${i})`)
    }
    
    addVariant('my-dark', '.my-dark &')
})

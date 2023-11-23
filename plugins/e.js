const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {},
  plugins: [
    plugin(({ addUtilities, e }) => {
      // console.log(e(`~\`!@#$%^&*()=+[]{}\\|;:'",./<>?`))
      // \~\`\!\@\#\$\%\^\&\*\(\)\=\+\[\]\{\}\\\|\;\:\'\"\2c \.\/\<\>\?

      addUtilities({
        [`.${e('w/50%')}`]: {
          // e function escaping strings
          width: 'calc(100% / 2)',
          backgroundColor: 'red',
        },
        [`.x\\/50\\%`]: {
          // manually escaping strings
          width: 'calc(100% / 2)',
          backgroundColor: 'green',
        },
      })
    }),
  ],
}

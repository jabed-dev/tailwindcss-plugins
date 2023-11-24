const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {},
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities( // matchComponents
        {
          '@container': (value, { modifier }) => {
            console.log({ value, modifier })
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
            header: 'header',
            main: 'main',
            footer: 'footer',
          },
        }
      )
    }),
  ],
}


// <div class="@container/header">modifier /header</div>
// <div class="@container/main">modifier /main</div>
// <div class="@container/footer">modifier /footer</div>
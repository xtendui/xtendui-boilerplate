module.exports = {
  purge: [],
  theme: require('xtend-library/src/theme')({
    extend: {
      // colors
      colors: {
        // https://javisperez.github.io/tailwindcolorshades/#/?Blue%20Ribbon=7567f8&tv=1
        accent: {
          100: '#F1F0FE',
          200: '#DDD9FD',
          300: '#C8C2FC',
          400: '#9E95FA',
          500: '#7567F8',
          600: '#695DDF',
          700: '#463E95',
          800: '#352E70',
          900: '#231F4A',
        },
      },
      // btn
      btnCustom: theme => ({
        textTransform: 'capitalize',
      }),
    },
  }),
  variants: require('xtend-library/src/variants')(),
  plugins: [require('xtend-library/src/plugins')(), require('xtend-library/src/core/button')()],
}

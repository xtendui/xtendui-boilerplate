module.exports = {
  purge: [],
  theme: {
    extend: {
      //require('xtend-library/src/theme'),
      // components
      btn: (theme) => ({
        textTransform: 'capitalize',
      }),
    },
  },
  variants: require('xtend-library/src/variants'),
  plugins: [
    require('xtend-library/src/plugins')(),
    require('xtend-library/src/core/button')(),
  ],
}

module.exports = {
  purge: [],
  theme: require('xtend-library/src/theme')({
    extend: {
      // components
      btn: (theme) => ({
        textTransform: 'capitalize',
      }),
    },
  }),
  variants: require('xtend-library/src/variants')(),
  plugins: [
    require('xtend-library/src/plugins')(),
    require('xtend-library/src/core/button')(),
  ],
}

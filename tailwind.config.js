module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      sans: ['Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif'],
    },
    extend: {
      colors: {
        white: '#fff',
        black: '#000',
        shade: {
          100: '#f0f5ff',
          200: '#d0e6fe',
          700: '#001439',
        },
        accent: '#0078ff',
        text: '#001743',
        textInverse: '#fff',
      },
      zIndex: {
        base: '0',
        active: '2',
        out: '1',
      },
    },
  },
  plugins: [require('xtend-library/src/core/button')()],
}

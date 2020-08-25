module.exports = {
  purge: [],
  theme: {
    extend: {
      // theme
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
      // xtend plugin
      xtend: theme => ({
        utilities: {
          //list: false, // example disable utility
        },
        components: {
          //list: false, // example disable component
          btn: {
            // example custom component
            '.btn': {
              fontFamily: theme('fontFamily.serif').toString(),
              textTransform: 'capitalize',
            },
          },
        },
      }),
    },
  },
  plugins: [require('xtend-library')],
  experimental: {
    applyComplexClasses: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    removeDeprecatedGapUtilities: true,
  },
}

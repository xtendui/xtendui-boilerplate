module.exports = {
  purge: [],
  theme: require('xtend-library/src/tailwind-theme')({
    // add here your theme settings
    extend: {
      // add here your theme extend settings
      // extend theme in node_modules/xtend-library/src/tailwind-theme.js
      colors: {
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
      // extend components in node_modules/xtend-library/src/tailwind-components.js
      xtend: theme => ({
        utilities: {
          // disable utility
          drop: false,
          // modify utility
          typography: {
            '.text-default': {
              'a:not([class]), .link': {
                color: theme('colors.black'),
                '&:hover': {
                  color: theme('colors.black'),
                },
              },
            },
          },
        },
        components: {
          // disable component
          drop: false,
          // modify component
          btn: {
            '.btn': {
              letterSpacing: theme('letterSpacing.tight'),
              textTransform: 'capitalize',
            },
          },
        },
      }),
    },
  }),
  variants: require('xtend-library/src/tailwind-variants')({
    // add here your variants
  }),
  plugins: [require('xtend-library')],
  experimental: {
    applyComplexClasses: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    removeDeprecatedGapUtilities: true,
  },
}

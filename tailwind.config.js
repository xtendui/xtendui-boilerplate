module.exports = {
  purge: [],
  theme: require('xtend-ui/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-ui/src/tailwind-xtend.js
    xtend: theme => ({
      utilities: {
        core: {
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
        // disable addons
        addons: false,
      },
      components: {
        core: {
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
        // disable addons
        addons: false,
      },
    }),
    // extend theme in node_modules/xtend-ui/src/tailwind-theme.js
    extend: {
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
    },
  }),
  variants: require('xtend-ui/src/tailwind-variants')({
    // add here your variants
  }),
  plugins: [require('xtend-ui/src/tailwind-plugin')],
  experimental: {
    applyComplexClasses: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    removeDeprecatedGapUtilities: true,
  },
}

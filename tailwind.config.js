module.exports = {
  purge: [],
  theme: require('xtend-ui/src/tailwind-theme')({
    // only some colors
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        50: '#FCFDFF',
        100: '#FAFCFF',
        200: '#F2F6FF',
        300: '#EAF1FF',
        400: '#DBE7FF',
        500: '#CBDCFF',
        600: '#B7C6E6',
        700: '#7A8499',
        800: '#5B6373',
        900: '#3D424D',
      },
    },
    // xtend utilities and components in node_modules/xtend-ui/src/tailwind-xtend.js
    xtend: theme => ({
      utilities: {
        core: {
          // disable utility
          drop: false,
          // modify utility
          typography: {
            '.text-default': {
              '@apply text-black': '',
            },
          },
        },
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

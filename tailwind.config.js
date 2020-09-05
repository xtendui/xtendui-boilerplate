module.exports = {
  purge: [],
  theme: {
    // theme, waiting for https://github.com/tailwindlabs/tailwindcss/issues/677
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.8' }],
      sm: ['0.875rem', { lineHeight: '1.6' }],
      base: ['1rem', { lineHeight: '1.6' }],
      lg: ['1.125rem', { lineHeight: '1.5' }],
      xl: ['1.25rem', { lineHeight: '1.4' }],
      '2xl': ['1.5rem', { lineHeight: '1.2' }],
      '3xl': ['1.875rem', { lineHeight: '1.2' }],
      '4xl': ['2.25rem', { lineHeight: '1.2' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['4rem', { lineHeight: '1' }],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      // https://javisperez.github.io/tailwindcolorshades/#/?hawkes-blue=bdd3ff
      gray: {
        100: '#F8FBFF',
        200: '#EFF4FF',
        300: '#E5EDFF',
        400: '#D1E0FF',
        500: '#BDD3FF',
        600: '#AABEE6',
        700: '#717F99',
        800: '#555F73',
        900: '#393F4D',
      },
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
    extend: {
      zIndex: {
        base: '0',
        active: '5',
        top: '50',
        indicator: '51',
        backdrop: '500',
        drop: '600',
        sticky: '800', // same as javascript and decreses with sequential sticky
        overlay: '900',
        last: '1000',
      },
      transitionTimingFunction: {
        in: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        out: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
      },
      // xtend plugin
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
  },
  plugins: [require('xtend-library')],
  experimental: {
    applyComplexClasses: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    removeDeprecatedGapUtilities: true,
  },
}

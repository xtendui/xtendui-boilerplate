module.exports = {
  presets: [require('tailwindcss/defaultConfig'), require('xtendui/src/tailwind-config')],
  theme: {
    // only some tailwind colors
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
    extend: {
      colors: {
        success: '#48bb78',
        error: '#f56565',
        accent: {
          50: '#F8F7FF',
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
      transitionTimingFunction: {
        in: 'cubic-bezier(.19,1,.22,1)',
        out: 'cubic-bezier(1,0,0,1)',
      },
    },
    xtendui: {
      btn: {
        components: theme => ({
          '.btn': {
            letterSpacing: theme('letterSpacing.tight'),
            textTransform: 'capitalize',
          },
        }),
      },
      typography: {
        utilities: theme => ({
          '.text-default': {
            color: theme('color.black'),
          },
        }),
      },
    },
  },
}

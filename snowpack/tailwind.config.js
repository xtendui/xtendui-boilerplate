module.exports = {
  presets: [require('tailwindcss/defaultConfig'), require('xtendui/tailwind.preset')],
  purge: {
    content: ['./node_modules/xtendui/src/**/*[!.css].js', './src/**/*.ejs', './src/**/*.css', './src/**/*.js'], // put your purge content
    options: {
      safelist: {
        greedy: [
          // popperjs
          /^data-popper-/,
        ],
      },
    },
  },
  theme: {
    extend: {
      colors: {
        primary: {
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
      xtendui: {
        btn: {
          component: theme => ({
            '.btn': {
              letterSpacing: theme('letterSpacing.tight'),
              textTransform: 'capitalize',
            },
          }),
        },
      },
    },
  },
}

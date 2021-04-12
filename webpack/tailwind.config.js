module.exports = {
  presets: [require('tailwindcss/defaultConfig'), require('xtendui/tailwind.preset')],
  purge: {
    content: ['./node_modules/xtendui/src/*[!.css].js', './src/**/*.ejs', './css/**/*.css', './src/**/*.js'], // put your purge content
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
    // only some colors
    colors: {
      gray: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
      },
    },
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
        typography: {
          utility: {
            '.xt-h1': {
              '@apply font-black text-4xl md:text-5xl lg:text-6xl': {},
              textTransform: 'lowercase',
            },
          },
        },
      },
    },
  },
}

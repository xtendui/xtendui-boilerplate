const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  presets: [require('tailwindcss/defaultConfig'), require('xtendui/tailwind.preset')],
  purge: {
    // put other purge content e.g.: './src/**/*.css', './src/**/*.js'
    content: ['./node_modules/xtendui/src/*[!.css].js', './src/**/*.html', './src/**/*.css', './src/**/*.js'],
  },
  theme: {
    extend: {
      // custom xtendui color
      colors: {
        success: '#48bb78',
        error: '#f56565',
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
      // custom font
      fontFamily: {
        sans: [/*'"My Font Family"',*/ ...defaultTheme.fontFamily.sans],
      },
      // custom container
      container: {
        center: true,
        fluid: '1536px',
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      },
      // custom animation
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      // custom xtendui examples
      xtendui: {
        layout: {
          component: theme => ({
            '::selection': {
              backgroundColor: theme('colors.primary.600'),
              color: theme('colors.white'),
            },
            '.xt-overflow-main': {
              '&::-webkit-scrollbar': {
                height: '10px',
                width: '10px',
                background: theme('colors.white'),
              },
              '&::-webkit-scrollbar-thumb': {
                background: theme('colors.gray.900'),
              },
              scrollbarColor: `${theme('colors.gray.900')} ${theme('colors.white')}`,
            },
          }),
        },
        typography: {
          utility: {
            '.xt-h1': {
              '@apply font-black text-4xl md:text-5xl lg:text-6xl': {},
              textTransform: 'lowercase',
            },
          },
          component: theme => ({
            'b, strong': {
              // semibold instead of bold
              fontWeight: theme('fontWeight.semibold', 'bolder'),
            },
          }),
        },
      },
    },
  },
}

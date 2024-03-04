import { babel } from '@rollup/plugin-babel'

// DYNAMIC IMPORT BROKEN NOW https://github.com/vitejs/vite/issues/14102

export default {
  root: './src',
  build: {
    outDir: '../public',
  },
  plugins: [
    babel({
      exclude: /node_modules/,
      include: [/node_modules\/xtendui/],
    }),
  ],
}

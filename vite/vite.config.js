import { babel } from '@rollup/plugin-babel'

export default {
  root: './src',
  build: {
    outDir: '../public',
  },
  plugins: [babel()],
}

module.exports = {
  mount: {
    dist: '/src',
    src: '/',
    css: '/src/styles',
    assets: '/src/assets',
  },
  buildOptions: {
    out: 'public',
    clean: true,
  },
  plugins: ['@snowpack/plugin-postcss'],
}

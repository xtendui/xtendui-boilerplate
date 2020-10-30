module.exports = {
  mount: {
    dist: '/',
    src: '/',
    css: '/',
    assets: '/assets',
  },
  buildOptions: {
    out: 'public',
    clean: true,
  },
  plugins: ['@snowpack/plugin-postcss'],
}

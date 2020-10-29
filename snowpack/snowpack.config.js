module.exports = {
  mount: {
    dist: '/',
    src: '/',
    assets: '/assets',
  },
  buildOptions: {
    out: 'public',
    clean: true,
  },
  plugins: ['@snowpack/plugin-postcss'],
}

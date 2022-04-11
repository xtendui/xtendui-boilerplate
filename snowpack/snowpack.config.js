module.exports = {
  mount: {
    dist: '/src',
    src: '/',
    css: '/src',
    assets: '/src/assets',
  },
  buildOptions: {
    out: 'public',
    clean: true,
  },
  optimize: {
    bundle: true,
    minify: true,
  },
  plugins: ['@snowpack/plugin-postcss', '@snowpack/plugin-babel'],
}

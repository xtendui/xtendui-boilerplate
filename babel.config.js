const path = require('path')

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 2,
      },
    ],
  ],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        // resolve xtend-library import js
        alias: {
          'xtend-library': [path.resolve(__dirname, './dist/assets/xtend-library'), path.resolve(__dirname, './node_modules/xtend-library')],
        },
      },
    ],
  ],
}

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: require('core-js/package.json').version,
      },
    ],
  ],
}

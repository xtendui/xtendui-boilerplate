module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '3.20', // check must be the same minor version of installed core-js version
      },
    ],
  ],
}

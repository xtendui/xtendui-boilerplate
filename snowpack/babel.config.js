module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
        targets: {
          esmodules: true,
        },
        modules: 'false',
      },
    ],
  ],
  plugins: [[require.resolve('@babel/plugin-transform-runtime')]],
}

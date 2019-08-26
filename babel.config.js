module.exports = {
  presets: [
    ['@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 2,
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-for-of'],
    ['@babel/plugin-transform-arrow-functions'],
    ['@babel/plugin-proposal-object-rest-spread'],
  ]
};
module.exports = {
  presets: [
    ["@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: 2,
        targets: {
          browsers: [">0.25%", "Explorer 11", "not op_mini all"]
        },
      },
    ],
  ],
  plugins: [
    ["@babel/plugin-transform-for-of"],
    ["@babel/plugin-transform-arrow-functions"],
    ["@babel/plugin-proposal-object-rest-spread"]
  ]
};
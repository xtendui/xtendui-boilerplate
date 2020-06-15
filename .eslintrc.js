module.exports = {
  extends: ['eslint:recommended', 'google', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 2,
    'no-console': 'off',
    'prefer-arrow-callback': 2,
    'no-unused-vars': 0,
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
  },
}

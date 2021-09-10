module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prefer-template': 2,
    'prefer-const': 2,
    'no-var': 2,
    'dot-notation': 2,
    'eol-last': 2,
    'max-len': 0,
  },
}

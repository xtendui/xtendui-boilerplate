const postcssImport = require(`postcss-import`)
const postcssNesting = require('postcss-nesting')
const tailwindcss = require(`tailwindcss`)

module.exports = {
  map: true,
  plugins: [postcssImport(), tailwindcss(), postcssNesting()],
}

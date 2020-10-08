const postcssImport = require(`postcss-import`)
const postcssNesting = require('postcss-nesting')
const tailwindcss = require(`tailwindcss`)

const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./src/**/*.md', './src/**/*.js', './src/**/*.css'],
  defaultExtractor: content => {
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
    return broadMatches.concat(innerMatches)
  },
})

module.exports = {
  plugins: [postcssImport(), tailwindcss(), postcssNesting(), ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])],
}

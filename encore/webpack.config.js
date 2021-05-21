const path = require('path')
const Encore = require('@symfony/webpack-encore')
const HtmlWebpackPlugin = require('html-webpack-plugin')

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore.setOutputPath('public/build/')
  .setPublicPath('/')
  .addEntry('app', './assets/app.js')
  .cleanupOutputBeforeBuild()
  .splitEntryChunks()
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enablePostCssLoader()
  .copyFiles({
    from: './assets/assets',
    to: 'assets/[path][name].[ext]', // 'assets/[path][name].[hash:8].[ext]',
  })
  .addPlugin(
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'assets/index.ejs'),
      title: 'Webpack Encore Boilerplate',
    })
  )
/* if using symfony and twig ignore HtmlWebpackPlugin and use
  {% block stylesheets %}
    {{ encore_entry_link_tags('app') }}
  {% endblock %}
  {% block javascripts %}
    {{ encore_entry_js_files('app') }}
  {% endblock %}
  */

module.exports = Encore.getWebpackConfig()

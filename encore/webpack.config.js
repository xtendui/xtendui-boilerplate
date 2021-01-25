const path = require('path')
const Encore = require('@symfony/webpack-encore')
const HtmlWebpackPlugin = require('html-webpack-plugin')

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore.setOutputPath('public')
  .setPublicPath('/')
  .addEntry('app', './src/app.js')
  .cleanupOutputBeforeBuild()
  .splitEntryChunks()
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enablePostCssLoader()
  .copyFiles({
    from: './assets',
    to: 'assets/[path][name].[ext]', // with hash to: 'assets/[path][name].[hash:8].[ext]',
  })
  /* if using symfony and twig ignore HtmlWebpackPlugin and use
  {% block stylesheets %}
    {{ encore_entry_link_tags('app') }}
  {% endblock %}
  {% block javascripts %}
    {{ encore_entry_script_tags('app') }}
  {% endblock %}
  */
  .addPlugin(
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.ejs'),
      title: 'Webpack Encore Boilerplate',
    })
  )

module.exports = Encore.getWebpackConfig()

const path = require('path')
const Encore = require('@symfony/webpack-encore')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore.setOutputPath('public')
  .setPublicPath('/')
  .addEntry('app', './src/app.js')
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enablePostCssLoader()
  .addPlugin(
    new CopyPlugin({
      patterns: [{ from: path.join(__dirname, 'assets'), to: 'assets' }],
    })
  )
  /* if using twig ignore HtmlWebpackPlugin and use
  {% block stylesheets %}
    {# 'app' must match the first argument to addEntry() in webpack.config.js #}
    {{ encore_entry_link_tags('app') }}
  {% endblock %}
  {% block javascripts %}
    {{ encore_entry_script_tags('app') }}
    <script src="/build/runtime.js"></script>
    <script src="/build/app.js"></script>
  {% endblock %}
  */
  .addPlugin(
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.ejs'),
      title: 'Webpack Encore Boilerplate',
    })
  )

module.exports = Encore.getWebpackConfig()

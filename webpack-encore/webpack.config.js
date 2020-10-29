const path = require('path')
const Encore = require('@symfony/webpack-encore')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore.setOutputPath('public')
  .setPublicPath('/')
  .addEntry('index', './src/index.js')
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enablePostCssLoader()
  .addPlugin(
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, 'assets'), to: 'assets' },
      ],
    })
  )
  .addPlugin(
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.ejs'),
      title: 'Webpack Encore Boilerplate',
    })
  )

module.exports = Encore.getWebpackConfig()

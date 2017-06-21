const webpack = require('webpack')
const path = require('path')
const srcPath = path.join(__dirname, '../packages/fm-webapp/src')

const config = {
  cache: true,
  devtool: 'cheap-eval-source-map',
  target: 'web',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3001',
    'webpack/hot/only-dev-server',
    path.join(srcPath, '/index')
  ],
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'app.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      actions: srcPath + '/actions',
      reducers: srcPath + '/reducers',
      components: srcPath + '/components'
    }
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        include: /\.json$/,
        loaders: ['json-loader']
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  devServer: {
    contentBase: srcPath,
    compress: true,
    hot: true,
    publicPath: '/dist/',
    port: 3001,
    noInfo: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}


module.exports = config

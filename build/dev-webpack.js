const webpack = require('webpack')
const path = require('path')
const srcPath = path.join(__dirname, '/../src')

const config = {
  cache: true,
  devtool: 'cheap-eval-source-map',
  target: 'web',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3001',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '/../dist'),
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
        loader: 'css-loader'
      },
      {
        include: /\.json$/,
        loaders: ['json-loader']
      }
    ]
  },
  devServer: {
    contentBase: './src',
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

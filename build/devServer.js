var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./dev-webpack')

new WebpackDevServer(webpack(config), config.devServer)
.listen(config.devServer.port, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }
});

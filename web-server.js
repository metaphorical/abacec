const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

var config = require("./webpack.config.js");
// config.entry.main.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");

var compiler = webpack(config);

var server = new webpackDevServer(compiler, {
	// hot: true,
	publicPath: "/build/", 
	stats: { colors: true }
});

server.listen(8080);
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const WebpackNotifierPlugin = require('webpack-notifier');


module.exports = {
    name: "client",
    context: __dirname + "/",
    entry: {
        "main": ["./app/ui/main.js"],
    },
    output: {
        path: path.join(__dirname, 'build/'),
        filename: "[name].bundle.js"
    },
    module: {
        loaders:[{
					test:/\.(js|jsx)?$/,
					loader: "babel",
					exclude: /node_modules/,
					query: {
						presets:['react', 'es2015']
					}
				},
				{
					test:/\.json$/,
					loader: "json-loader"
				},
				{
					test: /\.(png|jpg)?$/,
					loader: 'url',
					query: {
						limit: 25000,
						name: "../images/[hash].[ext]"
					}
				},
				{
					test: /\.svg$/,
					loader: 'file-loader',
					query: {
						limit: 25000,
						name: "../images/[hash].[ext]"
					}
				},
				{
					test: /\.css$/,
					loader: ExtractTextPlugin.extract('style-loader',
						'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
				},
				{
					test: /\.woff$/,
					loader: 'url'
				}
		]
    },
	node: {
		Buffer: true	
	},
    postcss: [
        require('postcss-import'),
        require('postcss-custom-properties'),
        require('autoprefixer'),
        require('postcss-nested'),
        require('postcss-custom-media')
    ],
    devtool: "#inline-source-map",
    plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true }),
        // new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.DedupePlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new WebpackNotifierPlugin()
    ]
};

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		publicPath: '/',
		filename: 'index.bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js$|jsx$)/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.css/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html',
		}),
	],
	devServer: {
		historyApiFallback: true,
	},
};

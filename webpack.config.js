const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/html-click/index.js",
	},
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
	},
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new HtmlWebpackPlugin({
			title: "Development",
			template: "public/index.html",
		}), //这个生成一个html文件在dist文件夹里面。
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "public",
					globOptions: {
						ignore: [
							"public/index.html",
						],
					},
				},
			],
		}), 
		//复制public的文件到dist中
		new WebpackManifestPlugin(), //清单文件
	

		new MiniCssExtractPlugin(), //样式文件
	],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
};

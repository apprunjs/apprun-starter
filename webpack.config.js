const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');
const public = 'public';

module.exports = {
  entry: {
    'app': './src/main.tsx',
  },
  output: {
    path: path.resolve(__dirname, public),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /.tsx?$/, loader: 'ts-loader' },
      { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" },
      { test: /\.css$/, use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'] },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, public),
    open: true,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html'}),
    new MiniCssExtractPlugin({ filename: 'style.css' })
  ]
}
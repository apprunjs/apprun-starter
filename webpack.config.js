const path = require('path');
const public = 'public';

module.exports = {
  entry: ['./src/layout/style.scss', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, public),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /.tsx?$/, loader: 'ts-loader' },
      { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" },
      { test: /\.scss$/, use: [
          {
            loader: 'file-loader',
            options: {
              name: 'style.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: path.resolve('fast-sass-loader.js'),
            options: {
              includePaths: ['./node_modules']
            }
          }
        ]
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, public),
    open: true,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  devtool: 'source-map'
}
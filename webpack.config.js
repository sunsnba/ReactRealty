'use strict';
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpackConfig = new htmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

const inputData = require('./data.json');

module.exports = {
  mode: 'development',
    entry: './index.js',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

      },
    ],
  },
  devServer: {
      contentBase: path.join(__dirname, "src"),
      publicPath: "/build/",
      hot: true,
      port: 8082
  },
}
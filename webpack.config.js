const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    index: './src/scripts/index.js',
    verses: './src/scripts/verses.js',
  },
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      chunks: ['index'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/html/verses.html',
      chunks: ['verses'],
      filename: 'verses.html',
    }),
    new Dotenv(),
  ],
};

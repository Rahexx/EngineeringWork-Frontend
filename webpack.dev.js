const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'logIn.html',
      template: './src/pages/logIn.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
      chunks: ['logIn'],
    }),
    new HtmlWebpackPlugin({
      filename: 'signUp.html',
      template: './src/pages/signUp.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
      chunks: ['signUp'],
    }),
    new HtmlWebpackPlugin({
      filename: 'admin.html',
      template: './src/pages/admin.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
      chunks: ['main', 'admin'],
    }),
    new HtmlWebpackPlugin({
      filename: 'listRooms.html',
      template: './src/pages/listRooms.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
      chunks: ['main', 'rooms'],
    }),
    new HtmlWebpackPlugin({
      filename: 'room.html',
      template: './src/pages/room.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'favourite.html',
      template: './src/pages/favourite.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
      chunks: ['main', 'favourite'],
    }),
    new HtmlWebpackPlugin({
      filename: 'account.html',
      template: './src/pages/account.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
      chunks: ['main'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});

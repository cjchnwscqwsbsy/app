const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname,'./src/index.js'),
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({title:'Output Management'}),
  ],
  output: {
    path: path.resolve(__dirname,'build'),
    filename: 'buildle.js'
  }
};

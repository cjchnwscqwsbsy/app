const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app:path.resolve(__dirname,'./src/index.js'),
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({title:'Output Management'}),
  ],
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].[chunkhash].bundle.js',
    publicPath: '/'
  }
};

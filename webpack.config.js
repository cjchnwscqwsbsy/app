const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app:path.resolve(__dirname,'./src/index.js'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname,'./dist'),
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({title:'Output Management'}),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module:{
    rules: [{
      test:/\.css$/,
      use:['style-loader','css-loader']
    },{
      test:/\.(png|svg|jpg|gif|jpeg)/,
      use: ['file-loader']
    }]
  }
};

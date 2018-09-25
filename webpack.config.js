const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill',path.resolve(__dirname,'./src/index.js')],
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      // 指定模板路径、文件名、标题
      template:'./public/index.html',
      filename:'index.html',
      title:'My App',
      favicon:'./public/favicon.ico'
    }),
  ],
  devServer: {
    contentBase:path.resolve(__dirname,'build'),
  },
  output: {
    path: path.resolve(__dirname,'build'),
    filename: '[name].bundle.js',
  },
  module: {
    //配置加载器
    rules: [{
      test:/\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },{
      test:/\.css$/,
      use:[{
        loader: 'style-loader'
      },{
        loader:'css-loader',
        options: {
          importLoaders:1
        }
      },{
        loader: 'postcss-loader',
        options: {
          plugins:() => [require('autoprefixer'),require('precss'),require('postcss-flexbugs-fixes')]
        }
      }],
    },{
      test:[/\.gif$/,/\.jpe?g$/,/\.png$/],
      use: {
        loader:'url-loader',
        options: {
          limit:10000
        }
      },
    },{
      test: /\.(js|tsx|jsx)$/,
      enforce: 'pre',
      exclude: /node_modules/,
      use: 'eslint-loader'
    }]
  }
};

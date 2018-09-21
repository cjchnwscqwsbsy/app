const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname,'./src/index.js'),
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
  output: {
    path: path.resolve(__dirname,'build'),
    filename: 'build.js'
  },
  module: {
    //配置加载器
    rules: [{
      test:/\.js$/,    //配置处理的文件格式(常用正则)
      use: {       //babel的配置参数，也可以放在.babelrc文件中
        loader:'babel-loader',    //加载器名称
        options: {
          presets:['env','react']
        }
      }
    }]
  }
};

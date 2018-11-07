const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill',path.resolve(__dirname,'./src/index.js')],
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      // 指定模板路径、文件名、标题
      template:'./public/index.html',
      filename:'index.html',
      title:'Civilian Economy',
      favicon:path.resolve(__dirname,'./public/favicon.ico')
    })
  ],
  devServer: {
    contentBase:path.resolve(__dirname,'build'),
    port:9000,
    historyApiFallback:{
      historyApiFallback: {
        rewrites: [
          { from: /^\/$/, to: '/' },
          { from: /^\/subpage/, to: '/' },
          { from: /./, to: '/' }
        ]
      }
    }
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
      include:[path.resolve('src')],
      exclude: '/node_modules/',
      use:[
      'style-loader',
      {
        loader:'css-loader',
        options: {
          importLoaders:1
        }
      },{
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: (loader) => [
            require('postcss-import')({ root: loader.resourcePath }),
            require('postcss-cssnext')(),
            require('autoprefixer')(),
            require('cssnano')()
          ]
        }
      }],
    },{
      test:/\.less$/,
      include:[path.resolve('src')],
      exclude: '/node_modules/',
      use:[
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders:1
        }
      },{
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: (loader) => [
            require('postcss-import')({ root: loader.resourcePath }),
            require('postcss-cssnext')(),
            require('autoprefixer')(),
            require('cssnano')()
          ]
        }
      },{
        loader:'less-loader',
        options: {
          importLoaders:1
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
    }]
  }
};

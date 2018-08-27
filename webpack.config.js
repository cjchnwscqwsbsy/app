const path = require('path');

module.exports = {
  entry: {
    app:'./src/index.js',
    print:'./src/print.js'
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].bundle.js'
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

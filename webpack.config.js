var path = require('path');
var fs = require('fs');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
          test: /\.tsx?$/,
          use: [ "ts-loader"]
      },
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    index: path.join(__dirname, 'public/index.html'),
  }
};

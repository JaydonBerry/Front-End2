var webpack = require('webpack');
var path = require('path');


var config = {
  context: __dirname + '/app', 
  entry: {
    app: __dirname + '/app/js/index.js',
  },
  output: {
    path: __dirname + '/app/js',
    filename: 'bundle.js',
  },
    // module: {
    //     loaders: [
    //         { test: /\.css$/, loader: "style-loader!css-loader" }
    //     ]
    // },
  watch: true
};

module.exports = config;


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
  watch: true
};

module.exports = config;

// module.exports = config;

// module.exports = {
//     entry: "./index.js",
//     output: {
//         path: __dirname,
//         filename: "bundle.js"
//     },
//     module: {
//         loaders: [
//             { test: /\.css$/, loader: "style!css" }
//         ]
//     },
//     watch: true
// };


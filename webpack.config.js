var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var definePlugin = webpack.DefinePlugin;

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/',
    filename: 'react-print.js'
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'
    }]
  },
  plugins: [
    new uglifyJsPlugin({ compress: { warnings: false } }),
    new definePlugin({ 'process.env': { NODE_ENV: '"production"' } })
  ]
};

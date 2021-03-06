const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.base'), {
  context: __dirname,

  target: 'node',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'container',
    libraryTarget: 'commonjs2',
  },

  externals: ['vue'],

  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
});

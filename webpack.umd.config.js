const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config');

module.exports = merge(base, {
  entry: './src/index.umd.js',
  target: 'node',
  output: {
    libraryTarget: 'umd',
    filename: 'index.min.js',
  },
});

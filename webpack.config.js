const path = require('path');
const webpack = require('webpack');
module.exports = {
  context: path.resolve(__dirname, 'Learning Notes'),
  entry: {
    app: './example.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
};

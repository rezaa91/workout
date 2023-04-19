const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/presentation/app.js',
  output: {
    path: path.resolve(__dirname, 'dist/presentation'),
    filename: 'workout.[fullhash].js'
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/presentation/index.html'
  })]
}
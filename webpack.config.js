const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  watch: true,
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  output: {
    filename: "index.js",
    path: path.join(__dirname, '/dist'),
  },
  devtool: "source-map",
  devServer: {
    hot: true,
    host: '0.0.0.0',
    contentBase: path.join(__dirname, '/dist'),
    compress: true,
    disableHostCheck: true,
    port: 5000,
    https: true
  },
  module: {
    rules: [
      { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
      { test: /\.tsx?$/, loader: "babel-loader" },
      { test: /\.tsx?$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/public/index.html'
    })
  ]
};

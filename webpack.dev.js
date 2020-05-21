const path = require('path');
const common = require("./webpack.config");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Create a new html file for us

module.exports = merge(common, {
 mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/src/index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
    }
  }),
  new HtmlWebpackPlugin({
    filename: 'about.html',
    template: './app/src/about.html',
    minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
    }
  }),
  new HtmlWebpackPlugin({
    filename: 'contact.html',
    template: './app/src/contact.html',
    minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
    }
  }),
],
  module:{
      rules: [
        {
            test: /\.scss$/,
            use: ['style-loader', //3. Injects styles into DOM
                  'css-loader?url=false',//2. Turns/translate CSS into Common JS
                  'sass-loader'], //1. Turn/Compiles Sass into CSS
        },
      ]
  }
});
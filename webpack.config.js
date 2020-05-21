const HtmlWebpackPlugin = require('html-webpack-plugin'); //Create a new html file for us
const path = require('path');

module.exports = {
  entry: {
    main: './app/src/js/index.js',
    vendor: './app/src/vendor/vendor.js'
  },
  module: {
    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
          }
        },
        
        {
          test: /\.html$/,
          use:["html-loader"]
        },
        {
          test: /\.(svg|png|jpg|gif)$/,
          use: {
            loader: "file-loader",
            options:{
              name: "[name].[hash].[ext]",
              outputPath:"imgs"
            }
          }
        },
      ]
  },
};
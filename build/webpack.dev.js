/*
 * @Author: hackrabbit
 * @Date: 2022-05-16 16:15:53
 * @LastEditors: hackrabbit
 * @LastEditTime: 2022-05-16 17:48:09
 * @Description: 
 */

const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const env = require('../config/dev.env.js')
const webpack = require('webpack')


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: {
          filename: "static/img/[name].[hash:7][ext]",
        }
      },
      {
        test: /\.(jsx|js)$/,
        use: [
          'thread-loader',
          'babel-loader'
        ],
        exclude: /node_modules/,
      }
    ]
  },
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    static: {
      directory: path.join(__dirname, '../public'),
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    })
  ]
})
/*
 * @Author: hackrabbit
 * @Date: 2022-05-16 16:19:04
 * @LastEditors: hackrabbit
 * @LastEditTime: 2022-05-16 17:42:39
 * @Description: 
 */
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
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
        use: ['babel-loader'],
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
    }),
    new CompressionPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor',
      cacheGroups: {
        "echarts.vendor": {
          name: 'echarts.vendor',
          priority: 40,
          test: /[\\/]node_modules[\\/](echarts|zrender)[\\/]/,
          chunks: 'all'
        },
        loadsh: {
          name: 'lodash',
          chunks: 'async',
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          priority: 40
        },
        "async-common": {
          chunks: "async",
          minChunks: 2,
          priority: 30,
          name: 'async-common',
        },
        commons: {
          name: 'commons',
          chunks: "all",
          minChunks: 2,
          priority: 20
        }
      }
    },
    minimizer: [`...`, new CssMinimizerPlugin()],
  }
})

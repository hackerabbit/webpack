/*
 * @Author: hackrabbit
 * @Date: 2022-05-16 11:20:30
 * @LastEditors: hackrabbit
 * @LastEditTime: 2022-05-16 17:34:17
 * @Description: 
 */

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      "@": path.resolve(__dirname, '../src'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
    new ProgressBarPlugin({
      format: `  ${chalk.green.bold(':bar')} ${chalk.green.bold(':percent')} ${chalk.green.bold(':elapsed')}s ${chalk.green.bold(':msg')}`,
    })
  ]
}

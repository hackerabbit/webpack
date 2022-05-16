/*
 * @Author: hackrabbit
 * @Date: 2022-05-16 11:12:31
 * @LastEditors: hackrabbit
 * @LastEditTime: 2022-05-16 11:14:36
 * @Description: 
 */
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
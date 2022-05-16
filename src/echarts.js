/*
 * @Author: hackrabbit
 * @Date: 2022-05-16 16:57:43
 * @LastEditors: hackrabbit
 * @LastEditTime: 2022-05-16 17:01:47
 * @Description: 
 */

import * as echarts from 'echarts'
const myChart = echarts.init(document.getElementById('main'))
const option = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
}

myChart.setOption(option)


/*
 * @Author: hackrabbit
 * @Date: 2022-05-16 11:14:02
 * @LastEditors: hackrabbit
 * @LastEditTime: 2022-05-16 17:37:51
 * @Description: 
 */
import './assets/styles/style.css'
import img from './assets/images/87c01ec7gy1fsnqqpicyqj21kw0w0qid.jpg'
import './assets/styles/blue.scss'

const root = document.querySelector('#root');
let image = new Image();
image.src = img;
image.className = 'img';

root.appendChild(image);

console.log(process.env.NODE_ENV)

//
// let button = document.createElement('button');
// button.innerHTML = 'click me';
// button.onclick = () => {
//   console.log('oh yes!')
// }

// root.appendChild(button);



// console.log('interesting!');

// import './echarts.js';


// function getComponent() {
//   return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
//     const element = document.createElement('div');
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return element;
//   }).catch(err => {
//     console.error("An error occurred while loading the component", err);
//   });
// }

// const button = document.createElement('button');
// button.innerHTML = 'Click me and check the console';
// button.onclick = () => getComponent().then(component => {
//   document.body.appendChild(component);
// });

// document.body.appendChild(button);

import axios from 'axios'
const apiUrl = require('./apiUrl.js')
const envApiObj = {
  development: apiUrl.dev,
  production: apiUrl.master
}
// 区分本地环境和线上环境
// function isLocalEnv () {
//   if (window.location.hostname === 'localhost') {
//     return true
//   }
//   const ipToNum = Number(window.location.hostname.replace(/['.']/g, ''))
//   return ipToNum > 1
// }

const api = envApiObj[process.env.NODE_ENV]
console.log('aaaaaaaaa', api)
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
export default{
  api
}

// if ((process.env.NODE_ENV.match('development')) && window === parent && isLocalEnv) {
//     if(window.localStorage.getItem('hasC'))
// }

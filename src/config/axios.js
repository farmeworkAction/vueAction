import axios from 'axios'
let CancelToken = axios.CancelToken // 取消请求
let cancelFlag = true
// 设置公共部分，请求头和超时时间
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 20000
// 在请求拦截器时
axios.interceptors.request.use(config => {
  if (cancelFlag) {
    cancelFlag = false
  } else {
    cancelToken: new CancelToken ( c => {
      cancel = c
    })
    cancel()
  }
  return config
}, error => {
  return Promise.reject(error)
})
axios.interceptors.response.use(config => {
  cancelFlag = true
  return config
}, error => {

})

export default axios

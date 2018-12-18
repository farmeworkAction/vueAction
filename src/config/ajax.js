/* eslint-disable */
import axios from './axios'

/**
 * 
 * @param {*} url 
 * @param {*} data 当参数为多个时格式为{ params: { type: 'guess' } }
 * @param {*} error 
 */
export function ajaxGet (url, data, error) {
  return new Promise((resolve, reject) => {
    axios.get(url,data).then(res => {
      resolve(res)
    }, err => {
      err = error ? error : err
      console.log(err)
      reject(err);
    })
  })
}

export function ajaxPost (url, data, error) {
  return new Promise((resolve, reject) => {
    axios.post(url, {
      data: data
    }).then(res => {
      resolve(res)
    }, err => {
      err = error ? error : err
      console.log(err)
      reject(err);
    })
  })
}
 /* eslint-enable */

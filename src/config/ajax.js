
import axios from './axios'
import { cnf } from './config'

const METHOD = {
  GET: 'GET',
  POST: 'POST'
}

const genQuery = (queryData = {}) => {
  let ret = ''
  for (var i in queryData) {
    ret += `&${i}=${encodeURIComponent(queryData[i])}`
  }
  return ret.replace(/&/, '?')
}

const http = (method, url, data, type = 'json') => {
  if (!url) return null
  let sendURL = url
  const send = axios.request
  const config = {
    url: sendURL,
    withCredentials: true,
    method
  }
  if (method === METHOD.GET) {
    sendURL += genQuery(data)
    config.url = sendURL
  } else {
    let contentType = ''
    let cfgData = data
    switch (type) {
      case 'json':
        contentType = 'application/json'
        cfgData = JSON.stringify(data || {})
        break
      case 'file':
        contentType = 'multipart/form-data'
        cfgData = new FormData()
        for (var i in data) {
          cfgData.append(i, data[i])
        }
        break
      case 'formData':
        contentType = 'application/x-www-form-urlencoded'
        config.transformRequest = [(requestData) => {
          let ret = ''
          let index = 0
          for (var i in requestData) {
            ret += `${index === 0 ? '' : '&'}${encodeURIComponent(i)}=${encodeURIComponent(requestData[i])}`
            index += 1
          }
          return ret
        }]
        break
      default:
        break
    }
    config.headers['Content-Type'] = contentType
    config.data = cfgData
  }
  return new Promise((resolve, reject) => {
    send(config).then((resp) => {
      const respData = resp.data
      resolve(respData)
    }).catch((err) => {
      reject(err)
    })
  })
}

export default class Ajax {
  static get (url, data) {
    return http(METHOD.GET, `${cnf.url}${url}`, data)
  }

  static post (url, data, type = 'json') {
    return http(METHOD.POST, `${cnf.url}${url}`, data, type)
  }
}

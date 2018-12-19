import { config } from '../config/config'
import { ajaxGet } from '../config/ajax'

// 获取首页默认地址

export const getCityGuess = () => ajaxGet(config.url + '/v1/cities', { params: { type: 'guess' } })

// 获取首页热门城市

export const getHotCity = () => ajaxGet(config.url + '/v1/cities?type=hot')

// 获取首页所有城市

export const getCityGroup = () => ajaxGet(config.url + '/v1/cities?type=group')

// 获取当前城市

export const getCurrentCity = (id) => ajaxGet(config.url + `/v1/cities/${id}`)

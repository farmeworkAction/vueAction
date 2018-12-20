import Ajax from '../config/ajax'

// 获取首页默认地址

export const getCityGuess = () => Ajax.get('/v1/cities', { type: 'guess' })

// 获取首页热门城市

export const getHotCity = () => Ajax.get('/v1/cities', { type: 'hot' })

// 获取首页所有城市

export const getCityGroup = () => Ajax.get('/v1/cities', { type: 'group' })

// 获取当前城市

export const getCurrentCity = (id) => Ajax.get(`/v1/cities/${id}`)

// 搜索地址

export const getPosi = (data) => Ajax.get('/v1/pois', data)

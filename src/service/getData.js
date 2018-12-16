import { config } from '../config/config'
import { ajaxGet, ajaxPost } from '../config/ajax'

/**
 * 获取首页默认地址
 */

export const cityGuess = () => ajaxGet(config.url + '/v1/cities?type=guess')

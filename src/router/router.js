import App from '../app'

const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home')
const index = r => require.ensure([], () => r(require('../page/index/index.vue')), 'index')
const city = r => require.ensure([], () => r(require('../page/city/city.vue')), 'city')
const list = r => require.ensure([], () => r(require('../page/list/list.vue')), 'list')
const test = r => require.ensure([], () => r(require('../page/test/test.vue')), 'test')

export default [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    // 地址为空时跳转home页面
    {
      path: '',
      redirect: '/home'
    },
    // 首页城市列表页
    {
      path: '/home',
      component: home
    },
    // 城市页面选择地址
    {
      path: '/city/:cityid',
      component: city
    },
    // 首页页面（ZH）
    {
      path: '/index',
      component: index
    },
    // 列表页面（ZH）
    {
      path: '/list',
      component: list
    },
    // test页面
    {
      path: '/test',
      component: test
    }
  ]
}]

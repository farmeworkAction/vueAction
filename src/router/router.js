import App from '../App.vue'

const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home')
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
    {
      path: '/test',
      component: test
    }
  ]
}]

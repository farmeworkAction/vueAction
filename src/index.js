import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  // mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

// 将根节点root注入到app.vue组件中
new Vue({
  router
}).$mount('#app')

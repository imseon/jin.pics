/*
 * 根据页面的配置，实例化vue对象
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from 'utils/configRouter'
import App from 'components/app'
import RoutedApp from 'components/routed-app'

/*
 * @routes 页面的路由配置
 * @store 页面的数据仓库
 * @el 根节点选择器
 */
module.exports = function (opts) {
  const { routes, store, el } = opts
  // 如果定义了路由配置，则用routed-app作为根组件
  if (routes) {
    Vue.use(VueRouter)
    configRouter(routes).then((router) => {
      const app = new Vue({
        render: h => h(RoutedApp),
        mounted () {},
        router,
        store
      })
      app.$mount(el || '.app')
    })
  } else { // 否则使用app作为根组件
    const app = new Vue({
      render: h => h(App),
      store
    })
    app.$mount(el || '.app')
  }
}

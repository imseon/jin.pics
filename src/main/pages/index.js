/*
 * 前端页面入口文件
 */

import Vue from 'vue'
import Vuex from 'vuex'
import initVue from 'utils/initVue'
import Index from 'components/index'
import Post from 'components/route-post'
import 'bootstrap/dist/css/bootstrap.css'

/*
 * 引入vuex
 */
Vue.use(Vuex)

/*
 * 定义路由
 */
const routes = [
  { path: '/', name: 'index', component: Index },
  { path: '/posts/:id', name: 'post', component: Post }
]

/*
 * 实例化store
 */
import headNav from 'stores/head-nav'
import headPics from 'stores/head-pics'
import posts from 'stores/posts'
const store = new Vuex.Store({
  modules: {
    headNav,
    headPics,
    posts
  }
})

/*
 * 实例化vue对象，渲染页面
 * @store  vuex的数据仓库
 * @routes  路由配置
 */
initVue({
  store,
  routes
})

/*
 * store数据结构
 * {
 *   nav:{
 *     links:[]
 *   }
 * }
 */

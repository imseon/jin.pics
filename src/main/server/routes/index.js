/*
 * 服务端渲染的路由处理
 */

import Vue from 'vue'
import Vuex from 'vuex'
import Index from 'components/index'
import renderToString from 'utils/renderToString'
import Bem from 'bemcloud-storage'

Vue.use(Vuex)

/*
 * 初始化store仓库
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

// 实例化vue对象
const app = new Vue({
  render: h => h(Index),
  store
})

module.exports = function(router) {
  router.get('/', async(ctx, next) => {
    const query = new Bem.Query('HeadPics')
    let headPics = await query.find();
    headPics = headPics.map(item=>item.toJSON());
    store.commit('headPics/fetch',headPics);
    // 渲染vue对象为html字符串
    let html = await renderToString(app);
    // 向浏览器输出完整的html
    ctx.body = html;
    // 继续执行后面的中间件
    await next();
  });
}

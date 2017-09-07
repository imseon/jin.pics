/*
 * 同步形式的store，设置好state中的值即可
 * namespaced为true，是为了避免store的module之间，getters、mutations、actions发生命名冲突
 */

import initBem from 'utils/initBem'

export default {
  namespaced: true,
  state: {
    // 初始化时，务必要把所有的数据成员做初始化，否则后面数据的更新，将不会触发显示的更新
    list: [],
    current: null,
    page: 1,
    size: 10,
    total: Infinity
  },
  mutations: {
    fetch (state, res) {
      state.list = res
    },
    turn (state, page) {
      state.page = page
    },
    setTotal (state, total) {
      state.total = total
    },
    setCurrent (state, post) {
      state.current = post
    }
  },
  // 浏览器环境才可以使用actions来获取数据，服务端应该用Node.js的方式获取数据后，通过mutations同步的把数据存入到store
  actions: {
    fetch ({ commit, state }, opts) {
      opts = opts || {}
      const Bem = initBem()
      let query = new Bem.Query('Post')
      const page = opts.page || 1
      const tagId = opts.tagId
      if (tagId) {
        const Tag = Bem.Object.extend('Tag')
        const tag = new Tag()
        tag.id = tagId
        query.containedIn('tags', [tag])
      }
      query.include('tags').limit(state.size).skip(state.size * (page - 1)).find().then((res) => {
        res.forEach(item => {
          item.set('tags', item.get('tags').map(tag => tag.toJSON()))
        })
        commit('fetch', res.map(item => item.toJSON()))
        commit('turn', page)
        query = new Bem.Query('Post')
        return query.count()
      }).then(count => {
        commit('setTotal', count)
      })
    },
    fetchPost ({ commit, state }, { id }) {
      const Bem = initBem()
      const Post = Bem.Object.extend('Post')
      const post = new Post()
      post.id = id
      post.fetch({
        include: 'tags'
      }).then((post) => {
        post.set('tags', post.get('tags').map(tag => tag.toJSON()))
        commit('setCurrent', post.toJSON())
      })
    }
  }
}

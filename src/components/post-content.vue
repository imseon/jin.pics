<style lang="scss" scoped>
@import "../main/css/common.scss";
@import "~lightgallery.js/dist/css/lightgallery.css";
@import "~lightgallery.js/dist/css/lg-transitions.css";
.post-content {
    margin: 0.5rem auto;
    padding: 0.5rem 0.2rem;
    text-align: left;
    @include page-width();
    background: white;
    border-radius: 0.06rem;
    box-sizing: border-box;
    img {
        width: 100%;
    }
}
h1 {
    font-size: 0.4rem;
}
.post-content-foot,
.post-content-head {
    padding-top: 0.5rem;
}
.pics-list {
    padding: 0.5rem 0 0;
    li {
        padding: 0 0 0.2rem;
        &:last-child {
            padding-bottom: 0;
            p {
                padding-bottom: 0;
            }
        }
    }
    p {
        padding: 0.1rem 0 0.2rem;
        color: #666;
    }
}
.gallery-item-desc {}
</style>

<template>
<div class="post-content" v-if="post">
  <div>
    <h1>{{post.title}}</h1>
    <p class="post-content-head" v-if="post.head" v-html="post.head"></p>
    <ul class="pics-list">
      <li v-for="pic,i of post.pics" :data-sub-html="`.gallery-item-desc-hidden-${i}`" :data-src="pic.img" :data-thumbnail="pic.img + '!w300'">
        <img :src="pic.img" />
        <p v-if="pic.desc">{{pic.desc}}</p>
        <div :class="`gallery-item-desc-hidden-${i}`">
          <p class="gallery-item-desc">
            {{pic.desc}}
          </p>
        </div>
      </li>
    </ul>
    <p class="post-content-foot" v-if="post.foot" v-html="post.foot"></p>
  </div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  data () {
    return {
      mode: 'gallery'
    }
  },
  props: ['postId'],
  computed: mapState({
    post: state => state.posts.current
  }),
  components: {

  },
  methods: {
    changeMode (mode) {
      if (mode === 'article') {
        const lgElem = document.querySelector('.pics-list')
        const lg = window.lgData[lgElem.getAttribute('lg-uid')]
        if (lg) {
          lg.destroy()
        }
      } else {
        const lgElem = document.querySelector('.pics-list')
        window.lightGallery(lgElem, {
          selector: 'li',
          mode: 'lg-zoom-in',
          exThumbImage: 'data-thumbnail',
          thumbnail: true,
          showThumbByDefault: false
        })
        const ev = new Event('click')
        this.$el.querySelector('li').dispatchEvent(ev)
      }
    }
  },
  mounted () {
    require('lightgallery.js')
    require('lg-thumbnail.js')
    require('lg-zoom.js')
    require('lg-autoplay.js')
    this.$store.dispatch('posts/fetchPost', {
      id: this.postId
    })
    this.$watch('mode', (mode) => {
      this.changeMode(mode)
    })
    this.$watch('post', (post) => {
      if (post) {
        this.changeMode(this.mode)
      }
    })
    // setTimeout(() => {
    //   this.mode = 'gallery'
    // }, 1000)
  }
}
</script>

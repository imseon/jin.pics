<style lang="scss" scoped>
@import "../main/css/common.scss";

.pic-list {
    margin: 0 auto;
    padding: 0.5rem 0;
    @include page-width();
    .pic-list-item:not(:last-child) {
        margin-bottom: 0.3rem;
    }
}
</style>

<template>
<div class="pic-list">
  <PicListItem v-for="item of list" :post-id="item.objectId" :title="item.title" :key="item.objectId" :big-pic="item.bigPic" :small-pics="item.smallPics" :tags="item.tags" />
  <pagination :page="page" :size="size" :total="total" @change="turn" />
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import PicListItem from './pic-list-item'
import pagination from './pagination'

export default {
  props: ['tagId'],
  computed: mapState({
    list: state => state.posts.list,
    page: state => state.posts.page,
    size: state => state.posts.size,
    total: state => state.posts.total
  }),
  components: {
    PicListItem,
    pagination
  },
  methods: {
    turn (page) {
      this.$store.dispatch('posts/fetch', {
        page,
        tagId: this.tagId
      })
    }
  },
  mounted () {
    this.$store.dispatch('posts/fetch', {
      tagId: this.tagId
    })
  }
}
</script>

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
  <PicListItem />
  <PicListItem />
</div>
</template>

<script>
import PicListItem from './pic-list-item'

export default {
  props: [],
  components: {
    PicListItem
  },
  methods: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
@import "../main/css/common.scss";

.big-head {
    position: relative;
}
.head-nav,
.head-search {
    position: absolute;
    z-index: 5;
}
.head-nav {
    top: 10px;
    left: 10px;
}
.head-search {
    left: 50%;
    margin-left: -6rem;
    top: 50%;
    margin-top: -.5rem;
}
</style>

<template>
<div class="big-head">
  <photos-slider />
  <HeadNav />
  <HeadSearch />
</div>
</template>

<script>
import PhotosSlider from './photos-slider'
import HeadNav from './head-nav'
import HeadSearch from './head-search'

export default {
  components: {
    PhotosSlider,
    HeadNav,
    HeadSearch
  },
  methods: {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
@import "../main/css/common.scss";

.head-panel {
    position: relative;
    height: $head-height;
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
    margin-left: -5rem;
    top: 50%;
    margin-top: -.5rem;
}
</style>

<template>
<div class="head-panel">
  <HeadPics />
  <HeadNav />
  <HeadSearch />
</div>
</template>

<script>
import HeadPics from './head-pics'
import HeadNav from './head-nav'
import HeadSearch from './head-search'

export default {
  components: {
    HeadPics,
    HeadNav,
    HeadSearch
  },
  methods: {},
  mounted () {}
}
</script>

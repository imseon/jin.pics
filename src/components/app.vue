<style lang="scss">
@import "../main/css/common.scss";
.app {
    text-align: center;
    -webkit-font-smoothing: antialiased;
    font-size: $font-size;
}
</style>

<template>
<div class="app">
  <index/>
</div>
</template>

<script>
import Index from 'components/index'

export default {
  components: {
    index: Index
  }
}
</script>

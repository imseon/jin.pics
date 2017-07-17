<style lang="scss" scoped>
@import "../main/css/common.scss";

.head-nav {
    height: 1rem;
}
li {
    color: $text-light-color;
    display: inline-block;
    padding-right: 0.2rem;
}
</style>

<template>
<ul class="head-nav">
  <li v-for="link of links">
    <a :href="link.url">{{ link.name }}</a>
  </li>
</ul>
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  computed: mapState({
    links: state => {
      return state.headNav.links
    }
  }),
  components: {},
  methods: {},
  mounted () {
    this.$store.dispatch('headNav/fetch')
  }
}
</script>

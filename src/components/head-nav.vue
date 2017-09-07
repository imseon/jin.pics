<style lang="scss" scoped>
@import "../main/css/common.scss";

.head-nav {
    height: 1rem;
}
li {
    color: $text-light-color;
    display: inline-block;
    padding-right: 0.2rem;
    a {
        &:focus {
            color: $text-light-color;
            text-decoration: none;
        }
        &:hover {
            color: darken($text-light-color,20%);
            text-decoration: none;
        }
    }
}
</style>

<template>
<ul class="head-nav">
  <li v-for="link of links">
    <router-link :to="link.url">{{ link.name }}</router-link>
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

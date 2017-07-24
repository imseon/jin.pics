<style>

</style>

<template>
<div class="route-post">
  <head-panel />
  <post-content :post-id="this.$route.params.id" />
  <site-footer />
</div>
</template>

<script>
import HeadPanel from './head-panel'
import PostContent from './post-content'
import SiteFooter from './site-footer'

export default {
  components: {
    HeadPanel,
    PostContent,
    SiteFooter
  },
  methods: {},
  mounted () {}
}
</script>

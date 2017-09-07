<style>

</style>

<template>
<div class="index">
  <pic-list :tag-id="tagId" />
  <site-footer />
</div>
</template>

<script>
import PicList from './pic-list'
import SiteFooter from './site-footer'

export default {
  components: {
    PicList,
    SiteFooter
  },
  computed: {
    tagId () {
      return this.$route.params.id
    }
  },
  methods: {},
  mounted () {}
}
</script>

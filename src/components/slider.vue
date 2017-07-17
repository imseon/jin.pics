<style>
@import '../assets/plugins/nivo-slider/nivo-slider.css';
</style>
<template>
<div class="slider nivoSlider">
  <slot></slot>
</div>
</template>

<script>
export default {
  props: ['height'],
  data () {
    return {}
  },
  components: {},
  methods: {

  },
  mounted () {
    const $ = window.jQuery = require('jquery')
    const $el = $(this.$el)
    require('assets/plugins/nivo-slider/nivo-slider.js')
    $el.nivoSlider({
      pauseTime: 6000,
      prevText: '',
      nextText: '',
      controlNav: false
    })
  }
}
</script>

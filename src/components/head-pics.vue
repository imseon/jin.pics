<style lang="scss" scoped>
@import "../main/css/common.scss";

.head-pics {
    height: 100%;
    position: relative;
    background: rgba(0,0,0,.6);
}
.loading {
    position: absolute;
    display: block;
    right: 0.2rem;
    bottom: 0.2rem;
    color: $text-light-color;
    background-image: url("../assets/images/loading.gif");
    width: 0.4rem;
    height: 0.4rem;
    background-size: 100%;
}
.slider {
    height: $head-height;
}
</style>
<template>
<div class="head-pics">
  <div v-if="pics.length > 0">
    <slider>
      <img v-for="pic of pics" v-bind:src="pic.url + '!w1000'" />
    </slider>
  </div>
  <div class="loading" v-else></div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import Slider from './slider'

export default {
  components: {
    Slider
  },
  computed: mapState({
    pics: state => state.headPics.pics
  }),
  mounted () {
    this.$store.dispatch('headPics/fetch')
  }
}
</script>

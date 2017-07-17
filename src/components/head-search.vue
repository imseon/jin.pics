<style lang="scss" scoped>
@import "../main/css/common.scss";
$input-height: 0.6rem;

.head-search {
    height: $input-height;
    width: 10rem;
}
.search-input-group {
    position: relative;
}
.input {
    height: $input-height;
    color: white;
    background-color: rgba(0,0,0,.1);
    border-color: $border-color;
    font-size: $font-size * 0.8;
    @include transition(background-color .15s ease-in-out);
    @include placeholder-color(#bfbfbf);
    &:focus {
        background-color: rgba(0,0,0,.3);
        @include box-shadow(none);
        border-color: $border-color;
    }
}
button {
    position: absolute;
    height: 100%;
    right: 0;
    top: 0;
    line-height: 100%;
    display: border-box;
    border: 0 none;
    background-color: rgba(0,0,0,0);
    color: darken(white,8%);
    font-size: 0.3rem;
}
</style>

<template>
<div class="head-search">
  <div class="search-input-group">
    <input v-bind:placeholder="placeholder || '搜搜我们的故事'" class="form-control input" />
    <button class="glyphicon glyphicon-search">
    </button>
  </div>
</div>
</template>

<script>
export default {
  props: ['placeholder'],
  components: {},
  methods: {},
  mounted () {}
}
</script>

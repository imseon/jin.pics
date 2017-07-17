<style lang="scss">
@import "../assets/css/animate.css";
@import "../main/css/common.scss";

.app {
    text-align: center;
    -webkit-font-smoothing: antialiased;
    font-size: $font-size;
    background: #f3d9e2;
}

li,
ul {
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
}
a {
    color: $text-light-color;
    &:hover {
        color: darken($text-light-color,20%);
        text-decoration: none;
    }
}
</style>

<template>
<div class="app">
  <transition enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>

</script>

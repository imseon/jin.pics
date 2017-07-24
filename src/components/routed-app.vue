<style lang="scss">
@import "../assets/css/animate.css";
@import "../main/css/common.scss";
body {
    background: $theme-color-pink;
}
.app {
    text-align: center;
    -webkit-font-smoothing: antialiased;
    font-size: $font-size;
    & > div {
        position: absolute;
        top: 0;
        width: 100%;
        animation-duration: 1s;
        -webkit-animation-duration: 1s;
    }
}

h1,
li,
p,
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
.none {
    display: none;
}
</style>

<template>
<div class="app">
  <transition enter-active-class="animated fadeIn" leave-active-class="none">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>

</script>

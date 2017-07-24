<style lang="scss" scoped>
@import "../main/css/common.scss";
@import "~sprite.scss";

$img-size: 5rem;
$padding: 0.3rem;

.pic-list-item {
    background: #fcfcfc;
    border-radius: 0.06rem;
    padding: $padding;
    text-align: left;
    position: relative;
    img.big {
        width: 5rem;
        height: 5rem;
    }
    h2 {
        position: absolute;
        left: $img-size+1rem;
        top: $padding;
        margin: 0;
        font-size: 0.4rem;
        font-weight: normal;
    }
    .tags {
        position: absolute;
        left: $img-size+1rem;
        top: 0.9rem;
        li {
            padding: 0.07rem 0.14rem;
            font-size: 0.2rem;
            background: $theme-color-blue;
            display: inline-block;
            color: $text-light-color;
            margin-right: 0.07rem;
            border-radius: 0.05rem;
        }
    }
    .thumbs {
        position: absolute;
        left: $img-size+1rem;
        top: 1.5rem;
        height: 3rem;
        overflow: hidden;
        img.small {
            height: 3rem;
        }
        li:not(:last-child) {
            display: inline-block;
            margin-right: 0.07rem;
        }
        .btn-more {
            position: absolute;
            right: $padding;
            top: 0;
            width: 1.8rem;
            height: 3rem;
            background: $theme-color-gray;
            line-height: 3.6rem;
            text-align: center;
            font-size: 0.2rem;
            color: white;
            cursor: pointer;
            i {
                background: url("../assets/images/right-arrow.svg") no-repeat;
                width: 0.7rem;
                height: 0.7rem;
                display: block;
                margin: 0 auto;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -.6rem;
                margin-left: -.35rem;
            }
            a {
                display: block;
                width: 100%;
                height: 100%;
                &:hover {
                    color: white;
                }
            }
            &:hover {
                background: darken($theme-color-gray,10%);
            }
        }
    }
    .bottom {
        position: absolute;
        bottom: $padding;
        left: 0;
        padding: 0 $padding 0 $img-size+1rem;
        width: 100%;
        font-size: 0.16rem;
        color: $text-light-gray-color;
        .post-info {
            color: $text-light-gray-color;
        }
        .views {
            float: right;
        }
    }
}
</style>

<template>
<div class="pic-list-item">
  <img class="big" :src="bigPic" />
  <h2>{{title}}</h2>
  <ul class="tags">
    <li v-for="tag of tags">{{tag.name}}</li>
  </ul>
  <ul class="thumbs">
    <li v-for="pic of smallPics"><img class="small" :src="pic.img || pic" /></li>
    <li><img class="small" :src="smallPics[0].img || smallPics[0]" /></li>
    <li class="btn-more">
      <router-link :to="{ name: 'post', params: {id:postId} }"><i></i> 查看更多</router-link>
    </li>
  </ul>
  <div class="bottom">
    <span class="post-info">posted by jin @2017-07-07 16:35:34</span>
    <span class="views">45,738阅读</span>
  </div>
</div>
</template>

<script>
export default {
  props: ['title', 'bigPic', 'smallPics', 'tags', 'postId'],
  components: {},
  methods: {},
  mounted () {}
}
</script>

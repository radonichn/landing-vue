<template>
  <div class="first-block">
    <div class="wrapper">
      <Header :c="c['header']" />
      <div class="slider-item row align-items-center" v-for="item in c.first" :key="item.id">
        <div class="text col-12 col-md-5 col-xl-5">
          <p class="h3 bold">{{item.title}}</p>
          <p class="h4">{{item.subtitle}}</p>
          <p>{{item.text}}</p>
          <i :class="[icon,'fa-3x']" v-for="icon in item.icons" :key="Math.random()*312+icon"></i>
        </div>
        <div class="img d-none d-md-block col-md-6 col-xl-6">
          <img src="../assets/first-block/slider-image.png" alt="slider-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "FirstBlock",
  components: {
    Header
  },
  props: ["c"]
};
</script>

<style lang="scss" scoped>
.first-block {
  padding: 55px 0;
  background-color: #fcdb00;
  .text {
    margin-right: 60px;
    i {
      &.fab {
        &:not(:last-child) {
          margin-right: 40px;
        }
      }
    }
  }
}
</style>
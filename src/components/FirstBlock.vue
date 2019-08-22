<template>
  <div class="first-block">
    <div class="wrapper">
      <Header />
      <div class="slider-item row align-items-center">
        <div class="text col-12 col-md-5 col-xl-5">
          <p class="h3 bold">Inspire your inspiration</p>
          <p class="h4">Simple to use for your app, products showcase and your inspiration</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit</p>
          <i class="fab fa-apple fa-3x"></i>
          <i class="fab fa-android fa-3x"></i>
          <i class="fab fa-windows fa-3x"></i>
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
  }
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
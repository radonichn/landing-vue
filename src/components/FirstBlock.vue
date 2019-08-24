<template>
  <div class="first-block">
    <div class="wrapper">
      <Header :c="c['header']" />
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in c.first" :key="item.id">
          <div class="slider-item row align-items-center justify-content-between">
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
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
      </swiper>
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
  props: ["c"],
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>

<style lang="scss">
.first-block {
  padding: 55px 0;
  background-color: #fcdb00;
  .text {
    // margin-right: 60px;
    i {
      &.fab {
        &:not(:last-child) {
          margin-right: 40px;
        }
      }
    }
  }
  .slider-item {
    img {
      height: auto;
      width: auto;
      max-width: 100%;
      max-height: 650px;
    }
  }
  .swiper-pagination {
    position: relative;
    margin-top: 50px;
    background-color: transparent;
    .swiper-pagination-bullet {
      background-color: #fff;
      width: 12px;
      height: 12px;
      &:not(.swiper-pagination-bullet-active) {
        opacity: 0.45;
      }
      &.swiper-pagination-bullet-active {
        background-color: #fff;
      }
    }
  }
}
.swiper-pagination {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
}
@media all and (max-width: 767px) {
  .first-block {
    padding: 65px 0;
  }
}
</style>
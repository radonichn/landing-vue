<template>
  <div class="second-block">
    <div class="wrapper">
      <p class="h1 bold">{{c.title}}</p>
      <p class="h5">{{c.subtitle}}</p>
      <div class="row items justify-content-center">
        <div class="col-12 col-md-6 col-xl-4 row" v-for="item in c.cards" :key="item.id">
          <i :class="[item.icon, 'fa-3x', 'col-3', 'd-flex', 'justify-content-center']"></i>
          <div class="textblock col-9">
            <p class="h5 bold">{{item.title}}</p>
            <p>{{item.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondBlock",
  props: ["c"]
};
</script>

<style lang="scss" scoped>
.second-block {
  padding: 120px 0 150px;
  .wrapper {
    > p {
      text-align: center;
      &.h5 {
        color: #313841;
      }
    }
    .items {
      margin-top: 50px;
    }
  }
}
</style>
<template>
  <div id="app">
    <FirstBlock :c="content" />
    <SecondBlock :c="content['second']" />
  </div>
</template>

<script>
import FirstBlock from "./components/FirstBlock.vue";
import SecondBlock from "./components/SecondBlock.vue";
import json from "./assets/content.json";
export default {
  name: "app",
  components: {
    FirstBlock,
    SecondBlock
  },
  data() {
    return {
      content: json
    };
  }
};
</script>

<style>
#app {
  font-family: "PT Sans";
}
.wrapper {
  width: 60%;
  margin: 0 auto;
}
.bold {
  font-family: "PT Bold";
}
@media all and (max-width: 768px) {
  .wrapper {
    width: 80%;
  }
}
@media all and (max-width: 576px) {
  .wrapper {
    width: 90%;
  }
}
</style>

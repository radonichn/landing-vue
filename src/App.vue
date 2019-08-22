<template>
  <div id="app">
    <FirstBlock />
  </div>
</template>

<script>
import FirstBlock from "./components/FirstBlock.vue";
export default {
  name: "app",
  components: {
    FirstBlock
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
</style>

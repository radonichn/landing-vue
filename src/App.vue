<template>
  <div id="app">
    <FirstBlock :c="content" />
    <SecondBlock :c="content['second']" />
    <ThirdBlock :c="content['third']" :sendMail="sendMail" />
  </div>
</template>

<script>
import FirstBlock from "./components/FirstBlock.vue";
import SecondBlock from "./components/SecondBlock.vue";
import ThirdBlock from "./components/ThirdBlock.vue";
import json from "./assets/content.json";
import axios from "axios";
export default {
  name: "app",
  components: {
    FirstBlock,
    SecondBlock,
    ThirdBlock
  },
  data() {
    return {
      content: json
    };
  },
  methods: {
    sendMail() {
      axios
        .post("https://formfarm.im/nikolayradonich@gmail.com", {
          name: "dasdsa",
          email: "dsadsa@dasd.sa"
        })
        .then(res => {
          console.log("Send message successfully", res);
        });
    }
  }
};
</script>

<style lang="scss">
$yellow: #fcdb00;
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
@media all and (max-width: 1024px) {
  .wrapper {
    width: 70%;
  }
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

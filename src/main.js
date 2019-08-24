import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "./assets/fonts/all.min.css";
import "swiper/dist/css/swiper.css";
import "./assets/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");

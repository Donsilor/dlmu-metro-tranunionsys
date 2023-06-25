import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import dataV from "@jiaminghi/data-view";
import * as echarts from "echarts";
import "echarts-gl";
import "echarts-liquidfill";
import router from "./router";
import "./assets/css/common.css";

Vue.use(ElementUI);
Vue.use(dataV);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

// new Vue({
//   render: h => h(App),
// }).$mount('#app');

var EventBus = new Vue();

Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus;
    },
  },
});

Vue.directive("title", {
  inserted: function (el, binding) {
    document.title = el.dataset.title;
  },
});

import MyScrollBoard from "@/components/scroll-board";

Vue.component("my-scroll-board", MyScrollBoard);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

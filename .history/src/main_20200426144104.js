import Vue from "vue";
import App from "./App.vue";
import io from "socket.io-client";

Vue.config.productionTip = false;
const socket = io("http://localhost");
socket.on("connect", function() {});
socket.on("event", function(data) {
  console.log('data: ', data)
});
socket.on("disconnect", function() {});
new Vue({
  render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import io from "socket.io-client";

Vue.config.productionTip = false;
const socket = io("http://localhost:7002");
socket.on("connect", function() {
  console.log('连接成功！')
  const id = socket.id;
  console.log(`socketId: ${id}`);
});
socket.on("event", function(data) {
  console.log('data: ', data)
});
socket.on("disconnect", function() {

});
new Vue({
  render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import io from "socket.io-client";

Vue.config.productionTip = false;
const socket = io("http://localhost:7002/");
socket.on("connect", function() {
  console.log('连接成功！')
  const id = socket.id;
  console.log(`socketId: ${id}`);
  //socket.emit('chat', 'hello world!');

  //socket.send('我是client: 连接成功了！')
  // 监听自身 id 以实现 p2p 通讯
  socket.on(id, msg => {
    console.log('#receive,', msg);
  });
});
socket.on("event", function(data) {
  console.log('data: ', data)
});
socket.on("disconnect", function() {

});

new Vue({
  render: (h) => h(App),
}).$mount("#app");

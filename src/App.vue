<template>
  <div id="app">
    <p>我是App.vue</p>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <alert></alert>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import alert from "./components/alert.vue";

// 方法一：使用bus為this.$bus

// 方法二：
// import { bus } from "./main";

export default {
  name: "App",
  components: {
    HelloWorld,
    alert
  },
  methods: {
    // showAlert(msg) {
    //   alert(msg);
    // },
    // stopAlertBus() {
    //   console.log("stopAlertBus");
    //   this.$bus.$off("alert:message");
    // },
    // startAlertBus() {
    //   console.log("startAlertBus");
    //   this.$bus.$on("alert:message", msg => {
    //     this.showAlert(msg);
    //   });
    // }
  },
  created() {
    // this.$bus.$on("alert:message", msg => {
    //   this.showAlert(msg);
    // });
    // this.$bus.$on("specialEvent", event => {
    //   console.log(event.msg, event.title);
    // });
    // this.$bus.$on("stopAlertBus", () => {
    //   this.stopAlertBus();
    // });
    // this.$bus.$on("startAlertBus", () => {
    //   this.startAlertBus();
    // });
    // this.$bus.$once("onceBus", () => {
    //   console.log("I only execute once");
    // });
  },
  beforeDestroy: function() {
    // [銷毀監聽事件]
    // 最好在组件銷毀前，清除 specialEvent 所有監聽
    // 如果要指定哪個監聽對應方法，就需要傳入第二個參數(對應$on設定的方法)
    // this.$bus.$off("specialEvent");
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

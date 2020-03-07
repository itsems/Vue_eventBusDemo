<template>
  <div id="app">
    <HelloWorld />
    <!-- <alert></alert> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import alert from "./components/alert.vue";

// 方法一：使用bus為this.$bus

// 方法二：
// import { bus } from "./main"

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  
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

<template>
  <div class="box">
    <button @click="doShowAlert(message)">doShowAlerts</button>
    <button @click="stopAlertBus()">stopAlertBus</button>
    <button @click="onceBus()">onceBus</button>

    <alert></alert>
  </div>
</template>

<script>
import alert from "./alert";

export default {
  name: "HelloWorld",
  components: {
    alert
  },
  props: {
    msg: String
  },
  data() {
    return {
      message: "我是寫在helloworld.vue的,訊息",
    };
  },
  methods: {
    doShowAlert(msg) {
      this.$bus.$emit("alert:message", msg);
    },
    stopAlertBus() {
      this.$bus.$emit("stopAlertBus");
    },
    onceBus() {
      this.$bus.$emit("onceBus");
    },
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  padding: 35px 0;
}
button{
  margin-right: 30px;
}
</style>